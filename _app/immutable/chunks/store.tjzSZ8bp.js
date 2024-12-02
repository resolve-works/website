import{a6 as P,a7 as H,K as C,H as $,a8 as q,D as L,Z as V,m as K,a9 as W,v as g,aa as Y,ab as N,ac as y,a1 as T,w as b,_ as M,ad as R,ae as D,a2 as Z,af as z,ag as G,ah as J,ai as Q,aj as U,ak as X,n as x,p as ee,a as ae,d as re,o as A,e as te,al as ne,Y as se,h as ie,B as ue}from"./runtime.B_GLMWPb.js";import{b as oe}from"./disclose-version.BBy_RB0B.js";const fe=new Set,I=new Set;function m(e){var k;var a=this,n=a.ownerDocument,t=e.type,u=((k=e.composedPath)==null?void 0:k.call(e))||[],r=u[0]||e.target,l=0,p=e.__root;if(p){var c=u.indexOf(p);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var _=u.indexOf(a);if(_===-1)return;c<=_&&(l=c)}if(r=u[l]||e.target,r!==a){P(e,"currentTarget",{configurable:!0,get(){return r||n}});var S=q,f=L;H(null),C(null);try{for(var s,i=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+t];if(h!==void 0&&!r.disabled)if($(h)){var[B,...F]=h;B.apply(r,[e,...F])}else h.call(r,e)}catch(w){s?i.push(w):s=w}if(e.cancelBubble||d===a||d===null)break;r=d}if(s){for(let w of i)queueMicrotask(()=>{throw w});throw s}}finally{e.__root=a,delete e.currentTarget,H(S),C(f)}}}let o;function de(){o=void 0}function ve(e){let a=null,n=g;var t;if(g){for(a=b,o===void 0&&(o=M(document.head));o!==null&&(o.nodeType!==8||o.data!==Y);)o=N(o);o===null?y(!1):o=T(N(o))}g||(t=document.head.appendChild(V()));try{K(()=>e(t),W)}finally{n&&(y(!0),o=b,T(a))}}const le=["touchstart","touchmove"];function ce(e){return le.includes(e)}function ye(e,a){var n=a==null?"":typeof a=="object"?a+"":a;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function _e(e,a){return j(e,a)}function ge(e,a){R(),a.intro=a.intro??!1;const n=a.target,t=g,u=b;try{for(var r=M(n);r&&(r.nodeType!==8||r.data!==Y);)r=N(r);if(!r)throw D;y(!0),T(r),Z();const l=j(e,{...a,anchor:r});if(b===null||b.nodeType!==8||b.data!==z)throw G(),D;return y(!1),l}catch(l){if(l===D)return a.recover===!1&&J(),R(),Q(n),y(!1),_e(e,a);throw l}finally{y(t),T(u),de()}}const v=new Map;function j(e,{target:a,anchor:n,props:t={},events:u,context:r,intro:l=!0}){R();var p=new Set,c=f=>{for(var s=0;s<f.length;s++){var i=f[s];if(!p.has(i)){p.add(i);var d=ce(i);a.addEventListener(i,m,{passive:d});var h=v.get(i);h===void 0?(document.addEventListener(i,m,{passive:d}),v.set(i,1)):v.set(i,h+1)}}};c(U(fe)),I.add(c);var _=void 0,S=X(()=>{var f=n??a.appendChild(V());return x(()=>{if(r){ee({});var s=re;s.c=r}u&&(t.$$events=u),g&&oe(f,null),_=e(f,t)||{},g&&(L.nodes_end=b),r&&ae()}),()=>{var d;for(var s of p){a.removeEventListener(s,m);var i=v.get(s);--i===0?(document.removeEventListener(s,m),v.delete(s)):v.set(s,i)}I.delete(c),O.delete(_),f!==n&&((d=f.parentNode)==null||d.removeChild(f))}});return O.set(_,S),_}let O=new WeakMap;function we(e){const a=O.get(e);a&&a()}function he(e,a,n){if(e==null)return a(void 0),A;const t=te(()=>e.subscribe(a,n));return t.unsubscribe?()=>t.unsubscribe():t}let E=!1;function me(e,a,n){const t=n[a]??(n[a]={store:null,source:se(void 0),unsubscribe:A});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=A;else{var u=!0;t.unsubscribe=he(e,r=>{u?t.source.v=r:ue(t.source,r)}),u=!1}return ie(t.source)}function Ee(){const e={};return ne(()=>{for(var a in e)e[a].unsubscribe()}),e}function Te(e){var a=E;try{return E=!1,[e(),E]}finally{E=a}}export{ye as a,me as b,Te as c,ge as d,ve as h,_e as m,Ee as s,we as u};