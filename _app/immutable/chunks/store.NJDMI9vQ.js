import{a5 as M,a6 as O,K as A,H as j,a7 as B,D as L,a8 as E,_ as C,a9 as P,aa as $,ab as T,ac as g,a1 as H,a2 as q,w as v,ad as K,ae as W,af as Z,ag as z,ah as F,ai as G,Z as J,n as Q,p as U,v as S,a as X,d as x,o as N,e as ee,aj as re,Y as ae,h as te,B as ne}from"./runtime.DGGZ6QsV.js";import{b as se}from"./disclose-version._asl7Hgo.js";const ie=new Set,I=new Set;function y(e){var D;var r=this,n=r.ownerDocument,t=e.type,u=((D=e.composedPath)==null?void 0:D.call(e))||[],a=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(a=u[c]||e.target,a!==r){M(e,"currentTarget",{configurable:!0,get(){return a||n}});var m=B,o=L;O(null),A(null);try{for(var s,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+t];if(_!==void 0&&!a.disabled)if(j(_)){var[Y,...k]=_;Y.apply(a,[e,...k])}else _.call(a,e)}catch(p){s?i.push(p):s=p}if(e.cancelBubble||f===r||f===null)break;a=f}if(s){for(let p of i)queueMicrotask(()=>{throw p});throw s}}finally{e.__root=r,delete e.currentTarget,O(m),A(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function fe(e,r){return V(e,r)}function be(e,r){E(),r.intro=r.intro??!1;const n=r.target,t=S,u=v;try{for(var a=C(n);a&&(a.nodeType!==8||a.data!==P);)a=$(a);if(!a)throw T;g(!0),H(a),q();const c=V(e,{...r,anchor:a});if(v===null||v.nodeType!==8||v.data!==K)throw W(),T;return g(!1),c}catch(c){if(c===T)return r.recover===!1&&Z(),E(),z(n),g(!1),fe(e,r);throw c}finally{g(t),H(u)}}const h=new Map;function V(e,{target:r,anchor:n,props:t={},events:u,context:a,intro:c=!0}){E();var b=new Set,d=o=>{for(var s=0;s<o.length;s++){var i=o[s];if(!b.has(i)){b.add(i);var f=oe(i);r.addEventListener(i,y,{passive:f});var _=h.get(i);_===void 0?(document.addEventListener(i,y,{passive:f}),h.set(i,1)):h.set(i,_+1)}}};d(F(ie)),I.add(d);var l=void 0,m=G(()=>{var o=n??r.appendChild(J());return Q(()=>{if(a){U({});var s=x;s.c=a}u&&(t.$$events=u),S&&se(o,null),l=e(o,t)||{},S&&(L.nodes_end=v),a&&X()}),()=>{var f;for(var s of b){r.removeEventListener(s,y);var i=h.get(s);--i===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,i)}I.delete(d),R.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(l,m),l}let R=new WeakMap;function he(e){const r=R.get(e);r&&r()}function ce(e,r,n){if(e==null)return r(void 0),N;const t=ee(()=>e.subscribe(r,n));return t.unsubscribe?()=>t.unsubscribe():t}let w=!1;function ve(e,r,n){const t=n[r]??(n[r]={store:null,source:ae(void 0),unsubscribe:N});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=N;else{var u=!0;t.unsubscribe=ce(e,a=>{u?t.source.v=a:ne(t.source,a)}),u=!1}return te(t.source)}function pe(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ge(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,ve as b,ge as c,be as h,fe as m,pe as s,he as u};