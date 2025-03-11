import{a as F,t as I}from"../chunks/disclose-version.CHtIVP3N.js";import"../chunks/legacy.rrb2gyiy.js";import{p as Q,g as t,ad as tt,ae as et,l as at,G as D,af as B,m as X,n as Y,ag as O,h as R,k as U,$ as ot,s as S,o as st}from"../chunks/runtime.VwgkLO0A.js";import{h as rt}from"../chunks/render.CkCR2CG5.js";import{p as k,s as nt}from"../chunks/props.WeKNslMX.js";import{I as it}from"../chunks/InputGroup.BlfogrnS.js";import{S as L}from"../chunks/Section.B9A6vuNh.js";import{N as lt,H as ct,S as ht}from"../chunks/Split.BNvjriBQ.js";import{b as V}from"../chunks/this.wX5NKeXh.js";import{i as dt}from"../chunks/lifecycle.CqQ9mvJ0.js";import{o as vt,a as ft}from"../chunks/index-client.Ccftb_QR.js";var mt=I('<div class="canvas-container svelte-b7jxa4"><canvas class="svelte-b7jxa4"></canvas></div>');function pt(G,m){Q(m,!1);let h=k(m,"gridSize",8,30),Z=k(m,"circleRadius",8,2),y=k(m,"angleX",24,()=>60*Math.PI/180),M=k(m,"angleY",24,()=>30*Math.PI/180),z=k(m,"angleZ",8,0),p=k(m,"zoom",8,1),$=k(m,"perspective",8,1),r=O(),v=O(),s,b,i=O(),l=O(),f=O([]),P;function T(n,x,w){let d=n*Math.cos(z())-x*Math.sin(z()),_=n*Math.sin(z())+x*Math.cos(z()),g=w,a=_*Math.cos(y())-g*Math.sin(y()),o=_*Math.sin(y())+g*Math.cos(y()),e=d,c=e*Math.cos(M())-o*Math.sin(M()),u=e*Math.sin(M())+o*Math.cos(M());return{x:c,y:a,z:u}}function q(n,x,w){const d=Math.max(t(i),t(l)),_=$()>0?Math.max(.1,d/(d+Math.abs(w)*$())):1,g=d/(d+w)*p();return{x:t(i)/2+n*g,y:t(l)/2+x*g,z:w,depthFactor:_}}function W(){D(f,[]);const n=Math.min(t(i),t(l))/h(),x=n*(h()-1),w=-x/2,d=-x/2;for(let _=0;_<h();(_+=1)-1){const g=[];for(let a=0;a<h();(a+=1)-1){const o=a*n+w,e=_*n+d,c=0,u=T(o,e,c),C=q(u.x,u.y,u.z);g.push({origX:o,origY:e,origZ:c,x3D:u.x,y3D:u.y,z3D:u.z,x:C.x,y:C.y,color:`rgba(255, 255, 255, ${Math.random()*.5+.5})`,pulseOffset:Math.random()*Math.PI*2,waveOffset:Math.random()*Math.PI*2,waveFrequency:.2+Math.random()*.3})}t(f).push(g)}}function H(n){s.clearRect(0,0,t(i),t(l));const x=n*3e-4,w=15,d=[],g=-Math.max(t(i),t(l));for(let a=0;a<h();(a+=1)-1)for(let o=0;o<h();(o+=1)-1){const e=t(f)[a][o],c=Math.sin(x*e.waveFrequency+e.waveOffset)*w,u=e.origX,C=e.origY,K=e.origZ+c,j=T(u,C,K);e.x3D=j.x,e.y3D=j.y,e.z3D=j.z,e.distanceFromCamera=Math.sqrt(Math.pow(e.x3D,2)+Math.pow(e.y3D,2)+Math.pow(e.z3D-g,2));const E=q(j.x,j.y,j.z);e.x=E.x,e.y=E.y,e.depthFactor=E.depthFactor,d.push(e)}s.strokeStyle="rgba(255, 255, 255, 0.1)",s.lineWidth=.5;for(let a=0;a<h();(a+=1)-1)for(let o=0;o<h()-1;(o+=1)-1){const e=t(f)[a][o],c=t(f)[a][o+1];s.beginPath(),s.moveTo(e.x,e.y),s.lineTo(c.x,c.y),s.stroke()}for(let a=0;a<h();(a+=1)-1)for(let o=0;o<h()-1;(o+=1)-1){const e=t(f)[o][a],c=t(f)[o+1][a];s.beginPath(),s.moveTo(e.x,e.y),s.lineTo(c.x,c.y),s.stroke()}d.sort((a,o)=>o.distanceFromCamera-a.distanceFromCamera),d.forEach(a=>{const o=Z()*a.depthFactor;s.beginPath(),s.arc(a.x,a.y,o,0,Math.PI*2);const e=Math.min(1,a.depthFactor),c=a.color.replace(/[\d.]+\)$/,"");s.fillStyle=`${c}${e})`,s.fill()}),b=requestAnimationFrame(H)}function N(){if(!t(v)||!t(r))return;const n=t(v).getBoundingClientRect();D(i,n.width),D(l,n.height),B(r,t(r).width=t(i)),B(r,t(r).height=t(l)),W()}vt(()=>(s=t(r).getContext("2d"),P=new ResizeObserver(N),P.observe(t(v)),N(),b=requestAnimationFrame(H),()=>{cancelAnimationFrame(b),P&&P.disconnect()})),ft(()=>{b&&cancelAnimationFrame(b),P&&P.disconnect()}),tt(()=>(t(i),t(l),R(p()),R(y()),R(M()),R(z()),R($()),t(f)),()=>{t(i)&&t(l)&&(p()!==void 0||y()!==void 0||M()!==void 0||z()!==void 0||$()!==void 0)&&t(f).length>0&&W()}),et(),dt();var A=mt(),J=X(A);V(J,n=>D(r,n),()=>t(r)),Y(A),V(A,n=>D(v,n),()=>t(v)),F(G,A),at()}var gt=I('<a class="button big secondary" href="mailto:johan@resolve.works">Contact Us</a>'),ut=I('<div class="viz-container svelte-1324tyf"><div class="viz svelte-1324tyf"><!></div></div> <div class="gradient svelte-1324tyf"></div> <div class="hero-container svelte-1324tyf"><!> <!></div>',1),yt=I('<h2 class="svelte-1324tyf">Empower humans through technology</h2>'),Mt=I('<p class="features svelte-1324tyf">Consultancy and tooling for research organizations</p>'),xt=I(`<div><!> <p class="svelte-1324tyf">Our vision is for technology to empower humans. Empower them to make sense of the void,
			empower them to find answers, and empower them to dare to ask questions.</p> <p class="svelte-1324tyf">Will you explore with us? <a href="mailto:johan@resolve.works">Contact us</a>.</p> <br></div>`),wt=I('<div><h3 class="svelte-1324tyf">Projects</h3> <div class="project svelte-1324tyf"><div class="logo svelte-1324tyf"><div class="placeholder svelte-1324tyf"><h4 class="svelte-1324tyf">Insight</h4></div></div> <div class="text"><h4 class="svelte-1324tyf">Insight</h4> <p class="url svelte-1324tyf"><a href="/projects/insight">https://resolve.works/projects/insight</a></p> <p class="svelte-1324tyf">Insight is the knowledge-base you build with your colleagues.</p></div></div></div>'),_t=I("<!> <!> <!> <!>",1);function Rt(G){const m={angleX:-.35*Math.PI,angleY:-.3*Math.PI,angleZ:-.3*Math.PI,zoom:3.5,perspective:10};var h=_t();rt(p=>{ot.title="Resolve"});var Z=U(h);lt(Z,{class:"dark"});var y=S(Z,2);L(y,{class:"hero wide dark",children:(p,$)=>{var r=ut(),v=U(r),s=X(v),b=X(s);pt(b,nt(m)),Y(s),Y(v);var i=S(v,4),l=X(i);ct(l,{heading:"Resolve",paragraph:"Information technology professionals with a vision."});var f=S(l,2);it(f,{children:(P,T)=>{var q=gt();F(P,q)},$$slots:{default:!0}}),Y(i),F(p,r)},$$slots:{default:!0}});var M=S(y,2);L(M,{class:"white border-top",children:(p,$)=>{var r=xt(),v=X(r);ht(v,{left:i=>{var l=yt();F(i,l)},right:i=>{var l=Mt();F(i,l)},$$slots:{left:!0,right:!0}}),st(6),Y(r),F(p,r)},$$slots:{default:!0}});var z=S(M,2);L(z,{children:(p,$)=>{var r=wt();F(p,r)},$$slots:{default:!0}}),F(G,h)}export{Rt as component};
