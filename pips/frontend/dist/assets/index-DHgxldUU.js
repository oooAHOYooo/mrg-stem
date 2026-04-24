(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ic(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},zs=[],jn=()=>{},Dd=()=>!1,_a=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),va=n=>n.startsWith("onUpdate:"),qt=Object.assign,Uc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hp=Object.prototype.hasOwnProperty,mt=(n,e)=>Hp.call(n,e),je=Array.isArray,Hs=n=>jr(n)==="[object Map]",ir=n=>jr(n)==="[object Set]",bu=n=>jr(n)==="[object Date]",et=n=>typeof n=="function",Dt=n=>typeof n=="string",Zn=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",Ld=n=>(_t(n)||et(n))&&et(n.then)&&et(n.catch),Id=Object.prototype.toString,jr=n=>Id.call(n),Vp=n=>jr(n).slice(8,-1),Ud=n=>jr(n)==="[object Object]",Nc=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ar=Ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Gp=/-\w/g,Nn=xa(n=>n.replace(Gp,e=>e.slice(1).toUpperCase())),Wp=/\B([A-Z])/g,Wi=xa(n=>n.replace(Wp,"-$1").toLowerCase()),Nd=xa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Oa=xa(n=>n?`on${Nd(n)}`:""),$n=(n,e)=>!Object.is(n,e),Go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Fd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ya=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Eu;const Ma=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function St(n){if(je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?Yp(i):St(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||_t(n))return n}const Xp=/;(?![^(]*\))/g,$p=/:([^]+)/,qp=/\/\*[^]*?\*\//g;function Yp(n){const e={};return n.replace(qp,"").split(Xp).forEach(t=>{if(t){const i=t.split($p);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Lt(n){let e="";if(Dt(n))e=n;else if(je(n))for(let t=0;t<n.length;t++){const i=Lt(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kp=Ic(jp);function Od(n){return!!n||n===""}function Zp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=sr(n[i],e[i]);return t}function sr(n,e){if(n===e)return!0;let t=bu(n),i=bu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Zn(n),i=Zn(e),t||i)return n===e;if(t=je(n),i=je(e),t||i)return t&&i?Zp(n,e):!1;if(t=_t(n),i=_t(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!sr(n[o],e[o]))return!1}}return String(n)===String(e)}function Fc(n,e){return n.findIndex(t=>sr(t,e))}const Bd=n=>!!(n&&n.__v_isRef===!0),Ve=n=>Dt(n)?n:n==null?"":je(n)||_t(n)&&(n.toString===Id||!et(n.toString))?Bd(n)?Ve(n.value):JSON.stringify(n,kd,2):String(n),kd=(n,e)=>Bd(e)?kd(n,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ba(i,r)+" =>"]=s,t),{})}:ir(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ba(t))}:Zn(e)?Ba(e):_t(e)&&!je(e)&&!Ud(e)?String(e):e,Ba=(n,e="")=>{var t;return Zn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class Jp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qp(){return on}let Mt;const ka=new WeakSet;class zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ka.has(this)&&(ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tu(this),Gd(this);const e=Mt,t=Fn;Mt=this,Fn=!0;try{return this.fn()}finally{Wd(this),Mt=e,Fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kc(e);this.deps=this.depsTail=void 0,Tu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pl(this)&&this.run()}get dirty(){return Pl(this)}}let Hd=0,Cr,Rr;function Vd(n,e=!1){if(n.flags|=8,e){n.next=Rr,Rr=n;return}n.next=Cr,Cr=n}function Oc(){Hd++}function Bc(){if(--Hd>0)return;if(Rr){let e=Rr;for(Rr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Cr;){let e=Cr;for(Cr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Gd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),kc(i),em(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Pl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Xd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pl(n))))return;n.flags|=2;const e=n.dep,t=Mt,i=Fn;Mt=n,Fn=!0;try{Gd(n);const s=n.fn(n._value);(e.version===0||$n(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Mt=t,Fn=i,Wd(n),n.flags&=-3}}function kc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)kc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function em(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fn=!0;const $d=[];function yi(){$d.push(Fn),Fn=!1}function Mi(){const n=$d.pop();Fn=n===void 0?!0:n}function Tu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let Br=0;class tm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!Fn||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new tm(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,qd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=i)}return t}trigger(e){this.version++,Br++,this.notify(e)}notify(e){Oc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bc()}}}function qd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Dl=new WeakMap,cs=Symbol(""),Ll=Symbol(""),kr=Symbol("");function Xt(n,e,t){if(Fn&&Mt){let i=Dl.get(n);i||Dl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new zc),s.map=i,s.key=t),s.track()}}function pi(n,e,t,i,s,r){const o=Dl.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Oc(),e==="clear")o.forEach(a);else{const l=je(n),c=l&&Nc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===kr||!Zn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(kr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(cs)),Hs(n)&&a(o.get(Ll)));break;case"delete":l||(a(o.get(cs)),Hs(n)&&a(o.get(Ll)));break;case"set":Hs(n)&&a(o.get(cs));break}}Bc()}function _s(n){const e=pt(n);return e===n?e:(Xt(e,"iterate",kr),bn(n)?e:e.map(Bn))}function Sa(n){return Xt(n=pt(n),"iterate",kr),n}function Vn(n,e){return Si(n)?qs(us(n)?Bn(e):e):Bn(e)}const nm={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return _s(this).concat(...n.map(e=>je(e)?_s(e):e))},entries(){return za(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,e){return ti(this,"every",n,e,void 0,arguments)},filter(n,e){return ti(this,"filter",n,e,t=>t.map(i=>Vn(this,i)),arguments)},find(n,e){return ti(this,"find",n,e,t=>Vn(this,t),arguments)},findIndex(n,e){return ti(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ti(this,"findLast",n,e,t=>Vn(this,t),arguments)},findLastIndex(n,e){return ti(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ti(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ha(this,"includes",n)},indexOf(...n){return Ha(this,"indexOf",n)},join(n){return _s(this).join(n)},lastIndexOf(...n){return Ha(this,"lastIndexOf",n)},map(n,e){return ti(this,"map",n,e,void 0,arguments)},pop(){return fr(this,"pop")},push(...n){return fr(this,"push",n)},reduce(n,...e){return wu(this,"reduce",n,e)},reduceRight(n,...e){return wu(this,"reduceRight",n,e)},shift(){return fr(this,"shift")},some(n,e){return ti(this,"some",n,e,void 0,arguments)},splice(...n){return fr(this,"splice",n)},toReversed(){return _s(this).toReversed()},toSorted(n){return _s(this).toSorted(n)},toSpliced(...n){return _s(this).toSpliced(...n)},unshift(...n){return fr(this,"unshift",n)},values(){return za(this,"values",n=>Vn(this,n))}};function za(n,e,t){const i=Sa(n),s=i[e]();return i!==n&&!bn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const im=Array.prototype;function ti(n,e,t,i,s,r){const o=Sa(n),a=o!==n&&!bn(n),l=o[e];if(l!==im[e]){const f=l.apply(n,r);return a?Bn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Vn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function wu(n,e,t,i){const s=Sa(n),r=s!==n&&!bn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Vn(n,c)),t.call(this,c,Vn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?Vn(n,l):l}function Ha(n,e,t){const i=pt(n);Xt(i,"iterate",kr);const s=i[e](...t);return(s===-1||s===!1)&&Wc(t[0])?(t[0]=pt(t[0]),i[e](...t)):s}function fr(n,e,t=[]){yi(),Oc();const i=pt(n)[e].apply(n,t);return Bc(),Mi(),i}const sm=Ic("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function rm(n){Zn(n)||(n=String(n));const e=pt(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class jd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?mm:Qd:r?Jd:Zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!s){let l;if(o&&(l=nm[t]))return l;if(t==="hasOwnProperty")return rm}const a=Reflect.get(e,t,$t(e)?e:i);if((Zn(t)?Yd.has(t):sm(t))||(s||Xt(e,"get",t),r))return a;if($t(a)){const l=o&&Nc(t)?a:a.value;return s&&_t(l)?ea(l):l}return _t(a)?s?ea(a):Vc(a):a}}class Kd extends jd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=je(e)&&Nc(t);if(!this._isShallow){const c=Si(r);if(!bn(i)&&!Si(i)&&(r=pt(r),i=pt(i)),!o&&$t(r)&&!$t(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,$t(e)?e:s);return e===pt(s)&&(a?$n(i,r)&&pi(e,"set",t,i):pi(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Zn(t)||!Yd.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",je(e)?"length":cs),Reflect.ownKeys(e)}}class om extends jd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const am=new Kd,lm=new om,cm=new Kd(!0);const Il=n=>n,ro=n=>Reflect.getPrototypeOf(n);function um(n,e,t){return function(...i){const s=this.__v_raw,r=pt(s),o=Hs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Il:e?qs:Bn;return!e&&Xt(r,"iterate",l?Ll:cs),qt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function oo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function fm(n,e){const t={get(s){const r=this.__v_raw,o=pt(r),a=pt(s);n||($n(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=ro(o),c=e?Il:n?qs:Bn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(pt(s),"iterate",cs),s.size},has(s){const r=this.__v_raw,o=pt(r),a=pt(s);return n||($n(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=pt(a),c=e?Il:n?qs:Bn;return!n&&Xt(l,"iterate",cs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return qt(t,n?{add:oo("add"),set:oo("set"),delete:oo("delete"),clear:oo("clear")}:{add(s){const r=pt(this),o=ro(r),a=pt(s),l=!e&&!bn(s)&&!Si(s)?a:s;return o.has.call(r,l)||$n(s,l)&&o.has.call(r,s)||$n(a,l)&&o.has.call(r,a)||(r.add(l),pi(r,"add",l,l)),this},set(s,r){!e&&!bn(r)&&!Si(r)&&(r=pt(r));const o=pt(this),{has:a,get:l}=ro(o);let c=a.call(o,s);c||(s=pt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?$n(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=pt(this),{has:o,get:a}=ro(r);let l=o.call(r,s);l||(s=pt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=pt(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=um(s,n,e)}),t}function Hc(n,e){const t=fm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const dm={get:Hc(!1,!1)},hm={get:Hc(!1,!0)},pm={get:Hc(!0,!1)};const Zd=new WeakMap,Jd=new WeakMap,Qd=new WeakMap,mm=new WeakMap;function gm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _m(n){return n.__v_skip||!Object.isExtensible(n)?0:gm(Vp(n))}function Vc(n){return Si(n)?n:Gc(n,!1,am,dm,Zd)}function vm(n){return Gc(n,!1,cm,hm,Jd)}function ea(n){return Gc(n,!0,lm,pm,Qd)}function Gc(n,e,t,i,s){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=_m(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function us(n){return Si(n)?us(n.__v_raw):!!(n&&n.__v_isReactive)}function Si(n){return!!(n&&n.__v_isReadonly)}function bn(n){return!!(n&&n.__v_isShallow)}function Wc(n){return n?!!n.__v_raw:!1}function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}function xm(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&Fd(n,"__v_skip",!0),n}const Bn=n=>_t(n)?Vc(n):n,qs=n=>_t(n)?ea(n):n;function $t(n){return n?n.__v_isRef===!0:!1}function Fe(n){return ym(n,!1)}function ym(n,e){return $t(n)?n:new Mm(n,e)}class Mm{constructor(e,t){this.dep=new zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:pt(e),this._value=t?e:Bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||bn(e)||Si(e);e=i?e:pt(e),$n(e,t)&&(this._rawValue=e,this._value=i?e:Bn(e),this.dep.trigger())}}function me(n){return $t(n)?n.value:n}const Sm={get:(n,e,t)=>e==="__v_raw"?n:me(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return $t(s)&&!$t(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function eh(n){return us(n)?n:new Proxy(n,Sm)}class bm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return Vd(this,!0),!0}get value(){const e=this.dep.track();return Xd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Em(n,e,t=!1){let i,s;return et(n)?i=n:(i=n.get,s=n.set),new bm(i,s,t)}const ao={},ta=new WeakMap;let ns;function Tm(n,e=!1,t=ns){if(t){let i=ta.get(t);i||ta.set(t,i=[]),i.push(n)}}function wm(n,e,t=xt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=g=>s?g:bn(g)||s===!1||s===0?mi(g,1):mi(g);let u,f,h,p,_=!1,v=!1;if($t(n)?(f=()=>n.value,_=bn(n)):us(n)?(f=()=>c(n),_=!0):je(n)?(v=!0,_=n.some(g=>us(g)||bn(g)),f=()=>n.map(g=>{if($t(g))return g.value;if(us(g))return c(g);if(et(g))return l?l(g,2):g()})):et(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){yi();try{h()}finally{Mi()}}const g=ns;ns=u;try{return l?l(n,3,[p]):n(p)}finally{ns=g}}:f=jn,e&&s){const g=f,k=s===!0?1/0:s;f=()=>mi(g(),k)}const m=Qp(),d=()=>{u.stop(),m&&m.active&&Uc(m.effects,u)};if(r&&e){const g=e;e=(...k)=>{g(...k),d()}}let T=v?new Array(n.length).fill(ao):ao;const S=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(e){const k=u.run();if(s||_||(v?k.some((D,P)=>$n(D,T[P])):$n(k,T))){h&&h();const D=ns;ns=u;try{const P=[k,T===ao?void 0:v&&T[0]===ao?[]:T,p];T=k,l?l(e,3,P):e(...P)}finally{ns=D}}}else u.run()};return a&&a(S),u=new zd(f),u.scheduler=o?()=>o(S,!1):S,p=g=>Tm(g,!1,u),h=u.onStop=()=>{const g=ta.get(u);if(g){if(l)l(g,4);else for(const k of g)k();ta.delete(u)}},e?i?S(!0):T=u.run():o?o(S.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function mi(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,$t(n))mi(n.value,e,t);else if(je(n))for(let i=0;i<n.length;i++)mi(n[i],e,t);else if(ir(n)||Hs(n))n.forEach(i=>{mi(i,e,t)});else if(Ud(n)){for(const i in n)mi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kr(n,e,t,i){try{return i?n(...i):n()}catch(s){ba(s,e,t)}}function Jn(n,e,t,i){if(et(n)){const s=Kr(n,e,t,i);return s&&Ld(s)&&s.catch(r=>{ba(r,e,t)}),s}if(je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Jn(n[r],e,t,i));return s}}function ba(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){yi(),Kr(r,null,10,[n,l,c]),Mi();return}}Am(n,t,s,i,o)}function Am(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Jt=[];let Hn=-1;const Vs=[];let Ui=null,Us=0;const th=Promise.resolve();let na=null;function qn(n){const e=na||th;return n?e.then(this?n.bind(this):n):e}function Cm(n){let e=Hn+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=zr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Xc(n){if(!(n.flags&1)){const e=zr(n),t=Jt[Jt.length-1];!t||!(n.flags&2)&&e>=zr(t)?Jt.push(n):Jt.splice(Cm(e),0,n),n.flags|=1,nh()}}function nh(){na||(na=th.then(sh))}function Rm(n){je(n)?Vs.push(...n):Ui&&n.id===-1?Ui.splice(Us+1,0,n):n.flags&1||(Vs.push(n),n.flags|=1),nh()}function Au(n,e,t=Hn+1){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ih(n){if(Vs.length){const e=[...new Set(Vs)].sort((t,i)=>zr(t)-zr(i));if(Vs.length=0,Ui){Ui.push(...e);return}for(Ui=e,Us=0;Us<Ui.length;Us++){const t=Ui[Us];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ui=null,Us=0}}const zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function sh(n){try{for(Hn=0;Hn<Jt.length;Hn++){const e=Jt[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<Jt.length;Hn++){const e=Jt[Hn];e&&(e.flags&=-2)}Hn=-1,Jt.length=0,ih(),na=null,(Jt.length||Vs.length)&&sh()}}let Sn=null,rh=null;function ia(n){const e=Sn;return Sn=n,rh=n&&n.type.__scopeId||null,e}function Pm(n,e=Sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Bu(-1);const r=ia(e);let o;try{o=n(...s)}finally{ia(r),i._d&&Bu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gn(n,e){if(Sn===null)return n;const t=Ca(Sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=xt]=e[s];r&&(et(r)&&(r={mounted:r,updated:r}),r.deep&&mi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function qi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yi(),Jn(l,t,8,[n.el,a,n,e]),Mi())}}function Dm(n,e){if(tn){let t=tn.provides;const i=tn.parent&&tn.parent.provides;i===t&&(t=tn.provides=Object.create(i)),t[n]=e}}function Wo(n,e,t=!1){const i=Rg();if(i||Gs){let s=Gs?Gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&et(e)?e.call(i&&i.proxy):e}}const Lm=Symbol.for("v-scx"),Im=()=>Wo(Lm);function En(n,e,t){return oh(n,e,t)}function oh(n,e,t=xt){const{immediate:i,deep:s,flush:r,once:o}=t,a=qt({},t),l=e&&i||!e&&r!=="post";let c;if(Vr){if(r==="sync"){const p=Im();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=jn,p.resume=jn,p.pause=jn,p}}const u=tn;a.call=(p,_,v)=>Jn(p,u,_,v);let f=!1;r==="post"?a.scheduler=p=>{rn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Xc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=wm(n,e,a);return Vr&&(c?c.push(h):l&&h()),h}function Um(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?ah(i,n):()=>i[n]:n.bind(i,i);let r;et(e)?r=e:(r=e.handler,t=e);const o=Jr(this),a=oh(s,r.bind(i),t);return o(),a}function ah(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Nm=Symbol("_vte"),Fm=n=>n.__isTeleport,Om=Symbol("_leaveCb");function $c(n,e){n.shapeFlag&6&&n.component?(n.transition=e,$c(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function lh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Cu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const sa=new WeakMap;function Pr(n,e,t,i,s=!1){if(je(n)){n.forEach((v,m)=>Pr(v,e&&(je(e)?e[m]:e),t,i,s));return}if(Dr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Pr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ca(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,f=a.setupState,h=pt(f),p=f===xt?Dd:v=>Cu(u,v)?!1:mt(h,v),_=(v,m)=>!(m&&Cu(u,m));if(c!=null&&c!==l){if(Ru(e),Dt(c))u[c]=null,p(c)&&(f[c]=null);else if($t(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(et(l))Kr(l,a,12,[o,u]);else{const v=Dt(l),m=$t(l);if(v||m){const d=()=>{if(n.f){const T=v?p(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)je(T)&&Uc(T,r);else if(je(T))T.includes(r)||T.push(r);else if(v)u[l]=[r],p(l)&&(f[l]=u[l]);else{const S=[r];_(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else v?(u[l]=o,p(l)&&(f[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{d(),sa.delete(n)};T.id=-1,sa.set(n,T),rn(T,t)}else Ru(n),d()}}}function Ru(n){const e=sa.get(n);e&&(e.flags|=8,sa.delete(n))}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Dr=n=>!!n.type.__asyncLoader,ch=n=>n.type.__isKeepAlive;function Bm(n,e){uh(n,"a",e)}function km(n,e){uh(n,"da",e)}function uh(n,e,t=tn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ea(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ch(s.parent.vnode)&&zm(i,e,t,s),s=s.parent}}function zm(n,e,t,i){const s=Ea(e,n,i,!0);Zr(()=>{Uc(i[e],s)},t)}function Ea(n,e,t=tn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{yi();const a=Jr(t),l=Jn(e,t,n,o);return a(),Mi(),l});return i?s.unshift(r):s.push(r),r}}const Ei=n=>(e,t=tn)=>{(!Vr||n==="sp")&&Ea(n,(...i)=>e(...i),t)},Hm=Ei("bm"),Ta=Ei("m"),Vm=Ei("bu"),Gm=Ei("u"),Wm=Ei("bum"),Zr=Ei("um"),Xm=Ei("sp"),$m=Ei("rtg"),qm=Ei("rtc");function Ym(n,e=tn){Ea("ec",n,e)}const jm=Symbol.for("v-ndc");function hn(n,e,t,i){let s;const r=t,o=je(n);if(o||Dt(n)){const a=o&&us(n);let l=!1,c=!1;a&&(l=!bn(n),c=Si(n),n=Sa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?qs(Bn(n[u])):Bn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(_t(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Ul=n=>n?Lh(n)?Ca(n):Ul(n.parent):null,Lr=qt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ul(n.parent),$root:n=>Ul(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dh(n),$forceUpdate:n=>n.f||(n.f=()=>{Xc(n.update)}),$nextTick:n=>n.n||(n.n=qn.bind(n.proxy)),$watch:n=>Um.bind(n)}),Va=(n,e)=>n!==xt&&!n.__isScriptSetup&&mt(n,e),Km={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Va(i,e))return o[e]=1,i[e];if(s!==xt&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(t!==xt&&mt(t,e))return o[e]=4,t[e];Nl&&(o[e]=0)}}const c=Lr[e];let u,f;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==xt&&mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Va(s,e)?(s[e]=t,!0):i!==xt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==xt&&a[0]!=="$"&&mt(n,a)||Va(e,a)||mt(r,a)||mt(i,a)||mt(Lr,a)||mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Pu(n){return je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nl=!0;function Zm(n){const e=dh(n),t=n.proxy,i=n.ctx;Nl=!1,e.beforeCreate&&Du(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:S,unmounted:g,render:k,renderTracked:D,renderTriggered:P,errorCaptured:U,serverPrefetch:b,expose:M,inheritAttrs:N,components:ee,directives:q,filters:Y}=e;if(c&&Jm(c,i,null),o)for(const j in o){const F=o[j];et(F)&&(i[j]=F.bind(t))}if(s){const j=s.call(t,t);_t(j)&&(n.data=Vc(j))}if(Nl=!0,r)for(const j in r){const F=r[j],ye=et(F)?F.bind(t,t):et(F.get)?F.get.bind(t,t):jn,Se=!et(F)&&et(F.set)?F.set.bind(t):jn,Le=Gt({get:ye,set:Se});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Pe=>Le.value=Pe})}if(a)for(const j in a)fh(a[j],i,t,j);if(l){const j=et(l)?l.call(t):l;Reflect.ownKeys(j).forEach(F=>{Dm(F,j[F])})}u&&Du(u,n,"c");function Z(j,F){je(F)?F.forEach(ye=>j(ye.bind(t))):F&&j(F.bind(t))}if(Z(Hm,f),Z(Ta,h),Z(Vm,p),Z(Gm,_),Z(Bm,v),Z(km,m),Z(Ym,U),Z(qm,D),Z($m,P),Z(Wm,T),Z(Zr,g),Z(Xm,b),je(M))if(M.length){const j=n.exposed||(n.exposed={});M.forEach(F=>{Object.defineProperty(j,F,{get:()=>t[F],set:ye=>t[F]=ye,enumerable:!0})})}else n.exposed||(n.exposed={});k&&n.render===jn&&(n.render=k),N!=null&&(n.inheritAttrs=N),ee&&(n.components=ee),q&&(n.directives=q),b&&lh(n)}function Jm(n,e,t=jn){je(n)&&(n=Fl(n));for(const i in n){const s=n[i];let r;_t(s)?"default"in s?r=Wo(s.from||i,s.default,!0):r=Wo(s.from||i):r=Wo(s),$t(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Du(n,e,t){Jn(je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fh(n,e,t,i){let s=i.includes(".")?ah(t,i):()=>t[i];if(Dt(n)){const r=e[n];et(r)&&En(s,r)}else if(et(n))En(s,n.bind(t));else if(_t(n))if(je(n))n.forEach(r=>fh(r,e,t,i));else{const r=et(n.handler)?n.handler.bind(t):e[n.handler];et(r)&&En(s,r,n)}}function dh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ra(l,c,o,!0)),ra(l,e,o)),_t(e)&&r.set(e,l),l}function ra(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ra(n,r,t,!0),s&&s.forEach(o=>ra(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Qm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Qm={data:Lu,props:Iu,emits:Iu,methods:br,computed:br,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:br,directives:br,watch:tg,provide:Lu,inject:eg};function Lu(n,e){return e?n?function(){return qt(et(n)?n.call(this,this):n,et(e)?e.call(this,this):e)}:e:n}function eg(n,e){return br(Fl(n),Fl(e))}function Fl(n){if(je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function br(n,e){return n?qt(Object.create(null),n,e):e}function Iu(n,e){return n?je(n)&&je(e)?[...new Set([...n,...e])]:qt(Object.create(null),Pu(n),Pu(e??{})):e}function tg(n,e){if(!n)return e;if(!e)return n;const t=qt(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function hh(){return{app:null,config:{isNativeTag:Dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ng=0;function ig(n,e){return function(i,s=null){et(i)||(i=qt({},i)),s!=null&&!_t(s)&&(s=null);const r=hh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ng++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ng,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&et(u.install)?(o.add(u),u.install(c,...f)):et(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||en(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ca(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Gs;Gs=c;try{return u()}finally{Gs=f}}};return c}}let Gs=null;const sg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nn(e)}Modifiers`]||n[`${Wi(e)}Modifiers`];function rg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let s=t;const r=e.startsWith("update:"),o=r&&sg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Dt(u)?u.trim():u)),o.number&&(s=t.map(ya)));let a,l=i[a=Oa(e)]||i[a=Oa(Nn(e))];!l&&r&&(l=i[a=Oa(Wi(e))]),l&&Jn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Jn(c,n,6,s)}}const og=new WeakMap;function ph(n,e,t=!1){const i=t?og:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!et(n)){const l=c=>{const u=ph(c,e,!0);u&&(a=!0,qt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(_t(n)&&i.set(n,null),null):(je(r)?r.forEach(l=>o[l]=null):qt(o,r),_t(n)&&i.set(n,o),o)}function wa(n,e){return!n||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,Wi(e))||mt(n,e))}function Uu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=n,m=ia(n);let d,T;try{if(t.shapeFlag&4){const g=s||i,k=g;d=Wn(c.call(k,g,u,f,p,h,_)),T=a}else{const g=e;d=Wn(g.length>1?g(f,{attrs:a,slots:o,emit:l}):g(f,null)),T=e.props?a:ag(a)}}catch(g){Ir.length=0,ba(g,n,1),d=en(Hi)}let S=d;if(T&&v!==!1){const g=Object.keys(T),{shapeFlag:k}=S;g.length&&k&7&&(r&&g.some(va)&&(T=lg(T,r)),S=Ys(S,T,!1,!0))}return t.dirs&&(S=Ys(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&$c(S,t.transition),d=S,ia(m),d}const ag=n=>{let e;for(const t in n)(t==="class"||t==="style"||_a(t))&&((e||(e={}))[t]=n[t]);return e},lg=(n,e)=>{const t={};for(const i in n)(!va(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function cg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Nu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(mh(o,i,h)&&!wa(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nu(i,o,c):!0:!!o;return!1}function Nu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(mh(e,n,r)&&!wa(t,r))return!0}return!1}function mh(n,e,t){const i=n[t],s=e[t];return t==="style"&&_t(i)&&_t(s)?!sr(i,s):i!==s}function ug({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const gh={},_h=()=>Object.create(gh),vh=n=>Object.getPrototypeOf(n)===gh;function fg(n,e,t,i=!1){const s={},r=_h();n.propsDefaults=Object.create(null),xh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:vm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function dg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=pt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(wa(n.emitsOptions,h))continue;const p=e[h];if(l)if(mt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const _=Nn(h);s[_]=Ol(l,a,_,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{xh(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!mt(e,f)&&((u=Wi(f))===f||!mt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Ol(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!mt(e,f))&&(delete r[f],c=!0)}c&&pi(n.attrs,"set","")}function xh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ar(l))continue;const c=e[l];let u;s&&mt(s,u=Nn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:wa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=pt(t),c=a||xt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Ol(s,l,f,c[f],n,!mt(c,f))}}return o}function Ol(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&et(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Jr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}const hg=new WeakMap;function yh(n,e,t=!1){const i=t?hg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!et(n)){const u=f=>{l=!0;const[h,p]=yh(f,e,!0);qt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _t(n)&&i.set(n,zs),zs;if(je(r))for(let u=0;u<r.length;u++){const f=Nn(r[u]);Fu(f)&&(o[f]=xt)}else if(r)for(const u in r){const f=Nn(u);if(Fu(f)){const h=r[u],p=o[f]=je(h)||et(h)?{type:h}:qt({},h),_=p.type;let v=!1,m=!0;if(je(_))for(let d=0;d<_.length;++d){const T=_[d],S=et(T)&&T.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(m=!1)}else v=et(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||mt(p,"default"))&&a.push(f)}}const c=[o,a];return _t(n)&&i.set(n,c),c}function Fu(n){return n[0]!=="$"&&!Ar(n)}const qc=n=>n==="_"||n==="_ctx"||n==="$stable",Yc=n=>je(n)?n.map(Wn):[Wn(n)],pg=(n,e,t)=>{if(e._n)return e;const i=Pm((...s)=>Yc(e(...s)),t);return i._c=!1,i},Mh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(qc(s))continue;const r=n[s];if(et(r))e[s]=pg(s,r,i);else if(r!=null){const o=Yc(r);e[s]=()=>o}}},Sh=(n,e)=>{const t=Yc(e);n.slots.default=()=>t},bh=(n,e,t)=>{for(const i in e)(t||!qc(i))&&(n[i]=e[i])},mg=(n,e,t)=>{const i=n.slots=_h();if(n.vnode.shapeFlag&32){const s=e._;s?(bh(i,e,t),t&&Fd(i,"_",s,!0)):Mh(e,i)}else e&&Sh(n,e)},gg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:bh(s,e,t):(r=!e.$stable,Mh(e,s)),o=e}else e&&(Sh(n,e),o={default:1});if(r)for(const a in s)!qc(a)&&o[a]==null&&delete s[a]},rn=Mg;function _g(n){return vg(n)}function vg(n,e){const t=Ma();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=jn,insertStaticContent:_}=n,v=(R,O,A,he=null,ie=null,ne=null,de=void 0,oe=null,X=!!O.dynamicChildren)=>{if(R===O)return;R&&!dr(R,O)&&(he=V(R),Pe(R,ie,ne,!0),R=null),O.patchFlag===-2&&(X=!1,O.dynamicChildren=null);const{type:y,ref:x,shapeFlag:I}=O;switch(y){case Aa:m(R,O,A,he);break;case Hi:d(R,O,A,he);break;case Xo:R==null&&T(O,A,he,de);break;case rt:ee(R,O,A,he,ie,ne,de,oe,X);break;default:I&1?k(R,O,A,he,ie,ne,de,oe,X):I&6?q(R,O,A,he,ie,ne,de,oe,X):(I&64||I&128)&&y.process(R,O,A,he,ie,ne,de,oe,X,De)}x!=null&&ie?Pr(x,R&&R.ref,ne,O||R,!O):x==null&&R&&R.ref!=null&&Pr(R.ref,null,ne,R,!0)},m=(R,O,A,he)=>{if(R==null)i(O.el=a(O.children),A,he);else{const ie=O.el=R.el;O.children!==R.children&&c(ie,O.children)}},d=(R,O,A,he)=>{R==null?i(O.el=l(O.children||""),A,he):O.el=R.el},T=(R,O,A,he)=>{[R.el,R.anchor]=_(R.children,O,A,he,R.el,R.anchor)},S=({el:R,anchor:O},A,he)=>{let ie;for(;R&&R!==O;)ie=h(R),i(R,A,he),R=ie;i(O,A,he)},g=({el:R,anchor:O})=>{let A;for(;R&&R!==O;)A=h(R),s(R),R=A;s(O)},k=(R,O,A,he,ie,ne,de,oe,X)=>{if(O.type==="svg"?de="svg":O.type==="math"&&(de="mathml"),R==null)D(O,A,he,ie,ne,de,oe,X);else{const y=R.el&&R.el._isVueCE?R.el:null;try{y&&y._beginPatch(),b(R,O,ie,ne,de,oe,X)}finally{y&&y._endPatch()}}},D=(R,O,A,he,ie,ne,de,oe)=>{let X,y;const{props:x,shapeFlag:I,transition:$,dirs:se}=R;if(X=R.el=o(R.type,ne,x&&x.is,x),I&8?u(X,R.children):I&16&&U(R.children,X,null,he,ie,Ga(R,ne),de,oe),se&&qi(R,null,he,"created"),P(X,R,R.scopeId,de,he),x){for(const be in x)be!=="value"&&!Ar(be)&&r(X,be,null,x[be],ne,he);"value"in x&&r(X,"value",null,x.value,ne),(y=x.onVnodeBeforeMount)&&zn(y,he,R)}se&&qi(R,null,he,"beforeMount");const re=xg(ie,$);re&&$.beforeEnter(X),i(X,O,A),((y=x&&x.onVnodeMounted)||re||se)&&rn(()=>{try{y&&zn(y,he,R),re&&$.enter(X),se&&qi(R,null,he,"mounted")}finally{}},ie)},P=(R,O,A,he,ie)=>{if(A&&p(R,A),he)for(let ne=0;ne<he.length;ne++)p(R,he[ne]);if(ie){let ne=ie.subTree;if(O===ne||Ah(ne.type)&&(ne.ssContent===O||ne.ssFallback===O)){const de=ie.vnode;P(R,de,de.scopeId,de.slotScopeIds,ie.parent)}}},U=(R,O,A,he,ie,ne,de,oe,X=0)=>{for(let y=X;y<R.length;y++){const x=R[y]=oe?di(R[y]):Wn(R[y]);v(null,x,O,A,he,ie,ne,de,oe)}},b=(R,O,A,he,ie,ne,de)=>{const oe=O.el=R.el;let{patchFlag:X,dynamicChildren:y,dirs:x}=O;X|=R.patchFlag&16;const I=R.props||xt,$=O.props||xt;let se;if(A&&Yi(A,!1),(se=$.onVnodeBeforeUpdate)&&zn(se,A,O,R),x&&qi(O,R,A,"beforeUpdate"),A&&Yi(A,!0),(I.innerHTML&&$.innerHTML==null||I.textContent&&$.textContent==null)&&u(oe,""),y?M(R.dynamicChildren,y,oe,A,he,Ga(O,ie),ne):de||F(R,O,oe,null,A,he,Ga(O,ie),ne,!1),X>0){if(X&16)N(oe,I,$,A,ie);else if(X&2&&I.class!==$.class&&r(oe,"class",null,$.class,ie),X&4&&r(oe,"style",I.style,$.style,ie),X&8){const re=O.dynamicProps;for(let be=0;be<re.length;be++){const ve=re[be],Ee=I[ve],Ge=$[ve];(Ge!==Ee||ve==="value")&&r(oe,ve,Ee,Ge,ie,A)}}X&1&&R.children!==O.children&&u(oe,O.children)}else!de&&y==null&&N(oe,I,$,A,ie);((se=$.onVnodeUpdated)||x)&&rn(()=>{se&&zn(se,A,O,R),x&&qi(O,R,A,"updated")},he)},M=(R,O,A,he,ie,ne,de)=>{for(let oe=0;oe<O.length;oe++){const X=R[oe],y=O[oe],x=X.el&&(X.type===rt||!dr(X,y)||X.shapeFlag&198)?f(X.el):A;v(X,y,x,null,he,ie,ne,de,!0)}},N=(R,O,A,he,ie)=>{if(O!==A){if(O!==xt)for(const ne in O)!Ar(ne)&&!(ne in A)&&r(R,ne,O[ne],null,ie,he);for(const ne in A){if(Ar(ne))continue;const de=A[ne],oe=O[ne];de!==oe&&ne!=="value"&&r(R,ne,oe,de,ie,he)}"value"in A&&r(R,"value",O.value,A.value,ie)}},ee=(R,O,A,he,ie,ne,de,oe,X)=>{const y=O.el=R?R.el:a(""),x=O.anchor=R?R.anchor:a("");let{patchFlag:I,dynamicChildren:$,slotScopeIds:se}=O;se&&(oe=oe?oe.concat(se):se),R==null?(i(y,A,he),i(x,A,he),U(O.children||[],A,x,ie,ne,de,oe,X)):I>0&&I&64&&$&&R.dynamicChildren&&R.dynamicChildren.length===$.length?(M(R.dynamicChildren,$,A,ie,ne,de,oe),(O.key!=null||ie&&O===ie.subTree)&&Eh(R,O,!0)):F(R,O,A,x,ie,ne,de,oe,X)},q=(R,O,A,he,ie,ne,de,oe,X)=>{O.slotScopeIds=oe,R==null?O.shapeFlag&512?ie.ctx.activate(O,A,he,de,X):Y(O,A,he,ie,ne,de,X):ae(R,O,X)},Y=(R,O,A,he,ie,ne,de)=>{const oe=R.component=Cg(R,he,ie);if(ch(R)&&(oe.ctx.renderer=De),Pg(oe,!1,de),oe.asyncDep){if(ie&&ie.registerDep(oe,Z,de),!R.el){const X=oe.subTree=en(Hi);d(null,X,O,A),R.placeholder=X.el}}else Z(oe,R,O,A,ie,ne,de)},ae=(R,O,A)=>{const he=O.component=R.component;if(cg(R,O,A))if(he.asyncDep&&!he.asyncResolved){j(he,O,A);return}else he.next=O,he.update();else O.el=R.el,he.vnode=O},Z=(R,O,A,he,ie,ne,de)=>{const oe=()=>{if(R.isMounted){let{next:I,bu:$,u:se,parent:re,vnode:be}=R;{const Re=Th(R);if(Re){I&&(I.el=be.el,j(R,I,de)),Re.asyncDep.then(()=>{rn(()=>{R.isUnmounted||y()},ie)});return}}let ve=I,Ee;Yi(R,!1),I?(I.el=be.el,j(R,I,de)):I=be,$&&Go($),(Ee=I.props&&I.props.onVnodeBeforeUpdate)&&zn(Ee,re,I,be),Yi(R,!0);const Ge=Uu(R),xe=R.subTree;R.subTree=Ge,v(xe,Ge,f(xe.el),V(xe),R,ie,ne),I.el=Ge.el,ve===null&&ug(R,Ge.el),se&&rn(se,ie),(Ee=I.props&&I.props.onVnodeUpdated)&&rn(()=>zn(Ee,re,I,be),ie)}else{let I;const{el:$,props:se}=O,{bm:re,m:be,parent:ve,root:Ee,type:Ge}=R,xe=Dr(O);Yi(R,!1),re&&Go(re),!xe&&(I=se&&se.onVnodeBeforeMount)&&zn(I,ve,O),Yi(R,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(Ge,R.parent?R.parent.type:void 0);const Re=R.subTree=Uu(R);v(null,Re,A,he,R,ie,ne),O.el=Re.el}if(be&&rn(be,ie),!xe&&(I=se&&se.onVnodeMounted)){const Re=O;rn(()=>zn(I,ve,Re),ie)}(O.shapeFlag&256||ve&&Dr(ve.vnode)&&ve.vnode.shapeFlag&256)&&R.a&&rn(R.a,ie),R.isMounted=!0,O=A=he=null}};R.scope.on();const X=R.effect=new zd(oe);R.scope.off();const y=R.update=X.run.bind(X),x=R.job=X.runIfDirty.bind(X);x.i=R,x.id=R.uid,X.scheduler=()=>Xc(x),Yi(R,!0),y()},j=(R,O,A)=>{O.component=R;const he=R.vnode.props;R.vnode=O,R.next=null,dg(R,O.props,he,A),gg(R,O.children,A),yi(),Au(R),Mi()},F=(R,O,A,he,ie,ne,de,oe,X=!1)=>{const y=R&&R.children,x=R?R.shapeFlag:0,I=O.children,{patchFlag:$,shapeFlag:se}=O;if($>0){if($&128){Se(y,I,A,he,ie,ne,de,oe,X);return}else if($&256){ye(y,I,A,he,ie,ne,de,oe,X);return}}se&8?(x&16&&te(y,ie,ne),I!==y&&u(A,I)):x&16?se&16?Se(y,I,A,he,ie,ne,de,oe,X):te(y,ie,ne,!0):(x&8&&u(A,""),se&16&&U(I,A,he,ie,ne,de,oe,X))},ye=(R,O,A,he,ie,ne,de,oe,X)=>{R=R||zs,O=O||zs;const y=R.length,x=O.length,I=Math.min(y,x);let $;for($=0;$<I;$++){const se=O[$]=X?di(O[$]):Wn(O[$]);v(R[$],se,A,null,ie,ne,de,oe,X)}y>x?te(R,ie,ne,!0,!1,I):U(O,A,he,ie,ne,de,oe,X,I)},Se=(R,O,A,he,ie,ne,de,oe,X)=>{let y=0;const x=O.length;let I=R.length-1,$=x-1;for(;y<=I&&y<=$;){const se=R[y],re=O[y]=X?di(O[y]):Wn(O[y]);if(dr(se,re))v(se,re,A,null,ie,ne,de,oe,X);else break;y++}for(;y<=I&&y<=$;){const se=R[I],re=O[$]=X?di(O[$]):Wn(O[$]);if(dr(se,re))v(se,re,A,null,ie,ne,de,oe,X);else break;I--,$--}if(y>I){if(y<=$){const se=$+1,re=se<x?O[se].el:he;for(;y<=$;)v(null,O[y]=X?di(O[y]):Wn(O[y]),A,re,ie,ne,de,oe,X),y++}}else if(y>$)for(;y<=I;)Pe(R[y],ie,ne,!0),y++;else{const se=y,re=y,be=new Map;for(y=re;y<=$;y++){const Ae=O[y]=X?di(O[y]):Wn(O[y]);Ae.key!=null&&be.set(Ae.key,y)}let ve,Ee=0;const Ge=$-re+1;let xe=!1,Re=0;const Be=new Array(Ge);for(y=0;y<Ge;y++)Be[y]=0;for(y=se;y<=I;y++){const Ae=R[y];if(Ee>=Ge){Pe(Ae,ie,ne,!0);continue}let ge;if(Ae.key!=null)ge=be.get(Ae.key);else for(ve=re;ve<=$;ve++)if(Be[ve-re]===0&&dr(Ae,O[ve])){ge=ve;break}ge===void 0?Pe(Ae,ie,ne,!0):(Be[ge-re]=y+1,ge>=Re?Re=ge:xe=!0,v(Ae,O[ge],A,null,ie,ne,de,oe,X),Ee++)}const $e=xe?yg(Be):zs;for(ve=$e.length-1,y=Ge-1;y>=0;y--){const Ae=re+y,ge=O[Ae],C=O[Ae+1],G=Ae+1<x?C.el||wh(C):he;Be[y]===0?v(null,ge,A,G,ie,ne,de,oe,X):xe&&(ve<0||y!==$e[ve]?Le(ge,A,G,2):ve--)}}},Le=(R,O,A,he,ie=null)=>{const{el:ne,type:de,transition:oe,children:X,shapeFlag:y}=R;if(y&6){Le(R.component.subTree,O,A,he);return}if(y&128){R.suspense.move(O,A,he);return}if(y&64){de.move(R,O,A,De);return}if(de===rt){i(ne,O,A);for(let I=0;I<X.length;I++)Le(X[I],O,A,he);i(R.anchor,O,A);return}if(de===Xo){S(R,O,A);return}if(he!==2&&y&1&&oe)if(he===0)oe.beforeEnter(ne),i(ne,O,A),rn(()=>oe.enter(ne),ie);else{const{leave:I,delayLeave:$,afterLeave:se}=oe,re=()=>{R.ctx.isUnmounted?s(ne):i(ne,O,A)},be=()=>{ne._isLeaving&&ne[Om](!0),I(ne,()=>{re(),se&&se()})};$?$(ne,re,be):be()}else i(ne,O,A)},Pe=(R,O,A,he=!1,ie=!1)=>{const{type:ne,props:de,ref:oe,children:X,dynamicChildren:y,shapeFlag:x,patchFlag:I,dirs:$,cacheIndex:se,memo:re}=R;if(I===-2&&(ie=!1),oe!=null&&(yi(),Pr(oe,null,A,R,!0),Mi()),se!=null&&(O.renderCache[se]=void 0),x&256){O.ctx.deactivate(R);return}const be=x&1&&$,ve=!Dr(R);let Ee;if(ve&&(Ee=de&&de.onVnodeBeforeUnmount)&&zn(Ee,O,R),x&6)Me(R.component,A,he);else{if(x&128){R.suspense.unmount(A,he);return}be&&qi(R,null,O,"beforeUnmount"),x&64?R.type.remove(R,O,A,De,he):y&&!y.hasOnce&&(ne!==rt||I>0&&I&64)?te(y,O,A,!1,!0):(ne===rt&&I&384||!ie&&x&16)&&te(X,O,A),he&&tt(R)}const Ge=re!=null&&se==null;(ve&&(Ee=de&&de.onVnodeUnmounted)||be||Ge)&&rn(()=>{Ee&&zn(Ee,O,R),be&&qi(R,null,O,"unmounted"),Ge&&(R.el=null)},A)},tt=R=>{const{type:O,el:A,anchor:he,transition:ie}=R;if(O===rt){le(A,he);return}if(O===Xo){g(R);return}const ne=()=>{s(A),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(R.shapeFlag&1&&ie&&!ie.persisted){const{leave:de,delayLeave:oe}=ie,X=()=>de(A,ne);oe?oe(R.el,ne,X):X()}else ne()},le=(R,O)=>{let A;for(;R!==O;)A=h(R),s(R),R=A;s(O)},Me=(R,O,A)=>{const{bum:he,scope:ie,job:ne,subTree:de,um:oe,m:X,a:y}=R;Ou(X),Ou(y),he&&Go(he),ie.stop(),ne&&(ne.flags|=8,Pe(de,R,O,A)),oe&&rn(oe,O),rn(()=>{R.isUnmounted=!0},O)},te=(R,O,A,he=!1,ie=!1,ne=0)=>{for(let de=ne;de<R.length;de++)Pe(R[de],O,A,he,ie)},V=R=>{if(R.shapeFlag&6)return V(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const O=h(R.anchor||R.el),A=O&&O[Nm];return A?h(A):O};let Q=!1;const fe=(R,O,A)=>{let he;R==null?O._vnode&&(Pe(O._vnode,null,null,!0),he=O._vnode.component):v(O._vnode||null,R,O,null,null,null,A),O._vnode=R,Q||(Q=!0,Au(he),ih(),Q=!1)},De={p:v,um:Pe,m:Le,r:tt,mt:Y,mc:U,pc:F,pbc:M,n:V,o:n};return{render:fe,hydrate:void 0,createApp:ig(fe)}}function Ga({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function xg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Eh(n,e,t=!1){const i=n.children,s=e.children;if(je(i)&&je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Eh(o,a)),a.type===Aa&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===Hi&&!a.el&&(a.el=o.el)}}function yg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Th(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Th(e)}function Ou(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function wh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?wh(e.subTree):null}const Ah=n=>n.__isSuspense;function Mg(n,e){e&&e.pendingBranch?je(n)?e.effects.push(...n):e.effects.push(n):Rm(n)}const rt=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),Hi=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),Ir=[];let gn=null;function we(n=!1){Ir.push(gn=n?null:[])}function Sg(){Ir.pop(),gn=Ir[Ir.length-1]||null}let Hr=1;function Bu(n,e=!1){Hr+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function Ch(n){return n.dynamicChildren=Hr>0?gn||zs:null,Sg(),Hr>0&&gn&&gn.push(n),n}function Ce(n,e,t,i,s,r){return Ch(W(n,e,t,i,s,r,!0))}function Rh(n,e,t,i,s){return Ch(en(n,e,t,i,s,!0))}function Ph(n){return n?n.__v_isVNode===!0:!1}function dr(n,e){return n.type===e.type&&n.key===e.key}const Dh=({key:n})=>n??null,$o=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||$t(n)||et(n)?{i:Sn,r:n,k:e,f:!!t}:n:null);function W(n,e=null,t=null,i=0,s=null,r=n===rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Dh(e),ref:e&&$o(e),scopeId:rh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(jc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),Hr>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const en=bg;function bg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===jm)&&(n=Hi),Ph(n)){const a=Ys(n,e,!0);return t&&jc(a,t),Hr>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if(Ug(n)&&(n=n.__vccOpts),e){e=Eg(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=Lt(a)),_t(l)&&(Wc(l)&&!je(l)&&(l=qt({},l)),e.style=St(l))}const o=Dt(n)?1:Ah(n)?128:Fm(n)?64:_t(n)?4:et(n)?2:0;return W(n,e,t,i,s,o,r,!0)}function Eg(n){return n?Wc(n)||vh(n)?qt({},n):n:null}function Ys(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Tg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Dh(c),ref:e&&e.ref?t&&r?je(r)?r.concat($o(e)):[r,$o(e)]:$o(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ys(n.ssContent),ssFallback:n.ssFallback&&Ys(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$c(u,l.clone(u)),u}function wt(n=" ",e=0){return en(Aa,null,n,e)}function is(n,e){const t=en(Xo,null,n);return t.staticCount=e,t}function Je(n="",e=!1){return e?(we(),Rh(Hi,null,n)):en(Hi,null,n)}function Wn(n){return n==null||typeof n=="boolean"?en(Hi):je(n)?en(rt,null,n.slice()):Ph(n)?di(n):en(Aa,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ys(n)}function jc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),jc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!vh(e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:Sn},t=32):(e=String(e),i&64?(t=16,e=[wt(e)]):t=8);n.children=e,n.shapeFlag|=t}function Tg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Lt([e.class,i.class]));else if(s==="style")e.style=St([e.style,i.style]);else if(_a(s)){const r=e[s],o=i[s];o&&r!==o&&!(je(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!va(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function zn(n,e,t,i=null){Jn(n,e,7,[t,i])}const wg=hh();let Ag=0;function Cg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||wg,r={uid:Ag++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yh(i,s),emitsOptions:ph(i,s),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=rg.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const Rg=()=>tn||Sn;let oa,Bl;{const n=Ma(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};oa=e("__VUE_INSTANCE_SETTERS__",t=>tn=t),Bl=e("__VUE_SSR_SETTERS__",t=>Vr=t)}const Jr=n=>{const e=tn;return oa(n),n.scope.on(),()=>{n.scope.off(),oa(e)}},ku=()=>{tn&&tn.scope.off(),oa(null)};function Lh(n){return n.vnode.shapeFlag&4}let Vr=!1;function Pg(n,e=!1,t=!1){e&&Bl(e);const{props:i,children:s}=n.vnode,r=Lh(n);fg(n,i,r,e),mg(n,s,t||e);const o=r?Dg(n,e):void 0;return e&&Bl(!1),o}function Dg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Km);const{setup:i}=t;if(i){yi();const s=n.setupContext=i.length>1?Ig(n):null,r=Jr(n),o=Kr(i,n,0,[n.props,s]),a=Ld(o);if(Mi(),r(),(a||n.sp)&&!Dr(n)&&lh(n),a){if(o.then(ku,ku),e)return o.then(l=>{zu(n,l)}).catch(l=>{ba(l,n,0)});n.asyncDep=o}else zu(n,o)}else Ih(n)}function zu(n,e,t){et(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=eh(e)),Ih(n)}function Ih(n,e,t){const i=n.type;n.render||(n.render=i.render||jn);{const s=Jr(n);yi();try{Zm(n)}finally{Mi(),s()}}}const Lg={get(n,e){return Xt(n,"get",""),n[e]}};function Ig(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Lg),slots:n.slots,emit:n.emit,expose:e}}function Ca(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(eh(xm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Lr)return Lr[t](n)},has(e,t){return t in e||t in Lr}})):n.proxy}function Ug(n){return et(n)&&"__vccOpts"in n}const Gt=(n,e)=>Em(n,e,Vr),Ng="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kl;const Hu=typeof window<"u"&&window.trustedTypes;if(Hu)try{kl=Hu.createPolicy("vue",{createHTML:n=>n})}catch{}const Uh=kl?n=>kl.createHTML(n):n=>n,Fg="http://www.w3.org/2000/svg",Og="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,Vu=ui&&ui.createElement("template"),Bg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ui.createElementNS(Fg,n):e==="mathml"?ui.createElementNS(Og,n):t?ui.createElement(n,{is:t}):ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Vu.innerHTML=Uh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Vu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},kg=Symbol("_vtc");function zg(n,e,t){const i=n[kg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gu=Symbol("_vod"),Hg=Symbol("_vsh"),Vg=Symbol(""),Gg=/(?:^|;)\s*display\s*:/;function Wg(n,e,t){const i=n.style,s=Dt(t);let r=!1;if(t&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&qo(i,a,"")}else for(const o in e)t[o]==null&&qo(i,o,"");for(const o in t)o==="display"&&(r=!0),qo(i,o,t[o])}else if(s){if(e!==t){const o=i[Vg];o&&(t+=";"+o),i.cssText=t,r=Gg.test(t)}}else e&&n.removeAttribute("style");Gu in n&&(n[Gu]=r?i.display:"",n[Hg]&&(i.display="none"))}const Wu=/\s*!important$/;function qo(n,e,t){if(je(t))t.forEach(i=>qo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Xg(n,e);Wu.test(t)?n.setProperty(Wi(i),t.replace(Wu,""),"important"):n[i]=t}}const Xu=["Webkit","Moz","ms"],Wa={};function Xg(n,e){const t=Wa[e];if(t)return t;let i=Nn(e);if(i!=="filter"&&i in n)return Wa[e]=i;i=Nd(i);for(let s=0;s<Xu.length;s++){const r=Xu[s]+i;if(r in n)return Wa[e]=r}return e}const $u="http://www.w3.org/1999/xlink";function qu(n,e,t,i,s,r=Kp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS($u,e.slice(6,e.length)):n.setAttributeNS($u,e,t):t==null||r&&!Od(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Zn(t)?String(t):t)}function Yu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Uh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Od(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Fi(n,e,t,i){n.addEventListener(e,t,i)}function $g(n,e,t,i){n.removeEventListener(e,t,i)}const ju=Symbol("_vei");function qg(n,e,t,i,s=null){const r=n[ju]||(n[ju]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Yg(e);if(i){const c=r[e]=Zg(i,s);Fi(n,a,c,l)}else o&&($g(n,a,o,l),r[e]=void 0)}}const Ku=/(?:Once|Passive|Capture)$/;function Yg(n){let e;if(Ku.test(n)){e={};let i;for(;i=n.match(Ku);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let Xa=0;const jg=Promise.resolve(),Kg=()=>Xa||(jg.then(()=>Xa=0),Xa=Date.now());function Zg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jn(Jg(i,t.value),e,5,[i])};return t.value=n,t.attached=Kg(),t}function Jg(n,e){if(je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Zu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?zg(n,i,o):e==="style"?Wg(n,t,i):_a(e)?va(e)||qg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e_(n,e,i,o))?(Yu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qu(n,e,i,o,r,e!=="value")):n._isVueCE&&(t_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Dt(i)))?Yu(n,Nn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),qu(n,e,i,o))};function e_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Zu(e)&&et(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zu(e)&&Dt(t)?!1:e in n}function t_(n,e){const t=n._def.props;if(!t)return!1;const i=Nn(e);return Array.isArray(t)?t.some(s=>Nn(s)===i):Object.keys(t).some(s=>Nn(s)===i)}const js=n=>{const e=n.props["onUpdate:modelValue"]||!1;return je(e)?t=>Go(e,t):e};function n_(n){n.target.composing=!0}function Ju(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vi=Symbol("_assign");function Qu(n,e,t){return e&&(n=n.trim()),t&&(n=ya(n)),n}const Ks={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[vi]=js(s);const r=i||s.props&&s.props.type==="number";Fi(n,e?"change":"input",o=>{o.target.composing||n[vi](Qu(n.value,t,r))}),(t||r)&&Fi(n,"change",()=>{n.value=Qu(n.value,t,r)}),e||(Fi(n,"compositionstart",n_),Fi(n,"compositionend",Ju),Fi(n,"change",Ju))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[vi]=js(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ya(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ef={deep:!0,created(n,e,t){n[vi]=js(t),Fi(n,"change",()=>{const i=n._modelValue,s=Gr(n),r=n.checked,o=n[vi];if(je(i)){const a=Fc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ir(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Nh(n,r))})},mounted:tf,beforeUpdate(n,e,t){n[vi]=js(t),tf(n,e,t)}};function tf(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(je(e))s=Fc(e,i.props.value)>-1;else if(ir(e))s=e.has(i.props.value);else{if(e===t)return;s=sr(e,Nh(n,!0))}n.checked!==s&&(n.checked=s)}const nf={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=ir(e);Fi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ya(Gr(o)):Gr(o));n[vi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,qn(()=>{n._assigning=!1})}),n[vi]=js(i)},mounted(n,{value:e}){sf(n,e)},beforeUpdate(n,e,t){n[vi]=js(t)},updated(n,{value:e}){n._assigning||sf(n,e)}};function sf(n,e){const t=n.multiple,i=je(e);if(!(t&&!i&&!ir(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Gr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Fc(e,a)>-1}else o.selected=e.has(a);else if(sr(Gr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Gr(n){return"_value"in n?n._value:n.value}function Nh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const i_=["ctrl","shift","alt","meta"],s_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>i_.some(t=>n[`${t}Key`]&&!e.includes(t))},fs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=s_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},r_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Os=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Wi(s.key);if(e.some(o=>o===r||r_[o]===r))return n(s)}))},o_=qt({patchProp:Qg},Bg);let rf;function a_(){return rf||(rf=_g(o_))}const l_=((...n)=>{const e=a_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=u_(i);if(!s)return;const r=e._component;!et(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,c_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function c_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function u_(n){return Dt(n)?document.querySelector(n):n}const f_="modulepreload",d_=function(n,e){return new URL(n,e).href},of={},Wr=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(t.map(u=>{if(u=d_(u,i),u in of)return;of[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let v=a.length-1;v>=0;v--){const m=a[v];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":f_,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((v,m)=>{_.addEventListener("load",v),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},vs=Fe(null),ht=Fe([]),$a=Fe(!1),hr=Fe(!1),ji=Fe("playful"),qa=Fe("nest"),ai=Fe([]),Fh=Fe(Oh()),Ya=Fe(""),fi=Fe("glade-forge"),pr=Fe({x:0,z:0}),xs=Fe(g_()),lo=Fe([]),af=Fe(0),h_=Fe(10),lf=[{id:"weapon_short_sword",label:"Short Sword",icon:"🗡️",type:"weapon"},{id:"weapon_axe",label:"Tiny Axe",icon:"🪓",type:"weapon"},{id:"weapon_bow",label:"Pocket Bow",icon:"🏹",type:"weapon"},{id:"weapon_hammer",label:"Bonk Hammer",icon:"🔨",type:"weapon"}],p_=lf[Math.floor(Math.random()*lf.length)],mr=Fe([{id:"wizard_hat",label:"Wizard Hat",icon:"🧙‍♂️",type:"hat"},{id:"hard_hat",label:"Hard Hat",icon:"👷",type:"hat"},{id:"beret",label:"Beret",icon:"🎨",type:"hat"},{id:"crown",label:"Crown",icon:"👑",type:"hat"},{id:"pip_treat",label:"Pip Treat",icon:"🍎",type:"food"},p_,{id:"balloon_cannon",label:"Balloon Popper",icon:"🎈",type:"tool"},{id:"firework_launcher",label:"Firework",icon:"🎆",type:"tool"},{id:"fairy_summoner",label:"Fairy Wand",icon:"✨",type:"tool"},{id:"capture_orb",label:"Capture Orb",icon:"🫧",type:"tool"},null]),ja=Fe(5),gr=Fe([]),co=Fe(!0),uo=Fe(0),m_=Fe({id:"guide",name:"Nebula",color:"#c9a0ff",x:13.5,z:13.5,size:5,targetX:13.5,targetZ:13.5}),fo=Fe([]),ho=Fe(null),cf=Fe(0);let uf=1e3;const hi=Fe(M_()),Ii=Fe(Object.fromEntries(hi.value.map(n=>[n.id,45]))),ff=[{key:"1",id:"nest",label:"Nest",color:"#d9b38c"},{key:"2",id:"lantern",label:"Lantern",color:"#ffd27f"},{key:"3",id:"totem",label:"Totem",color:"#c5b3e6"},{key:"4",id:"archive",label:"Archive",color:"#9fd3d8"},{key:"5",id:"remove",label:"Remove",color:"#e09494"}],df=[{key:"1",id:"house",label:"Tiny House",icon:"🏠",color:"#82ccdd"},{key:"2",id:"table",label:"Crystal Table",icon:"💎",color:"#60a3bc"},{key:"3",id:"beanbag",label:"Cozy Beanbag",icon:"🛋️",color:"#ffaf40"},{key:"4",id:"shroom",label:"Glow Shroom",icon:"🍄",color:"#fffa65"},{key:"5",id:"bonsai",label:"Bonsai Pip",icon:"🪴",color:"#78e08f"},{key:"6",id:"bench",label:"Park Bench",icon:"🪑",color:"#b8e994"},{key:"C",id:"clear",label:"Clear Decor",icon:"🧹",color:"#eb4d4b"}],_r=[{id:"explore",label:"Explore"},{id:"build",label:"Build"},{id:"decorate",label:"Decorate"},{id:"playful",label:"Playful"},{id:"wizard",label:"Wizard"},{id:"about",label:"About"}];function zl(n){return JSON.parse(JSON.stringify(n))}function g_(){try{return JSON.parse(localStorage.getItem("pips_decorations")||"[]")}catch{return[]}}function hf(n){localStorage.setItem("pips_decorations",JSON.stringify(n))}function __(){return hi.value.find(n=>n.id===fi.value)||null}function Er(){Fh.value=Hl(fi.value)}function ms(){const n=Gt(()=>ji.value==="build"),e=Gt(()=>ji.value==="decorate"),t=Gt(()=>ji.value==="playful"),i=Gt(()=>__()),s=Gt(()=>hi.value.map(te=>({id:te.id,name:te.name,project:te.project,theme:te.theme,color:te.color,pips:ht.value.filter(V=>V.gladeId===te.id).length,farmBlocks:ai.value.filter(V=>V.gladeId===te.id).length,growthRate:Hl(te.id).growthRate,nextSpawnIn:Ii.value[te.id]??45}))),r=Gt(()=>ht.value.length);function o(te){const V=hi.value[te];return V?(fi.value=V.id,Er(),V):null}function a(te,V){pr.value={x:te,z:V}}function l(te){vs.value=te,hr.value=!1}function c(){vs.value=null,hr.value=!1}function u(){$a.value=!$a.value}const f=Gt(()=>{if(!pr.value)return null;let te=null,V=5;return ht.value.forEach(Q=>{if(Q.position_x===void 0)return;const fe=Q.position_x-pr.value.x,De=Q.position_z-pr.value.z,Xe=Math.sqrt(fe*fe+De*De);Xe<V&&(V=Xe,te=Q)}),te});function h(te){ht.value=zl(te)}function p(te){var Q;const V=ht.value.findIndex(fe=>fe.id===te.id);V!==-1&&(ht.value[V]={...ht.value[V],...te},((Q=vs.value)==null?void 0:Q.id)===te.id&&(vs.value=ht.value[V]))}function _(){vs.value&&(hr.value=!0)}function v(){hr.value=!1}function m(te){return _r.some(Q=>Q.id===te)?(ji.value=te,Ya.value=te==="build"?"Build mode enabled":te==="playful"?"Playful mode enabled":te==="wizard"?"Wizard mode enabled":te==="about"?"About mode enabled":te==="decorate"?"Decoration mode open — Make it home!":"Explore mode enabled",!0):!1}function d(){const te=_r.findIndex(Q=>Q.id===ji.value),V=_r[(te+1)%_r.length];m(V.id)}function T(){ji.value==="build"?m("explore"):m("build")}function S(){co.value=!co.value,co.value}function g(te){if(e.value){const Q=df.find(fe=>fe.key===te.toUpperCase());if(Q)return qa.value=Q.id,!0}const V=ff.find(Q=>Q.key===te);return V?(qa.value=V.id,!0):!1}function k(te=1){const V=mr.value.length;let Q=(ja.value+te+V)%V;for(let fe=0;fe<V&&!mr.value[Q];fe++)Q=(Q+te+V)%V;ja.value=Q}function D(te,V=1400){const Q="toast-"+Date.now()+Math.random();ho.value={id:Q,text:te},setTimeout(()=>{var fe;((fe=ho.value)==null?void 0:fe.id)===Q&&(ho.value=null)},V)}function P(){cf.value++}function U(te,V="care"){const Q=[{id:"gift_glimmer",label:"Glimmer Pebble",icon:"✨",type:"gift"},{id:"gift_ribbon",label:"Tiny Ribbon",icon:"🎀",type:"gift"},{id:"gift_cookie",label:"Warm Cookie",icon:"🍪",type:"gift"},{id:"gift_shell",label:"Pretty Shell",icon:"🐚",type:"gift"}],fe=Q[Math.floor(Math.random()*Q.length)],De=mr.value.findIndex(Xe=>!Xe);return De!==-1?(mr.value[De]=fe,Pe(te.position_x,te.position_z,`+ ${fe.icon} ${fe.label}`,"#ffd8ff")):Pe(te.position_x,te.position_z,`${fe.icon} ${fe.label}`,"#ffd8ff"),D(`Gift received: ${fe.icon} ${fe.label}`),P(),fe}function b(){Er()}function M(te,V,Q){const fe=Math.round(V),De=Math.round(Q),Xe=ai.value.find(R=>R.gladeId===fi.value&&R.x===fe&&R.z===De);return te==="remove"?Xe?(ai.value=ai.value.filter(R=>R.id!==Xe.id),b(),!0):!1:Xe?!1:(ai.value.push({id:`farm-${Date.now()}-${Math.random().toString(16).slice(2,6)}`,type:te,x:fe,z:De,gladeId:fi.value}),b(),!0)}function N(te,V,Q){const fe=i.value;if(!fe)return!1;if(te==="clear"){let Xe=null,R=2;return xs.value.forEach((O,A)=>{const he=O.x-V,ie=O.z-Q,ne=Math.sqrt(he*he+ie*ie);ne<R&&(R=ne,Xe=A)}),Xe!==null?(xs.value.splice(Xe,1),hf(xs.value),!0):!1}const De=`decor-${Date.now()}-${Math.random().toString(16).slice(2,6)}`;return xs.value.push({id:De,type:te,x:V,z:Q,gladeId:fe.id,rotation:Math.random()*Math.PI*2}),hf(xs.value),P(),!0}function ee(te){for(const V of hi.value){const Q=Hl(V.id);let fe=Ii.value[V.id]??45;if(Q.capacity<=0){Ii.value[V.id]=45;continue}if(fe-=te*Q.growthRate,fe>0){Ii.value[V.id]=fe;continue}if(ht.value.filter(ne=>ne.source==="farm"&&ne.gladeId===V.id).length>=Q.capacity){Ii.value[V.id]=20;continue}const Xe=[{key:"calm",score:Q.calmBias+1,text:"Calm and gentle, loves tending the glade."},{key:"bold",score:Q.boldBias+1,text:"Bold and adventurous, always seeks quests."},{key:"curious",score:Q.curiousBias+1,text:"Curious and bright, fascinated by everyone."}],R=Xe.reduce((ne,de)=>ne+de.score,0);let O=Math.random()*R,A=Xe[0];for(const ne of Xe)if(O-=ne.score,O<=0){A=ne;break}const he=["Poppy","Milo","Nori","Luma","Kiko","Rin","Tavi","Mochi"],ie=he[Math.floor(Math.random()*he.length)]+` ${uf%100}`;ht.value.push({id:`farm-pip-${uf++}`,name:ie,color:["#f3a6a6","#9bcaf7","#a4dbad","#e9cc8d"][Math.floor(Math.random()*4)],personality:A.text,provider:"glade",model:"farmborn",status:"idle",position_x:V.center.x+(Math.random()-.5)*8,position_z:V.center.z+(Math.random()-.5)*8,source:"farm",gladeId:V.id}),Ii.value[V.id]=45,V.id===fi.value&&(Ya.value=`New farm pip in ${V.name}: ${ie} (${A.key})`)}Er()}function q(te,V,Q="glade",fe="native"){const De=hi.value.length,Xe=160+De*10,R=De*1.3,O=Math.round(Math.cos(R)*Xe),A=Math.round(Math.sin(R)*Xe),he={"Cyber Land":"#63cdda","Media Land":"#f8a5c2","Cinema Land":"#f5cd79","Magic Land":"#d2b4de",Default:"#a8db92"},ie=he[V]||he.Default,ne="glade-dyn-"+Date.now(),de=li(ne,te||"New Project","custom",V||"Default",ie,{x:O,z:A},[Ot("Planner","#ffffff",O-2,A-2,"Eager to organize.",ne,Q,fe)]);return hi.value.push(de),ht.value.push(...zl(de.pips)),Ii.value[ne]=45,fi.value=ne,Er(),m("explore"),de}function Y(te,V,Q){const fe=te??(Math.random()-.5)*200,De=V??5+Math.random()*5,Xe=Q??(Math.random()-.5)*200,R=["#ffccf9","#ccffff","#ffffcc","#ccffcc"][Math.floor(Math.random()*4)];lo.value.push({id:"fairy-"+Date.now()+Math.random(),x:fe,y:De,z:Xe,color:R,speed:.5+Math.random()*1.5})}function ae(te){const V=lo.value.findIndex(Q=>Q.id===te);return V!==-1?(lo.value.splice(V,1),af.value++,!0):!1}function Z(te,V){const Q=ht.value.findIndex(fe=>fe.id===te);if(Q!==-1){const fe=ht.value[Q];return fe.hat=V?V.id:null,V&&(V.id==="wizard_hat"?(fe.provider="anthropic",fe.model="claude-3-opus-20240229",fe.personality="Extremely wise and eloquent, master of logic."):V.id==="hard_hat"?(fe.provider="ollama",fe.model="llama3",fe.personality="Reliable and focused on the task at hand."):V.id==="beret"?fe.personality="A creative soul, speaks in poetic metaphors.":V.id==="crown"&&(fe.personality="The Royal Leader of the Glade. Commands respect.")),ht.value[Q]={...fe},!0}return!1}function j(){const te=(Math.random()-.5)*180,V=(Math.random()-.5)*180,Q=`wild-pip-${Date.now()}`,fe=["#ffaaaa","#aaffaa","#aaaaff","#ffffaa"][Math.floor(Math.random()*4)];gr.value.push({id:Q,name:"Wild Pip",color:fe,x:te,z:V,level:Math.floor(Math.random()*5)+1})}function F(te){const V=gr.value.findIndex(Q=>Q.id===te);if(V!==-1){const Q=gr.value[V],fe=Ot("New Friend",Q.color,Q.x,Q.z,"Just captured from the wild!",fi.value);return fe.source="wild",ht.value.push(fe),gr.value.splice(V,1),!0}return!1}function ye(te,V){const Q=ht.value.findIndex(fe=>fe.id===te);if(Q!==-1){const fe={...ht.value[Q]};if(fe.exp=(fe.exp||0)+V,fe.exp>100)return fe.level=(fe.level||1)+1,fe.model=fe.level>3?"gpt-4":fe.model,fe.exp=0,ht.value[Q]=fe,!0;ht.value[Q]=fe}return!1}function Se(te){const V=ht.value.findIndex(Q=>Q.id===te);if(V!==-1){ye(te,35);const Q={...ht.value[V]};return Q.hunger=Math.min(100,(Q.hunger||0)+40),Q.emotionalBond=Math.min(100,(Q.emotionalBond||0)+5),ht.value[V]=Q,Q.brickCount=(Q.brickCount||0)+1,Q.isBuilding=!0,setTimeout(()=>{Q.isBuilding=!1},5e3),Pe(Q.position_x,Q.position_z,"+35 XP","#ffd700"),setTimeout(()=>Pe(Q.position_x,Q.position_z,"+5 Bond","#ff8ebc"),200),setTimeout(()=>U(Q,"feed"),350),Wr(()=>Promise.resolve().then(()=>Lc),void 0,import.meta.url).then(fe=>{var De;return(De=fe.triggerPipReaction)==null?void 0:De.call(fe,te,"feed")}),P(),uo.value===3&&(uo.value=4),!0}return!1}function Le(te){const V=ht.value.findIndex(Q=>Q.id===te);if(V!==-1){ye(te,25);const Q={...ht.value[V]};return Q.thirst=Math.min(100,(Q.thirst||0)+40),Q.emotionalBond=Math.min(100,(Q.emotionalBond||0)+3),ht.value[V]=Q,Q.brickCount=(Q.brickCount||0)+1,Q.isBuilding=!0,setTimeout(()=>{Q.isBuilding=!1},5e3),Pe(Q.position_x,Q.position_z,"+25 XP","#ffd700"),setTimeout(()=>Pe(Q.position_x,Q.position_z,"+3 Bond","#ff8ebc"),200),setTimeout(()=>U(Q,"hydrate"),350),Wr(()=>Promise.resolve().then(()=>Lc),void 0,import.meta.url).then(fe=>{var De;return(De=fe.triggerPipReaction)==null?void 0:De.call(fe,te,"hydrate")}),P(),!0}return!1}function Pe(te,V,Q,fe){const De="text-"+Date.now()+Math.random();fo.value.push({id:De,x:te,z:V,text:Q,color:fe}),setTimeout(()=>{fo.value=fo.value.filter(Xe=>Xe.id!==De)},1500)}function tt(te){const V=ht.value.findIndex(Q=>Q.id===te);return V!==-1?(ht.value.splice(V,1),!0):!1}function le(te){const V=ai.value.findIndex(Q=>Q.id===te);return V!==-1?(ai.value.splice(V,1),b(),!0):!1}function Me(){uo.value++}return{selectedPip:ea(vs),pips:ht,councilActive:$a,chatOpen:hr,currentMode:ji,modeDefinitions:_r,buildMode:n,playfulMode:t,selectedTool:qa,farmTools:ff,decorTools:df,farmBlocks:ai,decorations:xs,farmStats:Fh,farmSpawnNotice:Ya,activeGladeId:fi,activeGlade:i,gladeSlots:hi,gladeSummaries:s,totalPips:r,playerPosition:pr,selectGladeSlot:o,setPlayerPosition:a,selectPip:l,deselectPip:c,triggerGathering:u,setPips:h,updatePipInList:p,openChat:_,closeChat:v,setMode:m,cycleMode:d,toggleBuildMode:T,decorMode:e,placeDecoration:N,cycleSlot:k,selectToolByKey:g,placeFarmBlock:M,tickFarm:ee,spawnDynamicGlade:q,fairies:lo,capturedFairies:af,pokeballs:h_,spawnFairy:Y,captureFairy:ae,inventory:mr,selectedSlot:ja,wildPips:gr,equipHat:Z,spawnWildPip:j,captureWildPip:F,addPipExp:ye,onboardingStep:uo,guidePip:m_,feedPip:Se,hydratePip:Le,nearbyPip:f,floatingTexts:fo,toast:ho,showToast:D,fxPulse:cf,triggerFxPulse:P,nextOnboarding:Me,removePip:tt,removeFarmBlock:le,terminalOpen:co,toggleTerminal:S,createPip:S_,speakToAgent:v_,addPromptNote:x_,copyConversations:y_}}function v_(n,e){const{pips:t,updatePipInList:i}=ms();t.value.find(r=>r.id===n)&&(i({id:n,currentSpeech:e}),setTimeout(()=>{i({id:n,currentSpeech:""})},6e3))}function x_(n,e,t){Wr(()=>Promise.resolve().then(()=>Lc),void 0,import.meta.url).then(i=>{})}function y_(){const n=localStorage.getItem("pips_conversations");return n?(navigator.clipboard.writeText(n),!0):!1}function M_(){return[li("glade-prod","Production District","content","Flower Land","#f2b7cf",{x:-60,z:-40},[Ot("Pistil","#f08aac",-66,-42,"Cheerful and collaborative.","glade-prod"),Ot("Petal","#86dca3",-58,-35,"Organized and supportive.","glade-prod")]),li("glade-forge","Infrastructure Forge","infra","Lava Land","#ef9a6f",{x:60,z:-40},[Ot("Cinder","#f0805f",56,-38,"Fast, bold, and practical.","glade-forge"),Ot("Basalt","#7a6262",64,-44,"Steady and defensive.","glade-forge")]),li("glade-amber","Design Amber","design","Autumn Land","#e0b26f",{x:-60,z:40},[Ot("Maple","#d38b4d",-66,36,"Reflective and balanced.","glade-amber"),Ot("Acorn","#ba8b62",-56,45,"Patient and detail-oriented.","glade-amber")]),li("glade-dusk","Product Twilight","product","Sunset Land","#c9a0ff",{x:60,z:40},[Ot("Nova","#d58cff",56,44,"Visionary and strategic.","glade-dusk"),Ot("Ray","#ffb88f",64,37,"Warm communicator and planner.","glade-dusk")]),li("glade-frost","Research Frost","research","Mist Land","#9ec9ef",{x:0,z:-70},[Ot("Drift","#8abbe8",-4,-74,"Analytical and curious.","glade-frost"),Ot("Halo","#b0d8ff",4,-66,"Calm and evidence-driven.","glade-frost")]),li("glade-wild","Experimental Meadow","experiments","Meadow Land","#a8db92",{x:0,z:70},[Ot("Moss","#84c677",2,68,"Playful and experimental.","glade-wild")]),li("glade-web","Web Services Hub","web","Cyber Land","#63cdda",{x:120,z:0},[Ot("Admin","#3dc1d3",118,3,"Vigilant and precise.","glade-web"),Ot("Builder","#1e90ff",123,-5,"Logical and efficient.","glade-web")]),li("glade-media","Media Collective","media","Media Land","#f8a5c2",{x:-120,z:0},[Ot("Frame","#f78fb3",-122,-2,"Creative and visionary.","glade-media"),Ot("Script","#e77f98",-118,5,"Detail-oriented and focused.","glade-media")])]}function li(n,e,t,i,s,r,o){return{id:n,name:e,project:t,theme:i,color:s,center:r,zone:{minX:r.x-8,maxX:r.x+8,minZ:r.z-8,maxZ:r.z+8},pips:o}}function Ot(n,e,t,i,s,r,o="glade",a="native"){return{id:`pip-${n.toLowerCase()}-${Math.random().toString(16).slice(2,6)}`,name:n,color:e,personality:s,provider:o,model:a,status:"idle",position_x:t,position_z:i,gladeId:r,hunger:60+Math.random()*40,thirst:60+Math.random()*40,emotionalBond:Math.floor(Math.random()*20),level:1,exp:0,brickCount:0,isBuilding:!1}}function S_(n,e,t,i,s,r,o="glade",a="native"){const l=Ot(n,e,t,i,s,r,o,a);return ht.value.push(l),l}function Oh(){return{capacity:0,growthRate:1,calmBias:0,boldBias:0,curiousBias:0,nextSpawnIn:45}}function Hl(n){const e=Oh();for(const t of ai.value)t.gladeId===n&&(t.type==="nest"&&(e.capacity+=1),t.type==="lantern"&&(e.growthRate+=.25),t.type==="totem"&&(e.boldBias+=1,e.curiousBias+=1),t.type==="archive"&&(e.calmBias+=2));return e.nextSpawnIn=Ii.value[n]??45,e}ht.value=hi.value.flatMap(n=>zl(n.pips));Er();function aa(n,e={x:0,y:0},t=null){const i=Fe(e),s=Fe(!1),r={x:0,y:0},o={x:0,y:0};if(t){const h=localStorage.getItem(t);if(h)try{i.value=JSON.parse(h)}catch(p){console.error("Failed to load position from storage",p)}}function a(h){h.button===0&&(["INPUT","BUTTON","SELECT","TEXTAREA"].includes(h.target.tagName)||(s.value=!0,r.x=h.clientX,r.y=h.clientY,o.x=i.value.x,o.y=i.value.y,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),h.preventDefault()))}function l(h){if(!s.value)return;const p=h.clientX-r.x,_=h.clientY-r.y;i.value={x:o.x+p,y:o.y+_}}function c(){s.value=!1,window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),t&&localStorage.setItem(t,JSON.stringify(i.value))}function u(){i.value=e,t&&localStorage.removeItem(t)}return{position:i,isDragging:s,onMouseDown:a,dragStyles:(h={})=>({...h,position:"fixed",transform:`translate(${i.value.x}px, ${i.value.y}px)`,cursor:s.value?"grabbing":"grab",transition:s.value?"none":"transform 0.1s ease-out"}),resetPosition:u}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="170",b_=0,pf=1,E_=2,Bh=1,T_=2,ci=3,Vi=0,ln=1,Dn=2,Bi=0,Ws=1,mf=2,gf=3,_f=4,w_=5,rs=100,A_=101,C_=102,R_=103,P_=104,D_=200,L_=201,I_=202,U_=203,Vl=204,Gl=205,N_=206,F_=207,O_=208,B_=209,k_=210,z_=211,H_=212,V_=213,G_=214,Wl=0,Xl=1,$l=2,Zs=3,ql=4,Yl=5,jl=6,Kl=7,Zc=0,W_=1,X_=2,ki=0,$_=1,q_=2,Y_=3,kh=4,j_=5,K_=6,Z_=7,zh=300,Js=301,Qs=302,Zl=303,Jl=304,Ra=306,Ql=1e3,as=1001,ec=1002,On=1003,J_=1004,po=1005,Yn=1006,Ka=1007,ls=1008,bi=1009,Hh=1010,Vh=1011,Xr=1012,Jc=1013,ds=1014,gi=1015,Qr=1016,Qc=1017,eu=1018,er=1020,Gh=35902,Wh=1021,Xh=1022,Un=1023,$h=1024,qh=1025,Xs=1026,tr=1027,Yh=1028,tu=1029,jh=1030,nu=1031,iu=1033,Yo=33776,jo=33777,Ko=33778,Zo=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37808,cc=37809,uc=37810,fc=37811,dc=37812,hc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,xc=37819,yc=37820,Mc=37821,Jo=36492,Sc=36494,bc=36495,Kh=36283,Ec=36284,Tc=36285,wc=36286,Q_=3200,ev=3201,su=0,tv=1,Oi="",pn="srgb",rr="srgb-linear",Pa="linear",gt="srgb",ys=7680,vf=519,nv=512,iv=513,sv=514,Zh=515,rv=516,ov=517,av=518,lv=519,xf=35044,yf="300 es",_i=2e3,la=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mf=1234567;const Ur=Math.PI/180,$r=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function ru(n,e){return(n%e+e)%e}function cv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function uv(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function fv(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function dv(n,e=1){return e-Math.abs(ru(n,e*2)-e)}function hv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gv(n,e){return n+Math.random()*(e-n)}function _v(n){return n*(.5-Math.random())}function vv(n){n!==void 0&&(Mf=n);let e=Mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xv(n){return n*Ur}function yv(n){return n*$r}function Mv(n){return(n&n-1)===0&&n!==0}function Sv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ev(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hs={DEG2RAD:Ur,RAD2DEG:$r,generateUUID:ar,clamp:Qt,euclideanModulo:ru,mapLinear:cv,inverseLerp:uv,lerp:Nr,damp:fv,pingpong:dv,smoothstep:hv,smootherstep:pv,randInt:mv,randFloat:gv,randFloatSpread:_v,seededRandom:vv,degToRad:xv,radToDeg:yv,isPowerOfTwo:Mv,ceilPowerOfTwo:Sv,floorPowerOfTwo:bv,setQuaternionFromProperEuler:Ev,normalize:Kt,denormalize:Ns};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=s[0],m=s[3],d=s[6],T=s[1],S=s[4],g=s[7],k=s[2],D=s[5],P=s[8];return r[0]=o*v+a*T+l*k,r[3]=o*m+a*S+l*D,r[6]=o*d+a*g+l*P,r[1]=c*v+u*T+f*k,r[4]=c*m+u*S+f*D,r[7]=c*d+u*g+f*P,r[2]=h*v+p*T+_*k,r[5]=h*m+p*S+_*D,r[8]=h*d+p*g+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,_=t*f+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Qe;function Jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tv(){const n=ca("canvas");return n.style.display="block",n}const Sf={};function Tr(n){n in Sf||(Sf[n]=!0,console.warn(n))}function wv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Av(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(n.r=$s(n.r),n.g=$s(n.g),n.b=$s(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?Pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const bf=[.64,.33,.3,.6,.15,.06],Ef=[.2126,.7152,.0722],Tf=[.3127,.329],wf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[rr]:{primaries:bf,whitePoint:Tf,transfer:Pa,toXYZ:wf,fromXYZ:Af,luminanceCoefficients:Ef,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:bf,whitePoint:Tf,transfer:gt,toXYZ:wf,fromXYZ:Af,luminanceCoefficients:Ef,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let Ms;class Rv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=ca("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pv=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dv=0;class nn extends or{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=as,s=as,r=Yn,o=ls,a=Un,l=bi,c=nn.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=ar(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=zh;nn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,g=(p+1)/2,k=(d+1)/2,D=(u+h)/4,P=(f+v)/4,U=(_+m)/4;return S>g&&S>k?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=D/i,r=P/i):g>k?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=D/s,r=U/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=P/r,s=U/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends Lv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ep extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iv extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*v,T=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const k=Math.sqrt(S),D=Math.atan2(k,d*T);m=Math.sin(m*D)/k,a=Math.sin(a*D)/k}const g=a*T;if(l=l*m+h*g,c=c*m+p*g,u=u*m+_*g,f=f*m+v*g,m===1-a){const k=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=k,c*=k,u*=k,f*=k}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new H,Cf=new eo;class to{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),go.subVectors(this.max,vr),Ss.subVectors(e.a,vr),bs.subVectors(e.b,vr),Es.subVectors(e.c,vr),Ai.subVectors(bs,Ss),Ci.subVectors(Es,bs),Ki.subVectors(Ss,Es);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!el(t,Ss,bs,Es,go)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Ss,bs,Es,go))?!1:(_o.crossVectors(Ai,Ci),t=[_o.x,_o.y,_o.z],el(t,Ss,bs,Es,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new H,new H,new H,new H,new H,new H,new H,new H],Cn=new H,mo=new to,Ss=new H,bs=new H,Es=new H,Ai=new H,Ci=new H,Ki=new H,vr=new H,go=new H,_o=new H,Zi=new H;function el(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uv=new to,xr=new H,tl=new H;class no{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(tl)),this.expandByPoint(xr.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new H,nl=new H,vo=new H,Ri=new H,il=new H,xo=new H,sl=new H;class Da{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nl.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(nl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vo),a=Ri.dot(this.direction),l=-Ri.dot(vo),c=Ri.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(nl).addScaledVector(vo,h),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){il.subVectors(t,e),xo.subVectors(i,e),sl.crossVectors(il,xo);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(xo.crossVectors(Ri,xo));if(l<0)return null;const c=a*this.direction.dot(il.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(sl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,p,_,v,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,p,_,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Fv)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Pi.crossVectors(i,fn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Pi.crossVectors(i,fn)),Pi.normalize(),yo.crossVectors(fn,Pi),s[0]=Pi.x,s[4]=yo.x,s[8]=fn.x,s[1]=Pi.y,s[5]=yo.y,s[9]=fn.y,s[2]=Pi.z,s[6]=yo.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],T=i[3],S=i[7],g=i[11],k=i[15],D=s[0],P=s[4],U=s[8],b=s[12],M=s[1],N=s[5],ee=s[9],q=s[13],Y=s[2],ae=s[6],Z=s[10],j=s[14],F=s[3],ye=s[7],Se=s[11],Le=s[15];return r[0]=o*D+a*M+l*Y+c*F,r[4]=o*P+a*N+l*ae+c*ye,r[8]=o*U+a*ee+l*Z+c*Se,r[12]=o*b+a*q+l*j+c*Le,r[1]=u*D+f*M+h*Y+p*F,r[5]=u*P+f*N+h*ae+p*ye,r[9]=u*U+f*ee+h*Z+p*Se,r[13]=u*b+f*q+h*j+p*Le,r[2]=_*D+v*M+m*Y+d*F,r[6]=_*P+v*N+m*ae+d*ye,r[10]=_*U+v*ee+m*Z+d*Se,r[14]=_*b+v*q+m*j+d*Le,r[3]=T*D+S*M+g*Y+k*F,r[7]=T*P+S*N+g*ae+k*ye,r[11]=T*U+S*ee+g*Z+k*Se,r[15]=T*b+S*q+g*j+k*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+v*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],T=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,S=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,g=u*v*c-_*f*c+_*a*p-o*v*p-u*a*d+o*f*d,k=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,D=t*T+i*S+s*g+r*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=T*P,e[1]=(v*h*r-f*m*r-v*s*p+i*m*p+f*s*d-i*h*d)*P,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*P,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*P,e[4]=S*P,e[5]=(u*m*r-_*h*r+_*s*p-t*m*p-u*s*d+t*h*d)*P,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*P,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*P,e[8]=g*P,e[9]=(_*f*r-u*v*r-_*i*p+t*v*p+u*i*d-t*f*d)*P,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*d+t*a*d)*P,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=k*P,e[13]=(u*v*s-_*f*s+_*i*h-t*v*h-u*i*m+t*f*m)*P,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*m-t*a*m)*P,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,_=r*f,v=o*u,m=o*f,d=a*f,T=l*c,S=l*u,g=l*f,k=i.x,D=i.y,P=i.z;return s[0]=(1-(v+d))*k,s[1]=(p+g)*k,s[2]=(_-S)*k,s[3]=0,s[4]=(p-g)*D,s[5]=(1-(h+d))*D,s[6]=(m+T)*D,s[7]=0,s[8]=(_+S)*P,s[9]=(m-T)*P,s[10]=(1-(h+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/r,u=1/o,f=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,t.setFromRotationMatrix(Rn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=_i){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let p,_;if(a===_i)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===la)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=_i){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,p=(i+s)*u;let _,v;if(a===_i)_=(o+r)*f,v=-2*f;else if(a===la)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ts=new H,Rn=new bt,Nv=new H(0,0,0),Fv=new H(1,1,1),Pi=new H,yo=new H,fn=new H,Rf=new bt,Pf=new eo;class Yt{constructor(e=0,t=0,i=0,s=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ov=0;const Df=new H,ws=new eo,si=new bt,Mo=new H,yr=new H,Bv=new H,kv=new eo,Lf=new H(1,0,0),If=new H(0,1,0),Uf=new H(0,0,1),Nf={type:"added"},zv={type:"removed"},As={type:"childadded",child:null},rl={type:"childremoved",child:null};class It extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new H,t=new Yt,i=new eo,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Qe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Lf,e)}rotateY(e){return this.rotateOnAxis(If,e)}rotateZ(e){return this.rotateOnAxis(Uf,e)}translateOnAxis(e,t){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lf,e)}translateY(e){return this.translateOnAxis(If,e)}translateZ(e){return this.translateOnAxis(Uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mo.copy(e):Mo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(yr,Mo,this.up):si.lookAt(Mo,yr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(si),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nf),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zv),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nf),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Bv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}It.DEFAULT_UP=new H(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new H,ri=new H,ol=new H,oi=new H,Cs=new H,Rs=new H,Ff=new H,al=new H,ll=new H,cl=new H,ul=new At,fl=new At,dl=new At;class Ln{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),ri.subVectors(i,t),ol.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ri),l=Pn.dot(ol),c=ri.dot(ri),u=ri.dot(ol),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,i),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ri.subVectors(e,t),Pn.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Pn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,i),Rs.subVectors(r,i),al.subVectors(e,i);const l=Cs.dot(al),c=Rs.dot(al);if(l<=0&&c<=0)return t.copy(i);ll.subVectors(e,s);const u=Cs.dot(ll),f=Rs.dot(ll);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cs,o);cl.subVectors(e,r);const p=Cs.dot(cl),_=Rs.dot(cl);if(_>=0&&p<=_)return t.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Rs,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Ff.subVectors(r,s),a=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(Ff,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},So={h:0,s:0,l:0};function hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=ru(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=tp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return ot.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Qt(Ht.r*255,0,255))*65536+Math.round(Qt(Ht.g*255,0,255))*256+Math.round(Qt(Ht.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=pn){ot.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,s=Ht.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(So);const i=Nr(Di.h,So.h,t),s=Nr(Di.s,So.s,t),r=Nr(Di.l,So.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ye;Ye.NAMES=tp;let Hv=0;class Xi extends or{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=ar(),this.name="",this.blending=Ws,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class La extends Xi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new H,bo=new it;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xf,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xf&&(e.usage=this.usage),e}}class np extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ip extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vv=0;const vn=new bt,pl=new It,Ps=new H,dn=new to,Mr=new to,Ft=new H;class cn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?ip:np)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(dn.min,Mr.min),dn.expandByPoint(Ft),Ft.addVectors(dn.max,Mr.max),dn.expandByPoint(Ft)):(dn.expandByPoint(Mr.min),dn.expandByPoint(Mr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Ft.add(Ps)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new H,l[U]=new H;const c=new H,u=new H,f=new H,h=new it,p=new it,_=new it,v=new H,m=new H;function d(U,b,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,U),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(N),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),a[U].add(v),a[b].add(v),a[M].add(v),l[U].add(m),l[b].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,b=T.length;U<b;++U){const M=T[U],N=M.start,ee=M.count;for(let q=N,Y=N+ee;q<Y;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const S=new H,g=new H,k=new H,D=new H;function P(U){k.fromBufferAttribute(s,U),D.copy(k);const b=a[U];S.copy(b),S.sub(k.multiplyScalar(k.dot(b))).normalize(),g.crossVectors(D,b);const N=g.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,N)}for(let U=0,b=T.length;U<b;++U){const M=T[U],N=M.start,ee=M.count;for(let q=N,Y=N+ee;q<Y;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Of=new bt,Ji=new Da,Eo=new no,Bf=new H,To=new H,wo=new H,Ao=new H,ml=new H,Co=new H,kf=new H,Ro=new H;class Ne extends It{constructor(e=new cn,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ml.fromBufferAttribute(f,e),o?Co.addScaledVector(ml,u):Co.addScaledVector(ml.sub(t),u))}t.add(Co)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(Eo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Eo,Bf)===null||Ji.origin.distanceToSquared(Bf)>(e.far-e.near)**2))&&(Of.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Of),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=T,k=S;g<k;g+=3){const D=a.getX(g),P=a.getX(g+1),U=a.getX(g+2);s=Po(this,d,e,i,c,u,f,D,P,U),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const T=a.getX(m),S=a.getX(m+1),g=a.getX(m+2);s=Po(this,o,e,i,c,u,f,T,S,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=T,k=S;g<k;g+=3){const D=g,P=g+1,U=g+2;s=Po(this,d,e,i,c,u,f,D,P,U),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const T=m,S=m+1,g=m+2;s=Po(this,o,e,i,c,u,f,T,S,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Gv(n,e,t,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vi,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ro);return c<t.near||c>t.far?null:{distance:c,point:Ro.clone(),object:n}}function Po(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,To),n.getVertexPosition(l,wo),n.getVertexPosition(c,Ao);const u=Gv(n,e,t,i,To,wo,Ao,kf);if(u){const f=new H;Ln.getBarycoord(kf,To,wo,Ao,f),s&&(u.uv=Ln.getInterpolatedAttribute(s,a,l,c,f,new it)),r&&(u.uv1=Ln.getInterpolatedAttribute(r,a,l,c,f,new it)),o&&(u.normal=Ln.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Ln.getNormal(To,wo,Ao,h.normal),u.face=h,u.barycoord=f}return u}class ut extends cn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function _(v,m,d,T,S,g,k,D,P,U,b){const M=g/P,N=k/U,ee=g/2,q=k/2,Y=D/2,ae=P+1,Z=U+1;let j=0,F=0;const ye=new H;for(let Se=0;Se<Z;Se++){const Le=Se*N-q;for(let Pe=0;Pe<ae;Pe++){const tt=Pe*M-ee;ye[v]=tt*T,ye[m]=Le*S,ye[d]=Y,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[d]=D>0?1:-1,u.push(ye.x,ye.y,ye.z),f.push(Pe/P),f.push(1-Se/U),j+=1}}for(let Se=0;Se<U;Se++)for(let Le=0;Le<P;Le++){const Pe=h+Le+ae*Se,tt=h+Le+ae*(Se+1),le=h+(Le+1)+ae*(Se+1),Me=h+(Le+1)+ae*Se;l.push(Pe,tt,Me),l.push(tt,le,Me),F+=6}a.addGroup(p,F,b),p+=F,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const s in i)e[s]=i[s]}return e}function Wv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Xv={clone:nr,merge:Zt};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Xi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rp extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new H,zf=new it,Hf=new it;class mn extends rp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,zf,Hf),t.subVectors(Hf,zf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Ls=1;class Yv extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Ds,Ls,e,t);s.layers=this.layers,this.add(s);const r=new mn(Ds,Ls,e,t);r.layers=this.layers,this.add(r);const o=new mn(Ds,Ls,e,t);o.layers=this.layers,this.add(o);const a=new mn(Ds,Ls,e,t);a.layers=this.layers,this.add(a);const l=new mn(Ds,Ls,e,t);l.layers=this.layers,this.add(l);const c=new mn(Ds,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class op extends nn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jv extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new op(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ut(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Bi});r.uniforms.tEquirect.value=t;const o=new Ne(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=Yn),new Yv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const gl=new H,Kv=new H,Zv=new Qe;class Ni{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=gl.subVectors(i,t).cross(Kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zv.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new no,Do=new H;class au{constructor(e=new Ni,t=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],_=s[9],v=s[10],m=s[11],d=s[12],T=s[13],S=s[14],g=s[15];if(i[0].setComponents(l-r,h-c,m-p,g-d).normalize(),i[1].setComponents(l+r,h+c,m+p,g+d).normalize(),i[2].setComponents(l+o,h+u,m+_,g+T).normalize(),i[3].setComponents(l-o,h-u,m-_,g-T).normalize(),i[4].setComponents(l-a,h-f,m-v,g-S).normalize(),t===_i)i[5].setComponents(l+a,h+f,m+v,g+S).normalize();else if(t===la)i[5].setComponents(a,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ap(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Jv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Kn extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const T=d*h-o;for(let S=0;S<c;S++){const g=S*f-r;_.push(g,-T,0),v.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const S=T+c*d,g=T+c*(d+1),k=T+1+c*(d+1),D=T+1+c*d;p.push(S,g,D),p.push(g,k,D)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,S0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_x=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ay=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_y=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,by=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Py=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Qv,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:u0,bsdfs:f0,iridescence_fragment:d0,bumpmap_pars_fragment:h0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:_0,color_fragment:v0,color_pars_fragment:x0,color_pars_vertex:y0,color_vertex:M0,common:S0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:w0,emissivemap_fragment:A0,emissivemap_pars_fragment:C0,colorspace_fragment:R0,colorspace_pars_fragment:P0,envmap_fragment:D0,envmap_common_pars_fragment:L0,envmap_pars_fragment:I0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:X0,envmap_vertex:N0,fog_vertex:F0,fog_pars_vertex:O0,fog_fragment:B0,fog_pars_fragment:k0,gradientmap_pars_fragment:z0,lightmap_pars_fragment:H0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:$0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:j0,lights_physical_fragment:K0,lights_physical_pars_fragment:Z0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:ex,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ix,logdepthbuf_vertex:sx,map_fragment:rx,map_pars_fragment:ox,map_particle_fragment:ax,map_particle_pars_fragment:lx,metalnessmap_fragment:cx,metalnessmap_pars_fragment:ux,morphinstance_vertex:fx,morphcolor_vertex:dx,morphnormal_vertex:hx,morphtarget_pars_vertex:px,morphtarget_vertex:mx,normal_fragment_begin:gx,normal_fragment_maps:_x,normal_pars_fragment:vx,normal_pars_vertex:xx,normal_vertex:yx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:wx,packing:Ax,premultiplied_alpha_fragment:Cx,project_vertex:Rx,dithering_fragment:Px,dithering_pars_fragment:Dx,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Nx,shadowmap_vertex:Fx,shadowmask_pars_fragment:Ox,skinbase_vertex:Bx,skinning_pars_vertex:kx,skinning_vertex:zx,skinnormal_vertex:Hx,specularmap_fragment:Vx,specularmap_pars_fragment:Gx,tonemapping_fragment:Wx,tonemapping_pars_fragment:Xx,transmission_fragment:$x,transmission_pars_fragment:qx,uv_pars_fragment:Yx,uv_pars_vertex:jx,uv_vertex:Kx,worldpos_vertex:Zx,background_vert:Jx,background_frag:Qx,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:sy,depth_frag:ry,distanceRGBA_vert:oy,distanceRGBA_frag:ay,equirect_vert:ly,equirect_frag:cy,linedashed_vert:uy,linedashed_frag:fy,meshbasic_vert:dy,meshbasic_frag:hy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:_y,meshnormal_vert:vy,meshnormal_frag:xy,meshphong_vert:yy,meshphong_frag:My,meshphysical_vert:Sy,meshphysical_frag:by,meshtoon_vert:Ey,meshtoon_frag:Ty,points_vert:wy,points_frag:Ay,shadow_vert:Cy,shadow_frag:Ry,sprite_vert:Py,sprite_frag:Dy},Ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Xn={basic:{uniforms:Zt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Zt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Zt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Zt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Zt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Zt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Zt([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Zt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Zt([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Zt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Zt([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Zt([Ie.common,Ie.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Zt([Ie.lights,Ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Xn.physical={uniforms:Zt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Lo={r:0,b:0,g:0},es=new Yt,Ly=new bt;function Iy(n,e,t,i,s,r,o){const a=new Ye(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function v(T){let S=!1;const g=_(T);g===null?d(a,l):g&&g.isColor&&(d(g,1),S=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const g=_(S);g&&(g.isCubeTexture||g.mapping===Ra)?(u===void 0&&(u=new Ne(new ut(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:nr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(S.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(es)),u.material.toneMapped=ot.getTransfer(g.colorSpace)!==gt,(f!==g||h!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ne(new Kn(2,2),new Gi({name:"BackgroundMaterial",uniforms:nr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ot.getTransfer(g.colorSpace)!==gt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,S){T.getRGB(Lo,sp(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:v,addToRenderList:m}}function Uy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(M,N,ee,q,Y){let ae=!1;const Z=f(q,ee,N);r!==Z&&(r=Z,c(r.object)),ae=p(M,q,ee,Y),ae&&_(M,q,ee,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,g(M,N,ee,q),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,N,ee){const q=ee.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let ae=Y[N.id];ae===void 0&&(ae={},Y[N.id]=ae);let Z=ae[q];return Z===void 0&&(Z=h(l()),ae[q]=Z),Z}function h(M){const N=[],ee=[],q=[];for(let Y=0;Y<t;Y++)N[Y]=0,ee[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ee,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,N,ee,q){const Y=r.attributes,ae=N.attributes;let Z=0;const j=ee.getAttributes();for(const F in j)if(j[F].location>=0){const Se=Y[F];let Le=ae[F];if(Le===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Le=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Le=M.instanceColor)),Se===void 0||Se.attribute!==Le||Le&&Se.data!==Le.data)return!0;Z++}return r.attributesNum!==Z||r.index!==q}function _(M,N,ee,q){const Y={},ae=N.attributes;let Z=0;const j=ee.getAttributes();for(const F in j)if(j[F].location>=0){let Se=ae[F];Se===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor));const Le={};Le.attribute=Se,Se&&Se.data&&(Le.data=Se.data),Y[F]=Le,Z++}r.attributes=Y,r.attributesNum=Z,r.index=q}function v(){const M=r.newAttributes;for(let N=0,ee=M.length;N<ee;N++)M[N]=0}function m(M){d(M,0)}function d(M,N){const ee=r.newAttributes,q=r.enabledAttributes,Y=r.attributeDivisors;ee[M]=1,q[M]===0&&(n.enableVertexAttribArray(M),q[M]=1),Y[M]!==N&&(n.vertexAttribDivisor(M,N),Y[M]=N)}function T(){const M=r.newAttributes,N=r.enabledAttributes;for(let ee=0,q=N.length;ee<q;ee++)N[ee]!==M[ee]&&(n.disableVertexAttribArray(ee),N[ee]=0)}function S(M,N,ee,q,Y,ae,Z){Z===!0?n.vertexAttribIPointer(M,N,ee,Y,ae):n.vertexAttribPointer(M,N,ee,q,Y,ae)}function g(M,N,ee,q){v();const Y=q.attributes,ae=ee.getAttributes(),Z=N.defaultAttributeValues;for(const j in ae){const F=ae[j];if(F.location>=0){let ye=Y[j];if(ye===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ye!==void 0){const Se=ye.normalized,Le=ye.itemSize,Pe=e.get(ye);if(Pe===void 0)continue;const tt=Pe.buffer,le=Pe.type,Me=Pe.bytesPerElement,te=le===n.INT||le===n.UNSIGNED_INT||ye.gpuType===Jc;if(ye.isInterleavedBufferAttribute){const V=ye.data,Q=V.stride,fe=ye.offset;if(V.isInstancedInterleavedBuffer){for(let De=0;De<F.locationSize;De++)d(F.location+De,V.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let De=0;De<F.locationSize;De++)m(F.location+De);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let De=0;De<F.locationSize;De++)S(F.location+De,Le/F.locationSize,le,Se,Q*Me,(fe+Le/F.locationSize*De)*Me,te)}else{if(ye.isInstancedBufferAttribute){for(let V=0;V<F.locationSize;V++)d(F.location+V,ye.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let V=0;V<F.locationSize;V++)m(F.location+V);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let V=0;V<F.locationSize;V++)S(F.location+V,Le/F.locationSize,le,Se,Le*Me,Le/F.locationSize*V*Me,te)}}else if(Z!==void 0){const Se=Z[j];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(F.location,Se);break;case 3:n.vertexAttrib3fv(F.location,Se);break;case 4:n.vertexAttrib4fv(F.location,Se);break;default:n.vertexAttrib1fv(F.location,Se)}}}}T()}function k(){U();for(const M in i){const N=i[M];for(const ee in N){const q=N[ee];for(const Y in q)u(q[Y].object),delete q[Y];delete N[ee]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const ee in N){const q=N[ee];for(const Y in q)u(q[Y].object),delete q[Y];delete N[ee]}delete i[M.id]}function P(M){for(const N in i){const ee=i[N];if(ee[M.id]===void 0)continue;const q=ee[M.id];for(const Y in q)u(q[Y].object),delete q[Y];delete ee[M.id]}}function U(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Ny(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===Qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==bi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gi&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:k,maxSamples:D}}function Oy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ni,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,S=T*4;let g=d.clippingState||null;l.value=g,g=u(_,h,S,p);for(let k=0;k!==S;++k)g[k]=t[k];d.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,g=p;S!==v;++S,g+=4)o.copy(f[S]).applyMatrix4(T,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function By(n){let e=new WeakMap;function t(o,a){return a===Zl?o.mapping=Js:a===Jl&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zl||a===Jl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class lp extends rp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Vf=[.125,.215,.35,.446,.526,.582],os=20,_l=new lp,Gf=new Ye;let vl=null,xl=0,yl=0,Ml=!1;const ss=(1+Math.sqrt(5))/2,Is=1/ss,Wf=[new H(-ss,Is,0),new H(ss,Is,0),new H(-Is,0,ss),new H(Is,0,ss),new H(0,ss,-Is),new H(0,ss,Is),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,xl,yl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Qr,format:Un,colorSpace:rr,depthBuffer:!1},s=$f(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ky(r)),this._blurMaterial=zy(r,e,t)}return s}_compileMaterial(e){const t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,i,s){const a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Gf),u.toneMapping=ki,u.autoClear=!1;const p=new La({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Ne(new ut,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Gf),v=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const S=this._cubeSize;Io(s,T*S,d>2?S:0,S,S),u.setRenderTarget(s),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Io(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_l)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wf[(s-r-1)%Wf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ne(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*os-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const d=[];let T=0;for(let P=0;P<os;++P){const U=P/v,b=Math.exp(-U*U/2);d.push(b),P===0?T+=b:P<m&&(T+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-i;const g=this._sizeLods[s],k=3*g*(s>S-Bs?s-S+Bs:0),D=4*(this._cubeSize-g);Io(t,k,D,3*g,2*g),l.setRenderTarget(t),l.render(f,_l)}}function ky(n){const e=[],t=[],i=[];let s=n;const r=n-Bs+1+Vf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Bs?l=Vf[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,T=new Float32Array(v*_*p),S=new Float32Array(m*_*p),g=new Float32Array(d*_*p);for(let D=0;D<p;D++){const P=D%3*2/3-1,U=D>2?0:-1,b=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];T.set(b,v*_*D),S.set(h,m*_*D);const M=[D,D,D,D,D,D];g.set(M,d*_*D)}const k=new cn;k.setAttribute("position",new Tn(T,v)),k.setAttribute("uv",new Tn(S,m)),k.setAttribute("faceIndex",new Tn(g,d)),e.push(k),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $f(n,e,t){const i=new ps(n,e,t);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zy(n,e,t){const i=new Float32Array(os),s=new H(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function qf(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Yf(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zl||l===Jl,u=l===Js||l===Qs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Xf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Xf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Vy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gy(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let S=0,g=T.length;S<g;S+=3){const k=T[S+0],D=T[S+1],P=T[S+2];h.push(k,D,D,P,P,k)}}else if(_!==void 0){const T=_.array;v=_.version;for(let S=0,g=T.length/3-1;S<g;S+=3){const k=S+0,D=S+1,P=S+2;h.push(k,D,D,P,P,k)}}else return;const m=new(Jh(h)?ip:np)(h,1);m.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Wy(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,v,0,_);let d=0;for(let T=0;T<_;T++)d+=p[T]*v[T];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Xy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $y(n,e,t){const i=new WeakMap,s=new At;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),_===!0&&(S=2),v===!0&&(S=3);let g=a.attributes.position.count*S,k=1;g>e.maxTextureSize&&(k=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const D=new Float32Array(g*k*4*f),P=new ep(D,g,k,f);P.type=gi,P.needsUpdate=!0;const U=S*4;for(let M=0;M<f;M++){const N=m[M],ee=d[M],q=T[M],Y=g*k*4*M;for(let ae=0;ae<N.count;ae++){const Z=ae*U;p===!0&&(s.fromBufferAttribute(N,ae),D[Y+Z+0]=s.x,D[Y+Z+1]=s.y,D[Y+Z+2]=s.z,D[Y+Z+3]=0),_===!0&&(s.fromBufferAttribute(ee,ae),D[Y+Z+4]=s.x,D[Y+Z+5]=s.y,D[Y+Z+6]=s.z,D[Y+Z+7]=0),v===!0&&(s.fromBufferAttribute(q,ae),D[Y+Z+8]=s.x,D[Y+Z+9]=s.y,D[Y+Z+10]=s.z,D[Y+Z+11]=q.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new it(g,k)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function qy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class cp extends nn{constructor(e,t,i,s,r,o,a,l,c,u=Xs){if(u!==Xs&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=ds),i===void 0&&u===tr&&(i=er),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const up=new nn,jf=new cp(1,1),fp=new ep,dp=new Iv,hp=new op,Kf=[],Zf=[],Jf=new Float32Array(16),Qf=new Float32Array(9),ed=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Kf[s];if(r===void 0&&(r=new Float32Array(s),Kf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=Zf[e];t===void 0&&(t=new Int32Array(e),Zf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function Jy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;ed.set(i),n.uniformMatrix2fv(this.addr,!1,ed),Nt(t,i)}}function Qy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Qf.set(i),n.uniformMatrix3fv(this.addr,!1,Qf),Nt(t,i)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Jf.set(i),n.uniformMatrix4fv(this.addr,!1,Jf),Nt(t,i)}}function tM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function rM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function cM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jf.compareFunction=Zh,r=jf):r=up,t.setTexture2D(e||r,s)}function uM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||dp,s)}function fM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hp,s)}function dM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fp,s)}function hM(n){switch(n){case 5126:return Yy;case 35664:return jy;case 35665:return Ky;case 35666:return Zy;case 35674:return Jy;case 35675:return Qy;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return rM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return dM}}function pM(n,e){n.uniform1fv(this.addr,e)}function mM(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function gM(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function _M(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function vM(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xM(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yM(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MM(n,e){n.uniform1iv(this.addr,e)}function SM(n,e){n.uniform2iv(this.addr,e)}function bM(n,e){n.uniform3iv(this.addr,e)}function EM(n,e){n.uniform4iv(this.addr,e)}function TM(n,e){n.uniform1uiv(this.addr,e)}function wM(n,e){n.uniform2uiv(this.addr,e)}function AM(n,e){n.uniform3uiv(this.addr,e)}function CM(n,e){n.uniform4uiv(this.addr,e)}function RM(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||up,r[o])}function PM(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dp,r[o])}function DM(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hp,r[o])}function LM(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fp,r[o])}function IM(n){switch(n){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return xM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return EM;case 5125:return TM;case 36294:return wM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}class UM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hM(t.type)}}class NM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IM(t.type)}}class FM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function td(n,e){n.seq.push(e),n.map[e.id]=e}function OM(n,e,t){const i=n.name,s=i.length;for(Sl.lastIndex=0;;){const r=Sl.exec(i),o=Sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){td(t,c===void 0?new UM(a,n,e):new NM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new FM(a),td(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);OM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function nd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const BM=37297;let kM=0;function zM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const id=new Qe;function HM(n){ot._getMatrix(id,ot.workingColorSpace,n);const e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Pa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zM(n.getShaderSource(e),o)}else return s}function VM(n,e){const t=HM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function GM(n,e){let t;switch(e){case $_:t="Linear";break;case q_:t="Reinhard";break;case Y_:t="Cineon";break;case kh:t="ACESFilmic";break;case K_:t="AgX";break;case Z_:t="Neutral";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new H;function WM(){ot.getLuminanceCoefficients(Uo);const n=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function $M(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function rd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(n){return n.replace(YM,KM)}const jM=new Map;function KM(n,e){let t=nt[e];if(t===void 0){const i=jM.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(n){return n.replace(ZM,JM)}function JM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function eS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function nS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case W_:e="ENVMAP_BLENDING_MIX";break;case X_:e="ENVMAP_BLENDING_ADD";break}return e}function iS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QM(t),c=eS(t),u=tS(t),f=nS(t),h=iS(t),p=XM(t),_=$M(r),v=s.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wr).join(`
`),d.length>0&&(d+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),d=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?nt.tonemapping_pars_fragment:"",t.toneMapping!==ki?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,VM("linearToOutputTexel",t.outputColorSpace),WM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=Ac(o),o=rd(o,t),o=od(o,t),a=Ac(a),a=rd(a,t),a=od(a,t),o=ad(o),a=ad(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=T+m+o,g=T+d+a,k=nd(s,s.VERTEX_SHADER,S),D=nd(s,s.FRAGMENT_SHADER,g);s.attachShader(v,k),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(N){if(n.debug.checkShaderErrors){const ee=s.getProgramInfoLog(v).trim(),q=s.getShaderInfoLog(k).trim(),Y=s.getShaderInfoLog(D).trim();let ae=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,k,D);else{const j=sd(s,k,"vertex"),F=sd(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ee+`
`+j+`
`+F)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||Y==="")&&(Z=!1);Z&&(N.diagnostics={runnable:ae,programLog:ee,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(k),s.deleteShader(D),U=new Qo(s,v),b=qM(s,v)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,BM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=D,this}let rS=0;class oS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aS(e),t.set(e,i)),i}}class aS{constructor(e){this.id=rS++,this.code=e,this.usedTimes=0}}function lS(n,e,t,i,s,r,o){const a=new ou,l=new oS,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,N,ee,q){const Y=ee.fog,ae=q.geometry,Z=b.isMeshStandardMaterial?ee.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),F=j&&j.mapping===Ra?j.image.height:null,ye=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Le=Se!==void 0?Se.length:0;let Pe=0;ae.morphAttributes.position!==void 0&&(Pe=1),ae.morphAttributes.normal!==void 0&&(Pe=2),ae.morphAttributes.color!==void 0&&(Pe=3);let tt,le,Me,te;if(ye){const ct=Xn[ye];tt=ct.vertexShader,le=ct.fragmentShader}else tt=b.vertexShader,le=b.fragmentShader,l.update(b),Me=l.getVertexShaderID(b),te=l.getFragmentShaderID(b);const V=n.getRenderTarget(),Q=n.state.buffers.depth.getReversed(),fe=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,Xe=!!b.map,R=!!b.matcap,O=!!j,A=!!b.aoMap,he=!!b.lightMap,ie=!!b.bumpMap,ne=!!b.normalMap,de=!!b.displacementMap,oe=!!b.emissiveMap,X=!!b.metalnessMap,y=!!b.roughnessMap,x=b.anisotropy>0,I=b.clearcoat>0,$=b.dispersion>0,se=b.iridescence>0,re=b.sheen>0,be=b.transmission>0,ve=x&&!!b.anisotropyMap,Ee=I&&!!b.clearcoatMap,Ge=I&&!!b.clearcoatNormalMap,xe=I&&!!b.clearcoatRoughnessMap,Re=se&&!!b.iridescenceMap,Be=se&&!!b.iridescenceThicknessMap,$e=re&&!!b.sheenColorMap,Ae=re&&!!b.sheenRoughnessMap,ge=!!b.specularMap,C=!!b.specularColorMap,G=!!b.specularIntensityMap,E=be&&!!b.transmissionMap,z=be&&!!b.thicknessMap,B=!!b.gradientMap,L=!!b.alphaMap,pe=b.alphaTest>0,_e=!!b.alphaHash,Oe=!!b.extensions;let vt=ki;b.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Ct={shaderID:ye,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:le,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:fe,instancingColor:fe&&q.instanceColor!==null,instancingMorph:fe&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:rr,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:R,envMap:O,envMapMode:O&&j.mapping,envMapCubeUVHeight:F,aoMap:A,lightMap:he,bumpMap:ie,normalMap:ne,displacementMap:h&&de,emissiveMap:oe,normalMapObjectSpace:ne&&b.normalMapType===tv,normalMapTangentSpace:ne&&b.normalMapType===su,metalnessMap:X,roughnessMap:y,anisotropy:x,anisotropyMap:ve,clearcoat:I,clearcoatMap:Ee,clearcoatNormalMap:Ge,clearcoatRoughnessMap:xe,dispersion:$,iridescence:se,iridescenceMap:Re,iridescenceThicknessMap:Be,sheen:re,sheenColorMap:$e,sheenRoughnessMap:Ae,specularMap:ge,specularColorMap:C,specularIntensityMap:G,transmission:be,transmissionMap:E,thicknessMap:z,gradientMap:B,opaque:b.transparent===!1&&b.blending===Ws&&b.alphaToCoverage===!1,alphaMap:L,alphaTest:pe,alphaHash:_e,combine:b.combine,mapUv:Xe&&v(b.map.channel),aoMapUv:A&&v(b.aoMap.channel),lightMapUv:he&&v(b.lightMap.channel),bumpMapUv:ie&&v(b.bumpMap.channel),normalMapUv:ne&&v(b.normalMap.channel),displacementMapUv:de&&v(b.displacementMap.channel),emissiveMapUv:oe&&v(b.emissiveMap.channel),metalnessMapUv:X&&v(b.metalnessMap.channel),roughnessMapUv:y&&v(b.roughnessMap.channel),anisotropyMapUv:ve&&v(b.anisotropyMap.channel),clearcoatMapUv:Ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(b.sheenRoughnessMap.channel),specularMapUv:ge&&v(b.specularMap.channel),specularColorMapUv:C&&v(b.specularColorMap.channel),specularIntensityMapUv:G&&v(b.specularIntensityMap.channel),transmissionMapUv:E&&v(b.transmissionMap.channel),thicknessMapUv:z&&v(b.thicknessMap.channel),alphaMapUv:L&&v(b.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(ne||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ae.attributes.uv&&(Xe||L),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Q,skinning:q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===gt,decodeVideoTextureEmissive:oe&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dn,flipSided:b.side===ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&b.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)M.push(N),M.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(T(M,b),S(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function T(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function g(b){const M=_[b.type];let N;if(M){const ee=Xn[M];N=Xv.clone(ee.uniforms)}else N=b.uniforms;return N}function k(b,M){let N;for(let ee=0,q=u.length;ee<q;ee++){const Y=u[ee];if(Y.cacheKey===M){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new sS(n,M,b,r),u.push(N)),N}function D(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:k,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:U}}function cS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function uS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ud(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,p,_,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||uS),i.length>1&&i.sort(h||cd),s.length>1&&s.sort(h||cd)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function fS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ud,n.set(i,[o])):s>=r.length?(o=new ud,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ye};break;case"SpotLight":t={position:new H,direction:new H,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function hS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pS=0;function mS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gS(n){const e=new dS,t=hS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new bt,o=new bt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,T=0,S=0,g=0,k=0,D=0,P=0;c.sort(mS);for(let b=0,M=c.length;b<M;b++){const N=c[b],ee=N.color,q=N.intensity,Y=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=ee.r*q,f+=ee.g*q,h+=ee.b*q;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],q);P++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,F=t.get(N);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=N.shadow.matrix,T++}i.directional[p]=Z,p++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(ee).multiplyScalar(q),Z.distance=Y,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[v]=Z;const j=N.shadow;if(N.map&&(i.spotLightMap[k]=N.map,k++,j.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[v]=j.matrix,N.castShadow){const F=t.get(N);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=ae,g++}v++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(ee).multiplyScalar(q),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Z,m++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const j=N.shadow,F=t.get(N);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=N.shadow.matrix,S++}i.point[_]=Z,_++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(q),Z.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[d]=Z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==T||U.numPointShadows!==S||U.numSpotShadows!==g||U.numSpotMaps!==k||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=g+k-D,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=T,U.numPointShadows=S,U.numSpotShadows=g,U.numSpotMaps=k,U.numLightProbes=P,i.version=pS++)}function l(c,u){let f=0,h=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const S=c[d];if(S.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),f++}else if(S.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const g=i.point[h];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const g=i.hemi[v];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function fd(n){const e=new gS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _S(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new fd(n),e.set(s,[a])):r>=o.length?(a=new fd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class vS extends Xi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xS extends Xi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SS(n,e,t){let i=new au;const s=new it,r=new it,o=new At,a=new vS({depthPacking:ev}),l=new xS,c={},u=t.maxTextureSize,f={[Vi]:ln,[ln]:Vi,[Dn]:Dn},h=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:yS,fragmentShader:MS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ne(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let d=this.type;this.render=function(D,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(Bi),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=d!==ci&&this.type===ci,Y=d===ci&&this.type!==ci;for(let ae=0,Z=D.length;ae<Z;ae++){const j=D[ae],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ye=F.getFrameExtents();if(s.multiply(ye),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,F.mapSize.y=r.y)),F.map===null||q===!0||Y===!0){const Le=this.type!==ci?{minFilter:On,magFilter:On}:{};F.map!==null&&F.map.dispose(),F.map=new ps(s.x,s.y,Le),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const Se=F.getViewportCount();for(let Le=0;Le<Se;Le++){const Pe=F.getViewport(Le);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),ee.viewport(o),F.updateMatrices(j,Le),i=F.getFrustum(),g(P,U,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===ci&&T(F,U),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,N)};function T(D,P){const U=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ps(s.x,s.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,U,h,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,U,p,v,null)}function S(D,P,U,b){let M=null;const N=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)M=N;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ee=M.uuid,q=P.uuid;let Y=c[ee];Y===void 0&&(Y={},c[ee]=Y);let ae=Y[q];ae===void 0&&(ae=M.clone(),Y[q]=ae,P.addEventListener("dispose",k)),M=ae}if(M.visible=P.visible,M.wireframe=P.wireframe,b===ci?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ee=n.properties.get(M);ee.light=U}return M}function g(D,P,U,b,M){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===ci)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const q=e.update(D),Y=D.material;if(Array.isArray(Y)){const ae=q.groups;for(let Z=0,j=ae.length;Z<j;Z++){const F=ae[Z],ye=Y[F.materialIndex];if(ye&&ye.visible){const Se=S(D,ye,b,M);D.onBeforeShadow(n,D,P,U,q,Se,F),n.renderBufferDirect(U,null,q,Se,D,F),D.onAfterShadow(n,D,P,U,q,Se,F)}}}else if(Y.visible){const ae=S(D,Y,b,M);D.onBeforeShadow(n,D,P,U,q,ae,null),n.renderBufferDirect(U,null,q,ae,D,null),D.onAfterShadow(n,D,P,U,q,ae,null)}}const ee=D.children;for(let q=0,Y=ee.length;q<Y;q++)g(ee[q],P,U,b,M)}function k(D){D.target.removeEventListener("dispose",k);for(const U in c){const b=c[U],M=D.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const bS={[Wl]:Xl,[$l]:jl,[ql]:Kl,[Zs]:Yl,[Xl]:Wl,[jl]:$l,[Kl]:ql,[Yl]:Zs};function ES(n,e){function t(){let E=!1;const z=new At;let B=null;const L=new At(0,0,0,0);return{setMask:function(pe){B!==pe&&!E&&(n.colorMask(pe,pe,pe,pe),B=pe)},setLocked:function(pe){E=pe},setClear:function(pe,_e,Oe,vt,Ct){Ct===!0&&(pe*=vt,_e*=vt,Oe*=vt),z.set(pe,_e,Oe,vt),L.equals(z)===!1&&(n.clearColor(pe,_e,Oe,vt),L.copy(z))},reset:function(){E=!1,B=null,L.set(-1,0,0,0)}}}function i(){let E=!1,z=!1,B=null,L=null,pe=null;return{setReversed:function(_e){if(z!==_e){const Oe=e.get("EXT_clip_control");z?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const vt=pe;pe=null,this.setClear(vt)}z=_e},getReversed:function(){return z},setTest:function(_e){_e?V(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function(_e){B!==_e&&!E&&(n.depthMask(_e),B=_e)},setFunc:function(_e){if(z&&(_e=bS[_e]),L!==_e){switch(_e){case Wl:n.depthFunc(n.NEVER);break;case Xl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case ql:n.depthFunc(n.EQUAL);break;case Yl:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case Kl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}L=_e}},setLocked:function(_e){E=_e},setClear:function(_e){pe!==_e&&(z&&(_e=1-_e),n.clearDepth(_e),pe=_e)},reset:function(){E=!1,B=null,L=null,pe=null,z=!1}}}function s(){let E=!1,z=null,B=null,L=null,pe=null,_e=null,Oe=null,vt=null,Ct=null;return{setTest:function(ct){E||(ct?V(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(ct){z!==ct&&!E&&(n.stencilMask(ct),z=ct)},setFunc:function(ct,wn,Qn){(B!==ct||L!==wn||pe!==Qn)&&(n.stencilFunc(ct,wn,Qn),B=ct,L=wn,pe=Qn)},setOp:function(ct,wn,Qn){(_e!==ct||Oe!==wn||vt!==Qn)&&(n.stencilOp(ct,wn,Qn),_e=ct,Oe=wn,vt=Qn)},setLocked:function(ct){E=ct},setClear:function(ct){Ct!==ct&&(n.clearStencil(ct),Ct=ct)},reset:function(){E=!1,z=null,B=null,L=null,pe=null,_e=null,Oe=null,vt=null,Ct=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,T=null,S=null,g=null,k=null,D=null,P=new Ye(0,0,0),U=0,b=!1,M=null,N=null,ee=null,q=null,Y=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=j>=2);let ye=null,Se={};const Le=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),tt=new At().fromArray(Le),le=new At().fromArray(Pe);function Me(E,z,B,L){const pe=new Uint8Array(4),_e=n.createTexture();n.bindTexture(E,_e),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<B;Oe++)E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY?n.texImage3D(z,0,n.RGBA,1,1,L,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(z+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return _e}const te={};te[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(Zs),ie(!1),ne(pf),V(n.CULL_FACE),A(Bi);function V(E){u[E]!==!0&&(n.enable(E),u[E]=!0)}function Q(E){u[E]!==!1&&(n.disable(E),u[E]=!1)}function fe(E,z){return f[E]!==z?(n.bindFramebuffer(E,z),f[E]=z,E===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=z),E===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=z),!0):!1}function De(E,z){let B=p,L=!1;if(E){B=h.get(z),B===void 0&&(B=[],h.set(z,B));const pe=E.textures;if(B.length!==pe.length||B[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Oe=pe.length;_e<Oe;_e++)B[_e]=n.COLOR_ATTACHMENT0+_e;B.length=pe.length,L=!0}}else B[0]!==n.BACK&&(B[0]=n.BACK,L=!0);L&&n.drawBuffers(B)}function Xe(E){return _!==E?(n.useProgram(E),_=E,!0):!1}const R={[rs]:n.FUNC_ADD,[A_]:n.FUNC_SUBTRACT,[C_]:n.FUNC_REVERSE_SUBTRACT};R[R_]=n.MIN,R[P_]=n.MAX;const O={[D_]:n.ZERO,[L_]:n.ONE,[I_]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[k_]:n.SRC_ALPHA_SATURATE,[O_]:n.DST_COLOR,[N_]:n.DST_ALPHA,[U_]:n.ONE_MINUS_SRC_COLOR,[Gl]:n.ONE_MINUS_SRC_ALPHA,[B_]:n.ONE_MINUS_DST_COLOR,[F_]:n.ONE_MINUS_DST_ALPHA,[z_]:n.CONSTANT_COLOR,[H_]:n.ONE_MINUS_CONSTANT_COLOR,[V_]:n.CONSTANT_ALPHA,[G_]:n.ONE_MINUS_CONSTANT_ALPHA};function A(E,z,B,L,pe,_e,Oe,vt,Ct,ct){if(E===Bi){v===!0&&(Q(n.BLEND),v=!1);return}if(v===!1&&(V(n.BLEND),v=!0),E!==w_){if(E!==m||ct!==b){if((d!==rs||g!==rs)&&(n.blendEquation(n.FUNC_ADD),d=rs,g=rs),ct)switch(E){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFunc(n.ONE,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _f:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _f:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}T=null,S=null,k=null,D=null,P.set(0,0,0),U=0,m=E,b=ct}return}pe=pe||z,_e=_e||B,Oe=Oe||L,(z!==d||pe!==g)&&(n.blendEquationSeparate(R[z],R[pe]),d=z,g=pe),(B!==T||L!==S||_e!==k||Oe!==D)&&(n.blendFuncSeparate(O[B],O[L],O[_e],O[Oe]),T=B,S=L,k=_e,D=Oe),(vt.equals(P)===!1||Ct!==U)&&(n.blendColor(vt.r,vt.g,vt.b,Ct),P.copy(vt),U=Ct),m=E,b=!1}function he(E,z){E.side===Dn?Q(n.CULL_FACE):V(n.CULL_FACE);let B=E.side===ln;z&&(B=!B),ie(B),E.blending===Ws&&E.transparent===!1?A(Bi):A(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),o.setFunc(E.depthFunc),o.setTest(E.depthTest),o.setMask(E.depthWrite),r.setMask(E.colorWrite);const L=E.stencilWrite;a.setTest(L),L&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),oe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(E){M!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),M=E)}function ne(E){E!==b_?(V(n.CULL_FACE),E!==N&&(E===pf?n.cullFace(n.BACK):E===E_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),N=E}function de(E){E!==ee&&(Z&&n.lineWidth(E),ee=E)}function oe(E,z,B){E?(V(n.POLYGON_OFFSET_FILL),(q!==z||Y!==B)&&(n.polygonOffset(z,B),q=z,Y=B)):Q(n.POLYGON_OFFSET_FILL)}function X(E){E?V(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function y(E){E===void 0&&(E=n.TEXTURE0+ae-1),ye!==E&&(n.activeTexture(E),ye=E)}function x(E,z,B){B===void 0&&(ye===null?B=n.TEXTURE0+ae-1:B=ye);let L=Se[B];L===void 0&&(L={type:void 0,texture:void 0},Se[B]=L),(L.type!==E||L.texture!==z)&&(ye!==B&&(n.activeTexture(B),ye=B),n.bindTexture(E,z||te[E]),L.type=E,L.texture=z)}function I(){const E=Se[ye];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xe(){try{n.texStorage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $e(E){tt.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),tt.copy(E))}function Ae(E){le.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),le.copy(E))}function ge(E,z){let B=c.get(z);B===void 0&&(B=new WeakMap,c.set(z,B));let L=B.get(E);L===void 0&&(L=n.getUniformBlockIndex(z,E.name),B.set(E,L))}function C(E,z){const L=c.get(z).get(E);l.get(z)!==L&&(n.uniformBlockBinding(z,L,E.__bindingPointIndex),l.set(z,L))}function G(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ye=null,Se={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,T=null,S=null,g=null,k=null,D=null,P=new Ye(0,0,0),U=0,b=!1,M=null,N=null,ee=null,q=null,Y=null,tt.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:Q,bindFramebuffer:fe,drawBuffers:De,useProgram:Xe,setBlending:A,setMaterial:he,setFlipSided:ie,setCullFace:ne,setLineWidth:de,setPolygonOffset:oe,setScissorTest:X,activeTexture:y,bindTexture:x,unbindTexture:I,compressedTexImage2D:$,compressedTexImage3D:se,texImage2D:Re,texImage3D:Be,updateUBOMapping:ge,uniformBlockBinding:C,texStorage2D:Ge,texStorage3D:xe,texSubImage2D:re,texSubImage3D:be,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ee,scissor:$e,viewport:Ae,reset:G}}function dd(n,e,t,i){const s=TS(i);switch(t){case Wh:return n*e;case $h:return n*e;case qh:return n*e*2;case Yh:return n*e/s.components*s.byteLength;case tu:return n*e/s.components*s.byteLength;case jh:return n*e*2/s.components*s.byteLength;case nu:return n*e*2/s.components*s.byteLength;case Xh:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case iu:return n*e*4/s.components*s.byteLength;case Yo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jo:case Sc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kh:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tc:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TS(n){switch(n){case bi:case Hh:return{byteLength:1,components:1};case Xr:case Vh:case Qr:return{byteLength:2,components:1};case Qc:case eu:return{byteLength:2,components:4};case ds:case Jc:case gi:return{byteLength:4,components:1};case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,x){return p?new OffscreenCanvas(y,x):ca("canvas")}function v(y,x,I){let $=1;const se=X(y);if((se.width>I||se.height>I)&&($=I/Math.max(se.width,se.height)),$<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const re=Math.floor($*se.width),be=Math.floor($*se.height);f===void 0&&(f=_(re,be));const ve=x?_(re,be):f;return ve.width=re,ve.height=be,ve.getContext("2d").drawImage(y,0,0,re,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+re+"x"+be+")."),ve}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(y,x,I,$,se=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let re=x;if(x===n.RED&&(I===n.FLOAT&&(re=n.R32F),I===n.HALF_FLOAT&&(re=n.R16F),I===n.UNSIGNED_BYTE&&(re=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(re=n.R8UI),I===n.UNSIGNED_SHORT&&(re=n.R16UI),I===n.UNSIGNED_INT&&(re=n.R32UI),I===n.BYTE&&(re=n.R8I),I===n.SHORT&&(re=n.R16I),I===n.INT&&(re=n.R32I)),x===n.RG&&(I===n.FLOAT&&(re=n.RG32F),I===n.HALF_FLOAT&&(re=n.RG16F),I===n.UNSIGNED_BYTE&&(re=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(re=n.RG8UI),I===n.UNSIGNED_SHORT&&(re=n.RG16UI),I===n.UNSIGNED_INT&&(re=n.RG32UI),I===n.BYTE&&(re=n.RG8I),I===n.SHORT&&(re=n.RG16I),I===n.INT&&(re=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(re=n.RGB8UI),I===n.UNSIGNED_SHORT&&(re=n.RGB16UI),I===n.UNSIGNED_INT&&(re=n.RGB32UI),I===n.BYTE&&(re=n.RGB8I),I===n.SHORT&&(re=n.RGB16I),I===n.INT&&(re=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),I===n.UNSIGNED_INT&&(re=n.RGBA32UI),I===n.BYTE&&(re=n.RGBA8I),I===n.SHORT&&(re=n.RGBA16I),I===n.INT&&(re=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),x===n.RGBA){const be=se?Pa:ot.getTransfer($);I===n.FLOAT&&(re=n.RGBA32F),I===n.HALF_FLOAT&&(re=n.RGBA16F),I===n.UNSIGNED_BYTE&&(re=be===gt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function g(y,x){let I;return y?x===null||x===ds||x===er?I=n.DEPTH24_STENCIL8:x===gi?I=n.DEPTH32F_STENCIL8:x===Xr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ds||x===er?I=n.DEPTH_COMPONENT24:x===gi?I=n.DEPTH_COMPONENT32F:x===Xr&&(I=n.DEPTH_COMPONENT16),I}function k(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==On&&y.minFilter!==Yn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function D(y){const x=y.target;x.removeEventListener("dispose",D),U(x),x.isVideoTexture&&u.delete(x)}function P(y){const x=y.target;x.removeEventListener("dispose",P),M(x)}function U(y){const x=i.get(y);if(x.__webglInit===void 0)return;const I=y.source,$=h.get(I);if($){const se=$[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(y),Object.keys($).length===0&&h.delete(I)}i.remove(y)}function b(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const I=y.source,$=h.get(I);delete $[x.__cacheKey],o.memory.textures--}function M(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let se=0;se<x.__webglFramebuffer[$].length;se++)n.deleteFramebuffer(x.__webglFramebuffer[$][se]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=y.textures;for(let $=0,se=I.length;$<se;$++){const re=i.get(I[$]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(I[$])}i.remove(y)}let N=0;function ee(){N=0}function q(){const y=N;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),N+=1,y}function Y(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function ae(y,x){const I=i.get(y);if(y.isVideoTexture&&de(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const $=y.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(I,y,x);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function Z(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){le(I,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function j(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){le(I,y,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function F(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Me(I,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const ye={[Ql]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},Se={[On]:n.NEAREST,[J_]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Ka]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},Le={[nv]:n.NEVER,[lv]:n.ALWAYS,[iv]:n.LESS,[Zh]:n.LEQUAL,[sv]:n.EQUAL,[av]:n.GEQUAL,[rv]:n.GREATER,[ov]:n.NOTEQUAL};function Pe(y,x){if(x.type===gi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yn||x.magFilter===Ka||x.magFilter===po||x.magFilter===ls||x.minFilter===Yn||x.minFilter===Ka||x.minFilter===po||x.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ye[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ye[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ye[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Se[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Se[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===On||x.minFilter!==po&&x.minFilter!==ls||x.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function tt(y,x){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",D));const $=x.source;let se=h.get($);se===void 0&&(se={},h.set($,se));const re=Y(x);if(re!==y.__cacheKey){se[re]===void 0&&(se[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),se[re].usedTimes++;const be=se[y.__cacheKey];be!==void 0&&(se[y.__cacheKey].usedTimes--,be.usedTimes===0&&b(x)),y.__cacheKey=re,y.__webglTexture=se[re].texture}return I}function le(y,x,I){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const se=tt(y,x),re=x.source;t.bindTexture($,y.__webglTexture,n.TEXTURE0+I);const be=i.get(re);if(re.version!==be.__version||se===!0){t.activeTexture(n.TEXTURE0+I);const ve=ot.getPrimaries(ot.workingColorSpace),Ee=x.colorSpace===Oi?null:ot.getPrimaries(x.colorSpace),Ge=x.colorSpace===Oi||ve===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let xe=v(x.image,!1,s.maxTextureSize);xe=oe(x,xe);const Re=r.convert(x.format,x.colorSpace),Be=r.convert(x.type);let $e=S(x.internalFormat,Re,Be,x.colorSpace,x.isVideoTexture);Pe($,x);let Ae;const ge=x.mipmaps,C=x.isVideoTexture!==!0,G=be.__version===void 0||se===!0,E=re.dataReady,z=k(x,xe);if(x.isDepthTexture)$e=g(x.format===tr,x.type),G&&(C?t.texStorage2D(n.TEXTURE_2D,1,$e,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,$e,xe.width,xe.height,0,Re,Be,null));else if(x.isDataTexture)if(ge.length>0){C&&G&&t.texStorage2D(n.TEXTURE_2D,z,$e,ge[0].width,ge[0].height);for(let B=0,L=ge.length;B<L;B++)Ae=ge[B],C?E&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ae.width,Ae.height,Re,Be,Ae.data):t.texImage2D(n.TEXTURE_2D,B,$e,Ae.width,Ae.height,0,Re,Be,Ae.data);x.generateMipmaps=!1}else C?(G&&t.texStorage2D(n.TEXTURE_2D,z,$e,xe.width,xe.height),E&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe.width,xe.height,Re,Be,xe.data)):t.texImage2D(n.TEXTURE_2D,0,$e,xe.width,xe.height,0,Re,Be,xe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){C&&G&&t.texStorage3D(n.TEXTURE_2D_ARRAY,z,$e,ge[0].width,ge[0].height,xe.depth);for(let B=0,L=ge.length;B<L;B++)if(Ae=ge[B],x.format!==Un)if(Re!==null)if(C){if(E)if(x.layerUpdates.size>0){const pe=dd(Ae.width,Ae.height,x.format,x.type);for(const _e of x.layerUpdates){const Oe=Ae.data.subarray(_e*pe/Ae.data.BYTES_PER_ELEMENT,(_e+1)*pe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,_e,Ae.width,Ae.height,1,Re,Oe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ae.width,Ae.height,xe.depth,Re,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,$e,Ae.width,Ae.height,xe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?E&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ae.width,Ae.height,xe.depth,Re,Be,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,$e,Ae.width,Ae.height,xe.depth,0,Re,Be,Ae.data)}else{C&&G&&t.texStorage2D(n.TEXTURE_2D,z,$e,ge[0].width,ge[0].height);for(let B=0,L=ge.length;B<L;B++)Ae=ge[B],x.format!==Un?Re!==null?C?E&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,B,$e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?E&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ae.width,Ae.height,Re,Be,Ae.data):t.texImage2D(n.TEXTURE_2D,B,$e,Ae.width,Ae.height,0,Re,Be,Ae.data)}else if(x.isDataArrayTexture)if(C){if(G&&t.texStorage3D(n.TEXTURE_2D_ARRAY,z,$e,xe.width,xe.height,xe.depth),E)if(x.layerUpdates.size>0){const B=dd(xe.width,xe.height,x.format,x.type);for(const L of x.layerUpdates){const pe=xe.data.subarray(L*B/xe.data.BYTES_PER_ELEMENT,(L+1)*B/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,L,xe.width,xe.height,1,Re,Be,pe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Be,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,xe.width,xe.height,xe.depth,0,Re,Be,xe.data);else if(x.isData3DTexture)C?(G&&t.texStorage3D(n.TEXTURE_3D,z,$e,xe.width,xe.height,xe.depth),E&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Be,xe.data)):t.texImage3D(n.TEXTURE_3D,0,$e,xe.width,xe.height,xe.depth,0,Re,Be,xe.data);else if(x.isFramebufferTexture){if(G)if(C)t.texStorage2D(n.TEXTURE_2D,z,$e,xe.width,xe.height);else{let B=xe.width,L=xe.height;for(let pe=0;pe<z;pe++)t.texImage2D(n.TEXTURE_2D,pe,$e,B,L,0,Re,Be,null),B>>=1,L>>=1}}else if(ge.length>0){if(C&&G){const B=X(ge[0]);t.texStorage2D(n.TEXTURE_2D,z,$e,B.width,B.height)}for(let B=0,L=ge.length;B<L;B++)Ae=ge[B],C?E&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Re,Be,Ae):t.texImage2D(n.TEXTURE_2D,B,$e,Re,Be,Ae);x.generateMipmaps=!1}else if(C){if(G){const B=X(xe);t.texStorage2D(n.TEXTURE_2D,z,$e,B.width,B.height)}E&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Be,xe)}else t.texImage2D(n.TEXTURE_2D,0,$e,Re,Be,xe);m(x)&&d($),be.__version=re.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Me(y,x,I){if(x.image.length!==6)return;const $=tt(y,x),se=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const re=i.get(se);if(se.version!==re.__version||$===!0){t.activeTexture(n.TEXTURE0+I);const be=ot.getPrimaries(ot.workingColorSpace),ve=x.colorSpace===Oi?null:ot.getPrimaries(x.colorSpace),Ee=x.colorSpace===Oi||be===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ge=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,Re=[];for(let L=0;L<6;L++)!Ge&&!xe?Re[L]=v(x.image[L],!0,s.maxCubemapSize):Re[L]=xe?x.image[L].image:x.image[L],Re[L]=oe(x,Re[L]);const Be=Re[0],$e=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),ge=S(x.internalFormat,$e,Ae,x.colorSpace),C=x.isVideoTexture!==!0,G=re.__version===void 0||$===!0,E=se.dataReady;let z=k(x,Be);Pe(n.TEXTURE_CUBE_MAP,x);let B;if(Ge){C&&G&&t.texStorage2D(n.TEXTURE_CUBE_MAP,z,ge,Be.width,Be.height);for(let L=0;L<6;L++){B=Re[L].mipmaps;for(let pe=0;pe<B.length;pe++){const _e=B[pe];x.format!==Un?$e!==null?C?E&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe,0,0,_e.width,_e.height,$e,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe,ge,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?E&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe,0,0,_e.width,_e.height,$e,Ae,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe,ge,_e.width,_e.height,0,$e,Ae,_e.data)}}}else{if(B=x.mipmaps,C&&G){B.length>0&&z++;const L=X(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,z,ge,L.width,L.height)}for(let L=0;L<6;L++)if(xe){C?E&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Re[L].width,Re[L].height,$e,Ae,Re[L].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ge,Re[L].width,Re[L].height,0,$e,Ae,Re[L].data);for(let pe=0;pe<B.length;pe++){const Oe=B[pe].image[L].image;C?E&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe+1,0,0,Oe.width,Oe.height,$e,Ae,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe+1,ge,Oe.width,Oe.height,0,$e,Ae,Oe.data)}}else{C?E&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,$e,Ae,Re[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ge,$e,Ae,Re[L]);for(let pe=0;pe<B.length;pe++){const _e=B[pe];C?E&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe+1,0,0,$e,Ae,_e.image[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe+1,ge,$e,Ae,_e.image[L])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),re.__version=se.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function te(y,x,I,$,se,re){const be=r.convert(I.format,I.colorSpace),ve=r.convert(I.type),Ee=S(I.internalFormat,be,ve,I.colorSpace),Ge=i.get(x),xe=i.get(I);if(xe.__renderTarget=x,!Ge.__hasExternalTextures){const Re=Math.max(1,x.width>>re),Be=Math.max(1,x.height>>re);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,re,Ee,Re,Be,x.depth,0,be,ve,null):t.texImage2D(se,re,Ee,Re,Be,0,be,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,se,xe.__webglTexture,0,ie(x)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,se,xe.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(y,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const $=x.depthTexture,se=$&&$.isDepthTexture?$.type:null,re=g(x.stencilBuffer,se),be=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=ie(x);ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,re,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,y)}else{const $=x.textures;for(let se=0;se<$.length;se++){const re=$[se],be=r.convert(re.format,re.colorSpace),ve=r.convert(re.type),Ee=S(re.internalFormat,be,ve,re.colorSpace),Ge=ie(x);I&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ee,x.width,x.height):ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const se=$.__webglTexture,re=ie(x);if(x.depthTexture.format===Xs)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(x.depthTexture.format===tr)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function fe(y){const x=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const $=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",se)};$.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=$}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Q(x.__webglFramebuffer,y)}else if(I){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),V(x.__webglDepthbuffer[$],y,!1);else{const se=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,re)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),V(x.__webglDepthbuffer,y,!1);else{const $=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(y,x,I){const $=i.get(y);x!==void 0&&te($.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&fe(y)}function Xe(y){const x=y.texture,I=i.get(y),$=i.get(x);y.addEventListener("dispose",P);const se=y.textures,re=y.isWebGLCubeRenderTarget===!0,be=se.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),re){I.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)I.__webglFramebuffer[ve][Ee]=n.createFramebuffer()}else I.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)I.__webglFramebuffer[ve]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(be)for(let ve=0,Ee=se.length;ve<Ee;ve++){const Ge=i.get(se[ve]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&ne(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){const Ee=se[ve];I.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ve]);const Ge=r.convert(Ee.format,Ee.colorSpace),xe=r.convert(Ee.type),Re=S(Ee.internalFormat,Ge,xe,Ee.colorSpace,y.isXRRenderTarget===!0),Be=ie(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Re,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,I.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),V(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)te(I.__webglFramebuffer[ve][Ee],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else te(I.__webglFramebuffer[ve],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ve=0,Ee=se.length;ve<Ee;ve++){const Ge=se[ve],xe=i.get(Ge);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),Pe(n.TEXTURE_2D,Ge),te(I.__webglFramebuffer,y,Ge,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),m(Ge)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,$.__webglTexture),Pe(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)te(I.__webglFramebuffer[Ee],y,x,n.COLOR_ATTACHMENT0,ve,Ee);else te(I.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,ve,0);m(x)&&d(ve),t.unbindTexture()}y.depthBuffer&&fe(y)}function R(y){const x=y.textures;for(let I=0,$=x.length;I<$;I++){const se=x[I];if(m(se)){const re=T(y),be=i.get(se).__webglTexture;t.bindTexture(re,be),d(re),t.unbindTexture()}}}const O=[],A=[];function he(y){if(y.samples>0){if(ne(y)===!1){const x=y.textures,I=y.width,$=y.height;let se=n.COLOR_BUFFER_BIT;const re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(y),ve=x.length>1;if(ve)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const Ge=i.get(x[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,I,$,0,0,I,$,se,n.NEAREST),l===!0&&(O.length=0,A.length=0,O.push(n.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&y.resolveDepthBuffer===!1&&(O.push(re),A.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const Ge=i.get(x[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ie(y){return Math.min(s.maxSamples,y.samples)}function ne(y){const x=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function de(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function oe(y,x){const I=y.colorSpace,$=y.format,se=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==rr&&I!==Oi&&(ot.getTransfer(I)===gt?($!==Un||se!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function X(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=ae,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=De,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ne}function AS(n,e){function t(i,s=Oi){let r;const o=ot.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hh)return n.BYTE;if(i===Vh)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===Jc)return n.INT;if(i===ds)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===Un)return n.RGBA;if(i===$h)return n.LUMINANCE;if(i===qh)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===tr)return n.DEPTH_STENCIL;if(i===Yh)return n.RED;if(i===tu)return n.RED_INTEGER;if(i===jh)return n.RG;if(i===nu)return n.RG_INTEGER;if(i===iu)return n.RGBA_INTEGER;if(i===Yo||i===jo||i===Ko||i===Zo)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===Sc||i===bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jo)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===Ec||i===Tc||i===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class CS extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kt extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const PS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new nn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gi({vertexShader:PS,fragmentShader:DS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IS extends or{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const v=new LS,m=t.getContextAttributes();let d=null,T=null;const S=[],g=[],k=new it;let D=null;const P=new mn;P.viewport=new At;const U=new mn;U.viewport=new At;const b=[P,U],M=new CS;let N=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Me=S[le];return Me===void 0&&(Me=new bl,S[le]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(le){let Me=S[le];return Me===void 0&&(Me=new bl,S[le]=Me),Me.getGripSpace()},this.getHand=function(le){let Me=S[le];return Me===void 0&&(Me=new bl,S[le]=Me),Me.getHandSpace()};function q(le){const Me=g.indexOf(le.inputSource);if(Me===-1)return;const te=S[Me];te!==void 0&&(te.update(le.inputSource,le.frame,c||o),te.dispatchEvent({type:le.type,data:le.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ae);for(let le=0;le<S.length;le++){const Me=g[le];Me!==null&&(g[le]=null,S[le].disconnect(Me))}N=null,ee=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,T=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ps(p.framebufferWidth,p.framebufferHeight,{format:Un,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Me=null,te=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?tr:Xs,te=m.stencil?er:ds);const Q={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Q),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new ps(h.textureWidth,h.textureHeight,{format:Un,type:bi,depthTexture:new cp(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(le){for(let Me=0;Me<le.removed.length;Me++){const te=le.removed[Me],V=g.indexOf(te);V>=0&&(g[V]=null,S[V].disconnect(te))}for(let Me=0;Me<le.added.length;Me++){const te=le.added[Me];let V=g.indexOf(te);if(V===-1){for(let fe=0;fe<S.length;fe++)if(fe>=g.length){g.push(te),V=fe;break}else if(g[fe]===null){g[fe]=te,V=fe;break}if(V===-1)break}const Q=S[V];Q&&Q.connect(te)}}const Z=new H,j=new H;function F(le,Me,te){Z.setFromMatrixPosition(Me.matrixWorld),j.setFromMatrixPosition(te.matrixWorld);const V=Z.distanceTo(j),Q=Me.projectionMatrix.elements,fe=te.projectionMatrix.elements,De=Q[14]/(Q[10]-1),Xe=Q[14]/(Q[10]+1),R=(Q[9]+1)/Q[5],O=(Q[9]-1)/Q[5],A=(Q[8]-1)/Q[0],he=(fe[8]+1)/fe[0],ie=De*A,ne=De*he,de=V/(-A+he),oe=de*-A;if(Me.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(oe),le.translateZ(de),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Q[10]===-1)le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const X=De+de,y=Xe+de,x=ie-oe,I=ne+(V-oe),$=R*Xe/y*X,se=O*Xe/y*X;le.projectionMatrix.makePerspective(x,I,$,se,X,y),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function ye(le,Me){Me===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Me.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let Me=le.near,te=le.far;v.texture!==null&&(v.depthNear>0&&(Me=v.depthNear),v.depthFar>0&&(te=v.depthFar)),M.near=U.near=P.near=Me,M.far=U.far=P.far=te,(N!==M.near||ee!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,ee=M.far),P.layers.mask=le.layers.mask|2,U.layers.mask=le.layers.mask|4,M.layers.mask=P.layers.mask|U.layers.mask;const V=le.parent,Q=M.cameras;ye(M,V);for(let fe=0;fe<Q.length;fe++)ye(Q[fe],V);Q.length===2?F(M,P,U):M.projectionMatrix.copy(P.projectionMatrix),Se(le,M,V)};function Se(le,Me,te){te===null?le.matrix.copy(Me.matrixWorld):(le.matrix.copy(te.matrixWorld),le.matrix.invert(),le.matrix.multiply(Me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=$r*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(le){l=le,h!==null&&(h.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Le=null;function Pe(le,Me){if(u=Me.getViewerPose(c||o),_=Me,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let V=!1;te.length!==M.cameras.length&&(M.cameras.length=0,V=!0);for(let fe=0;fe<te.length;fe++){const De=te[fe];let Xe=null;if(p!==null)Xe=p.getViewport(De);else{const O=f.getViewSubImage(h,De);Xe=O.viewport,fe===0&&(e.setRenderTargetTextures(T,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(T))}let R=b[fe];R===void 0&&(R=new mn,R.layers.enable(fe),R.viewport=new At,b[fe]=R),R.matrix.fromArray(De.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(De.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),fe===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),V===!0&&M.cameras.push(R)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const fe=f.getDepthInformation(te[0]);fe&&fe.isValid&&fe.texture&&v.init(e,fe,s.renderState)}}for(let te=0;te<S.length;te++){const V=g[te],Q=S[te];V!==null&&Q!==void 0&&Q.update(V,Me,c||o)}Le&&Le(le,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),_=null}const tt=new ap;tt.setAnimationLoop(Pe),this.setAnimationLoop=function(le){Le=le},this.dispose=function(){}}}const ts=new Yt,US=new bt;function NS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,sp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,S,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),S=T.envMap,g=T.envMapRotation;S&&(m.envMap.value=S,ts.copy(g),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(US.makeRotationFromEuler(ts)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const g=S.program;i.uniformBlockBinding(T,g)}function c(T,S){let g=s[T.id];g===void 0&&(_(T),g=u(T),s[T.id]=g,T.addEventListener("dispose",m));const k=S.program;i.updateUBOMapping(T,k);const D=e.render.frame;r[T.id]!==D&&(h(T),r[T.id]=D)}function u(T){const S=f();T.__bindingPointIndex=S;const g=n.createBuffer(),k=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,k,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,g),g}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=s[T.id],g=T.uniforms,k=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,P=g.length;D<P;D++){const U=Array.isArray(g[D])?g[D]:[g[D]];for(let b=0,M=U.length;b<M;b++){const N=U[b];if(p(N,D,b,k)===!0){const ee=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let ae=0;ae<q.length;ae++){const Z=q[ae],j=v(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,ee+Y,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,S,g,k){const D=T.value,P=S+"_"+g;if(k[P]===void 0)return typeof D=="number"||typeof D=="boolean"?k[P]=D:k[P]=D.clone(),!0;{const U=k[P];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return k[P]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function _(T){const S=T.uniforms;let g=0;const k=16;for(let P=0,U=S.length;P<U;P++){const b=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,N=b.length;M<N;M++){const ee=b[M],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let Y=0,ae=q.length;Y<ae;Y++){const Z=q[Y],j=v(Z),F=g%k,ye=F%j.boundary,Se=F+ye;g+=ye,Se!==0&&k-Se<j.storage&&(g+=k-Se),ee.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=g,g+=j.storage}}}const D=g%k;return D>0&&(g+=k-D),T.__size=g,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const g=o.indexOf(S.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class pp{constructor(e={}){const{canvas:t=Tv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=ki,this.toneMappingExposure=1;const g=this;let k=!1,D=0,P=0,U=null,b=-1,M=null;const N=new At,ee=new At;let q=null;const Y=new Ye(0);let ae=0,Z=t.width,j=t.height,F=1,ye=null,Se=null;const Le=new At(0,0,Z,j),Pe=new At(0,0,Z,j);let tt=!1;const le=new au;let Me=!1,te=!1;const V=new bt,Q=new bt,fe=new H,De=new At,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function O(){return U===null?F:1}let A=i;function he(w,K){return t.getContext(w,K)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kc}`),t.addEventListener("webglcontextlost",L,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),A===null){const K="webgl2";if(A=he(K,w),A===null)throw he(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,ne,de,oe,X,y,x,I,$,se,re,be,ve,Ee,Ge,xe,Re,Be,$e,Ae,ge,C,G,E;function z(){ie=new Vy(A),ie.init(),C=new AS(A,ie),ne=new Fy(A,ie,e,C),de=new ES(A,ie),ne.reverseDepthBuffer&&h&&de.buffers.depth.setReversed(!0),oe=new Xy(A),X=new cS,y=new wS(A,ie,de,X,ne,C,oe),x=new By(g),I=new Hy(g),$=new Jv(A),G=new Uy(A,$),se=new Gy(A,$,oe,G),re=new qy(A,se,$,oe),$e=new $y(A,ne,y),xe=new Oy(X),be=new lS(g,x,I,ie,ne,G,xe),ve=new NS(g,X),Ee=new fS,Ge=new _S(ie),Be=new Iy(g,x,I,de,re,p,l),Re=new SS(g,re,ne),E=new FS(A,oe,ne,de),Ae=new Ny(A,ie,oe),ge=new Wy(A,ie,oe),oe.programs=be.programs,g.capabilities=ne,g.extensions=ie,g.properties=X,g.renderLists=Ee,g.shadowMap=Re,g.state=de,g.info=oe}z();const B=new IS(g,A);this.xr=B,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(Z,j,!1))},this.getSize=function(w){return w.set(Z,j)},this.setSize=function(w,K,ce=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,j=K,t.width=Math.floor(w*F),t.height=Math.floor(K*F),ce===!0&&(t.style.width=w+"px",t.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(Z*F,j*F).floor()},this.setDrawingBufferSize=function(w,K,ce){Z=w,j=K,F=ce,t.width=Math.floor(w*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,K,ce,ue){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,K,ce,ue),de.viewport(N.copy(Le).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(Pe)},this.setScissor=function(w,K,ce,ue){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,K,ce,ue),de.scissor(ee.copy(Pe).multiplyScalar(F).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(w){de.setScissorTest(tt=w)},this.setOpaqueSort=function(w){ye=w},this.setTransparentSort=function(w){Se=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,K=!0,ce=!0){let ue=0;if(w){let J=!1;if(U!==null){const Te=U.texture.format;J=Te===iu||Te===nu||Te===tu}if(J){const Te=U.texture.type,Ue=Te===bi||Te===ds||Te===Xr||Te===er||Te===Qc||Te===eu,ke=Be.getClearColor(),ze=Be.getClearAlpha(),Ke=ke.r,Ze=ke.g,He=ke.b;Ue?(_[0]=Ke,_[1]=Ze,_[2]=He,_[3]=ze,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=Ke,v[1]=Ze,v[2]=He,v[3]=ze,A.clearBufferiv(A.COLOR,0,v))}else ue|=A.COLOR_BUFFER_BIT}K&&(ue|=A.DEPTH_BUFFER_BIT),ce&&(ue|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",L,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),Ge.dispose(),X.dispose(),x.dispose(),I.dispose(),re.dispose(),G.dispose(),E.dispose(),be.dispose(),B.dispose(),B.removeEventListener("sessionstart",mu),B.removeEventListener("sessionend",gu),$i.stop()};function L(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const w=oe.autoReset,K=Re.enabled,ce=Re.autoUpdate,ue=Re.needsUpdate,J=Re.type;z(),oe.autoReset=w,Re.enabled=K,Re.autoUpdate=ce,Re.needsUpdate=ue,Re.type=J}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const K=w.target;K.removeEventListener("dispose",Oe),vt(K)}function vt(w){Ct(w),X.remove(w)}function Ct(w){const K=X.get(w).programs;K!==void 0&&(K.forEach(function(ce){be.releaseProgram(ce)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,ce,ue,J,Te){K===null&&(K=Xe);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,ke=Bp(w,K,ce,ue,J);de.setMaterial(ue,Ue);let ze=ce.index,Ke=1;if(ue.wireframe===!0){if(ze=se.getWireframeAttribute(ce),ze===void 0)return;Ke=2}const Ze=ce.drawRange,He=ce.attributes.position;let lt=Ze.start*Ke,yt=(Ze.start+Ze.count)*Ke;Te!==null&&(lt=Math.max(lt,Te.start*Ke),yt=Math.min(yt,(Te.start+Te.count)*Ke)),ze!==null?(lt=Math.max(lt,0),yt=Math.min(yt,ze.count)):He!=null&&(lt=Math.max(lt,0),yt=Math.min(yt,He.count));const Et=yt-lt;if(Et<0||Et===1/0)return;G.setup(J,ue,ke,ce,ze);let sn,ft=Ae;if(ze!==null&&(sn=$.get(ze),ft=ge,ft.setIndex(sn)),J.isMesh)ue.wireframe===!0?(de.setLineWidth(ue.wireframeLinewidth*O()),ft.setMode(A.LINES)):ft.setMode(A.TRIANGLES);else if(J.isLine){let We=ue.linewidth;We===void 0&&(We=1),de.setLineWidth(We*O()),J.isLineSegments?ft.setMode(A.LINES):J.isLineLoop?ft.setMode(A.LINE_LOOP):ft.setMode(A.LINE_STRIP)}else J.isPoints?ft.setMode(A.POINTS):J.isSprite&&ft.setMode(A.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ft.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ft.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const We=J._multiDrawStarts,ei=J._multiDrawCounts,dt=J._multiDrawCount,An=ze?$.get(ze).bytesPerElement:1,gs=X.get(ue).currentProgram.getUniforms();for(let un=0;un<dt;un++)gs.setValue(A,"_gl_DrawID",un),ft.render(We[un]/An,ei[un])}else if(J.isInstancedMesh)ft.renderInstances(lt,Et,J.count);else if(ce.isInstancedBufferGeometry){const We=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ei=Math.min(ce.instanceCount,We);ft.renderInstances(lt,Et,ei)}else ft.render(lt,Et)};function ct(w,K,ce){w.transparent===!0&&w.side===Dn&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,so(w,K,ce),w.side=Vi,w.needsUpdate=!0,so(w,K,ce),w.side=Dn):so(w,K,ce)}this.compile=function(w,K,ce=null){ce===null&&(ce=w),d=Ge.get(ce),d.init(K),S.push(d),ce.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),w!==ce&&w.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),d.setupLights();const ue=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Te=J.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const ke=Te[Ue];ct(ke,ce,J),ue.add(ke)}else ct(Te,ce,J),ue.add(Te)}),S.pop(),d=null,ue},this.compileAsync=function(w,K,ce=null){const ue=this.compile(w,K,ce);return new Promise(J=>{function Te(){if(ue.forEach(function(Ue){X.get(Ue).currentProgram.isReady()&&ue.delete(Ue)}),ue.size===0){J(w);return}setTimeout(Te,10)}ie.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let wn=null;function Qn(w){wn&&wn(w)}function mu(){$i.stop()}function gu(){$i.start()}const $i=new ap;$i.setAnimationLoop(Qn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(w){wn=w,B.setAnimationLoop(w),w===null?$i.stop():$i.start()},B.addEventListener("sessionstart",mu),B.addEventListener("sessionend",gu),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(K),K=B.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,K,U),d=Ge.get(w,S.length),d.init(K),S.push(d),Q.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),le.setFromProjectionMatrix(Q),te=this.localClippingEnabled,Me=xe.init(this.clippingPlanes,te),m=Ee.get(w,T.length),m.init(),T.push(m),B.enabled===!0&&B.isPresenting===!0){const Te=g.xr.getDepthSensingMesh();Te!==null&&Fa(Te,K,-1/0,g.sortObjects)}Fa(w,K,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ye,Se),R=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,R&&Be.addToRenderList(m,w),this.info.render.frame++,Me===!0&&xe.beginShadows();const ce=d.state.shadowsArray;Re.render(ce,w,K),Me===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=m.opaque,J=m.transmissive;if(d.setupLights(),K.isArrayCamera){const Te=K.cameras;if(J.length>0)for(let Ue=0,ke=Te.length;Ue<ke;Ue++){const ze=Te[Ue];vu(ue,J,w,ze)}R&&Be.render(w);for(let Ue=0,ke=Te.length;Ue<ke;Ue++){const ze=Te[Ue];_u(m,w,ze,ze.viewport)}}else J.length>0&&vu(ue,J,w,K),R&&Be.render(w),_u(m,w,K);U!==null&&(y.updateMultisampleRenderTarget(U),y.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(g,w,K),G.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(d=S[S.length-1],Me===!0&&xe.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Fa(w,K,ce,ue){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)ce=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||le.intersectsSprite(w)){ue&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const Ue=re.update(w),ke=w.material;ke.visible&&m.push(w,Ue,ke,ce,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||le.intersectsObject(w))){const Ue=re.update(w),ke=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),De.copy(Ue.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(ke)){const ze=Ue.groups;for(let Ke=0,Ze=ze.length;Ke<Ze;Ke++){const He=ze[Ke],lt=ke[He.materialIndex];lt&&lt.visible&&m.push(w,Ue,lt,ce,De.z,He)}}else ke.visible&&m.push(w,Ue,ke,ce,De.z,null)}}const Te=w.children;for(let Ue=0,ke=Te.length;Ue<ke;Ue++)Fa(Te[Ue],K,ce,ue)}function _u(w,K,ce,ue){const J=w.opaque,Te=w.transmissive,Ue=w.transparent;d.setupLightsView(ce),Me===!0&&xe.setGlobalState(g.clippingPlanes,ce),ue&&de.viewport(N.copy(ue)),J.length>0&&io(J,K,ce),Te.length>0&&io(Te,K,ce),Ue.length>0&&io(Ue,K,ce),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function vu(w,K,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ue.id]===void 0&&(d.state.transmissionRenderTarget[ue.id]=new ps(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Qr:bi,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Te=d.state.transmissionRenderTarget[ue.id],Ue=ue.viewport||N;Te.setSize(Ue.z,Ue.w);const ke=g.getRenderTarget();g.setRenderTarget(Te),g.getClearColor(Y),ae=g.getClearAlpha(),ae<1&&g.setClearColor(16777215,.5),g.clear(),R&&Be.render(ce);const ze=g.toneMapping;g.toneMapping=ki;const Ke=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),d.setupLightsView(ue),Me===!0&&xe.setGlobalState(g.clippingPlanes,ue),io(w,ce,ue),y.updateMultisampleRenderTarget(Te),y.updateRenderTargetMipmap(Te),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let He=0,lt=K.length;He<lt;He++){const yt=K[He],Et=yt.object,sn=yt.geometry,ft=yt.material,We=yt.group;if(ft.side===Dn&&Et.layers.test(ue.layers)){const ei=ft.side;ft.side=ln,ft.needsUpdate=!0,xu(Et,ce,ue,sn,ft,We),ft.side=ei,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(y.updateMultisampleRenderTarget(Te),y.updateRenderTargetMipmap(Te))}g.setRenderTarget(ke),g.setClearColor(Y,ae),Ke!==void 0&&(ue.viewport=Ke),g.toneMapping=ze}function io(w,K,ce){const ue=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Te=w.length;J<Te;J++){const Ue=w[J],ke=Ue.object,ze=Ue.geometry,Ke=ue===null?Ue.material:ue,Ze=Ue.group;ke.layers.test(ce.layers)&&xu(ke,K,ce,ze,Ke,Ze)}}function xu(w,K,ce,ue,J,Te){w.onBeforeRender(g,K,ce,ue,J,Te),w.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(g,K,ce,ue,w,Te),J.transparent===!0&&J.side===Dn&&J.forceSinglePass===!1?(J.side=ln,J.needsUpdate=!0,g.renderBufferDirect(ce,K,ue,J,w,Te),J.side=Vi,J.needsUpdate=!0,g.renderBufferDirect(ce,K,ue,J,w,Te),J.side=Dn):g.renderBufferDirect(ce,K,ue,J,w,Te),w.onAfterRender(g,K,ce,ue,J,Te)}function so(w,K,ce){K.isScene!==!0&&(K=Xe);const ue=X.get(w),J=d.state.lights,Te=d.state.shadowsArray,Ue=J.state.version,ke=be.getParameters(w,J.state,Te,K,ce),ze=be.getProgramCacheKey(ke);let Ke=ue.programs;ue.environment=w.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(w.isMeshStandardMaterial?I:x).get(w.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",Oe),Ke=new Map,ue.programs=Ke);let Ze=Ke.get(ze);if(Ze!==void 0){if(ue.currentProgram===Ze&&ue.lightsStateVersion===Ue)return Mu(w,ke),Ze}else ke.uniforms=be.getUniforms(w),w.onBeforeCompile(ke,g),Ze=be.acquireProgram(ke,ze),Ke.set(ze,Ze),ue.uniforms=ke.uniforms;const He=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=xe.uniform),Mu(w,ke),ue.needsLights=zp(w),ue.lightsStateVersion=Ue,ue.needsLights&&(He.ambientLightColor.value=J.state.ambient,He.lightProbe.value=J.state.probe,He.directionalLights.value=J.state.directional,He.directionalLightShadows.value=J.state.directionalShadow,He.spotLights.value=J.state.spot,He.spotLightShadows.value=J.state.spotShadow,He.rectAreaLights.value=J.state.rectArea,He.ltc_1.value=J.state.rectAreaLTC1,He.ltc_2.value=J.state.rectAreaLTC2,He.pointLights.value=J.state.point,He.pointLightShadows.value=J.state.pointShadow,He.hemisphereLights.value=J.state.hemi,He.directionalShadowMap.value=J.state.directionalShadowMap,He.directionalShadowMatrix.value=J.state.directionalShadowMatrix,He.spotShadowMap.value=J.state.spotShadowMap,He.spotLightMatrix.value=J.state.spotLightMatrix,He.spotLightMap.value=J.state.spotLightMap,He.pointShadowMap.value=J.state.pointShadowMap,He.pointShadowMatrix.value=J.state.pointShadowMatrix),ue.currentProgram=Ze,ue.uniformsList=null,Ze}function yu(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=Qo.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Mu(w,K){const ce=X.get(w);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function Bp(w,K,ce,ue,J){K.isScene!==!0&&(K=Xe),y.resetTextureUnits();const Te=K.fog,Ue=ue.isMeshStandardMaterial?K.environment:null,ke=U===null?g.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:rr,ze=(ue.isMeshStandardMaterial?I:x).get(ue.envMap||Ue),Ke=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Ze=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),He=!!ce.morphAttributes.position,lt=!!ce.morphAttributes.normal,yt=!!ce.morphAttributes.color;let Et=ki;ue.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Et=g.toneMapping);const sn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ft=sn!==void 0?sn.length:0,We=X.get(ue),ei=d.state.lights;if(Me===!0&&(te===!0||w!==M)){const _n=w===M&&ue.id===b;xe.setState(ue,w,_n)}let dt=!1;ue.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ei.state.version||We.outputColorSpace!==ke||J.isBatchedMesh&&We.batching===!1||!J.isBatchedMesh&&We.batching===!0||J.isBatchedMesh&&We.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&We.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&We.instancing===!1||!J.isInstancedMesh&&We.instancing===!0||J.isSkinnedMesh&&We.skinning===!1||!J.isSkinnedMesh&&We.skinning===!0||J.isInstancedMesh&&We.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&We.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&We.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&We.instancingMorph===!1&&J.morphTexture!==null||We.envMap!==ze||ue.fog===!0&&We.fog!==Te||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==xe.numPlanes||We.numIntersection!==xe.numIntersection)||We.vertexAlphas!==Ke||We.vertexTangents!==Ze||We.morphTargets!==He||We.morphNormals!==lt||We.morphColors!==yt||We.toneMapping!==Et||We.morphTargetsCount!==ft)&&(dt=!0):(dt=!0,We.__version=ue.version);let An=We.currentProgram;dt===!0&&(An=so(ue,K,J));let gs=!1,un=!1,cr=!1;const Tt=An.getUniforms(),kn=We.uniforms;if(de.useProgram(An.program)&&(gs=!0,un=!0,cr=!0),ue.id!==b&&(b=ue.id,un=!0),gs||M!==w){de.buffers.depth.getReversed()?(V.copy(w.projectionMatrix),Av(V),Cv(V),Tt.setValue(A,"projectionMatrix",V)):Tt.setValue(A,"projectionMatrix",w.projectionMatrix),Tt.setValue(A,"viewMatrix",w.matrixWorldInverse);const Ti=Tt.map.cameraPosition;Ti!==void 0&&Ti.setValue(A,fe.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&Tt.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Tt.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,un=!0,cr=!0)}if(J.isSkinnedMesh){Tt.setOptional(A,J,"bindMatrix"),Tt.setOptional(A,J,"bindMatrixInverse");const _n=J.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Tt.setValue(A,"boneTexture",_n.boneTexture,y))}J.isBatchedMesh&&(Tt.setOptional(A,J,"batchingTexture"),Tt.setValue(A,"batchingTexture",J._matricesTexture,y),Tt.setOptional(A,J,"batchingIdTexture"),Tt.setValue(A,"batchingIdTexture",J._indirectTexture,y),Tt.setOptional(A,J,"batchingColorTexture"),J._colorsTexture!==null&&Tt.setValue(A,"batchingColorTexture",J._colorsTexture,y));const ur=ce.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&$e.update(J,ce,An),(un||We.receiveShadow!==J.receiveShadow)&&(We.receiveShadow=J.receiveShadow,Tt.setValue(A,"receiveShadow",J.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(kn.envMap.value=ze,kn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(kn.envMapIntensity.value=K.environmentIntensity),un&&(Tt.setValue(A,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&kp(kn,cr),Te&&ue.fog===!0&&ve.refreshFogUniforms(kn,Te),ve.refreshMaterialUniforms(kn,ue,F,j,d.state.transmissionRenderTarget[w.id]),Qo.upload(A,yu(We),kn,y)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Qo.upload(A,yu(We),kn,y),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Tt.setValue(A,"center",J.center),Tt.setValue(A,"modelViewMatrix",J.modelViewMatrix),Tt.setValue(A,"normalMatrix",J.normalMatrix),Tt.setValue(A,"modelMatrix",J.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const _n=ue.uniformsGroups;for(let Ti=0,wi=_n.length;Ti<wi;Ti++){const Su=_n[Ti];E.update(Su,An),E.bind(Su,An)}}return An}function kp(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function zp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,K,ce){X.get(w.texture).__webglTexture=K,X.get(w.depthTexture).__webglTexture=ce;const ue=X.get(w);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,K){const ce=X.get(w);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(w,K=0,ce=0){U=w,D=K,P=ce;let ue=!0,J=null,Te=!1,Ue=!1;if(w){const ze=X.get(w);if(ze.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(A.FRAMEBUFFER,null),ue=!1;else if(ze.__webglFramebuffer===void 0)y.setupRenderTarget(w);else if(ze.__hasExternalTextures)y.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(ze.__boundDepthTexture!==He){if(He!==null&&X.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const Ze=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[K])?J=Ze[K][ce]:J=Ze[K],Te=!0):w.samples>0&&y.useMultisampledRTT(w)===!1?J=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?J=Ze[ce]:J=Ze,N.copy(w.viewport),ee.copy(w.scissor),q=w.scissorTest}else N.copy(Le).multiplyScalar(F).floor(),ee.copy(Pe).multiplyScalar(F).floor(),q=tt;if(de.bindFramebuffer(A.FRAMEBUFFER,J)&&ue&&de.drawBuffers(w,J),de.viewport(N),de.scissor(ee),de.setScissorTest(q),Te){const ze=X.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+K,ze.__webglTexture,ce)}else if(Ue){const ze=X.get(w.texture),Ke=K||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ze.__webglTexture,ce||0,Ke)}b=-1},this.readRenderTargetPixels=function(w,K,ce,ue,J,Te,Ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){de.bindFramebuffer(A.FRAMEBUFFER,ke);try{const ze=w.texture,Ke=ze.format,Ze=ze.type;if(!ne.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ue&&ce>=0&&ce<=w.height-J&&A.readPixels(K,ce,ue,J,C.convert(Ke),C.convert(Ze),Te)}finally{const ze=U!==null?X.get(U).__webglFramebuffer:null;de.bindFramebuffer(A.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,K,ce,ue,J,Te,Ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){const ze=w.texture,Ke=ze.format,Ze=ze.type;if(!ne.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=w.width-ue&&ce>=0&&ce<=w.height-J){de.bindFramebuffer(A.FRAMEBUFFER,ke);const He=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.bufferData(A.PIXEL_PACK_BUFFER,Te.byteLength,A.STREAM_READ),A.readPixels(K,ce,ue,J,C.convert(Ke),C.convert(Ze),0);const lt=U!==null?X.get(U).__webglFramebuffer:null;de.bindFramebuffer(A.FRAMEBUFFER,lt);const yt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await wv(A,yt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Te),A.deleteBuffer(He),A.deleteSync(yt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,K=null,ce=0){w.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1]);const ue=Math.pow(2,-ce),J=Math.floor(w.image.width*ue),Te=Math.floor(w.image.height*ue),Ue=K!==null?K.x:0,ke=K!==null?K.y:0;y.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,ce,0,0,Ue,ke,J,Te),de.unbindTexture()},this.copyTextureToTexture=function(w,K,ce=null,ue=null,J=0){w.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,w=arguments[1],K=arguments[2],J=arguments[3]||0,ce=null);let Te,Ue,ke,ze,Ke,Ze,He,lt,yt;const Et=w.isCompressedTexture?w.mipmaps[J]:w.image;ce!==null?(Te=ce.max.x-ce.min.x,Ue=ce.max.y-ce.min.y,ke=ce.isBox3?ce.max.z-ce.min.z:1,ze=ce.min.x,Ke=ce.min.y,Ze=ce.isBox3?ce.min.z:0):(Te=Et.width,Ue=Et.height,ke=Et.depth||1,ze=0,Ke=0,Ze=0),ue!==null?(He=ue.x,lt=ue.y,yt=ue.z):(He=0,lt=0,yt=0);const sn=C.convert(K.format),ft=C.convert(K.type);let We;K.isData3DTexture?(y.setTexture3D(K,0),We=A.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(y.setTexture2DArray(K,0),We=A.TEXTURE_2D_ARRAY):(y.setTexture2D(K,0),We=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,K.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,K.unpackAlignment);const ei=A.getParameter(A.UNPACK_ROW_LENGTH),dt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),An=A.getParameter(A.UNPACK_SKIP_PIXELS),gs=A.getParameter(A.UNPACK_SKIP_ROWS),un=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Et.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Et.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ze),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ke),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ze);const cr=w.isDataArrayTexture||w.isData3DTexture,Tt=K.isDataArrayTexture||K.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const kn=X.get(w),ur=X.get(K),_n=X.get(kn.__renderTarget),Ti=X.get(ur.__renderTarget);de.bindFramebuffer(A.READ_FRAMEBUFFER,_n.__webglFramebuffer),de.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let wi=0;wi<ke;wi++)cr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,X.get(w).__webglTexture,J,Ze+wi),w.isDepthTexture?(Tt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,X.get(K).__webglTexture,J,yt+wi),A.blitFramebuffer(ze,Ke,Te,Ue,He,lt,Te,Ue,A.DEPTH_BUFFER_BIT,A.NEAREST)):Tt?A.copyTexSubImage3D(We,J,He,lt,yt+wi,ze,Ke,Te,Ue):A.copyTexSubImage2D(We,J,He,lt,yt+wi,ze,Ke,Te,Ue);de.bindFramebuffer(A.READ_FRAMEBUFFER,null),de.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Tt?w.isDataTexture||w.isData3DTexture?A.texSubImage3D(We,J,He,lt,yt,Te,Ue,ke,sn,ft,Et.data):K.isCompressedArrayTexture?A.compressedTexSubImage3D(We,J,He,lt,yt,Te,Ue,ke,sn,Et.data):A.texSubImage3D(We,J,He,lt,yt,Te,Ue,ke,sn,ft,Et):w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,He,lt,Te,Ue,sn,ft,Et.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,He,lt,Et.width,Et.height,sn,Et.data):A.texSubImage2D(A.TEXTURE_2D,J,He,lt,Te,Ue,sn,ft,Et);A.pixelStorei(A.UNPACK_ROW_LENGTH,ei),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,dt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,An),A.pixelStorei(A.UNPACK_SKIP_ROWS,gs),A.pixelStorei(A.UNPACK_SKIP_IMAGES,un),J===0&&K.generateMipmaps&&A.generateMipmap(We),de.unbindTexture()},this.copyTextureToTexture3D=function(w,K,ce=null,ue=null,J=0){return w.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,w=arguments[2],K=arguments[3],J=arguments[4]||0),Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,K,ce,ue,J)},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){D=0,P=0,U=null,de.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class Ua{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mp extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gp extends Xi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ua=new H,fa=new H,hd=new bt,Sr=new Da,No=new no,El=new H,pd=new H;class OS extends It{constructor(e=new cn,t=new gp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ua.fromBufferAttribute(t,s-1),fa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ua.distanceTo(fa);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;hd.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(hd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const d=u.getX(v),T=u.getX(v+1),S=Fo(this,e,Sr,l,d,T);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),d=Fo(this,e,Sr,l,v,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const d=Fo(this,e,Sr,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Fo(this,e,Sr,l,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fo(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(ua.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),t.distanceSqToSegment(ua,fa,El,pd)>i)return;El.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(El);if(!(l<e.near||l>e.far))return{distance:l,point:pd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const md=new H,gd=new H;class BS extends OS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)md.fromBufferAttribute(t,s),gd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+md.distanceTo(gd);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _p extends Xi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _d=new bt,Cc=new Da,Oo=new no,Bo=new H;class kS extends It{constructor(e=new cn,t=new _p){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;_d.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(_d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,v=p;_<v;_++){const m=c.getX(_);Bo.fromBufferAttribute(f,m),vd(Bo,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,v=p;_<v;_++)Bo.fromBufferAttribute(f,_),vd(Bo,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vd(n,e,t,i,s,r,o){const a=Cc.distanceSqToPoint(n);if(a<t){const l=new H;Cc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cu extends nn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In extends cn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let _=0;const v=[],m=i/2;let d=0;T(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function T(){const g=new H,k=new H;let D=0;const P=(t-e)/i;for(let U=0;U<=r;U++){const b=[],M=U/r,N=M*(t-e)+e;for(let ee=0;ee<=s;ee++){const q=ee/s,Y=q*l+a,ae=Math.sin(Y),Z=Math.cos(Y);k.x=N*ae,k.y=-M*i+m,k.z=N*Z,f.push(k.x,k.y,k.z),g.set(ae,P,Z).normalize(),h.push(g.x,g.y,g.z),p.push(q,1-M),b.push(_++)}v.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){const M=v[b][U],N=v[b+1][U],ee=v[b+1][U+1],q=v[b][U+1];(e>0||b!==0)&&(u.push(M,N,q),D+=3),(t>0||b!==r-1)&&(u.push(N,ee,q),D+=3)}c.addGroup(d,D,0),d+=D}function S(g){const k=_,D=new it,P=new H;let U=0;const b=g===!0?e:t,M=g===!0?1:-1;for(let ee=1;ee<=s;ee++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),_++;const N=_;for(let ee=0;ee<=s;ee++){const Y=ee/s*l+a,ae=Math.cos(Y),Z=Math.sin(Y);P.x=b*Z,P.y=m*M,P.z=b*ae,f.push(P.x,P.y,P.z),h.push(0,M,0),D.x=ae*.5+.5,D.y=Z*.5*M+.5,p.push(D.x,D.y),_++}for(let ee=0;ee<s;ee++){const q=k+ee,Y=N+ee;g===!0?u.push(Y,Y+1,q):u.push(Y+1,Y,q),U+=3}c.addGroup(d,U,g===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qr extends In{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new qr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uu extends cn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const S=new H,g=new H,k=new H;for(let D=0;D<t.length;D+=3)p(t[D+0],S),p(t[D+1],g),p(t[D+2],k),l(S,g,k,T)}function l(T,S,g,k){const D=k+1,P=[];for(let U=0;U<=D;U++){P[U]=[];const b=T.clone().lerp(g,U/D),M=S.clone().lerp(g,U/D),N=D-U;for(let ee=0;ee<=N;ee++)ee===0&&U===D?P[U][ee]=b:P[U][ee]=b.clone().lerp(M,ee/N)}for(let U=0;U<D;U++)for(let b=0;b<2*(D-U)-1;b++){const M=Math.floor(b/2);b%2===0?(h(P[U][M+1]),h(P[U+1][M]),h(P[U][M])):(h(P[U][M+1]),h(P[U+1][M+1]),h(P[U+1][M]))}}function c(T){const S=new H;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(T),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function u(){const T=new H;for(let S=0;S<r.length;S+=3){T.x=r[S+0],T.y=r[S+1],T.z=r[S+2];const g=m(T)/2/Math.PI+.5,k=d(T)/Math.PI+.5;o.push(g,1-k)}_(),f()}function f(){for(let T=0;T<o.length;T+=6){const S=o[T+0],g=o[T+2],k=o[T+4],D=Math.max(S,g,k),P=Math.min(S,g,k);D>.9&&P<.1&&(S<.2&&(o[T+0]+=1),g<.2&&(o[T+2]+=1),k<.2&&(o[T+4]+=1))}}function h(T){r.push(T.x,T.y,T.z)}function p(T,S){const g=T*3;S.x=e[g+0],S.y=e[g+1],S.z=e[g+2]}function _(){const T=new H,S=new H,g=new H,k=new H,D=new it,P=new it,U=new it;for(let b=0,M=0;b<r.length;b+=9,M+=6){T.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),g.set(r[b+6],r[b+7],r[b+8]),D.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),k.copy(T).add(S).add(g).divideScalar(3);const N=m(k);v(D,M+0,T,N),v(P,M+2,S,N),v(U,M+4,g,N)}}function v(T,S,g,k){k<0&&T.x===1&&(o[S]=T.x-1),g.x===0&&g.z===0&&(o[S]=k/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function d(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.vertices,e.indices,e.radius,e.details)}}class fu extends uu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fu(e.radius,e.detail)}}class an extends cn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,h=new H,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const T=[],S=d/i;let g=0;d===0&&o===0?g=.5/t:d===i&&l===Math.PI&&(g=-.5/t);for(let k=0;k<=t;k++){const D=k/t;f.x=-e*Math.cos(s+D*r)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(s+D*r)*Math.sin(o+S*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(D+g,1-S),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){const S=u[d][T+1],g=u[d][T],k=u[d+1][T],D=u[d+1][T+1];(d!==0||o>0)&&p.push(S,g,D),(d!==i-1||l<Math.PI)&&p.push(g,k,D)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zS extends Xi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qe extends Xi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class du extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class HS extends du{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Tl=new bt,xd=new H,yd=new H;class VS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new au,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GS extends VS{constructor(){super(new lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Md extends du{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new GS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class WS extends du{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class XS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sd(){return performance.now()}const bd=new bt;class vp{constructor(e,t,i=0,s=1/0){this.ray=new Da(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(e,t=!0,i=[]){return Rc(e,this,i,t),i.sort(Ed),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Rc(e[s],this,i,t);return i.sort(Ed),i}}function Ed(n,e){return n.distance-e.distance}function Rc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],e,t,!0)}}class $S extends BS{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ye(i),s=new Ye(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,p=0,_=-a;h<=t;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=h===r?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new cn;u.setAttribute("position",new Pt(l,3)),u.setAttribute("color",new Pt(c,3));const f=new gp({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const da={x:0,z:0};function qS(n){n.background=new Ye(660510),n.fog=new Ua(924198,.008);const e=new WS(16771248,.4);n.add(e);const t=new Md(16764006,1.2);t.position.set(30,60,40),n.add(t);const i=new Md(8956637,.4);i.position.set(-30,20,-40),n.add(i);const s=new HS(1715770,662058,.6);n.add(s);const r=new Kn(2e3,2e3),o=new qe({color:1982298,transparent:!0,opacity:.85}),a=new Ne(r,o);a.rotation.x=-Math.PI/2,a.position.y=0,n.add(a),YS(n),jS(n)}function YS(n){const e=new $S(1e3,20,2783818,1982298);e.position.y=.05,e.material.opacity=.05,e.material.transparent=!0,n.add(e)}function jS(n){for(let t=0;t<60;t++){const i=t/60*Math.PI*2,s=400+Math.random()*100,r=Math.cos(i)*s,o=Math.sin(i)*s,a=40+Math.random()*60,l=new ut(a,a/2,a),c=new qe({color:2768462,transparent:!0,opacity:.15}),u=new Ne(l,c);u.position.set(r,a/4,o),n.add(u)}}let at=null,Pc=null;const Bt=new H,xn=new H,Td=new Yt(0,0,0,"YXZ"),KS=new H(0,1,0),ZS=78,ha=1.65,st={forward:!1,backward:!1,left:!1,right:!1,shift:!1,up:!1,down:!1,crouch:!1};let pa=!1,yn=0,zi=0,ko=0,zo=0,Fr=null,Wt=null,wd=0;function xp(n,e){at=new mn(ZS,window.innerWidth/window.innerHeight,.1,1e3),at.position.set(15,ha,15),yn=-Math.PI*.75,zi=-.12,at.quaternion.setFromEuler(new Yt(zi,yn,0,"YXZ")),Pc=e,e.addEventListener("click",()=>{pa||e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{pa=document.pointerLockElement===e}),Fr=new kt;const t=new ut(.12,.12,.4),i=new zS({color:15253720,roughness:.7}),s=new Ne(t,i);return s.position.set(.35,-.25,-.5),Fr.add(s),at.add(Fr),JS(),document.addEventListener("mousemove",Mp),document.addEventListener("keydown",Sp),document.addEventListener("keyup",bp),at}function JS(){Wt=new kt;const n=new ut(1.5,.6,3),e=new qe({color:5913130}),t=new Ne(n,e);Wt.add(t);const i=new ut(.1,2.5,.1),s=new Ne(i,e);s.position.y=1.5,Wt.add(s);const r=new ut(1.2,1.8,.05),o=new qe({color:15658734}),a=new Ne(r,o);a.position.set(0,2,.6),Wt.add(a),Wt.visible=!1}function QS(n){Wt&&n.add(Wt)}function yp(n,e={}){if(!at)return;const t=e.mode||"explore",i=t==="sailing",s=t==="playful";Fr&&(Fr.visible=!i),Wt&&(Wt.visible=i),i?eb(n):tb(n,s),at.updateProjectionMatrix()}function eb(n){st.left&&(yn+=1.8*n),st.right&&(yn-=1.8*n),xn.set(0,0,0),st.forward&&(xn.z=-1),st.backward&&(xn.z=.5);const s=new H(0,0,-1);s.applyEuler(new Yt(0,yn,0)),s.normalize(),Bt.addScaledVector(s,-xn.z*10*n),Bt.multiplyScalar(.98),at.position.addScaledVector(Bt,n),at.position.y=.5,wd+=n*1.5;const r=Math.sin(wd)*.15;if(Wt){Wt.position.copy(at.position),Wt.position.y+=r-1.2,Wt.rotation.y=yn;const c=(st.left?.05:0)+(st.right?-.05:0);Wt.rotation.z=hs.lerp(Wt.rotation.z,c,.1)}const o=new H(0,5,12);o.applyEuler(new Yt(0,yn,0));const a=at.position.clone().add(o);at.position.lerp(a,.1),at.lookAt(Wt.position);const l=new H;at.getWorldDirection(l),yn=Math.atan2(l.x,l.z)}function tb(n,e){xn.set(0,0,0),st.forward&&(xn.z-=1),st.backward&&(xn.z+=1),st.left&&(xn.x-=1),st.right&&(xn.x+=1),xn.normalize();const s=new H;at.getWorldDirection(s),s.y=0,s.normalize();const r=new H().crossVectors(s,KS).normalize(),o=new H;o.addScaledVector(s,-xn.z),o.addScaledVector(r,xn.x),Bt.x+=o.x*50*n,Bt.z+=o.z*50*n,Bt.x*=1-10*n,Bt.z*=1-10*n,at.position.x+=Bt.x*n,at.position.z+=Bt.z*n;const a=(st.forward||st.backward||st.left||st.right)&&!e;if(a?ko+=n*(st.shift?12:8):ko=hs.lerp(ko,Math.PI*2,.1),e){const l=(st.up?1:0)+(st.down?-1:0);Bt.y+=l*10*n,Bt.y*=.95,at.position.y+=Bt.y*n}else{Bt.y-=30*n;const l=at.position.y<=ha+.1;st.up&&l&&zo<=0&&(Bt.y=8,zo=.2),zo>0&&(zo-=n),at.position.y+=Bt.y*n;const c=a?Math.sin(ko)*.04:0,u=ha+c;at.position.y<u&&Bt.y<=0&&(at.position.y=hs.lerp(at.position.y,u,.2),Bt.y=0)}at.quaternion.setFromEuler(new Yt(zi,yn,0,"YXZ"))}function Mp(n){if(!pa)return;const e=.002;yn-=n.movementX*e,zi-=n.movementY*e,zi=hs.clamp(zi,-Math.PI/2,Math.PI/2)}function Sp(n){switch(n.code){case"KeyW":st.forward=!0;break;case"KeyS":st.backward=!0;break;case"KeyA":st.left=!0;break;case"KeyD":st.right=!0;break;case"ShiftLeft":st.shift=!0;break;case"Space":st.up=!0;break;case"ControlLeft":st.down=!0;break;case"KeyC":st.crouch=!0;break}}function bp(n){switch(n.code){case"KeyW":st.forward=!1;break;case"KeyS":st.backward=!1;break;case"KeyA":st.left=!1;break;case"KeyD":st.right=!1;break;case"ShiftLeft":st.shift=!1;break;case"Space":st.up=!1;break;case"ControlLeft":st.down=!1;break;case"KeyC":st.crouch=!1;break}}function Dc(){return pa}function nb(){}function Ep(n,e,t=ha){if(!at)return;at.position.set(n+1.8,t,e+1.8);const i=n-at.position.x,s=e-at.position.z;yn=Math.atan2(-i,-s),zi=-.08,Td.set(zi,yn,0),at.quaternion.setFromEuler(Td)}function hu(){return at}function Tp(n,e){at&&(at.aspect=n/e,at.updateProjectionMatrix())}function wp(){Pc&&Pc.removeEventListener("mousedown",onMouseDown),document.removeEventListener("mousemove",Mp),document.removeEventListener("keydown",Sp),document.removeEventListener("keyup",bp)}const Ad=Object.freeze(Object.defineProperty({__proto__:null,addToScene:QS,cleanupCamera:wp,createCamera:xp,getCamera:hu,getIsLocked:Dc,requestCursorLock:nb,resizeCamera:Tp,teleportNearTarget:Ep,updateCamera:yp},Symbol.toStringTag,{value:"Module"})),Mn=new Map,Fs=new Map,Ap="pips_best_prompts",Cp="pips_conversations";function Rp(){try{return JSON.parse(localStorage.getItem(Ap)||"[]")}catch{return[]}}function ib(n,e,t){const i=Rp();i.push({text:n,x:e,z:t,id:Date.now()}),localStorage.setItem(Ap,JSON.stringify(i.slice(-20)))}function sb(){try{return JSON.parse(localStorage.getItem(Cp)||"{}")}catch{return{}}}function rb(n,e,t){const i=sb();i[n]||(i[n]=[]),i[n].push({speaker:e,text:t,time:Date.now()}),localStorage.setItem(Cp,JSON.stringify(i))}const Cd=[16294048,10537208,11067560,16308360,13672680,16302224,8968408,13150448,16294080,12114056];function Or(){return Mn}const ob=new ut(.14,.1,.14),ab=new qe({color:16774353,emissive:16769184,emissiveIntensity:.1});function lb(n){let e=0,t=0,i=6;for(;i>0;){const s=i*i;if(n<t+s){const r=n-t,o=r%i-(i-1)/2,a=Math.floor(r/i)-(i-1)/2;return new H(o*.15,e*.11,a*.15)}t+=s,e++,i--}return new H(0,(e+(n-t))*.11,0)}function Pp(n,e){n.forEach((t,i)=>{if(Mn.has(t.id))return;const s=Fp(t,i);e.add(s),Mn.set(t.id,s)})}function Dp(n,e){const t=new Set(n.map(i=>i.id));for(const[i,s]of Mn)t.has(i)||(s.userData.pyramidGroup&&e.remove(s.userData.pyramidGroup),e.remove(s),Mn.delete(i));n.forEach((i,s)=>{if(!Mn.has(i.id)){const o=Fp(i,s);e.add(o),Mn.set(i.id,o)}const r=Mn.get(i.id);if(i.position_x!==void 0&&(r.userData.baseX=i.position_x,r.userData.baseZ=i.position_z),r.userData.isBuilding=i.isBuilding,r.userData.brickCount=i.brickCount||0,fb(r,r.userData.brickCount,e),r.userData.currentHatId!==i.hat){if(r.userData.hatMesh&&r.remove(r.userData.hatMesh),i.hat){const o=Np(i.hat);r.add(o),r.userData.hatMesh=o}r.userData.currentHatId=i.hat}i.currentSpeech&&r.userData.lastSpeech!==i.currentSpeech&&(cb(i.id,i.currentSpeech,e),r.userData.lastSpeech=i.currentSpeech,rb(i.id,i.name,i.currentSpeech))})}function Lp(n){Rp().forEach(t=>{pu(t.text,t.x,t.z,n)})}function cb(n,e,t){const i=Mn.get(n);if(!i)return;Fs.has(n)&&t.remove(Fs.get(n));const s=ub(e);s.position.copy(i.position).add(new H(0,1.2,0)),t.add(s),Fs.set(n,s),setTimeout(()=>{Fs.get(n)===s&&(t.remove(s),Fs.delete(n))},6e3)}function ub(n){const e=document.createElement("canvas");e.width=512,e.height=128;const t=e.getContext("2d");t.fillStyle="rgba(255, 255, 255, 0.95)",t.beginPath(),t.roundRect(10,10,492,90,20),t.fill(),t.beginPath(),t.moveTo(256,100),t.lineTo(240,120),t.lineTo(272,100),t.fill(),t.fillStyle="#333",t.font="24px sans-serif",t.textAlign="center";const i=n.split(" ");let s="",r=50;for(let u=0;u<i.length;u++){let f=s+i[u]+" ";if(t.measureText(f).width>450&&u>0){if(t.fillText(s,256,r),s=i[u]+" ",r+=30,r>90)break}else s=f}t.fillText(s,256,r);const o=new cu(e),a=new La({map:o,transparent:!0,side:Dn}),l=new Kn(2.4,.6),c=new Ne(l,a);return c.userData.isBubble=!0,c}function pu(n,e,t,i){const s=document.createElement("canvas");s.width=256,s.height=256;const r=s.getContext("2d"),o=["#fff176","#ff8a80","#81d4fa","#a5d6a7"];r.fillStyle=o[Math.floor(Math.random()*o.length)],r.fillRect(0,0,256,256),r.fillStyle="rgba(0,0,0,0.1)",r.fillRect(0,240,256,16),r.fillStyle="#444",r.font='bold 22px "Comic Sans MS", cursive, sans-serif',r.textAlign="center";const a=n.split(" ");let l="",c=60;for(let _=0;_<a.length;_++){let v=l+a[_]+" ";r.measureText(v).width>220&&_>0?(r.fillText(l,128,c),l=a[_]+" ",c+=30):l=v}r.fillText(l,128,c);const u=new cu(s),f=new qe({map:u,side:Dn}),h=new Kn(1,1),p=new Ne(h,f);return p.position.set(e,.05,t),p.rotation.x=-Math.PI/2,p.rotation.z=(Math.random()-.5)*.2,i.add(p),ib(n,e,t),p}const wl=new H,Ho=new H,Rd=new bt;function Ip(n){if(n)for(const[,e]of Mn){const t=e.userData.leftPupil,i=e.userData.rightPupil,s=e.userData.leftSparkle,r=e.userData.rightSparkle,o=e.userData.pupilBaseLeft,a=e.userData.pupilBaseRight;if(!t||!i||!o||!a)continue;e.updateMatrixWorld(!0),wl.set(0,.08,.41),wl.applyMatrix4(e.matrixWorld),Ho.subVectors(n.position,wl).normalize(),Rd.copy(e.matrixWorld).invert(),Ho.transformDirection(Rd);const l=.052,c=.038,u=hs.clamp(Ho.x*.14,-l,l),f=hs.clamp(Ho.y*.11,-c,c);if(t.position.set(o.x+u,o.y+f,o.z),i.position.set(a.x+u,a.y+f,a.z),s&&e.userData.sparkleBaseLeft){const h=e.userData.sparkleBaseLeft;s.position.set(h.x+u*.85,h.y+f*.85,h.z)}if(r&&e.userData.sparkleBaseRight){const h=e.userData.sparkleBaseRight;r.position.set(h.x+u*.85,h.y+f*.85,h.z)}}}function fb(n,e,t){if(!n.userData.pyramidGroup){const r=new kt;r.position.set(n.userData.baseX+1.2,.05,n.userData.baseZ+1.2),r.rotation.y=Math.random()*Math.PI,t.add(r),n.userData.pyramidGroup=r,n.userData.bricks=[]}const i=n.userData.pyramidGroup,s=n.userData.bricks;if(s.length<e)for(let r=s.length;r<e;r++){const o=lb(r),a=new Ne(ob,ab);a.position.copy(o),a.scale.setScalar(.001),i.add(a),s.push(a),a.userData.targetScale=1}}function Up(n){const e=performance.now()/1e3;let t=0;for(const[,i]of Mn){const s=Math.sin(n*1.5+t*1.3)*.08,r=new H(i.userData.baseX,i.userData.baseY,i.userData.baseZ);if(i.userData.isBuilding){const l=i.userData.pyramidGroup;if(l){const c=new H().subVectors(l.position,r).normalize(),u=Math.sin(n*8)*.5+.5,f=r.clone().addScaledVector(c,.6*u);i.position.lerp(f,.2),i.rotation.x=-.4*u}}else i.position.lerp(new H(r.x,r.y+s,r.z),.1),i.rotation.x=hs.lerp(i.rotation.x,0,.1);i.rotation.y=Math.sin(n*.6+t*2.1)*.08,i.rotation.z=Math.sin(n*.8+t*1.7)*.02,i.userData.bricks&&i.userData.bricks.forEach(l=>{l.scale.x<1&&l.scale.lerp(new H(1,1,1),.1)});const o=i.userData.blushes;if(o){const l=.15+Math.sin(n*1.2+t*.8)*.05;o.forEach(c=>{c.material.emissiveIntensity=l})}const a=i.userData.reaction;if(a&&e<a.until){const l=e-a.start,c=Math.min(1,l/a.duration),u=1-Math.pow(1-c,3),f=Math.sin(l*14)*(1-u)*.18,h=Math.sin(l*8)*.08+.08;i.scale.setScalar(1+h+f*.3),i.rotation.x=Math.sin(l*10)*.06,o&&o.forEach(m=>{m.material.emissiveIntensity=.22+Math.sin(e*6)*.08,m.material.opacity=.65+Math.sin(e*5)*.08});const p=i.userData.leftSparkle,_=i.userData.rightSparkle;if(p&&_){const m=1+Math.sin(e*18)*.35;p.scale.setScalar(m),_.scale.setScalar(m)}const v=i.userData.reactionParticles;if(v&&v.length)for(let m=v.length-1;m>=0;m--){const d=v[m];d.userData.vel.y-=.012,d.position.addScaledVector(d.userData.vel,.016),d.rotation.z+=.08,d.material.opacity*=.965,d.scale.multiplyScalar(.985),d.material.opacity<.05&&(i.remove(d),v.splice(m,1))}}else i.scale.setScalar(1),i.rotation.x=0;for(const[,l]of Fs)camera&&l.quaternion.copy(camera.quaternion);t++}}function db(n,e="feed"){const t=Mn.get(n);if(!t)return!1;const i=performance.now()/1e3,s=e==="hydrate"?1.2:1.35;t.userData.reaction={kind:e,start:i,duration:s,until:i+s};const r=e==="hydrate"?9169407:16748220,o=new qe({color:r,emissive:r,emissiveIntensity:.9,transparent:!0,opacity:.95}),a=new an(.06,8,8),l=8;t.userData.reactionParticles||(t.userData.reactionParticles=[]);for(let c=0;c<l;c++){const u=new Ne(a,o.clone()),f=c/l*Math.PI*2;u.position.set(Math.cos(f)*.08,.55+Math.random()*.06,Math.sin(f)*.08),u.userData.vel=new H((Math.random()-.5)*.35+Math.cos(f)*.2,.55+Math.random()*.4,(Math.random()-.5)*.35+Math.sin(f)*.2),t.add(u),t.userData.reactionParticles.push(u)}return!0}function Np(n){const e=new kt;if(n==="wizard_hat"){const t=new qr(.5,.8,12),i=new qe({color:4930156}),s=new Ne(t,i);s.position.y=.8,e.add(s);const r=new Ne(new In(.55,.55,.05,12),i);r.position.y=.4,e.add(r)}else if(n==="hard_hat"){const t=new an(.45,12,8,0,Math.PI*2,0,Math.PI/2),i=new qe({color:16763904}),s=new Ne(t,i);s.position.y=.4,e.add(s)}else if(n==="beret"){const t=new In(.45,.4,.15,12),i=new qe({color:3355443});new qe({color:3355443});const s=new Ne(t,i);s.position.y=.45,e.add(s)}else if(n==="crown"){const t=new In(.45,.45,.4,8,1,!0),i=new qe({color:16766720}),s=new Ne(t,i);s.position.y=.6,e.add(s);for(let r=0;r<8;r++){const o=new Ne(new qr(.1,.3,4),i),a=r/8*Math.PI*2;o.position.set(Math.cos(a)*.45,.8,Math.sin(a)*.45),e.add(o)}}return e}function Fp(n,e){const t=new kt,i=n.color?new Ye(n.color):new Ye(Cd[e%Cd.length]),s=new ut(.8,.8,.8),r=new qe({color:i,emissive:i,emissiveIntensity:.08}),o=new Ne(s,r);t.add(o);const a=new ut(.35,.05,.35),l=new qe({color:16777215,emissive:16777215,emissiveIntensity:.3,transparent:!0,opacity:.4}),c=new Ne(a,l);c.position.set(-.1,.41,-.1),t.add(c);const u=new ut(.2,.22,.05),f=new qe({color:16777215,emissive:16777215,emissiveIntensity:.15}),h=new Ne(u,f);h.position.set(-.15,.08,.41),t.add(h);const p=new Ne(u,f);p.position.set(.15,.08,.41),t.add(p);const _=new ut(.12,.14,.05),v=new qe({color:2236979}),m=new Ne(_,v);m.position.set(-.15,.06,.44),t.add(m);const d=new Ne(_,v);d.position.set(.15,.06,.44),t.add(d),t.userData.leftPupil=m,t.userData.rightPupil=d,t.userData.pupilBaseLeft=m.position.clone(),t.userData.pupilBaseRight=d.position.clone();const T=new ut(.05,.05,.02),S=new qe({color:16777215,emissive:16777215,emissiveIntensity:.6}),g=new Ne(T,S);g.position.set(-.1,.12,.47),t.add(g);const k=new Ne(T,S);k.position.set(.2,.12,.47),t.add(k),t.userData.leftSparkle=g,t.userData.rightSparkle=k,t.userData.sparkleBaseLeft=g.position.clone(),t.userData.sparkleBaseRight=k.position.clone();const D=new ut(.12,.08,.05),P=16746632,U=new Ne(D,new qe({color:P,emissive:P,emissiveIntensity:.15,transparent:!0,opacity:.6}));U.position.set(-.25,-.05,.41),t.add(U);const b=new Ne(D,new qe({color:P,emissive:P,emissiveIntensity:.15,transparent:!0,opacity:.6}));b.position.set(.25,-.05,.41),t.add(b),t.userData.blushes=[U,b];const M=new ut(.12,.03,.02),N=new qe({color:5583684}),ee=new Ne(M,N);ee.position.set(0,-.1,.42),t.add(ee);const q=n.position_x!==void 0?n.position_x:-8+e%5*4,Y=n.position_z!==void 0?n.position_z:-4+Math.floor(e/5)*4,ae=.6;if(t.position.set(q,ae,Y),t.userData.baseX=q,t.userData.baseY=ae,t.userData.baseZ=Y,t.userData.pipId=n.id,t.userData.pipName=n.name,n.hat){const Z=Np(n.hat);t.add(Z),t.userData.hatMesh=Z,t.userData.currentHatId=n.hat}return t}const Lc=Object.freeze(Object.defineProperty({__proto__:null,createNoteMesh:pu,createPipMeshes:Pp,getPipMeshMap:Or,initSavedNotes:Lp,syncPipMeshes:Dp,triggerPipReaction:db,updatePipAnimations:Up,updatePipEyeTracking:Ip},Symbol.toStringTag,{value:"Module"})),Pd=new vp,Vo=new it;function hb(n,e,t,i,s){if(s)Vo.set(0,0);else{const a=i.domElement.getBoundingClientRect();Vo.x=(n.clientX-a.left)/a.width*2-1,Vo.y=-((n.clientY-a.top)/a.height)*2+1}Pd.setFromCamera(Vo,e);const r=[];for(const[a,l]of t)l.traverse(c=>{c.isMesh&&(c.userData._pipId=a,r.push(c))});const o=Pd.intersectObjects(r,!1);return o.length>0?o[0].object.userData._pipId:null}const Yr=Fe(!1),ma=new Map,ga=new Map;let ks=!1;function pb(n,e){Yr.value=!0,ks=!1,ma.clear(),ga.clear();const t=n.length;if(t===0)return;const i=4;n.forEach((s,r)=>{const o=e.get(s.id);if(!o)return;ma.set(s.id,{x:o.userData.baseX,y:o.userData.baseY,z:o.userData.baseZ});const a=r/t*Math.PI*2;ga.set(s.id,{x:da.x+Math.cos(a)*i,y:o.userData.baseY,z:da.z+Math.sin(a)*i})})}function mb(n,e){if(!Yr.value)return;const t=ks?ma:ga,i=2*n;let s=!0;for(const[r,o]of t){const a=e.get(r);if(!a)continue;a.userData.baseX+=(o.x-a.userData.baseX)*i,a.userData.baseZ+=(o.z-a.userData.baseZ)*i,a.position.x=a.userData.baseX,a.position.z=a.userData.baseZ;const l=o.x-a.userData.baseX,c=o.z-a.userData.baseZ;if((Math.abs(l)>.05||Math.abs(c)>.05)&&(s=!1),!ks){const u=Math.atan2(da.z-a.position.z,da.x-a.position.x);a.rotation.y=u-Math.PI/2}}ks&&s&&(Yr.value=!1,ks=!1,ma.clear(),ga.clear())}function gb(){Yr.value&&(ks=!0)}const Na=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},_b={__name:"GladeCanvas",setup(n){const e=Fe(null),{pips:t,selectPip:i,buildMode:s,currentMode:r,activeGlade:o,decorMode:a,decorations:l,placeDecoration:c,gladeSlots:u,selectedTool:f,farmBlocks:h,placeFarmBlock:p,tickFarm:_,setPlayerPosition:v,fairies:m,wildPips:d,onboardingStep:T,guidePip:S,spawnFairy:g,captureFairy:k,spawnWildPip:D,captureWildPip:P,inventory:U,selectedSlot:b,equipHat:M,removePip:N,removeFarmBlock:ee}=ms();let q=null,Y=null,ae=null,Z=null,j=null;const F=new vp,ye=new it,Se=new Map,Le=new Map,Pe=new Map,tt=[];let le=null;const Me=new Map,te=new Map,V=[],Q=[];let fe=null;const De=[];function Xe(C,G){var z;const E=(z=o.value)==null?void 0:z.zone;return E?C>=E.minX&&C<=E.maxX&&G>=E.minZ&&G<=E.maxZ:!1}function R(C,G){if(G){ye.set(0,0);return}const E=q.domElement.getBoundingClientRect();ye.x=(C.clientX-E.left)/E.width*2-1,ye.y=-((C.clientY-E.top)/E.height)*2+1}function O(C,G){if(!ae||!q)return null;R(C,G),F.setFromCamera(ye,ae);const E=new Ni(new H(0,1,0),0),z=new H;return F.ray.intersectPlane(E,z)?z:null}function A(){if(!Y)return;const C=new Set(h.value.map(G=>G.id));for(const[G,E]of Se)C.has(G)||(Y.remove(E),Se.delete(G));for(const G of h.value){if(Se.has(G.id))continue;const E=he(G);Y.add(E),Se.set(G.id,E)}}function he(C){let G=new ut(1,.7,1),E=14267276;C.type==="lantern"?(G=new ut(.6,1.2,.6),E=16765567):C.type==="totem"?(G=new ut(.9,1.5,.9),E=12956646):C.type==="archive"&&(G=new ut(1.2,.9,1.2),E=10474456);const z=new qe({color:E,emissive:E,emissiveIntensity:.08}),B=new Ne(G,z);return B.position.set(C.x,G.parameters.height/2,C.z),B}function ie(){if(!Y)return;const C=new Set(l.value.map(G=>G.id));for(const[G,E]of Pe)C.has(G)||(Y.remove(E),Pe.delete(G));for(const G of l.value){if(Pe.has(G.id))continue;const E=ne(G);Y.add(E),Pe.set(G.id,E)}}function ne(C){const G=new kt;if(C.type==="house"){const E=new Ne(new ut(2.5,2,2),new qe({color:16777215}));E.position.y=1,G.add(E);const z=new Ne(new qr(2,1.5,4),new qe({color:15420747}));z.position.y=2.5,z.rotation.y=Math.PI/4,G.add(z);const B=new Ne(new Kn(.6,1),new qe({color:5913130}));B.position.set(0,.5,1.01),G.add(B)}else if(C.type==="table"){const E=new Ne(new In(.8,.8,.1,12),new qe({color:8514796,transparent:!0,opacity:.8}));E.position.y=.5,G.add(E);const z=new Ne(new In(.1,.2,.5,8),new qe({color:16777215}));z.position.y=.25,G.add(z)}else if(C.type==="beanbag"){const E=new Ne(new an(.6,12,10,0,Math.PI*2,0,Math.PI*.7),new qe({color:16756544}));E.rotation.x=Math.PI,E.position.y=.3,G.add(E)}else if(C.type==="shroom"){const E=new Ne(new an(.4,12,10,0,Math.PI*2,0,Math.PI/2),new qe({color:16775781,emissive:16775781,emissiveIntensity:.6}));E.position.y=.6,G.add(E);const z=new Ne(new In(.1,.15,.6,8),new qe({color:16777215}));z.position.y=.3,G.add(z)}else if(C.type==="bonsai"){const E=new Ne(new In(.4,.3,.3,12),new qe({color:5592405}));E.position.y=.15,G.add(E);const z=new Ne(new fu(.4),new qe({color:7921807}));z.position.y=.6,G.add(z)}else if(C.type==="bench"){const E=new Ne(new ut(1.4,.1,.6),new qe({color:5913130}));E.position.y=.4,G.add(E);const z=new Ne(new ut(.1,.4,.1),new qe({color:3355443}));z.position.set(-.6,.2,.2),G.add(z);const B=z.clone();B.position.x=.6,G.add(B);const L=z.clone();L.position.z=-.2,G.add(L);const pe=z.clone();pe.position.set(.6,.2,-.2),G.add(pe)}return G.position.set(C.x,0,C.z),G.rotation.y=C.rotation||0,G}function de(C){if(!le||!ae)return;const G=new H;ae.getWorldDirection(G),G.y=0,G.normalize();const E=new H().crossVectors(G,new H(0,1,0)).normalize(),z=new H().copy(ae.position).addScaledVector(G,-1.6).addScaledVector(E,.75);le.position.x+=(z.x-le.position.x)*.12,le.position.z+=(z.z-le.position.z)*.12,le.position.y=.48+Math.sin(C*3.2)*.05}function oe(C,G){if(!Y)return;const E=new Set(m.value.map(z=>z.id));for(const[z,B]of Me)E.has(z)||(Y.remove(B),Me.delete(z));m.value.forEach(z=>{let B=Me.get(z.id);if(!B){const _e=new kt,Oe=new Ne(new an(.12,8,8),new qe({color:z.color,emissive:z.color,emissiveIntensity:1}));_e.add(Oe);const vt=new Ne(new an(.3,8,8),new qe({color:z.color,transparent:!0,opacity:.35}));_e.add(vt),B=_e,Y.add(B),Me.set(z.id,B)}const L=z.x+Math.sin(G*.5+z.speed*10)*8,pe=z.z+Math.cos(G*.4+z.speed*10)*8;B.position.x+=(L-B.position.x)*.05,B.position.z+=(pe-B.position.z)*.05,B.position.y=z.y+Math.sin(G*2+z.speed)*.5,B.children[1].scale.setScalar(1+Math.sin(G*4)*.2)})}function X(C,G){const E=new kt;for(let pe=0;pe<8;pe++){const _e=new Ne(new an(.05),new La({color:G})),Oe=pe/8*Math.PI*2;_e.userData.vel=new H(Math.cos(Oe),Math.sin(pe),Math.sin(Oe)).multiplyScalar(.1),E.add(_e)}E.position.copy(C),Y.add(E);const z=Z.getElapsedTime(),B=.8,L=()=>{if(Z.getElapsedTime()-z>B){Y.remove(E);return}E.children.forEach(_e=>{_e.position.add(_e.userData.vel),_e.scale.multiplyScalar(.95)}),requestAnimationFrame(L)};L()}function y(C,G){const E=new kt,z=24;for(let _e=0;_e<z;_e++){const Oe=new Ne(new an(.12,6,6),new qe({color:G,emissive:G,emissiveIntensity:1.5,transparent:!0})),vt=_e/z*Math.PI*2,Ct=(Math.random()-.5)*Math.PI,ct=.15+Math.random()*.2;Oe.userData.vel=new H(Math.cos(vt)*Math.cos(Ct),Math.sin(Ct),Math.sin(vt)*Math.cos(Ct)).multiplyScalar(ct),E.add(Oe)}E.position.copy(C),Y.add(E);const B=Z.getElapsedTime(),L=1.2,pe=()=>{const _e=Z.getElapsedTime()-B;if(_e>L){Y.remove(E);return}E.children.forEach(Oe=>{Oe.position.add(Oe.userData.vel),Oe.userData.vel.multiplyScalar(.96),Oe.userData.vel.y-=.005,Oe.scale.multiplyScalar(.97),Oe.material.opacity=1-_e/L}),requestAnimationFrame(pe)};pe()}function x(C){if(!ae||!Y)return;const G=new kt,E=new Ne(new an(.15,12,12,0,Math.PI*2,0,Math.PI/2),new qe({color:16724787})),z=new Ne(new an(.15,12,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new qe({color:16777215}));G.add(E),G.add(z);const B=new H;ae.getWorldDirection(B),G.position.copy(ae.position).addScaledVector(B,1),Y.add(G);const L=B.clone().multiplyScalar(15);V.push({mesh:G,velocity:L,life:3})}function I(C){const G=new Ne(new ut(.8,.8,.8),new qe({color:8542764}));$(G,16729156)}function $(C,G=16729156){if(!Y)return;const E=new kt;E.add(C);const z=new Ne(new an(.55,12,12),new qe({color:G,emissive:G,emissiveIntensity:.1}));z.position.y=1.5,E.add(z);const B=new Ne(new In(.012,.012,.8),new qe({color:16777215}));B.position.y=1.1,E.add(B),E.position.copy(C.position),C.position.set(0,0,0),Y.add(E),Q.push({mesh:E,life:25,speed:1.8+Math.random()*2.2,color:G})}function se(C){if(!ae||!Y)return;const G=new Ne(new an(.18,12,12),new qe({color:16729343,emissive:16729343,emissiveIntensity:.5})),E=new H;ae.getWorldDirection(E),G.position.copy(ae.position).addScaledVector(E,1),Y.add(G);const z=E.clone().multiplyScalar(22);De.push({mesh:G,velocity:z,life:3,type:"balloon_seed"})}function re(C){if(!ae||!Y)return;const G=new H;ae.getWorldDirection(G);const E=ae.position.clone().addScaledVector(G,12);y(E,new Ye().setHSL(Math.random(),.8,.6).getHex())}function be(C){const G=Dc(),E=O(C,G);if(E)g(E.x,E.y+.5,E.z),X(E,16777215);else{const z=new H;ae.getWorldDirection(z);const B=ae.position.clone().addScaledVector(z,4);g(B.x,B.y,B.z),X(B,16777215)}}function ve(C,G){if(!(!Y||!S.value)&&(!fe&&T.value<=4&&(fe=new Ne(new ut(1,1,1),new qe({color:S.value.color})),Y.add(fe)),!!fe)){if(T.value===0&&(S.value.size>1?S.value.size-=C*2:(S.value.size=1,T.value=2)),T.value===2){if(!ae)return;Math.hypot(ae.position.x-S.value.x,ae.position.z-S.value.z)>12&&(fe.rotation.y+=C*2.5);const z=55,B=-35,L=z-S.value.x,pe=B-S.value.z,_e=Math.hypot(L,pe);_e>2?(S.value.x+=L/_e*7.5*C,S.value.z+=pe/_e*7.5*C):T.value=3}if(T.value>=4){Y.remove(fe),fe=null;return}fe.scale.setScalar(S.value.size),fe.position.set(S.value.x,S.value.size/2+.1,S.value.z),fe.rotation.y+=C*2}}function Ee(C,G){for(let E=Q.length-1;E>=0;E--){const z=Q[E];z.mesh.position.y+=z.speed*C,z.mesh.rotation.y+=C*.8,z.mesh.position.x+=Math.sin(G*.8+E)*.04,z.mesh.position.z+=Math.cos(G*.7+E)*.04,z.life-=C,z.life<22&&(z.mesh.position.x+=Math.sin(G*2)*.15),(z.life<=0||z.mesh.position.y>60)&&(y(z.mesh.position,z.color||16729156),Y.remove(z.mesh),Q.splice(E,1))}}function Ge(C,G){if(!Y)return;const E=new Set(d.value.map(z=>z.id));for(const[z,B]of te)E.has(z)||(Y.remove(B),te.delete(z));d.value.forEach(z=>{let B=te.get(z.id);B||(B=new Ne(new ut(.7,.7,.7),new qe({color:z.color,transparent:!0,opacity:.5})),B.position.set(z.x,.45,z.z),Y.add(B),te.set(z.id,B)),B.position.y=.45+Math.sin(G*2)*.1,B.rotation.y+=C*1.5})}function xe(C){for(let G=V.length-1;G>=0;G--){const E=V[G];E.mesh.position.addScaledVector(E.velocity,C),E.velocity.y-=9.8*C,E.life-=C,E.mesh.position.y<0&&(E.mesh.position.y=0,E.velocity.y*=-.5),m.value.forEach(z=>{const B=Me.get(z.id);B&&E.mesh.position.distanceTo(B.position)<1.2&&(X(B.position,z.color),k(z.id)&&(E.life=-1))}),d.value.forEach(z=>{const B=te.get(z.id);B&&E.mesh.position.distanceTo(B.position)<1.5&&(X(B.position,z.color),P(z.id)&&(E.life=-1))});for(let z=Q.length-1;z>=0;z--){const B=Q[z];E.mesh.position.distanceTo(B.mesh.position.clone().add(new H(0,1.4,0)))<1&&(X(B.mesh.position,16729156),Y.remove(B.mesh),Q.splice(z,1),E.life=-1)}E.life<=0&&(Y.remove(E.mesh),V.splice(G,1))}for(let G=De.length-1;G>=0;G--){const E=De[G];if(E.mesh.position.addScaledVector(E.velocity,C),E.life-=C,E.type==="balloon_seed"){const z=Or();for(const[B,L]of z)if(E.mesh.position.distanceTo(L.position)<1.2){const pe=L.clone();if(N(B)){$(pe,4521796),E.life=-1;break}}for(const[B,L]of Se)if(E.mesh.position.distanceTo(L.position)<1.2){const pe=L.clone();if(ee(B)){$(pe,4521983),E.life=-1;break}}}E.life<=0&&(Y.remove(E.mesh),De.splice(G,1))}}function Re(C){const G=new kt,E=new Ne(new ut(.24,2,.24),new qe({color:9399108}));E.position.y=1,G.add(E);const z=document.createElement("canvas");z.width=512,z.height=128;const B=z.getContext("2d");B.fillStyle="rgba(255, 247, 232, 0.92)",B.fillRect(0,0,512,128),B.strokeStyle="rgba(92, 74, 60, 0.9)",B.lineWidth=6,B.strokeRect(3,3,506,122),B.fillStyle="#5a463a",B.font="bold 40px sans-serif",B.fillText(C.name,22,52),B.font="26px sans-serif",B.fillText(`${C.theme} · ${C.project}`,22,96);const L=new cu(z),pe=new Ne(new Kn(4.2,1.1),new qe({map:L,transparent:!0}));return pe.position.set(0,2.2,0),G.add(pe),G.position.set(C.center.x,0,C.center.z-10.5),G.userData.gladeId=C.id,G}function Be(C){const G=Dc(),E=hu(),z=Or();if(!E||!q)return;if(s.value){const L=O(C,G);if(L&&Xe(L.x,L.z)){p(f.value,L.x,L.z);return}}if(a.value){const L=O(C,G);if(L){c(f.value,L.x,L.z);return}}if(r.value==="wizard"||r.value==="about"){const L=O(C,G);if(L){const pe=prompt('Enter a "Best Prompt" to leave as a note:');pe&&pu(pe,L.x,L.z,Y);return}}if(r.value==="playful"){const L=U.value[b.value];if((L==null?void 0:L.id)==="balloon_cannon")se();else if((L==null?void 0:L.id)==="firework_launcher")re();else if((L==null?void 0:L.id)==="fairy_summoner")be(C);else if((L==null?void 0:L.id)==="capture_orb")x();else if((L==null?void 0:L.type)==="weapon"){const pe=new H;ae.getWorldDirection(pe);const _e=ae.position.clone().addScaledVector(pe,6);y(_e,new Ye().setHSL(Math.random(),.85,.7).getHex())}else L||re();return}const B=hb(C,E,z,q,G);if(B!==null){const L=t.value.find(pe=>pe.id===B);if(L){const pe=U.value[b.value];if(pe&&pe.type==="hat"){M(L.id,pe);return}i(L)}}}function $e(){if(!q||!e.value)return;const C=window.innerWidth,G=window.innerHeight;q.setSize(C,G),Tp(C,G)}function Ae(){j=requestAnimationFrame(Ae);const C=Z.getDelta(),G=Z.getElapsedTime();yp(C,{mode:r.value}),Up(G),Ip(ae),Yr.value&&mb(C,Or()),_(C),ie(),de(G),oe(C,G),Ge(C,G),ve(C),Ee(C,G),xe(C),m.value.length<5&&Math.random()<.01&&g(),d.value.length<3&&Math.random()<.005&&D(),ae&&v(ae.position.x,ae.position.z),q.render(Y,ae)}Ta(()=>{q=new pp({antialias:!0,alpha:!1}),q.setSize(window.innerWidth,window.innerHeight),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.toneMapping=kh,q.toneMappingExposure=1.4,q.outputColorSpace=pn,e.value.appendChild(q.domElement),Y=new mp,qS(Y);for(const z of u.value){const B=z.zone,L=new Kn(B.maxX-B.minX+1,B.maxZ-B.minZ+1),pe=new qe({color:new Ye(z.color),transparent:!0,opacity:.16}),_e=new Ne(L,pe);_e.rotation.x=-Math.PI/2,_e.position.set((B.minX+B.maxX)/2,.02,(B.minZ+B.maxZ)/2),Y.add(_e),Le.set(z.id,_e);const Oe=Re(z);Y.add(Oe),tt.push(Oe)}ae=xp(q,q.domElement),Z=new XS,t.value.length>0&&Pp(t.value,Y),Lp(Y);const C=new Ne(new ut(.42,.42,.42),new qe({color:16372637,emissive:10513498,emissiveIntensity:.08}));le=new kt,le.add(C);const G=new Ne(new ut(.06,.06,.04),new qe({color:2236979}));G.position.set(.08,.03,.22),le.add(G);const E=G.clone();E.position.x=-.08,le.add(E),le.position.set(13.5,.48,13.5),Y.add(le),Ae(),window.addEventListener("resize",$e)}),En(()=>t.value,C=>{Y&&C&&Dp(C,Y)},{deep:!0}),En(()=>h.value,()=>{A()},{deep:!0}),En(()=>{var C;return(C=o.value)==null?void 0:C.id},()=>{var C;for(const G of u.value){const E=Le.get(G.id);E&&(E.material.opacity=((C=o.value)==null?void 0:C.id)===G.id?.28:.12)}for(const G of tt)G.visible=!0,G.children.forEach(E=>{var z;E.material&&(E.material.opacity=G.userData.gladeId===((z=o.value)==null?void 0:z.id)?1:.72,E.material.transparent=!0)})}),Zr(()=>{j&&cancelAnimationFrame(j),wp(),window.removeEventListener("resize",$e),q&&(q.dispose(),e.value&&q.domElement.parentNode===e.value&&e.value.removeChild(q.domElement))});function ge(C){C.preventDefault(),r.value==="playful"&&I()}return(C,G)=>(we(),Ce("div",{ref_key:"container",ref:e,class:"glade-canvas",onClick:Be,onContextmenu:ge},null,544))}},vb=Na(_b,[["__scopeId","data-v-7ed37750"]]),xb={style:{display:"flex","align-items":"center",gap:"8px"}},yb={style:{"font-size":"16px"}},Mb={style:{"font-size":"11px",opacity:"0.8",background:"#555",padding:"1px 4px","border-radius":"4px",color:"#fff"}},Sb={style:{"font-size":"12px",opacity:"0.7","margin-bottom":"8px"}},bb={key:0,style:{"font-size":"13px","margin-bottom":"12px","line-height":"1.4"}},Eb={style:{"font-size":"12px","margin-bottom":"12px"}},Tb={key:0,style:{"margin-top":"4px",height:"4px",width:"100%",background:"rgba(0,0,0,0.2)","border-radius":"2px",overflow:"hidden"}},wb={key:1,style:{"margin-top":"8px",display:"flex","flex-direction":"column",gap:"4px"}},Ab={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8"}},Cb={style:{height:"4px",width:"100%",background:"rgba(0,0,0,0.2)","border-radius":"2px",overflow:"hidden"}},Rb={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8","margin-top":"2px"}},Pb={style:{height:"4px",width:"100%",background:"rgba(0,0,0,0.2)","border-radius":"2px",overflow:"hidden"}},Db={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8","margin-top":"2px"}},Lb={style:{height:"4px",width:"100%",background:"rgba(255,100,150,0.1)","border-radius":"2px",overflow:"hidden"}},Ib={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8","margin-top":"2px"}},Ub={style:{color:"#ffd700"}},Nb={style:{height:"2px",width:"100%",background:"rgba(255,215,0,0.1)","border-radius":"1px",overflow:"hidden","margin-top":"2px"}},Fb={key:1,style:{display:"flex","flex-direction":"column",gap:"8px"}},Ob={key:2,style:{display:"flex","flex-direction":"column",gap:"10px"}},Bb={style:{"font-size":"12px",opacity:"0.85","line-height":"1.5"}},kb={__name:"PipOverlay",emits:["focus-chat"],setup(n,{emit:e}){const{selectedPip:t,deselectPip:i,openChat:s,closeChat:r}=ms(),o=Fe(null),{dragStyles:a,onMouseDown:l}=aa(o,{x:0,y:0},"pip-overlay-pos"),c=Fe("menu"),u=e;function f(){s(),u("focus-chat")}function h(){r(),c.value="menu"}return En(()=>{var p;return(p=t.value)==null?void 0:p.id},()=>{c.value="menu"}),(p,_)=>me(t)?(we(),Ce("div",{key:0,ref_key:"pipOverlayEl",ref:o,class:"pip-overlay panel",style:St(me(a)())},[W("div",{class:"draggable",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"10px",padding:"2px 0"},onMousedown:_[1]||(_[1]=(...v)=>me(l)&&me(l)(...v))},[W("div",xb,[W("span",{class:"status-dot",style:St({backgroundColor:me(t).color||"#e06060"})},null,4),W("strong",yb,Ve(me(t).name||"Unknown Pip"),1),W("span",Mb," Lv. "+Ve(me(t).level||1),1)]),W("button",{class:"close-btn",onClick:_[0]||(_[0]=fs((...v)=>me(i)&&me(i)(...v),["stop"]))},"×")],32),W("div",Sb,Ve(me(t).provider||"openai")+" / "+Ve(me(t).model||"gpt-4"),1),me(t).personality?(we(),Ce("div",bb,' "'+Ve(me(t).personality)+'" ',1)):Je("",!0),W("div",Eb,[_[8]||(_[8]=wt(" Status: ",-1)),W("span",{style:St({color:me(t).status==="active"?"#6be07a":"#e0c040"})},Ve(me(t).status||"idle"),5),me(t).exp!==void 0?(we(),Ce("div",Tb,[W("div",{style:St({width:`${me(t).exp}%`,height:"100%",background:"#ffd700"})},null,4)])):Je("",!0),me(t).hunger!==void 0?(we(),Ce("div",wb,[W("div",Ab,[_[4]||(_[4]=W("span",null,"Hunger",-1)),W("span",null,Ve(Math.round(me(t).hunger))+"%",1)]),W("div",Cb,[W("div",{class:"stat-fill hunger",style:St({width:`${me(t).hunger}%`,height:"100%"})},null,4)]),W("div",Rb,[_[5]||(_[5]=W("span",null,"Thirst",-1)),W("span",null,Ve(Math.round(me(t).thirst))+"%",1)]),W("div",Pb,[W("div",{class:"stat-fill thirst",style:St({width:`${me(t).thirst}%`,height:"100%"})},null,4)]),W("div",Db,[_[6]||(_[6]=W("span",null,"Bond",-1)),W("span",null,Ve(Math.round(me(t).emotionalBond||0))+"%",1)]),W("div",Lb,[W("div",{style:St({width:`${me(t).emotionalBond||0}%`,height:"100%",background:"linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%)"})},null,4)]),W("div",Ib,[_[7]||(_[7]=W("span",null,"Pyramid Built",-1)),W("span",Ub,"🧱 "+Ve(me(t).brickCount||0),1)]),W("div",Nb,[W("div",{style:St({width:`${Math.min(100,(me(t).brickCount||0)*2)}%`,height:"100%",background:"#ffd700"})},null,4)])])):Je("",!0)]),c.value==="menu"?(we(),Ce("div",Fb,[W("button",{class:"send-btn",onClick:_[2]||(_[2]=v=>c.value="details"),style:{width:"100%"}},"Inspect"),W("button",{class:"send-btn",onClick:f,style:{width:"100%"}},"Talk"),W("button",{class:"send-btn",onClick:_[3]||(_[3]=(...v)=>me(i)&&me(i)(...v)),style:{opacity:"0.6",width:"100%"}},"Close")])):(we(),Ce("div",Ob,[W("div",Bb,[W("strong",null,"About "+Ve(me(t).name),1),_[9]||(_[9]=W("br",null,null,-1)),W("span",null,Ve(me(t).personality||"A mysterious glade creature."),1)]),W("div",{style:{display:"flex",gap:"8px"}},[W("button",{class:"send-btn",onClick:f,style:{flex:"1"}},"Talk"),W("button",{class:"send-btn",onClick:h,style:{opacity:"0.7",flex:"1"}},"Back")])]))],4)):Je("",!0)}};function zb(){async function n(o,a={}){const l=await fetch(o,{headers:{"Content-Type":"application/json"},...a});if(!l.ok){const c=await l.text();throw new Error(`API error ${l.status}: ${c}`)}return l.status===204?null:l.json()}async function e(){return n("/api/agents")}async function t(o){return n("/api/agents",{method:"POST",body:JSON.stringify(o)})}async function i(o,a){return n(`/api/agents/${o}`,{method:"PATCH",body:JSON.stringify(a)})}async function s(o){return n(`/api/agents/${o}`,{method:"DELETE"})}async function r(o,a){return n(`/api/agents/${o}/chat`,{method:"POST",body:JSON.stringify({content:a})})}return{fetchPips:e,createPip:t,updatePip:i,deletePip:s,chatWithPip:r}}const Al=Fe([]);let Vt=null,Cl=null;function Op(){function n(){if(Vt&&(Vt.readyState===WebSocket.OPEN||Vt.readyState===WebSocket.CONNECTING))return;const s=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/council`;Vt=new WebSocket(s),Vt.onopen=()=>{console.log("[WS] Connected to council")},Vt.onmessage=r=>{try{const o=JSON.parse(r.data);Al.value.push(o)}catch{Al.value.push({type:"raw",content:r.data})}},Vt.onclose=()=>{console.log("[WS] Disconnected, reconnecting in 3s..."),Vt=null,clearTimeout(Cl),Cl=setTimeout(()=>n(),3e3)},Vt.onerror=r=>{console.error("[WS] Error:",r),Vt.close()}}function e(){clearTimeout(Cl),Vt&&(Vt.close(),Vt=null)}function t(i){Vt&&Vt.readyState===WebSocket.OPEN?Vt.send(JSON.stringify(i)):console.warn("[WS] Not connected, cannot send")}return{messages:Al,connect:n,disconnect:e,send:t}}const Hb={key:0,class:"chat-bubble pip",style:{opacity:"0.6"}},Vb={key:0,style:{opacity:"0.4","font-size":"12px","text-align":"center",padding:"20px"}},Gb={key:0,class:"chat-input-row"},Wb=["placeholder","disabled"],Xb=["disabled"],$b={__name:"ChatWindow",setup(n,{expose:e}){const{selectedPip:t,councilActive:i,chatOpen:s,pips:r,addPipExp:o,speakToAgent:a,copyConversations:l}=ms(),{chatWithPip:c}=zb(),{messages:u}=Op(),f=Fe(null),{dragStyles:h,onMouseDown:p}=aa(f,{x:0,y:0},"pip-chat-pos"),_=Fe([]),v=Fe(""),m=Fe(!1),d=Fe(null),T=Fe(null),S=Gt(()=>i.value||t.value&&s.value),g=Gt(()=>i.value?"Council Chamber":t.value?`Chat with ${t.value.name}`:"Chat");async function k(){const P=v.value.trim();if(!P||m.value||i.value||!t.value)return;const U=t.value.id,b=t.value.name,M=t.value.color||"#e06060";_.value.push({role:"user",content:P}),v.value="",m.value=!0;try{const N=await c(U,P),ee=(N==null?void 0:N.reply)||(N==null?void 0:N.content)||(N==null?void 0:N.message)||JSON.stringify(N);_.value.push({role:"pip",name:b,color:M,content:ee}),a(U,ee)}catch(N){_.value.push({role:"pip",name:"System",color:"#ff6666",content:`Error: ${N.message}`})}finally{m.value=!1;const N=o(U,25),ee=r.value.findIndex(q=>q.id===U);if(ee!==-1){const q=r.value[ee];q.brickCount=(q.brickCount||0)+1,q.isBuilding=!0,setTimeout(()=>{q.isBuilding=!1},5e3)}N&&_.value.push({role:"pip",name:"System",color:"#ffd700",content:`✨ ${b} has LEVELED UP! Their intelligence is expanding.`})}}function D(){qn(()=>{var P;(P=T.value)==null||P.focus()})}return En(()=>_.value.length,()=>{qn(()=>{d.value&&(d.value.scrollTop=d.value.scrollHeight)})}),En(()=>u.value.length,()=>{qn(()=>{d.value&&(d.value.scrollTop=d.value.scrollHeight)})}),En(()=>{var P;return(P=t.value)==null?void 0:P.id},()=>{_.value=[]}),e({focusInput:D}),(P,U)=>S.value?(we(),Ce("div",{key:0,ref_key:"chatWindowEl",ref:f,class:"chat-window panel",style:St(me(h)())},[W("div",{class:"draggable chat-header",onMousedown:U[1]||(U[1]=(...b)=>me(p)&&me(p)(...b))},[W("span",null,Ve(g.value),1),W("button",{class:"tool-btn",onClick:U[0]||(U[0]=(...b)=>me(l)&&me(l)(...b)),title:"Copy Conversation Logs"},"📋")],32),W("div",{ref_key:"messagesEl",ref:d,class:"chat-messages"},[me(i)?(we(),Ce(rt,{key:1},[(we(!0),Ce(rt,null,hn(me(u),(b,M)=>(we(),Ce("div",{key:"ws-"+M,class:"chat-bubble pip"},[b.agent_name?(we(),Ce("div",{key:0,class:"bubble-name",style:St({color:b.color||"#c060c0"})},Ve(b.agent_name),5)):Je("",!0),wt(" "+Ve(b.content||b.message||JSON.stringify(b)),1)]))),128)),me(u).length===0?(we(),Ce("div",Vb," Council is in session... awaiting responses ")):Je("",!0)],64)):(we(),Ce(rt,{key:0},[(we(!0),Ce(rt,null,hn(_.value,(b,M)=>(we(),Ce("div",{key:M,class:Lt(["chat-bubble",b.role])},[b.role==="pip"?(we(),Ce("div",{key:0,class:"bubble-name",style:St({color:b.color})},Ve(b.name),5)):Je("",!0),wt(" "+Ve(b.content),1)],2))),128)),m.value?(we(),Ce("div",Hb,[...U[3]||(U[3]=[W("span",{class:"loading-dots"},"Thinking",-1)])])):Je("",!0)],64))],512),me(i)?Je("",!0):(we(),Ce("div",Gb,[Gn(W("input",{ref_key:"inputEl",ref:T,"onUpdate:modelValue":U[2]||(U[2]=b=>v.value=b),type:"text",placeholder:me(t)?`Say something to ${me(t).name}...`:"Type a message...",disabled:m.value,onKeydown:Os(k,["enter"])},null,40,Wb),[[Ks,v.value]]),W("button",{class:"send-btn",disabled:m.value||!v.value.trim(),onClick:k}," Send ",8,Xb)]))],4)):Je("",!0)}},qb={class:"council-btn-wrap"},Yb={key:0,class:"council-prompt",style:{"margin-top":"8px"}},jb={__name:"CouncilButton",setup(n){const{pips:e,councilActive:t,triggerGathering:i,deselectPip:s}=ms(),{connect:r,disconnect:o,send:a,messages:l}=Op(),c=Fe(""),u=Fe(!1);function f(){t.value?(a({type:"end_council"}),gb(),i(),u.value=!1,o()):(s(),r(),i(),pb(e.value,Or()),u.value=!0)}function h(){const p=c.value.trim();p&&(a({type:"start_council",prompt:p,agent_ids:e.value.map(_=>_.id)}),l.value.push({agent_name:"You",color:"#a0a0ff",content:p}),c.value="",u.value=!1)}return(p,_)=>(we(),Ce("div",qb,[W("button",{class:Lt(["council-btn",{active:me(t)}]),onClick:f},Ve(me(t)?"End Council":"Summon the Council"),3),u.value&&me(t)?(we(),Ce("div",Yb,[Gn(W("input",{"onUpdate:modelValue":_[0]||(_[0]=v=>c.value=v),type:"text",placeholder:"What shall the council discuss?",style:{width:"250px"},onKeydown:Os(h,["enter"])},null,544),[[Ks,c.value]]),W("button",{class:"send-btn",onClick:h},"Ask")])):Je("",!0)]))}},Kb={class:"intro-wrap"},Zb={class:"build-info"},Jb={class:"build-meta"},Qb=5600,eE={__name:"NebulaIntro",emits:["done"],setup(n,{emit:e}){const t=e,i=Fe(null);let s=null,r=null,o=null,a=null,l=null,c=0;const u="4/24/2026, 8:55:44 AM",f="feat: add decoration mode and house editor to pips",h=`v0.1.0-${f.substring(0,7)}`;function p(){t("done")}function _(v){l=requestAnimationFrame(_);const m=v-c,d=Math.min(1,m/Qb);a&&(a.rotation.z+=9e-4,a.rotation.y+=35e-5);const T=.5+d*6.5;o&&(o.position.z-=T,o.fov=65+d*55,o.updateProjectionMatrix()),s&&r&&o&&s.render(r,o)}return Ta(()=>{const v=window.innerWidth,m=window.innerHeight;s=new pp({antialias:!0,alpha:!0}),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(v,m),i.value.appendChild(s.domElement),r=new mp,r.fog=new Ua(590624,.035),o=new mn(65,v/m,.1,900),o.position.set(0,0,120);const d=13e3,T=new Float32Array(d*3),S=new Float32Array(d*3),g=new Ye(7329791),k=new Ye(14450175),D=new Ye(16751772),P=new Ye;for(let M=0;M<d;M++){const N=M*3,ee=30+Math.random()*220,q=Math.random()*Math.PI*2,Y=(Math.random()-.5)*120;T[N]=Math.cos(q)*ee,T[N+1]=Y,T[N+2]=Math.sin(q)*ee-Math.random()*380;const ae=Math.random();ae<.35?P.copy(g).lerp(k,Math.random()):ae<.7?P.copy(k).lerp(D,Math.random()):P.copy(D).lerp(g,Math.random()),S[N]=P.r,S[N+1]=P.g,S[N+2]=P.b}const U=new cn;U.setAttribute("position",new Tn(T,3)),U.setAttribute("color",new Tn(S,3));const b=new _p({size:1.35,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.9});a=new kS(U,b),r.add(a),c=performance.now(),_(c)}),Zr(()=>{var v;l&&cancelAnimationFrame(l),((v=s==null?void 0:s.domElement)==null?void 0:v.parentNode)===i.value&&i.value.removeChild(s.domElement),s==null||s.dispose()}),(v,m)=>(we(),Ce("div",Kb,[W("div",Zb,[W("span",{class:"glitch-text","data-text":h},"SYSTEM BUILD: "+Ve(h)),W("span",Jb,"// "+Ve(me(u))+" // "+Ve(me(f)),1)]),W("div",{ref_key:"container",ref:i,class:"intro-canvas"},null,512),W("div",{class:"intro-overlay",onClick:p},[m[4]||(m[4]=is('<div class="asian-bg asian-bg-a" data-v-5c40a46b>グレイドネットワーク</div><div class="asian-bg asian-bg-b" data-v-5c40a46b><span data-v-5c40a46b>接</span><span data-v-5c40a46b>続</span><span data-v-5c40a46b>中</span><span data-v-5c40a46b>…</span></div><div class="asian-bg asian-bg-c" data-v-5c40a46b><span data-v-5c40a46b>創</span><span data-v-5c40a46b>造</span><span data-v-5c40a46b>世</span><span data-v-5c40a46b>界</span></div><div class="asian-bg asian-bg-d" data-v-5c40a46b>글레이드 네트워크 • 에이전트 허브</div><div class="asian-bg asian-bg-e" data-v-5c40a46b>龍 • 風 • 光</div><div class="asian-bg asian-bg-f" data-v-5c40a46b> ネットワーク接続中 ··· グレイド世界へようこそ ··· エージェント待機中 ···  ネットワーク接続中 ··· グレイド世界へようこそ ··· エージェント待機中 ···  </div><div class="intro-title-wrap" data-v-5c40a46b><div class="title-layers" data-v-5c40a46b><div class="title-layer layer-asian layer-3" data-v-5c40a46b>グレイド・ネットワークへようこそ</div><div class="title-layer layer-asian layer-2" data-v-5c40a46b>グレイド・ネットワークへようこそ</div><div class="title-layer layer-asian layer-1" data-v-5c40a46b>グレイド・ネットワークへようこそ</div><div class="title-layer layer-english" data-text="WELCOME TO THE GLADE NETWORK" data-v-5c40a46b>WELCOME TO THE GLADE NETWORK</div></div></div>',7)),W("div",{class:"intro-text"},[m[0]||(m[0]=wt(" Welcome to Pips, your interactive portfolio and project management universe, visualized as a lush, 3D environment. ",-1)),m[1]||(m[1]=W("br",null,null,-1)),W("span",{style:{color:"#92e0ff","font-weight":"700","font-size":"11px",opacity:"0.8"}},"[ SYSTEM VERSION: "+Ve(h)+" ]"),m[2]||(m[2]=W("br",null,null,-1)),m[3]||(m[3]=wt(` Here, your digital projects are represented as dynamic island worlds called Glades. Each Glade is inhabited by AI agents, or "Pips," dedicated to specific roles within your teams. You can oversee operations, brainstorm with agents, and build out your team's infrastructure all in real-time. Step into the vortex and watch your projects come to life! `,-1))]),W("button",{class:"intro-skip",onClick:p},"Enter Network")])]))}},tE=Na(eE,[["__scopeId","data-v-5c40a46b"]]),nE={class:"header-controls"},iE=["disabled"],sE={key:0,class:"prompt"},rE={key:1,class:"prompt"},oE={key:2,class:"prompt"},aE={key:3,class:"prompt"},lE=["innerHTML"],cE={class:"header-controls"},uE={key:0,class:"prompt"},fE={key:1,class:"prompt"},dE={key:2,class:"prompt"},hE={key:3,class:"prompt"},pE=["innerHTML"],mE={__name:"TerminalWindow",props:{docked:{type:Boolean,default:!0},visible:{type:Boolean,default:!0}},setup(n){const{terminalOpen:e,toggleTerminal:t,activeGlade:i,pips:s,gladeSlots:r,selectGladeSlot:o,spawnDynamicGlade:a,removePip:l,placeFarmBlock:c,createPip:u,selectPip:f,openChat:h,feedPip:p,hydratePip:_,equipHat:v,setMode:m,showToast:d,triggerFxPulse:T}=ms(),S=Fe(""),g=Fe([{type:"system",content:"PIPS OS v1.0.4 - Initializing..."},{type:"system",content:"Connection established to The Glade Collective."},{type:"system",content:'Type "help" for a list of commands.'}]),k=Fe(null),D=Fe(null),P=Fe([]),U=Fe(-1),b=Fe("");function M(){var Z;(Z=k.value)==null||Z.focus()}function N(){if(!e.value)return;const Z=document.activeElement;Z&&(Z.tagName==="INPUT"||Z.tagName==="TEXTAREA")||qn(()=>M())}En(e,Z=>{Z&&qn(()=>M())});const ee=()=>{qn(()=>{D.value&&(D.value.scrollTop=D.value.scrollHeight)})};async function q(){var tt,le,Me,te;const Z=S.value.trim();if(!Z)return;P.value.push(Z),U.value=-1,b.value="",g.value.push({type:"user",content:Z});const[j,...F]=Z.split(" ");S.value="";const ye=V=>s.value.find(Q=>Q.id===V)||null,Se=V=>`${V.name} [${V.id}] Lv.${V.level||1} (${V.provider||"glade"}/${V.model||"native"}) @${V.gladeId}`,Le=V=>String(V).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Pe=V=>{switch((V||"").toLowerCase()){case"agents":return"agents [--json]  - List all pips across all glades (use --json for copy/paste)";case"ceremony":return"ceremony [claude|openai|ollama]  - Run a funny connection ritual + real integration test";case"select":return"select [pip_id]  - Select a pip (opens overlay target)";case"talk":return"talk [pip_id]    - Select a pip and open chat";case"feed":return"feed [pip_id]    - Feed a pip (gift + reaction)";case"hydrate":return"hydrate [pip_id] - Hydrate a pip (gift + reaction)";case"hat":return"hat [pip_id] [wizard_hat|hard_hat|beret|crown]  - Equip a hat";case"rm":return"rm [pip_id] [--force]  - Remove a pip (requires --force)";case"goto":return"goto [pip_id]    - Teleport near a pip";case"mode":return"mode [explore|build|playful|wizard|about]  - Set mode";case"ls":return"ls               - List pips in active glade";default:return"help [cmd]        - Show command help (e.g. help agents)"}};switch(j.toLowerCase()){case"help":F[0]?g.value.push({type:"system",content:Pe(F[0])}):(g.value.push({type:"system",content:"Available commands:"}),g.value.push({type:"system",content:"  "+Pe("ls")}),g.value.push({type:"system",content:"  "+Pe("agents")}),g.value.push({type:"system",content:"  "+Pe("ceremony")}),g.value.push({type:"system",content:"  "+Pe("select")}),g.value.push({type:"system",content:"  "+Pe("talk")}),g.value.push({type:"system",content:"  "+Pe("feed")}),g.value.push({type:"system",content:"  "+Pe("hydrate")}),g.value.push({type:"system",content:"  "+Pe("hat")}),g.value.push({type:"system",content:"  "+Pe("goto")}),g.value.push({type:"system",content:"  "+Pe("mode")}),g.value.push({type:"system",content:"  "+Pe("rm")}),g.value.push({type:"system",content:"  cd [index]         - Select glade by index (1-8)"}),g.value.push({type:"system",content:"  pip [name] [color] - Create a new pip here"}),g.value.push({type:"system",content:"  glade [name] [theme] - Create a new dynamic glade"}),g.value.push({type:"system",content:"  build [type] [x] [z] - Place a farm block"}),g.value.push({type:"system",content:"  tp [x] [z]         - Teleport to world coordinates"}),g.value.push({type:"system",content:"  whoami             - Show current session info"}),g.value.push({type:"system",content:"  claude [prompt]    - Ask The Architect to modify the world"}),g.value.push({type:"system",content:"  clear              - Clear terminal history"}),g.value.push({type:"system",content:"  exit               - Close terminal"}));break;case"ceremony":{const oe=(F[0]||"claude").toLowerCase(),X=oe==="claude"?"anthropic":oe,y=X==="anthropic"?"claude-3-haiku-20240307":X==="openai"?"gpt-4o-mini":X==="ollama"?"llama3":null;if(!y){g.value.push({type:"error",content:`Unknown ceremony target: ${Le(oe)} (try: ceremony claude)`});break}g.value.push({type:"system",content:":: BEGIN RITUAL ::"}),g.value.push({type:"system",content:"You place a tiny candle on the keyboard. The keys glow softly."}),g.value.push({type:"system",content:"Step 1/3: Whisper the sacred env var into existence:"}),g.value.push({type:"system",content:"  LLM_API_KEY=******** (set this in your backend .env / environment)"}),g.value.push({type:"system",content:"Step 2/3: Offer a single token to the void..."}),ee();let x=null;try{x=await(await fetch("/api/integrations/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({provider:X,model:y})})).json()}catch(I){x={ok:!1,error:String(I)}}if(!(x!=null&&x.ok)){g.value.push({type:"error",content:"The portal fizzles. The air smells like unconfigured secrets."}),g.value.push({type:"error",content:`Test failed: ${Le((x==null?void 0:x.error)||"Unknown error")}`}),g.value.push({type:"system",content:"Tip: set backend env `LLM_API_KEY`, restart backend, then re-run `ceremony claude`."});break}if(g.value.push({type:"assistant",content:`A sigil appears: ${X.toUpperCase()} · ${Le(y)}`}),g.value.push({type:"system",content:"Step 3/3: The Glade accepts the pact. A new sprout-agent emerges."}),d(`${X==="anthropic"?"Claude":X} connected`),T(),i.value){const I=X==="anthropic"?"Claude Sprout":`${X} Sprout`;u(I,"#d185ff",i.value.center.x+(Math.random()-.5)*4,i.value.center.z+(Math.random()-.5)*4,"Summoned by ceremony. Polite. Slightly dramatic. Extremely helpful.",i.value.id,X,y)}g.value.push({type:"system",content:":: RITUAL COMPLETE ::"});break}case"ls":const V=s.value.filter(oe=>{var X;return oe.gladeId===((X=i.value)==null?void 0:X.id)});g.value.push({type:"system",content:`Pips in ${((tt=i.value)==null?void 0:tt.name)||"Unknown"}:`}),V.length===0?g.value.push({type:"system",content:"  (No pips found)"}):V.forEach(oe=>{g.value.push({type:"system",content:`  > ${Se(oe)}`})});break;case"agents":{if(F.includes("--json")){const I=s.value.map($=>({id:$.id,name:$.name,gladeId:$.gladeId,provider:$.provider,model:$.model,level:$.level,status:$.status,position_x:$.position_x,position_z:$.position_z}));g.value.push({type:"system",content:`<pre style="white-space: pre-wrap; margin: 0;">${Le(JSON.stringify(I,null,2))}</pre>`});break}g.value.push({type:"system",content:"All agents (pips):"});const X=new Map;for(const I of s.value){const $=I.gladeId||"unknown";X.has($)||X.set($,[]),X.get($).push(I)}const y=I=>{var $;return(($=r.value.find(se=>se.id===I))==null?void 0:$.name)||I},x=Array.from(X.keys()).sort((I,$)=>y(I).localeCompare(y($)));if(x.length===0){g.value.push({type:"system",content:"  (No pips found)"});break}for(const I of x)g.value.push({type:"system",content:`- ${y(I)} (${I})`}),X.get(I).forEach($=>{g.value.push({type:"system",content:`    > ${Se($)}`})});break}case"cd":const Q=parseInt(F[0])-1;!isNaN(Q)&&r.value[Q]?(o(Q),g.value.push({type:"system",content:`Navigated to ${r.value[Q].name}.`})):g.value.push({type:"error",content:"Invalid glade index."});break;case"pip":const fe=F[0]||"Nomad",De=F[1]||"#ffffff";i.value&&(u(fe,De,i.value.center.x+(Math.random()-.5)*4,i.value.center.z+(Math.random()-.5)*4,"Born from the command line.",i.value.id,"glade","terminal-born"),g.value.push({type:"system",content:`Spawned pip "${fe}" in ${i.value.name}.`}));break;case"rm":{const oe=F.includes("--force"),X=F.find(y=>y!=="--force");if(!X){g.value.push({type:"error",content:"Usage: rm [pip_id] --force"});break}if(!oe){g.value.push({type:"error",content:`Refusing to remove ${X}. Re-run: rm ${X} --force`});break}l(X)?g.value.push({type:"system",content:`Pip ${X} removed successfully.`}):g.value.push({type:"error",content:`Pip ${X} not found.`})}break;case"select":{const oe=F[0],X=ye(oe);if(!X){g.value.push({type:"error",content:`Pip ${oe} not found.`});break}f(X),g.value.push({type:"system",content:`Selected: ${Se(X)}`});break}case"talk":{const oe=F[0],X=ye(oe);if(!X){g.value.push({type:"error",content:`Pip ${oe} not found.`});break}f(X),h(),g.value.push({type:"system",content:`Chat opened with: ${Se(X)}`});break}case"feed":{const oe=F[0];if(!oe){g.value.push({type:"error",content:"Usage: feed [pip_id]"});break}p(oe)?g.value.push({type:"system",content:`Fed ${oe}.`}):g.value.push({type:"error",content:`Pip ${oe} not found.`});break}case"hydrate":{const oe=F[0];if(!oe){g.value.push({type:"error",content:"Usage: hydrate [pip_id]"});break}_(oe)?g.value.push({type:"system",content:`Hydrated ${oe}.`}):g.value.push({type:"error",content:`Pip ${oe} not found.`});break}case"hat":{const oe=F[0],X=F[1];if(!oe||!X){g.value.push({type:"error",content:"Usage: hat [pip_id] [wizard_hat|hard_hat|beret|crown]"});break}const y=v(oe,{id:X});g.value.push({type:y?"system":"error",content:y?`Equipped ${X} on ${oe}.`:`Failed to equip hat on ${oe}.`});break}case"mode":{const oe=F[0];if(!oe){g.value.push({type:"error",content:"Usage: mode [explore|build|playful|wizard|about]"});break}const X=m(oe);g.value.push({type:X?"system":"error",content:X?`Mode set: ${oe}`:`Invalid mode: ${oe}`});break}case"goto":{const oe=F[0],X=ye(oe);if(!X||X.position_x===void 0){g.value.push({type:"error",content:`Pip ${oe} not found (or has no position).`});break}Wr(()=>Promise.resolve().then(()=>Ad),void 0,import.meta.url).then(y=>{y.teleportNearTarget(X.position_x,X.position_z),g.value.push({type:"system",content:`Teleported near ${X.name}.`}),ee()});break}case"glade":const Xe=F[0]||"New Sector",R=F[1]||"Default";a(Xe,R),g.value.push({type:"system",content:`Dynamic glade "${Xe}" initialized at center spatial coordinates.`});break;case"build":const O=F[0],A=parseFloat(F[1])||((le=i.value)==null?void 0:le.center.x)||0,he=parseFloat(F[2])||((Me=i.value)==null?void 0:Me.center.z)||0;c(O,A,he)?g.value.push({type:"system",content:`Placed ${O} at (${A.toFixed(1)}, ${he.toFixed(1)}).`}):g.value.push({type:"error",content:`Failed to place ${O}. Check if position is within glade zone.`});break;case"teleport":case"tp":const ie=parseFloat(F[0]),ne=parseFloat(F[1]);!isNaN(ie)&&!isNaN(ne)?Wr(()=>Promise.resolve().then(()=>Ad),void 0,import.meta.url).then(oe=>{oe.teleportNearTarget(ie,ne),g.value.push({type:"system",content:`Teleported to sequence coordinates (${ie}, ${ne}).`})}):g.value.push({type:"error",content:"Usage: tp [x] [z]"});break;case"clear":g.value=[{type:"system",content:"Terminal history cleared."}];break;case"whoami":g.value.push({type:"system",content:"USER: Architect_01"}),g.value.push({type:"system",content:"PRIVILEGE: ROOT"}),g.value.push({type:"system",content:`LOCATION: ${((te=i.value)==null?void 0:te.id)||"Unknown"}`});break;case"exit":t();break;case"claude":const de=F.join(" ");if(!de){g.value.push({type:"error",content:"No prompt provided for Claude."});break}g.value.push({type:"system",content:">>> Pinging The Glade Architect..."}),await ae(de);break;default:g.value.push({type:"error",content:`Command not found: ${j}`})}ee()}function Y(Z){if(Z.key==="ArrowUp"){if(P.value.length===0)return;Z.preventDefault(),U.value===-1?(b.value=S.value,U.value=P.value.length-1):U.value=Math.max(0,U.value-1),S.value=P.value[U.value]||"",qn(()=>{var j,F;return(F=(j=k.value)==null?void 0:j.setSelectionRange)==null?void 0:F.call(j,S.value.length,S.value.length)})}else if(Z.key==="ArrowDown"){if(P.value.length===0||U.value===-1)return;Z.preventDefault(),U.value++,U.value>=P.value.length?(U.value=-1,S.value=b.value):S.value=P.value[U.value]||"",qn(()=>{var j,F;return(F=(j=k.value)==null?void 0:j.setSelectionRange)==null?void 0:F.call(j,S.value.length,S.value.length)})}}async function ae(Z){try{const j=await fetch("/api/agents/terminal-agent/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:Z})});if(!j.ok){setTimeout(()=>{var Se,Le,Pe;g.value.push({type:"assistant",content:'I am simulating a world change. I see you want to modify The Glade. I have spawned a special "AI Observation Pip" for you.'});const ye={id:`pip-ai-${Date.now()}`,name:"Claude Shadow",color:"#d185ff",personality:"A fragment of Claude in the world.",provider:"anthropic",model:"claude-3-opus",status:"idle",position_x:((Se=i.value)==null?void 0:Se.center.x)||0,position_z:((Le=i.value)==null?void 0:Le.center.z)||0,gladeId:((Pe=i.value)==null?void 0:Pe.id)||"glade-wild"};s.value.push(ye),ee()},1e3);return}const F=await j.json();g.value.push({type:"assistant",content:F.content}),F.content.includes("```json")}catch{g.value.push({type:"error",content:"Network error or backend unreachable. Using local simulation mode."}),setTimeout(()=>{g.value.push({type:"assistant",content:'Claude Local: "I have acknowledged your command. The world is yours to shape."'}),ee()},800)}}return(Z,j)=>n.visible?(we(),Ce(rt,{key:0},[n.docked?(we(),Ce("div",{key:0,class:Lt(["terminal-docked panel",{collapsed:!me(e)}]),onClick:j[5]||(j[5]=fs(()=>{},["stop"])),onMouseenter:N},[W("div",{class:"terminal-header",onMousedown:j[2]||(j[2]=F=>Z.$emit("drag-start"))},[j[14]||(j[14]=W("div",{class:"header-led"},null,-1)),j[15]||(j[15]=W("div",{class:"header-title"},"PIPS_TERMINAL_ROOT@THE_GLADE",-1)),W("div",nE,[W("button",{onClick:j[0]||(j[0]=(...F)=>me(t)&&me(t)(...F))},Ve(me(e)?"−":"+"),1),W("button",{onClick:j[1]||(j[1]=F=>g.value=[]),disabled:!me(e)},"□",8,iE)])],32),me(e)?(we(),Ce(rt,{key:0},[W("div",{class:"terminal-history",ref_key:"historyRef",ref:D},[(we(!0),Ce(rt,null,hn(g.value,(F,ye)=>(we(),Ce("div",{key:ye,class:Lt(["line",F.type])},[F.type==="user"?(we(),Ce("span",sE,"$")):Je("",!0),F.type==="system"?(we(),Ce("span",rE,"#")):Je("",!0),F.type==="assistant"?(we(),Ce("span",oE,"CLAUDE>")):Je("",!0),F.type==="error"?(we(),Ce("span",aE,"ERR!")):Je("",!0),W("span",{class:"content",innerHTML:F.content},null,8,lE)],2))),128))],512),W("div",{class:"terminal-input-row",onClick:M},[j[16]||(j[16]=W("span",{class:"prompt-arrow"},">",-1)),Gn(W("input",{ref_key:"inputRef",ref:k,"onUpdate:modelValue":j[3]||(j[3]=F=>S.value=F),type:"text",spellcheck:"false",autofocus:"",onKeydown:[Os(q,["enter"]),Y,j[4]||(j[4]=Os((...F)=>me(t)&&me(t)(...F),["esc"]))]},null,544),[[Ks,S.value]]),j[17]||(j[17]=W("div",{class:"cursor-block"},null,-1))])],64)):Je("",!0)],34)):(we(),Ce(rt,{key:1},[me(e)?(we(),Ce("div",{key:0,class:"terminal-overlay",onClick:j[13]||(j[13]=fs((...F)=>me(t)&&me(t)(...F),["self"]))},[W("div",{class:"terminal-container",onClick:j[12]||(j[12]=fs(()=>{},["stop"])),onMouseenter:N},[W("div",{class:"terminal-header",onMousedown:j[9]||(j[9]=F=>Z.$emit("drag-start"))},[j[18]||(j[18]=W("div",{class:"header-led"},null,-1)),j[19]||(j[19]=W("div",{class:"header-title"},"PIPS_TERMINAL_ROOT@THE_GLADE",-1)),W("div",cE,[W("button",{onClick:j[6]||(j[6]=(...F)=>me(t)&&me(t)(...F))},"_"),W("button",{onClick:j[7]||(j[7]=F=>g.value=[])},"□"),W("button",{class:"close",onClick:j[8]||(j[8]=(...F)=>me(t)&&me(t)(...F))},"×")])],32),W("div",{class:"terminal-history",ref_key:"historyRef",ref:D},[(we(!0),Ce(rt,null,hn(g.value,(F,ye)=>(we(),Ce("div",{key:ye,class:Lt(["line",F.type])},[F.type==="user"?(we(),Ce("span",uE,"$")):Je("",!0),F.type==="system"?(we(),Ce("span",fE,"#")):Je("",!0),F.type==="assistant"?(we(),Ce("span",dE,"CLAUDE>")):Je("",!0),F.type==="error"?(we(),Ce("span",hE,"ERR!")):Je("",!0),W("span",{class:"content",innerHTML:F.content},null,8,pE)],2))),128))],512),W("div",{class:"terminal-input-row",onClick:M},[j[20]||(j[20]=W("span",{class:"prompt-arrow"},">",-1)),Gn(W("input",{ref_key:"inputRef",ref:k,"onUpdate:modelValue":j[10]||(j[10]=F=>S.value=F),type:"text",spellcheck:"false",autofocus:"",onKeydown:[Os(q,["enter"]),Y,j[11]||(j[11]=Os((...F)=>me(t)&&me(t)(...F),["esc"]))]},null,544),[[Ks,S.value]]),j[21]||(j[21]=W("div",{class:"cursor-block"},null,-1))])],32)])):Je("",!0)],64))],64)):Je("",!0)}},gE=Na(mE,[["__scopeId","data-v-e8b6b1fe"]]),_E={class:"floating-container"},vE={key:0,class:"interaction-prompt"},xE={class:"prompt-pip-info"},yE={class:"prompt-stats"},ME={class:"stat-bar"},SE={class:"stat-bar"},bE={key:1,class:"tutorial-overlay"},EE={key:0,class:"tut-card"},TE={key:1,class:"tut-card"},wE={key:2,class:"tut-card highlight"},AE={key:3,class:"tut-card"},CE={class:"hotbar-wrap"},RE=["onClick"],PE=["title"],DE={class:"slot-number"},LE={class:"mode-chips"},IE=["onClick"],UE={class:"status-chip"},NE={class:"status-meta"},FE={class:"behavior-list"},OE={class:"keycap behavior-key"},BE={class:"last-action"},kE={key:0,class:"last-action"},zE={class:"behavior-list"},HE=["onClick"],VE={class:"last-action",style:{color:"#ffccf9","font-weight":"700"}},GE={style:{"font-size":"11px","font-weight":"700",color:"#fff"}},WE={style:{"font-size":"10px",opacity:"0.8"}},XE={class:"wizard-mockup",style:{"margin-top":"12px",display:"flex","flex-direction":"column",gap:"8px"}},$E={class:"trend-header"},qE={class:"trend-track"},YE={class:"mini-map"},jE=["title","onClick"],KE={class:"panel-header",style:{"margin-bottom":"6px"}},ZE={style:{display:"flex",gap:"8px","align-items":"center","margin-left":"auto","margin-right":"10px"}},JE={style:{"font-size":"11px",opacity:"0.85",display:"flex","align-items":"center",gap:"6px",cursor:"pointer"}},QE={style:{"font-size":"11px",opacity:"0.85",display:"flex","align-items":"center",gap:"6px",cursor:"pointer"}},eT={key:0,class:"roster-row"},tT=["onClick"],nT={class:"slot-name"},iT={class:"slot-theme"},sT={key:1,style:{"margin-top":"10px"}},rT={key:0,style:{opacity:"0.6","font-size":"12px"}},oT={key:1,style:{display:"flex","flex-direction":"column",gap:"6px"}},aT={style:{flex:"1","min-width":"0"}},lT={style:{"font-size":"12px","font-weight":"800",color:"#fff","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},cT={style:{"font-size":"10px",opacity:"0.75","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},uT=["onClick"],fT={key:0,style:{"font-size":"11px",opacity:"0.65"}},dT={key:5,class:"about-overlay panel game-panel"},hT={class:"about-content"},pT={key:7,class:"gift-toast"},Rl=260,mT={__name:"App",setup(n){const e=Fe(null),t=Fe(null),{dragStyles:i,onMouseDown:s}=aa(e,{x:0,y:0},"controls-panel-pos"),{dragStyles:r,onMouseDown:o}=aa(t,{x:0,y:0},"insights-panel-pos"),a=Fe(!1),l=Fe(!1),c=Fe(!1),u=Fe({showHud:!0,showIntel:!0,showDock:!0,showTerminal:!0,terminalDocked:!0,sfx:!1,vignettePulse:!1,opacity:.75}),f=localStorage.getItem("pips-ui-settings");if(f)try{u.value={...u.value,...JSON.parse(f)}}catch{}function h(){localStorage.setItem("pips-ui-settings",JSON.stringify(u.value))}const{currentMode:p,modeDefinitions:_,buildMode:v,playfulMode:m,selectedTool:d,farmTools:T,farmStats:S,farmSpawnNotice:g,activeGlade:k,gladeSlots:D,gladeSummaries:P,playerPosition:U,capturedFairies:b,inventory:M,selectedSlot:N,onboardingStep:ee,feedPip:q,selectGladeSlot:Y,setMode:ae,cycleMode:Z,toggleBuildMode:j,decorMode:F,decorTools:ye,selectToolByKey:Se,spawnDynamicGlade:Le,terminalOpen:Pe,toggleTerminal:tt,nearbyPip:le,hydratePip:Me,floatingTexts:te,toast:V,fxPulse:Q,pips:fe,selectPip:De,openChat:Xe}=ms(),R=Fe(null),O=Fe(!0),A=Fe(""),he=Fe("Default"),ie=Fe("ollama"),ne=Fe("claude-3-opus-20240229"),de=Rl/2,oe=Gt(()=>{const ge=ee.value;return ge===0||ge===1||ge===2||ge===3||ge===4}),X=Gt(()=>P.value.map(ge=>{const C=Math.max(0,1-Math.min(1,ge.nextSpawnIn/45)),G=ge.growthRate*.55+ge.pips*.16+ge.farmBlocks*.1+C*.45,E=Math.max(.12,Math.min(1,G/3)),z=E>.72?"Rising":E>.45?"Steady":"Slow";return{...ge,score:E,label:z}}));function y(ge){if(ge.metaKey||ge.ctrlKey||ge.altKey||ge.target.tagName==="INPUT"||ge.target.tagName==="TEXTAREA")return;if(ge.code==="Backquote"){ge.shiftKey?(u.value.terminalDocked=!u.value.terminalDocked,h()):tt(),ge.preventDefault();return}if(Pe.value)return;if(ge.code==="Tab"){ge.preventDefault(),Z();return}if(ge.code==="KeyB"){j();return}if(ge.code==="KeyQ"){cycleSlot(-1);return}if(ge.code==="KeyR"){cycleSlot(1);return}const C=ge.key;C.charCodeAt(0);const G=Number(C);if(G>=1&&G<=9){v.value&&G<=5||F.value&&G<=6?Se(C):N.value=G-1;return}else if(C==="0"){N.value=9;return}if(C.toLowerCase()==="c"&&F.value){Se("c");return}if((C==="f"||C==="F")&&le.value){q(le.value.id);return}if((C==="h"||C==="H")&&le.value){Me(le.value.id);return}}function x(ge){cycleSlot(ge.deltaY>0?1:-1)}Ta(()=>{window.addEventListener("keydown",y),window.addEventListener("wheel",x)}),Zr(()=>{window.removeEventListener("keydown",y),window.removeEventListener("wheel",x)});function I(){var ge;(ge=R.value)==null||ge.focusInput()}function $(ge){const C=Y(ge);C&&Ep(C.center.x,C.center.z)}function se(ge){const C=D.value.findIndex(G=>G.id===ge);C!==-1&&$(C)}function re(){O.value=!1}function be(ge){return(ge+de)/Rl*100}function ve(ge){return(ge+de)/Rl*100}const Ee=Gt(()=>{const ge=hu();return!ge||!te.value.length?[]:te.value.map(C=>{const G=new H(C.x,.95,C.z);return G.project(ge),G.z>1?null:{...C,left:(G.x*.5+.5)*100,top:(-G.y*.5+.5)*100}}).filter(C=>C!==null)}),Ge=Gt(()=>M.value[N.value]||null),xe=Gt(()=>{const ge=Ge.value;return ge?ge.type==="weapon"?"Click to bonk (sparkly pop)":ge.id==="capture_orb"?"Click to toss (capture effect)":ge.id==="balloon_cannon"?"Click to pop a balloon seed":ge.id==="firework_launcher"?"Click to launch fireworks":ge.id==="fairy_summoner"?"Click to summon a fairy":ge.type==="hat"?"Click a Pip to equip":ge.type==="food"?"Click a Pip to feed":"Click to use":"Scroll / Q / R to select an item"}),Re=Gt(()=>fe.value.filter(ge=>{var C;return ge.gladeId===((C=k.value)==null?void 0:C.id)}));function Be(ge){De(ge),Xe()}function $e(){try{const ge=new(window.AudioContext||window.webkitAudioContext),C=ge.createOscillator(),G=ge.createGain();C.type="triangle",C.frequency.value=660,G.gain.value=1e-4,C.connect(G),G.connect(ge.destination),C.start(),G.gain.exponentialRampToValueAtTime(.04,ge.currentTime+.01),G.gain.exponentialRampToValueAtTime(1e-4,ge.currentTime+.11),C.frequency.exponentialRampToValueAtTime(880,ge.currentTime+.08),C.stop(ge.currentTime+.12),C.onended=()=>ge.close()}catch{}}const Ae=Fe(0);return En(()=>Q.value,()=>{u.value.vignettePulse&&Ae.value++,u.value.sfx&&$e()}),(ge,C)=>{var G,E,z,B;return we(),Ce(rt,null,[en(vb),en(kb,{onFocusChat:I}),en($b,{ref_key:"chatWindow",ref:R},null,512),en(jb),en(gE,{docked:u.value.terminalDocked,visible:u.value.showTerminal},null,8,["docked","visible"]),W("div",{class:Lt(["crosshair",{active:!!me(le)}])},null,2),W("div",_E,[(we(!0),Ce(rt,null,hn(Ee.value,L=>(we(),Ce("div",{key:L.id,class:"floating-text",style:St({left:L.left+"%",top:L.top+"%",color:L.color})},Ve(L.text),5))),128))]),me(le)?(we(),Ce("div",vE,[W("div",xE,[W("span",{class:"prompt-dot",style:St({backgroundColor:me(le).color})},null,4),W("strong",null,Ve(me(le).name),1)]),C[14]||(C[14]=is('<div class="prompt-keys" data-v-6513841e><div class="prompt-key-row" data-v-6513841e><span class="keycap" data-v-6513841e>F</span> Feed Fruit</div><div class="prompt-key-row" data-v-6513841e><span class="keycap" data-v-6513841e>H</span> Hydrate</div></div>',1)),W("div",yE,[W("div",ME,[W("div",{class:"stat-fill hunger",style:St({width:me(le).hunger+"%"})},null,4)]),W("div",SE,[W("div",{class:"stat-fill thirst",style:St({width:me(le).thirst+"%"})},null,4)])])])):Je("",!0),oe.value?(we(),Ce("div",bE,[me(ee)===0?(we(),Ce("div",EE,[...C[15]||(C[15]=[W("h2",null,"Welcome to the Glade!",-1),W("p",null,[wt("A giant "),W("strong",null,"Nebula"),wt(" has appeared to guide you.")],-1),W("p",null,"Watch it shrink and get ready...",-1)])])):Je("",!0),me(ee)===2?(we(),Ce("div",TE,[...C[16]||(C[16]=[W("p",null,[wt("Meet Nebula at the "),W("strong",null,"Infrastructure Forge"),wt("!")],-1),W("p",null,[wt("Use "),W("strong",null,"WASD"),wt(" to move and "),W("strong",null,"Shift"),wt(" to sprint.")],-1)])])):Je("",!0),me(ee)===3?(we(),Ce("div",wE,[...C[17]||(C[17]=[W("p",null,[wt("Nebula is hungry! Select the "),W("strong",null,"Pip Treat (5)"),wt(" from your hotbar and click on Nebula to feed it.")],-1)])])):Je("",!0),me(ee)===4?(we(),Ce("div",AE,[C[18]||(C[18]=W("p",null,"Great job! You've learned the basics.",-1)),W("button",{onClick:C[0]||(C[0]=L=>ee.value=5),class:"action-btn"},"Start Orchestration")])):Je("",!0)])):Je("",!0),W("div",CE,[(we(!0),Ce(rt,null,hn(me(M),(L,pe)=>(we(),Ce("div",{key:pe,class:Lt(["hotbar-slot",{active:me(N)===pe}]),onClick:_e=>N.value=pe},[L?(we(),Ce("span",{key:0,class:"item-icon",title:L.label},Ve(L.icon),9,PE)):Je("",!0),W("span",DE,Ve(pe+1),1)],10,RE))),128))]),u.value.showHud?(we(),Ce("div",{key:2,ref_key:"controlsPanelEl",ref:e,class:Lt(["controls-panel panel game-panel",{collapsed:l.value}]),style:St({...me(i)(),opacity:u.value.opacity})},[W("div",{class:"panel-header draggable",onMousedown:C[2]||(C[2]=(...L)=>me(s)&&me(s)(...L))},[C[19]||(C[19]=W("div",{class:"controls-title",style:{"margin-bottom":"0"}},"HUD",-1)),W("button",{class:"close-btn",onClick:C[1]||(C[1]=fs(L=>l.value=!l.value,["stop"]))},Ve(l.value?"+":"−"),1)],32),W("div",LE,[(we(!0),Ce(rt,null,hn(me(_),L=>(we(),Ce("button",{key:L.id,class:Lt(["mode-chip",{active:me(p)===L.id}]),onClick:pe=>me(ae)(L.id)},Ve(L.label),11,IE))),128))]),C[43]||(C[43]=is('<div class="controls-title behavior-title" data-v-6513841e>Controls</div><div class="wasd-grid" data-v-6513841e><span class="keycap key-w" data-v-6513841e>W</span><span class="keycap key-a" data-v-6513841e>A</span><span class="keycap key-s" data-v-6513841e>S</span><span class="keycap key-d" data-v-6513841e>D</span></div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Shift</span> Sprint</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Space</span> Jump</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Ctrl/C</span> Crouch</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>E</span> Release</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>1-9</span> Slots</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Q/R</span> Cycle Slot</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Wheel</span> Cycle Slot</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Tab</span> Modes</div>',10)),me(p)==="explore"?(we(),Ce(rt,{key:0},[C[20]||(C[20]=W("div",{class:"controls-title behavior-title"},"Explore",-1)),W("div",UE,Ve((G=me(k))==null?void 0:G.name),1),W("div",NE,Ve((E=me(k))==null?void 0:E.theme)+" · "+Ve((z=me(k))==null?void 0:z.project),1)],64)):me(p)==="build"?(we(),Ce(rt,{key:1},[C[27]||(C[27]=is('<div class="controls-title behavior-title" data-v-6513841e>Build</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>B</span> Toggle build</div><div class="control-line" data-v-6513841e>Click in district zone to place</div><div class="controls-title behavior-title" data-v-6513841e>Farm Tools</div>',4)),W("div",FE,[(we(!0),Ce(rt,null,hn(me(T),L=>(we(),Ce("div",{key:L.id,class:Lt(["behavior-row",{active:me(v)&&me(d)===L.id}])},[W("span",OE,Ve(L.key),1),W("span",null,Ve(L.label),1)],2))),128))]),W("div",BE,[C[21]||(C[21]=wt(" Tool: ",-1)),W("strong",null,Ve(me(d)),1),C[22]||(C[22]=W("br",null,null,-1)),C[23]||(C[23]=wt(" Cap: ",-1)),W("strong",null,Ve(me(S).capacity),1),C[24]||(C[24]=wt(" · Growth: ",-1)),W("strong",null,"x"+Ve(me(S).growthRate.toFixed(2)),1),C[25]||(C[25]=W("br",null,null,-1)),C[26]||(C[26]=wt(" Next spawn: ",-1)),W("strong",null,Ve(Math.ceil(me(S).nextSpawnIn))+"s",1)]),me(g)?(we(),Ce("div",kE,Ve(me(g)),1)):Je("",!0)],64)):me(F)?(we(),Ce(rt,{key:2},[C[28]||(C[28]=W("div",{class:"controls-title behavior-title"},"Decorate",-1)),C[29]||(C[29]=W("div",{class:"control-line"},"Transform the glade into a home",-1)),C[30]||(C[30]=W("div",{class:"controls-title behavior-title"},"Furniture & Props",-1)),W("div",zE,[(we(!0),Ce(rt,null,hn(me(ye),L=>(we(),Ce("div",{key:L.id,class:Lt(["behavior-row decor-row",{active:me(d)===L.id}]),onClick:pe=>me(Se)(L.key)},[W("span",{class:"keycap behavior-key",style:St({backgroundColor:L.color})},Ve(L.key),5),W("span",null,Ve(L.icon)+" "+Ve(L.label),1)],10,HE))),128))]),C[31]||(C[31]=W("div",{class:"last-action"},[wt(" Click on the island ground to place. Use "),W("strong",null,"'C'"),wt(" to clear. ")],-1))],64)):me(m)?(we(),Ce(rt,{key:3},[C[36]||(C[36]=is('<div class="controls-title behavior-title" data-v-6513841e>Playful</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Space</span> Rise</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Ctrl</span> Dive</div><div class="control-line" data-v-6513841e><span class="keycap key-wide" data-v-6513841e>Shift</span> Boost</div><div class="last-action" data-v-6513841e>Arcade flight tuning enabled.</div>',5)),W("div",VE,[wt(" ✨ Fairies Caught: "+Ve(me(b)),1),C[32]||(C[32]=W("br",null,null,-1)),W("span",GE,"Tool: "+Ve(((B=Ge.value)==null?void 0:B.label)||"Unarmed"),1),C[33]||(C[33]=W("br",null,null,-1)),W("span",WE,Ve(xe.value),1),C[34]||(C[34]=W("br",null,null,-1)),C[35]||(C[35]=W("span",{style:{"font-size":"10px",opacity:"0.8"}},"Right-Click to drop crate!",-1))])],64)):me(p)==="wizard"?(we(),Ce(rt,{key:4},[C[41]||(C[41]=W("div",{class:"controls-title behavior-title"},"Project Wizard",-1)),C[42]||(C[42]=W("div",{class:"control-line"},"Create a new Glade dynamically",-1)),W("div",XE,[Gn(W("input",{"onUpdate:modelValue":C[3]||(C[3]=L=>A.value=L),type:"text",placeholder:"Project Name",class:"chat-input",style:{width:"100%","border-radius":"4px"}},null,512),[[Ks,A.value]]),Gn(W("select",{"onUpdate:modelValue":C[4]||(C[4]=L=>he.value=L),class:"chat-input",style:{width:"100%","border-radius":"4px",padding:"4px",cursor:"pointer"}},[...C[37]||(C[37]=[is('<option value="Default" data-v-6513841e>Meadow Theme</option><option value="Cyber Land" data-v-6513841e>Cyber Theme</option><option value="Media Land" data-v-6513841e>Media Theme</option><option value="Cinema Land" data-v-6513841e>Cinema Theme</option><option value="Magic Land" data-v-6513841e>Magic Theme</option>',5)])],512),[[nf,he.value]]),C[39]||(C[39]=W("label",{style:{"font-size":"11px","margin-top":"4px",color:"#b9cbed"}},"Agent Provider:",-1)),Gn(W("select",{"onUpdate:modelValue":C[5]||(C[5]=L=>ie.value=L),class:"chat-input",style:{width:"100%","border-radius":"4px",padding:"4px",cursor:"pointer"}},[...C[38]||(C[38]=[W("option",{value:"anthropic"},"Anthropic (Claude)",-1),W("option",{value:"openai"},"OpenAI (GPT-4)",-1),W("option",{value:"ollama"},"Ollama (Local)",-1),W("option",{value:"glade"},"Glade (Mock)",-1)])],512),[[nf,ie.value]]),C[40]||(C[40]=W("label",{style:{"font-size":"11px","margin-top":"2px",color:"#b9cbed"}},"Model Name:",-1)),Gn(W("input",{"onUpdate:modelValue":C[6]||(C[6]=L=>ne.value=L),type:"text",placeholder:"claude-3-opus-20240229",class:"chat-input",style:{width:"100%","border-radius":"4px"}},null,512),[[Ks,ne.value]]),W("button",{class:"chat-send",style:{width:"100%","border-radius":"4px","margin-top":"8px"},onClick:C[7]||(C[7]=L=>me(Le)(A.value,he.value,ie.value,ne.value))},"Spawn Project")])],64)):Je("",!0)],6)):Je("",!0),u.value.showIntel?(we(),Ce("div",{key:3,ref_key:"insightsPanelEl",ref:t,class:Lt(["insights-panel panel game-panel",{collapsed:a.value}]),style:St({...me(r)(),opacity:u.value.opacity})},[W("div",{class:"panel-header draggable",onMousedown:C[9]||(C[9]=(...L)=>me(o)&&me(o)(...L))},[C[44]||(C[44]=W("div",{class:"controls-title",style:{"margin-bottom":"0"}},"District Intel",-1)),W("button",{class:"close-btn",onClick:C[8]||(C[8]=fs(L=>a.value=!a.value,["stop"]))},Ve(a.value?"+":"−"),1)],32),(we(!0),Ce(rt,null,hn(X.value,L=>{var pe;return we(),Ce("div",{key:L.id,class:Lt(["trend-row",{active:((pe=me(k))==null?void 0:pe.id)===L.id}])},[W("div",$E,[W("span",null,Ve(L.name),1),W("span",null,Ve(L.label),1)]),W("div",qE,[W("div",{class:"trend-fill",style:St({width:`${Math.round(L.score*100)}%`,backgroundColor:L.color})},null,4)])],2)}),128)),C[45]||(C[45]=W("div",{class:"controls-title",style:{"margin-top":"10px"}},"Map",-1)),W("div",YE,[(we(!0),Ce(rt,null,hn(me(D),L=>{var pe;return we(),Ce("button",{key:`mini-${L.id}`,class:Lt(["mini-dot",{active:((pe=me(k))==null?void 0:pe.id)===L.id}]),style:St({left:`${be(L.center.x)}%`,top:`${ve(L.center.z)}%`,backgroundColor:L.color}),title:`${L.name} (${L.theme})`,onClick:_e=>se(L.id)},null,14,jE)}),128)),W("div",{class:"mini-player",style:St({left:`${be(me(U).x)}%`,top:`${ve(me(U).z)}%`})},null,4)])],6)):Je("",!0),u.value.showDock?(we(),Ce("div",{key:4,class:Lt(["roster-dock panel game-panel",{collapsed:c.value}]),style:St({opacity:u.value.opacity})},[W("div",KE,[C[48]||(C[48]=W("div",{class:"controls-title",style:{"margin-bottom":"0"}},"District Dock",-1)),W("div",ZE,[W("label",JE,[Gn(W("input",{type:"checkbox","onUpdate:modelValue":C[10]||(C[10]=L=>u.value.sfx=L),onChange:h},null,544),[[ef,u.value.sfx]]),C[46]||(C[46]=wt(" SFX ",-1))]),W("label",QE,[Gn(W("input",{type:"checkbox","onUpdate:modelValue":C[11]||(C[11]=L=>u.value.vignettePulse=L),onChange:h},null,544),[[ef,u.value.vignettePulse]]),C[47]||(C[47]=wt(" Pulse ",-1))])]),W("button",{class:"close-btn",onClick:C[12]||(C[12]=fs(L=>c.value=!c.value,["stop"]))},Ve(c.value?"+":"−"),1)]),c.value?Je("",!0):(we(),Ce("div",eT,[(we(!0),Ce(rt,null,hn(me(D),(L,pe)=>{var _e;return we(),Ce("button",{key:L.id,class:Lt(["roster-slot",{active:((_e=me(k))==null?void 0:_e.id)===L.id}]),onClick:Oe=>$(pe)},[W("span",nT,Ve(L.name),1),W("span",iT,Ve(L.theme),1),C[49]||(C[49]=W("span",{class:"slot-action"},"Visit District",-1))],10,tT)}),128))])),c.value?Je("",!0):(we(),Ce("div",sT,[C[50]||(C[50]=W("div",{class:"controls-title",style:{"margin-bottom":"6px"}},"Agents Here",-1)),Re.value.length===0?(we(),Ce("div",rT,"No agents in this district.")):(we(),Ce("div",oT,[(we(!0),Ce(rt,null,hn(Re.value.slice(0,6),L=>(we(),Ce("div",{key:L.id,style:{display:"flex","align-items":"center",gap:"8px",background:"rgba(0,0,0,0.18)",padding:"6px 8px","border-radius":"8px"}},[W("span",{class:"prompt-dot",style:St({backgroundColor:L.color||"#e06060",width:"10px",height:"10px",borderRadius:"50%"})},null,4),W("div",aT,[W("div",lT,Ve(L.name),1),W("div",cT,Ve(L.provider||"glade")+" / "+Ve(L.model||"native"),1)]),W("button",{class:"send-btn",style:{padding:"6px 10px"},onClick:pe=>Be(L)},"Talk",8,uT)]))),128)),Re.value.length>6?(we(),Ce("div",fT," (+"+Ve(Re.value.length-6)+" more — use terminal `agents`) ",1)):Je("",!0)]))]))],6)):Je("",!0),me(p)==="about"?(we(),Ce("div",dT,[W("div",hT,[C[51]||(C[51]=is('<h2 style="font-size:24px;margin-bottom:24px;color:#f6e9ff;text-shadow:0 0 10px rgba(193,133,255,0.7);" data-v-6513841e>How Pips Connects to Agents</h2><p data-v-6513841e>Pips serves as a visual 3D interface for your underlying AI processes and project management backends. Think of each <strong data-v-6513841e>&quot;Pip&quot;</strong> as a dedicated socket or API connection to an LLM running either locally or in the cloud.</p><p data-v-6513841e>When you interact with a Pip, Pips takes your input and sends a payload to the backend server. The backend passes the project context and your prompt to the specialized LLM agent assigned to that Pip (like an Editor, or SysAdmin) for processing.</p><p data-v-6513841e>The response is streamed back to the frontend and displayed as chat bubbles natively in the world. By distributing these agents into distinct <strong data-v-6513841e>&quot;Glades&quot;</strong>, Pips allows you to visually orchestrate and containerize the context of multiple agents operating simultaneously across your projects!</p><div style="margin-top:24px;padding:12px;border:1px solid rgba(193,133,255,0.3);border-radius:8px;background:rgba(0,0,0,0.2);" data-v-6513841e><h3 style="font-size:14px;color:#c185ff;margin-bottom:8px;" data-v-6513841e>Latest Updates</h3><p style="font-size:13px;margin-bottom:8px;" data-v-6513841e>v1.1.0: Added agent speech bubbles, project notes, and conversation tracking.</p><a href="https://github.com/oooAHOYooo/mrg-stem/blob/main/pips/frontend/src/three/ReleaseNotes.md" target="_blank" style="color:#8be9ff;font-size:12px;text-decoration:none;" data-v-6513841e>View Full Release Notes</a></div>',5)),W("button",{class:"council-btn",style:{"margin-top":"32px"},onClick:C[13]||(C[13]=L=>me(ae)("explore"))},"Return to Network")])])):Je("",!0),O.value?(we(),Rh(tE,{key:6,onDone:re})):Je("",!0),me(V)?(we(),Ce("div",pT,Ve(me(V).text),1)):Je("",!0),u.value.vignettePulse?(we(),Ce("div",{class:"fx-vignette",key:Ae.value})):Je("",!0)],64)}}},gT=Na(mT,[["__scopeId","data-v-6513841e"]]);l_(gT).mount("#app");
