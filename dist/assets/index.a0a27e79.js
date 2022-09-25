(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const fl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cl=_a(fl);function Ao(e){return!!e||e===""}function mr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ue(r)?ml(r):mr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ue(e))return e;if(te(e))return e}}const ul=/;(?![^(]*\))/g,dl=/:(.+)/;function ml(e){const t={};return e.split(ul).forEach(n=>{if(n){const r=n.split(dl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function mn(e){let t="";if(ue(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=mn(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function pl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=In(e[r],t[r]);return n}function In(e,t){if(e===t)return!0;let n=li(e),r=li(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=pn(e),r=pn(t),n||r)return e===t;if(n=D(e),r=D(t),n||r)return n&&r?pl(e,t):!1;if(n=te(e),r=te(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!In(e[o],t[o]))return!1}}return String(e)===String(t)}function xa(e,t){return e.findIndex(n=>In(n,t))}const en=e=>ue(e)?e:e==null?"":D(e)||te(e)&&(e.toString===Oo||!B(e.toString))?JSON.stringify(e,Co,2):String(e),Co=(e,t)=>t&&t.__v_isRef?Co(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Vt(t)?{[`Set(${t.size})`]:[...t.values()]}:te(t)&&!D(t)&&!To(t)?String(t):t,ee={},jt=[],Re=()=>{},hl=()=>!1,gl=/^on[^a-z]/,pr=e=>gl.test(e),wa=e=>e.startsWith("onUpdate:"),pe=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,Y=(e,t)=>vl.call(e,t),D=Array.isArray,$t=e=>Pn(e)==="[object Map]",Vt=e=>Pn(e)==="[object Set]",li=e=>Pn(e)==="[object Date]",B=e=>typeof e=="function",ue=e=>typeof e=="string",pn=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",Eo=e=>te(e)&&B(e.then)&&B(e.catch),Oo=Object.prototype.toString,Pn=e=>Oo.call(e),bl=e=>Pn(e).slice(8,-1),To=e=>Pn(e)==="[object Object]",Aa=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yl=/-(\w)/g,We=hr(e=>e.replace(yl,(t,n)=>n?n.toUpperCase():"")),_l=/\B([A-Z])/g,qt=hr(e=>e.replace(_l,"-$1").toLowerCase()),gr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lr=hr(e=>e?`on${gr(e)}`:""),hn=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},rr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fi;const xl=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ze;class wl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ze&&(this.parent=ze,this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function kl(e,t=ze){t&&t.active&&t.effects.push(e)}const Ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},So=e=>(e.w&mt)>0,Io=e=>(e.n&mt)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},Cl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];So(a)&&!Io(a)?a.delete(e):t[n++]=a,a.w&=~mt,a.n&=~mt}t.length=n}},Vr=new WeakMap;let rn=0,mt=1;const qr=30;let Ne;const St=Symbol(""),Xr=Symbol("");class Ea{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,ut=!0,mt=1<<++rn,rn<=qr?Al(this):ci(this),this.fn()}finally{rn<=qr&&Cl(this),mt=1<<--rn,Ne=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const Po=[];function Xt(){Po.push(ut),ut=!1}function Jt(){const e=Po.pop();ut=e===void 0?!0:e}function Ce(e,t,n){if(ut&&Ne){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ca()),No(a)}}function No(e,t){let n=!1;rn<=qr?Io(e)||(e.n|=mt,n=!So(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Ze(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?Aa(n)&&s.push(o.get("length")):(s.push(o.get(St)),$t(e)&&s.push(o.get(Xr)));break;case"delete":D(e)||(s.push(o.get(St)),$t(e)&&s.push(o.get(Xr)));break;case"set":$t(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Jr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Jr(Ca(l))}}function Jr(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const El=_a("__proto__,__v_isRef,__isVue"),Mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pn)),Ol=Oa(),Tl=Oa(!1,!0),Sl=Oa(!0),di=Il();function Il(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xt();const r=X(this)[t].apply(this,n);return Jt(),r}}),e}function Oa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Kl:jo:t?Do:Ro).get(r))return r;const o=D(r);if(!e&&o&&Y(di,a))return Reflect.get(di,a,i);const s=Reflect.get(r,a,i);return(pn(a)?Mo.has(a):El(a))||(e||Ce(r,"get",a),t)?s:be(s)?o&&Aa(a)?s:s.value:te(s)?e?$o(s):br(s):s}}const Pl=Fo(),Nl=Fo(!0);function Fo(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&be(o)&&!be(a))return!1;if(!e&&(!ar(a)&&!Bt(a)&&(o=X(o),a=X(a)),!D(n)&&be(o)&&!be(a)))return o.value=a,!0;const s=D(n)&&Aa(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?hn(a,o)&&Ze(n,"set",r,a):Ze(n,"add",r,a)),l}}function Ml(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ze(e,"delete",t,void 0),r}function Fl(e,t){const n=Reflect.has(e,t);return(!pn(t)||!Mo.has(t))&&Ce(e,"has",t),n}function Ll(e){return Ce(e,"iterate",D(e)?"length":St),Reflect.ownKeys(e)}const Lo={get:Ol,set:Pl,deleteProperty:Ml,has:Fl,ownKeys:Ll},Rl={get:Sl,set(e,t){return!0},deleteProperty(e,t){return!0}},Dl=pe({},Lo,{get:Tl,set:Nl}),Ta=e=>e,vr=e=>Reflect.getPrototypeOf(e);function Rn(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Ce(a,"get",t),Ce(a,"get",i));const{has:o}=vr(a),s=r?Ta:n?Pa:vn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Dn(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Ce(r,"has",e),Ce(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&Ce(X(e),"iterate",St),Reflect.get(e,"size",e)}function mi(e){e=X(e);const t=X(this);return vr(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function pi(e,t){t=X(t);const n=X(this),{has:r,get:a}=vr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?hn(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function hi(e){const t=X(this),{has:n,get:r}=vr(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ze(t,"delete",e,void 0),i}function gi(){const e=X(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?Ta:e?Pa:vn;return!e&&Ce(s,"iterate",St),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=$t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?Ta:t?Pa:vn;return!t&&Ce(i,"iterate",l?Xr:St),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function jl(){const e={get(i){return Rn(this,i)},get size(){return jn(this)},has:Dn,add:mi,set:pi,delete:hi,clear:gi,forEach:$n(!1,!1)},t={get(i){return Rn(this,i,!1,!0)},get size(){return jn(this)},has:Dn,add:mi,set:pi,delete:hi,clear:gi,forEach:$n(!1,!0)},n={get(i){return Rn(this,i,!0)},get size(){return jn(this,!0)},has(i){return Dn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:$n(!0,!1)},r={get(i){return Rn(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Dn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[$l,zl,Hl,Ul]=jl();function Sa(e,t){const n=t?e?Ul:Hl:e?zl:$l;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const Bl={get:Sa(!1,!1)},Wl={get:Sa(!1,!0)},Yl={get:Sa(!0,!1)},Ro=new WeakMap,Do=new WeakMap,jo=new WeakMap,Kl=new WeakMap;function Vl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Vl(bl(e))}function br(e){return Bt(e)?e:Ia(e,!1,Lo,Bl,Ro)}function Xl(e){return Ia(e,!1,Dl,Wl,Do)}function $o(e){return Ia(e,!0,Rl,Yl,jo)}function Ia(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ql(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function zt(e){return Bt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function zo(e){return zt(e)||Bt(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Ho(e){return rr(e,"__v_skip",!0),e}const vn=e=>te(e)?br(e):e,Pa=e=>te(e)?$o(e):e;function Uo(e){ut&&Ne&&(e=X(e),No(e.dep||(e.dep=Ca())))}function Bo(e,t){e=X(e),e.dep&&Jr(e.dep)}function be(e){return!!(e&&e.__v_isRef===!0)}function Ve(e){return Jl(e,!1)}function Jl(e,t){return be(e)?e:new Gl(e,t)}class Gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:vn(t)}get value(){return Uo(this),this._value}set value(t){const n=this.__v_isShallow||ar(t)||Bt(t);t=n?t:X(t),hn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vn(t),Bo(this))}}function an(e){return be(e)?e.value:e}const Zl={get:(e,t,n)=>an(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return be(a)&&!be(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Wo(e){return zt(e)?e:new Proxy(e,Zl)}var Yo;class Ql{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yo]=!1,this._dirty=!0,this.effect=new Ea(t,()=>{this._dirty||(this._dirty=!0,Bo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return Uo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Yo="__v_isReadonly";function ef(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Re):(r=e.get,a=e.set),new Ql(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){yr(i,t,n)}return a}function Se(e,t,n,r){if(B(e)){const i=dt(e,t,n,r);return i&&Eo(i)&&i.catch(o=>{yr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function yr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,o,s]);return}}tf(e,n,a,r)}function tf(e,t,n,r=!0){console.error(e)}let bn=!1,Gr=!1;const ve=[];let Ue=0;const Ht=[];let Je=null,kt=0;const Ko=Promise.resolve();let Na=null;function nf(e){const t=Na||Ko;return e?t.then(this?e.bind(this):e):t}function rf(e){let t=Ue+1,n=ve.length;for(;t<n;){const r=t+n>>>1;yn(ve[r])<e?t=r+1:n=r}return t}function Ma(e){(!ve.length||!ve.includes(e,bn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?ve.push(e):ve.splice(rf(e.id),0,e),Vo())}function Vo(){!bn&&!Gr&&(Gr=!0,Na=Ko.then(Xo))}function af(e){const t=ve.indexOf(e);t>Ue&&ve.splice(t,1)}function of(e){D(e)?Ht.push(...e):(!Je||!Je.includes(e,e.allowRecurse?kt+1:kt))&&Ht.push(e),Vo()}function vi(e,t=bn?Ue+1:0){for(;t<ve.length;t++){const n=ve[t];n&&n.pre&&(ve.splice(t,1),t--,n())}}function qo(e){if(Ht.length){const t=[...new Set(Ht)];if(Ht.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>yn(n)-yn(r)),kt=0;kt<Je.length;kt++)Je[kt]();Je=null,kt=0}}const yn=e=>e.id==null?1/0:e.id,sf=(e,t)=>{const n=yn(e)-yn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Xo(e){Gr=!1,bn=!0,ve.sort(sf);const t=Re;try{for(Ue=0;Ue<ve.length;Ue++){const n=ve[Ue];n&&n.active!==!1&&dt(n,null,14)}}finally{Ue=0,ve.length=0,qo(),bn=!1,Na=null,(ve.length||Ht.length)&&Xo()}}function lf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||ee;p&&(a=n.map(_=>_.trim())),m&&(a=n.map(gn))}let s,l=r[s=Lr(t)]||r[s=Lr(We(t))];!l&&i&&(l=r[s=Lr(qt(t))]),l&&Se(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(f,e,6,a)}}function Jo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const u=Jo(f,t,!0);u&&(s=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(te(e)&&r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):pe(o,i),te(e)&&r.set(e,o),o)}function _r(e,t){return!e||!pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,qt(t))||Y(e,t))}let Te=null,xr=null;function ir(e){const t=Te;return Te=e,xr=e&&e.type.__scopeId||null,t}function Fa(e){xr=e}function La(){xr=null}function Go(e,t=Te,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Si(-1);const i=ir(t),o=e(...a);return ir(i),r._d&&Si(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:_,ctx:S,inheritAttrs:N}=e;let M,b;const A=ir(e);try{if(n.shapeFlag&4){const $=a||r;M=He(u.call($,$,m,i,_,p,S)),b=l}else{const $=t;M=He($.length>1?$(i,{attrs:l,slots:s,emit:f}):$(i,null)),b=t.props?l:ff(l)}}catch($){fn.length=0,yr($,e,1),M=oe(De)}let F=M;if(b&&N!==!1){const $=Object.keys(b),{shapeFlag:H}=F;$.length&&H&7&&(o&&$.some(wa)&&(b=cf(b,o)),F=pt(F,b))}return n.dirs&&(F=pt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),M=F,ir(A),M}const ff=e=>{let t;for(const n in e)(n==="class"||n==="style"||pr(n))&&((t||(t={}))[n]=e[n]);return t},cf=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function uf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bi(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!_r(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?bi(r,o,f):!0:!!o;return!1}function bi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!_r(n,i))return!0}return!1}function df({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const mf=e=>e.__isSuspense;function pf(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):of(e)}function hf(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Dr(e,t,n=!1){const r=me||Te;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const yi={};function sn(e,t,n){return Zo(e,t,n)}function Zo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){const s=me;let l,f=!1,u=!1;if(be(e)?(l=()=>e.value,f=ar(e)):zt(e)?(l=()=>e,r=!0):D(e)?(u=!0,f=e.some(b=>zt(b)||ar(b)),l=()=>e.map(b=>{if(be(b))return b.value;if(zt(b))return Et(b);if(B(b))return dt(b,s,2)})):B(e)?t?l=()=>dt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Se(e,s,3,[p])}:l=Re,t&&r){const b=l;l=()=>Et(b())}let m,p=b=>{m=M.onStop=()=>{dt(b,s,4)}};if(kn)return p=Re,t?n&&Se(t,s,3,[l(),u?[]:void 0,p]):l(),Re;let _=u?[]:yi;const S=()=>{if(!!M.active)if(t){const b=M.run();(r||f||(u?b.some((A,F)=>hn(A,_[F])):hn(b,_)))&&(m&&m(),Se(t,s,3,[b,_===yi?void 0:_,p]),_=b)}else M.run()};S.allowRecurse=!!t;let N;a==="sync"?N=S:a==="post"?N=()=>we(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),N=()=>Ma(S));const M=new Ea(l,N);return t?n?S():_=M.run():a==="post"?we(M.run.bind(M),s&&s.suspense):M.run(),()=>{M.stop(),s&&s.scope&&ka(s.scope.effects,M)}}function gf(e,t,n){const r=this.proxy,a=ue(e)?e.includes(".")?Qo(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=me;Wt(this);const s=Zo(a,i.bind(r),n);return o?Wt(o):It(),s}function Qo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Et(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Et(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)Et(e[n],t);else if(Vt(e)||$t(e))e.forEach(n=>{Et(n,t)});else if(To(e))for(const n in e)Et(e[n],t);return e}function es(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rs(()=>{e.isMounted=!0}),is(()=>{e.isUnmounting=!0}),e}const Oe=[Function,Array],vf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},setup(e,{slots:t}){const n=ys(),r=es();let a;return()=>{const i=t.default&&Ra(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const N of i)if(N.type!==De){o=N;break}}const s=X(e),{mode:l}=s;if(r.isLeaving)return jr(o);const f=_i(o);if(!f)return jr(o);const u=_n(f,s,r,n);xn(f,u);const m=n.subTree,p=m&&_i(m);let _=!1;const{getTransitionKey:S}=f.type;if(S){const N=S();a===void 0?a=N:N!==a&&(a=N,_=!0)}if(p&&p.type!==De&&(!At(f,p)||_)){const N=_n(p,s,r,n);if(xn(p,N),l==="out-in")return r.isLeaving=!0,N.afterLeave=()=>{r.isLeaving=!1,n.update()},jr(o);l==="in-out"&&f.type!==De&&(N.delayLeave=(M,b,A)=>{const F=ts(r,p);F[String(p.key)]=p,M._leaveCb=()=>{b(),M._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return o}}},bf=vf;function ts(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function _n(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:m,onLeave:p,onAfterLeave:_,onLeaveCancelled:S,onBeforeAppear:N,onAppear:M,onAfterAppear:b,onAppearCancelled:A}=t,F=String(e.key),$=ts(n,e),H=(j,U)=>{j&&Se(j,r,9,U)},J=(j,U)=>{const q=U[1];H(j,U),D(j)?j.every(le=>le.length<=1)&&q():j.length<=1&&q()},V={mode:i,persisted:o,beforeEnter(j){let U=s;if(!n.isMounted)if(a)U=N||s;else return;j._leaveCb&&j._leaveCb(!0);const q=$[F];q&&At(e,q)&&q.el._leaveCb&&q.el._leaveCb(),H(U,[j])},enter(j){let U=l,q=f,le=u;if(!n.isMounted)if(a)U=M||l,q=b||f,le=A||u;else return;let E=!1;const W=j._enterCb=he=>{E||(E=!0,he?H(le,[j]):H(q,[j]),V.delayedLeave&&V.delayedLeave(),j._enterCb=void 0)};U?J(U,[j,W]):W()},leave(j,U){const q=String(e.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return U();H(m,[j]);let le=!1;const E=j._leaveCb=W=>{le||(le=!0,U(),W?H(S,[j]):H(_,[j]),j._leaveCb=void 0,$[q]===e&&delete $[q])};$[q]=e,p?J(p,[j,E]):E()},clone(j){return _n(j,t,n,r)}};return V}function jr(e){if(wr(e))return e=pt(e),e.children=null,e}function _i(e){return wr(e)?e.children?e.children[0]:void 0:e}function xn(e,t){e.shapeFlag&6&&e.component?xn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ra(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ke?(o.patchFlag&128&&a++,r=r.concat(Ra(o.children,t,s))):(t||o.type!==De)&&r.push(s!=null?pt(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Da(e){return B(e)?{setup:e,name:e.name}:e}const Qn=e=>!!e.type.__asyncLoader,wr=e=>e.type.__isKeepAlive;function yf(e,t){ns(e,"a",t)}function _f(e,t){ns(e,"da",t)}function ns(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(kr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)wr(a.parent.vnode)&&xf(r,t,n,a),a=a.parent}}function xf(e,t,n,r){const a=kr(t,e,r,!0);os(()=>{ka(r[t],a)},n)}function kr(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Xt(),Wt(n);const s=Se(t,n,e,o);return It(),Jt(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=me)=>(!kn||e==="sp")&&kr(e,t,n),wf=nt("bm"),rs=nt("m"),kf=nt("bu"),as=nt("u"),is=nt("bum"),os=nt("um"),Af=nt("sp"),Cf=nt("rtg"),Ef=nt("rtc");function Of(e,t=me){kr("ec",e,t)}function qe(e,t){const n=Te;if(n===null)return e;const r=Er(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=ee]=t[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&Et(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f})}return e}function yt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Xt(),Se(l,n,8,[e.el,s,e,t]),Jt())}}const ss="components";function ls(e,t){return Sf(ss,e,!0,t)||e}const Tf=Symbol();function Sf(e,t,n=!0,r=!1){const a=Te||me;if(a){const i=a.type;if(e===ss){const s=fc(i,!1);if(s&&(s===t||s===We(t)||s===gr(We(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[We(t)]||e[gr(We(t))])}function If(e,t,n,r){let a;const i=n&&n[r];if(D(e)||ue(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(te(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Zr=e=>e?_s(e)?Er(e)||e.proxy:Zr(e.parent):null,or=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zr(e.parent),$root:e=>Zr(e.root),$emit:e=>e.emit,$options:e=>ja(e),$forceUpdate:e=>e.f||(e.f=()=>Ma(e.update)),$nextTick:e=>e.n||(e.n=nf.bind(e.proxy)),$watch:e=>gf.bind(e)}),Pf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ee&&Y(r,t))return o[t]=1,r[t];if(a!==ee&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==ee&&Y(n,t))return o[t]=4,n[t];Qr&&(o[t]=0)}}const u=or[t];let m,p;if(u)return t==="$attrs"&&Ce(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==ee&&Y(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ee&&Y(a,t)?(a[t]=n,!0):r!==ee&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&Y(e,o)||t!==ee&&Y(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(or,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Qr=!0;function Nf(e){const t=ja(e),n=e.proxy,r=e.ctx;Qr=!1,t.beforeCreate&&wi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:_,updated:S,activated:N,deactivated:M,beforeDestroy:b,beforeUnmount:A,destroyed:F,unmounted:$,render:H,renderTracked:J,renderTriggered:V,errorCaptured:j,serverPrefetch:U,expose:q,inheritAttrs:le,components:E,directives:W,filters:he}=t;if(f&&Mf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const re=o[ne];B(re)&&(r[ne]=re.bind(n))}if(a){const ne=a.call(n,n);te(ne)&&(e.data=br(ne))}if(Qr=!0,i)for(const ne in i){const re=i[ne],Ye=B(re)?re.bind(n,n):B(re.get)?re.get.bind(n,n):Re,Nr=!B(re)&&B(re.set)?re.set.bind(n):Re,Zt=ge({get:Ye,set:Nr});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Mt=>Zt.value=Mt})}if(s)for(const ne in s)fs(s[ne],r,n,ne);if(l){const ne=B(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(re=>{hf(re,ne[re])})}u&&wi(u,e,"c");function ce(ne,re){D(re)?re.forEach(Ye=>ne(Ye.bind(n))):re&&ne(re.bind(n))}if(ce(wf,m),ce(rs,p),ce(kf,_),ce(as,S),ce(yf,N),ce(_f,M),ce(Of,j),ce(Ef,J),ce(Cf,V),ce(is,A),ce(os,$),ce(Af,U),D(q))if(q.length){const ne=e.exposed||(e.exposed={});q.forEach(re=>{Object.defineProperty(ne,re,{get:()=>n[re],set:Ye=>n[re]=Ye})})}else e.exposed||(e.exposed={});H&&e.render===Re&&(e.render=H),le!=null&&(e.inheritAttrs=le),E&&(e.components=E),W&&(e.directives=W)}function Mf(e,t,n=Re,r=!1){D(e)&&(e=ea(e));for(const a in e){const i=e[a];let o;te(i)?"default"in i?o=Dr(i.from||a,i.default,!0):o=Dr(i.from||a):o=Dr(i),be(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function wi(e,t,n){Se(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fs(e,t,n,r){const a=r.includes(".")?Qo(n,r):()=>n[r];if(ue(e)){const i=t[e];B(i)&&sn(a,i)}else if(B(e))sn(a,e.bind(n));else if(te(e))if(D(e))e.forEach(i=>fs(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&sn(a,i,e)}}function ja(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>sr(l,f,o,!0)),sr(l,t,o)),te(t)&&i.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&sr(e,i,n,!0),a&&a.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ff[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ff={data:ki,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:wt,directives:wt,watch:Rf,provide:ki,inject:Lf};function ki(e,t){return t?e?function(){return pe(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Lf(e,t){return wt(ea(e),ea(t))}function ea(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?pe(pe(Object.create(null),e),t):t}function Rf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function Df(e,t,n,r=!1){const a={},i={};rr(i,Ar,1),e.propsDefaults=Object.create(null),cs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Xl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function jf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(_r(e.emitsOptions,p))continue;const _=t[p];if(l)if(Y(i,p))_!==i[p]&&(i[p]=_,f=!0);else{const S=We(p);a[S]=ta(l,s,S,_,e,!1)}else _!==i[p]&&(i[p]=_,f=!0)}}}else{cs(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!Y(t,m)&&((u=qt(m))===m||!Y(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=ta(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m)&&!0)&&(delete i[m],f=!0)}f&&Ze(e,"set","$attrs")}function cs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Gn(l))continue;const f=t[l];let u;a&&Y(a,u=We(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:_r(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=X(n),f=s||ee;for(let u=0;u<i.length;u++){const m=i[u];n[m]=ta(a,l,m,f[m],e,!Y(f,m))}}return o}function ta(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Wt(a),r=f[n]=l.call(null,t),It())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===qt(n))&&(r=!0))}return r}function us(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const u=m=>{l=!0;const[p,_]=us(m,t,!0);pe(o,p),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return te(e)&&r.set(e,jt),jt;if(D(i))for(let u=0;u<i.length;u++){const m=We(i[u]);Ai(m)&&(o[m]=ee)}else if(i)for(const u in i){const m=We(u);if(Ai(m)){const p=i[u],_=o[m]=D(p)||B(p)?{type:p}:p;if(_){const S=Oi(Boolean,_.type),N=Oi(String,_.type);_[0]=S>-1,_[1]=N<0||S<N,(S>-1||Y(_,"default"))&&s.push(m)}}}const f=[o,s];return te(e)&&r.set(e,f),f}function Ai(e){return e[0]!=="$"}function Ci(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ei(e,t){return Ci(e)===Ci(t)}function Oi(e,t){return D(t)?t.findIndex(n=>Ei(n,e)):B(t)&&Ei(t,e)?0:-1}const ds=e=>e[0]==="_"||e==="$stable",$a=e=>D(e)?e.map(He):[He(e)],$f=(e,t,n)=>{if(t._n)return t;const r=Go((...a)=>$a(t(...a)),n);return r._c=!1,r},ms=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ds(a))continue;const i=e[a];if(B(i))t[a]=$f(a,i,r);else if(i!=null){const o=$a(i);t[a]=()=>o}}},ps=(e,t)=>{const n=$a(t);e.slots.default=()=>n},zf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),rr(t,"_",n)):ms(t,e.slots={})}else e.slots={},t&&ps(e,t);rr(e.slots,Ar,1)},Hf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ms(t,a)),o=t}else t&&(ps(e,t),o={default:1});if(i)for(const s in a)!ds(s)&&!(s in o)&&delete a[s]};function hs(){return{app:null,config:{isNativeTag:hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Bf(e,t){return function(r,a=null){B(r)||(r=Object.assign({},r)),a!=null&&!te(a)&&(a=null);const i=hs(),o=new Set;let s=!1;const l=i.app={_uid:Uf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...u)):B(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const p=oe(r,a);return p.appContext=i,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,Er(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function na(e,t,n,r,a=!1){if(D(e)){e.forEach((p,_)=>na(p,t&&(D(t)?t[_]:t),n,r,a));return}if(Qn(r)&&!a)return;const i=r.shapeFlag&4?Er(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===ee?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ue(f)?(u[f]=null,Y(m,f)&&(m[f]=null)):be(f)&&(f.value=null)),B(l))dt(l,s,12,[o,u]);else{const p=ue(l),_=be(l);if(p||_){const S=()=>{if(e.f){const N=p?u[l]:l.value;a?D(N)&&ka(N,i):D(N)?N.includes(i)||N.push(i):p?(u[l]=[i],Y(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,Y(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,we(S,n)):S()}}}const we=pf;function Wf(e){return Yf(e)}function Yf(e,t){const n=xl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:_=Re,cloneNode:S,insertStaticContent:N}=e,M=(c,d,h,v=null,g=null,w=null,C=!1,x=null,k=!!d.dynamicChildren)=>{if(c===d)return;c&&!At(c,d)&&(v=Ln(c),at(c,g,w,!0),c=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:L,shapeFlag:I}=d;switch(y){case Ha:b(c,d,h,v);break;case De:A(c,d,h,v);break;case $r:c==null&&F(d,h,v,C);break;case ke:W(c,d,h,v,g,w,C,x,k);break;default:I&1?J(c,d,h,v,g,w,C,x,k):I&6?he(c,d,h,v,g,w,C,x,k):(I&64||I&128)&&y.process(c,d,h,v,g,w,C,x,k,Ft)}L!=null&&g&&na(L,c&&c.ref,w,d||c,!d)},b=(c,d,h,v)=>{if(c==null)r(d.el=s(d.children),h,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},A=(c,d,h,v)=>{c==null?r(d.el=l(d.children||""),h,v):d.el=c.el},F=(c,d,h,v)=>{[c.el,c.anchor]=N(c.children,d,h,v,c.el,c.anchor)},$=({el:c,anchor:d},h,v)=>{let g;for(;c&&c!==d;)g=p(c),r(c,h,v),c=g;r(d,h,v)},H=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),a(c),c=h;a(d)},J=(c,d,h,v,g,w,C,x,k)=>{C=C||d.type==="svg",c==null?V(d,h,v,g,w,C,x,k):q(c,d,g,w,C,x,k)},V=(c,d,h,v,g,w,C,x)=>{let k,y;const{type:L,props:I,shapeFlag:R,transition:z,patchFlag:K,dirs:Z}=c;if(c.el&&S!==void 0&&K===-1)k=c.el=S(c.el);else{if(k=c.el=o(c.type,w,I&&I.is,I),R&8?u(k,c.children):R&16&&U(c.children,k,null,v,g,w&&L!=="foreignObject",C,x),Z&&yt(c,null,v,"created"),I){for(const ae in I)ae!=="value"&&!Gn(ae)&&i(k,ae,null,I[ae],w,c.children,v,g,Ke);"value"in I&&i(k,"value",null,I.value),(y=I.onVnodeBeforeMount)&&$e(y,v,c)}j(k,c,c.scopeId,C,v)}Z&&yt(c,null,v,"beforeMount");const Q=(!g||g&&!g.pendingBranch)&&z&&!z.persisted;Q&&z.beforeEnter(k),r(k,d,h),((y=I&&I.onVnodeMounted)||Q||Z)&&we(()=>{y&&$e(y,v,c),Q&&z.enter(k),Z&&yt(c,null,v,"mounted")},g)},j=(c,d,h,v,g)=>{if(h&&_(c,h),v)for(let w=0;w<v.length;w++)_(c,v[w]);if(g){let w=g.subTree;if(d===w){const C=g.vnode;j(c,C,C.scopeId,C.slotScopeIds,g.parent)}}},U=(c,d,h,v,g,w,C,x,k=0)=>{for(let y=k;y<c.length;y++){const L=c[y]=x?ft(c[y]):He(c[y]);M(null,L,d,h,v,g,w,C,x)}},q=(c,d,h,v,g,w,C)=>{const x=d.el=c.el;let{patchFlag:k,dynamicChildren:y,dirs:L}=d;k|=c.patchFlag&16;const I=c.props||ee,R=d.props||ee;let z;h&&_t(h,!1),(z=R.onVnodeBeforeUpdate)&&$e(z,h,d,c),L&&yt(d,c,h,"beforeUpdate"),h&&_t(h,!0);const K=g&&d.type!=="foreignObject";if(y?le(c.dynamicChildren,y,x,h,v,K,w):C||Ye(c,d,x,null,h,v,K,w,!1),k>0){if(k&16)E(x,d,I,R,h,v,g);else if(k&2&&I.class!==R.class&&i(x,"class",null,R.class,g),k&4&&i(x,"style",I.style,R.style,g),k&8){const Z=d.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ae=Z[Q],Ie=I[ae],Lt=R[ae];(Lt!==Ie||ae==="value")&&i(x,ae,Ie,Lt,g,c.children,h,v,Ke)}}k&1&&c.children!==d.children&&u(x,d.children)}else!C&&y==null&&E(x,d,I,R,h,v,g);((z=R.onVnodeUpdated)||L)&&we(()=>{z&&$e(z,h,d,c),L&&yt(d,c,h,"updated")},v)},le=(c,d,h,v,g,w,C)=>{for(let x=0;x<d.length;x++){const k=c[x],y=d[x],L=k.el&&(k.type===ke||!At(k,y)||k.shapeFlag&70)?m(k.el):h;M(k,y,L,null,v,g,w,C,!0)}},E=(c,d,h,v,g,w,C)=>{if(h!==v){for(const x in v){if(Gn(x))continue;const k=v[x],y=h[x];k!==y&&x!=="value"&&i(c,x,y,k,C,d.children,g,w,Ke)}if(h!==ee)for(const x in h)!Gn(x)&&!(x in v)&&i(c,x,h[x],null,C,d.children,g,w,Ke);"value"in v&&i(c,"value",h.value,v.value)}},W=(c,d,h,v,g,w,C,x,k)=>{const y=d.el=c?c.el:s(""),L=d.anchor=c?c.anchor:s("");let{patchFlag:I,dynamicChildren:R,slotScopeIds:z}=d;z&&(x=x?x.concat(z):z),c==null?(r(y,h,v),r(L,h,v),U(d.children,h,L,g,w,C,x,k)):I>0&&I&64&&R&&c.dynamicChildren?(le(c.dynamicChildren,R,h,g,w,C,x),(d.key!=null||g&&d===g.subTree)&&za(c,d,!0)):Ye(c,d,h,L,g,w,C,x,k)},he=(c,d,h,v,g,w,C,x,k)=>{d.slotScopeIds=x,c==null?d.shapeFlag&512?g.ctx.activate(d,h,v,C,k):G(d,h,v,g,w,C,k):ce(c,d,k)},G=(c,d,h,v,g,w,C)=>{const x=c.component=ac(c,v,g);if(wr(c)&&(x.ctx.renderer=Ft),ic(x),x.asyncDep){if(g&&g.registerDep(x,ne),!c.el){const k=x.subTree=oe(De);A(null,k,d,h)}return}ne(x,c,d,h,g,w,C)},ce=(c,d,h)=>{const v=d.component=c.component;if(uf(c,d,h))if(v.asyncDep&&!v.asyncResolved){re(v,d,h);return}else v.next=d,af(v.update),v.update();else d.el=c.el,v.vnode=d},ne=(c,d,h,v,g,w,C)=>{const x=()=>{if(c.isMounted){let{next:L,bu:I,u:R,parent:z,vnode:K}=c,Z=L,Q;_t(c,!1),L?(L.el=K.el,re(c,L,C)):L=K,I&&Zn(I),(Q=L.props&&L.props.onVnodeBeforeUpdate)&&$e(Q,z,L,K),_t(c,!0);const ae=Rr(c),Ie=c.subTree;c.subTree=ae,M(Ie,ae,m(Ie.el),Ln(Ie),c,g,w),L.el=ae.el,Z===null&&df(c,ae.el),R&&we(R,g),(Q=L.props&&L.props.onVnodeUpdated)&&we(()=>$e(Q,z,L,K),g)}else{let L;const{el:I,props:R}=d,{bm:z,m:K,parent:Z}=c,Q=Qn(d);if(_t(c,!1),z&&Zn(z),!Q&&(L=R&&R.onVnodeBeforeMount)&&$e(L,Z,d),_t(c,!0),I&&Fr){const ae=()=>{c.subTree=Rr(c),Fr(I,c.subTree,c,g,null)};Q?d.type.__asyncLoader().then(()=>!c.isUnmounted&&ae()):ae()}else{const ae=c.subTree=Rr(c);M(null,ae,h,v,c,g,w),d.el=ae.el}if(K&&we(K,g),!Q&&(L=R&&R.onVnodeMounted)){const ae=d;we(()=>$e(L,Z,ae),g)}(d.shapeFlag&256||Z&&Qn(Z.vnode)&&Z.vnode.shapeFlag&256)&&c.a&&we(c.a,g),c.isMounted=!0,d=h=v=null}},k=c.effect=new Ea(x,()=>Ma(y),c.scope),y=c.update=()=>k.run();y.id=c.uid,_t(c,!0),y()},re=(c,d,h)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,jf(c,d.props,v,h),Hf(c,d.children,h),Xt(),vi(),Jt()},Ye=(c,d,h,v,g,w,C,x,k=!1)=>{const y=c&&c.children,L=c?c.shapeFlag:0,I=d.children,{patchFlag:R,shapeFlag:z}=d;if(R>0){if(R&128){Zt(y,I,h,v,g,w,C,x,k);return}else if(R&256){Nr(y,I,h,v,g,w,C,x,k);return}}z&8?(L&16&&Ke(y,g,w),I!==y&&u(h,I)):L&16?z&16?Zt(y,I,h,v,g,w,C,x,k):Ke(y,g,w,!0):(L&8&&u(h,""),z&16&&U(I,h,v,g,w,C,x,k))},Nr=(c,d,h,v,g,w,C,x,k)=>{c=c||jt,d=d||jt;const y=c.length,L=d.length,I=Math.min(y,L);let R;for(R=0;R<I;R++){const z=d[R]=k?ft(d[R]):He(d[R]);M(c[R],z,h,null,g,w,C,x,k)}y>L?Ke(c,g,w,!0,!1,I):U(d,h,v,g,w,C,x,k,I)},Zt=(c,d,h,v,g,w,C,x,k)=>{let y=0;const L=d.length;let I=c.length-1,R=L-1;for(;y<=I&&y<=R;){const z=c[y],K=d[y]=k?ft(d[y]):He(d[y]);if(At(z,K))M(z,K,h,null,g,w,C,x,k);else break;y++}for(;y<=I&&y<=R;){const z=c[I],K=d[R]=k?ft(d[R]):He(d[R]);if(At(z,K))M(z,K,h,null,g,w,C,x,k);else break;I--,R--}if(y>I){if(y<=R){const z=R+1,K=z<L?d[z].el:v;for(;y<=R;)M(null,d[y]=k?ft(d[y]):He(d[y]),h,K,g,w,C,x,k),y++}}else if(y>R)for(;y<=I;)at(c[y],g,w,!0),y++;else{const z=y,K=y,Z=new Map;for(y=K;y<=R;y++){const Ae=d[y]=k?ft(d[y]):He(d[y]);Ae.key!=null&&Z.set(Ae.key,y)}let Q,ae=0;const Ie=R-K+1;let Lt=!1,ii=0;const Qt=new Array(Ie);for(y=0;y<Ie;y++)Qt[y]=0;for(y=z;y<=I;y++){const Ae=c[y];if(ae>=Ie){at(Ae,g,w,!0);continue}let je;if(Ae.key!=null)je=Z.get(Ae.key);else for(Q=K;Q<=R;Q++)if(Qt[Q-K]===0&&At(Ae,d[Q])){je=Q;break}je===void 0?at(Ae,g,w,!0):(Qt[je-K]=y+1,je>=ii?ii=je:Lt=!0,M(Ae,d[je],h,null,g,w,C,x,k),ae++)}const oi=Lt?Kf(Qt):jt;for(Q=oi.length-1,y=Ie-1;y>=0;y--){const Ae=K+y,je=d[Ae],si=Ae+1<L?d[Ae+1].el:v;Qt[y]===0?M(null,je,h,si,g,w,C,x,k):Lt&&(Q<0||y!==oi[Q]?Mt(je,h,si,2):Q--)}}},Mt=(c,d,h,v,g=null)=>{const{el:w,type:C,transition:x,children:k,shapeFlag:y}=c;if(y&6){Mt(c.component.subTree,d,h,v);return}if(y&128){c.suspense.move(d,h,v);return}if(y&64){C.move(c,d,h,Ft);return}if(C===ke){r(w,d,h);for(let I=0;I<k.length;I++)Mt(k[I],d,h,v);r(c.anchor,d,h);return}if(C===$r){$(c,d,h);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(w),r(w,d,h),we(()=>x.enter(w),g);else{const{leave:I,delayLeave:R,afterLeave:z}=x,K=()=>r(w,d,h),Z=()=>{I(w,()=>{K(),z&&z()})};R?R(w,K,Z):Z()}else r(w,d,h)},at=(c,d,h,v=!1,g=!1)=>{const{type:w,props:C,ref:x,children:k,dynamicChildren:y,shapeFlag:L,patchFlag:I,dirs:R}=c;if(x!=null&&na(x,null,h,c,!0),L&256){d.ctx.deactivate(c);return}const z=L&1&&R,K=!Qn(c);let Z;if(K&&(Z=C&&C.onVnodeBeforeUnmount)&&$e(Z,d,c),L&6)ll(c.component,h,v);else{if(L&128){c.suspense.unmount(h,v);return}z&&yt(c,null,d,"beforeUnmount"),L&64?c.type.remove(c,d,h,g,Ft,v):y&&(w!==ke||I>0&&I&64)?Ke(y,d,h,!1,!0):(w===ke&&I&384||!g&&L&16)&&Ke(k,d,h),v&&ri(c)}(K&&(Z=C&&C.onVnodeUnmounted)||z)&&we(()=>{Z&&$e(Z,d,c),z&&yt(c,null,d,"unmounted")},h)},ri=c=>{const{type:d,el:h,anchor:v,transition:g}=c;if(d===ke){sl(h,v);return}if(d===$r){H(c);return}const w=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:x}=g,k=()=>C(h,w);x?x(c.el,w,k):k()}else w()},sl=(c,d)=>{let h;for(;c!==d;)h=p(c),a(c),c=h;a(d)},ll=(c,d,h)=>{const{bum:v,scope:g,update:w,subTree:C,um:x}=c;v&&Zn(v),g.stop(),w&&(w.active=!1,at(C,c,d,h)),x&&we(x,d),we(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ke=(c,d,h,v=!1,g=!1,w=0)=>{for(let C=w;C<c.length;C++)at(c[C],d,h,v,g)},Ln=c=>c.shapeFlag&6?Ln(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),ai=(c,d,h)=>{c==null?d._vnode&&at(d._vnode,null,null,!0):M(d._vnode||null,c,d,null,null,null,h),vi(),qo(),d._vnode=c},Ft={p:M,um:at,m:Mt,r:ri,mt:G,mc:U,pc:Ye,pbc:le,n:Ln,o:e};let Mr,Fr;return t&&([Mr,Fr]=t(Ft)),{render:ai,hydrate:Mr,createApp:Bf(ai,Mr)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function za(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ft(a[i]),s.el=o.el),n||za(o,s))}}function Kf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vf=e=>e.__isTeleport,ln=e=>e&&(e.disabled||e.disabled===""),Ti=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ra=(e,t)=>{const n=e&&e.to;return ue(n)?t?t(n):null:n},qf={__isTeleport:!0,process(e,t,n,r,a,i,o,s,l,f){const{mc:u,pc:m,pbc:p,o:{insert:_,querySelector:S,createText:N,createComment:M}}=f,b=ln(t.props);let{shapeFlag:A,children:F,dynamicChildren:$}=t;if(e==null){const H=t.el=N(""),J=t.anchor=N("");_(H,n,r),_(J,n,r);const V=t.target=ra(t.props,S),j=t.targetAnchor=N("");V&&(_(j,V),o=o||Ti(V));const U=(q,le)=>{A&16&&u(F,q,le,a,i,o,s,l)};b?U(n,J):V&&U(V,j)}else{t.el=e.el;const H=t.anchor=e.anchor,J=t.target=e.target,V=t.targetAnchor=e.targetAnchor,j=ln(e.props),U=j?n:J,q=j?H:V;if(o=o||Ti(J),$?(p(e.dynamicChildren,$,U,a,i,o,s),za(e,t,!0)):l||m(e,t,U,q,a,i,o,s,!1),b)j||Hn(t,n,H,f,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=ra(t.props,S);le&&Hn(t,le,null,f,0)}else j&&Hn(t,J,V,f,1)}},remove(e,t,n,r,{um:a,o:{remove:i}},o){const{shapeFlag:s,children:l,anchor:f,targetAnchor:u,target:m,props:p}=e;if(m&&i(u),(o||!ln(p))&&(i(f),s&16))for(let _=0;_<l.length;_++){const S=l[_];a(S,t,n,!0,!!S.dynamicChildren)}},move:Hn,hydrate:Xf};function Hn(e,t,n,{o:{insert:r},m:a},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:s,shapeFlag:l,children:f,props:u}=e,m=i===2;if(m&&r(o,t,n),(!m||ln(u))&&l&16)for(let p=0;p<f.length;p++)a(f[p],t,n,2);m&&r(s,t,n)}function Xf(e,t,n,r,a,i,{o:{nextSibling:o,parentNode:s,querySelector:l}},f){const u=t.target=ra(t.props,l);if(u){const m=u._lpa||u.firstChild;if(t.shapeFlag&16)if(ln(t.props))t.anchor=f(o(e),t,s(e),n,r,a,i),t.targetAnchor=m;else{t.anchor=o(e);let p=m;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}f(m,t,u,n,r,a,i)}}return t.anchor&&o(t.anchor)}const Jf=qf,ke=Symbol(void 0),Ha=Symbol(void 0),De=Symbol(void 0),$r=Symbol(void 0),fn=[];let Fe=null;function Pe(e=!1){fn.push(Fe=e?null:[])}function Gf(){fn.pop(),Fe=fn[fn.length-1]||null}let wn=1;function Si(e){wn+=e}function gs(e){return e.dynamicChildren=wn>0?Fe||jt:null,Gf(),wn>0&&Fe&&Fe.push(e),e}function Ge(e,t,n,r,a,i){return gs(O(e,t,n,r,a,i,!0))}function vs(e,t,n,r,a){return gs(oe(e,t,n,r,a,!0))}function aa(e){return e?e.__v_isVNode===!0:!1}function At(e,t){return e.type===t.type&&e.key===t.key}const Ar="__vInternal",bs=({key:e})=>e!=null?e:null,er=({ref:e,ref_key:t,ref_for:n})=>e!=null?ue(e)||be(e)||B(e)?{i:Te,r:e,k:t,f:!!n}:e:null;function O(e,t=null,n=null,r=0,a=null,i=e===ke?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bs(t),ref:t&&er(t),scopeId:xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ue(n)?8:16),wn>0&&!o&&Fe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Fe.push(l),l}const oe=Zf;function Zf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tf)&&(e=De),aa(e)){const s=pt(e,t,!0);return n&&Ua(s,n),wn>0&&!i&&Fe&&(s.shapeFlag&6?Fe[Fe.indexOf(e)]=s:Fe.push(s)),s.patchFlag|=-2,s}if(cc(e)&&(e=e.__vccOpts),t){t=Qf(t);let{class:s,style:l}=t;s&&!ue(s)&&(t.class=mn(s)),te(l)&&(zo(l)&&!D(l)&&(l=pe({},l)),t.style=mr(l))}const o=ue(e)?1:mf(e)?128:Vf(e)?64:te(e)?4:B(e)?2:0;return O(e,t,n,r,a,o,i,!0)}function Qf(e){return e?zo(e)||Ar in e?pe({},e):e:null}function pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&bs(s),ref:t&&t.ref?n&&a?D(a)?a.concat(er(t)):[a,er(t)]:er(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor}}function Cr(e=" ",t=0){return oe(Ha,null,e,t)}function ec(e="",t=!1){return t?(Pe(),vs(De,null,e)):oe(De,null,e)}function He(e){return e==null||typeof e=="boolean"?oe(De):D(e)?oe(ke,null,e.slice()):typeof e=="object"?ft(e):oe(Ha,null,String(e))}function ft(e){return e.el===null||e.memo?e:pt(e)}function Ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ar in t)?t._ctx=Te:a===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[Cr(t)]):n=8);e.children=t,e.shapeFlag|=n}function tc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=mn([t.class,r.class]));else if(a==="style")t.style=mr([t.style,r.style]);else if(pr(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Se(e,t,7,[n,r])}const nc=hs();let rc=0;function ac(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nc,i={uid:rc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:us(r,a),emitsOptions:Jo(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=lf.bind(null,i),e.ce&&e.ce(i),i}let me=null;const ys=()=>me||Te,Wt=e=>{me=e,e.scope.on()},It=()=>{me&&me.scope.off(),me=null};function _s(e){return e.vnode.shapeFlag&4}let kn=!1;function ic(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=_s(e);Df(e,n,a,t),zf(e,r);const i=a?oc(e,t):void 0;return kn=!1,i}function oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ho(new Proxy(e.ctx,Pf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lc(e):null;Wt(e),Xt();const i=dt(r,e,0,[e.props,a]);if(Jt(),It(),Eo(i)){if(i.then(It,It),t)return i.then(o=>{Ii(e,o,t)}).catch(o=>{yr(o,e,0)});e.asyncDep=i}else Ii(e,i,t)}else xs(e,t)}function Ii(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=Wo(t)),xs(e,n)}let Pi;function xs(e,t,n){const r=e.type;if(!e.render){if(!t&&Pi&&!r.render){const a=r.template||ja(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=Pi(a,f)}}e.render=r.render||Re}Wt(e),Xt(),Nf(e),Jt(),It()}function sc(e){return new Proxy(e.attrs,{get(t,n){return Ce(e,"get","$attrs"),t[n]}})}function lc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=sc(e))},slots:e.slots,emit:e.emit,expose:t}}function Er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wo(Ho(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in or)return or[n](e)}}))}function fc(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function cc(e){return B(e)&&"__vccOpts"in e}const ge=(e,t)=>ef(e,t,kn);function ws(e,t,n){const r=arguments.length;return r===2?te(t)&&!D(t)?aa(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&aa(n)&&(n=[n]),oe(e,t,n))}const uc="3.2.39",dc="http://www.w3.org/2000/svg",Ct=typeof document<"u"?document:null,Ni=Ct&&Ct.createElement("template"),mc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ct.createElementNS(dc,e):Ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ct.createTextNode(e),createComment:e=>Ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ni.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ni.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function hc(e,t,n){const r=e.style,a=ue(n);if(n&&!a){for(const i in n)ia(r,i,n[i]);if(t&&!ue(t))for(const i in t)n[i]==null&&ia(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Mi=/\s*!important$/;function ia(e,t,n){if(D(n))n.forEach(r=>ia(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=gc(e,t);Mi.test(n)?e.setProperty(qt(r),n.replace(Mi,""),"important"):e[r]=n}}const Fi=["Webkit","Moz","ms"],zr={};function gc(e,t){const n=zr[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return zr[t]=r;r=gr(r);for(let a=0;a<Fi.length;a++){const i=Fi[a]+r;if(i in e)return zr[t]=i}return t}const Li="http://www.w3.org/1999/xlink";function vc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Li,t.slice(6,t.length)):e.setAttributeNS(Li,t,n);else{const i=cl(t);n==null||i&&!Ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function bc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ao(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ks,yc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let oa=0;const _c=Promise.resolve(),xc=()=>{oa=0},wc=()=>oa||(_c.then(xc),oa=ks());function ct(e,t,n,r){e.addEventListener(t,n,r)}function kc(e,t,n,r){e.removeEventListener(t,n,r)}function Ac(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Cc(t);if(r){const f=i[t]=Ec(r,a);ct(e,s,f,l)}else o&&(kc(e,s,o,l),i[t]=void 0)}}const Ri=/(?:Once|Passive|Capture)$/;function Cc(e){let t;if(Ri.test(e)){t={};let r;for(;r=e.match(Ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qt(e.slice(2)),t]}function Ec(e,t){const n=r=>{const a=r.timeStamp||ks();(yc||a>=n.attached-1)&&Se(Oc(r,n.value),t,5,[r])};return n.value=e,n.attached=wc(),n}function Oc(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Di=/^on[a-z]/,Tc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?pc(e,r,a):t==="style"?hc(e,n,r):pr(t)?wa(t)||Ac(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sc(e,t,r,a))?bc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vc(e,t,r,a))};function Sc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Di.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Di.test(t)&&ue(n)?!1:t in e}const ot="transition",tn="animation",As={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ic=pe({},bf.props,As),xt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},ji=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function Pc(e){const t={};for(const E in e)E in As||(t[E]=e[E]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=e,S=Nc(a),N=S&&S[0],M=S&&S[1],{onBeforeEnter:b,onEnter:A,onEnterCancelled:F,onLeave:$,onLeaveCancelled:H,onBeforeAppear:J=b,onAppear:V=A,onAppearCancelled:j=F}=t,U=(E,W,he)=>{lt(E,W?u:s),lt(E,W?f:o),he&&he()},q=(E,W)=>{E._isLeaving=!1,lt(E,m),lt(E,_),lt(E,p),W&&W()},le=E=>(W,he)=>{const G=E?V:A,ce=()=>U(W,E,he);xt(G,[W,ce]),$i(()=>{lt(W,E?l:i),Xe(W,E?u:s),ji(G)||zi(W,r,N,ce)})};return pe(t,{onBeforeEnter(E){xt(b,[E]),Xe(E,i),Xe(E,o)},onBeforeAppear(E){xt(J,[E]),Xe(E,l),Xe(E,f)},onEnter:le(!1),onAppear:le(!0),onLeave(E,W){E._isLeaving=!0;const he=()=>q(E,W);Xe(E,m),Es(),Xe(E,p),$i(()=>{!E._isLeaving||(lt(E,m),Xe(E,_),ji($)||zi(E,r,M,he))}),xt($,[E,he])},onEnterCancelled(E){U(E,!1),xt(F,[E])},onAppearCancelled(E){U(E,!0),xt(j,[E])},onLeaveCancelled(E){q(E),xt(H,[E])}})}function Nc(e){if(e==null)return null;if(te(e))return[Hr(e.enter),Hr(e.leave)];{const t=Hr(e);return[t,t]}}function Hr(e){return gn(e)}function Xe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function lt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $i(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Mc=0;function zi(e,t,n,r){const a=e._endId=++Mc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=Cs(e,t);if(!o)return r();const f=o+"end";let u=0;const m=()=>{e.removeEventListener(f,p),i()},p=_=>{_.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(f,p)}function Cs(e,t){const n=window.getComputedStyle(e),r=S=>(n[S]||"").split(", "),a=r(ot+"Delay"),i=r(ot+"Duration"),o=Hi(a,i),s=r(tn+"Delay"),l=r(tn+"Duration"),f=Hi(s,l);let u=null,m=0,p=0;t===ot?o>0&&(u=ot,m=o,p=i.length):t===tn?f>0&&(u=tn,m=f,p=l.length):(m=Math.max(o,f),u=m>0?o>f?ot:tn:null,p=u?u===ot?i.length:l.length:0);const _=u===ot&&/\b(transform|all)(,|$)/.test(n[ot+"Property"]);return{type:u,timeout:m,propCount:p,hasTransform:_}}function Hi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ui(n)+Ui(e[r])))}function Ui(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Es(){return document.body.offsetHeight}const Os=new WeakMap,Ts=new WeakMap,Fc={name:"TransitionGroup",props:pe({},Ic,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ys(),r=es();let a,i;return as(()=>{if(!a.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!$c(a[0].el,n.vnode.el,o))return;a.forEach(Rc),a.forEach(Dc);const s=a.filter(jc);Es(),s.forEach(l=>{const f=l.el,u=f.style;Xe(f,o),u.transform=u.webkitTransform=u.transitionDuration="";const m=f._moveCb=p=>{p&&p.target!==f||(!p||/transform$/.test(p.propertyName))&&(f.removeEventListener("transitionend",m),f._moveCb=null,lt(f,o))};f.addEventListener("transitionend",m)})}),()=>{const o=X(e),s=Pc(o);let l=o.tag||ke;a=i,i=t.default?Ra(t.default()):[];for(let f=0;f<i.length;f++){const u=i[f];u.key!=null&&xn(u,_n(u,s,r,n))}if(a)for(let f=0;f<a.length;f++){const u=a[f];xn(u,_n(u,s,r,n)),Os.set(u,u.el.getBoundingClientRect())}return oe(l,null,i)}}},Lc=Fc;function Rc(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Dc(e){Ts.set(e,e.el.getBoundingClientRect())}function jc(e){const t=Os.get(e),n=Ts.get(e),r=t.left-n.left,a=t.top-n.top;if(r||a){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${a}px)`,i.transitionDuration="0s",e}}function $c(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(s=>s&&r.classList.remove(s))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(r);const{hasTransform:i}=Cs(r);return a.removeChild(r),i}const Yt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>Zn(t,n):t};function zc(e){e.target.composing=!0}function Bi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Wi={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Yt(a);const i=r||a.props&&a.props.type==="number";ct(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=gn(s)),e._assign(s)}),n&&ct(e,"change",()=>{e.value=e.value.trim()}),t||(ct(e,"compositionstart",zc),ct(e,"compositionend",Bi),ct(e,"change",Bi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Yt(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&gn(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Yi={deep:!0,created(e,t,n){e._assign=Yt(n),ct(e,"change",()=>{const r=e._modelValue,a=An(e),i=e.checked,o=e._assign;if(D(r)){const s=xa(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const f=[...r];f.splice(s,1),o(f)}}else if(Vt(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(Ss(e,i))})},mounted:Ki,beforeUpdate(e,t,n){e._assign=Yt(n),Ki(e,t,n)}};function Ki(e,{value:t,oldValue:n},r){e._modelValue=t,D(t)?e.checked=xa(t,r.props.value)>-1:Vt(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=In(t,Ss(e,!0)))}const Vi={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Vt(t);ct(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?gn(An(o)):An(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=Yt(r)},mounted(e,{value:t}){qi(e,t)},beforeUpdate(e,t,n){e._assign=Yt(n)},updated(e,{value:t}){qi(e,t)}};function qi(e,t){const n=e.multiple;if(!(n&&!D(t)&&!Vt(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=An(i);if(n)D(t)?i.selected=xa(t,o)>-1:i.selected=t.has(o);else if(In(An(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function An(e){return"_value"in e?e._value:e.value}function Ss(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ur={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):nn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),nn(e,!0),r.enter(e)):r.leave(e,()=>{nn(e,!1)}):nn(e,t))},beforeUnmount(e,{value:t}){nn(e,t)}};function nn(e,t){e.style.display=t?e._vod:"none"}const Hc=pe({patchProp:Tc},mc);let Xi;function Uc(){return Xi||(Xi=Wf(Hc))}const Bc=(...e)=>{const t=Uc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Wc(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Wc(e){return ue(e)?document.querySelector(e):e}const Or=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Yc={},Is=e=>(Fa("data-v-657cb669"),e=e(),La(),e),Kc={class:"header"},Vc=Is(()=>O("h1",null,"TO DO WITH VUE",-1)),qc=Is(()=>O("p",null,"A to do list using Vue 3",-1)),Xc=[Vc,qc];function Jc(e,t){return Pe(),Ge("div",Kc,Xc)}const Gc=Or(Yc,[["render",Jc],["__scopeId","data-v-657cb669"]]);const Zc={},Qc=e=>(Fa("data-v-0267b135"),e=e(),La(),e),eu=Qc(()=>O("div",{class:"footer__title"},[O("h1",null,"Socials")],-1)),tu={class:"container"},nu={href:"https://github.com/LueKely/ToDoWithVue",target:"_blank"},ru={href:"https://www.facebook.com/",target:"_blank"},au={href:"https://twitter.com/",target:"_blank"};function iu(e,t){const n=ls("font-awesome-icon");return Pe(),Ge("footer",null,[eu,O("div",tu,[O("a",nu,[oe(n,{icon:"fa-brands fa-github"})]),O("a",ru,[oe(n,{icon:"fa-brands fa-facebook"})]),O("a",au,[oe(n,{icon:"fa-brands fa-twitter"})])])])}const ou=Or(Zc,[["render",iu],["__scopeId","data-v-0267b135"]]);const _e=e=>(Fa("data-v-7bc07486"),e=e(),La(),e),su={class:"container"},lu=Cr(" Write Something "),fu={class:"showUi"},cu={class:"textArea__container"},uu={class:"textArea--limit"},du={class:"limit"},mu={class:"choices__container"},pu={class:"important__container"},hu=_e(()=>O("label",{for:"important",class:"important__label"},"Mark As Important:",-1)),gu=_e(()=>O("h2",null,"Tag:",-1)),vu=_e(()=>O("option",{disabled:"",value:""},"select tag",-1)),bu=_e(()=>O("option",null,"Work",-1)),yu=_e(()=>O("option",null,"School",-1)),_u=_e(()=>O("option",null,"Misc",-1)),xu=[vu,bu,yu,_u],wu=["disabled"],ku={class:"list__container"},Au=_e(()=>O("h1",{class:"list--text"},"Your Notes:",-1)),Cu={key:0,class:"list--empty__container"},Eu={class:"list--empty__icon"},Ou=_e(()=>O("p",{class:"list--empty__empty"},"Empty",-1)),Tu={class:"list--item__container"},Su=["onClick"],Iu={class:"card--item__tag"},Pu={class:"card__btn--container"},Nu=["onClick"],Mu=Cr(" Edit "),Fu=["onClick"],Lu=Cr(" Delete "),Ru={class:"modal__container"},Du={class:"container"},ju=_e(()=>O("div",{class:"model__title"},[O("h1",null,"Edit")],-1)),$u={class:"textArea__container"},zu={class:"textArea--limit"},Hu={class:"limit"},Uu={class:"edit__container"},Bu={class:"choices__container"},Wu={class:"important__container"},Yu=_e(()=>O("label",{for:"important",class:"important__label"},"Mark As Important:",-1)),Ku=_e(()=>O("h2",null,"Tag:",-1)),Vu=_e(()=>O("option",{disabled:"",value:""},"select tag",-1)),qu=_e(()=>O("option",null,"Work",-1)),Xu=_e(()=>O("option",null,"School",-1)),Ju=_e(()=>O("option",null,"Misc",-1)),Gu=[Vu,qu,Xu,Ju],Zu=["disabled"],Qu={__name:"toDoList",setup(e){const t=localStorage.getItem("1"),n=Ve(""),r=Ve(!1),a=br(localStorage.length==0?[]:JSON.parse(t)),i=Ve(!1),o=Ve(""),s=Ve(""),l=Ve(!1),f=Ve(""),u=Ve(""),m=Ve(""),p=ge(()=>n.value.length),_=ge(()=>o.value.length);sn(a,()=>{$(),console.log("Data Saved")});function S(){N(f),a.push({note:o.value,tag:s.value,important:i.value,bg:f.value,isFinished:!1}),o.value="",i.value=!1}function N(E){s.value=="Work"?E.value="#ff595e":s.value=="Misc"?E.value="#ffca3a":s.value=="School"?E.value="#8ac926":E.value="white"}function M(){N(u),a[m.value]={note:n.value,tag:s.value,important:i.value,bg:u.value,isFinished:a[m.value].isFinished},q()}function b(E){m.value=E,n.value=a[E].note,U()}const A=ge(()=>s.value&&o.value.length==0),F=ge(()=>s.value&&n.value.length==0);function $(){localStorage.setItem("1",JSON.stringify(a)),console.log(localStorage)}function H(){localStorage.clear(),a.splice(0,a.length)}function J(E){a.splice(E,1),localStorage.setItem("1",JSON.stringify(a))}function V(){l.value=!0}function j(){l.value=!1}function U(){j(),r.value=!0}function q(){r.value=!1}function le(E){a[E].isFinished=!a[E].isFinished}return console.log(localStorage),(E,W)=>{const he=ls("font-awesome-icon");return Pe(),Ge(ke,null,[O("div",su,[qe(O("button",{id:"ShowUi",onClick:V},[lu,oe(he,{icon:"fa-solid fa-pencil"})],512),[[Ur,!l.value]]),qe(O("div",fu,[O("div",cu,[O("div",uu,[O("p",du,en(an(_))+"/200",1)]),qe(O("textarea",{placeholder:"What shall you do today...",id:"TextBox","onUpdate:modelValue":W[0]||(W[0]=G=>o.value=G),maxlength:"200"},`\r
				`,512),[[Wi,o.value]])]),O("div",mu,[O("span",pu,[hu,qe(O("input",{type:"checkbox",id:"important","onUpdate:modelValue":W[1]||(W[1]=G=>i.value=G)},null,512),[[Yi,i.value]])]),O("span",null,[gu,qe(O("select",{"onUpdate:modelValue":W[2]||(W[2]=G=>s.value=G)},xu,512),[[Vi,s.value]])]),O("span",null,[O("button",{class:"btn submit",disabled:an(A),onClick:S}," Submit ",8,wu),O("button",{class:"btn cancel",onClick:j},"Cancel")])])],512),[[Ur,l.value]])]),O("div",ku,[Au,a.length===0?(Pe(),Ge("div",Cu,[O("div",Eu,[oe(he,{icon:"fa-solid fa-wind"})]),Ou])):ec("",!0),O("div",Tu,[oe(Lc,{name:"list"},{default:Go(()=>[(Pe(!0),Ge(ke,null,If(a,(G,ce)=>(Pe(),Ge("div",{class:"card__container",key:G,style:mr({"background-color":G.bg}),onClick:ne=>le(ce)},[O("div",Iu,[O("h1",null,en(G.tag),1)]),O("div",null,[G.important?(Pe(),Ge("p",{key:0,class:mn({overLine:G.isFinished})},[O("mark",null,en(G.note),1)],2)):(Pe(),Ge("p",{key:1,class:mn({overLine:G.isFinished})},en(G.note),3))]),O("div",Pu,[O("button",{onClick:ne=>b(ce),class:"btn card__btn--edit"},[Mu,oe(he,{icon:"fa-solid fa-wrench"})],8,Nu),O("button",{class:"btn card__btn",onClick:ne=>J(ce)},[Lu,oe(he,{icon:"fa-solid fa-trash"})],8,Fu)])],12,Su))),128))]),_:1})]),O("button",{class:"btn clearAll",onClick:H},"Clear all")]),(Pe(),vs(Jf,{to:"#modal"},[qe(O("div",Ru,[O("div",Du,[ju,O("div",$u,[O("div",zu,[O("p",Hu,en(an(p))+"/200",1)]),qe(O("textarea",{placeholder:"What shall you do today...",id:"TextBox","onUpdate:modelValue":W[3]||(W[3]=G=>n.value=G),rows:"5",cols:"33",maxlength:"200"},null,512),[[Wi,n.value]])]),O("div",Uu,[O("div",Bu,[O("span",Wu,[Yu,qe(O("input",{type:"checkbox",id:"important","onUpdate:modelValue":W[4]||(W[4]=G=>i.value=G)},null,512),[[Yi,i.value]])]),O("span",null,[Ku,qe(O("select",{"onUpdate:modelValue":W[5]||(W[5]=G=>s.value=G)},Gu,512),[[Vi,s.value]])]),O("span",null,[O("button",{class:"btn submit",onClick:M,disabled:an(F)}," Update ",8,Zu),O("button",{class:"btn cancel",onClick:q}," Cancel ")])])])])],512),[[Ur,r.value]])]))],64)}}},ed=Or(Qu,[["__scopeId","data-v-7bc07486"]]);const td={__name:"App",setup(e){return(t,n)=>(Pe(),Ge(ke,null,[oe(Gc),oe(ed),oe(ou)],64))}},nd=Or(td,[["__scopeId","data-v-89d375e2"]]);function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lr(e){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function rd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ad(e,t,n){return t&&Gi(e.prototype,t),n&&Gi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ba(e,t){return od(e)||ld(e,t)||Ps(e,t)||cd()}function Nn(e){return id(e)||sd(e)||Ps(e)||fd()}function id(e){if(Array.isArray(e))return sa(e)}function od(e){if(Array.isArray(e))return e}function sd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ld(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ps(e,t){if(!!e){if(typeof e=="string")return sa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sa(e,t)}}function sa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zi=function(){},Wa={},Ns={},Ms=null,Fs={mark:Zi,measure:Zi};try{typeof window<"u"&&(Wa=window),typeof document<"u"&&(Ns=document),typeof MutationObserver<"u"&&(Ms=MutationObserver),typeof performance<"u"&&(Fs=performance)}catch{}var ud=Wa.navigator||{},Qi=ud.userAgent,eo=Qi===void 0?"":Qi,ht=Wa,se=Ns,to=Ms,Un=Fs;ht.document;var rt=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Ls=~eo.indexOf("MSIE")||~eo.indexOf("Trident/"),Bn,Wn,Yn,Kn,Vn,Qe="___FONT_AWESOME___",la=16,Rs="fa",Ds="svg-inline--fa",Pt="data-fa-i2svg",fa="data-fa-pseudo-element",dd="data-fa-pseudo-element-pending",Ya="data-prefix",Ka="data-icon",no="fontawesome-i2svg",md="async",pd=["HTML","HEAD","STYLE","SCRIPT"],js=function(){try{return!0}catch{return!1}}(),ie="classic",fe="sharp",Va=[ie,fe];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ie]}})}var Cn=Mn((Bn={},de(Bn,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Bn,fe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Bn)),En=Mn((Wn={},de(Wn,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Wn,fe,{solid:"fass"}),Wn)),On=Mn((Yn={},de(Yn,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Yn,fe,{fass:"fa-solid"}),Yn)),hd=Mn((Kn={},de(Kn,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Kn,fe,{"fa-solid":"fass"}),Kn)),gd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,$s="fa-layers-text",vd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bd=Mn((Vn={},de(Vn,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Vn,fe,{900:"fass"}),Vn)),zs=[1,2,3,4,5,6,7,8,9,10],yd=zs.concat([11,12,13,14,15,16,17,18,19,20]),_d=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tn=new Set;Object.keys(En[ie]).map(Tn.add.bind(Tn));Object.keys(En[fe]).map(Tn.add.bind(Tn));var xd=[].concat(Va,Nn(Tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(zs.map(function(e){return"".concat(e,"x")})).concat(yd.map(function(e){return"w-".concat(e)})),cn=ht.FontAwesomeConfig||{};function wd(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function kd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var Ad=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ad.forEach(function(e){var t=Ba(e,2),n=t[0],r=t[1],a=kd(wd(n));a!=null&&(cn[r]=a)})}var Hs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rs,replacementClass:Ds,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};cn.familyPrefix&&(cn.cssPrefix=cn.familyPrefix);var Kt=T(T({},Hs),cn);Kt.autoReplaceSvg||(Kt.observeMutations=!1);var P={};Object.keys(Hs).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Kt[e]=n,un.forEach(function(r){return r(P)})},get:function(){return Kt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Kt.cssPrefix=t,un.forEach(function(n){return n(P)})},get:function(){return Kt.cssPrefix}});ht.FontAwesomeConfig=P;var un=[];function Cd(e){return un.push(e),function(){un.splice(un.indexOf(e),1)}}var st=la,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ed(e){if(!(!e||!rt)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var Od="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sn(){for(var e=12,t="";e-- >0;)t+=Od[Math.random()*62|0];return t}function Gt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qa(e){return e.classList?Gt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Us(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Td(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Us(e[n]),'" ')},"").trim()}function Tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xa(e){return e.size!==Be.size||e.x!==Be.x||e.y!==Be.y||e.rotate!==Be.rotate||e.flipX||e.flipY}function Sd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Id(e){var t=e.transform,n=e.width,r=n===void 0?la:n,a=e.height,i=a===void 0?la:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ls?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Pd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bs(){var e=Rs,t=Ds,n=P.cssPrefix,r=P.replacementClass,a=Pd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ro=!1;function Br(){P.autoAddCss&&!ro&&(Ed(Bs()),ro=!0)}var Nd={mixout:function(){return{dom:{css:Bs,insertCss:Br}}},hooks:function(){return{beforeDOMElementCreation:function(){Br()},beforeI2svg:function(){Br()}}}},et=ht||{};et[Qe]||(et[Qe]={});et[Qe].styles||(et[Qe].styles={});et[Qe].hooks||(et[Qe].hooks={});et[Qe].shims||(et[Qe].shims=[]);var Le=et[Qe],Ws=[],Md=function e(){se.removeEventListener("DOMContentLoaded",e),fr=1,Ws.map(function(t){return t()})},fr=!1;rt&&(fr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),fr||se.addEventListener("DOMContentLoaded",Md));function Fd(e){!rt||(fr?setTimeout(e,0):Ws.push(e))}function Fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Us(e):"<".concat(t," ").concat(Td(r),">").concat(i.map(Fn).join(""),"</").concat(t,">")}function ao(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ld=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ld(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Rd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ca(e){var t=Rd(e);return t.length===1?t[0].toString(16):null}function Dd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function io(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ua(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=io(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,io(t)):Le.styles[e]=T(T({},Le.styles[e]||{}),i),e==="fas"&&ua("fa",t)}var qn,Xn,Jn,Rt=Le.styles,jd=Le.shims,$d=(qn={},de(qn,ie,Object.values(On[ie])),de(qn,fe,Object.values(On[fe])),qn),Ja=null,Ys={},Ks={},Vs={},qs={},Xs={},zd=(Xn={},de(Xn,ie,Object.keys(Cn[ie])),de(Xn,fe,Object.keys(Cn[fe])),Xn);function Hd(e){return~xd.indexOf(e)}function Ud(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Hd(a)?a:null}var Js=function(){var t=function(i){return Wr(Rt,function(o,s,l){return o[l]=Wr(s,i,{}),o},{})};Ys=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ks=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Xs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Rt||P.autoFetchSvg,r=Wr(jd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Vs=r.names,qs=r.unicodes,Ja=Sr(P.styleDefault,{family:P.familyDefault})};Cd(function(e){Ja=Sr(e.styleDefault,{family:P.familyDefault})});Js();function Ga(e,t){return(Ys[e]||{})[t]}function Bd(e,t){return(Ks[e]||{})[t]}function Tt(e,t){return(Xs[e]||{})[t]}function Gs(e){return Vs[e]||{prefix:null,iconName:null}}function Wd(e){var t=qs[e],n=Ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Ja}var Za=function(){return{prefix:null,iconName:null,rest:[]}};function Sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ie:n,a=Cn[r][e],i=En[r][e]||En[r][a],o=e in Le.styles?e:null;return i||o||null}var oo=(Jn={},de(Jn,ie,Object.keys(On[ie])),de(Jn,fe,Object.keys(On[fe])),Jn);function Ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,ie,"".concat(P.cssPrefix,"-").concat(ie)),de(t,fe,"".concat(P.cssPrefix,"-").concat(fe)),t),o=null,s=ie;(e.includes(i[ie])||e.some(function(f){return oo[ie].includes(f)}))&&(s=ie),(e.includes(i[fe])||e.some(function(f){return oo[fe].includes(f)}))&&(s=fe);var l=e.reduce(function(f,u){var m=Ud(P.cssPrefix,u);if(Rt[u]?(u=$d[s].includes(u)?hd[s][u]:u,o=u,f.prefix=u):zd[s].indexOf(u)>-1?(o=u,f.prefix=Sr(u,{family:s})):m?f.iconName=m:u!==P.replacementClass&&u!==i[ie]&&u!==i[fe]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var p=o==="fa"?Gs(f.iconName):{},_=Tt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||_||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Rt.far&&Rt.fas&&!P.autoFetchSvg&&(f.prefix="fas")}return f},Za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===fe&&(Rt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=Tt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var Yd=function(){function e(){rd(this,e),this.definitions={}}return ad(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ua(s,o[s]);var l=On[ie][s];l&&ua(l,o[s]),Js()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),so=[],Dt={},Ut={},Kd=Object.keys(Ut);function Vd(e,t){var n=t.mixoutsTo;return so=e,Dt={},Object.keys(Ut).forEach(function(r){Kd.indexOf(r)===-1&&delete Ut[r]}),so.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),lr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Dt[o]||(Dt[o]=[]),Dt[o].push(i[o])})}r.provides&&r.provides(Ut)}),n}function da(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Dt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Dt[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ut[e]?Ut[e].apply(null,t):void 0}function ma(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(!!t)return t=Tt(n,t)||t,ao(Zs.definitions,n,t)||ao(Le.styles,n,t)}var Zs=new Yd,qd=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,Nt("noAuto")},Xd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Nt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Fd(function(){Gd({autoReplaceSvgRoot:n}),Nt("watch",t)})}},Jd={icon:function(t){if(t===null)return null;if(lr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Sr(t[0]);return{prefix:r,iconName:Tt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(gd))){var a=Ir(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:Tt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:Tt(i,t)||t}}}},Ee={noAuto:qd,config:P,dom:Xd,parse:Jd,library:Zs,findIconDefinition:ma,toHtml:Fn},Gd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(Le.styles).length>0||P.autoFetchSvg)&&rt&&P.autoReplaceSvg&&Ee.dom.i2svg({node:r})};function Pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!rt){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Zd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Tr(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Qd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Qa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,_=p===void 0?!1:p,S=r.found?r:n,N=S.width,M=S.height,b=a==="fak",A=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(U){return m.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(m.classes).join(" "),F={children:[],attributes:T(T({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(M)})},$=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/M*16*.0625,"em")}:{};_&&(F.attributes[Pt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||Sn())},children:[l]}),delete F.attributes.title);var H=T(T({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},$),m.styles)}),J=r.found&&n.found?tt("generateAbstractMask",H)||{children:[],attributes:{}}:tt("generateAbstractIcon",H)||{children:[],attributes:{}},V=J.children,j=J.attributes;return H.children=V,H.attributes=j,s?Qd(H):Zd(H)}function lo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Pt]="");var u=T({},o.styles);Xa(a)&&(u.transform=Id({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Tr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function em(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yr=Le.styles;function pa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var tm={found:!1,width:512,height:512};function nm(e,t){!js&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=Gs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Yr[t]&&Yr[t][e]){var o=Yr[t][e];return r(pa(o))}nm(e,t),r(T(T({},tm),{},{icon:P.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var fo=function(){},ga=P.measurePerformance&&Un&&Un.mark&&Un.measure?Un:{mark:fo,measure:fo},on='FA "6.2.0"',rm=function(t){return ga.mark("".concat(on," ").concat(t," begins")),function(){return Qs(t)}},Qs=function(t){ga.mark("".concat(on," ").concat(t," ends")),ga.measure("".concat(on," ").concat(t),"".concat(on," ").concat(t," begins"),"".concat(on," ").concat(t," ends"))},ei={begin:rm,end:Qs},tr=function(){};function co(e){var t=e.getAttribute?e.getAttribute(Pt):null;return typeof t=="string"}function am(e){var t=e.getAttribute?e.getAttribute(Ya):null,n=e.getAttribute?e.getAttribute(Ka):null;return t&&n}function im(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function om(){if(P.autoReplaceSvg===!0)return nr.replace;var e=nr[P.autoReplaceSvg];return e||nr.replace}function sm(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function lm(e){return se.createElement(e)}function el(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?sm:lm:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(el(o,{ceFn:r}))}),a}function fm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(el(a),n)}),n.getAttribute(Pt)===null&&P.keepOriginalSource){var r=se.createComment(fm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qa(n).indexOf(P.replacementClass))return nr.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Fn(s)}).join(`
`);n.setAttribute(Pt,""),n.innerHTML=o}};function uo(e){e()}function tl(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=uo;P.mutateApproach===md&&(r=ht.requestAnimationFrame||uo),r(function(){var a=om(),i=ei.begin("mutate");e.map(a),i(),n()})}}var ti=!1;function nl(){ti=!0}function va(){ti=!1}var cr=null;function mo(e){if(!!to&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,a=r===void 0?tr:r,i=e.pseudoElementsCallback,o=i===void 0?tr:i,s=e.observeMutationsRoot,l=s===void 0?se:s;cr=new to(function(f){if(!ti){var u=gt();Gt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!co(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&co(m.target)&&~_d.indexOf(m.attributeName))if(m.attributeName==="class"&&am(m.target)){var p=Ir(qa(m.target)),_=p.prefix,S=p.iconName;m.target.setAttribute(Ya,_||u),S&&m.target.setAttribute(Ka,S)}else im(m.target)&&a(m.target)})}}),rt&&cr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cm(){!cr||cr.disconnect()}function um(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function dm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ir(qa(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Bd(a.prefix,e.innerText)||Ga(a.prefix,ca(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function mm(e){var t=Gt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function pm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Be,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=dm(e),r=n.iconName,a=n.prefix,i=n.rest,o=mm(e),s=da("parseNodeAttributes",{},e),l=t.styleParser?um(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Be,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var hm=Le.styles;function rl(e){var t=P.autoReplaceSvg==="nest"?po(e,{styleParser:!1}):po(e);return~t.extra.classes.indexOf($s)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var vt=new Set;Va.map(function(e){vt.add("fa-".concat(e))});Object.keys(Cn[ie]).map(vt.add.bind(vt));Object.keys(Cn[fe]).map(vt.add.bind(vt));vt=Nn(vt);function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=se.documentElement.classList,r=function(m){return n.add("".concat(no,"-").concat(m))},a=function(m){return n.remove("".concat(no,"-").concat(m))},i=P.autoFetchSvg?vt:Va.map(function(u){return"fa-".concat(u)}).concat(Object.keys(hm));i.includes("fa")||i.push("fa");var o=[".".concat($s,":not([").concat(Pt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Gt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ei.begin("onTree"),f=s.reduce(function(u,m){try{var p=rl(m);p&&u.push(p)}catch(_){js||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){tl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function gm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rl(e).then(function(n){n&&tl([n],t)})}function vm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ma(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ma(a||{})),e(r,T(T({},n),{},{mask:a}))}}var bm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Be:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,_=n.titleId,S=_===void 0?null:_,N=n.classes,M=N===void 0?[]:N,b=n.attributes,A=b===void 0?{}:b,F=n.styles,$=F===void 0?{}:F;if(!!t){var H=t.prefix,J=t.iconName,V=t.icon;return Pr(T({type:"icon"},t),function(){return Nt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(p?A["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(S||Sn()):(A["aria-hidden"]="true",A.focusable="false")),Qa({icons:{main:pa(V),mask:l?pa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:J,transform:T(T({},Be),a),symbol:o,title:p,maskId:u,titleId:S,extra:{attributes:A,styles:$,classes:M}})})}},ym={mixout:function(){return{icon:vm(bm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ho,n.nodeCallback=gm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,o=i===void 0?function(){}:i;return ho(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(_,S){Promise.all([ha(a,s),u.iconName?ha(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var M=Ba(N,2),b=M[0],A=M[1];_([n,Qa({icons:{main:b,mask:A},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Tr(s);l.length>0&&(a.style=l);var f;return Xa(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},_m={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Pr({type:"layer"},function(){Nt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},xm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return Pr({type:"counter",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),em({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Nn(s))}})})}}}},wm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Be:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,_=p===void 0?{}:p;return Pr({type:"text",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),lo({content:n,transform:T(T({},Be),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Nn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ls){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,lo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},km=new RegExp('"',"ug"),go=[1105920,1112319];function Am(e){var t=e.replace(km,""),n=Dd(t,0),r=n>=go[0]&&n<=go[1],a=t.length===2?t[0]===t[1]:!1;return{value:ca(a?t[0]:t),isSecondary:r||a}}function vo(e,t){var n="".concat(dd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Gt(e.children),o=i.filter(function(V){return V.getAttribute(fa)===t})[0],s=ht.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(vd),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?fe:ie,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?En[p][l[2].toLowerCase()]:bd[p][f],S=Am(m),N=S.value,M=S.isSecondary,b=l[0].startsWith("FontAwesome"),A=Ga(_,N),F=A;if(b){var $=Wd(N);$.iconName&&$.prefix&&(A=$.iconName,_=$.prefix)}if(A&&!M&&(!o||o.getAttribute(Ya)!==_||o.getAttribute(Ka)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var H=pm(),J=H.extra;J.attributes[fa]=t,ha(A,_).then(function(V){var j=Qa(T(T({},H),{},{icons:{main:V,mask:Za()},prefix:_,iconName:F,extra:J,watchable:!0})),U=se.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=j.map(function(q){return Fn(q)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cm(e){return Promise.all([vo(e,"::before"),vo(e,"::after")])}function Em(e){return e.parentNode!==document.head&&!~pd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function bo(e){if(!!rt)return new Promise(function(t,n){var r=Gt(e.querySelectorAll("*")).filter(Em).map(Cm),a=ei.begin("searchPseudoElements");nl(),Promise.all(r).then(function(){a(),va(),t()}).catch(function(){a(),va(),n()})})}var Om={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=bo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;P.searchPseudoElements&&bo(a)}}},yo=!1,Tm={mixout:function(){return{dom:{unwatch:function(){nl(),yo=!0}}}},hooks:function(){return{bootstrap:function(){mo(da("mutationObserverCallbacks",{}))},noAuto:function(){cm()},watch:function(n){var r=n.observeMutationsRoot;yo?va():mo(da("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_o=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Sm={mixout:function(){return{parse:{transform:function(n){return _o(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=_o(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:p};return{tag:"g",attributes:T({},_.outer),children:[{tag:"g",attributes:T({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),_.path)}]}]}}}},Kr={x:0,y:0,width:"100%",height:"100%"};function xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Im(e){return e.tag==="g"?e.children:[e]}var Pm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Ir(a.split(" ").map(function(o){return o.trim()})):Za();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,p=o.icon,_=Sd({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:T(T({},Kr),{},{fill:"white"})},N=u.children?{children:u.children.map(xo)}:{},M={tag:"g",attributes:T({},_.inner),children:[xo(T({tag:u.tag,attributes:T(T({},u.attributes),_.path)},N))]},b={tag:"g",attributes:T({},_.outer),children:[M]},A="mask-".concat(s||Sn()),F="clip-".concat(s||Sn()),$={tag:"mask",attributes:T(T({},Kr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,b]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Im(p)},$]};return r.push(H,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(A,")")},Kr)}),{children:r,attributes:a}}}},Nm={provides:function(t){var n=!1;ht.matchMedia&&(n=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Fm=[Nd,ym,_m,xm,wm,Om,Tm,Sm,Pm,Nm,Mm];Vd(Fm,{mixoutsTo:Ee});Ee.noAuto;var al=Ee.config,bt=Ee.library;Ee.dom;var ur=Ee.parse;Ee.findIconDefinition;Ee.toHtml;var Lm=Ee.icon;Ee.layer;var Rm=Ee.text;Ee.counter;function wo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wo(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dr(e){return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function jm(e,t){if(e==null)return{};var n=Dm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ba(e){return $m(e)||zm(e)||Hm(e)||Um()}function $m(e){if(Array.isArray(e))return ya(e)}function zm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hm(e,t){if(!!e){if(typeof e=="string")return ya(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ya(e,t)}}function ya(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Um(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},il={exports:{}};(function(e){(function(t){var n=function(b,A,F){if(!f(A)||m(A)||p(A)||_(A)||l(A))return A;var $,H=0,J=0;if(u(A))for($=[],J=A.length;H<J;H++)$.push(n(b,A[H],F));else{$={};for(var V in A)Object.prototype.hasOwnProperty.call(A,V)&&($[b(V,F)]=n(b,A[V],F))}return $},r=function(b,A){A=A||{};var F=A.separator||"_",$=A.split||/(?=[A-Z])/;return b.split($).join(F)},a=function(b){return S(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(A,F){return F?F.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var A=a(b);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(b,A){return r(b,A).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},u=function(b){return s.call(b)=="[object Array]"},m=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},_=function(b){return s.call(b)=="[object Boolean]"},S=function(b){return b=b-0,b===b},N=function(b,A){var F=A&&"process"in A?A.process:A;return typeof F!="function"?b:function($,H){return F($,b,H)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,A){return n(N(a,A),b)},decamelizeKeys:function(b,A){return n(N(o,A),b,A)},pascalizeKeys:function(b,A){return n(N(i,A),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(Bm)})(il);var Wm=il.exports,Ym=["class","style"];function Km(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ni(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Vm(u);break;case"style":l.style=Km(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=jm(n,Ym);return ws(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var ol=!1;try{ol=!0}catch{}function qm(){if(!ol&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function dn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Xm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ko(e){if(e&&dr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ur.icon)return ur.icon(e);if(e===null)return null;if(dr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Jm=Da({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ge(function(){return ko(t.icon)}),i=ge(function(){return dn("classes",Xm(t))}),o=ge(function(){return dn("transform",typeof t.transform=="string"?ur.transform(t.transform):t.transform)}),s=ge(function(){return dn("mask",ko(t.mask))}),l=ge(function(){return Lm(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(u){if(!u)return qm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ge(function(){return l.value?ni(l.value.abstract[0],{},r):null});return function(){return f.value}}});Da({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=al.familyPrefix,i=ge(function(){return["".concat(a,"-layers")].concat(ba(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ws("div",{class:i.value},r.default?r.default():[])}}});Da({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=al.familyPrefix,i=ge(function(){return dn("classes",[].concat(ba(t.counter?["".concat(a,"-layers-counter")]:[]),ba(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ge(function(){return dn("transform",typeof t.transform=="string"?ur.transform(t.transform):t.transform)}),s=ge(function(){var f=Rm(t.value.toString(),Me(Me({},o.value),i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ge(function(){return ni(s.value,{},r)});return function(){return l.value}}});var Gm={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M421.7 220.3l-11.3 11.3-22.6 22.6-205 205c-6.6 6.6-14.8 11.5-23.8 14.1L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L38.7 353.1c2.6-9 7.5-17.2 14.1-23.8l205-205 22.6-22.6 11.3-11.3 33.9 33.9 62.1 62.1 33.9 33.9zM96 353.9l-9.3 9.3c-.9 .9-1.6 2.1-2 3.4l-25.3 86 86-25.3c1.3-.4 2.5-1.1 3.4-2l9.3-9.3H112c-8.8 0-16-7.2-16-16V353.9zM453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-14.5 14.5-22.6 22.6-11.3 11.3-33.9-33.9-62.1-62.1L314.3 67.7l11.3-11.3 22.6-22.6 14.5-14.5c25-25 65.5-25 90.5 0z"]},Zm={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"]},Qm={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},ep={prefix:"fas",iconName:"b",icon:[320,512,[98],"42","M32 32C14.3 32 0 46.3 0 64V256 448c0 17.7 14.3 32 32 32H192c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128H32zM160 224H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288h96 32c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V288z"]},tp={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]},np={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},rp={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ap={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};bt.add(ep);bt.add(Gm);bt.add(Qm);bt.add(tp);bt.add(Zm);bt.add(rp);bt.add(ap);bt.add(np);Bc(nd).component("font-awesome-icon",Jm).mount("#app");
