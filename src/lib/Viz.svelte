<script>
	import { onMount, onDestroy } from 'svelte';

	// Props with defaults
	export let gridSize = 30;
	export let circleRadius = 2;

	// Camera/view angles (in radians)
	export let angleX = (60 * Math.PI) / 180; // X-axis rotation (pitch)
	export let angleY = (30 * Math.PI) / 180; // Y-axis rotation (yaw)
	export let angleZ = 0; // Z-axis rotation (roll)

	// Zoom control
	export let zoom = 1.0; // Zoom factor (1.0 = default, > 1 = zoom in, < 1 = zoom out)

	// Perspective control - new prop
	export let perspective = 1.0; // Controls how much circles scale with distance (0 = no scaling, higher values = more dramatic scaling)

	let canvas;
	let canvasContainer;
	let ctx;
	let animationFrameId;
	let width, height;
	let grid = [];
	let resizeObserver;

	// 3D rotation and projection functions
	function rotatePoint(x, y, z) {
		// Apply rotations in Z-X-Y order for proper 3D rotation

		// First rotate around Z axis (roll)
		let x1 = x * Math.cos(angleZ) - y * Math.sin(angleZ);
		let y1 = x * Math.sin(angleZ) + y * Math.cos(angleZ);
		let z1 = z;

		// Then rotate around X axis (pitch)
		let y2 = y1 * Math.cos(angleX) - z1 * Math.sin(angleX);
		let z2 = y1 * Math.sin(angleX) + z1 * Math.cos(angleX);
		let x2 = x1;

		// Finally rotate around Y axis (yaw)
		let x3 = x2 * Math.cos(angleY) - z2 * Math.sin(angleY);
		let z3 = x2 * Math.sin(angleY) + z2 * Math.cos(angleY);
		let y3 = y2;

		return {
			x: x3,
			y: y3,
			z: z3
		};
	}

	// Simple perspective projection
	function projectPoint(x, y, z) {
		// Define a focal length for perspective
		const focalLength = Math.max(width, height);

		// Calculate distance from camera for proper depth calculation
		// This takes into account the camera's position/rotation
		const distanceFromCamera = z;

		// For accurate perspective, we need actual distance from camera, but we don't have it yet
		// This is a simplified calculation that will be improved when we calculate distanceFromCamera
		// in the animation loop
		const depthFactor =
			perspective > 0
				? Math.max(0.1, focalLength / (focalLength + Math.abs(z) * perspective))
				: 1.0; // If perspective is 0, all circles have the same size

		// Apply perspective projection with zoom factor
		const scale = (focalLength / (focalLength + z)) * zoom;

		return {
			x: width / 2 + x * scale,
			y: height / 2 + y * scale,
			z: z,
			depthFactor: depthFactor // Include depth factor for radius scaling
		};
	}

	// Initialize grid in 3D space
	function initGrid() {
		grid = [];

		// Calculate grid spacing based on current dimensions
		const spacing = Math.min(width, height) / gridSize;

		// Calculate the grid center offset to center the grid
		const gridWidth = spacing * (gridSize - 1);
		const offsetX = -gridWidth / 2;
		const offsetY = -gridWidth / 2;

		// Create a 2D array to preserve grid structure
		for (let y = 0; y < gridSize; y++) {
			const row = [];
			for (let x = 0; x < gridSize; x++) {
				// Store original position in 3D space (centered around origin)
				const origX = x * spacing + offsetX;
				const origY = y * spacing + offsetY;
				const origZ = 0;

				// Initial projection (no wave motion yet)
				const rotated = rotatePoint(origX, origY, origZ);
				const projected = projectPoint(rotated.x, rotated.y, rotated.z);

				row.push({
					// Store original grid coordinates (before any transformation)
					origX: origX,
					origY: origY,
					origZ: origZ,

					// Current 3D position (after rotation)
					x3D: rotated.x,
					y3D: rotated.y,
					z3D: rotated.z,

					// Projected 2D position (for rendering)
					x: projected.x,
					y: projected.y,

					color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
					pulseOffset: Math.random() * Math.PI * 2,
					waveOffset: Math.random() * Math.PI * 2, // Offset for up/down motion
					waveFrequency: 0.2 + Math.random() * 0.3 // Slightly different frequency for each point
				});
			}
			grid.push(row);
		}
	}

	// Animation loop
	function animate(timestamp) {
		ctx.clearRect(0, 0, width, height);

		// Update circle positions based on wave animation
		const time = timestamp * 0.0003; // Convert to seconds
		const waveAmplitude = 15; // Height of the wave motion

		// Create a flat list for rendering circles
		const flattenedGrid = [];

		// Calculate camera position in 3D space (needed for accurate depth calculations)
		// For this simple visualization, we'll treat the camera as being at (0,0,-focalLength) in view space
		// after all rotations have been applied
		const focalLength = Math.max(width, height);
		const cameraZ = -focalLength;

		// Update all circle positions with the wave motion
		for (let y = 0; y < gridSize; y++) {
			for (let x = 0; x < gridSize; x++) {
				const circle = grid[y][x];

				// Calculate wave offset (makes points move up and down)
				const waveOffset =
					Math.sin(time * circle.waveFrequency + circle.waveOffset) * waveAmplitude;

				// Apply wave offset to the original Z coordinate (before any rotation)
				const wavePosX = circle.origX;
				const wavePosY = circle.origY;
				const wavePosZ = circle.origZ + waveOffset; // Only Z changes with the wave

				// Apply rotation to the position with wave offset
				const rotated = rotatePoint(wavePosX, wavePosY, wavePosZ);

				// Save the rotated coordinates
				circle.x3D = rotated.x;
				circle.y3D = rotated.y;
				circle.z3D = rotated.z;

				// Calculate true distance from camera (this is what determines perspective)
				// This properly accounts for the 3D rotation
				circle.distanceFromCamera = Math.sqrt(
					Math.pow(circle.x3D, 2) + Math.pow(circle.y3D, 2) + Math.pow(circle.z3D - cameraZ, 2)
				);

				// Project to 2D
				const projected = projectPoint(rotated.x, rotated.y, rotated.z);
				circle.x = projected.x;
				circle.y = projected.y;
				circle.depthFactor = projected.depthFactor;

				flattenedGrid.push(circle);
			}
		}

		// Draw connecting lines first (so they appear behind circles)
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
		ctx.lineWidth = 0.5;

		// Connect horizontally
		for (let y = 0; y < gridSize; y++) {
			for (let x = 0; x < gridSize - 1; x++) {
				const circle1 = grid[y][x];
				const circle2 = grid[y][x + 1];

				ctx.beginPath();
				ctx.moveTo(circle1.x, circle1.y);
				ctx.lineTo(circle2.x, circle2.y);
				ctx.stroke();
			}
		}

		// Connect vertically
		for (let x = 0; x < gridSize; x++) {
			for (let y = 0; y < gridSize - 1; y++) {
				const circle1 = grid[y][x];
				const circle2 = grid[y + 1][x];

				ctx.beginPath();
				ctx.moveTo(circle1.x, circle1.y);
				ctx.lineTo(circle2.x, circle2.y);
				ctx.stroke();
			}
		}

		// Sort by actual distance from camera for proper depth rendering
		flattenedGrid.sort((a, b) => b.distanceFromCamera - a.distanceFromCamera);

		// Draw circles with proper perspective (back to front)
		flattenedGrid.forEach((circle) => {
			// We can either keep or remove the pulse animation
			// For consistent sizing based only on perspective, remove the pulse variable from the calculation
			// const pulse = Math.sin(timestamp * 0.001 + circle.pulseOffset) * 0.5 + 1.5;

			// Apply depth factor to circle radius for perspective effect
			// Using only depth factor without the pulse animation for consistent sizing
			const perspectiveRadius = circleRadius * circle.depthFactor;

			ctx.beginPath();
			ctx.arc(circle.x, circle.y, perspectiveRadius, 0, Math.PI * 2);

			// Also adjust opacity based on depth for enhanced perspective
			const depthOpacity = Math.min(1, circle.depthFactor);
			const originalColor = circle.color.replace(/[\d.]+\)$/, ''); // Remove the opacity value
			ctx.fillStyle = `${originalColor}${depthOpacity})`;

			ctx.fill();
		});

		animationFrameId = requestAnimationFrame(animate);
	}

	// Handle canvas resizing
	function resizeCanvas() {
		if (!canvasContainer || !canvas) return;

		// Get the current dimensions of the container
		const rect = canvasContainer.getBoundingClientRect();
		width = rect.width;
		height = rect.height;

		// Update canvas dimensions
		canvas.width = width;
		canvas.height = height;

		// Reinitialize grid with new dimensions
		initGrid();
	}

	// Watch for changes in props to update the grid
	$: if (
		width &&
		height &&
		(zoom !== undefined ||
			angleX !== undefined ||
			angleY !== undefined ||
			angleZ !== undefined ||
			perspective !== undefined)
	) {
		// If the grid is already initialized and parameters change, reinitialize
		if (grid.length > 0) {
			initGrid();
		}
	}

	onMount(() => {
		// Initialize canvas
		ctx = canvas.getContext('2d');

		// Setup resize observer for responsive canvas
		resizeObserver = new ResizeObserver(resizeCanvas);
		resizeObserver.observe(canvasContainer);

		// Initial setup
		resizeCanvas();

		// Start animation
		animationFrameId = requestAnimationFrame(animate);

		return () => {
			// Cleanup when component is destroyed
			cancelAnimationFrame(animationFrameId);
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
		};
	});

	onDestroy(() => {
		// Ensure animation loop is stopped
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
		}

		// Disconnect resize observer
		if (resizeObserver) {
			resizeObserver.disconnect();
		}
	});
</script>

<div class="canvas-container" bind:this={canvasContainer}>
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.canvas-container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	canvas {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
