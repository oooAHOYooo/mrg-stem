(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ac(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},Fs=[],qn=()=>{},Sd=()=>!1,pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ma=n=>n.startsWith("onUpdate:"),$t=Object.assign,Cc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Cp=Object.prototype.hasOwnProperty,dt=(n,e)=>Cp.call(n,e),$e=Array.isArray,Os=n=>$r(n)==="[object Map]",Qs=n=>$r(n)==="[object Set]",pu=n=>$r(n)==="[object Date]",Qe=n=>typeof n=="function",Rt=n=>typeof n=="string",Yn=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",bd=n=>(_t(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Ed=Object.prototype.toString,$r=n=>Ed.call(n),Rp=n=>$r(n).slice(8,-1),Td=n=>$r(n)==="[object Object]",Rc=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Er=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Pp=/-\w/g,In=ga(n=>n.replace(Pp,e=>e.slice(1).toUpperCase())),Dp=/\B([A-Z])/g,Vi=ga(n=>n.replace(Dp,"-$1").toLowerCase()),wd=ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ia=ga(n=>n?`on${wd(n)}`:""),Wn=(n,e)=>!Object.is(n,e),ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ad=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},_a=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let mu;const va=()=>mu||(mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tt(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?Np(i):Tt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||_t(n))return n}const Lp=/;(?![^(]*\))/g,Ip=/:([^]+)/,Up=/\/\*[^]*?\*\//g;function Np(n){const e={};return n.replace(Up,"").split(Lp).forEach(t=>{if(t){const i=t.split(Ip);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Nt(n){let e="";if(Rt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Nt(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Fp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Op=Ac(Fp);function Cd(n){return!!n||n===""}function Bp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=er(n[i],e[i]);return t}function er(n,e){if(n===e)return!0;let t=pu(n),i=pu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Yn(n),i=Yn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?Bp(n,e):!1;if(t=_t(n),i=_t(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!er(n[o],e[o]))return!1}}return String(n)===String(e)}function Pc(n,e){return n.findIndex(t=>er(t,e))}const Rd=n=>!!(n&&n.__v_isRef===!0),Ge=n=>Rt(n)?n:n==null?"":$e(n)||_t(n)&&(n.toString===Ed||!Qe(n.toString))?Rd(n)?Ge(n.value):JSON.stringify(n,Pd,2):String(n),Pd=(n,e)=>Rd(e)?Pd(n,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ua(i,r)+" =>"]=s,t),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ua(t))}:Yn(e)?Ua(e):_t(e)&&!$e(e)&&!Td(e)?String(e):e,Ua=(n,e="")=>{var t;return Yn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class kp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function zp(){return on}let Mt;const Na=new WeakSet;class Dd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gu(this),Ud(this);const e=Mt,t=Un;Mt=this,Un=!0;try{return this.fn()}finally{Nd(this),Mt=e,Un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ic(e);this.deps=this.depsTail=void 0,gu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let Ld=0,Tr,wr;function Id(n,e=!1){if(n.flags|=8,e){n.next=wr,wr=n;return}n.next=Tr,Tr=n}function Dc(){Ld++}function Lc(){if(--Ld>0)return;if(wr){let e=wr;for(wr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Tr;){let e=Tr;for(Tr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ic(i),Hp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Tl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Fr)||(n.globalVersion=Fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Tl(n))))return;n.flags|=2;const e=n.dep,t=Mt,i=Un;Mt=n,Un=!0;try{Ud(n);const s=n.fn(n._value);(e.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Mt=t,Un=i,Nd(n),n.flags&=-3}}function Ic(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ic(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Hp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Un=!0;const Od=[];function vi(){Od.push(Un),Un=!1}function xi(){const n=Od.pop();Un=n===void 0?!0:n}function gu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let Fr=0;class Vp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!Un||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new Vp(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,Bd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=i)}return t}trigger(e){this.version++,Fr++,this.notify(e)}notify(e){Dc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lc()}}}function Bd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wl=new WeakMap,rs=Symbol(""),Al=Symbol(""),Or=Symbol("");function Wt(n,e,t){if(Un&&Mt){let i=wl.get(n);i||wl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Uc),s.map=i,s.key=t),s.track()}}function fi(n,e,t,i,s,r){const o=wl.get(n);if(!o){Fr++;return}const a=l=>{l&&l.trigger()};if(Dc(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&Rc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Or||!Yn(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Or)),e){case"add":l?c&&a(o.get("length")):(a(o.get(rs)),Os(n)&&a(o.get(Al)));break;case"delete":l||(a(o.get(rs)),Os(n)&&a(o.get(Al)));break;case"set":Os(n)&&a(o.get(rs));break}}Lc()}function hs(n){const e=ft(n);return e===n?e:(Wt(e,"iterate",Or),Sn(n)?e:e.map(Fn))}function xa(n){return Wt(n=ft(n),"iterate",Or),n}function zn(n,e){return yi(n)?Gs(os(n)?Fn(e):e):Fn(e)}const Gp={__proto__:null,[Symbol.iterator](){return Fa(this,Symbol.iterator,n=>zn(this,n))},concat(...n){return hs(this).concat(...n.map(e=>$e(e)?hs(e):e))},entries(){return Fa(this,"entries",n=>(n[1]=zn(this,n[1]),n))},every(n,e){return Jn(this,"every",n,e,void 0,arguments)},filter(n,e){return Jn(this,"filter",n,e,t=>t.map(i=>zn(this,i)),arguments)},find(n,e){return Jn(this,"find",n,e,t=>zn(this,t),arguments)},findIndex(n,e){return Jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Jn(this,"findLast",n,e,t=>zn(this,t),arguments)},findLastIndex(n,e){return Jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Oa(this,"includes",n)},indexOf(...n){return Oa(this,"indexOf",n)},join(n){return hs(this).join(n)},lastIndexOf(...n){return Oa(this,"lastIndexOf",n)},map(n,e){return Jn(this,"map",n,e,void 0,arguments)},pop(){return lr(this,"pop")},push(...n){return lr(this,"push",n)},reduce(n,...e){return _u(this,"reduce",n,e)},reduceRight(n,...e){return _u(this,"reduceRight",n,e)},shift(){return lr(this,"shift")},some(n,e){return Jn(this,"some",n,e,void 0,arguments)},splice(...n){return lr(this,"splice",n)},toReversed(){return hs(this).toReversed()},toSorted(n){return hs(this).toSorted(n)},toSpliced(...n){return hs(this).toSpliced(...n)},unshift(...n){return lr(this,"unshift",n)},values(){return Fa(this,"values",n=>zn(this,n))}};function Fa(n,e,t){const i=xa(n),s=i[e]();return i!==n&&!Sn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Wp=Array.prototype;function Jn(n,e,t,i,s,r){const o=xa(n),a=o!==n&&!Sn(n),l=o[e];if(l!==Wp[e]){const f=l.apply(n,r);return a?Fn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,zn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function _u(n,e,t,i){const s=xa(n),r=s!==n&&!Sn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=zn(n,c)),t.call(this,c,zn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?zn(n,l):l}function Oa(n,e,t){const i=ft(n);Wt(i,"iterate",Or);const s=i[e](...t);return(s===-1||s===!1)&&Bc(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function lr(n,e,t=[]){vi(),Dc();const i=ft(n)[e].apply(n,t);return Lc(),xi(),i}const Xp=Ac("__proto__,__v_isRef,__isVue"),kd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yn));function $p(n){Yn(n)||(n=String(n));const e=ft(this);return Wt(e,"has",n),e.hasOwnProperty(n)}class zd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?nm:Wd:r?Gd:Vd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=Gp[t]))return l;if(t==="hasOwnProperty")return $p}const a=Reflect.get(e,t,Xt(e)?e:i);if((Yn(t)?kd.has(t):Xp(t))||(s||Wt(e,"get",t),r))return a;if(Xt(a)){const l=o&&Rc(t)?a:a.value;return s&&_t(l)?Ko(l):l}return _t(a)?s?Ko(a):Fc(a):a}}class Hd extends zd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=$e(e)&&Rc(t);if(!this._isShallow){const c=yi(r);if(!Sn(i)&&!yi(i)&&(r=ft(r),i=ft(i)),!o&&Xt(r)&&!Xt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:dt(e,t),l=Reflect.set(e,t,i,Xt(e)?e:s);return e===ft(s)&&(a?Wn(i,r)&&fi(e,"set",t,i):fi(e,"add",t,i)),l}deleteProperty(e,t){const i=dt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&fi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Yn(t)||!kd.has(t))&&Wt(e,"has",t),i}ownKeys(e){return Wt(e,"iterate",$e(e)?"length":rs),Reflect.ownKeys(e)}}class qp extends zd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yp=new Hd,jp=new qp,Kp=new Hd(!0);const Cl=n=>n,no=n=>Reflect.getPrototypeOf(n);function Zp(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Os(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Cl:e?Gs:Fn;return!e&&Wt(r,"iterate",l?Al:rs),$t(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function io(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Jp(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||(Wn(s,a)&&Wt(o,"get",s),Wt(o,"get",a));const{has:l}=no(o),c=e?Cl:n?Gs:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Wt(ft(s),"iterate",rs),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||(Wn(s,a)&&Wt(o,"has",s),Wt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?Cl:n?Gs:Fn;return!n&&Wt(l,"iterate",rs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return $t(t,n?{add:io("add"),set:io("set"),delete:io("delete"),clear:io("clear")}:{add(s){const r=ft(this),o=no(r),a=ft(s),l=!e&&!Sn(s)&&!yi(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!e&&!Sn(r)&&!yi(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=no(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Wn(r,u)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=no(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Zp(s,n,e)}),t}function Nc(n,e){const t=Jp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(dt(t,s)&&s in i?t:i,s,r)}const Qp={get:Nc(!1,!1)},em={get:Nc(!1,!0)},tm={get:Nc(!0,!1)};const Vd=new WeakMap,Gd=new WeakMap,Wd=new WeakMap,nm=new WeakMap;function im(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sm(n){return n.__v_skip||!Object.isExtensible(n)?0:im(Rp(n))}function Fc(n){return yi(n)?n:Oc(n,!1,Yp,Qp,Vd)}function rm(n){return Oc(n,!1,Kp,em,Gd)}function Ko(n){return Oc(n,!0,jp,tm,Wd)}function Oc(n,e,t,i,s){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=sm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function os(n){return yi(n)?os(n.__v_raw):!!(n&&n.__v_isReactive)}function yi(n){return!!(n&&n.__v_isReadonly)}function Sn(n){return!!(n&&n.__v_isShallow)}function Bc(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function om(n){return!dt(n,"__v_skip")&&Object.isExtensible(n)&&Ad(n,"__v_skip",!0),n}const Fn=n=>_t(n)?Fc(n):n,Gs=n=>_t(n)?Ko(n):n;function Xt(n){return n?n.__v_isRef===!0:!1}function Oe(n){return am(n,!1)}function am(n,e){return Xt(n)?n:new lm(n,e)}class lm{constructor(e,t){this.dep=new Uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:Fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Sn(e)||yi(e);e=i?e:ft(e),Wn(e,t)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function _e(n){return Xt(n)?n.value:n}const cm={get:(n,e,t)=>e==="__v_raw"?n:_e(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Xt(s)&&!Xt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Xd(n){return os(n)?n:new Proxy(n,cm)}class um{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return Id(this,!0),!0}get value(){const e=this.dep.track();return Fd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fm(n,e,t=!1){let i,s;return Qe(n)?i=n:(i=n.get,s=n.set),new um(i,s,t)}const so={},Zo=new WeakMap;let Qi;function dm(n,e=!1,t=Qi){if(t){let i=Zo.get(t);i||Zo.set(t,i=[]),i.push(n)}}function hm(n,e,t=vt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=_=>s?_:Sn(_)||s===!1||s===0?di(_,1):di(_);let u,f,d,p,g=!1,v=!1;if(Xt(n)?(f=()=>n.value,g=Sn(n)):os(n)?(f=()=>c(n),g=!0):$e(n)?(v=!0,g=n.some(_=>os(_)||Sn(_)),f=()=>n.map(_=>{if(Xt(_))return _.value;if(os(_))return c(_);if(Qe(_))return l?l(_,2):_()})):Qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){vi();try{d()}finally{xi()}}const _=Qi;Qi=u;try{return l?l(n,3,[p]):n(p)}finally{Qi=_}}:f=qn,e&&s){const _=f,k=s===!0?1/0:s;f=()=>di(_(),k)}const m=zp(),h=()=>{u.stop(),m&&m.active&&Cc(m.effects,u)};if(r&&e){const _=e;e=(...k)=>{_(...k),h()}}let C=v?new Array(n.length).fill(so):so;const w=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const k=u.run();if(s||g||(v?k.some((L,P)=>Wn(L,C[P])):Wn(k,C))){d&&d();const L=Qi;Qi=u;try{const P=[k,C===so?void 0:v&&C[0]===so?[]:C,p];C=k,l?l(e,3,P):e(...P)}finally{Qi=L}}}else u.run()};return a&&a(w),u=new Dd(f),u.scheduler=o?()=>o(w,!1):w,p=_=>dm(_,!1,u),d=u.onStop=()=>{const _=Zo.get(u);if(_){if(l)l(_,4);else for(const k of _)k();Zo.delete(u)}},e?i?w(!0):C=u.run():o?o(w.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function di(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Xt(n))di(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)di(n[i],e,t);else if(Qs(n)||Os(n))n.forEach(i=>{di(i,e,t)});else if(Td(n)){for(const i in n)di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(n,e,t,i){try{return i?n(...i):n()}catch(s){ya(s,e,t)}}function jn(n,e,t,i){if(Qe(n)){const s=qr(n,e,t,i);return s&&bd(s)&&s.catch(r=>{ya(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(jn(n[r],e,t,i));return s}}function ya(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){vi(),qr(r,null,10,[n,l,c]),xi();return}}pm(n,t,s,i,o)}function pm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Zt=[];let kn=-1;const Bs=[];let Li=null,Ps=0;const $d=Promise.resolve();let Jo=null;function Xn(n){const e=Jo||$d;return n?e.then(this?n.bind(this):n):e}function mm(n){let e=kn+1,t=Zt.length;for(;e<t;){const i=e+t>>>1,s=Zt[i],r=Br(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function kc(n){if(!(n.flags&1)){const e=Br(n),t=Zt[Zt.length-1];!t||!(n.flags&2)&&e>=Br(t)?Zt.push(n):Zt.splice(mm(e),0,n),n.flags|=1,qd()}}function qd(){Jo||(Jo=$d.then(jd))}function gm(n){$e(n)?Bs.push(...n):Li&&n.id===-1?Li.splice(Ps+1,0,n):n.flags&1||(Bs.push(n),n.flags|=1),qd()}function vu(n,e,t=kn+1){for(;t<Zt.length;t++){const i=Zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yd(n){if(Bs.length){const e=[...new Set(Bs)].sort((t,i)=>Br(t)-Br(i));if(Bs.length=0,Li){Li.push(...e);return}for(Li=e,Ps=0;Ps<Li.length;Ps++){const t=Li[Ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Li=null,Ps=0}}const Br=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jd(n){try{for(kn=0;kn<Zt.length;kn++){const e=Zt[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<Zt.length;kn++){const e=Zt[kn];e&&(e.flags&=-2)}kn=-1,Zt.length=0,Yd(),Jo=null,(Zt.length||Bs.length)&&jd()}}let Mn=null,Kd=null;function Qo(n){const e=Mn;return Mn=n,Kd=n&&n.type.__scopeId||null,e}function _m(n,e=Mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ru(-1);const r=Qo(e);let o;try{o=n(...s)}finally{Qo(r),i._d&&Ru(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Hn(n,e){if(Mn===null)return n;const t=Ta(Mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=vt]=e[s];r&&(Qe(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Xi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vi(),jn(l,t,8,[n.el,a,n,e]),xi())}}function vm(n,e){if(tn){let t=tn.provides;const i=tn.parent&&tn.parent.provides;i===t&&(t=tn.provides=Object.create(i)),t[n]=e}}function zo(n,e,t=!1){const i=gg();if(i||ks){let s=ks?ks._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const xm=Symbol.for("v-scx"),ym=()=>zo(xm);function bn(n,e,t){return Zd(n,e,t)}function Zd(n,e,t=vt){const{immediate:i,deep:s,flush:r,once:o}=t,a=$t({},t),l=e&&i||!e&&r!=="post";let c;if(zr){if(r==="sync"){const p=ym();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=qn,p.resume=qn,p.pause=qn,p}}const u=tn;a.call=(p,g,v)=>jn(p,u,g,v);let f=!1;r==="post"?a.scheduler=p=>{rn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():kc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=hm(n,e,a);return zr&&(c?c.push(d):l&&d()),d}function Mm(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?Jd(i,n):()=>i[n]:n.bind(i,i);let r;Qe(e)?r=e:(r=e.handler,t=e);const o=jr(this),a=Zd(s,r.bind(i),t);return o(),a}function Jd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Sm=Symbol("_vte"),bm=n=>n.__isTeleport,Em=Symbol("_leaveCb");function zc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,zc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Qd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ea=new WeakMap;function Ar(n,e,t,i,s=!1){if($e(n)){n.forEach((v,m)=>Ar(v,e&&($e(e)?e[m]:e),t,i,s));return}if(Cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ar(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ta(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,d=ft(f),p=f===vt?Sd:v=>xu(u,v)?!1:dt(d,v),g=(v,m)=>!(m&&xu(u,m));if(c!=null&&c!==l){if(yu(e),Rt(c))u[c]=null,p(c)&&(f[c]=null);else if(Xt(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Qe(l))qr(l,a,12,[o,u]);else{const v=Rt(l),m=Xt(l);if(v||m){const h=()=>{if(n.f){const C=v?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)$e(C)&&Cc(C,r);else if($e(C))C.includes(r)||C.push(r);else if(v)u[l]=[r],p(l)&&(f[l]=u[l]);else{const w=[r];g(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else v?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const C=()=>{h(),ea.delete(n)};C.id=-1,ea.set(n,C),rn(C,t)}else yu(n),h()}}}function yu(n){const e=ea.get(n);e&&(e.flags|=8,ea.delete(n))}va().requestIdleCallback;va().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,eh=n=>n.type.__isKeepAlive;function Tm(n,e){th(n,"a",e)}function wm(n,e){th(n,"da",e)}function th(n,e,t=tn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ma(e,i,t),t){let s=t.parent;for(;s&&s.parent;)eh(s.parent.vnode)&&Am(i,e,t,s),s=s.parent}}function Am(n,e,t,i){const s=Ma(e,n,i,!0);Yr(()=>{Cc(i[e],s)},t)}function Ma(n,e,t=tn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{vi();const a=jr(t),l=jn(e,t,n,o);return a(),xi(),l});return i?s.unshift(r):s.push(r),r}}const Si=n=>(e,t=tn)=>{(!zr||n==="sp")&&Ma(n,(...i)=>e(...i),t)},Cm=Si("bm"),Sa=Si("m"),Rm=Si("bu"),Pm=Si("u"),Dm=Si("bum"),Yr=Si("um"),Lm=Si("sp"),Im=Si("rtg"),Um=Si("rtc");function Nm(n,e=tn){Ma("ec",n,e)}const Fm=Symbol.for("v-ndc");function _n(n,e,t,i){let s;const r=t,o=$e(n);if(o||Rt(n)){const a=o&&os(n);let l=!1,c=!1;a&&(l=!Sn(n),c=yi(n),n=xa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Gs(Fn(n[u])):Fn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(_t(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Rl=n=>n?bh(n)?Ta(n):Rl(n.parent):null,Rr=$t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rl(n.parent),$root:n=>Rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ih(n),$forceUpdate:n=>n.f||(n.f=()=>{kc(n.update)}),$nextTick:n=>n.n||(n.n=Xn.bind(n.proxy)),$watch:n=>Mm.bind(n)}),Ba=(n,e)=>n!==vt&&!n.__isScriptSetup&&dt(n,e),Om={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ba(i,e))return o[e]=1,i[e];if(s!==vt&&dt(s,e))return o[e]=2,s[e];if(dt(r,e))return o[e]=3,r[e];if(t!==vt&&dt(t,e))return o[e]=4,t[e];Pl&&(o[e]=0)}}const c=Rr[e];let u,f;if(c)return e==="$attrs"&&Wt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==vt&&dt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,dt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ba(s,e)?(s[e]=t,!0):i!==vt&&dt(i,e)?(i[e]=t,!0):dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==vt&&a[0]!=="$"&&dt(n,a)||Ba(e,a)||dt(r,a)||dt(i,a)||dt(Rr,a)||dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pl=!0;function Bm(n){const e=ih(n),t=n.proxy,i=n.ctx;Pl=!1,e.beforeCreate&&Su(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:C,destroyed:w,unmounted:_,render:k,renderTracked:L,renderTriggered:P,errorCaptured:F,serverPrefetch:E,expose:M,inheritAttrs:R,components:$,directives:te,filters:le}=e;if(c&&km(c,i,null),o)for(const Y in o){const I=o[Y];Qe(I)&&(i[Y]=I.bind(t))}if(s){const Y=s.call(t,t);_t(Y)&&(n.data=Fc(Y))}if(Pl=!0,r)for(const Y in r){const I=r[Y],ye=Qe(I)?I.bind(t,t):Qe(I.get)?I.get.bind(t,t):qn,xe=!Qe(I)&&Qe(I.set)?I.set.bind(t):qn,Ce=Jt({get:ye,set:xe});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Te=>Ce.value=Te})}if(a)for(const Y in a)nh(a[Y],i,t,Y);if(l){const Y=Qe(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(I=>{vm(I,Y[I])})}u&&Su(u,n,"c");function Z(Y,I){$e(I)?I.forEach(ye=>Y(ye.bind(t))):I&&Y(I.bind(t))}if(Z(Cm,f),Z(Sa,d),Z(Rm,p),Z(Pm,g),Z(Tm,v),Z(wm,m),Z(Nm,F),Z(Um,L),Z(Im,P),Z(Dm,C),Z(Yr,_),Z(Lm,E),$e(M))if(M.length){const Y=n.exposed||(n.exposed={});M.forEach(I=>{Object.defineProperty(Y,I,{get:()=>t[I],set:ye=>t[I]=ye,enumerable:!0})})}else n.exposed||(n.exposed={});k&&n.render===qn&&(n.render=k),R!=null&&(n.inheritAttrs=R),$&&(n.components=$),te&&(n.directives=te),E&&Qd(n)}function km(n,e,t=qn){$e(n)&&(n=Dl(n));for(const i in n){const s=n[i];let r;_t(s)?"default"in s?r=zo(s.from||i,s.default,!0):r=zo(s.from||i):r=zo(s),Xt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Su(n,e,t){jn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function nh(n,e,t,i){let s=i.includes(".")?Jd(t,i):()=>t[i];if(Rt(n)){const r=e[n];Qe(r)&&bn(s,r)}else if(Qe(n))bn(s,n.bind(t));else if(_t(n))if($e(n))n.forEach(r=>nh(r,e,t,i));else{const r=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(r)&&bn(s,r,n)}}function ih(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ta(l,c,o,!0)),ta(l,e,o)),_t(e)&&r.set(e,l),l}function ta(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ta(n,r,t,!0),s&&s.forEach(o=>ta(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=zm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const zm={data:bu,props:Eu,emits:Eu,methods:yr,computed:yr,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:yr,directives:yr,watch:Vm,provide:bu,inject:Hm};function bu(n,e){return e?n?function(){return $t(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function Hm(n,e){return yr(Dl(n),Dl(e))}function Dl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yt(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?$t(Object.create(null),n,e):e}function Eu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:$t(Object.create(null),Mu(n),Mu(e??{})):e}function Vm(n,e){if(!n)return e;if(!e)return n;const t=$t(Object.create(null),n);for(const i in e)t[i]=Yt(n[i],e[i]);return t}function sh(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gm=0;function Wm(n,e){return function(i,s=null){Qe(i)||(i=$t({},i)),s!=null&&!_t(s)&&(s=null);const r=sh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Gm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Sg,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...f)):Qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||en(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ta(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ks;ks=c;try{return u()}finally{ks=f}}};return c}}let ks=null;const Xm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${In(e)}Modifiers`]||n[`${Vi(e)}Modifiers`];function $m(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let s=t;const r=e.startsWith("update:"),o=r&&Xm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),o.number&&(s=t.map(_a)));let a,l=i[a=Ia(e)]||i[a=Ia(In(e))];!l&&r&&(l=i[a=Ia(Vi(e))]),l&&jn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,jn(c,n,6,s)}}const qm=new WeakMap;function rh(n,e,t=!1){const i=t?qm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const u=rh(c,e,!0);u&&(a=!0,$t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(_t(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>o[l]=null):$t(o,r),_t(n)&&i.set(n,o),o)}function ba(n,e){return!n||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(n,e[0].toLowerCase()+e.slice(1))||dt(n,Vi(e))||dt(n,e))}function Tu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,m=Qo(n);let h,C;try{if(t.shapeFlag&4){const _=s||i,k=_;h=Vn(c.call(k,_,u,f,p,d,g)),C=a}else{const _=e;h=Vn(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),C=e.props?a:Ym(a)}}catch(_){Pr.length=0,ya(_,n,1),h=en(ki)}let w=h;if(C&&v!==!1){const _=Object.keys(C),{shapeFlag:k}=w;_.length&&k&7&&(r&&_.some(ma)&&(C=jm(C,r)),w=Ws(w,C,!1,!0))}return t.dirs&&(w=Ws(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&zc(w,t.transition),h=w,Qo(m),h}const Ym=n=>{let e;for(const t in n)(t==="class"||t==="style"||pa(t))&&((e||(e={}))[t]=n[t]);return e},jm=(n,e)=>{const t={};for(const i in n)(!ma(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Km(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(oh(o,i,d)&&!ba(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wu(i,o,c):!0:!!o;return!1}function wu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(oh(e,n,r)&&!ba(t,r))return!0}return!1}function oh(n,e,t){const i=n[t],s=e[t];return t==="style"&&_t(i)&&_t(s)?!er(i,s):i!==s}function Zm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const ah={},lh=()=>Object.create(ah),ch=n=>Object.getPrototypeOf(n)===ah;function Jm(n,e,t,i=!1){const s={},r=lh();n.propsDefaults=Object.create(null),uh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:rm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Qm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ba(n.emitsOptions,d))continue;const p=e[d];if(l)if(dt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=In(d);s[g]=Ll(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{uh(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!dt(e,f)&&((u=Vi(f))===f||!dt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Ll(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!dt(e,f))&&(delete r[f],c=!0)}c&&fi(n.attrs,"set","")}function uh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Er(l))continue;const c=e[l];let u;s&&dt(s,u=In(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||vt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Ll(s,l,f,c[f],n,!dt(c,f))}}return o}function Ll(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=jr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Vi(t))&&(i=!0))}return i}const eg=new WeakMap;function fh(n,e,t=!1){const i=t?eg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qe(n)){const u=f=>{l=!0;const[d,p]=fh(f,e,!0);$t(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _t(n)&&i.set(n,Fs),Fs;if($e(r))for(let u=0;u<r.length;u++){const f=In(r[u]);Au(f)&&(o[f]=vt)}else if(r)for(const u in r){const f=In(u);if(Au(f)){const d=r[u],p=o[f]=$e(d)||Qe(d)?{type:d}:$t({},d),g=p.type;let v=!1,m=!0;if($e(g))for(let h=0;h<g.length;++h){const C=g[h],w=Qe(C)&&C.name;if(w==="Boolean"){v=!0;break}else w==="String"&&(m=!1)}else v=Qe(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||dt(p,"default"))&&a.push(f)}}const c=[o,a];return _t(n)&&i.set(n,c),c}function Au(n){return n[0]!=="$"&&!Er(n)}const Hc=n=>n==="_"||n==="_ctx"||n==="$stable",Vc=n=>$e(n)?n.map(Vn):[Vn(n)],tg=(n,e,t)=>{if(e._n)return e;const i=_m((...s)=>Vc(e(...s)),t);return i._c=!1,i},dh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Hc(s))continue;const r=n[s];if(Qe(r))e[s]=tg(s,r,i);else if(r!=null){const o=Vc(r);e[s]=()=>o}}},hh=(n,e)=>{const t=Vc(e);n.slots.default=()=>t},ph=(n,e,t)=>{for(const i in e)(t||!Hc(i))&&(n[i]=e[i])},ng=(n,e,t)=>{const i=n.slots=lh();if(n.vnode.shapeFlag&32){const s=e._;s?(ph(i,e,t),t&&Ad(i,"_",s,!0)):dh(e,i)}else e&&hh(n,e)},ig=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:ph(s,e,t):(r=!e.$stable,dh(e,s)),o=e}else e&&(hh(n,e),o={default:1});if(r)for(const a in s)!Hc(a)&&o[a]==null&&delete s[a]},rn=lg;function sg(n){return rg(n)}function rg(n,e){const t=va();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=qn,insertStaticContent:g}=n,v=(A,U,b,de=null,ie=null,ue=null,he=void 0,se=null,V=!!U.dynamicChildren)=>{if(A===U)return;A&&!cr(A,U)&&(de=ee(A),Te(A,ie,ue,!0),A=null),U.patchFlag===-2&&(V=!1,U.dynamicChildren=null);const{type:y,ref:x,shapeFlag:D}=U;switch(y){case Ea:m(A,U,b,de);break;case ki:h(A,U,b,de);break;case Ho:A==null&&C(U,b,de,he);break;case at:$(A,U,b,de,ie,ue,he,se,V);break;default:D&1?k(A,U,b,de,ie,ue,he,se,V):D&6?te(A,U,b,de,ie,ue,he,se,V):(D&64||D&128)&&y.process(A,U,b,de,ie,ue,he,se,V,Ne)}x!=null&&ie?Ar(x,A&&A.ref,ue,U||A,!U):x==null&&A&&A.ref!=null&&Ar(A.ref,null,ue,A,!0)},m=(A,U,b,de)=>{if(A==null)i(U.el=a(U.children),b,de);else{const ie=U.el=A.el;U.children!==A.children&&c(ie,U.children)}},h=(A,U,b,de)=>{A==null?i(U.el=l(U.children||""),b,de):U.el=A.el},C=(A,U,b,de)=>{[A.el,A.anchor]=g(A.children,U,b,de,A.el,A.anchor)},w=({el:A,anchor:U},b,de)=>{let ie;for(;A&&A!==U;)ie=d(A),i(A,b,de),A=ie;i(U,b,de)},_=({el:A,anchor:U})=>{let b;for(;A&&A!==U;)b=d(A),s(A),A=b;s(U)},k=(A,U,b,de,ie,ue,he,se,V)=>{if(U.type==="svg"?he="svg":U.type==="math"&&(he="mathml"),A==null)L(U,b,de,ie,ue,he,se,V);else{const y=A.el&&A.el._isVueCE?A.el:null;try{y&&y._beginPatch(),E(A,U,ie,ue,he,se,V)}finally{y&&y._endPatch()}}},L=(A,U,b,de,ie,ue,he,se)=>{let V,y;const{props:x,shapeFlag:D,transition:G,dirs:ne}=A;if(V=A.el=o(A.type,ue,x&&x.is,x),D&8?u(V,A.children):D&16&&F(A.children,V,null,de,ie,ka(A,ue),he,se),ne&&Xi(A,null,de,"created"),P(V,A,A.scopeId,he,de),x){for(const Se in x)Se!=="value"&&!Er(Se)&&r(V,Se,null,x[Se],ue,de);"value"in x&&r(V,"value",null,x.value,ue),(y=x.onVnodeBeforeMount)&&Bn(y,de,A)}ne&&Xi(A,null,de,"beforeMount");const re=og(ie,G);re&&G.beforeEnter(V),i(V,U,b),((y=x&&x.onVnodeMounted)||re||ne)&&rn(()=>{try{y&&Bn(y,de,A),re&&G.enter(V),ne&&Xi(A,null,de,"mounted")}finally{}},ie)},P=(A,U,b,de,ie)=>{if(b&&p(A,b),de)for(let ue=0;ue<de.length;ue++)p(A,de[ue]);if(ie){let ue=ie.subTree;if(U===ue||vh(ue.type)&&(ue.ssContent===U||ue.ssFallback===U)){const he=ie.vnode;P(A,he,he.scopeId,he.slotScopeIds,ie.parent)}}},F=(A,U,b,de,ie,ue,he,se,V=0)=>{for(let y=V;y<A.length;y++){const x=A[y]=se?ci(A[y]):Vn(A[y]);v(null,x,U,b,de,ie,ue,he,se)}},E=(A,U,b,de,ie,ue,he)=>{const se=U.el=A.el;let{patchFlag:V,dynamicChildren:y,dirs:x}=U;V|=A.patchFlag&16;const D=A.props||vt,G=U.props||vt;let ne;if(b&&$i(b,!1),(ne=G.onVnodeBeforeUpdate)&&Bn(ne,b,U,A),x&&Xi(U,A,b,"beforeUpdate"),b&&$i(b,!0),(D.innerHTML&&G.innerHTML==null||D.textContent&&G.textContent==null)&&u(se,""),y?M(A.dynamicChildren,y,se,b,de,ka(U,ie),ue):he||I(A,U,se,null,b,de,ka(U,ie),ue,!1),V>0){if(V&16)R(se,D,G,b,ie);else if(V&2&&D.class!==G.class&&r(se,"class",null,G.class,ie),V&4&&r(se,"style",D.style,G.style,ie),V&8){const re=U.dynamicProps;for(let Se=0;Se<re.length;Se++){const ve=re[Se],Me=D[ve],Be=G[ve];(Be!==Me||ve==="value")&&r(se,ve,Me,Be,ie,b)}}V&1&&A.children!==U.children&&u(se,U.children)}else!he&&y==null&&R(se,D,G,b,ie);((ne=G.onVnodeUpdated)||x)&&rn(()=>{ne&&Bn(ne,b,U,A),x&&Xi(U,A,b,"updated")},de)},M=(A,U,b,de,ie,ue,he)=>{for(let se=0;se<U.length;se++){const V=A[se],y=U[se],x=V.el&&(V.type===at||!cr(V,y)||V.shapeFlag&198)?f(V.el):b;v(V,y,x,null,de,ie,ue,he,!0)}},R=(A,U,b,de,ie)=>{if(U!==b){if(U!==vt)for(const ue in U)!Er(ue)&&!(ue in b)&&r(A,ue,U[ue],null,ie,de);for(const ue in b){if(Er(ue))continue;const he=b[ue],se=U[ue];he!==se&&ue!=="value"&&r(A,ue,se,he,ie,de)}"value"in b&&r(A,"value",U.value,b.value,ie)}},$=(A,U,b,de,ie,ue,he,se,V)=>{const y=U.el=A?A.el:a(""),x=U.anchor=A?A.anchor:a("");let{patchFlag:D,dynamicChildren:G,slotScopeIds:ne}=U;ne&&(se=se?se.concat(ne):ne),A==null?(i(y,b,de),i(x,b,de),F(U.children||[],b,x,ie,ue,he,se,V)):D>0&&D&64&&G&&A.dynamicChildren&&A.dynamicChildren.length===G.length?(M(A.dynamicChildren,G,b,ie,ue,he,se),(U.key!=null||ie&&U===ie.subTree)&&mh(A,U,!0)):I(A,U,b,x,ie,ue,he,se,V)},te=(A,U,b,de,ie,ue,he,se,V)=>{U.slotScopeIds=se,A==null?U.shapeFlag&512?ie.ctx.activate(U,b,de,he,V):le(U,b,de,ie,ue,he,V):pe(A,U,V)},le=(A,U,b,de,ie,ue,he)=>{const se=A.component=mg(A,de,ie);if(eh(A)&&(se.ctx.renderer=Ne),_g(se,!1,he),se.asyncDep){if(ie&&ie.registerDep(se,Z,he),!A.el){const V=se.subTree=en(ki);h(null,V,U,b),A.placeholder=V.el}}else Z(se,A,U,b,ie,ue,he)},pe=(A,U,b)=>{const de=U.component=A.component;if(Km(A,U,b))if(de.asyncDep&&!de.asyncResolved){Y(de,U,b);return}else de.next=U,de.update();else U.el=A.el,de.vnode=U},Z=(A,U,b,de,ie,ue,he)=>{const se=()=>{if(A.isMounted){let{next:D,bu:G,u:ne,parent:re,vnode:Se}=A;{const q=gh(A);if(q){D&&(D.el=Se.el,Y(A,D,he)),q.asyncDep.then(()=>{rn(()=>{A.isUnmounted||y()},ie)});return}}let ve=D,Me;$i(A,!1),D?(D.el=Se.el,Y(A,D,he)):D=Se,G&&ko(G),(Me=D.props&&D.props.onVnodeBeforeUpdate)&&Bn(Me,re,D,Se),$i(A,!0);const Be=Tu(A),H=A.subTree;A.subTree=Be,v(H,Be,f(H.el),ee(H),A,ie,ue),D.el=Be.el,ve===null&&Zm(A,Be.el),ne&&rn(ne,ie),(Me=D.props&&D.props.onVnodeUpdated)&&rn(()=>Bn(Me,re,D,Se),ie)}else{let D;const{el:G,props:ne}=U,{bm:re,m:Se,parent:ve,root:Me,type:Be}=A,H=Cr(U);$i(A,!1),re&&ko(re),!H&&(D=ne&&ne.onVnodeBeforeMount)&&Bn(D,ve,U),$i(A,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(Be,A.parent?A.parent.type:void 0);const q=A.subTree=Tu(A);v(null,q,b,de,A,ie,ue),U.el=q.el}if(Se&&rn(Se,ie),!H&&(D=ne&&ne.onVnodeMounted)){const q=U;rn(()=>Bn(D,ve,q),ie)}(U.shapeFlag&256||ve&&Cr(ve.vnode)&&ve.vnode.shapeFlag&256)&&A.a&&rn(A.a,ie),A.isMounted=!0,U=b=de=null}};A.scope.on();const V=A.effect=new Dd(se);A.scope.off();const y=A.update=V.run.bind(V),x=A.job=V.runIfDirty.bind(V);x.i=A,x.id=A.uid,V.scheduler=()=>kc(x),$i(A,!0),y()},Y=(A,U,b)=>{U.component=A;const de=A.vnode.props;A.vnode=U,A.next=null,Qm(A,U.props,de,b),ig(A,U.children,b),vi(),vu(A),xi()},I=(A,U,b,de,ie,ue,he,se,V=!1)=>{const y=A&&A.children,x=A?A.shapeFlag:0,D=U.children,{patchFlag:G,shapeFlag:ne}=U;if(G>0){if(G&128){xe(y,D,b,de,ie,ue,he,se,V);return}else if(G&256){ye(y,D,b,de,ie,ue,he,se,V);return}}ne&8?(x&16&&Q(y,ie,ue),D!==y&&u(b,D)):x&16?ne&16?xe(y,D,b,de,ie,ue,he,se,V):Q(y,ie,ue,!0):(x&8&&u(b,""),ne&16&&F(D,b,de,ie,ue,he,se,V))},ye=(A,U,b,de,ie,ue,he,se,V)=>{A=A||Fs,U=U||Fs;const y=A.length,x=U.length,D=Math.min(y,x);let G;for(G=0;G<D;G++){const ne=U[G]=V?ci(U[G]):Vn(U[G]);v(A[G],ne,b,null,ie,ue,he,se,V)}y>x?Q(A,ie,ue,!0,!1,D):F(U,b,de,ie,ue,he,se,V,D)},xe=(A,U,b,de,ie,ue,he,se,V)=>{let y=0;const x=U.length;let D=A.length-1,G=x-1;for(;y<=D&&y<=G;){const ne=A[y],re=U[y]=V?ci(U[y]):Vn(U[y]);if(cr(ne,re))v(ne,re,b,null,ie,ue,he,se,V);else break;y++}for(;y<=D&&y<=G;){const ne=A[D],re=U[G]=V?ci(U[G]):Vn(U[G]);if(cr(ne,re))v(ne,re,b,null,ie,ue,he,se,V);else break;D--,G--}if(y>D){if(y<=G){const ne=G+1,re=ne<x?U[ne].el:de;for(;y<=G;)v(null,U[y]=V?ci(U[y]):Vn(U[y]),b,re,ie,ue,he,se,V),y++}}else if(y>G)for(;y<=D;)Te(A[y],ie,ue,!0),y++;else{const ne=y,re=y,Se=new Map;for(y=re;y<=G;y++){const T=U[y]=V?ci(U[y]):Vn(U[y]);T.key!=null&&Se.set(T.key,y)}let ve,Me=0;const Be=G-re+1;let H=!1,q=0;const J=new Array(Be);for(y=0;y<Be;y++)J[y]=0;for(y=ne;y<=D;y++){const T=A[y];if(Me>=Be){Te(T,ie,ue,!0);continue}let me;if(T.key!=null)me=Se.get(T.key);else for(ve=re;ve<=G;ve++)if(J[ve-re]===0&&cr(T,U[ve])){me=ve;break}me===void 0?Te(T,ie,ue,!0):(J[me-re]=y+1,me>=q?q=me:H=!0,v(T,U[me],b,null,ie,ue,he,se,V),Me++)}const N=H?ag(J):Fs;for(ve=N.length-1,y=Be-1;y>=0;y--){const T=re+y,me=U[T],we=U[T+1],Fe=T+1<x?we.el||_h(we):de;J[y]===0?v(null,me,b,Fe,ie,ue,he,se,V):H&&(ve<0||y!==N[ve]?Ce(me,b,Fe,2):ve--)}}},Ce=(A,U,b,de,ie=null)=>{const{el:ue,type:he,transition:se,children:V,shapeFlag:y}=A;if(y&6){Ce(A.component.subTree,U,b,de);return}if(y&128){A.suspense.move(U,b,de);return}if(y&64){he.move(A,U,b,Ne);return}if(he===at){i(ue,U,b);for(let D=0;D<V.length;D++)Ce(V[D],U,b,de);i(A.anchor,U,b);return}if(he===Ho){w(A,U,b);return}if(de!==2&&y&1&&se)if(de===0)se.beforeEnter(ue),i(ue,U,b),rn(()=>se.enter(ue),ie);else{const{leave:D,delayLeave:G,afterLeave:ne}=se,re=()=>{A.ctx.isUnmounted?s(ue):i(ue,U,b)},Se=()=>{ue._isLeaving&&ue[Em](!0),D(ue,()=>{re(),ne&&ne()})};G?G(ue,re,Se):Se()}else i(ue,U,b)},Te=(A,U,b,de=!1,ie=!1)=>{const{type:ue,props:he,ref:se,children:V,dynamicChildren:y,shapeFlag:x,patchFlag:D,dirs:G,cacheIndex:ne,memo:re}=A;if(D===-2&&(ie=!1),se!=null&&(vi(),Ar(se,null,b,A,!0),xi()),ne!=null&&(U.renderCache[ne]=void 0),x&256){U.ctx.deactivate(A);return}const Se=x&1&&G,ve=!Cr(A);let Me;if(ve&&(Me=he&&he.onVnodeBeforeUnmount)&&Bn(Me,U,A),x&6)z(A.component,b,de);else{if(x&128){A.suspense.unmount(b,de);return}Se&&Xi(A,null,U,"beforeUnmount"),x&64?A.type.remove(A,U,b,Ne,de):y&&!y.hasOnce&&(ue!==at||D>0&&D&64)?Q(y,U,b,!1,!0):(ue===at&&D&384||!ie&&x&16)&&Q(V,U,b),de&&Ye(A)}const Be=re!=null&&ne==null;(ve&&(Me=he&&he.onVnodeUnmounted)||Se||Be)&&rn(()=>{Me&&Bn(Me,U,A),Se&&Xi(A,null,U,"unmounted"),Be&&(A.el=null)},b)},Ye=A=>{const{type:U,el:b,anchor:de,transition:ie}=A;if(U===at){O(b,de);return}if(U===Ho){_(A);return}const ue=()=>{s(b),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(A.shapeFlag&1&&ie&&!ie.persisted){const{leave:he,delayLeave:se}=ie,V=()=>he(b,ue);se?se(A.el,ue,V):V()}else ue()},O=(A,U)=>{let b;for(;A!==U;)b=d(A),s(A),A=b;s(U)},z=(A,U,b)=>{const{bum:de,scope:ie,job:ue,subTree:he,um:se,m:V,a:y}=A;Cu(V),Cu(y),de&&ko(de),ie.stop(),ue&&(ue.flags|=8,Te(he,A,U,b)),se&&rn(se,U),rn(()=>{A.isUnmounted=!0},U)},Q=(A,U,b,de=!1,ie=!1,ue=0)=>{for(let he=ue;he<A.length;he++)Te(A[he],U,b,de,ie)},ee=A=>{if(A.shapeFlag&6)return ee(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const U=d(A.anchor||A.el),b=U&&U[Sm];return b?d(b):U};let be=!1;const De=(A,U,b)=>{let de;A==null?U._vnode&&(Te(U._vnode,null,null,!0),de=U._vnode.component):v(U._vnode||null,A,U,null,null,null,b),U._vnode=A,be||(be=!0,vu(de),Yd(),be=!1)},Ne={p:v,um:Te,m:Ce,r:Ye,mt:le,mc:F,pc:I,pbc:M,n:ee,o:n};return{render:De,hydrate:void 0,createApp:Wm(De)}}function ka({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function og(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function mh(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ci(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&mh(o,a)),a.type===Ea&&(a.patchFlag===-1&&(a=s[r]=ci(a)),a.el=o.el),a.type===ki&&!a.el&&(a.el=o.el)}}function ag(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function gh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gh(e)}function Cu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function _h(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?_h(e.subTree):null}const vh=n=>n.__isSuspense;function lg(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):gm(n)}const at=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),ki=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),Pr=[];let hn=null;function Ae(n=!1){Pr.push(hn=n?null:[])}function cg(){Pr.pop(),hn=Pr[Pr.length-1]||null}let kr=1;function Ru(n,e=!1){kr+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function xh(n){return n.dynamicChildren=kr>0?hn||Fs:null,cg(),kr>0&&hn&&hn.push(n),n}function Re(n,e,t,i,s,r){return xh(W(n,e,t,i,s,r,!0))}function yh(n,e,t,i,s){return xh(en(n,e,t,i,s,!0))}function Mh(n){return n?n.__v_isVNode===!0:!1}function cr(n,e){return n.type===e.type&&n.key===e.key}const Sh=({key:n})=>n??null,Vo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Xt(n)||Qe(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function W(n,e=null,t=null,i=0,s=null,r=n===at?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Sh(e),ref:e&&Vo(e),scopeId:Kd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mn};return a?(Gc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),kr>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const en=ug;function ug(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Fm)&&(n=ki),Mh(n)){const a=Ws(n,e,!0);return t&&Gc(a,t),kr>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(Mg(n)&&(n=n.__vccOpts),e){e=fg(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Nt(a)),_t(l)&&(Bc(l)&&!$e(l)&&(l=$t({},l)),e.style=Tt(l))}const o=Rt(n)?1:vh(n)?128:bm(n)?64:_t(n)?4:Qe(n)?2:0;return W(n,e,t,i,s,o,r,!0)}function fg(n){return n?Bc(n)||ch(n)?$t({},n):n:null}function Ws(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?dg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Sh(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(Vo(e)):[r,Vo(e)]:Vo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==at?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ws(n.ssContent),ssFallback:n.ssFallback&&Ws(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&zc(u,l.clone(u)),u}function yt(n=" ",e=0){return en(Ea,null,n,e)}function Ds(n,e){const t=en(Ho,null,n);return t.staticCount=e,t}function Ze(n="",e=!1){return e?(Ae(),yh(ki,null,n)):en(ki,null,n)}function Vn(n){return n==null||typeof n=="boolean"?en(ki):$e(n)?en(at,null,n.slice()):Mh(n)?ci(n):en(Ea,null,String(n))}function ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ws(n)}function Gc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Gc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ch(e)?e._ctx=Mn:s===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),i&64?(t=16,e=[yt(e)]):t=8);n.children=e,n.shapeFlag|=t}function dg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Nt([e.class,i.class]));else if(s==="style")e.style=Tt([e.style,i.style]);else if(pa(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ma(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Bn(n,e,t,i=null){jn(n,e,7,[t,i])}const hg=sh();let pg=0;function mg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||hg,r={uid:pg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fh(i,s),emitsOptions:rh(i,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$m.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const gg=()=>tn||Mn;let na,Il;{const n=va(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};na=e("__VUE_INSTANCE_SETTERS__",t=>tn=t),Il=e("__VUE_SSR_SETTERS__",t=>zr=t)}const jr=n=>{const e=tn;return na(n),n.scope.on(),()=>{n.scope.off(),na(e)}},Pu=()=>{tn&&tn.scope.off(),na(null)};function bh(n){return n.vnode.shapeFlag&4}let zr=!1;function _g(n,e=!1,t=!1){e&&Il(e);const{props:i,children:s}=n.vnode,r=bh(n);Jm(n,i,r,e),ng(n,s,t||e);const o=r?vg(n,e):void 0;return e&&Il(!1),o}function vg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Om);const{setup:i}=t;if(i){vi();const s=n.setupContext=i.length>1?yg(n):null,r=jr(n),o=qr(i,n,0,[n.props,s]),a=bd(o);if(xi(),r(),(a||n.sp)&&!Cr(n)&&Qd(n),a){if(o.then(Pu,Pu),e)return o.then(l=>{Du(n,l)}).catch(l=>{ya(l,n,0)});n.asyncDep=o}else Du(n,o)}else Eh(n)}function Du(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=Xd(e)),Eh(n)}function Eh(n,e,t){const i=n.type;n.render||(n.render=i.render||qn);{const s=jr(n);vi();try{Bm(n)}finally{xi(),s()}}}const xg={get(n,e){return Wt(n,"get",""),n[e]}};function yg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,xg),slots:n.slots,emit:n.emit,expose:e}}function Ta(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xd(om(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rr)return Rr[t](n)},has(e,t){return t in e||t in Rr}})):n.proxy}function Mg(n){return Qe(n)&&"__vccOpts"in n}const Jt=(n,e)=>fm(n,e,zr),Sg="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ul;const Lu=typeof window<"u"&&window.trustedTypes;if(Lu)try{Ul=Lu.createPolicy("vue",{createHTML:n=>n})}catch{}const Th=Ul?n=>Ul.createHTML(n):n=>n,bg="http://www.w3.org/2000/svg",Eg="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,Iu=ai&&ai.createElement("template"),Tg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ai.createElementNS(bg,n):e==="mathml"?ai.createElementNS(Eg,n):t?ai.createElement(n,{is:t}):ai.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ai.createTextNode(n),createComment:n=>ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Iu.innerHTML=Th(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Iu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},wg=Symbol("_vtc");function Ag(n,e,t){const i=n[wg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uu=Symbol("_vod"),Cg=Symbol("_vsh"),Rg=Symbol(""),Pg=/(?:^|;)\s*display\s*:/;function Dg(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Go(i,a,"")}else for(const o in e)t[o]==null&&Go(i,o,"");for(const o in t)o==="display"&&(r=!0),Go(i,o,t[o])}else if(s){if(e!==t){const o=i[Rg];o&&(t+=";"+o),i.cssText=t,r=Pg.test(t)}}else e&&n.removeAttribute("style");Uu in n&&(n[Uu]=r?i.display:"",n[Cg]&&(i.display="none"))}const Nu=/\s*!important$/;function Go(n,e,t){if($e(t))t.forEach(i=>Go(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Lg(n,e);Nu.test(t)?n.setProperty(Vi(i),t.replace(Nu,""),"important"):n[i]=t}}const Fu=["Webkit","Moz","ms"],za={};function Lg(n,e){const t=za[e];if(t)return t;let i=In(e);if(i!=="filter"&&i in n)return za[e]=i;i=wd(i);for(let s=0;s<Fu.length;s++){const r=Fu[s]+i;if(r in n)return za[e]=r}return e}const Ou="http://www.w3.org/1999/xlink";function Bu(n,e,t,i,s,r=Op(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ou,e.slice(6,e.length)):n.setAttributeNS(Ou,e,t):t==null||r&&!Cd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Yn(t)?String(t):t)}function ku(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Th(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Cd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ui(n,e,t,i){n.addEventListener(e,t,i)}function Ig(n,e,t,i){n.removeEventListener(e,t,i)}const zu=Symbol("_vei");function Ug(n,e,t,i,s=null){const r=n[zu]||(n[zu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Ng(e);if(i){const c=r[e]=Bg(i,s);Ui(n,a,c,l)}else o&&(Ig(n,a,o,l),r[e]=void 0)}}const Hu=/(?:Once|Passive|Capture)$/;function Ng(n){let e;if(Hu.test(n)){e={};let i;for(;i=n.match(Hu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vi(n.slice(2)),e]}let Ha=0;const Fg=Promise.resolve(),Og=()=>Ha||(Fg.then(()=>Ha=0),Ha=Date.now());function Bg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;jn(kg(i,t.value),e,5,[i])};return t.value=n,t.attached=Og(),t}function kg(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Vu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,zg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Ag(n,i,o):e==="style"?Dg(n,t,i):pa(e)?ma(e)||Ug(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hg(n,e,i,o))?(ku(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bu(n,e,i,o,r,e!=="value")):n._isVueCE&&(Vg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?ku(n,In(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bu(n,e,i,o))};function Hg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Vu(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vu(e)&&Rt(t)?!1:e in n}function Vg(n,e){const t=n._def.props;if(!t)return!1;const i=In(e);return Array.isArray(t)?t.some(s=>In(s)===i):Object.keys(t).some(s=>In(s)===i)}const Xs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>ko(e,t):e};function Gg(n){n.target.composing=!0}function Gu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gi=Symbol("_assign");function Wu(n,e,t){return e&&(n=n.trim()),t&&(n=_a(n)),n}const $s={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[gi]=Xs(s);const r=i||s.props&&s.props.type==="number";Ui(n,e?"change":"input",o=>{o.target.composing||n[gi](Wu(n.value,t,r))}),(t||r)&&Ui(n,"change",()=>{n.value=Wu(n.value,t,r)}),e||(Ui(n,"compositionstart",Gg),Ui(n,"compositionend",Gu),Ui(n,"change",Gu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[gi]=Xs(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?_a(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Xu={deep:!0,created(n,e,t){n[gi]=Xs(t),Ui(n,"change",()=>{const i=n._modelValue,s=Hr(n),r=n.checked,o=n[gi];if($e(i)){const a=Pc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Qs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(wh(n,r))})},mounted:$u,beforeUpdate(n,e,t){n[gi]=Xs(t),$u(n,e,t)}};function $u(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if($e(e))s=Pc(e,i.props.value)>-1;else if(Qs(e))s=e.has(i.props.value);else{if(e===t)return;s=er(e,wh(n,!0))}n.checked!==s&&(n.checked=s)}const qu={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Qs(e);Ui(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?_a(Hr(o)):Hr(o));n[gi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Xn(()=>{n._assigning=!1})}),n[gi]=Xs(i)},mounted(n,{value:e}){Yu(n,e)},beforeUpdate(n,e,t){n[gi]=Xs(t)},updated(n,{value:e}){n._assigning||Yu(n,e)}};function Yu(n,e){const t=n.multiple,i=$e(e);if(!(t&&!i&&!Qs(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Hr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Pc(e,a)>-1}else o.selected=e.has(a);else if(er(Hr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Hr(n){return"_value"in n?n._value:n.value}function wh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Wg=["ctrl","shift","alt","meta"],Xg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Wg.some(t=>n[`${t}Key`]&&!e.includes(t))},as=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Xg[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},$g={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Is=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Vi(s.key);if(e.some(o=>o===r||$g[o]===r))return n(s)}))},qg=$t({patchProp:zg},Tg);let ju;function Yg(){return ju||(ju=sg(qg))}const jg=((...n)=>{const e=Yg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Zg(i);if(!s)return;const r=e._component;!Qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Kg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Kg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Zg(n){return Rt(n)?document.querySelector(n):n}const Jg="modulepreload",Qg=function(n,e){return new URL(n,e).href},Ku={},ia=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(t.map(u=>{if(u=Qg(u,i),u in Ku)return;Ku[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!i)for(let v=a.length-1;v>=0;v--){const m=a[v];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Jg,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},ps=Oe(null),ut=Oe([]),Va=Oe(!1),ur=Oe(!1),ms=Oe("playful"),Zu=Oe("nest"),si=Oe([]),Ah=Oe(Ch()),Ga=Oe(""),li=Oe("glade-forge"),fr=Oe({x:0,z:0}),ro=Oe([]),Ju=Oe(0),e_=Oe(10),Qu=[{id:"weapon_short_sword",label:"Short Sword",icon:"🗡️",type:"weapon"},{id:"weapon_axe",label:"Tiny Axe",icon:"🪓",type:"weapon"},{id:"weapon_bow",label:"Pocket Bow",icon:"🏹",type:"weapon"},{id:"weapon_hammer",label:"Bonk Hammer",icon:"🔨",type:"weapon"}],t_=Qu[Math.floor(Math.random()*Qu.length)],dr=Oe([{id:"wizard_hat",label:"Wizard Hat",icon:"🧙‍♂️",type:"hat"},{id:"hard_hat",label:"Hard Hat",icon:"👷",type:"hat"},{id:"beret",label:"Beret",icon:"🎨",type:"hat"},{id:"crown",label:"Crown",icon:"👑",type:"hat"},{id:"pip_treat",label:"Pip Treat",icon:"🍎",type:"food"},t_,{id:"balloon_cannon",label:"Balloon Popper",icon:"🎈",type:"tool"},{id:"firework_launcher",label:"Firework",icon:"🎆",type:"tool"},{id:"fairy_summoner",label:"Fairy Wand",icon:"✨",type:"tool"},{id:"capture_orb",label:"Capture Orb",icon:"🫧",type:"tool"},null]),Wa=Oe(5),hr=Oe([]),oo=Oe(!0),ao=Oe(0),n_=Oe({id:"guide",name:"Nebula",color:"#c9a0ff",x:13.5,z:13.5,size:5,targetX:13.5,targetZ:13.5}),lo=Oe([]),co=Oe(null),ef=Oe(0);let tf=1e3;const ui=Oe(s_()),Di=Oe(Object.fromEntries(ui.value.map(n=>[n.id,45]))),nf=[{key:"1",id:"nest",label:"Nest",color:"#d9b38c"},{key:"2",id:"lantern",label:"Lantern",color:"#ffd27f"},{key:"3",id:"totem",label:"Totem",color:"#c5b3e6"},{key:"4",id:"archive",label:"Archive",color:"#9fd3d8"},{key:"5",id:"remove",label:"Remove",color:"#e09494"}],pr=[{id:"explore",label:"Explore"},{id:"build",label:"Build"},{id:"playful",label:"Playful"},{id:"wizard",label:"Wizard"},{id:"about",label:"About"}];function Nl(n){return JSON.parse(JSON.stringify(n))}function i_(){return ui.value.find(n=>n.id===li.value)||null}function Mr(){Ah.value=Fl(li.value)}function tr(){const n=Jt(()=>ms.value==="build"),e=Jt(()=>ms.value==="playful"),t=Jt(()=>i_()),i=Jt(()=>ui.value.map(O=>({id:O.id,name:O.name,project:O.project,theme:O.theme,color:O.color,pips:ut.value.filter(z=>z.gladeId===O.id).length,farmBlocks:si.value.filter(z=>z.gladeId===O.id).length,growthRate:Fl(O.id).growthRate,nextSpawnIn:Di.value[O.id]??45}))),s=Jt(()=>ut.value.length);function r(O){const z=ui.value[O];return z?(li.value=z.id,Mr(),z):null}function o(O,z){fr.value={x:O,z}}function a(O){ps.value=O,ur.value=!1}function l(){ps.value=null,ur.value=!1}function c(){Va.value=!Va.value}const u=Jt(()=>{if(!fr.value)return null;let O=null,z=5;return ut.value.forEach(Q=>{if(Q.position_x===void 0)return;const ee=Q.position_x-fr.value.x,be=Q.position_z-fr.value.z,De=Math.sqrt(ee*ee+be*be);De<z&&(z=De,O=Q)}),O});function f(O){ut.value=Nl(O)}function d(O){var Q;const z=ut.value.findIndex(ee=>ee.id===O.id);z!==-1&&(ut.value[z]={...ut.value[z],...O},((Q=ps.value)==null?void 0:Q.id)===O.id&&(ps.value=ut.value[z]))}function p(){ps.value&&(ur.value=!0)}function g(){ur.value=!1}function v(O){return pr.some(Q=>Q.id===O)?(ms.value=O,Ga.value=O==="build"?"Build mode enabled":O==="playful"?"Playful mode enabled":O==="wizard"?"Wizard mode enabled":O==="about"?"About mode enabled":"Explore mode enabled",!0):!1}function m(){const O=pr.findIndex(Q=>Q.id===ms.value),z=pr[(O+1)%pr.length];v(z.id)}function h(){ms.value==="build"?v("explore"):v("build")}function C(){oo.value=!oo.value,oo.value&&v("explore")}function w(O){const z=nf.find(Q=>Q.key===O);return z?(Zu.value=z.id,!0):!1}function _(O=1){const z=dr.value.length;let Q=(Wa.value+O+z)%z;for(let ee=0;ee<z&&!dr.value[Q];ee++)Q=(Q+O+z)%z;Wa.value=Q}function k(O,z=1400){const Q="toast-"+Date.now()+Math.random();co.value={id:Q,text:O},setTimeout(()=>{var ee;((ee=co.value)==null?void 0:ee.id)===Q&&(co.value=null)},z)}function L(){ef.value++}function P(O,z="care"){const Q=[{id:"gift_glimmer",label:"Glimmer Pebble",icon:"✨",type:"gift"},{id:"gift_ribbon",label:"Tiny Ribbon",icon:"🎀",type:"gift"},{id:"gift_cookie",label:"Warm Cookie",icon:"🍪",type:"gift"},{id:"gift_shell",label:"Pretty Shell",icon:"🐚",type:"gift"}],ee=Q[Math.floor(Math.random()*Q.length)],be=dr.value.findIndex(De=>!De);return be!==-1?(dr.value[be]=ee,xe(O.position_x,O.position_z,`+ ${ee.icon} ${ee.label}`,"#ffd8ff")):xe(O.position_x,O.position_z,`${ee.icon} ${ee.label}`,"#ffd8ff"),k(`Gift received: ${ee.icon} ${ee.label}`),L(),ee}function F(){Mr()}function E(O,z,Q){const ee=Math.round(z),be=Math.round(Q),De=si.value.find(Ne=>Ne.gladeId===li.value&&Ne.x===ee&&Ne.z===be);return O==="remove"?De?(si.value=si.value.filter(Ne=>Ne.id!==De.id),F(),!0):!1:De?!1:(si.value.push({id:`farm-${Date.now()}-${Math.random().toString(16).slice(2,6)}`,type:O,x:ee,z:be,gladeId:li.value}),F(),!0)}function M(O){for(const z of ui.value){const Q=Fl(z.id);let ee=Di.value[z.id]??45;if(Q.capacity<=0){Di.value[z.id]=45;continue}if(ee-=O*Q.growthRate,ee>0){Di.value[z.id]=ee;continue}if(ut.value.filter(de=>de.source==="farm"&&de.gladeId===z.id).length>=Q.capacity){Di.value[z.id]=20;continue}const De=[{key:"calm",score:Q.calmBias+1,text:"Calm and gentle, loves tending the glade."},{key:"bold",score:Q.boldBias+1,text:"Bold and adventurous, always seeks quests."},{key:"curious",score:Q.curiousBias+1,text:"Curious and bright, fascinated by everyone."}],Ne=De.reduce((de,ie)=>de+ie.score,0);let tt=Math.random()*Ne,A=De[0];for(const de of De)if(tt-=de.score,tt<=0){A=de;break}const U=["Poppy","Milo","Nori","Luma","Kiko","Rin","Tavi","Mochi"],b=U[Math.floor(Math.random()*U.length)]+` ${tf%100}`;ut.value.push({id:`farm-pip-${tf++}`,name:b,color:["#f3a6a6","#9bcaf7","#a4dbad","#e9cc8d"][Math.floor(Math.random()*4)],personality:A.text,provider:"glade",model:"farmborn",status:"idle",position_x:z.center.x+(Math.random()-.5)*8,position_z:z.center.z+(Math.random()-.5)*8,source:"farm",gladeId:z.id}),Di.value[z.id]=45,z.id===li.value&&(Ga.value=`New farm pip in ${z.name}: ${b} (${A.key})`)}Mr()}function R(O,z,Q="glade",ee="native"){const be=ui.value.length,De=160+be*10,Ne=be*1.3,tt=Math.round(Math.cos(Ne)*De),A=Math.round(Math.sin(Ne)*De),U={"Cyber Land":"#63cdda","Media Land":"#f8a5c2","Cinema Land":"#f5cd79","Magic Land":"#d2b4de",Default:"#a8db92"},b=U[z]||U.Default,de="glade-dyn-"+Date.now(),ie=ri(de,O||"New Project","custom",z||"Default",b,{x:tt,z:A},[Ut("Planner","#ffffff",tt-2,A-2,"Eager to organize.",de,Q,ee)]);return ui.value.push(ie),ut.value.push(...Nl(ie.pips)),Di.value[de]=45,li.value=de,Mr(),v("explore"),ie}function $(O,z,Q){const ee=O??(Math.random()-.5)*200,be=z??5+Math.random()*5,De=Q??(Math.random()-.5)*200,Ne=["#ffccf9","#ccffff","#ffffcc","#ccffcc"][Math.floor(Math.random()*4)];ro.value.push({id:"fairy-"+Date.now()+Math.random(),x:ee,y:be,z:De,color:Ne,speed:.5+Math.random()*1.5})}function te(O){const z=ro.value.findIndex(Q=>Q.id===O);return z!==-1?(ro.value.splice(z,1),Ju.value++,!0):!1}function le(O,z){const Q=ut.value.findIndex(ee=>ee.id===O);if(Q!==-1){const ee=ut.value[Q];return ee.hat=z?z.id:null,z&&(z.id==="wizard_hat"?(ee.provider="anthropic",ee.model="claude-3-opus-20240229",ee.personality="Extremely wise and eloquent, master of logic."):z.id==="hard_hat"?(ee.provider="ollama",ee.model="llama3",ee.personality="Reliable and focused on the task at hand."):z.id==="beret"?ee.personality="A creative soul, speaks in poetic metaphors.":z.id==="crown"&&(ee.personality="The Royal Leader of the Glade. Commands respect.")),ut.value[Q]={...ee},!0}return!1}function pe(){const O=(Math.random()-.5)*180,z=(Math.random()-.5)*180,Q=`wild-pip-${Date.now()}`,ee=["#ffaaaa","#aaffaa","#aaaaff","#ffffaa"][Math.floor(Math.random()*4)];hr.value.push({id:Q,name:"Wild Pip",color:ee,x:O,z,level:Math.floor(Math.random()*5)+1})}function Z(O){const z=hr.value.findIndex(Q=>Q.id===O);if(z!==-1){const Q=hr.value[z],ee=Ut("New Friend",Q.color,Q.x,Q.z,"Just captured from the wild!",li.value);return ee.source="wild",ut.value.push(ee),hr.value.splice(z,1),!0}return!1}function Y(O,z){const Q=ut.value.findIndex(ee=>ee.id===O);if(Q!==-1){const ee={...ut.value[Q]};if(ee.exp=(ee.exp||0)+z,ee.exp>100)return ee.level=(ee.level||1)+1,ee.model=ee.level>3?"gpt-4":ee.model,ee.exp=0,ut.value[Q]=ee,!0;ut.value[Q]=ee}return!1}function I(O){const z=ut.value.findIndex(Q=>Q.id===O);if(z!==-1){Y(O,35);const Q={...ut.value[z]};return Q.hunger=Math.min(100,(Q.hunger||0)+40),Q.emotionalBond=Math.min(100,(Q.emotionalBond||0)+5),ut.value[z]=Q,Q.brickCount=(Q.brickCount||0)+1,Q.isBuilding=!0,setTimeout(()=>{Q.isBuilding=!1},5e3),xe(Q.position_x,Q.position_z,"+35 XP","#ffd700"),setTimeout(()=>xe(Q.position_x,Q.position_z,"+5 Bond","#ff8ebc"),200),setTimeout(()=>P(Q,"feed"),350),ia(()=>Promise.resolve().then(()=>yd),void 0,import.meta.url).then(ee=>{var be;return(be=ee.triggerPipReaction)==null?void 0:be.call(ee,O,"feed")}),L(),ao.value===3&&(ao.value=4),!0}return!1}function ye(O){const z=ut.value.findIndex(Q=>Q.id===O);if(z!==-1){Y(O,25);const Q={...ut.value[z]};return Q.thirst=Math.min(100,(Q.thirst||0)+40),Q.emotionalBond=Math.min(100,(Q.emotionalBond||0)+3),ut.value[z]=Q,Q.brickCount=(Q.brickCount||0)+1,Q.isBuilding=!0,setTimeout(()=>{Q.isBuilding=!1},5e3),xe(Q.position_x,Q.position_z,"+25 XP","#ffd700"),setTimeout(()=>xe(Q.position_x,Q.position_z,"+3 Bond","#ff8ebc"),200),setTimeout(()=>P(Q,"hydrate"),350),ia(()=>Promise.resolve().then(()=>yd),void 0,import.meta.url).then(ee=>{var be;return(be=ee.triggerPipReaction)==null?void 0:be.call(ee,O,"hydrate")}),L(),!0}return!1}function xe(O,z,Q,ee){const be="text-"+Date.now()+Math.random();lo.value.push({id:be,x:O,z,text:Q,color:ee}),setTimeout(()=>{lo.value=lo.value.filter(De=>De.id!==be)},1500)}function Ce(O){const z=ut.value.findIndex(Q=>Q.id===O);return z!==-1?(ut.value.splice(z,1),!0):!1}function Te(O){const z=si.value.findIndex(Q=>Q.id===O);return z!==-1?(si.value.splice(z,1),F(),!0):!1}function Ye(){ao.value++}return{selectedPip:Ko(ps),pips:ut,councilActive:Va,chatOpen:ur,currentMode:ms,modeDefinitions:pr,buildMode:n,playfulMode:e,selectedTool:Zu,farmTools:nf,farmBlocks:si,farmStats:Ah,farmSpawnNotice:Ga,activeGladeId:li,activeGlade:t,gladeSlots:ui,gladeSummaries:i,totalPips:s,playerPosition:fr,selectGladeSlot:r,setPlayerPosition:o,selectPip:a,deselectPip:l,triggerGathering:c,setPips:f,updatePipInList:d,openChat:p,closeChat:g,setMode:v,cycleMode:m,toggleBuildMode:h,cycleSlot:_,selectToolByKey:w,placeFarmBlock:E,tickFarm:M,spawnDynamicGlade:R,fairies:ro,capturedFairies:Ju,pokeballs:e_,spawnFairy:$,captureFairy:te,inventory:dr,selectedSlot:Wa,wildPips:hr,equipHat:le,spawnWildPip:pe,captureWildPip:Z,addPipExp:Y,onboardingStep:ao,guidePip:n_,feedPip:I,hydratePip:ye,nearbyPip:u,floatingTexts:lo,toast:co,showToast:k,fxPulse:ef,triggerFxPulse:L,nextOnboarding:Ye,removePip:Ce,removeFarmBlock:Te,terminalOpen:oo,toggleTerminal:C,createPip:r_}}function s_(){return[ri("glade-prod","Production District","content","Flower Land","#f2b7cf",{x:-60,z:-40},[Ut("Pistil","#f08aac",-66,-42,"Cheerful and collaborative.","glade-prod"),Ut("Petal","#86dca3",-58,-35,"Organized and supportive.","glade-prod")]),ri("glade-forge","Infrastructure Forge","infra","Lava Land","#ef9a6f",{x:60,z:-40},[Ut("Cinder","#f0805f",56,-38,"Fast, bold, and practical.","glade-forge"),Ut("Basalt","#7a6262",64,-44,"Steady and defensive.","glade-forge")]),ri("glade-amber","Design Amber","design","Autumn Land","#e0b26f",{x:-60,z:40},[Ut("Maple","#d38b4d",-66,36,"Reflective and balanced.","glade-amber"),Ut("Acorn","#ba8b62",-56,45,"Patient and detail-oriented.","glade-amber")]),ri("glade-dusk","Product Twilight","product","Sunset Land","#c9a0ff",{x:60,z:40},[Ut("Nova","#d58cff",56,44,"Visionary and strategic.","glade-dusk"),Ut("Ray","#ffb88f",64,37,"Warm communicator and planner.","glade-dusk")]),ri("glade-frost","Research Frost","research","Mist Land","#9ec9ef",{x:0,z:-70},[Ut("Drift","#8abbe8",-4,-74,"Analytical and curious.","glade-frost"),Ut("Halo","#b0d8ff",4,-66,"Calm and evidence-driven.","glade-frost")]),ri("glade-wild","Experimental Meadow","experiments","Meadow Land","#a8db92",{x:0,z:70},[Ut("Moss","#84c677",2,68,"Playful and experimental.","glade-wild")]),ri("glade-web","Web Services Hub","web","Cyber Land","#63cdda",{x:120,z:0},[Ut("Admin","#3dc1d3",118,3,"Vigilant and precise.","glade-web"),Ut("Builder","#1e90ff",123,-5,"Logical and efficient.","glade-web")]),ri("glade-media","Media Collective","media","Media Land","#f8a5c2",{x:-120,z:0},[Ut("Frame","#f78fb3",-122,-2,"Creative and visionary.","glade-media"),Ut("Script","#e77f98",-118,5,"Detail-oriented and focused.","glade-media")])]}function ri(n,e,t,i,s,r,o){return{id:n,name:e,project:t,theme:i,color:s,center:r,zone:{minX:r.x-8,maxX:r.x+8,minZ:r.z-8,maxZ:r.z+8},pips:o}}function Ut(n,e,t,i,s,r,o="glade",a="native"){return{id:`pip-${n.toLowerCase()}-${Math.random().toString(16).slice(2,6)}`,name:n,color:e,personality:s,provider:o,model:a,status:"idle",position_x:t,position_z:i,gladeId:r,hunger:60+Math.random()*40,thirst:60+Math.random()*40,emotionalBond:Math.floor(Math.random()*20),level:1,exp:0,brickCount:0,isBuilding:!1}}function r_(n,e,t,i,s,r,o="glade",a="native"){const l=Ut(n,e,t,i,s,r,o,a);return ut.value.push(l),l}function Ch(){return{capacity:0,growthRate:1,calmBias:0,boldBias:0,curiousBias:0,nextSpawnIn:45}}function Fl(n){const e=Ch();for(const t of si.value)t.gladeId===n&&(t.type==="nest"&&(e.capacity+=1),t.type==="lantern"&&(e.growthRate+=.25),t.type==="totem"&&(e.boldBias+=1,e.curiousBias+=1),t.type==="archive"&&(e.calmBias+=2));return e.nextSpawnIn=Di.value[n]??45,e}ut.value=ui.value.flatMap(n=>Nl(n.pips));Mr();function sa(n,e={x:0,y:0},t=null){const i=Oe(e),s=Oe(!1),r={x:0,y:0},o={x:0,y:0};if(t){const d=localStorage.getItem(t);if(d)try{i.value=JSON.parse(d)}catch(p){console.error("Failed to load position from storage",p)}}function a(d){d.button===0&&(["INPUT","BUTTON","SELECT","TEXTAREA"].includes(d.target.tagName)||(s.value=!0,r.x=d.clientX,r.y=d.clientY,o.x=i.value.x,o.y=i.value.y,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),d.preventDefault()))}function l(d){if(!s.value)return;const p=d.clientX-r.x,g=d.clientY-r.y;i.value={x:o.x+p,y:o.y+g}}function c(){s.value=!1,window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),t&&localStorage.setItem(t,JSON.stringify(i.value))}function u(){i.value=e,t&&localStorage.removeItem(t)}return{position:i,isDragging:s,onMouseDown:a,dragStyles:(d={})=>({...d,position:"fixed",transform:`translate(${i.value.x}px, ${i.value.y}px)`,cursor:s.value?"grabbing":"grab",transition:s.value?"none":"transform 0.1s ease-out"}),resetPosition:u}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="170",o_=0,sf=1,a_=2,Rh=1,l_=2,oi=3,zi=0,an=1,hi=2,Fi=0,zs=1,rf=2,of=3,af=4,c_=5,ts=100,u_=101,f_=102,d_=103,h_=104,p_=200,m_=201,g_=202,__=203,Ol=204,Bl=205,v_=206,x_=207,y_=208,M_=209,S_=210,b_=211,E_=212,T_=213,w_=214,kl=0,zl=1,Hl=2,qs=3,Vl=4,Gl=5,Wl=6,Xl=7,Xc=0,A_=1,C_=2,Oi=0,R_=1,P_=2,D_=3,Ph=4,L_=5,I_=6,U_=7,Dh=300,Ys=301,js=302,$l=303,ql=304,wa=306,Yl=1e3,is=1001,jl=1002,Nn=1003,N_=1004,uo=1005,$n=1006,Xa=1007,ss=1008,Mi=1009,Lh=1010,Ih=1011,Vr=1012,$c=1013,cs=1014,pi=1015,Kr=1016,qc=1017,Yc=1018,Ks=1020,Uh=35902,Nh=1021,Fh=1022,Ln=1023,Oh=1024,Bh=1025,Hs=1026,Zs=1027,kh=1028,jc=1029,zh=1030,Kc=1031,Zc=1033,Wo=33776,Xo=33777,$o=33778,qo=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,fc=37816,dc=37817,hc=37818,pc=37819,mc=37820,gc=37821,Yo=36492,_c=36494,vc=36495,Hh=36283,xc=36284,yc=36285,Mc=36286,F_=3200,O_=3201,Jc=0,B_=1,Ni="",fn="srgb",nr="srgb-linear",Aa="linear",mt="srgb",gs=7680,lf=519,k_=512,z_=513,H_=514,Vh=515,V_=516,G_=517,W_=518,X_=519,cf=35044,uf="300 es",mi=2e3,ra=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ff=1234567;const Dr=Math.PI/180,Gr=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function Qc(n,e){return(n%e+e)%e}function $_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function q_(n,e,t){return n!==e?(t-n)/(e-n):0}function Lr(n,e,t){return(1-t)*n+t*e}function Y_(n,e,t,i){return Lr(n,e,1-Math.exp(-t*i))}function j_(n,e=1){return e-Math.abs(Qc(n,e*2)-e)}function K_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Z_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function J_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Q_(n,e){return n+Math.random()*(e-n)}function ev(n){return n*(.5-Math.random())}function tv(n){n!==void 0&&(ff=n);let e=ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nv(n){return n*Dr}function iv(n){return n*Gr}function sv(n){return(n&n-1)===0&&n!==0}function rv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ov(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function av(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wr={DEG2RAD:Dr,RAD2DEG:Gr,generateUUID:sr,clamp:Qt,euclideanModulo:Qc,mapLinear:$_,inverseLerp:q_,lerp:Lr,damp:Y_,pingpong:j_,smoothstep:K_,smootherstep:Z_,randInt:J_,randFloat:Q_,randFloatSpread:ev,seededRandom:tv,degToRad:nv,radToDeg:iv,isPowerOfTwo:sv,ceilPowerOfTwo:rv,floorPowerOfTwo:ov,setQuaternionFromProperEuler:av,normalize:jt,denormalize:Ls};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],h=s[6],C=s[1],w=s[4],_=s[7],k=s[2],L=s[5],P=s[8];return r[0]=o*v+a*C+l*k,r[3]=o*m+a*w+l*L,r[6]=o*h+a*_+l*P,r[1]=c*v+u*C+f*k,r[4]=c*m+u*w+f*L,r[7]=c*h+u*_+f*P,r[2]=d*v+p*C+g*k,r[5]=d*m+p*w+g*L,r[8]=d*h+p*_+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Je;function Gh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lv(){const n=oa("canvas");return n.style.display="block",n}const df={};function Sr(n){n in df||(df[n]=!0,console.warn(n))}function cv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function uv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=_i(n.r),n.g=_i(n.g),n.b=_i(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=Vs(n.r),n.g=Vs(n.g),n.b=Vs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ni?Aa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hf=[.64,.33,.3,.6,.15,.06],pf=[.2126,.7152,.0722],mf=[.3127,.329],gf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[nr]:{primaries:hf,whitePoint:mf,transfer:Aa,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:pf,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:hf,whitePoint:mf,transfer:mt,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:pf,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}});let _s;class dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=oa("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pv=0;class nn extends ir{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=is,s=is,r=$n,o=ss,a=Ln,l=Mi,c=nn.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=sr(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yl:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yl:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Dh;nn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,_=(p+1)/2,k=(h+1)/2,L=(u+d)/4,P=(f+v)/4,F=(g+m)/4;return w>_&&w>k?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=L/i,r=P/i):_>k?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=L/s,r=F/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=P/r,s=F/r),this.set(i,s,r,t),this}let C=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(f-v)/C,this.z=(d-u)/C,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mv extends ir{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends mv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xh extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gv extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,C=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const k=Math.sqrt(w),L=Math.atan2(k,h*C);m=Math.sin(m*L)/k,a=Math.sin(a*L)/k}const _=a*C;if(l=l*m+d*_,c=c*m+p*_,u=u*m+g*_,f=f*m+v*_,m===1-a){const k=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=k,c*=k,u*=k,f*=k}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new X,vf=new Zr;class Jr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),ho.subVectors(this.max,mr),vs.subVectors(e.a,mr),xs.subVectors(e.b,mr),ys.subVectors(e.c,mr),Ti.subVectors(xs,vs),wi.subVectors(ys,xs),qi.subVectors(vs,ys);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-qi.z,qi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,qi.z,0,-qi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-qi.y,qi.x,0];return!ja(t,vs,xs,ys,ho)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,vs,xs,ys,ho))?!1:(po.crossVectors(Ti,wi),t=[po.x,po.y,po.z],ja(t,vs,xs,ys,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new X,new X,new X,new X,new X,new X,new X,new X],An=new X,fo=new Jr,vs=new X,xs=new X,ys=new X,Ti=new X,wi=new X,qi=new X,mr=new X,ho=new X,po=new X,Yi=new X;function ja(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Yi.fromArray(n,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _v=new Jr,gr=new X,Ka=new X;class Qr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_v.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Ka)),this.expandByPoint(gr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new X,Za=new X,mo=new X,Ai=new X,Ja=new X,go=new X,Qa=new X;class Ca{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Za.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=Ai.dot(this.direction),l=-Ai.dot(mo),c=Ai.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Za).addScaledVector(mo,d),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,s,r){Ja.subVectors(t,e),go.subVectors(i,e),Qa.crossVectors(Ja,go);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(go.crossVectors(Ai,go));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(Qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,t,i){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ci.crossVectors(i,cn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ci.crossVectors(i,cn)),Ci.normalize(),_o.crossVectors(cn,Ci),s[0]=Ci.x,s[4]=_o.x,s[8]=cn.x,s[1]=Ci.y,s[5]=_o.y,s[9]=cn.y,s[2]=Ci.z,s[6]=_o.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],C=i[3],w=i[7],_=i[11],k=i[15],L=s[0],P=s[4],F=s[8],E=s[12],M=s[1],R=s[5],$=s[9],te=s[13],le=s[2],pe=s[6],Z=s[10],Y=s[14],I=s[3],ye=s[7],xe=s[11],Ce=s[15];return r[0]=o*L+a*M+l*le+c*I,r[4]=o*P+a*R+l*pe+c*ye,r[8]=o*F+a*$+l*Z+c*xe,r[12]=o*E+a*te+l*Y+c*Ce,r[1]=u*L+f*M+d*le+p*I,r[5]=u*P+f*R+d*pe+p*ye,r[9]=u*F+f*$+d*Z+p*xe,r[13]=u*E+f*te+d*Y+p*Ce,r[2]=g*L+v*M+m*le+h*I,r[6]=g*P+v*R+m*pe+h*ye,r[10]=g*F+v*$+m*Z+h*xe,r[14]=g*E+v*te+m*Y+h*Ce,r[3]=C*L+w*M+_*le+k*I,r[7]=C*P+w*R+_*pe+k*ye,r[11]=C*F+w*$+_*Z+k*xe,r[15]=C*E+w*te+_*Y+k*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],C=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,w=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,_=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,k=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,L=t*C+i*w+s*_+r*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=C*P,e[1]=(v*d*r-f*m*r-v*s*p+i*m*p+f*s*h-i*d*h)*P,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*h+i*l*h)*P,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*P,e[4]=w*P,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*h+t*d*h)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*h-t*l*h)*P,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*P,e[8]=_*P,e[9]=(g*f*r-u*v*r-g*i*p+t*v*p+u*i*h-t*f*h)*P,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*h+t*a*h)*P,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=k*P,e[13]=(u*v*s-g*f*s+g*i*d-t*v*d-u*i*m+t*f*m)*P,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*P,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,v=o*u,m=o*f,h=a*f,C=l*c,w=l*u,_=l*f,k=i.x,L=i.y,P=i.z;return s[0]=(1-(v+h))*k,s[1]=(p+_)*k,s[2]=(g-w)*k,s[3]=0,s[4]=(p-_)*L,s[5]=(1-(d+h))*L,s[6]=(m+C)*L,s[7]=0,s[8]=(g+w)*P,s[9]=(m-C)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const c=1/r,u=1/o,f=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=mi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===mi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ra)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=mi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),d=(t+e)*c,p=(i+s)*u;let g,v;if(a===mi)g=(o+r)*f,v=-2*f;else if(a===ra)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ms=new X,Cn=new St,vv=new X(0,0,0),xv=new X(1,1,1),Ci=new X,_o=new X,cn=new X,xf=new St,yf=new Zr;class qt{constructor(e=0,t=0,i=0,s=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const Mf=new X,Ss=new Zr,ti=new St,vo=new X,_r=new X,Mv=new X,Sv=new Zr,Sf=new X(1,0,0),bf=new X(0,1,0),Ef=new X(0,0,1),Tf={type:"added"},bv={type:"removed"},bs={type:"childadded",child:null},el={type:"childremoved",child:null};class Pt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new X,t=new qt,i=new Zr,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Sf,e)}rotateY(e){return this.rotateOnAxis(bf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sf,e)}translateY(e){return this.translateOnAxis(bf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(_r,vo,this.up):ti.lookAt(vo,_r,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ti),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tf),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bv),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tf),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,Mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new X(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new X,ni=new X,tl=new X,ii=new X,Es=new X,Ts=new X,wf=new X,nl=new X,il=new X,sl=new X,rl=new At,ol=new At,al=new At;class Pn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Rn.subVectors(e,t),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Rn.subVectors(s,t),ni.subVectors(i,t),tl.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ni),l=Rn.dot(tl),c=ni.dot(ni),u=ni.dot(tl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return rl.setScalar(0),ol.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,i),al.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rl,r.x),o.addScaledVector(ol,r.y),o.addScaledVector(al,r.z),o}static isFrontFacing(e,t,i,s){return Rn.subVectors(i,t),ni.subVectors(e,t),Rn.cross(ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Es.subVectors(s,i),Ts.subVectors(r,i),nl.subVectors(e,i);const l=Es.dot(nl),c=Ts.dot(nl);if(l<=0&&c<=0)return t.copy(i);il.subVectors(e,s);const u=Es.dot(il),f=Ts.dot(il);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Es,o);sl.subVectors(e,r);const p=Es.dot(sl),g=Ts.dot(sl);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ts,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return wf.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(wf,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(Es,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},xo={h:0,s:0,l:0};function ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Qc(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=$h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return st.fromWorkingColorSpace(kt.copy(this),e),Math.round(Qt(kt.r*255,0,255))*65536+Math.round(Qt(kt.g*255,0,255))*256+Math.round(Qt(kt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=fn){st.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(xo);const i=Lr(Ri.h,xo.h,t),s=Lr(Ri.s,xo.s,t),r=Lr(Ri.l,xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Xe;Xe.NAMES=$h;let Ev=0;class Gi extends ir{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=sr(),this.name="",this.blending=zs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Bl,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tu extends Gi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new X,yo=new it;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cf,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cf&&(e.usage=this.usage),e}}class qh extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yh extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tv=0;const gn=new St,cl=new Pt,ws=new X,un=new Jr,vr=new Jr,It=new X;class pn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?Yh:qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(un.min,vr.min),un.expandByPoint(It),It.addVectors(un.max,vr.max),un.expandByPoint(It)):(un.expandByPoint(vr.min),un.expandByPoint(vr.max))}un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),It.add(ws)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const c=new X,u=new X,f=new X,d=new it,p=new it,g=new it,v=new X,m=new X;function h(F,E,M){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[F].add(v),a[E].add(v),a[M].add(v),l[F].add(m),l[E].add(m),l[M].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,E=C.length;F<E;++F){const M=C[F],R=M.start,$=M.count;for(let te=R,le=R+$;te<le;te+=3)h(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const w=new X,_=new X,k=new X,L=new X;function P(F){k.fromBufferAttribute(s,F),L.copy(k);const E=a[F];w.copy(E),w.sub(k.multiplyScalar(k.dot(E))).normalize(),_.crossVectors(L,E);const R=_.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,R)}for(let F=0,E=C.length;F<E;++F){const M=C[F],R=M.start,$=M.count;for(let te=R,le=R+$;te<le;te+=3)P(e.getX(te+0)),P(e.getX(te+1)),P(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new En(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Af=new St,ji=new Ca,Mo=new Qr,Cf=new X,So=new X,bo=new X,Eo=new X,ul=new X,To=new X,Rf=new X,wo=new X;class We extends Pt{constructor(e=new pn,t=new tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ul.fromBufferAttribute(f,e),o?To.addScaledVector(ul,u):To.addScaledVector(ul.sub(t),u))}t.add(To)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Mo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Mo,Cf)===null||ji.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Af.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Af),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],C=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=C,k=w;_<k;_+=3){const L=a.getX(_),P=a.getX(_+1),F=a.getX(_+2);s=Ao(this,h,e,i,c,u,f,L,P,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const C=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=Ao(this,o,e,i,c,u,f,C,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],C=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=C,k=w;_<k;_+=3){const L=_,P=_+1,F=_+2;s=Ao(this,h,e,i,c,u,f,L,P,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const C=m,w=m+1,_=m+2;s=Ao(this,o,e,i,c,u,f,C,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wv(n,e,t,i,s,r,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:n}}function Ao(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,bo),n.getVertexPosition(c,Eo);const u=wv(n,e,t,i,So,bo,Eo,Rf);if(u){const f=new X;Pn.getBarycoord(Rf,So,bo,Eo,f),s&&(u.uv=Pn.getInterpolatedAttribute(s,a,l,c,f,new it)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,a,l,c,f,new it)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};Pn.getNormal(So,bo,Eo,d.normal),u.face=d,u.barycoord=f}return u}class gt extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function g(v,m,h,C,w,_,k,L,P,F,E){const M=_/P,R=k/F,$=_/2,te=k/2,le=L/2,pe=P+1,Z=F+1;let Y=0,I=0;const ye=new X;for(let xe=0;xe<Z;xe++){const Ce=xe*R-te;for(let Te=0;Te<pe;Te++){const Ye=Te*M-$;ye[v]=Ye*C,ye[m]=Ce*w,ye[h]=le,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[h]=L>0?1:-1,u.push(ye.x,ye.y,ye.z),f.push(Te/P),f.push(1-xe/F),Y+=1}}for(let xe=0;xe<F;xe++)for(let Ce=0;Ce<P;Ce++){const Te=d+Ce+pe*xe,Ye=d+Ce+pe*(xe+1),O=d+(Ce+1)+pe*(xe+1),z=d+(Ce+1)+pe*xe;l.push(Te,Ye,z),l.push(Ye,O,z),I+=6}a.addGroup(p,I,E),p+=I,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Js(n[t]);for(const s in i)e[s]=i[s]}return e}function Av(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Cv={clone:Js,merge:Kt};var Rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Gi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kh extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new X,Pf=new it,Df=new it;class dn extends Kh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Pf,Df),t.subVectors(Df,Pf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Cs=1;class Dv extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(As,Cs,e,t);s.layers=this.layers,this.add(s);const r=new dn(As,Cs,e,t);r.layers=this.layers,this.add(r);const o=new dn(As,Cs,e,t);o.layers=this.layers,this.add(o);const a=new dn(As,Cs,e,t);a.layers=this.layers,this.add(a);const l=new dn(As,Cs,e,t);l.layers=this.layers,this.add(l);const c=new dn(As,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zh extends nn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lv extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Fi});r.uniforms.tEquirect.value=t;const o=new We(s,r),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=$n),new Dv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const fl=new X,Iv=new X,Uv=new Je;class Ii{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=fl.subVectors(i,t).cross(Iv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uv.getNormalMatrix(e),s=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Qr,Co=new X;class nu{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],h=s[12],C=s[13],w=s[14],_=s[15];if(i[0].setComponents(l-r,d-c,m-p,_-h).normalize(),i[1].setComponents(l+r,d+c,m+p,_+h).normalize(),i[2].setComponents(l+o,d+u,m+g,_+C).normalize(),i[3].setComponents(l-o,d-u,m-g,_-C).normalize(),i[4].setComponents(l-a,d-f,m-v,_-w).normalize(),t===mi)i[5].setComponents(l+a,d+f,m+v,_+w).normalize();else if(t===ra)i[5].setComponents(a,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Co.x=s.normal.x>0?e.max.x:e.min.x,Co.y=s.normal.y>0?e.max.y:e.min.y,Co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Nv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class fs extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const C=h*d-o;for(let w=0;w<c;w++){const _=w*f-r;g.push(_,-C,0),v.push(0,0,1),m.push(w/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let C=0;C<a;C++){const w=C+c*h,_=C+c*(h+1),k=C+1+c*(h+1),L=C+1+c*h;p.push(w,_,L),p.push(_,k,L)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ov=`#ifdef USE_ALPHAHASH
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
#endif`,Bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vv=`#ifdef USE_AOMAP
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
#endif`,Gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wv=`#ifdef USE_BATCHING
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
#endif`,Xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Kv=`#ifdef USE_BUMPMAP
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
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,U0=`struct PhysicalMaterial {
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
}`,N0=`
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
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
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yx=`float getShadowMask() {
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
}`,Mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`#include <common>
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
}`,Vx=`#if DEPTH_PACKING == 3200
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
}`,Gx=`#define DISTANCE
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
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
}`,Qx=`#define MATCAP
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
}`,ey=`#define MATCAP
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
}`,ty=`#define NORMAL
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
}`,ny=`#define NORMAL
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
}`,iy=`#define PHONG
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
}`,sy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,oy=`#define STANDARD
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
}`,ay=`#define TOON
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
}`,ly=`#define TOON
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
}`,cy=`uniform float size;
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
}`,uy=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,dy=`uniform vec3 color;
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
}`,hy=`uniform float rotation;
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
}`,py=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Fv,alphahash_pars_fragment:Ov,alphamap_fragment:Bv,alphamap_pars_fragment:kv,alphatest_fragment:zv,alphatest_pars_fragment:Hv,aomap_fragment:Vv,aomap_pars_fragment:Gv,batching_pars_vertex:Wv,batching_vertex:Xv,begin_vertex:$v,beginnormal_vertex:qv,bsdfs:Yv,iridescence_fragment:jv,bumpmap_pars_fragment:Kv,clipping_planes_fragment:Zv,clipping_planes_pars_fragment:Jv,clipping_planes_pars_vertex:Qv,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:u0,emissivemap_pars_fragment:f0,colorspace_fragment:d0,colorspace_pars_fragment:h0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:x0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:E0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:w0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:P0,lights_phong_fragment:D0,lights_phong_pars_fragment:L0,lights_physical_fragment:I0,lights_physical_pars_fragment:U0,lights_fragment_begin:N0,lights_fragment_maps:F0,lights_fragment_end:O0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:H0,map_fragment:V0,map_pars_fragment:G0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:j0,morphnormal_vertex:K0,morphtarget_pars_vertex:Z0,morphtarget_vertex:J0,normal_fragment_begin:Q0,normal_fragment_maps:ex,normal_pars_fragment:tx,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:ox,clearcoat_pars_fragment:ax,iridescence_pars_fragment:lx,opaque_fragment:cx,packing:ux,premultiplied_alpha_fragment:fx,project_vertex:dx,dithering_fragment:hx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:vx,shadowmap_vertex:xx,shadowmask_pars_fragment:yx,skinbase_vertex:Mx,skinning_pars_vertex:Sx,skinning_vertex:bx,skinnormal_vertex:Ex,specularmap_fragment:Tx,specularmap_pars_fragment:wx,tonemapping_fragment:Ax,tonemapping_pars_fragment:Cx,transmission_fragment:Rx,transmission_pars_fragment:Px,uv_pars_fragment:Dx,uv_pars_vertex:Lx,uv_vertex:Ix,worldpos_vertex:Ux,background_vert:Nx,background_frag:Fx,backgroundCube_vert:Ox,backgroundCube_frag:Bx,cube_vert:kx,cube_frag:zx,depth_vert:Hx,depth_frag:Vx,distanceRGBA_vert:Gx,distanceRGBA_frag:Wx,equirect_vert:Xx,equirect_frag:$x,linedashed_vert:qx,linedashed_frag:Yx,meshbasic_vert:jx,meshbasic_frag:Kx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:Qx,meshmatcap_frag:ey,meshnormal_vert:ty,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:oy,meshtoon_vert:ay,meshtoon_frag:ly,points_vert:cy,points_frag:uy,shadow_vert:fy,shadow_frag:dy,sprite_vert:hy,sprite_frag:py},Pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Gn={basic:{uniforms:Kt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Kt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Kt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Kt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Kt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Kt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Kt([Pe.points,Pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Kt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Kt([Pe.common,Pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Kt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Kt([Pe.sprite,Pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Kt([Pe.common,Pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Kt([Pe.lights,Pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Gn.physical={uniforms:Kt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ro={r:0,b:0,g:0},Zi=new qt,my=new St;function gy(n,e,t,i,s,r,o){const a=new Xe(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(C){let w=C.isScene===!0?C.background:null;return w&&w.isTexture&&(w=(C.backgroundBlurriness>0?t:e).get(w)),w}function v(C){let w=!1;const _=g(C);_===null?h(a,l):_&&_.isColor&&(h(_,1),w=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,w){const _=g(w);_&&(_.isCubeTexture||_.mapping===wa)?(u===void 0&&(u=new We(new gt(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Js(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(w.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(Zi)),u.material.toneMapped=st.getTransfer(_.colorSpace)!==mt,(f!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new We(new fs(2,2),new Hi({name:"BackgroundMaterial",uniforms:Js(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=st.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function h(C,w){C.getRGB(Ro,jh(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(C,w=1){a.set(C),l=w,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,h(a,l)},render:v,addToRenderList:m}}function _y(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,R,$,te,le){let pe=!1;const Z=f(te,$,R);r!==Z&&(r=Z,c(r.object)),pe=p(M,te,$,le),pe&&g(M,te,$,le),le!==null&&e.update(le,n.ELEMENT_ARRAY_BUFFER),(pe||o)&&(o=!1,_(M,R,$,te),le!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,R,$){const te=$.wireframe===!0;let le=i[M.id];le===void 0&&(le={},i[M.id]=le);let pe=le[R.id];pe===void 0&&(pe={},le[R.id]=pe);let Z=pe[te];return Z===void 0&&(Z=d(l()),pe[te]=Z),Z}function d(M){const R=[],$=[],te=[];for(let le=0;le<t;le++)R[le]=0,$[le]=0,te[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:$,attributeDivisors:te,object:M,attributes:{},index:null}}function p(M,R,$,te){const le=r.attributes,pe=R.attributes;let Z=0;const Y=$.getAttributes();for(const I in Y)if(Y[I].location>=0){const xe=le[I];let Ce=pe[I];if(Ce===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;Z++}return r.attributesNum!==Z||r.index!==te}function g(M,R,$,te){const le={},pe=R.attributes;let Z=0;const Y=$.getAttributes();for(const I in Y)if(Y[I].location>=0){let xe=pe[I];xe===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),le[I]=Ce,Z++}r.attributes=le,r.attributesNum=Z,r.index=te}function v(){const M=r.newAttributes;for(let R=0,$=M.length;R<$;R++)M[R]=0}function m(M){h(M,0)}function h(M,R){const $=r.newAttributes,te=r.enabledAttributes,le=r.attributeDivisors;$[M]=1,te[M]===0&&(n.enableVertexAttribArray(M),te[M]=1),le[M]!==R&&(n.vertexAttribDivisor(M,R),le[M]=R)}function C(){const M=r.newAttributes,R=r.enabledAttributes;for(let $=0,te=R.length;$<te;$++)R[$]!==M[$]&&(n.disableVertexAttribArray($),R[$]=0)}function w(M,R,$,te,le,pe,Z){Z===!0?n.vertexAttribIPointer(M,R,$,le,pe):n.vertexAttribPointer(M,R,$,te,le,pe)}function _(M,R,$,te){v();const le=te.attributes,pe=$.getAttributes(),Z=R.defaultAttributeValues;for(const Y in pe){const I=pe[Y];if(I.location>=0){let ye=le[Y];if(ye===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ye!==void 0){const xe=ye.normalized,Ce=ye.itemSize,Te=e.get(ye);if(Te===void 0)continue;const Ye=Te.buffer,O=Te.type,z=Te.bytesPerElement,Q=O===n.INT||O===n.UNSIGNED_INT||ye.gpuType===$c;if(ye.isInterleavedBufferAttribute){const ee=ye.data,be=ee.stride,De=ye.offset;if(ee.isInstancedInterleavedBuffer){for(let Ne=0;Ne<I.locationSize;Ne++)h(I.location+Ne,ee.meshPerAttribute);M.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ne=0;Ne<I.locationSize;Ne++)m(I.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ne=0;Ne<I.locationSize;Ne++)w(I.location+Ne,Ce/I.locationSize,O,xe,be*z,(De+Ce/I.locationSize*Ne)*z,Q)}else{if(ye.isInstancedBufferAttribute){for(let ee=0;ee<I.locationSize;ee++)h(I.location+ee,ye.meshPerAttribute);M.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ee=0;ee<I.locationSize;ee++)m(I.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ee=0;ee<I.locationSize;ee++)w(I.location+ee,Ce/I.locationSize,O,xe,Ce*z,Ce/I.locationSize*ee*z,Q)}}else if(Z!==void 0){const xe=Z[Y];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(I.location,xe);break;case 3:n.vertexAttrib3fv(I.location,xe);break;case 4:n.vertexAttrib4fv(I.location,xe);break;default:n.vertexAttrib1fv(I.location,xe)}}}}C()}function k(){F();for(const M in i){const R=i[M];for(const $ in R){const te=R[$];for(const le in te)u(te[le].object),delete te[le];delete R[$]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const $ in R){const te=R[$];for(const le in te)u(te[le].object),delete te[le];delete R[$]}delete i[M.id]}function P(M){for(const R in i){const $=i[R];if($[M.id]===void 0)continue;const te=$[M.id];for(const le in te)u(te[le].object),delete te[le];delete $[M.id]}}function F(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function vy(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Mi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==pi&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:k,maxSamples:L}}function yy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ii,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const C=r?0:i,w=C*4;let _=h.clippingState||null;l.value=_,_=u(g,d,w,p);for(let k=0;k!==w;++k)_[k]=t[k];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,_=p;w!==v;++w,_+=4)o.copy(f[w]).applyMatrix4(C,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function My(n){let e=new WeakMap;function t(o,a){return a===$l?o.mapping=Ys:a===ql&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$l||a===ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Qh extends Kh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,Lf=[.125,.215,.35,.446,.526,.582],ns=20,dl=new Qh,If=new Xe;let hl=null,pl=0,ml=0,gl=!1;const es=(1+Math.sqrt(5))/2,Rs=1/es,Uf=[new X(-es,Rs,0),new X(es,Rs,0),new X(-Rs,0,es),new X(Rs,0,es),new X(0,es,-Rs),new X(0,es,Rs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){hl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Kr,format:Ln,colorSpace:nr,depthBuffer:!1},s=Ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sy(r)),this._blurMaterial=by(r,e,t)}return s}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,s){const a=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(If),u.toneMapping=Oi,u.autoClear=!1;const p=new tu({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new We(new gt,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(If),v=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):C===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const w=this._cubeSize;Po(s,C*w,h>2?w:0,w,w),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ys||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uf[(s-r-1)%Uf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new We(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const h=[];let C=0;for(let P=0;P<ns;++P){const F=P/v,E=Math.exp(-F*F/2);h.push(E),P===0?C+=E:P<m&&(C+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const _=this._sizeLods[s],k=3*_*(s>w-Us?s-w+Us:0),L=4*(this._cubeSize-_);Po(t,k,L,3*_,2*_),l.setRenderTarget(t),l.render(f,dl)}}function Sy(n){const e=[],t=[],i=[];let s=n;const r=n-Us+1+Lf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Us?l=Lf[o-n+Us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,C=new Float32Array(v*g*p),w=new Float32Array(m*g*p),_=new Float32Array(h*g*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,F=L>2?0:-1,E=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];C.set(E,v*g*L),w.set(d,m*g*L);const M=[L,L,L,L,L,L];_.set(M,h*g*L)}const k=new pn;k.setAttribute("position",new En(C,v)),k.setAttribute("uv",new En(w,m)),k.setAttribute("faceIndex",new En(_,h)),e.push(k),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ff(n,e,t){const i=new us(n,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function by(n,e,t){const i=new Float32Array(ns),s=new X(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Of(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Bf(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function Ey(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$l||l===ql,u=l===Ys||l===js;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Nf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Nf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ty(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Sr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function wy(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const C=p.array;v=p.version;for(let w=0,_=C.length;w<_;w+=3){const k=C[w+0],L=C[w+1],P=C[w+2];d.push(k,L,L,P,P,k)}}else if(g!==void 0){const C=g.array;v=g.version;for(let w=0,_=C.length/3-1;w<_;w+=3){const k=w+0,L=w+1,P=w+2;d.push(k,L,L,P,P,k)}}else return;const m=new(Gh(d)?Yh:qh)(d,1);m.version=v;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ay(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let h=0;for(let C=0;C<g;C++)h+=p[C]*v[C];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Cy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ry(n,e,t){const i=new WeakMap,s=new At;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let _=a.attributes.position.count*w,k=1;_>e.maxTextureSize&&(k=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const L=new Float32Array(_*k*4*f),P=new Xh(L,_,k,f);P.type=pi,P.needsUpdate=!0;const F=w*4;for(let M=0;M<f;M++){const R=m[M],$=h[M],te=C[M],le=_*k*4*M;for(let pe=0;pe<R.count;pe++){const Z=pe*F;p===!0&&(s.fromBufferAttribute(R,pe),L[le+Z+0]=s.x,L[le+Z+1]=s.y,L[le+Z+2]=s.z,L[le+Z+3]=0),g===!0&&(s.fromBufferAttribute($,pe),L[le+Z+4]=s.x,L[le+Z+5]=s.y,L[le+Z+6]=s.z,L[le+Z+7]=0),v===!0&&(s.fromBufferAttribute(te,pe),L[le+Z+8]=s.x,L[le+Z+9]=s.y,L[le+Z+10]=s.z,L[le+Z+11]=te.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new it(_,k)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Py(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class ep extends nn{constructor(e,t,i,s,r,o,a,l,c,u=Hs){if(u!==Hs&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=cs),i===void 0&&u===Zs&&(i=Ks),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tp=new nn,kf=new ep(1,1),np=new Xh,ip=new gv,sp=new Zh,zf=[],Hf=[],Vf=new Float32Array(16),Gf=new Float32Array(9),Wf=new Float32Array(4);function rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ra(n,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Ny(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Wf.set(i),n.uniformMatrix2fv(this.addr,!1,Wf),Lt(t,i)}}function Fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Gf.set(i),n.uniformMatrix3fv(this.addr,!1,Gf),Lt(t,i)}}function Oy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),Lt(t,i)}}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function $y(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kf.compareFunction=Vh,r=kf):r=tp,t.setTexture2D(e||r,s)}function qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ip,s)}function Yy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sp,s)}function jy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||np,s)}function Ky(n){switch(n){case 5126:return Dy;case 35664:return Ly;case 35665:return Iy;case 35666:return Uy;case 35674:return Ny;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Hy;case 5125:return Vy;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return jy}}function Zy(n,e){n.uniform1fv(this.addr,e)}function Jy(n,e){const t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Qy(n,e){const t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function eM(n,e){const t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function tM(n,e){const t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nM(n,e){const t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iM(n,e){const t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sM(n,e){n.uniform1iv(this.addr,e)}function rM(n,e){n.uniform2iv(this.addr,e)}function oM(n,e){n.uniform3iv(this.addr,e)}function aM(n,e){n.uniform4iv(this.addr,e)}function lM(n,e){n.uniform1uiv(this.addr,e)}function cM(n,e){n.uniform2uiv(this.addr,e)}function uM(n,e){n.uniform3uiv(this.addr,e)}function fM(n,e){n.uniform4uiv(this.addr,e)}function dM(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tp,r[o])}function hM(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ip,r[o])}function pM(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sp,r[o])}function mM(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||np,r[o])}function gM(n){switch(n){case 5126:return Zy;case 35664:return Jy;case 35665:return Qy;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class _M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}}class vM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gM(t.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function Xf(n,e){n.seq.push(e),n.map[e.id]=e}function yM(n,e,t){const i=n.name,s=i.length;for(_l.lastIndex=0;;){const r=_l.exec(i),o=_l.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xf(t,c===void 0?new _M(a,n,e):new vM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new xM(a),Xf(t,f)),t=f}}}class jo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function $f(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MM=37297;let SM=0;function bM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qf=new Je;function EM(n){st._getMatrix(qf,st.workingColorSpace,n);const e=`mat3( ${qf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+bM(n.getShaderSource(e),o)}else return s}function TM(n,e){const t=EM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wM(n,e){let t;switch(e){case R_:t="Linear";break;case P_:t="Reinhard";break;case D_:t="Cineon";break;case Ph:t="ACESFilmic";break;case I_:t="AgX";break;case U_:t="Neutral";break;case L_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Do=new X;function AM(){st.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function RM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function br(n){return n!==""}function jf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace(DM,IM)}const LM=new Map;function IM(n,e){let t=et[e];if(t===void 0){const i=LM.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sc(t)}const UM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(n){return n.replace(UM,NM)}function NM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function FM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case js:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function kM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case A_:e="ENVMAP_BLENDING_MIX";break;case C_:e="ENVMAP_BLENDING_ADD";break}return e}function zM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function HM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=FM(t),c=OM(t),u=BM(t),f=kM(t),d=zM(t),p=CM(t),g=RM(r),v=s.createProgram();let m,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),h.length>0&&(h+=`
`)):(m=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),h=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?et.tonemapping_pars_fragment:"",t.toneMapping!==Oi?wM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,TM("linearToOutputTexel",t.outputColorSpace),AM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Sc(o),o=jf(o,t),o=Kf(o,t),a=Sc(a),a=jf(a,t),a=Kf(a,t),o=Zf(o),a=Zf(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=C+m+o,_=C+h+a,k=$f(s,s.VERTEX_SHADER,w),L=$f(s,s.FRAGMENT_SHADER,_);s.attachShader(v,k),s.attachShader(v,L),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(R){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),te=s.getShaderInfoLog(k).trim(),le=s.getShaderInfoLog(L).trim();let pe=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,k,L);else{const Y=Yf(s,k,"vertex"),I=Yf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+$+`
`+Y+`
`+I)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(te===""||le==="")&&(Z=!1);Z&&(R.diagnostics={runnable:pe,programLog:$,vertexShader:{log:te,prefix:m},fragmentShader:{log:le,prefix:h}})}s.deleteShader(k),s.deleteShader(L),F=new jo(s,v),E=PM(s,v)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,MM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=L,this}let VM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WM(e),t.set(e,i)),i}}class WM{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}}function XM(n,e,t,i,s,r,o){const a=new eu,l=new GM,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,R,$,te){const le=$.fog,pe=te.geometry,Z=E.isMeshStandardMaterial?$.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),I=Y&&Y.mapping===wa?Y.image.height:null,ye=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const xe=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Ce=xe!==void 0?xe.length:0;let Te=0;pe.morphAttributes.position!==void 0&&(Te=1),pe.morphAttributes.normal!==void 0&&(Te=2),pe.morphAttributes.color!==void 0&&(Te=3);let Ye,O,z,Q;if(ye){const ht=Gn[ye];Ye=ht.vertexShader,O=ht.fragmentShader}else Ye=E.vertexShader,O=E.fragmentShader,l.update(E),z=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);const ee=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),De=te.isInstancedMesh===!0,Ne=te.isBatchedMesh===!0,tt=!!E.map,A=!!E.matcap,U=!!Y,b=!!E.aoMap,de=!!E.lightMap,ie=!!E.bumpMap,ue=!!E.normalMap,he=!!E.displacementMap,se=!!E.emissiveMap,V=!!E.metalnessMap,y=!!E.roughnessMap,x=E.anisotropy>0,D=E.clearcoat>0,G=E.dispersion>0,ne=E.iridescence>0,re=E.sheen>0,Se=E.transmission>0,ve=x&&!!E.anisotropyMap,Me=D&&!!E.clearcoatMap,Be=D&&!!E.clearcoatNormalMap,H=D&&!!E.clearcoatRoughnessMap,q=ne&&!!E.iridescenceMap,J=ne&&!!E.iridescenceThicknessMap,N=re&&!!E.sheenColorMap,T=re&&!!E.sheenRoughnessMap,me=!!E.specularMap,we=!!E.specularColorMap,Fe=!!E.specularIntensityMap,B=Se&&!!E.transmissionMap,oe=Se&&!!E.thicknessMap,ae=!!E.gradientMap,ge=!!E.alphaMap,Le=E.alphaTest>0,Ie=!!E.alphaHash,je=!!E.extensions;let wt=Oi;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(wt=n.toneMapping);const Ot={shaderID:ye,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:O,defines:E.defines,customVertexShaderID:z,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&te._colorsTexture!==null,instancing:De,instancingColor:De&&te.instanceColor!==null,instancingMorph:De&&te.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:nr,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:A,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:I,aoMap:b,lightMap:de,bumpMap:ie,normalMap:ue,displacementMap:d&&he,emissiveMap:se,normalMapObjectSpace:ue&&E.normalMapType===B_,normalMapTangentSpace:ue&&E.normalMapType===Jc,metalnessMap:V,roughnessMap:y,anisotropy:x,anisotropyMap:ve,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:Be,clearcoatRoughnessMap:H,dispersion:G,iridescence:ne,iridescenceMap:q,iridescenceThicknessMap:J,sheen:re,sheenColorMap:N,sheenRoughnessMap:T,specularMap:me,specularColorMap:we,specularIntensityMap:Fe,transmission:Se,transmissionMap:B,thicknessMap:oe,gradientMap:ae,opaque:E.transparent===!1&&E.blending===zs&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Le,alphaHash:Ie,combine:E.combine,mapUv:tt&&v(E.map.channel),aoMapUv:b&&v(E.aoMap.channel),lightMapUv:de&&v(E.lightMap.channel),bumpMapUv:ie&&v(E.bumpMap.channel),normalMapUv:ue&&v(E.normalMap.channel),displacementMapUv:he&&v(E.displacementMap.channel),emissiveMapUv:se&&v(E.emissiveMap.channel),metalnessMapUv:V&&v(E.metalnessMap.channel),roughnessMapUv:y&&v(E.roughnessMap.channel),anisotropyMapUv:ve&&v(E.anisotropyMap.channel),clearcoatMapUv:Me&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:N&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:T&&v(E.sheenRoughnessMap.channel),specularMapUv:me&&v(E.specularMap.channel),specularColorMapUv:we&&v(E.specularColorMap.channel),specularIntensityMapUv:Fe&&v(E.specularIntensityMap.channel),transmissionMapUv:B&&v(E.transmissionMap.channel),thicknessMapUv:oe&&v(E.thicknessMap.channel),alphaMapUv:ge&&v(E.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ue||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(tt||ge),fog:!!le,useFog:E.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===mt,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hi,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(C(M,E),w(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function C(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function w(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const M=g[E.type];let R;if(M){const $=Gn[M];R=Cv.clone($.uniforms)}else R=E.uniforms;return R}function k(E,M){let R;for(let $=0,te=u.length;$<te;$++){const le=u[$];if(le.cacheKey===M){R=le,++R.usedTimes;break}}return R===void 0&&(R=new HM(n,M,E,r),u.push(R)),R}function L(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:_,acquireProgram:k,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:F}}function $M(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function qM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ed(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||qM),i.length>1&&i.sort(d||Qf),s.length>1&&s.sort(d||Qf)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function YM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ed,n.set(i,[o])):s>=r.length?(o=new ed,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Xe};break;case"SpotLight":t={position:new X,direction:new X,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function KM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ZM=0;function JM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QM(n){const e=new jM,t=KM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new St,o=new St;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,C=0,w=0,_=0,k=0,L=0,P=0;c.sort(JM);for(let E=0,M=c.length;E<M;E++){const R=c[E],$=R.color,te=R.intensity,le=R.distance,pe=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=$.r*te,f+=$.g*te,d+=$.b*te;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(R.sh.coefficients[Z],te);P++}else if(R.isDirectionalLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,I=t.get(R);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=pe,i.directionalShadowMatrix[p]=R.shadow.matrix,C++}i.directional[p]=Z,p++}else if(R.isSpotLight){const Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy($).multiplyScalar(te),Z.distance=le,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,i.spot[v]=Z;const Y=R.shadow;if(R.map&&(i.spotLightMap[k]=R.map,k++,Y.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[v]=Y.matrix,R.castShadow){const I=t.get(R);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=pe,_++}v++}else if(R.isRectAreaLight){const Z=e.get(R);Z.color.copy($).multiplyScalar(te),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Z,m++}else if(R.isPointLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const Y=R.shadow,I=t.get(R);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=pe,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=Z,g++}else if(R.isHemisphereLight){const Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(te),Z.groundColor.copy(R.groundColor).multiplyScalar(te),i.hemi[h]=Z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==C||F.numPointShadows!==w||F.numSpotShadows!==_||F.numSpotMaps!==k||F.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+k-L,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,F.directionalLength=p,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=C,F.numPointShadows=w,F.numSpotShadows=_,F.numSpotMaps=k,F.numLightProbes=P,i.version=ZM++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,C=c.length;h<C;h++){const w=c[h];if(w.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(w.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function td(n){const e=new QM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new td(n),e.set(s,[a])):r>=o.length?(a=new td(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class tS extends Gi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=F_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nS extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sS=`uniform sampler2D shadow_pass;
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
}`;function rS(n,e,t){let i=new nu;const s=new it,r=new it,o=new At,a=new tS({depthPacking:O_}),l=new nS,c={},u=t.maxTextureSize,f={[zi]:an,[an]:zi,[hi]:hi},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:iS,fragmentShader:sS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let h=this.type;this.render=function(L,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Fi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=h!==oi&&this.type===oi,le=h===oi&&this.type!==oi;for(let pe=0,Z=L.length;pe<Z;pe++){const Y=L[pe],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const ye=I.getFrameExtents();if(s.multiply(ye),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,I.mapSize.y=r.y)),I.map===null||te===!0||le===!0){const Ce=this.type!==oi?{minFilter:Nn,magFilter:Nn}:{};I.map!==null&&I.map.dispose(),I.map=new us(s.x,s.y,Ce),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const xe=I.getViewportCount();for(let Ce=0;Ce<xe;Ce++){const Te=I.getViewport(Ce);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),$.viewport(o),I.updateMatrices(Y,Ce),i=I.getFrustum(),_(P,F,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===oi&&C(I,F),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,R)};function C(L,P){const F=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new us(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,F,p,v,null)}function w(L,P,F,E){let M=null;const R=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)M=R;else if(M=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const $=M.uuid,te=P.uuid;let le=c[$];le===void 0&&(le={},c[$]=le);let pe=le[te];pe===void 0&&(pe=M.clone(),le[te]=pe,P.addEventListener("dispose",k)),M=pe}if(M.visible=P.visible,M.wireframe=P.wireframe,E===oi?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=n.properties.get(M);$.light=F}return M}function _(L,P,F,E,M){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===oi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const te=e.update(L),le=L.material;if(Array.isArray(le)){const pe=te.groups;for(let Z=0,Y=pe.length;Z<Y;Z++){const I=pe[Z],ye=le[I.materialIndex];if(ye&&ye.visible){const xe=w(L,ye,E,M);L.onBeforeShadow(n,L,P,F,te,xe,I),n.renderBufferDirect(F,null,te,xe,L,I),L.onAfterShadow(n,L,P,F,te,xe,I)}}}else if(le.visible){const pe=w(L,le,E,M);L.onBeforeShadow(n,L,P,F,te,pe,null),n.renderBufferDirect(F,null,te,pe,L,null),L.onAfterShadow(n,L,P,F,te,pe,null)}}const $=L.children;for(let te=0,le=$.length;te<le;te++)_($[te],P,F,E,M)}function k(L){L.target.removeEventListener("dispose",k);for(const F in c){const E=c[F],M=L.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const oS={[kl]:zl,[Hl]:Wl,[Vl]:Xl,[qs]:Gl,[zl]:kl,[Wl]:Hl,[Xl]:Vl,[Gl]:qs};function aS(n,e){function t(){let B=!1;const oe=new At;let ae=null;const ge=new At(0,0,0,0);return{setMask:function(Le){ae!==Le&&!B&&(n.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){B=Le},setClear:function(Le,Ie,je,wt,Ot){Ot===!0&&(Le*=wt,Ie*=wt,je*=wt),oe.set(Le,Ie,je,wt),ge.equals(oe)===!1&&(n.clearColor(Le,Ie,je,wt),ge.copy(oe))},reset:function(){B=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let B=!1,oe=!1,ae=null,ge=null,Le=null;return{setReversed:function(Ie){if(oe!==Ie){const je=e.get("EXT_clip_control");oe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const wt=Le;Le=null,this.setClear(wt)}oe=Ie},getReversed:function(){return oe},setTest:function(Ie){Ie?ee(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!B&&(n.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(oe&&(Ie=oS[Ie]),ge!==Ie){switch(Ie){case kl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Ie}},setLocked:function(Ie){B=Ie},setClear:function(Ie){Le!==Ie&&(oe&&(Ie=1-Ie),n.clearDepth(Ie),Le=Ie)},reset:function(){B=!1,ae=null,ge=null,Le=null,oe=!1}}}function s(){let B=!1,oe=null,ae=null,ge=null,Le=null,Ie=null,je=null,wt=null,Ot=null;return{setTest:function(ht){B||(ht?ee(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!B&&(n.stencilMask(ht),oe=ht)},setFunc:function(ht,Tn,Kn){(ae!==ht||ge!==Tn||Le!==Kn)&&(n.stencilFunc(ht,Tn,Kn),ae=ht,ge=Tn,Le=Kn)},setOp:function(ht,Tn,Kn){(Ie!==ht||je!==Tn||wt!==Kn)&&(n.stencilOp(ht,Tn,Kn),Ie=ht,je=Tn,wt=Kn)},setLocked:function(ht){B=ht},setClear:function(ht){Ot!==ht&&(n.clearStencil(ht),Ot=ht)},reset:function(){B=!1,oe=null,ae=null,ge=null,Le=null,Ie=null,je=null,wt=null,Ot=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,C=null,w=null,_=null,k=null,L=null,P=new Xe(0,0,0),F=0,E=!1,M=null,R=null,$=null,te=null,le=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=Y>=1):I.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=Y>=2);let ye=null,xe={};const Ce=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Ye=new At().fromArray(Ce),O=new At().fromArray(Te);function z(B,oe,ae,ge){const Le=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(B,Ie),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<ae;je++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(oe+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Ie}const Q={};Q[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(qs),ie(!1),ue(sf),ee(n.CULL_FACE),b(Fi);function ee(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function be(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function De(B,oe){return f[B]!==oe?(n.bindFramebuffer(B,oe),f[B]=oe,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=oe),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ne(B,oe){let ae=p,ge=!1;if(B){ae=d.get(oe),ae===void 0&&(ae=[],d.set(oe,ae));const Le=B.textures;if(ae.length!==Le.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,je=Le.length;Ie<je;Ie++)ae[Ie]=n.COLOR_ATTACHMENT0+Ie;ae.length=Le.length,ge=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ae)}function tt(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const A={[ts]:n.FUNC_ADD,[u_]:n.FUNC_SUBTRACT,[f_]:n.FUNC_REVERSE_SUBTRACT};A[d_]=n.MIN,A[h_]=n.MAX;const U={[p_]:n.ZERO,[m_]:n.ONE,[g_]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[S_]:n.SRC_ALPHA_SATURATE,[y_]:n.DST_COLOR,[v_]:n.DST_ALPHA,[__]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[M_]:n.ONE_MINUS_DST_COLOR,[x_]:n.ONE_MINUS_DST_ALPHA,[b_]:n.CONSTANT_COLOR,[E_]:n.ONE_MINUS_CONSTANT_COLOR,[T_]:n.CONSTANT_ALPHA,[w_]:n.ONE_MINUS_CONSTANT_ALPHA};function b(B,oe,ae,ge,Le,Ie,je,wt,Ot,ht){if(B===Fi){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(ee(n.BLEND),v=!0),B!==c_){if(B!==m||ht!==E){if((h!==ts||_!==ts)&&(n.blendEquation(n.FUNC_ADD),h=ts,_=ts),ht)switch(B){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rf:n.blendFunc(n.ONE,n.ONE);break;case of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case af:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case af:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}C=null,w=null,k=null,L=null,P.set(0,0,0),F=0,m=B,E=ht}return}Le=Le||oe,Ie=Ie||ae,je=je||ge,(oe!==h||Le!==_)&&(n.blendEquationSeparate(A[oe],A[Le]),h=oe,_=Le),(ae!==C||ge!==w||Ie!==k||je!==L)&&(n.blendFuncSeparate(U[ae],U[ge],U[Ie],U[je]),C=ae,w=ge,k=Ie,L=je),(wt.equals(P)===!1||Ot!==F)&&(n.blendColor(wt.r,wt.g,wt.b,Ot),P.copy(wt),F=Ot),m=B,E=!1}function de(B,oe){B.side===hi?be(n.CULL_FACE):ee(n.CULL_FACE);let ae=B.side===an;oe&&(ae=!ae),ie(ae),B.blending===zs&&B.transparent===!1?b(Fi):b(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const ge=B.stencilWrite;a.setTest(ge),ge&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),se(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(B){M!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),M=B)}function ue(B){B!==o_?(ee(n.CULL_FACE),B!==R&&(B===sf?n.cullFace(n.BACK):B===a_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),R=B}function he(B){B!==$&&(Z&&n.lineWidth(B),$=B)}function se(B,oe,ae){B?(ee(n.POLYGON_OFFSET_FILL),(te!==oe||le!==ae)&&(n.polygonOffset(oe,ae),te=oe,le=ae)):be(n.POLYGON_OFFSET_FILL)}function V(B){B?ee(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function y(B){B===void 0&&(B=n.TEXTURE0+pe-1),ye!==B&&(n.activeTexture(B),ye=B)}function x(B,oe,ae){ae===void 0&&(ye===null?ae=n.TEXTURE0+pe-1:ae=ye);let ge=xe[ae];ge===void 0&&(ge={type:void 0,texture:void 0},xe[ae]=ge),(ge.type!==B||ge.texture!==oe)&&(ye!==ae&&(n.activeTexture(ae),ye=ae),n.bindTexture(B,oe||Q[B]),ge.type=B,ge.texture=oe)}function D(){const B=xe[ye];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(B){Ye.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function T(B){O.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),O.copy(B))}function me(B,oe){let ae=c.get(oe);ae===void 0&&(ae=new WeakMap,c.set(oe,ae));let ge=ae.get(B);ge===void 0&&(ge=n.getUniformBlockIndex(oe,B.name),ae.set(B,ge))}function we(B,oe){const ge=c.get(oe).get(B);l.get(oe)!==ge&&(n.uniformBlockBinding(oe,ge,B.__bindingPointIndex),l.set(oe,ge))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ye=null,xe={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,C=null,w=null,_=null,k=null,L=null,P=new Xe(0,0,0),F=0,E=!1,M=null,R=null,$=null,te=null,le=null,Ye.set(0,0,n.canvas.width,n.canvas.height),O.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:be,bindFramebuffer:De,drawBuffers:Ne,useProgram:tt,setBlending:b,setMaterial:de,setFlipSided:ie,setCullFace:ue,setLineWidth:he,setPolygonOffset:se,setScissorTest:V,activeTexture:y,bindTexture:x,unbindTexture:D,compressedTexImage2D:G,compressedTexImage3D:ne,texImage2D:q,texImage3D:J,updateUBOMapping:me,uniformBlockBinding:we,texStorage2D:Be,texStorage3D:H,texSubImage2D:re,texSubImage3D:Se,compressedTexSubImage2D:ve,compressedTexSubImage3D:Me,scissor:N,viewport:T,reset:Fe}}function nd(n,e,t,i){const s=lS(i);switch(t){case Nh:return n*e;case Oh:return n*e;case Bh:return n*e*2;case kh:return n*e/s.components*s.byteLength;case jc:return n*e/s.components*s.byteLength;case zh:return n*e*2/s.components*s.byteLength;case Kc:return n*e*2/s.components*s.byteLength;case Fh:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case Zc:return n*e*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Ql:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case Jl:return Math.max(n,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yo:case _c:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hh:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lS(n){switch(n){case Mi:case Lh:return{byteLength:1,components:1};case Vr:case Ih:case Kr:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case cs:case $c:case pi:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return p?new OffscreenCanvas(y,x):oa("canvas")}function v(y,x,D){let G=1;const ne=V(y);if((ne.width>D||ne.height>D)&&(G=D/Math.max(ne.width,ne.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const re=Math.floor(G*ne.width),Se=Math.floor(G*ne.height);f===void 0&&(f=g(re,Se));const ve=x?g(re,Se):f;return ve.width=re,ve.height=Se,ve.getContext("2d").drawImage(y,0,0,re,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+Se+")."),ve}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),y;return y}function m(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function C(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(y,x,D,G,ne=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let re=x;if(x===n.RED&&(D===n.FLOAT&&(re=n.R32F),D===n.HALF_FLOAT&&(re=n.R16F),D===n.UNSIGNED_BYTE&&(re=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(re=n.R8UI),D===n.UNSIGNED_SHORT&&(re=n.R16UI),D===n.UNSIGNED_INT&&(re=n.R32UI),D===n.BYTE&&(re=n.R8I),D===n.SHORT&&(re=n.R16I),D===n.INT&&(re=n.R32I)),x===n.RG&&(D===n.FLOAT&&(re=n.RG32F),D===n.HALF_FLOAT&&(re=n.RG16F),D===n.UNSIGNED_BYTE&&(re=n.RG8)),x===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(re=n.RG8UI),D===n.UNSIGNED_SHORT&&(re=n.RG16UI),D===n.UNSIGNED_INT&&(re=n.RG32UI),D===n.BYTE&&(re=n.RG8I),D===n.SHORT&&(re=n.RG16I),D===n.INT&&(re=n.RG32I)),x===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(re=n.RGB8UI),D===n.UNSIGNED_SHORT&&(re=n.RGB16UI),D===n.UNSIGNED_INT&&(re=n.RGB32UI),D===n.BYTE&&(re=n.RGB8I),D===n.SHORT&&(re=n.RGB16I),D===n.INT&&(re=n.RGB32I)),x===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),D===n.UNSIGNED_INT&&(re=n.RGBA32UI),D===n.BYTE&&(re=n.RGBA8I),D===n.SHORT&&(re=n.RGBA16I),D===n.INT&&(re=n.RGBA32I)),x===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),x===n.RGBA){const Se=ne?Aa:st.getTransfer(G);D===n.FLOAT&&(re=n.RGBA32F),D===n.HALF_FLOAT&&(re=n.RGBA16F),D===n.UNSIGNED_BYTE&&(re=Se===mt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(y,x){let D;return y?x===null||x===cs||x===Ks?D=n.DEPTH24_STENCIL8:x===pi?D=n.DEPTH32F_STENCIL8:x===Vr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===cs||x===Ks?D=n.DEPTH_COMPONENT24:x===pi?D=n.DEPTH_COMPONENT32F:x===Vr&&(D=n.DEPTH_COMPONENT16),D}function k(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Nn&&y.minFilter!==$n?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function L(y){const x=y.target;x.removeEventListener("dispose",L),F(x),x.isVideoTexture&&u.delete(x)}function P(y){const x=y.target;x.removeEventListener("dispose",P),M(x)}function F(y){const x=i.get(y);if(x.__webglInit===void 0)return;const D=y.source,G=d.get(D);if(G){const ne=G[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(y),Object.keys(G).length===0&&d.delete(D)}i.remove(y)}function E(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const D=y.source,G=d.get(D);delete G[x.__cacheKey],o.memory.textures--}function M(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let ne=0;ne<x.__webglFramebuffer[G].length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[G][ne]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=y.textures;for(let G=0,ne=D.length;G<ne;G++){const re=i.get(D[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(D[G])}i.remove(y)}let R=0;function $(){R=0}function te(){const y=R;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),R+=1,y}function le(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function pe(y,x){const D=i.get(y);if(y.isVideoTexture&&he(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){const G=y.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(D,y,x);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function Z(y,x){const D=i.get(y);if(y.version>0&&D.__version!==y.version){O(D,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function Y(y,x){const D=i.get(y);if(y.version>0&&D.__version!==y.version){O(D,y,x);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function I(y,x){const D=i.get(y);if(y.version>0&&D.__version!==y.version){z(D,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const ye={[Yl]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[jl]:n.MIRRORED_REPEAT},xe={[Nn]:n.NEAREST,[N_]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},Ce={[k_]:n.NEVER,[X_]:n.ALWAYS,[z_]:n.LESS,[Vh]:n.LEQUAL,[H_]:n.EQUAL,[W_]:n.GEQUAL,[V_]:n.GREATER,[G_]:n.NOTEQUAL};function Te(y,x){if(x.type===pi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$n||x.magFilter===Xa||x.magFilter===uo||x.magFilter===ss||x.minFilter===$n||x.minFilter===Xa||x.minFilter===uo||x.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ye[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ye[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ye[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,xe[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nn||x.minFilter!==uo&&x.minFilter!==ss||x.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(y,x){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",L));const G=x.source;let ne=d.get(G);ne===void 0&&(ne={},d.set(G,ne));const re=le(x);if(re!==y.__cacheKey){ne[re]===void 0&&(ne[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),ne[re].usedTimes++;const Se=ne[y.__cacheKey];Se!==void 0&&(ne[y.__cacheKey].usedTimes--,Se.usedTimes===0&&E(x)),y.__cacheKey=re,y.__webglTexture=ne[re].texture}return D}function O(y,x,D){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const ne=Ye(y,x),re=x.source;t.bindTexture(G,y.__webglTexture,n.TEXTURE0+D);const Se=i.get(re);if(re.version!==Se.__version||ne===!0){t.activeTexture(n.TEXTURE0+D);const ve=st.getPrimaries(st.workingColorSpace),Me=x.colorSpace===Ni?null:st.getPrimaries(x.colorSpace),Be=x.colorSpace===Ni||ve===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let H=v(x.image,!1,s.maxTextureSize);H=se(x,H);const q=r.convert(x.format,x.colorSpace),J=r.convert(x.type);let N=w(x.internalFormat,q,J,x.colorSpace,x.isVideoTexture);Te(G,x);let T;const me=x.mipmaps,we=x.isVideoTexture!==!0,Fe=Se.__version===void 0||ne===!0,B=re.dataReady,oe=k(x,H);if(x.isDepthTexture)N=_(x.format===Zs,x.type),Fe&&(we?t.texStorage2D(n.TEXTURE_2D,1,N,H.width,H.height):t.texImage2D(n.TEXTURE_2D,0,N,H.width,H.height,0,q,J,null));else if(x.isDataTexture)if(me.length>0){we&&Fe&&t.texStorage2D(n.TEXTURE_2D,oe,N,me[0].width,me[0].height);for(let ae=0,ge=me.length;ae<ge;ae++)T=me[ae],we?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,T.width,T.height,q,J,T.data):t.texImage2D(n.TEXTURE_2D,ae,N,T.width,T.height,0,q,J,T.data);x.generateMipmaps=!1}else we?(Fe&&t.texStorage2D(n.TEXTURE_2D,oe,N,H.width,H.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,H.width,H.height,q,J,H.data)):t.texImage2D(n.TEXTURE_2D,0,N,H.width,H.height,0,q,J,H.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){we&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,N,me[0].width,me[0].height,H.depth);for(let ae=0,ge=me.length;ae<ge;ae++)if(T=me[ae],x.format!==Ln)if(q!==null)if(we){if(B)if(x.layerUpdates.size>0){const Le=nd(T.width,T.height,x.format,x.type);for(const Ie of x.layerUpdates){const je=T.data.subarray(Ie*Le/T.data.BYTES_PER_ELEMENT,(Ie+1)*Le/T.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ie,T.width,T.height,1,q,je)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,T.width,T.height,H.depth,q,T.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,N,T.width,T.height,H.depth,0,T.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,T.width,T.height,H.depth,q,J,T.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,N,T.width,T.height,H.depth,0,q,J,T.data)}else{we&&Fe&&t.texStorage2D(n.TEXTURE_2D,oe,N,me[0].width,me[0].height);for(let ae=0,ge=me.length;ae<ge;ae++)T=me[ae],x.format!==Ln?q!==null?we?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,T.width,T.height,q,T.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,N,T.width,T.height,0,T.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,T.width,T.height,q,J,T.data):t.texImage2D(n.TEXTURE_2D,ae,N,T.width,T.height,0,q,J,T.data)}else if(x.isDataArrayTexture)if(we){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,N,H.width,H.height,H.depth),B)if(x.layerUpdates.size>0){const ae=nd(H.width,H.height,x.format,x.type);for(const ge of x.layerUpdates){const Le=H.data.subarray(ge*ae/H.data.BYTES_PER_ELEMENT,(ge+1)*ae/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,H.width,H.height,1,q,J,Le)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,q,J,H.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,N,H.width,H.height,H.depth,0,q,J,H.data);else if(x.isData3DTexture)we?(Fe&&t.texStorage3D(n.TEXTURE_3D,oe,N,H.width,H.height,H.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,q,J,H.data)):t.texImage3D(n.TEXTURE_3D,0,N,H.width,H.height,H.depth,0,q,J,H.data);else if(x.isFramebufferTexture){if(Fe)if(we)t.texStorage2D(n.TEXTURE_2D,oe,N,H.width,H.height);else{let ae=H.width,ge=H.height;for(let Le=0;Le<oe;Le++)t.texImage2D(n.TEXTURE_2D,Le,N,ae,ge,0,q,J,null),ae>>=1,ge>>=1}}else if(me.length>0){if(we&&Fe){const ae=V(me[0]);t.texStorage2D(n.TEXTURE_2D,oe,N,ae.width,ae.height)}for(let ae=0,ge=me.length;ae<ge;ae++)T=me[ae],we?B&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,q,J,T):t.texImage2D(n.TEXTURE_2D,ae,N,q,J,T);x.generateMipmaps=!1}else if(we){if(Fe){const ae=V(H);t.texStorage2D(n.TEXTURE_2D,oe,N,ae.width,ae.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,q,J,H)}else t.texImage2D(n.TEXTURE_2D,0,N,q,J,H);m(x)&&h(G),Se.__version=re.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function z(y,x,D){if(x.image.length!==6)return;const G=Ye(y,x),ne=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+D);const re=i.get(ne);if(ne.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+D);const Se=st.getPrimaries(st.workingColorSpace),ve=x.colorSpace===Ni?null:st.getPrimaries(x.colorSpace),Me=x.colorSpace===Ni||Se===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Be=x.isCompressedTexture||x.image[0].isCompressedTexture,H=x.image[0]&&x.image[0].isDataTexture,q=[];for(let ge=0;ge<6;ge++)!Be&&!H?q[ge]=v(x.image[ge],!0,s.maxCubemapSize):q[ge]=H?x.image[ge].image:x.image[ge],q[ge]=se(x,q[ge]);const J=q[0],N=r.convert(x.format,x.colorSpace),T=r.convert(x.type),me=w(x.internalFormat,N,T,x.colorSpace),we=x.isVideoTexture!==!0,Fe=re.__version===void 0||G===!0,B=ne.dataReady;let oe=k(x,J);Te(n.TEXTURE_CUBE_MAP,x);let ae;if(Be){we&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,me,J.width,J.height);for(let ge=0;ge<6;ge++){ae=q[ge].mipmaps;for(let Le=0;Le<ae.length;Le++){const Ie=ae[Le];x.format!==Ln?N!==null?we?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,Ie.width,Ie.height,N,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,me,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,Ie.width,Ie.height,N,T,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,me,Ie.width,Ie.height,0,N,T,Ie.data)}}}else{if(ae=x.mipmaps,we&&Fe){ae.length>0&&oe++;const ge=V(q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,me,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(H){we?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,q[ge].width,q[ge].height,N,T,q[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,me,q[ge].width,q[ge].height,0,N,T,q[ge].data);for(let Le=0;Le<ae.length;Le++){const je=ae[Le].image[ge].image;we?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,je.width,je.height,N,T,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,me,je.width,je.height,0,N,T,je.data)}}else{we?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,N,T,q[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,me,N,T,q[ge]);for(let Le=0;Le<ae.length;Le++){const Ie=ae[Le];we?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,N,T,Ie.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,me,N,T,Ie.image[ge])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),re.__version=ne.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Q(y,x,D,G,ne,re){const Se=r.convert(D.format,D.colorSpace),ve=r.convert(D.type),Me=w(D.internalFormat,Se,ve,D.colorSpace),Be=i.get(x),H=i.get(D);if(H.__renderTarget=x,!Be.__hasExternalTextures){const q=Math.max(1,x.width>>re),J=Math.max(1,x.height>>re);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,Me,q,J,x.depth,0,Se,ve,null):t.texImage2D(ne,re,Me,q,J,0,Se,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ue(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,ne,H.__webglTexture,0,ie(x)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,ne,H.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(y,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const G=x.depthTexture,ne=G&&G.isDepthTexture?G.type:null,re=_(x.stencilBuffer,ne),Se=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=ie(x);ue(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,re,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,y)}else{const G=x.textures;for(let ne=0;ne<G.length;ne++){const re=G[ne],Se=r.convert(re.format,re.colorSpace),ve=r.convert(re.type),Me=w(re.internalFormat,Se,ve,re.colorSpace),Be=ie(x);D&&ue(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Me,x.width,x.height):ue(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Me,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),pe(x.depthTexture,0);const ne=G.__webglTexture,re=ie(x);if(x.depthTexture.format===Hs)ue(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(x.depthTexture.format===Zs)ue(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function De(y){const x=i.get(y),D=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",ne)};G.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=G}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");be(x.__webglFramebuffer,y)}else if(D){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),ee(x.__webglDepthbuffer[G],y,!1);else{const ne=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,re)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ee(x.__webglDepthbuffer,y,!1);else{const G=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(y,x,D){const G=i.get(y);x!==void 0&&Q(G.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&De(y)}function tt(y){const x=y.texture,D=i.get(y),G=i.get(x);y.addEventListener("dispose",P);const ne=y.textures,re=y.isWebGLCubeRenderTarget===!0,Se=ne.length>1;if(Se||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),re){D.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[ve]=[];for(let Me=0;Me<x.mipmaps.length;Me++)D.__webglFramebuffer[ve][Me]=n.createFramebuffer()}else D.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)D.__webglFramebuffer[ve]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ve=0,Me=ne.length;ve<Me;ve++){const Be=i.get(ne[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&ue(y)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ve=0;ve<ne.length;ve++){const Me=ne[ve];D.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ve]);const Be=r.convert(Me.format,Me.colorSpace),H=r.convert(Me.type),q=w(Me.internalFormat,Be,H,Me.colorSpace,y.isXRRenderTarget===!0),J=ie(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,D.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(D.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Te(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)Q(D.__webglFramebuffer[ve][Me],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else Q(D.__webglFramebuffer[ve],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ve=0,Me=ne.length;ve<Me;ve++){const Be=ne[ve],H=i.get(Be);t.bindTexture(n.TEXTURE_2D,H.__webglTexture),Te(n.TEXTURE_2D,Be),Q(D.__webglFramebuffer,y,Be,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),m(Be)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,G.__webglTexture),Te(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)Q(D.__webglFramebuffer[Me],y,x,n.COLOR_ATTACHMENT0,ve,Me);else Q(D.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,ve,0);m(x)&&h(ve),t.unbindTexture()}y.depthBuffer&&De(y)}function A(y){const x=y.textures;for(let D=0,G=x.length;D<G;D++){const ne=x[D];if(m(ne)){const re=C(y),Se=i.get(ne).__webglTexture;t.bindTexture(re,Se),h(re),t.unbindTexture()}}}const U=[],b=[];function de(y){if(y.samples>0){if(ue(y)===!1){const x=y.textures,D=y.width,G=y.height;let ne=n.COLOR_BUFFER_BIT;const re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(y),ve=x.length>1;if(ve)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Be=i.get(x[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,D,G,0,0,D,G,ne,n.NEAREST),l===!0&&(U.length=0,b.length=0,U.push(n.COLOR_ATTACHMENT0+Me),y.depthBuffer&&y.resolveDepthBuffer===!1&&(U.push(re),b.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Be=i.get(x[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ie(y){return Math.min(s.maxSamples,y.samples)}function ue(y){const x=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function he(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function se(y,x){const D=y.colorSpace,G=y.format,ne=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==nr&&D!==Ni&&(st.getTransfer(D)===mt?(G!==Ln||ne!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function V(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=$,this.setTexture2D=pe,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=I,this.rebindTextures=Ne,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ue}function uS(n,e){function t(i,s=Ni){let r;const o=st.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return n.BYTE;if(i===Ih)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===$c)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===Nh)return n.ALPHA;if(i===Fh)return n.RGB;if(i===Ln)return n.RGBA;if(i===Oh)return n.LUMINANCE;if(i===Bh)return n.LUMINANCE_ALPHA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===kh)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===zh)return n.RG;if(i===Kc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===$o||i===qo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Zl||i===Jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ec||i===tc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===_c||i===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hh||i===xc||i===yc||i===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class fS extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vt extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dS={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
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

}`;class mS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new nn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hi({vertexShader:hS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gS extends ir{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new mS,m=t.getContextAttributes();let h=null,C=null;const w=[],_=[],k=new it;let L=null;const P=new dn;P.viewport=new At;const F=new dn;F.viewport=new At;const E=[P,F],M=new fS;let R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let z=w[O];return z===void 0&&(z=new vl,w[O]=z),z.getTargetRaySpace()},this.getControllerGrip=function(O){let z=w[O];return z===void 0&&(z=new vl,w[O]=z),z.getGripSpace()},this.getHand=function(O){let z=w[O];return z===void 0&&(z=new vl,w[O]=z),z.getHandSpace()};function te(O){const z=_.indexOf(O.inputSource);if(z===-1)return;const Q=w[z];Q!==void 0&&(Q.update(O.inputSource,O.frame,c||o),Q.dispatchEvent({type:O.type,data:O.inputSource}))}function le(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",pe);for(let O=0;O<w.length;O++){const z=_[O];z!==null&&(_[O]=null,w[O].disconnect(z))}R=null,$=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,C=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",le),s.addEventListener("inputsourceschange",pe),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){const z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new us(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let z=null,Q=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=m.stencil?Zs:Hs,Q=m.stencil?Ks:cs);const be={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new us(d.textureWidth,d.textureHeight,{format:Ln,type:Mi,depthTexture:new ep(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function pe(O){for(let z=0;z<O.removed.length;z++){const Q=O.removed[z],ee=_.indexOf(Q);ee>=0&&(_[ee]=null,w[ee].disconnect(Q))}for(let z=0;z<O.added.length;z++){const Q=O.added[z];let ee=_.indexOf(Q);if(ee===-1){for(let De=0;De<w.length;De++)if(De>=_.length){_.push(Q),ee=De;break}else if(_[De]===null){_[De]=Q,ee=De;break}if(ee===-1)break}const be=w[ee];be&&be.connect(Q)}}const Z=new X,Y=new X;function I(O,z,Q){Z.setFromMatrixPosition(z.matrixWorld),Y.setFromMatrixPosition(Q.matrixWorld);const ee=Z.distanceTo(Y),be=z.projectionMatrix.elements,De=Q.projectionMatrix.elements,Ne=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),A=(be[9]+1)/be[5],U=(be[9]-1)/be[5],b=(be[8]-1)/be[0],de=(De[8]+1)/De[0],ie=Ne*b,ue=Ne*de,he=ee/(-b+de),se=he*-b;if(z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(se),O.translateZ(he),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),be[10]===-1)O.projectionMatrix.copy(z.projectionMatrix),O.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const V=Ne+he,y=tt+he,x=ie-se,D=ue+(ee-se),G=A*tt/y*V,ne=U*tt/y*V;O.projectionMatrix.makePerspective(x,D,G,ne,V,y),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ye(O,z){z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let z=O.near,Q=O.far;v.texture!==null&&(v.depthNear>0&&(z=v.depthNear),v.depthFar>0&&(Q=v.depthFar)),M.near=F.near=P.near=z,M.far=F.far=P.far=Q,(R!==M.near||$!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,$=M.far),P.layers.mask=O.layers.mask|2,F.layers.mask=O.layers.mask|4,M.layers.mask=P.layers.mask|F.layers.mask;const ee=O.parent,be=M.cameras;ye(M,ee);for(let De=0;De<be.length;De++)ye(be[De],ee);be.length===2?I(M,P,F):M.projectionMatrix.copy(P.projectionMatrix),xe(O,M,ee)};function xe(O,z,Q){Q===null?O.matrix.copy(z.matrixWorld):(O.matrix.copy(Q.matrixWorld),O.matrix.invert(),O.matrix.multiply(z.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(z.projectionMatrix),O.projectionMatrixInverse.copy(z.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Gr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ce=null;function Te(O,z){if(u=z.getViewerPose(c||o),g=z,u!==null){const Q=u.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let ee=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,ee=!0);for(let De=0;De<Q.length;De++){const Ne=Q[De];let tt=null;if(p!==null)tt=p.getViewport(Ne);else{const U=f.getViewSubImage(d,Ne);tt=U.viewport,De===0&&(e.setRenderTargetTextures(C,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(C))}let A=E[De];A===void 0&&(A=new dn,A.layers.enable(De),A.viewport=new At,E[De]=A),A.matrix.fromArray(Ne.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Ne.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(tt.x,tt.y,tt.width,tt.height),De===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ee===!0&&M.cameras.push(A)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const De=f.getDepthInformation(Q[0]);De&&De.isValid&&De.texture&&v.init(e,De,s.renderState)}}for(let Q=0;Q<w.length;Q++){const ee=_[Q],be=w[Q];ee!==null&&be!==void 0&&be.update(ee,z,c||o)}Ce&&Ce(O,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}const Ye=new Jh;Ye.setAnimationLoop(Te),this.setAnimationLoop=function(O){Ce=O},this.dispose=function(){}}}const Ji=new qt,_S=new St;function vS(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,jh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,C,w,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,C,w):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const C=e.get(h),w=C.envMap,_=C.envMapRotation;w&&(m.envMap.value=w,Ji.copy(_),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(_S.makeRotationFromEuler(Ji)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,C,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*C,m.scale.value=w*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,C){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const C=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,w){const _=w.program;i.uniformBlockBinding(C,_)}function c(C,w){let _=s[C.id];_===void 0&&(g(C),_=u(C),s[C.id]=_,C.addEventListener("dispose",m));const k=w.program;i.updateUBOMapping(C,k);const L=e.render.frame;r[C.id]!==L&&(d(C),r[C.id]=L)}function u(C){const w=f();C.__bindingPointIndex=w;const _=n.createBuffer(),k=C.__size,L=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,k,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const w=s[C.id],_=C.uniforms,k=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,P=_.length;L<P;L++){const F=Array.isArray(_[L])?_[L]:[_[L]];for(let E=0,M=F.length;E<M;E++){const R=F[E];if(p(R,L,E,k)===!0){const $=R.__offset,te=Array.isArray(R.value)?R.value:[R.value];let le=0;for(let pe=0;pe<te.length;pe++){const Z=te[pe],Y=v(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,$+le,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,le),le+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,w,_,k){const L=C.value,P=w+"_"+_;if(k[P]===void 0)return typeof L=="number"||typeof L=="boolean"?k[P]=L:k[P]=L.clone(),!0;{const F=k[P];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return k[P]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function g(C){const w=C.uniforms;let _=0;const k=16;for(let P=0,F=w.length;P<F;P++){const E=Array.isArray(w[P])?w[P]:[w[P]];for(let M=0,R=E.length;M<R;M++){const $=E[M],te=Array.isArray($.value)?$.value:[$.value];for(let le=0,pe=te.length;le<pe;le++){const Z=te[le],Y=v(Z),I=_%k,ye=I%Y.boundary,xe=I+ye;_+=ye,xe!==0&&k-xe<Y.storage&&(_+=k-xe),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=_,_+=Y.storage}}}const L=_%k;return L>0&&(_+=k-L),C.__size=_,C.__cache={},this}function v(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function m(C){const w=C.target;w.removeEventListener("dispose",m);const _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(const C in s)n.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class rp{constructor(e={}){const{canvas:t=lv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const C=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Oi,this.toneMappingExposure=1;const _=this;let k=!1,L=0,P=0,F=null,E=-1,M=null;const R=new At,$=new At;let te=null;const le=new Xe(0);let pe=0,Z=t.width,Y=t.height,I=1,ye=null,xe=null;const Ce=new At(0,0,Z,Y),Te=new At(0,0,Z,Y);let Ye=!1;const O=new nu;let z=!1,Q=!1;const ee=new St,be=new St,De=new X,Ne=new At,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function U(){return F===null?I:1}let b=i;function de(S,j){return t.getContext(S,j)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),b===null){const j="webgl2";if(b=de(j,S),b===null)throw de(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ie,ue,he,se,V,y,x,D,G,ne,re,Se,ve,Me,Be,H,q,J,N,T,me,we,Fe,B;function oe(){ie=new Ty(b),ie.init(),we=new uS(b,ie),ue=new xy(b,ie,e,we),he=new aS(b,ie),ue.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),se=new Cy(b),V=new $M,y=new cS(b,ie,he,V,ue,we,se),x=new My(_),D=new Ey(_),G=new Nv(b),Fe=new _y(b,G),ne=new wy(b,G,se,Fe),re=new Py(b,ne,G,se),N=new Ry(b,ue,y),H=new yy(V),Se=new XM(_,x,D,ie,ue,Fe,H),ve=new vS(_,V),Me=new YM,Be=new eS(ie),J=new gy(_,x,D,he,re,p,l),q=new rS(_,re,ue),B=new xS(b,se,ue,he),T=new vy(b,ie,se),me=new Ay(b,ie,se),se.programs=Se.programs,_.capabilities=ue,_.extensions=ie,_.properties=V,_.renderLists=Me,_.shadowMap=q,_.state=he,_.info=se}oe();const ae=new gS(_,b);this.xr=ae,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const S=ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(S){S!==void 0&&(I=S,this.setSize(Z,Y,!1))},this.getSize=function(S){return S.set(Z,Y)},this.setSize=function(S,j,ce=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,Y=j,t.width=Math.floor(S*I),t.height=Math.floor(j*I),ce===!0&&(t.style.width=S+"px",t.style.height=j+"px"),this.setViewport(0,0,S,j)},this.getDrawingBufferSize=function(S){return S.set(Z*I,Y*I).floor()},this.setDrawingBufferSize=function(S,j,ce){Z=S,Y=j,I=ce,t.width=Math.floor(S*ce),t.height=Math.floor(j*ce),this.setViewport(0,0,S,j)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,j,ce,fe){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,j,ce,fe),he.viewport(R.copy(Ce).multiplyScalar(I).round())},this.getScissor=function(S){return S.copy(Te)},this.setScissor=function(S,j,ce,fe){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,j,ce,fe),he.scissor($.copy(Te).multiplyScalar(I).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(S){he.setScissorTest(Ye=S)},this.setOpaqueSort=function(S){ye=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(S=!0,j=!0,ce=!0){let fe=0;if(S){let K=!1;if(F!==null){const Ee=F.texture.format;K=Ee===Zc||Ee===Kc||Ee===jc}if(K){const Ee=F.texture.type,Ue=Ee===Mi||Ee===cs||Ee===Vr||Ee===Ks||Ee===qc||Ee===Yc,ke=J.getClearColor(),ze=J.getClearAlpha(),qe=ke.r,Ke=ke.g,He=ke.b;Ue?(g[0]=qe,g[1]=Ke,g[2]=He,g[3]=ze,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=qe,v[1]=Ke,v[2]=He,v[3]=ze,b.clearBufferiv(b.COLOR,0,v))}else fe|=b.COLOR_BUFFER_BIT}j&&(fe|=b.DEPTH_BUFFER_BIT),ce&&(fe|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Me.dispose(),Be.dispose(),V.dispose(),x.dispose(),D.dispose(),re.dispose(),Fe.dispose(),B.dispose(),Se.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ou),ae.removeEventListener("sessionend",au),Wi.stop()};function ge(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const S=se.autoReset,j=q.enabled,ce=q.autoUpdate,fe=q.needsUpdate,K=q.type;oe(),se.autoReset=S,q.enabled=j,q.autoUpdate=ce,q.needsUpdate=fe,q.type=K}function Ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function je(S){const j=S.target;j.removeEventListener("dispose",je),wt(j)}function wt(S){Ot(S),V.remove(S)}function Ot(S){const j=V.get(S).programs;j!==void 0&&(j.forEach(function(ce){Se.releaseProgram(ce)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,j,ce,fe,K,Ee){j===null&&(j=tt);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,ke=Tp(S,j,ce,fe,K);he.setMaterial(fe,Ue);let ze=ce.index,qe=1;if(fe.wireframe===!0){if(ze=ne.getWireframeAttribute(ce),ze===void 0)return;qe=2}const Ke=ce.drawRange,He=ce.attributes.position;let rt=Ke.start*qe,xt=(Ke.start+Ke.count)*qe;Ee!==null&&(rt=Math.max(rt,Ee.start*qe),xt=Math.min(xt,(Ee.start+Ee.count)*qe)),ze!==null?(rt=Math.max(rt,0),xt=Math.min(xt,ze.count)):He!=null&&(rt=Math.max(rt,0),xt=Math.min(xt,He.count));const bt=xt-rt;if(bt<0||bt===1/0)return;Fe.setup(K,fe,ke,ce,ze);let sn,lt=T;if(ze!==null&&(sn=G.get(ze),lt=me,lt.setIndex(sn)),K.isMesh)fe.wireframe===!0?(he.setLineWidth(fe.wireframeLinewidth*U()),lt.setMode(b.LINES)):lt.setMode(b.TRIANGLES);else if(K.isLine){let Ve=fe.linewidth;Ve===void 0&&(Ve=1),he.setLineWidth(Ve*U()),K.isLineSegments?lt.setMode(b.LINES):K.isLineLoop?lt.setMode(b.LINE_LOOP):lt.setMode(b.LINE_STRIP)}else K.isPoints?lt.setMode(b.POINTS):K.isSprite&&lt.setMode(b.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)lt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ve=K._multiDrawStarts,Zn=K._multiDrawCounts,ct=K._multiDrawCount,wn=ze?G.get(ze).bytesPerElement:1,ds=V.get(fe).currentProgram.getUniforms();for(let ln=0;ln<ct;ln++)ds.setValue(b,"_gl_DrawID",ln),lt.render(Ve[ln]/wn,Zn[ln])}else if(K.isInstancedMesh)lt.renderInstances(rt,bt,K.count);else if(ce.isInstancedBufferGeometry){const Ve=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Zn=Math.min(ce.instanceCount,Ve);lt.renderInstances(rt,bt,Zn)}else lt.render(rt,bt)};function ht(S,j,ce){S.transparent===!0&&S.side===hi&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,to(S,j,ce),S.side=zi,S.needsUpdate=!0,to(S,j,ce),S.side=hi):to(S,j,ce)}this.compile=function(S,j,ce=null){ce===null&&(ce=S),h=Be.get(ce),h.init(j),w.push(h),ce.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),S!==ce&&S.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),h.setupLights();const fe=new Set;return S.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){const ke=Ee[Ue];ht(ke,ce,K),fe.add(ke)}else ht(Ee,ce,K),fe.add(Ee)}),w.pop(),h=null,fe},this.compileAsync=function(S,j,ce=null){const fe=this.compile(S,j,ce);return new Promise(K=>{function Ee(){if(fe.forEach(function(Ue){V.get(Ue).currentProgram.isReady()&&fe.delete(Ue)}),fe.size===0){K(S);return}setTimeout(Ee,10)}ie.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Tn=null;function Kn(S){Tn&&Tn(S)}function ou(){Wi.stop()}function au(){Wi.start()}const Wi=new Jh;Wi.setAnimationLoop(Kn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(S){Tn=S,ae.setAnimationLoop(S),S===null?Wi.stop():Wi.start()},ae.addEventListener("sessionstart",ou),ae.addEventListener("sessionend",au),this.render=function(S,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(j),j=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,j,F),h=Be.get(S,w.length),h.init(j),w.push(h),be.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),O.setFromProjectionMatrix(be),Q=this.localClippingEnabled,z=H.init(this.clippingPlanes,Q),m=Me.get(S,C.length),m.init(),C.push(m),ae.enabled===!0&&ae.isPresenting===!0){const Ee=_.xr.getDepthSensingMesh();Ee!==null&&La(Ee,j,-1/0,_.sortObjects)}La(S,j,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ye,xe),A=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,A&&J.addToRenderList(m,S),this.info.render.frame++,z===!0&&H.beginShadows();const ce=h.state.shadowsArray;q.render(ce,S,j),z===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=m.opaque,K=m.transmissive;if(h.setupLights(),j.isArrayCamera){const Ee=j.cameras;if(K.length>0)for(let Ue=0,ke=Ee.length;Ue<ke;Ue++){const ze=Ee[Ue];cu(fe,K,S,ze)}A&&J.render(S);for(let Ue=0,ke=Ee.length;Ue<ke;Ue++){const ze=Ee[Ue];lu(m,S,ze,ze.viewport)}}else K.length>0&&cu(fe,K,S,j),A&&J.render(S),lu(m,S,j);F!==null&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),S.isScene===!0&&S.onAfterRender(_,S,j),Fe.resetDefaultState(),E=-1,M=null,w.pop(),w.length>0?(h=w[w.length-1],z===!0&&H.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function La(S,j,ce,fe){if(S.visible===!1)return;if(S.layers.test(j.layers)){if(S.isGroup)ce=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(j);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||O.intersectsSprite(S)){fe&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(be);const Ue=re.update(S),ke=S.material;ke.visible&&m.push(S,Ue,ke,ce,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||O.intersectsObject(S))){const Ue=re.update(S),ke=S.material;if(fe&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ne.copy(Ue.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(be)),Array.isArray(ke)){const ze=Ue.groups;for(let qe=0,Ke=ze.length;qe<Ke;qe++){const He=ze[qe],rt=ke[He.materialIndex];rt&&rt.visible&&m.push(S,Ue,rt,ce,Ne.z,He)}}else ke.visible&&m.push(S,Ue,ke,ce,Ne.z,null)}}const Ee=S.children;for(let Ue=0,ke=Ee.length;Ue<ke;Ue++)La(Ee[Ue],j,ce,fe)}function lu(S,j,ce,fe){const K=S.opaque,Ee=S.transmissive,Ue=S.transparent;h.setupLightsView(ce),z===!0&&H.setGlobalState(_.clippingPlanes,ce),fe&&he.viewport(R.copy(fe)),K.length>0&&eo(K,j,ce),Ee.length>0&&eo(Ee,j,ce),Ue.length>0&&eo(Ue,j,ce),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function cu(S,j,ce,fe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[fe.id]===void 0&&(h.state.transmissionRenderTarget[fe.id]=new us(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Kr:Mi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const Ee=h.state.transmissionRenderTarget[fe.id],Ue=fe.viewport||R;Ee.setSize(Ue.z,Ue.w);const ke=_.getRenderTarget();_.setRenderTarget(Ee),_.getClearColor(le),pe=_.getClearAlpha(),pe<1&&_.setClearColor(16777215,.5),_.clear(),A&&J.render(ce);const ze=_.toneMapping;_.toneMapping=Oi;const qe=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),h.setupLightsView(fe),z===!0&&H.setGlobalState(_.clippingPlanes,fe),eo(S,ce,fe),y.updateMultisampleRenderTarget(Ee),y.updateRenderTargetMipmap(Ee),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let He=0,rt=j.length;He<rt;He++){const xt=j[He],bt=xt.object,sn=xt.geometry,lt=xt.material,Ve=xt.group;if(lt.side===hi&&bt.layers.test(fe.layers)){const Zn=lt.side;lt.side=an,lt.needsUpdate=!0,uu(bt,ce,fe,sn,lt,Ve),lt.side=Zn,lt.needsUpdate=!0,Ke=!0}}Ke===!0&&(y.updateMultisampleRenderTarget(Ee),y.updateRenderTargetMipmap(Ee))}_.setRenderTarget(ke),_.setClearColor(le,pe),qe!==void 0&&(fe.viewport=qe),_.toneMapping=ze}function eo(S,j,ce){const fe=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Ee=S.length;K<Ee;K++){const Ue=S[K],ke=Ue.object,ze=Ue.geometry,qe=fe===null?Ue.material:fe,Ke=Ue.group;ke.layers.test(ce.layers)&&uu(ke,j,ce,ze,qe,Ke)}}function uu(S,j,ce,fe,K,Ee){S.onBeforeRender(_,j,ce,fe,K,Ee),S.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),K.onBeforeRender(_,j,ce,fe,S,Ee),K.transparent===!0&&K.side===hi&&K.forceSinglePass===!1?(K.side=an,K.needsUpdate=!0,_.renderBufferDirect(ce,j,fe,K,S,Ee),K.side=zi,K.needsUpdate=!0,_.renderBufferDirect(ce,j,fe,K,S,Ee),K.side=hi):_.renderBufferDirect(ce,j,fe,K,S,Ee),S.onAfterRender(_,j,ce,fe,K,Ee)}function to(S,j,ce){j.isScene!==!0&&(j=tt);const fe=V.get(S),K=h.state.lights,Ee=h.state.shadowsArray,Ue=K.state.version,ke=Se.getParameters(S,K.state,Ee,j,ce),ze=Se.getProgramCacheKey(ke);let qe=fe.programs;fe.environment=S.isMeshStandardMaterial?j.environment:null,fe.fog=j.fog,fe.envMap=(S.isMeshStandardMaterial?D:x).get(S.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&S.envMap===null?j.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",je),qe=new Map,fe.programs=qe);let Ke=qe.get(ze);if(Ke!==void 0){if(fe.currentProgram===Ke&&fe.lightsStateVersion===Ue)return du(S,ke),Ke}else ke.uniforms=Se.getUniforms(S),S.onBeforeCompile(ke,_),Ke=Se.acquireProgram(ke,ze),qe.set(ze,Ke),fe.uniforms=ke.uniforms;const He=fe.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=H.uniform),du(S,ke),fe.needsLights=Ap(S),fe.lightsStateVersion=Ue,fe.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMap.value=K.state.directionalShadowMap,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotShadowMap.value=K.state.spotShadowMap,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMap.value=K.state.pointShadowMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix),fe.currentProgram=Ke,fe.uniformsList=null,Ke}function fu(S){if(S.uniformsList===null){const j=S.currentProgram.getUniforms();S.uniformsList=jo.seqWithValue(j.seq,S.uniforms)}return S.uniformsList}function du(S,j){const ce=V.get(S);ce.outputColorSpace=j.outputColorSpace,ce.batching=j.batching,ce.batchingColor=j.batchingColor,ce.instancing=j.instancing,ce.instancingColor=j.instancingColor,ce.instancingMorph=j.instancingMorph,ce.skinning=j.skinning,ce.morphTargets=j.morphTargets,ce.morphNormals=j.morphNormals,ce.morphColors=j.morphColors,ce.morphTargetsCount=j.morphTargetsCount,ce.numClippingPlanes=j.numClippingPlanes,ce.numIntersection=j.numClipIntersection,ce.vertexAlphas=j.vertexAlphas,ce.vertexTangents=j.vertexTangents,ce.toneMapping=j.toneMapping}function Tp(S,j,ce,fe,K){j.isScene!==!0&&(j=tt),y.resetTextureUnits();const Ee=j.fog,Ue=fe.isMeshStandardMaterial?j.environment:null,ke=F===null?_.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:nr,ze=(fe.isMeshStandardMaterial?D:x).get(fe.envMap||Ue),qe=fe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Ke=!!ce.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),He=!!ce.morphAttributes.position,rt=!!ce.morphAttributes.normal,xt=!!ce.morphAttributes.color;let bt=Oi;fe.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bt=_.toneMapping);const sn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,lt=sn!==void 0?sn.length:0,Ve=V.get(fe),Zn=h.state.lights;if(z===!0&&(Q===!0||S!==M)){const mn=S===M&&fe.id===E;H.setState(fe,S,mn)}let ct=!1;fe.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Zn.state.version||Ve.outputColorSpace!==ke||K.isBatchedMesh&&Ve.batching===!1||!K.isBatchedMesh&&Ve.batching===!0||K.isBatchedMesh&&Ve.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ve.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ve.instancing===!1||!K.isInstancedMesh&&Ve.instancing===!0||K.isSkinnedMesh&&Ve.skinning===!1||!K.isSkinnedMesh&&Ve.skinning===!0||K.isInstancedMesh&&Ve.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ve.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ve.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ve.instancingMorph===!1&&K.morphTexture!==null||Ve.envMap!==ze||fe.fog===!0&&Ve.fog!==Ee||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==H.numPlanes||Ve.numIntersection!==H.numIntersection)||Ve.vertexAlphas!==qe||Ve.vertexTangents!==Ke||Ve.morphTargets!==He||Ve.morphNormals!==rt||Ve.morphColors!==xt||Ve.toneMapping!==bt||Ve.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Ve.__version=fe.version);let wn=Ve.currentProgram;ct===!0&&(wn=to(fe,j,K));let ds=!1,ln=!1,or=!1;const Et=wn.getUniforms(),On=Ve.uniforms;if(he.useProgram(wn.program)&&(ds=!0,ln=!0,or=!0),fe.id!==E&&(E=fe.id,ln=!0),ds||M!==S){he.buffers.depth.getReversed()?(ee.copy(S.projectionMatrix),uv(ee),fv(ee),Et.setValue(b,"projectionMatrix",ee)):Et.setValue(b,"projectionMatrix",S.projectionMatrix),Et.setValue(b,"viewMatrix",S.matrixWorldInverse);const bi=Et.map.cameraPosition;bi!==void 0&&bi.setValue(b,De.setFromMatrixPosition(S.matrixWorld)),ue.logarithmicDepthBuffer&&Et.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Et.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ln=!0,or=!0)}if(K.isSkinnedMesh){Et.setOptional(b,K,"bindMatrix"),Et.setOptional(b,K,"bindMatrixInverse");const mn=K.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Et.setValue(b,"boneTexture",mn.boneTexture,y))}K.isBatchedMesh&&(Et.setOptional(b,K,"batchingTexture"),Et.setValue(b,"batchingTexture",K._matricesTexture,y),Et.setOptional(b,K,"batchingIdTexture"),Et.setValue(b,"batchingIdTexture",K._indirectTexture,y),Et.setOptional(b,K,"batchingColorTexture"),K._colorsTexture!==null&&Et.setValue(b,"batchingColorTexture",K._colorsTexture,y));const ar=ce.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&N.update(K,ce,wn),(ln||Ve.receiveShadow!==K.receiveShadow)&&(Ve.receiveShadow=K.receiveShadow,Et.setValue(b,"receiveShadow",K.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(On.envMap.value=ze,On.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&j.environment!==null&&(On.envMapIntensity.value=j.environmentIntensity),ln&&(Et.setValue(b,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&wp(On,or),Ee&&fe.fog===!0&&ve.refreshFogUniforms(On,Ee),ve.refreshMaterialUniforms(On,fe,I,Y,h.state.transmissionRenderTarget[S.id]),jo.upload(b,fu(Ve),On,y)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(jo.upload(b,fu(Ve),On,y),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Et.setValue(b,"center",K.center),Et.setValue(b,"modelViewMatrix",K.modelViewMatrix),Et.setValue(b,"normalMatrix",K.normalMatrix),Et.setValue(b,"modelMatrix",K.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const mn=fe.uniformsGroups;for(let bi=0,Ei=mn.length;bi<Ei;bi++){const hu=mn[bi];B.update(hu,wn),B.bind(hu,wn)}}return wn}function wp(S,j){S.ambientLightColor.needsUpdate=j,S.lightProbe.needsUpdate=j,S.directionalLights.needsUpdate=j,S.directionalLightShadows.needsUpdate=j,S.pointLights.needsUpdate=j,S.pointLightShadows.needsUpdate=j,S.spotLights.needsUpdate=j,S.spotLightShadows.needsUpdate=j,S.rectAreaLights.needsUpdate=j,S.hemisphereLights.needsUpdate=j}function Ap(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,j,ce){V.get(S.texture).__webglTexture=j,V.get(S.depthTexture).__webglTexture=ce;const fe=V.get(S);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ce===void 0,fe.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,j){const ce=V.get(S);ce.__webglFramebuffer=j,ce.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(S,j=0,ce=0){F=S,L=j,P=ce;let fe=!0,K=null,Ee=!1,Ue=!1;if(S){const ze=V.get(S);if(ze.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(b.FRAMEBUFFER,null),fe=!1;else if(ze.__webglFramebuffer===void 0)y.setupRenderTarget(S);else if(ze.__hasExternalTextures)y.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const He=S.depthTexture;if(ze.__boundDepthTexture!==He){if(He!==null&&V.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(S)}}const qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Ke=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?K=Ke[j][ce]:K=Ke[j],Ee=!0):S.samples>0&&y.useMultisampledRTT(S)===!1?K=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Ke)?K=Ke[ce]:K=Ke,R.copy(S.viewport),$.copy(S.scissor),te=S.scissorTest}else R.copy(Ce).multiplyScalar(I).floor(),$.copy(Te).multiplyScalar(I).floor(),te=Ye;if(he.bindFramebuffer(b.FRAMEBUFFER,K)&&fe&&he.drawBuffers(S,K),he.viewport(R),he.scissor($),he.setScissorTest(te),Ee){const ze=V.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,ce)}else if(Ue){const ze=V.get(S.texture),qe=j||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ze.__webglTexture,ce||0,qe)}E=-1},this.readRenderTargetPixels=function(S,j,ce,fe,K,Ee,Ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){he.bindFramebuffer(b.FRAMEBUFFER,ke);try{const ze=S.texture,qe=ze.format,Ke=ze.type;if(!ue.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=S.width-fe&&ce>=0&&ce<=S.height-K&&b.readPixels(j,ce,fe,K,we.convert(qe),we.convert(Ke),Ee)}finally{const ze=F!==null?V.get(F).__webglFramebuffer:null;he.bindFramebuffer(b.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,j,ce,fe,K,Ee,Ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){const ze=S.texture,qe=ze.format,Ke=ze.type;if(!ue.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=S.width-fe&&ce>=0&&ce<=S.height-K){he.bindFramebuffer(b.FRAMEBUFFER,ke);const He=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.bufferData(b.PIXEL_PACK_BUFFER,Ee.byteLength,b.STREAM_READ),b.readPixels(j,ce,fe,K,we.convert(qe),we.convert(Ke),0);const rt=F!==null?V.get(F).__webglFramebuffer:null;he.bindFramebuffer(b.FRAMEBUFFER,rt);const xt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await cv(b,xt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Ee),b.deleteBuffer(He),b.deleteSync(xt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,j=null,ce=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,S=arguments[1]);const fe=Math.pow(2,-ce),K=Math.floor(S.image.width*fe),Ee=Math.floor(S.image.height*fe),Ue=j!==null?j.x:0,ke=j!==null?j.y:0;y.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,ce,0,0,Ue,ke,K,Ee),he.unbindTexture()},this.copyTextureToTexture=function(S,j,ce=null,fe=null,K=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,S=arguments[1],j=arguments[2],K=arguments[3]||0,ce=null);let Ee,Ue,ke,ze,qe,Ke,He,rt,xt;const bt=S.isCompressedTexture?S.mipmaps[K]:S.image;ce!==null?(Ee=ce.max.x-ce.min.x,Ue=ce.max.y-ce.min.y,ke=ce.isBox3?ce.max.z-ce.min.z:1,ze=ce.min.x,qe=ce.min.y,Ke=ce.isBox3?ce.min.z:0):(Ee=bt.width,Ue=bt.height,ke=bt.depth||1,ze=0,qe=0,Ke=0),fe!==null?(He=fe.x,rt=fe.y,xt=fe.z):(He=0,rt=0,xt=0);const sn=we.convert(j.format),lt=we.convert(j.type);let Ve;j.isData3DTexture?(y.setTexture3D(j,0),Ve=b.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(y.setTexture2DArray(j,0),Ve=b.TEXTURE_2D_ARRAY):(y.setTexture2D(j,0),Ve=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,j.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,j.unpackAlignment);const Zn=b.getParameter(b.UNPACK_ROW_LENGTH),ct=b.getParameter(b.UNPACK_IMAGE_HEIGHT),wn=b.getParameter(b.UNPACK_SKIP_PIXELS),ds=b.getParameter(b.UNPACK_SKIP_ROWS),ln=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,bt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,bt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ze),b.pixelStorei(b.UNPACK_SKIP_ROWS,qe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ke);const or=S.isDataArrayTexture||S.isData3DTexture,Et=j.isDataArrayTexture||j.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const On=V.get(S),ar=V.get(j),mn=V.get(On.__renderTarget),bi=V.get(ar.__renderTarget);he.bindFramebuffer(b.READ_FRAMEBUFFER,mn.__webglFramebuffer),he.bindFramebuffer(b.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ei=0;Ei<ke;Ei++)or&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,V.get(S).__webglTexture,K,Ke+Ei),S.isDepthTexture?(Et&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,V.get(j).__webglTexture,K,xt+Ei),b.blitFramebuffer(ze,qe,Ee,Ue,He,rt,Ee,Ue,b.DEPTH_BUFFER_BIT,b.NEAREST)):Et?b.copyTexSubImage3D(Ve,K,He,rt,xt+Ei,ze,qe,Ee,Ue):b.copyTexSubImage2D(Ve,K,He,rt,xt+Ei,ze,qe,Ee,Ue);he.bindFramebuffer(b.READ_FRAMEBUFFER,null),he.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(Ve,K,He,rt,xt,Ee,Ue,ke,sn,lt,bt.data):j.isCompressedArrayTexture?b.compressedTexSubImage3D(Ve,K,He,rt,xt,Ee,Ue,ke,sn,bt.data):b.texSubImage3D(Ve,K,He,rt,xt,Ee,Ue,ke,sn,lt,bt):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,K,He,rt,Ee,Ue,sn,lt,bt.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,K,He,rt,bt.width,bt.height,sn,bt.data):b.texSubImage2D(b.TEXTURE_2D,K,He,rt,Ee,Ue,sn,lt,bt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Zn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ct),b.pixelStorei(b.UNPACK_SKIP_PIXELS,wn),b.pixelStorei(b.UNPACK_SKIP_ROWS,ds),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ln),K===0&&j.generateMipmaps&&b.generateMipmap(Ve),he.unbindTexture()},this.copyTextureToTexture3D=function(S,j,ce=null,fe=null,K=0){return S.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,fe=arguments[1]||null,S=arguments[2],j=arguments[3],K=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,j,ce,fe,K)},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){L=0,P=0,F=null,he.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Pa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new Pa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class op extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ap extends Gi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new X,la=new X,id=new St,xr=new Ca,Lo=new Qr,xl=new X,sd=new X;class yS extends Pt{constructor(e=new pn,t=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)aa.fromBufferAttribute(t,s-1),la.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=aa.distanceTo(la);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;id.copy(s).invert(),xr.copy(e.ray).applyMatrix4(id);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=u.getX(v),C=u.getX(v+1),w=Io(this,e,xr,l,h,C);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=Io(this,e,xr,l,v,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=Io(this,e,xr,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=Io(this,e,xr,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Io(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(aa.fromBufferAttribute(o,s),la.fromBufferAttribute(o,r),t.distanceSqToSegment(aa,la,xl,sd)>i)return;xl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xl);if(!(l<e.near||l>e.far))return{distance:l,point:sd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const rd=new X,od=new X;class MS extends yS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)rd.fromBufferAttribute(t,s),od.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+rd.distanceTo(od);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lp extends Gi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ad=new St,bc=new Ca,Uo=new Qr,No=new X;class SS extends Pt{constructor(e=new pn,t=new lp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;ad.copy(s).invert(),bc.copy(e.ray).applyMatrix4(ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);No.fromBufferAttribute(f,m),ld(No,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)No.fromBufferAttribute(f,g),ld(No,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ld(n,e,t,i,s,r,o){const a=bc.distanceSqToPoint(n);if(a<t){const l=new X;bc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bS extends nn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends pn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;C(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(p,2));function C(){const _=new X,k=new X;let L=0;const P=(t-e)/i;for(let F=0;F<=r;F++){const E=[],M=F/r,R=M*(t-e)+e;for(let $=0;$<=s;$++){const te=$/s,le=te*l+a,pe=Math.sin(le),Z=Math.cos(le);k.x=R*pe,k.y=-M*i+m,k.z=R*Z,f.push(k.x,k.y,k.z),_.set(pe,P,Z).normalize(),d.push(_.x,_.y,_.z),p.push(te,1-M),E.push(g++)}v.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){const M=v[E][F],R=v[E+1][F],$=v[E+1][F+1],te=v[E][F+1];(e>0||E!==0)&&(u.push(M,R,te),L+=3),(t>0||E!==r-1)&&(u.push(R,$,te),L+=3)}c.addGroup(h,L,0),h+=L}function w(_){const k=g,L=new it,P=new X;let F=0;const E=_===!0?e:t,M=_===!0?1:-1;for(let $=1;$<=s;$++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let $=0;$<=s;$++){const le=$/s*l+a,pe=Math.cos(le),Z=Math.sin(le);P.x=E*Z,P.y=m*M,P.z=E*pe,f.push(P.x,P.y,P.z),d.push(0,M,0),L.x=pe*.5+.5,L.y=Z*.5*M+.5,p.push(L.x,L.y),g++}for(let $=0;$<s;$++){const te=k+$,le=R+$;_===!0?u.push(le,le+1,te):u.push(le+1,le,te),F+=3}c.addGroup(h,F,_===!0?1:2),h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ca extends ls{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ca(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vn extends pn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new X,d=new X,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const C=[],w=h/i;let _=0;h===0&&o===0?_=.5/t:h===i&&l===Math.PI&&(_=-.5/t);for(let k=0;k<=t;k++){const L=k/t;f.x=-e*Math.cos(s+L*r)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(s+L*r)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(L+_,1-w),C.push(c++)}u.push(C)}for(let h=0;h<i;h++)for(let C=0;C<t;C++){const w=u[h][C+1],_=u[h][C],k=u[h+1][C],L=u[h+1][C+1];(h!==0||o>0)&&p.push(w,_,L),(h!==i-1||l<Math.PI)&&p.push(_,k,L)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ES extends Gi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nt extends Gi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class su extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class TS extends su{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yl=new St,cd=new X,ud=new X;class wS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ud),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AS extends wS{constructor(){super(new Qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new AS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CS extends su{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class RS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dd(){return performance.now()}const hd=new St;class cp{constructor(e,t,i=0,s=1/0){this.ray=new Ca(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(e,t=!0,i=[]){return Ec(e,this,i,t),i.sort(pd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ec(e[s],this,i,t);return i.sort(pd),i}}function pd(n,e){return n.distance-e.distance}function Ec(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ec(r[o],e,t,!0)}}class PS extends MS{constructor(e=10,t=10,i=4473924,s=8947848){i=new Xe(i),s=new Xe(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new pn;u.setAttribute("position",new Ft(l,3)),u.setAttribute("color",new Ft(c,3));const f=new ap({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);const ua={x:0,z:0};function DS(n){n.background=new Xe(660510),n.fog=new Pa(924198,.008);const e=new CS(16771248,.4);n.add(e);const t=new fd(16764006,1.2);t.position.set(30,60,40),n.add(t);const i=new fd(8956637,.4);i.position.set(-30,20,-40),n.add(i);const s=new TS(1715770,662058,.6);n.add(s);const r=new fs(2e3,2e3),o=new nt({color:1982298,transparent:!0,opacity:.85}),a=new We(r,o);a.rotation.x=-Math.PI/2,a.position.y=0,n.add(a),LS(n),IS(n)}function LS(n){const e=new PS(1e3,20,2783818,1982298);e.position.y=.05,e.material.opacity=.05,e.material.transparent=!0,n.add(e)}function IS(n){for(let t=0;t<60;t++){const i=t/60*Math.PI*2,s=400+Math.random()*100,r=Math.cos(i)*s,o=Math.sin(i)*s,a=40+Math.random()*60,l=new gt(a,a/2,a),c=new nt({color:2768462,transparent:!0,opacity:.15}),u=new We(l,c);u.position.set(r,a/4,o),n.add(u)}}let ot=null,Tc=null;const Ht=new X,xn=new X,md=new qt(0,0,0,"YXZ"),US=new X(0,1,0),NS=78,Ir=1.65,pt={forward:!1,backward:!1,left:!1,right:!1,shift:!1,up:!1,down:!1,crouch:!1};let fa=!1,yn=0,Bi=0,Fo=0,Ur=null,Gt=null,gd=0;function up(n,e){ot=new dn(NS,window.innerWidth/window.innerHeight,.1,1e3),ot.position.set(15,Ir,15),yn=-Math.PI*.75,Bi=-.12,ot.quaternion.setFromEuler(new qt(Bi,yn,0,"YXZ")),Tc=e,e.addEventListener("click",()=>{fa||e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{fa=document.pointerLockElement===e}),Ur=new Vt;const t=new gt(.12,.12,.4),i=new ES({color:15253720,roughness:.7}),s=new We(t,i);return s.position.set(.35,-.25,-.5),Ur.add(s),ot.add(Ur),FS(),document.addEventListener("mousemove",dp),document.addEventListener("keydown",hp),document.addEventListener("keyup",pp),ot}function FS(){Gt=new Vt;const n=new gt(1.5,.6,3),e=new nt({color:5913130}),t=new We(n,e);Gt.add(t);const i=new gt(.1,2.5,.1),s=new We(i,e);s.position.y=1.5,Gt.add(s);const r=new gt(1.2,1.8,.05),o=new nt({color:15658734}),a=new We(r,o);a.position.set(0,2,.6),Gt.add(a),Gt.visible=!1}function OS(n){Gt&&n.add(Gt)}function fp(n,e={}){if(!ot)return;const t=e.mode||"explore",i=t==="sailing",s=t==="playful";Ur&&(Ur.visible=!i),Gt&&(Gt.visible=i),i?BS(n):kS(n,s),ot.updateProjectionMatrix()}function BS(n){pt.left&&(yn+=1.8*n),pt.right&&(yn-=1.8*n),xn.set(0,0,0),pt.forward&&(xn.z=-1),pt.backward&&(xn.z=.5);const s=new X(0,0,-1);s.applyEuler(new qt(0,yn,0)),s.normalize(),Ht.addScaledVector(s,-xn.z*10*n),Ht.multiplyScalar(.98),ot.position.addScaledVector(Ht,n),ot.position.y=.5,gd+=n*1.5;const r=Math.sin(gd)*.15;if(Gt){Gt.position.copy(ot.position),Gt.position.y+=r-1.2,Gt.rotation.y=yn;const c=(pt.left?.05:0)+(pt.right?-.05:0);Gt.rotation.z=Wr.lerp(Gt.rotation.z,c,.1)}const o=new X(0,5,12);o.applyEuler(new qt(0,yn,0));const a=ot.position.clone().add(o);ot.position.lerp(a,.1),ot.lookAt(Gt.position);const l=new X;ot.getWorldDirection(l),yn=Math.atan2(l.x,l.z)}function kS(n,e){xn.set(0,0,0),pt.forward&&(xn.z-=1),pt.backward&&(xn.z+=1),pt.left&&(xn.x-=1),pt.right&&(xn.x+=1),xn.normalize();const s=new X;ot.getWorldDirection(s),s.y=0,s.normalize();const r=new X().crossVectors(s,US).normalize(),o=new X;if(o.addScaledVector(s,-xn.z),o.addScaledVector(r,xn.x),Ht.x+=o.x*50*n,Ht.z+=o.z*50*n,Ht.x*=1-10*n,Ht.z*=1-10*n,ot.position.x+=Ht.x*n,ot.position.z+=Ht.z*n,e){const a=(pt.up?1:0)+(pt.down?-1:0);Ht.y+=a*10*n,Ht.y*=.95,ot.position.y+=Ht.y*n}else{Ht.y-=30*n;const a=ot.position.y<=Ir+.1;pt.up&&a&&Fo<=0&&(Ht.y=8,Fo=.2),Fo>0&&(Fo-=n),ot.position.y+=Ht.y*n,ot.position.y<Ir&&(ot.position.y=Ir,Ht.y=0)}ot.quaternion.setFromEuler(new qt(Bi,yn,0,"YXZ"))}function dp(n){if(!fa)return;const e=.002;yn-=n.movementX*e,Bi-=n.movementY*e,Bi=Wr.clamp(Bi,-Math.PI/2,Math.PI/2)}function hp(n){switch(n.code){case"KeyW":pt.forward=!0;break;case"KeyS":pt.backward=!0;break;case"KeyA":pt.left=!0;break;case"KeyD":pt.right=!0;break;case"ShiftLeft":pt.shift=!0;break;case"Space":pt.up=!0;break;case"ControlLeft":pt.down=!0;break;case"KeyC":pt.crouch=!0;break}}function pp(n){switch(n.code){case"KeyW":pt.forward=!1;break;case"KeyS":pt.backward=!1;break;case"KeyA":pt.left=!1;break;case"KeyD":pt.right=!1;break;case"ShiftLeft":pt.shift=!1;break;case"Space":pt.up=!1;break;case"ControlLeft":pt.down=!1;break;case"KeyC":pt.crouch=!1;break}}function wc(){return fa}function zS(){}function mp(n,e,t=Ir){if(!ot)return;ot.position.set(n+1.8,t,e+1.8);const i=n-ot.position.x,s=e-ot.position.z;yn=Math.atan2(-i,-s),Bi=-.08,md.set(Bi,yn,0),ot.quaternion.setFromEuler(md)}function ru(){return ot}function gp(n,e){ot&&(ot.aspect=n/e,ot.updateProjectionMatrix())}function _p(){Tc&&Tc.removeEventListener("mousedown",onMouseDown),document.removeEventListener("mousemove",dp),document.removeEventListener("keydown",hp),document.removeEventListener("keyup",pp)}const _d=Object.freeze(Object.defineProperty({__proto__:null,addToScene:OS,cleanupCamera:_p,createCamera:up,getCamera:ru,getIsLocked:wc,requestCursorLock:zS,resizeCamera:gp,teleportNearTarget:mp,updateCamera:fp},Symbol.toStringTag,{value:"Module"})),Dn=new Map,vd=[16294048,10537208,11067560,16308360,13672680,16302224,8968408,13150448,16294080,12114056];function Nr(){return Dn}const HS=new gt(.14,.1,.14),VS=new nt({color:16774353,emissive:16769184,emissiveIntensity:.1});function GS(n){let e=0,t=0,i=6;for(;i>0;){const s=i*i;if(n<t+s){const r=n-t,o=r%i-(i-1)/2,a=Math.floor(r/i)-(i-1)/2;return new X(o*.15,e*.11,a*.15)}t+=s,e++,i--}return new X(0,(e+(n-t))*.11,0)}function vp(n,e){n.forEach((t,i)=>{if(Dn.has(t.id))return;const s=bp(t,i);e.add(s),Dn.set(t.id,s)})}function xp(n,e){const t=new Set(n.map(i=>i.id));for(const[i,s]of Dn)t.has(i)||(s.userData.pyramidGroup&&e.remove(s.userData.pyramidGroup),e.remove(s),Dn.delete(i));n.forEach((i,s)=>{if(!Dn.has(i.id)){const o=bp(i,s);e.add(o),Dn.set(i.id,o)}const r=Dn.get(i.id);if(i.position_x!==void 0&&(r.userData.baseX=i.position_x,r.userData.baseZ=i.position_z),r.userData.isBuilding=i.isBuilding,r.userData.brickCount=i.brickCount||0,WS(r,r.userData.brickCount,e),r.userData.currentHatId!==i.hat){if(r.userData.hatMesh&&r.remove(r.userData.hatMesh),i.hat){const o=Sp(i.hat);r.add(o),r.userData.hatMesh=o}r.userData.currentHatId=i.hat}})}const Ml=new X,Oo=new X,xd=new St;function yp(n){if(n)for(const[,e]of Dn){const t=e.userData.leftPupil,i=e.userData.rightPupil,s=e.userData.leftSparkle,r=e.userData.rightSparkle,o=e.userData.pupilBaseLeft,a=e.userData.pupilBaseRight;if(!t||!i||!o||!a)continue;e.updateMatrixWorld(!0),Ml.set(0,.08,.41),Ml.applyMatrix4(e.matrixWorld),Oo.subVectors(n.position,Ml).normalize(),xd.copy(e.matrixWorld).invert(),Oo.transformDirection(xd);const l=.052,c=.038,u=Wr.clamp(Oo.x*.14,-l,l),f=Wr.clamp(Oo.y*.11,-c,c);if(t.position.set(o.x+u,o.y+f,o.z),i.position.set(a.x+u,a.y+f,a.z),s&&e.userData.sparkleBaseLeft){const d=e.userData.sparkleBaseLeft;s.position.set(d.x+u*.85,d.y+f*.85,d.z)}if(r&&e.userData.sparkleBaseRight){const d=e.userData.sparkleBaseRight;r.position.set(d.x+u*.85,d.y+f*.85,d.z)}}}function WS(n,e,t){if(!n.userData.pyramidGroup){const r=new Vt;r.position.set(n.userData.baseX+1.2,.05,n.userData.baseZ+1.2),r.rotation.y=Math.random()*Math.PI,t.add(r),n.userData.pyramidGroup=r,n.userData.bricks=[]}const i=n.userData.pyramidGroup,s=n.userData.bricks;if(s.length<e)for(let r=s.length;r<e;r++){const o=GS(r),a=new We(HS,VS);a.position.copy(o),a.scale.setScalar(.001),i.add(a),s.push(a),a.userData.targetScale=1}}function Mp(n){const e=performance.now()/1e3;let t=0;for(const[,i]of Dn){const s=Math.sin(n*1.5+t*1.3)*.08,r=new X(i.userData.baseX,i.userData.baseY,i.userData.baseZ);if(i.userData.isBuilding){const l=i.userData.pyramidGroup;if(l){const c=new X().subVectors(l.position,r).normalize(),u=Math.sin(n*8)*.5+.5,f=r.clone().addScaledVector(c,.6*u);i.position.lerp(f,.2),i.rotation.x=-.4*u}}else i.position.lerp(new X(r.x,r.y+s,r.z),.1),i.rotation.x=Wr.lerp(i.rotation.x,0,.1);i.rotation.y=Math.sin(n*.6+t*2.1)*.08,i.rotation.z=Math.sin(n*.8+t*1.7)*.02,i.userData.bricks&&i.userData.bricks.forEach(l=>{l.scale.x<1&&l.scale.lerp(new X(1,1,1),.1)});const o=i.userData.blushes;if(o){const l=.15+Math.sin(n*1.2+t*.8)*.05;o.forEach(c=>{c.material.emissiveIntensity=l})}const a=i.userData.reaction;if(a&&e<a.until){const l=e-a.start,c=Math.min(1,l/a.duration),u=1-Math.pow(1-c,3),f=Math.sin(l*14)*(1-u)*.18,d=Math.sin(l*8)*.08+.08;i.scale.setScalar(1+d+f*.3),i.rotation.x=Math.sin(l*10)*.06,o&&o.forEach(m=>{m.material.emissiveIntensity=.22+Math.sin(e*6)*.08,m.material.opacity=.65+Math.sin(e*5)*.08});const p=i.userData.leftSparkle,g=i.userData.rightSparkle;if(p&&g){const m=1+Math.sin(e*18)*.35;p.scale.setScalar(m),g.scale.setScalar(m)}const v=i.userData.reactionParticles;if(v&&v.length)for(let m=v.length-1;m>=0;m--){const h=v[m];h.userData.vel.y-=.012,h.position.addScaledVector(h.userData.vel,.016),h.rotation.z+=.08,h.material.opacity*=.965,h.scale.multiplyScalar(.985),h.material.opacity<.05&&(i.remove(h),v.splice(m,1))}}else i.scale.setScalar(1),i.rotation.x=0;t++}}function XS(n,e="feed"){const t=Dn.get(n);if(!t)return!1;const i=performance.now()/1e3,s=e==="hydrate"?1.2:1.35;t.userData.reaction={kind:e,start:i,duration:s,until:i+s};const r=e==="hydrate"?9169407:16748220,o=new nt({color:r,emissive:r,emissiveIntensity:.9,transparent:!0,opacity:.95}),a=new vn(.06,8,8),l=8;t.userData.reactionParticles||(t.userData.reactionParticles=[]);for(let c=0;c<l;c++){const u=new We(a,o.clone()),f=c/l*Math.PI*2;u.position.set(Math.cos(f)*.08,.55+Math.random()*.06,Math.sin(f)*.08),u.userData.vel=new X((Math.random()-.5)*.35+Math.cos(f)*.2,.55+Math.random()*.4,(Math.random()-.5)*.35+Math.sin(f)*.2),t.add(u),t.userData.reactionParticles.push(u)}return!0}function Sp(n){const e=new Vt;if(n==="wizard_hat"){const t=new ca(.5,.8,12),i=new nt({color:4930156}),s=new We(t,i);s.position.y=.8,e.add(s);const r=new We(new ls(.55,.55,.05,12),i);r.position.y=.4,e.add(r)}else if(n==="hard_hat"){const t=new vn(.45,12,8,0,Math.PI*2,0,Math.PI/2),i=new nt({color:16763904}),s=new We(t,i);s.position.y=.4,e.add(s)}else if(n==="beret"){const t=new ls(.45,.4,.15,12),i=new nt({color:3355443});new nt({color:3355443});const s=new We(t,i);s.position.y=.45,e.add(s)}else if(n==="crown"){const t=new ls(.45,.45,.4,8,1,!0),i=new nt({color:16766720}),s=new We(t,i);s.position.y=.6,e.add(s);for(let r=0;r<8;r++){const o=new We(new ca(.1,.3,4),i),a=r/8*Math.PI*2;o.position.set(Math.cos(a)*.45,.8,Math.sin(a)*.45),e.add(o)}}return e}function bp(n,e){const t=new Vt,i=n.color?new Xe(n.color):new Xe(vd[e%vd.length]),s=new gt(.8,.8,.8),r=new nt({color:i,emissive:i,emissiveIntensity:.08}),o=new We(s,r);t.add(o);const a=new gt(.35,.05,.35),l=new nt({color:16777215,emissive:16777215,emissiveIntensity:.3,transparent:!0,opacity:.4}),c=new We(a,l);c.position.set(-.1,.41,-.1),t.add(c);const u=new gt(.2,.22,.05),f=new nt({color:16777215,emissive:16777215,emissiveIntensity:.15}),d=new We(u,f);d.position.set(-.15,.08,.41),t.add(d);const p=new We(u,f);p.position.set(.15,.08,.41),t.add(p);const g=new gt(.12,.14,.05),v=new nt({color:2236979}),m=new We(g,v);m.position.set(-.15,.06,.44),t.add(m);const h=new We(g,v);h.position.set(.15,.06,.44),t.add(h),t.userData.leftPupil=m,t.userData.rightPupil=h,t.userData.pupilBaseLeft=m.position.clone(),t.userData.pupilBaseRight=h.position.clone();const C=new gt(.05,.05,.02),w=new nt({color:16777215,emissive:16777215,emissiveIntensity:.6}),_=new We(C,w);_.position.set(-.1,.12,.47),t.add(_);const k=new We(C,w);k.position.set(.2,.12,.47),t.add(k),t.userData.leftSparkle=_,t.userData.rightSparkle=k,t.userData.sparkleBaseLeft=_.position.clone(),t.userData.sparkleBaseRight=k.position.clone();const L=new gt(.12,.08,.05),P=16746632,F=new We(L,new nt({color:P,emissive:P,emissiveIntensity:.15,transparent:!0,opacity:.6}));F.position.set(-.25,-.05,.41),t.add(F);const E=new We(L,new nt({color:P,emissive:P,emissiveIntensity:.15,transparent:!0,opacity:.6}));E.position.set(.25,-.05,.41),t.add(E),t.userData.blushes=[F,E];const M=new gt(.12,.03,.02),R=new nt({color:5583684}),$=new We(M,R);$.position.set(0,-.1,.42),t.add($);const te=n.position_x!==void 0?n.position_x:-8+e%5*4,le=n.position_z!==void 0?n.position_z:-4+Math.floor(e/5)*4,pe=.6;if(t.position.set(te,pe,le),t.userData.baseX=te,t.userData.baseY=pe,t.userData.baseZ=le,t.userData.pipId=n.id,t.userData.pipName=n.name,n.hat){const Z=Sp(n.hat);t.add(Z),t.userData.hatMesh=Z,t.userData.currentHatId=n.hat}return t}const yd=Object.freeze(Object.defineProperty({__proto__:null,createPipMeshes:vp,getPipMeshMap:Nr,syncPipMeshes:xp,triggerPipReaction:XS,updatePipAnimations:Mp,updatePipEyeTracking:yp},Symbol.toStringTag,{value:"Module"})),Md=new cp,Bo=new it;function $S(n,e,t,i,s){if(s)Bo.set(0,0);else{const a=i.domElement.getBoundingClientRect();Bo.x=(n.clientX-a.left)/a.width*2-1,Bo.y=-((n.clientY-a.top)/a.height)*2+1}Md.setFromCamera(Bo,e);const r=[];for(const[a,l]of t)l.traverse(c=>{c.isMesh&&(c.userData._pipId=a,r.push(c))});const o=Md.intersectObjects(r,!1);return o.length>0?o[0].object.userData._pipId:null}const Xr=Oe(!1),da=new Map,ha=new Map;let Ns=!1;function qS(n,e){Xr.value=!0,Ns=!1,da.clear(),ha.clear();const t=n.length;if(t===0)return;const i=4;n.forEach((s,r)=>{const o=e.get(s.id);if(!o)return;da.set(s.id,{x:o.userData.baseX,y:o.userData.baseY,z:o.userData.baseZ});const a=r/t*Math.PI*2;ha.set(s.id,{x:ua.x+Math.cos(a)*i,y:o.userData.baseY,z:ua.z+Math.sin(a)*i})})}function YS(n,e){if(!Xr.value)return;const t=Ns?da:ha,i=2*n;let s=!0;for(const[r,o]of t){const a=e.get(r);if(!a)continue;a.userData.baseX+=(o.x-a.userData.baseX)*i,a.userData.baseZ+=(o.z-a.userData.baseZ)*i,a.position.x=a.userData.baseX,a.position.z=a.userData.baseZ;const l=o.x-a.userData.baseX,c=o.z-a.userData.baseZ;if((Math.abs(l)>.05||Math.abs(c)>.05)&&(s=!1),!Ns){const u=Math.atan2(ua.z-a.position.z,ua.x-a.position.x);a.rotation.y=u-Math.PI/2}}Ns&&s&&(Xr.value=!1,Ns=!1,da.clear(),ha.clear())}function jS(){Xr.value&&(Ns=!0)}const Da=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},KS={__name:"GladeCanvas",setup(n){const e=Oe(null),{pips:t,selectPip:i,buildMode:s,currentMode:r,activeGlade:o,gladeSlots:a,selectedTool:l,farmBlocks:c,placeFarmBlock:u,tickFarm:f,setPlayerPosition:d,fairies:p,wildPips:g,onboardingStep:v,guidePip:m,spawnFairy:h,captureFairy:C,spawnWildPip:w,captureWildPip:_,inventory:k,selectedSlot:L,equipHat:P,removePip:F,removeFarmBlock:E}=tr();let M=null,R=null,$=null,te=null,le=null;const pe=new cp,Z=new it,Y=new Map,I=new Map,ye=[];let xe=null;const Ce=new Map,Te=new Map,Ye=[],O=[];let z=null;const Q=[];function ee(H,q){var N;const J=(N=o.value)==null?void 0:N.zone;return J?H>=J.minX&&H<=J.maxX&&q>=J.minZ&&q<=J.maxZ:!1}function be(H,q){if(q){Z.set(0,0);return}const J=M.domElement.getBoundingClientRect();Z.x=(H.clientX-J.left)/J.width*2-1,Z.y=-((H.clientY-J.top)/J.height)*2+1}function De(H,q){if(!$||!M)return null;be(H,q),pe.setFromCamera(Z,$);const J=new Ii(new X(0,1,0),0),N=new X;return pe.ray.intersectPlane(J,N)?N:null}function Ne(){if(!R)return;const H=new Set(c.value.map(q=>q.id));for(const[q,J]of Y)H.has(q)||(R.remove(J),Y.delete(q));for(const q of c.value){if(Y.has(q.id))continue;const J=tt(q);R.add(J),Y.set(q.id,J)}}function tt(H){let q=new gt(1,.7,1),J=14267276;H.type==="lantern"?(q=new gt(.6,1.2,.6),J=16765567):H.type==="totem"?(q=new gt(.9,1.5,.9),J=12956646):H.type==="archive"&&(q=new gt(1.2,.9,1.2),J=10474456);const N=new nt({color:J,emissive:J,emissiveIntensity:.08}),T=new We(q,N);return T.position.set(H.x,q.parameters.height/2,H.z),T}function A(H){if(!xe||!$)return;const q=new X;$.getWorldDirection(q),q.y=0,q.normalize();const J=new X().crossVectors(q,new X(0,1,0)).normalize(),N=new X().copy($.position).addScaledVector(q,-1.6).addScaledVector(J,.75);xe.position.x+=(N.x-xe.position.x)*.12,xe.position.z+=(N.z-xe.position.z)*.12,xe.position.y=.48+Math.sin(H*3.2)*.05}function U(H,q){if(!R)return;const J=new Set(p.value.map(N=>N.id));for(const[N,T]of Ce)J.has(N)||(R.remove(T),Ce.delete(N));p.value.forEach(N=>{let T=Ce.get(N.id);if(!T){const Fe=new Vt,B=new We(new vn(.12,8,8),new nt({color:N.color,emissive:N.color,emissiveIntensity:1}));Fe.add(B);const oe=new We(new vn(.3,8,8),new nt({color:N.color,transparent:!0,opacity:.35}));Fe.add(oe),T=Fe,R.add(T),Ce.set(N.id,T)}const me=N.x+Math.sin(q*.5+N.speed*10)*8,we=N.z+Math.cos(q*.4+N.speed*10)*8;T.position.x+=(me-T.position.x)*.05,T.position.z+=(we-T.position.z)*.05,T.position.y=N.y+Math.sin(q*2+N.speed)*.5,T.children[1].scale.setScalar(1+Math.sin(q*4)*.2)})}function b(H,q){const J=new Vt;for(let we=0;we<8;we++){const Fe=new We(new vn(.05),new tu({color:q})),B=we/8*Math.PI*2;Fe.userData.vel=new X(Math.cos(B),Math.sin(we),Math.sin(B)).multiplyScalar(.1),J.add(Fe)}J.position.copy(H),R.add(J);const N=te.getElapsedTime(),T=.8,me=()=>{if(te.getElapsedTime()-N>T){R.remove(J);return}J.children.forEach(Fe=>{Fe.position.add(Fe.userData.vel),Fe.scale.multiplyScalar(.95)}),requestAnimationFrame(me)};me()}function de(H,q){const J=new Vt,N=24;for(let Fe=0;Fe<N;Fe++){const B=new We(new vn(.12,6,6),new nt({color:q,emissive:q,emissiveIntensity:1.5,transparent:!0})),oe=Fe/N*Math.PI*2,ae=(Math.random()-.5)*Math.PI,ge=.15+Math.random()*.2;B.userData.vel=new X(Math.cos(oe)*Math.cos(ae),Math.sin(ae),Math.sin(oe)*Math.cos(ae)).multiplyScalar(ge),J.add(B)}J.position.copy(H),R.add(J);const T=te.getElapsedTime(),me=1.2,we=()=>{const Fe=te.getElapsedTime()-T;if(Fe>me){R.remove(J);return}J.children.forEach(B=>{B.position.add(B.userData.vel),B.userData.vel.multiplyScalar(.96),B.userData.vel.y-=.005,B.scale.multiplyScalar(.97),B.material.opacity=1-Fe/me}),requestAnimationFrame(we)};we()}function ie(H){if(!$||!R)return;const q=new Vt,J=new We(new vn(.15,12,12,0,Math.PI*2,0,Math.PI/2),new nt({color:16724787})),N=new We(new vn(.15,12,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new nt({color:16777215}));q.add(J),q.add(N);const T=new X;$.getWorldDirection(T),q.position.copy($.position).addScaledVector(T,1),R.add(q);const me=T.clone().multiplyScalar(15);Ye.push({mesh:q,velocity:me,life:3})}function ue(H){const q=new We(new gt(.8,.8,.8),new nt({color:8542764}));he(q,16729156)}function he(H,q=16729156){if(!R)return;const J=new Vt;J.add(H);const N=new We(new vn(.55,12,12),new nt({color:q,emissive:q,emissiveIntensity:.1}));N.position.y=1.5,J.add(N);const T=new We(new ls(.012,.012,.8),new nt({color:16777215}));T.position.y=1.1,J.add(T),J.position.copy(H.position),H.position.set(0,0,0),R.add(J),O.push({mesh:J,life:25,speed:1.8+Math.random()*2.2,color:q})}function se(H){if(!$||!R)return;const q=new We(new vn(.18,12,12),new nt({color:16729343,emissive:16729343,emissiveIntensity:.5})),J=new X;$.getWorldDirection(J),q.position.copy($.position).addScaledVector(J,1),R.add(q);const N=J.clone().multiplyScalar(22);Q.push({mesh:q,velocity:N,life:3,type:"balloon_seed"})}function V(H){if(!$||!R)return;const q=new X;$.getWorldDirection(q);const J=$.position.clone().addScaledVector(q,12);de(J,new Xe().setHSL(Math.random(),.8,.6).getHex())}function y(H){const q=wc(),J=De(H,q);if(J)h(J.x,J.y+.5,J.z),b(J,16777215);else{const N=new X;$.getWorldDirection(N);const T=$.position.clone().addScaledVector(N,4);h(T.x,T.y,T.z),b(T,16777215)}}function x(H,q){if(!(!R||!m.value)&&(!z&&v.value<=4&&(z=new We(new gt(1,1,1),new nt({color:m.value.color})),R.add(z)),!!z)){if(v.value===0&&(m.value.size>1?m.value.size-=H*2:(m.value.size=1,v.value=2)),v.value===2){if(!$)return;Math.hypot($.position.x-m.value.x,$.position.z-m.value.z)>12&&(z.rotation.y+=H*2.5);const N=55,T=-35,me=N-m.value.x,we=T-m.value.z,Fe=Math.hypot(me,we);Fe>2?(m.value.x+=me/Fe*7.5*H,m.value.z+=we/Fe*7.5*H):v.value=3}if(v.value>=4){R.remove(z),z=null;return}z.scale.setScalar(m.value.size),z.position.set(m.value.x,m.value.size/2+.1,m.value.z),z.rotation.y+=H*2}}function D(H,q){for(let J=O.length-1;J>=0;J--){const N=O[J];N.mesh.position.y+=N.speed*H,N.mesh.rotation.y+=H*.8,N.mesh.position.x+=Math.sin(q*.8+J)*.04,N.mesh.position.z+=Math.cos(q*.7+J)*.04,N.life-=H,N.life<22&&(N.mesh.position.x+=Math.sin(q*2)*.15),(N.life<=0||N.mesh.position.y>60)&&(de(N.mesh.position,N.color||16729156),R.remove(N.mesh),O.splice(J,1))}}function G(H,q){if(!R)return;const J=new Set(g.value.map(N=>N.id));for(const[N,T]of Te)J.has(N)||(R.remove(T),Te.delete(N));g.value.forEach(N=>{let T=Te.get(N.id);T||(T=new We(new gt(.7,.7,.7),new nt({color:N.color,transparent:!0,opacity:.5})),T.position.set(N.x,.45,N.z),R.add(T),Te.set(N.id,T)),T.position.y=.45+Math.sin(q*2)*.1,T.rotation.y+=H*1.5})}function ne(H){for(let q=Ye.length-1;q>=0;q--){const J=Ye[q];J.mesh.position.addScaledVector(J.velocity,H),J.velocity.y-=9.8*H,J.life-=H,J.mesh.position.y<0&&(J.mesh.position.y=0,J.velocity.y*=-.5),p.value.forEach(N=>{const T=Ce.get(N.id);T&&J.mesh.position.distanceTo(T.position)<1.2&&(b(T.position,N.color),C(N.id)&&(J.life=-1))}),g.value.forEach(N=>{const T=Te.get(N.id);T&&J.mesh.position.distanceTo(T.position)<1.5&&(b(T.position,N.color),_(N.id)&&(J.life=-1))});for(let N=O.length-1;N>=0;N--){const T=O[N];J.mesh.position.distanceTo(T.mesh.position.clone().add(new X(0,1.4,0)))<1&&(b(T.mesh.position,16729156),R.remove(T.mesh),O.splice(N,1),J.life=-1)}J.life<=0&&(R.remove(J.mesh),Ye.splice(q,1))}for(let q=Q.length-1;q>=0;q--){const J=Q[q];if(J.mesh.position.addScaledVector(J.velocity,H),J.life-=H,J.type==="balloon_seed"){const N=Nr();for(const[T,me]of N)if(J.mesh.position.distanceTo(me.position)<1.2){const we=me.clone();if(F(T)){he(we,4521796),J.life=-1;break}}for(const[T,me]of Y)if(J.mesh.position.distanceTo(me.position)<1.2){const we=me.clone();if(E(T)){he(we,4521983),J.life=-1;break}}}J.life<=0&&(R.remove(J.mesh),Q.splice(q,1))}}function re(H){const q=new Vt,J=new We(new gt(.24,2,.24),new nt({color:9399108}));J.position.y=1,q.add(J);const N=document.createElement("canvas");N.width=512,N.height=128;const T=N.getContext("2d");T.fillStyle="rgba(255, 247, 232, 0.92)",T.fillRect(0,0,512,128),T.strokeStyle="rgba(92, 74, 60, 0.9)",T.lineWidth=6,T.strokeRect(3,3,506,122),T.fillStyle="#5a463a",T.font="bold 40px sans-serif",T.fillText(H.name,22,52),T.font="26px sans-serif",T.fillText(`${H.theme} · ${H.project}`,22,96);const me=new bS(N),we=new We(new fs(4.2,1.1),new nt({map:me,transparent:!0}));return we.position.set(0,2.2,0),q.add(we),q.position.set(H.center.x,0,H.center.z-10.5),q.userData.gladeId=H.id,q}function Se(H){const q=wc(),J=ru(),N=Nr();if(!J||!M)return;if(s.value){const me=De(H,q);if(me&&ee(me.x,me.z)){u(l.value,me.x,me.z);return}}if(r.value==="playful"){const me=k.value[L.value];if((me==null?void 0:me.id)==="balloon_cannon")se();else if((me==null?void 0:me.id)==="firework_launcher")V();else if((me==null?void 0:me.id)==="fairy_summoner")y(H);else if((me==null?void 0:me.id)==="capture_orb")ie();else if((me==null?void 0:me.type)==="weapon"){const we=new X;$.getWorldDirection(we);const Fe=$.position.clone().addScaledVector(we,6);de(Fe,new Xe().setHSL(Math.random(),.85,.7).getHex())}else me||V();return}const T=$S(H,J,N,M,q);if(T!==null){const me=t.value.find(we=>we.id===T);if(me){const we=k.value[L.value];if(we&&we.type==="hat"){P(me.id,we);return}i(me)}}}function ve(){if(!M||!e.value)return;const H=window.innerWidth,q=window.innerHeight;M.setSize(H,q),gp(H,q)}function Me(){le=requestAnimationFrame(Me);const H=te.getDelta(),q=te.getElapsedTime();fp(H,{mode:r.value}),Mp(q),yp($),Xr.value&&YS(H,Nr()),f(H),A(q),U(H,q),G(H,q),x(H),D(H,q),ne(H),p.value.length<5&&Math.random()<.01&&h(),g.value.length<3&&Math.random()<.005&&w(),$&&d($.position.x,$.position.z),M.render(R,$)}Sa(()=>{M=new rp({antialias:!0,alpha:!1}),M.setSize(window.innerWidth,window.innerHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.toneMapping=Ph,M.toneMappingExposure=1.4,M.outputColorSpace=fn,e.value.appendChild(M.domElement),R=new op,DS(R);for(const N of a.value){const T=N.zone,me=new fs(T.maxX-T.minX+1,T.maxZ-T.minZ+1),we=new nt({color:new Xe(N.color),transparent:!0,opacity:.16}),Fe=new We(me,we);Fe.rotation.x=-Math.PI/2,Fe.position.set((T.minX+T.maxX)/2,.02,(T.minZ+T.maxZ)/2),R.add(Fe),I.set(N.id,Fe);const B=re(N);R.add(B),ye.push(B)}$=up(M,M.domElement),te=new RS,t.value.length>0&&vp(t.value,R);const H=new We(new gt(.42,.42,.42),new nt({color:16372637,emissive:10513498,emissiveIntensity:.08}));xe=new Vt,xe.add(H);const q=new We(new gt(.06,.06,.04),new nt({color:2236979}));q.position.set(.08,.03,.22),xe.add(q);const J=q.clone();J.position.x=-.08,xe.add(J),xe.position.set(13.5,.48,13.5),R.add(xe),Me(),window.addEventListener("resize",ve)}),bn(()=>t.value,H=>{R&&H&&xp(H,R)},{deep:!0}),bn(()=>c.value,()=>{Ne()},{deep:!0}),bn(()=>{var H;return(H=o.value)==null?void 0:H.id},()=>{var H;for(const q of a.value){const J=I.get(q.id);J&&(J.material.opacity=((H=o.value)==null?void 0:H.id)===q.id?.28:.12)}for(const q of ye)q.visible=!0,q.children.forEach(J=>{var N;J.material&&(J.material.opacity=q.userData.gladeId===((N=o.value)==null?void 0:N.id)?1:.72,J.material.transparent=!0)})}),Yr(()=>{le&&cancelAnimationFrame(le),_p(),window.removeEventListener("resize",ve),M&&(M.dispose(),e.value&&M.domElement.parentNode===e.value&&e.value.removeChild(M.domElement))});function Be(H){H.preventDefault(),r.value==="playful"&&ue()}return(H,q)=>(Ae(),Re("div",{ref_key:"container",ref:e,class:"glade-canvas",onClick:Se,onContextmenu:Be},null,544))}},ZS=Da(KS,[["__scopeId","data-v-630d8fb9"]]),JS={style:{display:"flex","align-items":"center",gap:"8px"}},QS={style:{"font-size":"16px"}},eb={style:{"font-size":"11px",opacity:"0.8",background:"#555",padding:"1px 4px","border-radius":"4px",color:"#fff"}},tb={style:{"font-size":"12px",opacity:"0.7","margin-bottom":"8px"}},nb={key:0,style:{"font-size":"13px","margin-bottom":"12px","line-height":"1.4"}},ib={style:{"font-size":"12px","margin-bottom":"12px"}},sb={key:0,style:{"margin-top":"4px",height:"4px",width:"100%",background:"rgba(0,0,0,0.2)","border-radius":"2px",overflow:"hidden"}},rb={key:1,style:{"margin-top":"8px",display:"flex","flex-direction":"column",gap:"4px"}},ob={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8"}},ab={style:{height:"4px",width:"100%",background:"rgba(0,0,0,0.2)","border-radius":"2px",overflow:"hidden"}},lb={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8","margin-top":"2px"}},cb={style:{height:"4px",width:"100%",background:"rgba(0,0,0,0.2)","border-radius":"2px",overflow:"hidden"}},ub={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8","margin-top":"2px"}},fb={style:{height:"4px",width:"100%",background:"rgba(255,100,150,0.1)","border-radius":"2px",overflow:"hidden"}},db={style:{display:"flex","justify-content":"space-between","font-size":"10px",opacity:"0.8","margin-top":"2px"}},hb={style:{color:"#ffd700"}},pb={style:{height:"2px",width:"100%",background:"rgba(255,215,0,0.1)","border-radius":"1px",overflow:"hidden","margin-top":"2px"}},mb={key:1,style:{display:"flex","flex-direction":"column",gap:"8px"}},gb={key:2,style:{display:"flex","flex-direction":"column",gap:"10px"}},_b={style:{"font-size":"12px",opacity:"0.85","line-height":"1.5"}},vb={__name:"PipOverlay",emits:["focus-chat"],setup(n,{emit:e}){const{selectedPip:t,deselectPip:i,openChat:s,closeChat:r}=tr(),o=Oe(null),{dragStyles:a,onMouseDown:l}=sa(o,{x:0,y:0},"pip-overlay-pos"),c=Oe("menu"),u=e;function f(){s(),u("focus-chat")}function d(){r(),c.value="menu"}return bn(()=>{var p;return(p=t.value)==null?void 0:p.id},()=>{c.value="menu"}),(p,g)=>_e(t)?(Ae(),Re("div",{key:0,ref_key:"pipOverlayEl",ref:o,class:"pip-overlay panel",style:Tt(_e(a)())},[W("div",{class:"draggable",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"10px",padding:"2px 0"},onMousedown:g[1]||(g[1]=(...v)=>_e(l)&&_e(l)(...v))},[W("div",JS,[W("span",{class:"status-dot",style:Tt({backgroundColor:_e(t).color||"#e06060"})},null,4),W("strong",QS,Ge(_e(t).name||"Unknown Pip"),1),W("span",eb," Lv. "+Ge(_e(t).level||1),1)]),W("button",{class:"close-btn",onClick:g[0]||(g[0]=as((...v)=>_e(i)&&_e(i)(...v),["stop"]))},"×")],32),W("div",tb,Ge(_e(t).provider||"openai")+" / "+Ge(_e(t).model||"gpt-4"),1),_e(t).personality?(Ae(),Re("div",nb,' "'+Ge(_e(t).personality)+'" ',1)):Ze("",!0),W("div",ib,[g[8]||(g[8]=yt(" Status: ",-1)),W("span",{style:Tt({color:_e(t).status==="active"?"#6be07a":"#e0c040"})},Ge(_e(t).status||"idle"),5),_e(t).exp!==void 0?(Ae(),Re("div",sb,[W("div",{style:Tt({width:`${_e(t).exp}%`,height:"100%",background:"#ffd700"})},null,4)])):Ze("",!0),_e(t).hunger!==void 0?(Ae(),Re("div",rb,[W("div",ob,[g[4]||(g[4]=W("span",null,"Hunger",-1)),W("span",null,Ge(Math.round(_e(t).hunger))+"%",1)]),W("div",ab,[W("div",{class:"stat-fill hunger",style:Tt({width:`${_e(t).hunger}%`,height:"100%"})},null,4)]),W("div",lb,[g[5]||(g[5]=W("span",null,"Thirst",-1)),W("span",null,Ge(Math.round(_e(t).thirst))+"%",1)]),W("div",cb,[W("div",{class:"stat-fill thirst",style:Tt({width:`${_e(t).thirst}%`,height:"100%"})},null,4)]),W("div",ub,[g[6]||(g[6]=W("span",null,"Bond",-1)),W("span",null,Ge(Math.round(_e(t).emotionalBond||0))+"%",1)]),W("div",fb,[W("div",{style:Tt({width:`${_e(t).emotionalBond||0}%`,height:"100%",background:"linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%)"})},null,4)]),W("div",db,[g[7]||(g[7]=W("span",null,"Pyramid Built",-1)),W("span",hb,"🧱 "+Ge(_e(t).brickCount||0),1)]),W("div",pb,[W("div",{style:Tt({width:`${Math.min(100,(_e(t).brickCount||0)*2)}%`,height:"100%",background:"#ffd700"})},null,4)])])):Ze("",!0)]),c.value==="menu"?(Ae(),Re("div",mb,[W("button",{class:"send-btn",onClick:g[2]||(g[2]=v=>c.value="details"),style:{width:"100%"}},"Inspect"),W("button",{class:"send-btn",onClick:f,style:{width:"100%"}},"Talk"),W("button",{class:"send-btn",onClick:g[3]||(g[3]=(...v)=>_e(i)&&_e(i)(...v)),style:{opacity:"0.6",width:"100%"}},"Close")])):(Ae(),Re("div",gb,[W("div",_b,[W("strong",null,"About "+Ge(_e(t).name),1),g[9]||(g[9]=W("br",null,null,-1)),W("span",null,Ge(_e(t).personality||"A mysterious glade creature."),1)]),W("div",{style:{display:"flex",gap:"8px"}},[W("button",{class:"send-btn",onClick:f,style:{flex:"1"}},"Talk"),W("button",{class:"send-btn",onClick:d,style:{opacity:"0.7",flex:"1"}},"Back")])]))],4)):Ze("",!0)}};function xb(){async function n(o,a={}){const l=await fetch(o,{headers:{"Content-Type":"application/json"},...a});if(!l.ok){const c=await l.text();throw new Error(`API error ${l.status}: ${c}`)}return l.status===204?null:l.json()}async function e(){return n("/api/agents")}async function t(o){return n("/api/agents",{method:"POST",body:JSON.stringify(o)})}async function i(o,a){return n(`/api/agents/${o}`,{method:"PATCH",body:JSON.stringify(a)})}async function s(o){return n(`/api/agents/${o}`,{method:"DELETE"})}async function r(o,a){return n(`/api/agents/${o}/chat`,{method:"POST",body:JSON.stringify({content:a})})}return{fetchPips:e,createPip:t,updatePip:i,deletePip:s,chatWithPip:r}}const Sl=Oe([]);let zt=null,bl=null;function Ep(){function n(){if(zt&&(zt.readyState===WebSocket.OPEN||zt.readyState===WebSocket.CONNECTING))return;const s=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/council`;zt=new WebSocket(s),zt.onopen=()=>{console.log("[WS] Connected to council")},zt.onmessage=r=>{try{const o=JSON.parse(r.data);Sl.value.push(o)}catch{Sl.value.push({type:"raw",content:r.data})}},zt.onclose=()=>{console.log("[WS] Disconnected, reconnecting in 3s..."),zt=null,clearTimeout(bl),bl=setTimeout(()=>n(),3e3)},zt.onerror=r=>{console.error("[WS] Error:",r),zt.close()}}function e(){clearTimeout(bl),zt&&(zt.close(),zt=null)}function t(i){zt&&zt.readyState===WebSocket.OPEN?zt.send(JSON.stringify(i)):console.warn("[WS] Not connected, cannot send")}return{messages:Sl,connect:n,disconnect:e,send:t}}const yb={key:0,class:"chat-bubble pip",style:{opacity:"0.6"}},Mb={key:0,style:{opacity:"0.4","font-size":"12px","text-align":"center",padding:"20px"}},Sb={key:0,class:"chat-input-row"},bb=["placeholder","disabled"],Eb=["disabled"],Tb={__name:"ChatWindow",setup(n,{expose:e}){const{selectedPip:t,councilActive:i,chatOpen:s,pips:r,addPipExp:o}=tr(),{chatWithPip:a}=xb(),{messages:l}=Ep(),c=Oe(null),{dragStyles:u,onMouseDown:f}=sa(c,{x:0,y:0},"pip-chat-pos"),d=Oe([]),p=Oe(""),g=Oe(!1),v=Oe(null),m=Oe(null),h=Jt(()=>i.value||t.value&&s.value),C=Jt(()=>i.value?"Council Chamber":t.value?`Chat with ${t.value.name}`:"Chat");async function w(){const k=p.value.trim();if(!k||g.value||i.value||!t.value)return;const L=t.value.id,P=t.value.name,F=t.value.color||"#e06060";d.value.push({role:"user",content:k}),p.value="",g.value=!0;try{const E=await a(L,k);d.value.push({role:"pip",name:P,color:F,content:(E==null?void 0:E.reply)||(E==null?void 0:E.content)||(E==null?void 0:E.message)||JSON.stringify(E)})}catch(E){d.value.push({role:"pip",name:"System",color:"#ff6666",content:`Error: ${E.message}`})}finally{g.value=!1;const E=o(L,25),M=r.value.findIndex(R=>R.id===L);if(M!==-1){const R=r.value[M];R.brickCount=(R.brickCount||0)+1,R.isBuilding=!0,setTimeout(()=>{R.isBuilding=!1},5e3)}E&&d.value.push({role:"pip",name:"System",color:"#ffd700",content:`✨ ${P} has LEVELED UP! Their intelligence is expanding.`})}}function _(){Xn(()=>{var k;(k=m.value)==null||k.focus()})}return bn(()=>d.value.length,()=>{Xn(()=>{v.value&&(v.value.scrollTop=v.value.scrollHeight)})}),bn(()=>l.value.length,()=>{Xn(()=>{v.value&&(v.value.scrollTop=v.value.scrollHeight)})}),bn(()=>{var k;return(k=t.value)==null?void 0:k.id},()=>{d.value=[]}),e({focusInput:_}),(k,L)=>h.value?(Ae(),Re("div",{key:0,ref_key:"chatWindowEl",ref:c,class:"chat-window panel",style:Tt(_e(u)())},[W("div",{class:"draggable",style:{"font-weight":"bold","margin-bottom":"8px","font-size":"14px",padding:"2px 0"},onMousedown:L[0]||(L[0]=(...P)=>_e(f)&&_e(f)(...P))},Ge(C.value),33),W("div",{ref_key:"messagesEl",ref:v,class:"chat-messages"},[_e(i)?(Ae(),Re(at,{key:1},[(Ae(!0),Re(at,null,_n(_e(l),(P,F)=>(Ae(),Re("div",{key:"ws-"+F,class:"chat-bubble pip"},[P.agent_name?(Ae(),Re("div",{key:0,class:"bubble-name",style:Tt({color:P.color||"#c060c0"})},Ge(P.agent_name),5)):Ze("",!0),yt(" "+Ge(P.content||P.message||JSON.stringify(P)),1)]))),128)),_e(l).length===0?(Ae(),Re("div",Mb," Council is in session... awaiting responses ")):Ze("",!0)],64)):(Ae(),Re(at,{key:0},[(Ae(!0),Re(at,null,_n(d.value,(P,F)=>(Ae(),Re("div",{key:F,class:Nt(["chat-bubble",P.role])},[P.role==="pip"?(Ae(),Re("div",{key:0,class:"bubble-name",style:Tt({color:P.color})},Ge(P.name),5)):Ze("",!0),yt(" "+Ge(P.content),1)],2))),128)),g.value?(Ae(),Re("div",yb,[...L[2]||(L[2]=[W("span",{class:"loading-dots"},"Thinking",-1)])])):Ze("",!0)],64))],512),_e(i)?Ze("",!0):(Ae(),Re("div",Sb,[Hn(W("input",{ref_key:"inputEl",ref:m,"onUpdate:modelValue":L[1]||(L[1]=P=>p.value=P),type:"text",placeholder:_e(t)?`Say something to ${_e(t).name}...`:"Type a message...",disabled:g.value,onKeydown:Is(w,["enter"])},null,40,bb),[[$s,p.value]]),W("button",{class:"send-btn",disabled:g.value||!p.value.trim(),onClick:w}," Send ",8,Eb)]))],4)):Ze("",!0)}},wb={class:"council-btn-wrap"},Ab={key:0,class:"council-prompt",style:{"margin-top":"8px"}},Cb={__name:"CouncilButton",setup(n){const{pips:e,councilActive:t,triggerGathering:i,deselectPip:s}=tr(),{connect:r,disconnect:o,send:a,messages:l}=Ep(),c=Oe(""),u=Oe(!1);function f(){t.value?(a({type:"end_council"}),jS(),i(),u.value=!1,o()):(s(),r(),i(),qS(e.value,Nr()),u.value=!0)}function d(){const p=c.value.trim();p&&(a({type:"start_council",prompt:p,agent_ids:e.value.map(g=>g.id)}),l.value.push({agent_name:"You",color:"#a0a0ff",content:p}),c.value="",u.value=!1)}return(p,g)=>(Ae(),Re("div",wb,[W("button",{class:Nt(["council-btn",{active:_e(t)}]),onClick:f},Ge(_e(t)?"End Council":"Summon the Council"),3),u.value&&_e(t)?(Ae(),Re("div",Ab,[Hn(W("input",{"onUpdate:modelValue":g[0]||(g[0]=v=>c.value=v),type:"text",placeholder:"What shall the council discuss?",style:{width:"250px"},onKeydown:Is(d,["enter"])},null,544),[[$s,c.value]]),W("button",{class:"send-btn",onClick:d},"Ask")])):Ze("",!0)]))}},Rb={class:"intro-wrap"},Pb={class:"build-info"},Db={class:"build-meta"},Lb=5600,Ib={__name:"NebulaIntro",emits:["done"],setup(n,{emit:e}){const t=e,i=Oe(null);let s=null,r=null,o=null,a=null,l=null,c=0;const u="4/22/2026, 12:05:01 PM",f="feat: Integrate Pips Lab into MGE Hub with Ocean Islands and Sailing mode",d=`v0.1.0-${f.substring(0,7)}`;function p(){t("done")}function g(v){l=requestAnimationFrame(g);const m=v-c,h=Math.min(1,m/Lb);a&&(a.rotation.z+=9e-4,a.rotation.y+=35e-5);const C=.5+h*6.5;o&&(o.position.z-=C,o.fov=65+h*55,o.updateProjectionMatrix()),s&&r&&o&&s.render(r,o)}return Sa(()=>{const v=window.innerWidth,m=window.innerHeight;s=new rp({antialias:!0,alpha:!0}),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(v,m),i.value.appendChild(s.domElement),r=new op,r.fog=new Pa(590624,.035),o=new dn(65,v/m,.1,900),o.position.set(0,0,120);const h=13e3,C=new Float32Array(h*3),w=new Float32Array(h*3),_=new Xe(7329791),k=new Xe(14450175),L=new Xe(16751772),P=new Xe;for(let M=0;M<h;M++){const R=M*3,$=30+Math.random()*220,te=Math.random()*Math.PI*2,le=(Math.random()-.5)*120;C[R]=Math.cos(te)*$,C[R+1]=le,C[R+2]=Math.sin(te)*$-Math.random()*380;const pe=Math.random();pe<.35?P.copy(_).lerp(k,Math.random()):pe<.7?P.copy(k).lerp(L,Math.random()):P.copy(L).lerp(_,Math.random()),w[R]=P.r,w[R+1]=P.g,w[R+2]=P.b}const F=new pn;F.setAttribute("position",new En(C,3)),F.setAttribute("color",new En(w,3));const E=new lp({size:1.35,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.9});a=new SS(F,E),r.add(a),c=performance.now(),g(c)}),Yr(()=>{var v;l&&cancelAnimationFrame(l),((v=s==null?void 0:s.domElement)==null?void 0:v.parentNode)===i.value&&i.value.removeChild(s.domElement),s==null||s.dispose()}),(v,m)=>(Ae(),Re("div",Rb,[W("div",Pb,[W("span",{class:"glitch-text","data-text":d},"SYSTEM BUILD: "+Ge(d)),W("span",Db,"// "+Ge(_e(u))+" // "+Ge(_e(f)),1)]),W("div",{ref_key:"container",ref:i,class:"intro-canvas"},null,512),W("div",{class:"intro-overlay",onClick:p},[m[4]||(m[4]=Ds('<div class="asian-bg asian-bg-a" data-v-5c40a46b>グレイドネットワーク</div><div class="asian-bg asian-bg-b" data-v-5c40a46b><span data-v-5c40a46b>接</span><span data-v-5c40a46b>続</span><span data-v-5c40a46b>中</span><span data-v-5c40a46b>…</span></div><div class="asian-bg asian-bg-c" data-v-5c40a46b><span data-v-5c40a46b>創</span><span data-v-5c40a46b>造</span><span data-v-5c40a46b>世</span><span data-v-5c40a46b>界</span></div><div class="asian-bg asian-bg-d" data-v-5c40a46b>글레이드 네트워크 • 에이전트 허브</div><div class="asian-bg asian-bg-e" data-v-5c40a46b>龍 • 風 • 光</div><div class="asian-bg asian-bg-f" data-v-5c40a46b> ネットワーク接続中 ··· グレイド世界へようこそ ··· エージェント待機中 ···  ネットワーク接続中 ··· グレイド世界へようこそ ··· エージェント待機中 ···  </div><div class="intro-title-wrap" data-v-5c40a46b><div class="title-layers" data-v-5c40a46b><div class="title-layer layer-asian layer-3" data-v-5c40a46b>グレイド・ネットワークへようこそ</div><div class="title-layer layer-asian layer-2" data-v-5c40a46b>グレイド・ネットワークへようこそ</div><div class="title-layer layer-asian layer-1" data-v-5c40a46b>グレイド・ネットワークへようこそ</div><div class="title-layer layer-english" data-text="WELCOME TO THE GLADE NETWORK" data-v-5c40a46b>WELCOME TO THE GLADE NETWORK</div></div></div>',7)),W("div",{class:"intro-text"},[m[0]||(m[0]=yt(" Welcome to Pips, your interactive portfolio and project management universe, visualized as a lush, 3D environment. ",-1)),m[1]||(m[1]=W("br",null,null,-1)),W("span",{style:{color:"#92e0ff","font-weight":"700","font-size":"11px",opacity:"0.8"}},"[ SYSTEM VERSION: "+Ge(d)+" ]"),m[2]||(m[2]=W("br",null,null,-1)),m[3]||(m[3]=yt(` Here, your digital projects are represented as dynamic island worlds called Glades. Each Glade is inhabited by AI agents, or "Pips," dedicated to specific roles within your teams. You can oversee operations, brainstorm with agents, and build out your team's infrastructure all in real-time. Step into the vortex and watch your projects come to life! `,-1))]),W("button",{class:"intro-skip",onClick:p},"Enter Network")])]))}},Ub=Da(Ib,[["__scopeId","data-v-5c40a46b"]]),Nb={class:"header-controls"},Fb=["disabled"],Ob={key:0,class:"prompt"},Bb={key:1,class:"prompt"},kb={key:2,class:"prompt"},zb={key:3,class:"prompt"},Hb=["innerHTML"],Vb={class:"header-controls"},Gb={key:0,class:"prompt"},Wb={key:1,class:"prompt"},Xb={key:2,class:"prompt"},$b={key:3,class:"prompt"},qb=["innerHTML"],Yb={__name:"TerminalWindow",props:{docked:{type:Boolean,default:!0},visible:{type:Boolean,default:!0}},setup(n){const{terminalOpen:e,toggleTerminal:t,activeGlade:i,pips:s,gladeSlots:r,selectGladeSlot:o,spawnDynamicGlade:a,removePip:l,placeFarmBlock:c,createPip:u,selectPip:f,openChat:d,feedPip:p,hydratePip:g,equipHat:v,setMode:m,showToast:h,triggerFxPulse:C}=tr(),w=Oe(""),_=Oe([{type:"system",content:"PIPS OS v1.0.4 - Initializing..."},{type:"system",content:"Connection established to The Glade Collective."},{type:"system",content:'Type "help" for a list of commands.'}]),k=Oe(null),L=Oe(null),P=Oe([]),F=Oe(-1),E=Oe("");function M(){var Z;(Z=k.value)==null||Z.focus()}function R(){if(!e.value)return;const Z=document.activeElement;Z&&(Z.tagName==="INPUT"||Z.tagName==="TEXTAREA")||Xn(()=>M())}bn(e,Z=>{Z&&Xn(()=>M())});const $=()=>{Xn(()=>{L.value&&(L.value.scrollTop=L.value.scrollHeight)})};async function te(){var Ye,O,z,Q;const Z=w.value.trim();if(!Z)return;P.value.push(Z),F.value=-1,E.value="",_.value.push({type:"user",content:Z});const[Y,...I]=Z.split(" ");w.value="";const ye=ee=>s.value.find(be=>be.id===ee)||null,xe=ee=>`${ee.name} [${ee.id}] Lv.${ee.level||1} (${ee.provider||"glade"}/${ee.model||"native"}) @${ee.gladeId}`,Ce=ee=>String(ee).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Te=ee=>{switch((ee||"").toLowerCase()){case"agents":return"agents [--json]  - List all pips across all glades (use --json for copy/paste)";case"ceremony":return"ceremony [claude|openai|ollama]  - Run a funny connection ritual + real integration test";case"select":return"select [pip_id]  - Select a pip (opens overlay target)";case"talk":return"talk [pip_id]    - Select a pip and open chat";case"feed":return"feed [pip_id]    - Feed a pip (gift + reaction)";case"hydrate":return"hydrate [pip_id] - Hydrate a pip (gift + reaction)";case"hat":return"hat [pip_id] [wizard_hat|hard_hat|beret|crown]  - Equip a hat";case"rm":return"rm [pip_id] [--force]  - Remove a pip (requires --force)";case"goto":return"goto [pip_id]    - Teleport near a pip";case"mode":return"mode [explore|build|playful|wizard|about]  - Set mode";case"ls":return"ls               - List pips in active glade";default:return"help [cmd]        - Show command help (e.g. help agents)"}};switch(Y.toLowerCase()){case"help":I[0]?_.value.push({type:"system",content:Te(I[0])}):(_.value.push({type:"system",content:"Available commands:"}),_.value.push({type:"system",content:"  "+Te("ls")}),_.value.push({type:"system",content:"  "+Te("agents")}),_.value.push({type:"system",content:"  "+Te("ceremony")}),_.value.push({type:"system",content:"  "+Te("select")}),_.value.push({type:"system",content:"  "+Te("talk")}),_.value.push({type:"system",content:"  "+Te("feed")}),_.value.push({type:"system",content:"  "+Te("hydrate")}),_.value.push({type:"system",content:"  "+Te("hat")}),_.value.push({type:"system",content:"  "+Te("goto")}),_.value.push({type:"system",content:"  "+Te("mode")}),_.value.push({type:"system",content:"  "+Te("rm")}),_.value.push({type:"system",content:"  cd [index]         - Select glade by index (1-8)"}),_.value.push({type:"system",content:"  pip [name] [color] - Create a new pip here"}),_.value.push({type:"system",content:"  glade [name] [theme] - Create a new dynamic glade"}),_.value.push({type:"system",content:"  build [type] [x] [z] - Place a farm block"}),_.value.push({type:"system",content:"  tp [x] [z]         - Teleport to world coordinates"}),_.value.push({type:"system",content:"  whoami             - Show current session info"}),_.value.push({type:"system",content:"  claude [prompt]    - Ask The Architect to modify the world"}),_.value.push({type:"system",content:"  clear              - Clear terminal history"}),_.value.push({type:"system",content:"  exit               - Close terminal"}));break;case"ceremony":{const se=(I[0]||"claude").toLowerCase(),V=se==="claude"?"anthropic":se,y=V==="anthropic"?"claude-3-haiku-20240307":V==="openai"?"gpt-4o-mini":V==="ollama"?"llama3":null;if(!y){_.value.push({type:"error",content:`Unknown ceremony target: ${Ce(se)} (try: ceremony claude)`});break}_.value.push({type:"system",content:":: BEGIN RITUAL ::"}),_.value.push({type:"system",content:"You place a tiny candle on the keyboard. The keys glow softly."}),_.value.push({type:"system",content:"Step 1/3: Whisper the sacred env var into existence:"}),_.value.push({type:"system",content:"  LLM_API_KEY=******** (set this in your backend .env / environment)"}),_.value.push({type:"system",content:"Step 2/3: Offer a single token to the void..."}),$();let x=null;try{x=await(await fetch("/api/integrations/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({provider:V,model:y})})).json()}catch(D){x={ok:!1,error:String(D)}}if(!(x!=null&&x.ok)){_.value.push({type:"error",content:"The portal fizzles. The air smells like unconfigured secrets."}),_.value.push({type:"error",content:`Test failed: ${Ce((x==null?void 0:x.error)||"Unknown error")}`}),_.value.push({type:"system",content:"Tip: set backend env `LLM_API_KEY`, restart backend, then re-run `ceremony claude`."});break}if(_.value.push({type:"assistant",content:`A sigil appears: ${V.toUpperCase()} · ${Ce(y)}`}),_.value.push({type:"system",content:"Step 3/3: The Glade accepts the pact. A new sprout-agent emerges."}),h(`${V==="anthropic"?"Claude":V} connected`),C(),i.value){const D=V==="anthropic"?"Claude Sprout":`${V} Sprout`;u(D,"#d185ff",i.value.center.x+(Math.random()-.5)*4,i.value.center.z+(Math.random()-.5)*4,"Summoned by ceremony. Polite. Slightly dramatic. Extremely helpful.",i.value.id,V,y)}_.value.push({type:"system",content:":: RITUAL COMPLETE ::"});break}case"ls":const ee=s.value.filter(se=>{var V;return se.gladeId===((V=i.value)==null?void 0:V.id)});_.value.push({type:"system",content:`Pips in ${((Ye=i.value)==null?void 0:Ye.name)||"Unknown"}:`}),ee.length===0?_.value.push({type:"system",content:"  (No pips found)"}):ee.forEach(se=>{_.value.push({type:"system",content:`  > ${xe(se)}`})});break;case"agents":{if(I.includes("--json")){const D=s.value.map(G=>({id:G.id,name:G.name,gladeId:G.gladeId,provider:G.provider,model:G.model,level:G.level,status:G.status,position_x:G.position_x,position_z:G.position_z}));_.value.push({type:"system",content:`<pre style="white-space: pre-wrap; margin: 0;">${Ce(JSON.stringify(D,null,2))}</pre>`});break}_.value.push({type:"system",content:"All agents (pips):"});const V=new Map;for(const D of s.value){const G=D.gladeId||"unknown";V.has(G)||V.set(G,[]),V.get(G).push(D)}const y=D=>{var G;return((G=r.value.find(ne=>ne.id===D))==null?void 0:G.name)||D},x=Array.from(V.keys()).sort((D,G)=>y(D).localeCompare(y(G)));if(x.length===0){_.value.push({type:"system",content:"  (No pips found)"});break}for(const D of x)_.value.push({type:"system",content:`- ${y(D)} (${D})`}),V.get(D).forEach(G=>{_.value.push({type:"system",content:`    > ${xe(G)}`})});break}case"cd":const be=parseInt(I[0])-1;!isNaN(be)&&r.value[be]?(o(be),_.value.push({type:"system",content:`Navigated to ${r.value[be].name}.`})):_.value.push({type:"error",content:"Invalid glade index."});break;case"pip":const De=I[0]||"Nomad",Ne=I[1]||"#ffffff";i.value&&(u(De,Ne,i.value.center.x+(Math.random()-.5)*4,i.value.center.z+(Math.random()-.5)*4,"Born from the command line.",i.value.id,"glade","terminal-born"),_.value.push({type:"system",content:`Spawned pip "${De}" in ${i.value.name}.`}));break;case"rm":{const se=I.includes("--force"),V=I.find(y=>y!=="--force");if(!V){_.value.push({type:"error",content:"Usage: rm [pip_id] --force"});break}if(!se){_.value.push({type:"error",content:`Refusing to remove ${V}. Re-run: rm ${V} --force`});break}l(V)?_.value.push({type:"system",content:`Pip ${V} removed successfully.`}):_.value.push({type:"error",content:`Pip ${V} not found.`})}break;case"select":{const se=I[0],V=ye(se);if(!V){_.value.push({type:"error",content:`Pip ${se} not found.`});break}f(V),_.value.push({type:"system",content:`Selected: ${xe(V)}`});break}case"talk":{const se=I[0],V=ye(se);if(!V){_.value.push({type:"error",content:`Pip ${se} not found.`});break}f(V),d(),_.value.push({type:"system",content:`Chat opened with: ${xe(V)}`});break}case"feed":{const se=I[0];if(!se){_.value.push({type:"error",content:"Usage: feed [pip_id]"});break}p(se)?_.value.push({type:"system",content:`Fed ${se}.`}):_.value.push({type:"error",content:`Pip ${se} not found.`});break}case"hydrate":{const se=I[0];if(!se){_.value.push({type:"error",content:"Usage: hydrate [pip_id]"});break}g(se)?_.value.push({type:"system",content:`Hydrated ${se}.`}):_.value.push({type:"error",content:`Pip ${se} not found.`});break}case"hat":{const se=I[0],V=I[1];if(!se||!V){_.value.push({type:"error",content:"Usage: hat [pip_id] [wizard_hat|hard_hat|beret|crown]"});break}const y=v(se,{id:V});_.value.push({type:y?"system":"error",content:y?`Equipped ${V} on ${se}.`:`Failed to equip hat on ${se}.`});break}case"mode":{const se=I[0];if(!se){_.value.push({type:"error",content:"Usage: mode [explore|build|playful|wizard|about]"});break}const V=m(se);_.value.push({type:V?"system":"error",content:V?`Mode set: ${se}`:`Invalid mode: ${se}`});break}case"goto":{const se=I[0],V=ye(se);if(!V||V.position_x===void 0){_.value.push({type:"error",content:`Pip ${se} not found (or has no position).`});break}ia(()=>Promise.resolve().then(()=>_d),void 0,import.meta.url).then(y=>{y.teleportNearTarget(V.position_x,V.position_z),_.value.push({type:"system",content:`Teleported near ${V.name}.`}),$()});break}case"glade":const tt=I[0]||"New Sector",A=I[1]||"Default";a(tt,A),_.value.push({type:"system",content:`Dynamic glade "${tt}" initialized at center spatial coordinates.`});break;case"build":const U=I[0],b=parseFloat(I[1])||((O=i.value)==null?void 0:O.center.x)||0,de=parseFloat(I[2])||((z=i.value)==null?void 0:z.center.z)||0;c(U,b,de)?_.value.push({type:"system",content:`Placed ${U} at (${b.toFixed(1)}, ${de.toFixed(1)}).`}):_.value.push({type:"error",content:`Failed to place ${U}. Check if position is within glade zone.`});break;case"teleport":case"tp":const ie=parseFloat(I[0]),ue=parseFloat(I[1]);!isNaN(ie)&&!isNaN(ue)?ia(()=>Promise.resolve().then(()=>_d),void 0,import.meta.url).then(se=>{se.teleportNearTarget(ie,ue),_.value.push({type:"system",content:`Teleported to sequence coordinates (${ie}, ${ue}).`})}):_.value.push({type:"error",content:"Usage: tp [x] [z]"});break;case"clear":_.value=[{type:"system",content:"Terminal history cleared."}];break;case"whoami":_.value.push({type:"system",content:"USER: Architect_01"}),_.value.push({type:"system",content:"PRIVILEGE: ROOT"}),_.value.push({type:"system",content:`LOCATION: ${((Q=i.value)==null?void 0:Q.id)||"Unknown"}`});break;case"exit":t();break;case"claude":const he=I.join(" ");if(!he){_.value.push({type:"error",content:"No prompt provided for Claude."});break}_.value.push({type:"system",content:">>> Pinging The Glade Architect..."}),await pe(he);break;default:_.value.push({type:"error",content:`Command not found: ${Y}`})}$()}function le(Z){if(Z.key==="ArrowUp"){if(P.value.length===0)return;Z.preventDefault(),F.value===-1?(E.value=w.value,F.value=P.value.length-1):F.value=Math.max(0,F.value-1),w.value=P.value[F.value]||"",Xn(()=>{var Y,I;return(I=(Y=k.value)==null?void 0:Y.setSelectionRange)==null?void 0:I.call(Y,w.value.length,w.value.length)})}else if(Z.key==="ArrowDown"){if(P.value.length===0||F.value===-1)return;Z.preventDefault(),F.value++,F.value>=P.value.length?(F.value=-1,w.value=E.value):w.value=P.value[F.value]||"",Xn(()=>{var Y,I;return(I=(Y=k.value)==null?void 0:Y.setSelectionRange)==null?void 0:I.call(Y,w.value.length,w.value.length)})}}async function pe(Z){try{const Y=await fetch("/api/agents/terminal-agent/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:Z})});if(!Y.ok){setTimeout(()=>{var xe,Ce,Te;_.value.push({type:"assistant",content:'I am simulating a world change. I see you want to modify The Glade. I have spawned a special "AI Observation Pip" for you.'});const ye={id:`pip-ai-${Date.now()}`,name:"Claude Shadow",color:"#d185ff",personality:"A fragment of Claude in the world.",provider:"anthropic",model:"claude-3-opus",status:"idle",position_x:((xe=i.value)==null?void 0:xe.center.x)||0,position_z:((Ce=i.value)==null?void 0:Ce.center.z)||0,gladeId:((Te=i.value)==null?void 0:Te.id)||"glade-wild"};s.value.push(ye),$()},1e3);return}const I=await Y.json();_.value.push({type:"assistant",content:I.content}),I.content.includes("```json")}catch{_.value.push({type:"error",content:"Network error or backend unreachable. Using local simulation mode."}),setTimeout(()=>{_.value.push({type:"assistant",content:'Claude Local: "I have acknowledged your command. The world is yours to shape."'}),$()},800)}}return(Z,Y)=>n.visible?(Ae(),Re(at,{key:0},[n.docked?(Ae(),Re("div",{key:0,class:Nt(["terminal-docked panel",{collapsed:!_e(e)}]),onClick:Y[5]||(Y[5]=as(()=>{},["stop"])),onMouseenter:R},[W("div",{class:"terminal-header",onMousedown:Y[2]||(Y[2]=I=>Z.$emit("drag-start"))},[Y[14]||(Y[14]=W("div",{class:"header-led"},null,-1)),Y[15]||(Y[15]=W("div",{class:"header-title"},"PIPS_TERMINAL_ROOT@THE_GLADE",-1)),W("div",Nb,[W("button",{onClick:Y[0]||(Y[0]=(...I)=>_e(t)&&_e(t)(...I))},Ge(_e(e)?"−":"+"),1),W("button",{onClick:Y[1]||(Y[1]=I=>_.value=[]),disabled:!_e(e)},"□",8,Fb)])],32),_e(e)?(Ae(),Re(at,{key:0},[W("div",{class:"terminal-history",ref_key:"historyRef",ref:L},[(Ae(!0),Re(at,null,_n(_.value,(I,ye)=>(Ae(),Re("div",{key:ye,class:Nt(["line",I.type])},[I.type==="user"?(Ae(),Re("span",Ob,"$")):Ze("",!0),I.type==="system"?(Ae(),Re("span",Bb,"#")):Ze("",!0),I.type==="assistant"?(Ae(),Re("span",kb,"CLAUDE>")):Ze("",!0),I.type==="error"?(Ae(),Re("span",zb,"ERR!")):Ze("",!0),W("span",{class:"content",innerHTML:I.content},null,8,Hb)],2))),128))],512),W("div",{class:"terminal-input-row",onClick:M},[Y[16]||(Y[16]=W("span",{class:"prompt-arrow"},">",-1)),Hn(W("input",{ref_key:"inputRef",ref:k,"onUpdate:modelValue":Y[3]||(Y[3]=I=>w.value=I),type:"text",spellcheck:"false",autofocus:"",onKeydown:[Is(te,["enter"]),le,Y[4]||(Y[4]=Is((...I)=>_e(t)&&_e(t)(...I),["esc"]))]},null,544),[[$s,w.value]]),Y[17]||(Y[17]=W("div",{class:"cursor-block"},null,-1))])],64)):Ze("",!0)],34)):(Ae(),Re(at,{key:1},[_e(e)?(Ae(),Re("div",{key:0,class:"terminal-overlay",onClick:Y[13]||(Y[13]=as((...I)=>_e(t)&&_e(t)(...I),["self"]))},[W("div",{class:"terminal-container",onClick:Y[12]||(Y[12]=as(()=>{},["stop"])),onMouseenter:R},[W("div",{class:"terminal-header",onMousedown:Y[9]||(Y[9]=I=>Z.$emit("drag-start"))},[Y[18]||(Y[18]=W("div",{class:"header-led"},null,-1)),Y[19]||(Y[19]=W("div",{class:"header-title"},"PIPS_TERMINAL_ROOT@THE_GLADE",-1)),W("div",Vb,[W("button",{onClick:Y[6]||(Y[6]=(...I)=>_e(t)&&_e(t)(...I))},"_"),W("button",{onClick:Y[7]||(Y[7]=I=>_.value=[])},"□"),W("button",{class:"close",onClick:Y[8]||(Y[8]=(...I)=>_e(t)&&_e(t)(...I))},"×")])],32),W("div",{class:"terminal-history",ref_key:"historyRef",ref:L},[(Ae(!0),Re(at,null,_n(_.value,(I,ye)=>(Ae(),Re("div",{key:ye,class:Nt(["line",I.type])},[I.type==="user"?(Ae(),Re("span",Gb,"$")):Ze("",!0),I.type==="system"?(Ae(),Re("span",Wb,"#")):Ze("",!0),I.type==="assistant"?(Ae(),Re("span",Xb,"CLAUDE>")):Ze("",!0),I.type==="error"?(Ae(),Re("span",$b,"ERR!")):Ze("",!0),W("span",{class:"content",innerHTML:I.content},null,8,qb)],2))),128))],512),W("div",{class:"terminal-input-row",onClick:M},[Y[20]||(Y[20]=W("span",{class:"prompt-arrow"},">",-1)),Hn(W("input",{ref_key:"inputRef",ref:k,"onUpdate:modelValue":Y[10]||(Y[10]=I=>w.value=I),type:"text",spellcheck:"false",autofocus:"",onKeydown:[Is(te,["enter"]),le,Y[11]||(Y[11]=Is((...I)=>_e(t)&&_e(t)(...I),["esc"]))]},null,544),[[$s,w.value]]),Y[21]||(Y[21]=W("div",{class:"cursor-block"},null,-1))])],32)])):Ze("",!0)],64))],64)):Ze("",!0)}},jb=Da(Yb,[["__scopeId","data-v-e8b6b1fe"]]),Kb={class:"floating-container"},Zb={key:0,class:"interaction-prompt"},Jb={class:"prompt-pip-info"},Qb={class:"prompt-stats"},eE={class:"stat-bar"},tE={class:"stat-bar"},nE={key:1,class:"tutorial-overlay"},iE={key:0,class:"tut-card"},sE={key:1,class:"tut-card"},rE={key:2,class:"tut-card highlight"},oE={key:3,class:"tut-card"},aE={class:"hotbar-wrap"},lE=["onClick"],cE=["title"],uE={class:"slot-number"},fE={class:"mode-chips"},dE=["onClick"],hE={class:"status-chip"},pE={class:"status-meta"},mE={class:"behavior-list"},gE={class:"keycap behavior-key"},_E={class:"last-action"},vE={key:0,class:"last-action"},xE={class:"last-action",style:{color:"#ffccf9","font-weight":"700"}},yE={style:{"font-size":"11px","font-weight":"700",color:"#fff"}},ME={style:{"font-size":"10px",opacity:"0.8"}},SE={class:"wizard-mockup",style:{"margin-top":"12px",display:"flex","flex-direction":"column",gap:"8px"}},bE={class:"trend-header"},EE={class:"trend-track"},TE={class:"mini-map"},wE=["title","onClick"],AE={class:"panel-header",style:{"margin-bottom":"6px"}},CE={style:{display:"flex",gap:"8px","align-items":"center","margin-left":"auto","margin-right":"10px"}},RE={style:{"font-size":"11px",opacity:"0.85",display:"flex","align-items":"center",gap:"6px",cursor:"pointer"}},PE={style:{"font-size":"11px",opacity:"0.85",display:"flex","align-items":"center",gap:"6px",cursor:"pointer"}},DE={key:0,class:"roster-row"},LE=["onClick"],IE={class:"slot-name"},UE={class:"slot-theme"},NE={key:1,style:{"margin-top":"10px"}},FE={key:0,style:{opacity:"0.6","font-size":"12px"}},OE={key:1,style:{display:"flex","flex-direction":"column",gap:"6px"}},BE={style:{flex:"1","min-width":"0"}},kE={style:{"font-size":"12px","font-weight":"800",color:"#fff","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},zE={style:{"font-size":"10px",opacity:"0.75","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},HE=["onClick"],VE={key:0,style:{"font-size":"11px",opacity:"0.65"}},GE={key:5,class:"about-overlay panel game-panel"},WE={class:"about-content"},XE={key:7,class:"gift-toast"},El=260,$E={__name:"App",setup(n){const e=Oe(null),t=Oe(null),{dragStyles:i,onMouseDown:s}=sa(e,{x:0,y:0},"controls-panel-pos"),{dragStyles:r,onMouseDown:o}=sa(t,{x:0,y:0},"insights-panel-pos"),a=Oe(!1),l=Oe(!1),c=Oe(!1),u=Oe({showHud:!0,showIntel:!0,showDock:!0,showTerminal:!0,terminalDocked:!0,sfx:!1,vignettePulse:!1,opacity:.75}),f=localStorage.getItem("pips-ui-settings");if(f)try{u.value={...u.value,...JSON.parse(f)}}catch{}function d(){localStorage.setItem("pips-ui-settings",JSON.stringify(u.value))}const{currentMode:p,modeDefinitions:g,buildMode:v,playfulMode:m,selectedTool:h,farmTools:C,farmStats:w,farmSpawnNotice:_,activeGlade:k,gladeSlots:L,gladeSummaries:P,playerPosition:F,capturedFairies:E,inventory:M,selectedSlot:R,onboardingStep:$,feedPip:te,selectGladeSlot:le,setMode:pe,cycleMode:Z,toggleBuildMode:Y,selectToolByKey:I,spawnDynamicGlade:ye,terminalOpen:xe,toggleTerminal:Ce,nearbyPip:Te,hydratePip:Ye,floatingTexts:O,toast:z,fxPulse:Q,pips:ee,selectPip:be,openChat:De}=tr(),Ne=Oe(null),tt=Oe(!0),A=Oe(""),U=Oe("Default"),b=Oe("ollama"),de=Oe("claude-3-opus-20240229"),ie=El/2,ue=Jt(()=>{const N=$.value;return N===0||N===1||N===2||N===3||N===4}),he=Jt(()=>P.value.map(N=>{const T=Math.max(0,1-Math.min(1,N.nextSpawnIn/45)),me=N.growthRate*.55+N.pips*.16+N.farmBlocks*.1+T*.45,we=Math.max(.12,Math.min(1,me/3)),Fe=we>.72?"Rising":we>.45?"Steady":"Slow";return{...N,score:we,label:Fe}}));function se(N){if(N.metaKey||N.ctrlKey||N.altKey||N.target.tagName==="INPUT"||N.target.tagName==="TEXTAREA")return;if(N.code==="Backquote"){N.shiftKey?(u.value.terminalDocked=!u.value.terminalDocked,d()):Ce(),N.preventDefault();return}if(xe.value)return;if(N.code==="Tab"){N.preventDefault(),Z();return}if(N.code==="KeyB"){Y();return}if(N.code==="KeyQ"){cycleSlot(-1);return}if(N.code==="KeyR"){cycleSlot(1);return}const T=N.key;T.charCodeAt(0);const me=Number(T);if(me>=1&&me<=9){v.value&&me<=5?I(T):R.value=me-1;return}else if(T==="0"){R.value=9;return}if((T==="f"||T==="F")&&Te.value){te(Te.value.id);return}if((T==="h"||T==="H")&&Te.value){Ye(Te.value.id);return}}function V(N){cycleSlot(N.deltaY>0?1:-1)}Sa(()=>{window.addEventListener("keydown",se),window.addEventListener("wheel",V)}),Yr(()=>{window.removeEventListener("keydown",se),window.removeEventListener("wheel",V)});function y(){var N;(N=Ne.value)==null||N.focusInput()}function x(N){const T=le(N);T&&mp(T.center.x,T.center.z)}function D(N){const T=L.value.findIndex(me=>me.id===N);T!==-1&&x(T)}function G(){tt.value=!1}function ne(N){return(N+ie)/El*100}function re(N){return(N+ie)/El*100}const Se=Jt(()=>{const N=ru();return!N||!O.value.length?[]:O.value.map(T=>{const me=new X(T.x,.95,T.z);return me.project(N),me.z>1?null:{...T,left:(me.x*.5+.5)*100,top:(-me.y*.5+.5)*100}}).filter(T=>T!==null)}),ve=Jt(()=>M.value[R.value]||null),Me=Jt(()=>{const N=ve.value;return N?N.type==="weapon"?"Click to bonk (sparkly pop)":N.id==="capture_orb"?"Click to toss (capture effect)":N.id==="balloon_cannon"?"Click to pop a balloon seed":N.id==="firework_launcher"?"Click to launch fireworks":N.id==="fairy_summoner"?"Click to summon a fairy":N.type==="hat"?"Click a Pip to equip":N.type==="food"?"Click a Pip to feed":"Click to use":"Scroll / Q / R to select an item"}),Be=Jt(()=>ee.value.filter(N=>{var T;return N.gladeId===((T=k.value)==null?void 0:T.id)}));function H(N){be(N),De()}function q(){try{const N=new(window.AudioContext||window.webkitAudioContext),T=N.createOscillator(),me=N.createGain();T.type="triangle",T.frequency.value=660,me.gain.value=1e-4,T.connect(me),me.connect(N.destination),T.start(),me.gain.exponentialRampToValueAtTime(.04,N.currentTime+.01),me.gain.exponentialRampToValueAtTime(1e-4,N.currentTime+.11),T.frequency.exponentialRampToValueAtTime(880,N.currentTime+.08),T.stop(N.currentTime+.12),T.onended=()=>N.close()}catch{}}const J=Oe(0);return bn(()=>Q.value,()=>{u.value.vignettePulse&&J.value++,u.value.sfx&&q()}),(N,T)=>{var me,we,Fe,B;return Ae(),Re(at,null,[en(ZS),en(vb,{onFocusChat:y}),en(Tb,{ref_key:"chatWindow",ref:Ne},null,512),en(Cb),en(jb,{docked:u.value.terminalDocked,visible:u.value.showTerminal},null,8,["docked","visible"]),W("div",{class:Nt(["crosshair",{active:!!_e(Te)}])},null,2),W("div",Kb,[(Ae(!0),Re(at,null,_n(Se.value,oe=>(Ae(),Re("div",{key:oe.id,class:"floating-text",style:Tt({left:oe.left+"%",top:oe.top+"%",color:oe.color})},Ge(oe.text),5))),128))]),_e(Te)?(Ae(),Re("div",Zb,[W("div",Jb,[W("span",{class:"prompt-dot",style:Tt({backgroundColor:_e(Te).color})},null,4),W("strong",null,Ge(_e(Te).name),1)]),T[14]||(T[14]=Ds('<div class="prompt-keys" data-v-b31bd65e><div class="prompt-key-row" data-v-b31bd65e><span class="keycap" data-v-b31bd65e>F</span> Feed Fruit</div><div class="prompt-key-row" data-v-b31bd65e><span class="keycap" data-v-b31bd65e>H</span> Hydrate</div></div>',1)),W("div",Qb,[W("div",eE,[W("div",{class:"stat-fill hunger",style:Tt({width:_e(Te).hunger+"%"})},null,4)]),W("div",tE,[W("div",{class:"stat-fill thirst",style:Tt({width:_e(Te).thirst+"%"})},null,4)])])])):Ze("",!0),ue.value?(Ae(),Re("div",nE,[_e($)===0?(Ae(),Re("div",iE,[...T[15]||(T[15]=[W("h2",null,"Welcome to the Glade!",-1),W("p",null,[yt("A giant "),W("strong",null,"Nebula"),yt(" has appeared to guide you.")],-1),W("p",null,"Watch it shrink and get ready...",-1)])])):Ze("",!0),_e($)===2?(Ae(),Re("div",sE,[...T[16]||(T[16]=[W("p",null,[yt("Meet Nebula at the "),W("strong",null,"Infrastructure Forge"),yt("!")],-1),W("p",null,[yt("Use "),W("strong",null,"WASD"),yt(" to move and "),W("strong",null,"Shift"),yt(" to sprint.")],-1)])])):Ze("",!0),_e($)===3?(Ae(),Re("div",rE,[...T[17]||(T[17]=[W("p",null,[yt("Nebula is hungry! Select the "),W("strong",null,"Pip Treat (5)"),yt(" from your hotbar and click on Nebula to feed it.")],-1)])])):Ze("",!0),_e($)===4?(Ae(),Re("div",oE,[T[18]||(T[18]=W("p",null,"Great job! You've learned the basics.",-1)),W("button",{onClick:T[0]||(T[0]=oe=>$.value=5),class:"action-btn"},"Start Orchestration")])):Ze("",!0)])):Ze("",!0),W("div",aE,[(Ae(!0),Re(at,null,_n(_e(M),(oe,ae)=>(Ae(),Re("div",{key:ae,class:Nt(["hotbar-slot",{active:_e(R)===ae}]),onClick:ge=>R.value=ae},[oe?(Ae(),Re("span",{key:0,class:"item-icon",title:oe.label},Ge(oe.icon),9,cE)):Ze("",!0),W("span",uE,Ge(ae+1),1)],10,lE))),128))]),u.value.showHud?(Ae(),Re("div",{key:2,ref_key:"controlsPanelEl",ref:e,class:Nt(["controls-panel panel game-panel",{collapsed:l.value}]),style:Tt({..._e(i)(),opacity:u.value.opacity})},[W("div",{class:"panel-header draggable",onMousedown:T[2]||(T[2]=(...oe)=>_e(s)&&_e(s)(...oe))},[T[19]||(T[19]=W("div",{class:"controls-title",style:{"margin-bottom":"0"}},"HUD",-1)),W("button",{class:"close-btn",onClick:T[1]||(T[1]=as(oe=>l.value=!l.value,["stop"]))},Ge(l.value?"+":"−"),1)],32),W("div",fE,[(Ae(!0),Re(at,null,_n(_e(g),oe=>(Ae(),Re("button",{key:oe.id,class:Nt(["mode-chip",{active:_e(p)===oe.id}]),onClick:ae=>_e(pe)(oe.id)},Ge(oe.label),11,dE))),128))]),T[39]||(T[39]=Ds('<div class="controls-title behavior-title" data-v-b31bd65e>Controls</div><div class="wasd-grid" data-v-b31bd65e><span class="keycap key-w" data-v-b31bd65e>W</span><span class="keycap key-a" data-v-b31bd65e>A</span><span class="keycap key-s" data-v-b31bd65e>S</span><span class="keycap key-d" data-v-b31bd65e>D</span></div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Shift</span> Sprint</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Space</span> Jump</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Ctrl/C</span> Crouch</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>E</span> Release</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>1-9</span> Slots</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Q/R</span> Cycle Slot</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Wheel</span> Cycle Slot</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Tab</span> Modes</div>',10)),_e(p)==="explore"?(Ae(),Re(at,{key:0},[T[20]||(T[20]=W("div",{class:"controls-title behavior-title"},"Explore",-1)),W("div",hE,Ge((me=_e(k))==null?void 0:me.name),1),W("div",pE,Ge((we=_e(k))==null?void 0:we.theme)+" · "+Ge((Fe=_e(k))==null?void 0:Fe.project),1)],64)):_e(p)==="build"?(Ae(),Re(at,{key:1},[T[27]||(T[27]=Ds('<div class="controls-title behavior-title" data-v-b31bd65e>Build</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>B</span> Toggle build</div><div class="control-line" data-v-b31bd65e>Click in district zone to place</div><div class="controls-title behavior-title" data-v-b31bd65e>Farm Tools</div>',4)),W("div",mE,[(Ae(!0),Re(at,null,_n(_e(C),oe=>(Ae(),Re("div",{key:oe.id,class:Nt(["behavior-row",{active:_e(v)&&_e(h)===oe.id}])},[W("span",gE,Ge(oe.key),1),W("span",null,Ge(oe.label),1)],2))),128))]),W("div",_E,[T[21]||(T[21]=yt(" Tool: ",-1)),W("strong",null,Ge(_e(h)),1),T[22]||(T[22]=W("br",null,null,-1)),T[23]||(T[23]=yt(" Cap: ",-1)),W("strong",null,Ge(_e(w).capacity),1),T[24]||(T[24]=yt(" · Growth: ",-1)),W("strong",null,"x"+Ge(_e(w).growthRate.toFixed(2)),1),T[25]||(T[25]=W("br",null,null,-1)),T[26]||(T[26]=yt(" Next spawn: ",-1)),W("strong",null,Ge(Math.ceil(_e(w).nextSpawnIn))+"s",1)]),_e(_)?(Ae(),Re("div",vE,Ge(_e(_)),1)):Ze("",!0)],64)):_e(m)?(Ae(),Re(at,{key:2},[T[32]||(T[32]=Ds('<div class="controls-title behavior-title" data-v-b31bd65e>Playful</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Space</span> Rise</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Ctrl</span> Dive</div><div class="control-line" data-v-b31bd65e><span class="keycap key-wide" data-v-b31bd65e>Shift</span> Boost</div><div class="last-action" data-v-b31bd65e>Arcade flight tuning enabled.</div>',5)),W("div",xE,[yt(" ✨ Fairies Caught: "+Ge(_e(E)),1),T[28]||(T[28]=W("br",null,null,-1)),W("span",yE,"Tool: "+Ge(((B=ve.value)==null?void 0:B.label)||"Unarmed"),1),T[29]||(T[29]=W("br",null,null,-1)),W("span",ME,Ge(Me.value),1),T[30]||(T[30]=W("br",null,null,-1)),T[31]||(T[31]=W("span",{style:{"font-size":"10px",opacity:"0.8"}},"Right-Click to drop crate!",-1))])],64)):_e(p)==="wizard"?(Ae(),Re(at,{key:3},[T[37]||(T[37]=W("div",{class:"controls-title behavior-title"},"Project Wizard",-1)),T[38]||(T[38]=W("div",{class:"control-line"},"Create a new Glade dynamically",-1)),W("div",SE,[Hn(W("input",{"onUpdate:modelValue":T[3]||(T[3]=oe=>A.value=oe),type:"text",placeholder:"Project Name",class:"chat-input",style:{width:"100%","border-radius":"4px"}},null,512),[[$s,A.value]]),Hn(W("select",{"onUpdate:modelValue":T[4]||(T[4]=oe=>U.value=oe),class:"chat-input",style:{width:"100%","border-radius":"4px",padding:"4px",cursor:"pointer"}},[...T[33]||(T[33]=[Ds('<option value="Default" data-v-b31bd65e>Meadow Theme</option><option value="Cyber Land" data-v-b31bd65e>Cyber Theme</option><option value="Media Land" data-v-b31bd65e>Media Theme</option><option value="Cinema Land" data-v-b31bd65e>Cinema Theme</option><option value="Magic Land" data-v-b31bd65e>Magic Theme</option>',5)])],512),[[qu,U.value]]),T[35]||(T[35]=W("label",{style:{"font-size":"11px","margin-top":"4px",color:"#b9cbed"}},"Agent Provider:",-1)),Hn(W("select",{"onUpdate:modelValue":T[5]||(T[5]=oe=>b.value=oe),class:"chat-input",style:{width:"100%","border-radius":"4px",padding:"4px",cursor:"pointer"}},[...T[34]||(T[34]=[W("option",{value:"anthropic"},"Anthropic (Claude)",-1),W("option",{value:"openai"},"OpenAI (GPT-4)",-1),W("option",{value:"ollama"},"Ollama (Local)",-1),W("option",{value:"glade"},"Glade (Mock)",-1)])],512),[[qu,b.value]]),T[36]||(T[36]=W("label",{style:{"font-size":"11px","margin-top":"2px",color:"#b9cbed"}},"Model Name:",-1)),Hn(W("input",{"onUpdate:modelValue":T[6]||(T[6]=oe=>de.value=oe),type:"text",placeholder:"claude-3-opus-20240229",class:"chat-input",style:{width:"100%","border-radius":"4px"}},null,512),[[$s,de.value]]),W("button",{class:"chat-send",style:{width:"100%","border-radius":"4px","margin-top":"8px"},onClick:T[7]||(T[7]=oe=>_e(ye)(A.value,U.value,b.value,de.value))},"Spawn Project")])],64)):Ze("",!0)],6)):Ze("",!0),u.value.showIntel?(Ae(),Re("div",{key:3,ref_key:"insightsPanelEl",ref:t,class:Nt(["insights-panel panel game-panel",{collapsed:a.value}]),style:Tt({..._e(r)(),opacity:u.value.opacity})},[W("div",{class:"panel-header draggable",onMousedown:T[9]||(T[9]=(...oe)=>_e(o)&&_e(o)(...oe))},[T[40]||(T[40]=W("div",{class:"controls-title",style:{"margin-bottom":"0"}},"District Intel",-1)),W("button",{class:"close-btn",onClick:T[8]||(T[8]=as(oe=>a.value=!a.value,["stop"]))},Ge(a.value?"+":"−"),1)],32),(Ae(!0),Re(at,null,_n(he.value,oe=>{var ae;return Ae(),Re("div",{key:oe.id,class:Nt(["trend-row",{active:((ae=_e(k))==null?void 0:ae.id)===oe.id}])},[W("div",bE,[W("span",null,Ge(oe.name),1),W("span",null,Ge(oe.label),1)]),W("div",EE,[W("div",{class:"trend-fill",style:Tt({width:`${Math.round(oe.score*100)}%`,backgroundColor:oe.color})},null,4)])],2)}),128)),T[41]||(T[41]=W("div",{class:"controls-title",style:{"margin-top":"10px"}},"Map",-1)),W("div",TE,[(Ae(!0),Re(at,null,_n(_e(L),oe=>{var ae;return Ae(),Re("button",{key:`mini-${oe.id}`,class:Nt(["mini-dot",{active:((ae=_e(k))==null?void 0:ae.id)===oe.id}]),style:Tt({left:`${ne(oe.center.x)}%`,top:`${re(oe.center.z)}%`,backgroundColor:oe.color}),title:`${oe.name} (${oe.theme})`,onClick:ge=>D(oe.id)},null,14,wE)}),128)),W("div",{class:"mini-player",style:Tt({left:`${ne(_e(F).x)}%`,top:`${re(_e(F).z)}%`})},null,4)])],6)):Ze("",!0),u.value.showDock?(Ae(),Re("div",{key:4,class:Nt(["roster-dock panel game-panel",{collapsed:c.value}]),style:Tt({opacity:u.value.opacity})},[W("div",AE,[T[44]||(T[44]=W("div",{class:"controls-title",style:{"margin-bottom":"0"}},"District Dock",-1)),W("div",CE,[W("label",RE,[Hn(W("input",{type:"checkbox","onUpdate:modelValue":T[10]||(T[10]=oe=>u.value.sfx=oe),onChange:d},null,544),[[Xu,u.value.sfx]]),T[42]||(T[42]=yt(" SFX ",-1))]),W("label",PE,[Hn(W("input",{type:"checkbox","onUpdate:modelValue":T[11]||(T[11]=oe=>u.value.vignettePulse=oe),onChange:d},null,544),[[Xu,u.value.vignettePulse]]),T[43]||(T[43]=yt(" Pulse ",-1))])]),W("button",{class:"close-btn",onClick:T[12]||(T[12]=as(oe=>c.value=!c.value,["stop"]))},Ge(c.value?"+":"−"),1)]),c.value?Ze("",!0):(Ae(),Re("div",DE,[(Ae(!0),Re(at,null,_n(_e(L),(oe,ae)=>{var ge;return Ae(),Re("button",{key:oe.id,class:Nt(["roster-slot",{active:((ge=_e(k))==null?void 0:ge.id)===oe.id}]),onClick:Le=>x(ae)},[W("span",IE,Ge(oe.name),1),W("span",UE,Ge(oe.theme),1),T[45]||(T[45]=W("span",{class:"slot-action"},"Visit District",-1))],10,LE)}),128))])),c.value?Ze("",!0):(Ae(),Re("div",NE,[T[46]||(T[46]=W("div",{class:"controls-title",style:{"margin-bottom":"6px"}},"Agents Here",-1)),Be.value.length===0?(Ae(),Re("div",FE,"No agents in this district.")):(Ae(),Re("div",OE,[(Ae(!0),Re(at,null,_n(Be.value.slice(0,6),oe=>(Ae(),Re("div",{key:oe.id,style:{display:"flex","align-items":"center",gap:"8px",background:"rgba(0,0,0,0.18)",padding:"6px 8px","border-radius":"8px"}},[W("span",{class:"prompt-dot",style:Tt({backgroundColor:oe.color||"#e06060",width:"10px",height:"10px",borderRadius:"50%"})},null,4),W("div",BE,[W("div",kE,Ge(oe.name),1),W("div",zE,Ge(oe.provider||"glade")+" / "+Ge(oe.model||"native"),1)]),W("button",{class:"send-btn",style:{padding:"6px 10px"},onClick:ae=>H(oe)},"Talk",8,HE)]))),128)),Be.value.length>6?(Ae(),Re("div",VE," (+"+Ge(Be.value.length-6)+" more — use terminal `agents`) ",1)):Ze("",!0)]))]))],6)):Ze("",!0),_e(p)==="about"?(Ae(),Re("div",GE,[W("div",WE,[T[47]||(T[47]=W("h2",{style:{"font-size":"24px","margin-bottom":"24px",color:"#f6e9ff","text-shadow":"0 0 10px rgba(193,133,255,0.7)"}},"How Pips Connects to Agents",-1)),T[48]||(T[48]=W("p",null,[yt("Pips serves as a visual 3D interface for your underlying AI processes and project management backends. Think of each "),W("strong",null,'"Pip"'),yt(" as a dedicated socket or API connection to an LLM running either locally or in the cloud.")],-1)),T[49]||(T[49]=W("p",null,"When you interact with a Pip, Pips takes your input and sends a payload to the backend server. The backend passes the project context and your prompt to the specialized LLM agent assigned to that Pip (like an Editor, or SysAdmin) for processing.",-1)),T[50]||(T[50]=W("p",null,[yt("The response is streamed back to the frontend and displayed as chat bubbles natively in the world. By distributing these agents into distinct "),W("strong",null,'"Glades"'),yt(", Pips allows you to visually orchestrate and containerize the context of multiple agents operating simultaneously across your projects!")],-1)),W("button",{class:"council-btn",style:{"margin-top":"32px"},onClick:T[13]||(T[13]=oe=>_e(pe)("explore"))},"Return to Network")])])):Ze("",!0),tt.value?(Ae(),yh(Ub,{key:6,onDone:G})):Ze("",!0),_e(z)?(Ae(),Re("div",XE,Ge(_e(z).text),1)):Ze("",!0),u.value.vignettePulse?(Ae(),Re("div",{class:"fx-vignette",key:J.value})):Ze("",!0)],64)}}},qE=Da($E,[["__scopeId","data-v-b31bd65e"]]);jg(qE).mount("#app");
