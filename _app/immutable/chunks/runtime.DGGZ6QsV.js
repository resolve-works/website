var Dt=Array.isArray,Ot=Array.from,kt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,$n=Object.getOwnPropertyDescriptors,Nt=Object.prototype,It=Array.prototype,Zn=Object.getPrototypeOf;const bt=()=>{};function Pt(n){return n()}function Wn(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,dn=4,M=8,en=16,T=32,Z=64,Q=128,D=256,V=512,h=1024,x=2048,j=4096,b=8192,P=16384,zn=32768,yn=65536,Ct=1<<17,Jn=1<<19,En=1<<20,cn=Symbol("$state"),Ft=Symbol("legacy props");function wn(n){return n===this.v}function Qn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!Qn(n,this.v)}function Xn(n){throw new Error("effect_in_teardown")}function nt(){throw new Error("effect_in_unowned_derived")}function tt(n){throw new Error("effect_orphan")}function rt(){throw new Error("effect_update_depth_exceeded")}function qt(){throw new Error("hydration_failed")}function Lt(n){throw new Error("props_invalid_value")}function Yt(){throw new Error("state_descriptors_fixed")}function Mt(){throw new Error("state_prototype_fixed")}function et(){throw new Error("state_unsafe_local_read")}function lt(){throw new Error("state_unsafe_mutation")}let W=!1;function jt(){W=!0}function ln(n){return{f:0,v:n,reactions:null,equals:wn,version:0}}function Ut(n){return Tn(ln(n))}function st(n,t=!1){var e;const r=ln(n);return t||(r.equals=mn),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Ht(n,t=!1){return Tn(st(n,t))}function Tn(n){return o!==null&&o.f&E&&(m===null?wt([n]):m.push(n)),n}function Bt(n,t){return o!==null&&an()&&o.f&(E|en)&&(m===null||!m.includes(n))&&lt(),ut(n,t)}function ut(n,t){return n.equals(t)||(n.v=t,n.version=Un(),gn(n,x),an()&&a!==null&&a.f&h&&!(a.f&T)&&(v!==null&&v.includes(n)?(g(a,x),J(a)):A===null?mt([n]):A.push(n))),t}function gn(n,t){var r=n.reactions;if(r!==null)for(var e=an(),l=r.length,s=0;s<l;s++){var u=r[s],i=u.f;i&x||!e&&u===a||(g(u,t),i&(h|D)&&(i&E?gn(u,j):J(u)))}}const Vt=1,Gt=2,Kt=4,$t=8,Zt=16,Wt=1,zt=2,at="[",ot="[!",it="]",An={},Jt=Symbol();function xn(n){console.warn("hydration_mismatch")}let S=!1;function Qt(n){S=n}let w;function q(n){if(n===null)throw xn(),An;return w=n}function Xt(){return q(O(w))}function nr(n){if(S){if(O(w)!==null)throw xn(),An;w=n}}function tr(n=1){if(S){for(var t=n,r=w;t--;)r=O(r);w=r}}function rr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===it){if(n===0)return t;n-=1}else(r===at||r===ot)&&(n+=1)}var e=O(t);t.remove(),t=e}}var vn,Rn,Sn;function er(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;Rn=_n(t,"firstChild").get,Sn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function nn(n){return Rn.call(n)}function O(n){return Sn.call(n)}function lr(n,t){if(!S)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),q(e),e}return q(r),r}function sr(n,t){if(!S){var r=nn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function ur(n,t=1,r=!1){let e=S?w:n;for(var l;t--;)l=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=X();return e===null?l==null||l.after(u):e.before(u),q(u),u}return q(e),e}function ar(n){n.textContent=""}function ft(n){var t=E|x;a===null?t|=D:a.f|=En;var r=o!==null&&o.f&E?o:null;const e={children:null,ctx:f,deps:null,equals:wn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function or(n){const t=ft(n);return t.equals=mn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?sn(e):F(e)}}}function _t(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function On(n){var t,r=a;$(_t(n));try{Dn(n),t=Hn(n)}finally{$(r)}return t}function kn(n){var t=On(n),r=(k||n.f&D)&&n.deps!==null?j:h;g(n,r),n.equals(t)||(n.v=t,n.version=Un())}function sn(n){Dn(n),Y(n,0),g(n,P),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Nn(n){a===null&&o===null&&tt(),o!==null&&o.f&D&&nt(),un&&Xn()}function ct(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function C(n,t,r,e=!0){var l=(n&Z)!==0,s=a,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{pn(!0),z(u),u.f|=zn}catch(_){throw F(u),_}finally{pn(i)}}else t!==null&&J(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&En)===0;if(!p&&!l&&e&&(s!==null&&ct(u,s),o!==null&&o.f&E)){var d=o;(d.children??(d.children=[])).push(u)}return u}function ir(n){const t=C(M,null,!1);return g(t,h),t.teardown=n,t}function fr(n){Nn();var t=a!==null&&(a.f&T)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:a,reaction:o})}else{var e=In(n);return e}}function _r(n){return Nn(),vt(n)}function cr(n){const t=C(Z,n,!0);return()=>{F(t)}}function In(n){return C(dn,n,!1)}function vt(n){return C(M,n,!0)}function vr(n){return pt(n)}function pt(n,t=0){return C(M|en|t,n,!0)}function pr(n,t=!0){return C(M|T,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=un,e=o;hn(!0),K(null);try{t.call(null)}finally{hn(r),K(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function Cn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function ht(n){for(var t=n.first;t!==null;){var r=t.next;t.f&T||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&Jn)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var s=e===l?null:O(e);e.remove(),e=s}r=!0}Cn(n,t&&!r),Pn(n),Y(n,0),g(n,P);var u=n.transitions;if(u!==null)for(const p of u)p.stop();bn(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function hr(n,t){var r=[];qn(n,r,!0),dt(r,()=>{F(n),t&&t()})}function dt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function qn(n,t,r){if(!(n.f&b)){if(n.f^=b,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var l=e.next,s=(e.f&yn)!==0||(e.f&T)!==0;qn(e,t,s?r:!1),e=l}}}function dr(n){Ln(n,!0)}function Ln(n,t){if(n.f&b){U(n)&&z(n),n.f^=b;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&yn)!==0||(r.f&T)!==0;Ln(r,l?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let G=!1,tn=[];function Yn(){G=!1;const n=tn.slice();tn=[],Wn(n)}function yr(n){G||(G=!0,queueMicrotask(Yn)),tn.push(n)}function yt(){G&&Yn()}const Mn=0,Et=1;let H=!1,B=Mn,L=!1,N=!1,un=!1;function pn(n){N=n}function hn(n){un=n}let R=[],I=0;let o=null;function K(n){o=n}let a=null;function $(n){a=n}let m=null;function wt(n){m=n}let v=null,y=0,A=null;function mt(n){A=n}let jn=0,k=!1,f=null;function Un(){return++jn}function an(){return!W||f!==null&&f.l===null}function U(n){var u,i;var t=n.f;if(t&x)return!0;if(t&j){var r=n.deps,e=(t&D)!==0;if(r!==null){var l;if(t&V){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(n);n.f^=V}for(l=0;l<r.length;l++){var s=r[l];if(U(s)&&kn(s),e&&a!==null&&!k&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||g(n,h)}return!1}function Tt(n,t){for(var r=t;r!==null;){if(r.f&Q)try{r.fn(n);return}catch{r.f^=Q}r=r.parent}throw H=!1,n}function gt(n){return(n.f&P)===0&&(n.parent===null||(n.parent.f&Q)===0)}function on(n,t,r,e){if(H){if(r===null&&(H=!1),gt(t))throw n;return}r!==null&&(H=!0);{Tt(n,t);return}}function Hn(n){var fn;var t=v,r=y,e=A,l=o,s=k,u=m,i=f,p=n.f;v=null,y=0,A=null,o=p&(T|Z)?null:n,k=!N&&(p&D)!==0,m=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else n.deps=_=v;if(!k)for(c=y;c<_.length;c++)((fn=_[c]).reactions??(fn.reactions=[])).push(n)}else _!==null&&y<_.length&&(Y(n,y),_.length=y);return d}finally{v=t,y=r,A=e,o=l,k=s,m=u,f=i}}function At(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&E&&(v===null||!v.includes(t))&&(g(t,j),t.f&(D|V)||(t.f^=V),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)At(n,r[e])}function z(n){var t=n.f;if(!(t&P)){g(n,h);var r=a,e=f;a=n;try{t&en?ht(n):Cn(n),Pn(n),bn(n);var l=Hn(n);n.teardown=typeof l=="function"?l:null,n.version=jn}catch(s){on(s,n,r,e||n.ctx)}finally{a=r}}}function Bn(){I>1e3&&(I=0,rt()),I++}function Vn(n){var t=n.length;if(t!==0){Bn();var r=N;N=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var s=[];Gn(l,s),xt(s)}}finally{N=r}}}function xt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(P|b)))try{U(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}catch(l){on(l,e,null,e.ctx)}}}function Rt(){if(L=!1,I>1001)return;const n=R;R=[],Vn(n),L||(I=0)}function J(n){B===Mn&&(L||(L=!0,queueMicrotask(Rt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|T)){if(!(r&h))return;t.f^=h}}R.push(t)}function Gn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,s=(l&T)!==0,u=s&&(l&h)!==0,i=r.next;if(!u&&!(l&b))if(l&M){if(s)r.f^=h;else try{U(r)&&z(r)}catch(c){on(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&dn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Gn(p,t)}function Kn(n){var t=B,r=R;try{Bn();const l=[];B=Et,R=l,L=!1,Vn(r);var e=n==null?void 0:n();return yt(),(R.length>0||l.length>0)&&Kn(),I=0,e}finally{B=t,R=r}}async function Er(){await Promise.resolve(),Kn()}function wr(n){var _;var t=n.f,r=(t&E)!==0;if(r&&t&P){var e=On(n);return sn(n),e}if(o!==null){m!==null&&m.includes(n)&&et();var l=o.deps;v===null&&l!==null&&l[y]===n?y++:v===null?v=[n]:v.push(n),A!==null&&a!==null&&a.f&h&&!(a.f&T)&&A.includes(n)&&(g(a,x),J(a))}else if(r&&n.deps===null)for(var s=n,u=s.parent,i=s;u!==null;)if(u.f&E){var p=u;i=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(s=n,U(s)&&kn(s)),n.v}function mr(n){const t=o;try{return o=null,n()}finally{o=t}}const St=~(x|j|h);function g(n,t){n.f=n.f&St|t}function Tr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:ln(!1)})}function gr(n){const t=f;if(t!==null){const u=t.e;if(u!==null){var r=a,e=o;t.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];$(s.effect),K(s.reaction),In(s.fn)}}finally{$(r),K(e)}}f=t.p,t.m=!0}return{}}function Ar(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$n(r);for(let l in e){const s=e[l].get;if(s)try{s.call(n)}catch{}}}}}export{Wt as $,Yt as A,Bt as B,_n as C,a as D,yn as E,Mt as F,Zn as G,Dt as H,Lt as I,T as J,$ as K,Ct as L,W as M,$t as N,Ft as O,Gt as P,or as Q,Z as R,cn as S,Kt as T,Jt as U,mn as V,Vt as W,Zt as X,st as Y,X as Z,nn as _,gr as a,zt as a0,q as a1,Xt as a2,tr as a3,Ht as a4,kt as a5,K as a6,o as a7,er as a8,at as a9,O as aa,An as ab,Qt as ac,it as ad,xn as ae,qt as af,ar as ag,Ot as ah,cr as ai,ir as aj,ot as ak,rr as al,dr as am,hr as an,In as ao,vt as ap,yr as aq,Kn as ar,Er as as,Ut as at,Qn as au,fr as b,lr as c,f as d,mr as e,sr as f,Wn as g,wr as h,Pt as i,Ar as j,ft as k,jt as l,pt as m,pr as n,bt as o,Tr as p,F as q,nr as r,ur as s,vr as t,_r as u,S as v,w,Nt as x,It as y,ln as z};