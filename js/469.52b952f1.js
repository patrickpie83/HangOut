"use strict";(self["webpackChunkvue_hangout"]=self["webpackChunkvue_hangout"]||[]).push([[469],{7469:function(e,t,n){n.d(t,{Z:function(){return nc}});n(560);var i=n(9876);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+s.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},h=function(e){const t=[];let n=0,i=0;while(n<e.length){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],h=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(1023&h))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,h=a?e[s+2]:0,l=t>>2,c=(3&t)<<4|o>>4;let u=(15&o)<<2|h>>6,d=63&h;a||(d=64,r||(u=64)),i.push(n[l],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):h(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length,o=r?n[e.charAt(s)]:0;++s;const a=s<e.length,h=a?n[e.charAt(s)]:64;++s;const l=s<e.length,u=l?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==h||null==u)throw new c;const d=t<<2|o>>4;if(i.push(d),64!==h){const e=o<<4&240|h>>2;if(i.push(e),64!==u){const e=h<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=a(e);return l.encodeByteArray(t,!0)},d=function(e){return u(e).replace(/\./g,"")},p=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=f(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>m().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_API_URL:"https://hangoutserver.onrender.com",BASE_URL:"/HangOut/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},C=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&p(e[1]);return t&&JSON.parse(t)},w=()=>{try{return y()||v()||C()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},E=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[d(JSON.stringify(n)),d(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function N(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function R(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function P(){return!0===s.NODE_CLIENT||!0===s.NODE_ADMIN}function D(){try{return"object"===typeof indexedDB}catch(e){return!1}}function x(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(cn){t(cn)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=A,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?L(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new O(i,o,n);return a}}function L(e,t){return e.replace(F,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return JSON.parse(e)}function U(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=q(p(r[0])||""),n=q(p(r[1])||""),s=r[2],i=n["d"]||{},delete n["d"]}catch(r){}return{header:t,claims:n,data:i,signature:s}},B=function(e){const t=W(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},j=function(e){const t=W(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function K(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Y(n)&&Y(r)){if(!K(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Y(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let c=0;c<16;c++)n[c]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)n[c]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let c=16;c<80;c++){const e=n[c-3]^n[c-8]^n[c-14]^n[c-16];n[c]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],l=this.chain_[4];for(let c=0;c<80;c++){c<40?c<20?(i=h^o&(a^h),s=1518500249):(i=o^a^h,s=1859775393):c<60?(i=o&a|h&(o|a),s=2400959708):(i=o^a^h,s=3395469782);const e=(r<<5|r>>>27)+i+l+s+n[c]&4294967295;l=h,h=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;while(i<t){if(0===r)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else while(i<t)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function J(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Z=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ee(e){return e&&e._delegate?e._delegate:e}class te{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new T;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(re(e))try{this.getOrInitializeService({instanceIdentifier:ne})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ne){return this.instances.has(e)}getOptions(e=ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&r.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:se(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=ne){return this.component?this.component.multipleInstances?e:ne:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function se(e){return e===ne?void 0:e}function re(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ie(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ae=[];var he;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(he||(he={}));const le={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},ce=he.INFO,ue={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},de=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ue[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class pe{constructor(e){this.name=e,this._logLevel=ce,this._logHandler=de,this._userLogHandler=null,ae.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?le[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const _e=(e,t)=>t.some((t=>e instanceof t));let fe,ge;function me(){return fe||(fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ye(){return ge||(ge=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ve=new WeakMap,Ce=new WeakMap,we=new WeakMap,be=new WeakMap,Ie=new WeakMap;function Ee(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(Pe(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ve.set(t,e)})).catch((()=>{})),Ie.set(t,e),t}function Te(e){if(Ce.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));Ce.set(e,t)}let Se={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ce.get(e);if("objectStoreNames"===t)return e.objectStoreNames||we.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ke(e){Se=e(Se)}function Ne(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?ye().includes(e)?function(...t){return e.apply(De(this),t),Pe(ve.get(this))}:function(...t){return Pe(e.apply(De(this),t))}:function(t,...n){const i=e.call(De(this),t,...n);return we.set(i,t.sort?t.sort():[t]),Pe(i)}}function Re(e){return"function"===typeof e?Ne(e):(e instanceof IDBTransaction&&Te(e),_e(e,me())?new Proxy(e,Se):e)}function Pe(e){if(e instanceof IDBRequest)return Ee(e);if(be.has(e))return be.get(e);const t=Re(e);return t!==e&&(be.set(e,t),Ie.set(t,e)),t}const De=e=>Ie.get(e);function xe(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Pe(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Pe(o.result),e.oldVersion,e.newVersion,Pe(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ae=["get","getKey","getAll","getAllKeys","count"],Oe=["put","add","delete","clear"],Me=new Map;function Le(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Me.get(t))return Me.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Oe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Ae.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Me.set(t,r),r}ke((e=>({...e,get:(t,n,i)=>Le(t,n)||e.get(t,n,i),has:(t,n)=>!!Le(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(qe(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function qe(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Ue="@firebase/app",We="0.9.27",Be=new pe("@firebase/app"),je="@firebase/app-compat",He="@firebase/analytics-compat",$e="@firebase/analytics",Ve="@firebase/app-check-compat",ze="@firebase/app-check",Ke="@firebase/auth",Ye="@firebase/auth-compat",Ge="@firebase/database",Qe="@firebase/database-compat",Je="@firebase/functions",Xe="@firebase/functions-compat",Ze="@firebase/installations",et="@firebase/installations-compat",tt="@firebase/messaging",nt="@firebase/messaging-compat",it="@firebase/performance",st="@firebase/performance-compat",rt="@firebase/remote-config",ot="@firebase/remote-config-compat",at="@firebase/storage",ht="@firebase/storage-compat",lt="@firebase/firestore",ct="@firebase/firestore-compat",ut="firebase",dt="10.8.0",pt="[DEFAULT]",_t={[Ue]:"fire-core",[je]:"fire-core-compat",[$e]:"fire-analytics",[He]:"fire-analytics-compat",[ze]:"fire-app-check",[Ve]:"fire-app-check-compat",[Ke]:"fire-auth",[Ye]:"fire-auth-compat",[Ge]:"fire-rtdb",[Qe]:"fire-rtdb-compat",[Je]:"fire-fn",[Xe]:"fire-fn-compat",[Ze]:"fire-iid",[et]:"fire-iid-compat",[tt]:"fire-fcm",[nt]:"fire-fcm-compat",[it]:"fire-perf",[st]:"fire-perf-compat",[rt]:"fire-rc",[ot]:"fire-rc-compat",[at]:"fire-gcs",[ht]:"fire-gcs-compat",[lt]:"fire-fst",[ct]:"fire-fst-compat","fire-js":"fire-js",[ut]:"fire-js-all"},ft=new Map,gt=new Map;function mt(e,t){try{e.container.addComponent(t)}catch(n){Be.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yt(e){const t=e.name;if(gt.has(t))return Be.debug(`There were multiple attempts to register component ${t}.`),!1;gt.set(t,e);for(const n of ft.values())mt(n,e);return!0}function vt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new M("app","Firebase",Ct);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new te("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=dt;function Et(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:pt,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=E()),!n)throw wt.create("no-options");const r=ft.get(s);if(r){if(K(n,r.options)&&K(i,r.config))return r;throw wt.create("duplicate-app",{appName:s})}const o=new oe(s);for(const h of gt.values())o.addComponent(h);const a=new bt(n,i,o);return ft.set(s,a),a}function Tt(e=pt){const t=ft.get(e);if(!t&&e===pt&&E())return Et();if(!t)throw wt.create("no-app",{appName:e});return t}function St(e,t,n){var i;let s=null!==(i=_t[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Be.warn(e.join(" "))}yt(new te(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kt="firebase-heartbeat-database",Nt=1,Rt="firebase-heartbeat-store";let Pt=null;function Dt(){return Pt||(Pt=xe(kt,Nt,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Rt)}catch(n){console.warn(n)}}}}).catch((e=>{throw wt.create("idb-open",{originalErrorMessage:e.message})}))),Pt}async function xt(e){try{const t=await Dt(),n=t.transaction(Rt),i=await n.objectStore(Rt).get(Ot(e));return await n.done,i}catch(t){if(t instanceof O)Be.warn(t.message);else{const e=wt.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});Be.warn(e.message)}}}async function At(e,t){try{const n=await Dt(),i=n.transaction(Rt,"readwrite"),s=i.objectStore(Rt);await s.put(t,Ot(e)),await i.done}catch(n){if(n instanceof O)Be.warn(n.message);else{const e=wt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});Be.warn(e.message)}}}function Ot(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=1024,Lt=2592e6;class Ft{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),s=qt();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==s&&!this._heartbeatsCache.heartbeats.some((e=>e.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Lt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=qt(),{heartbeatsToSend:n,unsentEntries:i}=Ut(this._heartbeatsCache.heartbeats),s=d(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qt(){const e=new Date;return e.toISOString().substring(0,10)}function Ut(e,t=Mt){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Bt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Wt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!D()&&x().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await xt(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Bt(e){return d(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){yt(new te("platform-logger",(e=>new Fe(e)),"PRIVATE")),yt(new te("heartbeat",(e=>new Ft(e)),"PRIVATE")),St(Ue,We,e),St(Ue,We,"esm2017"),St("fire-js","")}jt("");var Ht="firebase",$t="10.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
St(Ht,$t,"app");const Vt="@firebase/database",zt="1.0.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Kt="";function Yt(e){Kt=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),U(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:q(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return H(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Gt(t)}}catch(t){}return new Qt},Xt=Jt("localStorage"),Zt=Jt("sessionStorage"),en=new pe("@firebase/database"),tn=function(){let e=1;return function(){return e++}}(),nn=function(e){const t=X(e),n=new Q;n.update(t);const i=n.digest();return l.encodeByteArray(i)},sn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=sn.apply(null,i):t+="object"===typeof i?U(i):i,t+=" "}return t};let rn=null,on=!0;const an=function(e,t){r(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(en.logLevel=he.VERBOSE,rn=en.log.bind(en),t&&Zt.set("logging_enabled",!0)):"function"===typeof e?rn=e:(rn=null,Zt.remove("logging_enabled"))},hn=function(...e){if(!0===on&&(on=!1,null===rn&&!0===Zt.get("logging_enabled")&&an(!0)),rn){const t=sn.apply(null,e);rn(t)}},ln=function(e){return function(...t){hn(e,...t)}},cn=function(...e){const t="FIREBASE INTERNAL ERROR: "+sn(...e);en.error(t)},un=function(...e){const t=`FIREBASE FATAL ERROR: ${sn(...e)}`;throw en.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+sn(...e);en.warn(t)},pn=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_n=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},fn=function(e){if(P()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},gn="[MIN_NAME]",mn="[MAX_NAME]",yn=function(e,t){if(e===t)return 0;if(e===gn||t===mn)return-1;if(t===gn||e===mn)return 1;{const n=Dn(e),i=Dn(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},vn=function(e,t){return e===t?0:e<t?-1:1},Cn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+U(t))},wn=function(e){if("object"!==typeof e||null===e)return U(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=U(t[i]),n+=":",n+=wn(e[t[i]]);return n+="}",n},bn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function In(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const En=function(e){r(!_n(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,o,a,h,l;0===e?(o=0,a=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(h=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=h+i,a=Math.round(e*Math.pow(2,n-h)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(u.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},Tn=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},Sn=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function kn(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const Nn=new RegExp("^-?(0*)\\d{1,10}$"),Rn=-2147483648,Pn=2147483647,Dn=function(e){if(Nn.test(e)){const t=Number(e);if(t>=Rn&&t<=Pn)return t}return null},xn=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw dn("Exception was thrown by user callback.",e),t}),Math.floor(0))}},An=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},On=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(hn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(e)}}class Fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn="5",Un="v",Wn="s",Bn="r",jn="f",Hn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$n="ls",Vn="p",zn="ac",Kn="websocket",Yn="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xt.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Qn(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Jn(e,t,n){let i;if(r("string"===typeof t,"typeof type must == string"),r("object"===typeof n,"typeof params must == object"),t===Kn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Yn)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}Qn(e)&&(n["ns"]=e.namespace);const s=[];return In(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.counters_={}}incrementCounter(e,t=1){H(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={},ei={};function ti(e){const t=e.toString();return Zn[t]||(Zn[t]=new Xn),Zn[t]}function ni(e,t){const n=e.toString();return ei[n]||(ei[n]=t()),ei[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&xn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="start",ri="close",oi="pLPCommand",ai="pRTLPCB",hi="id",li="pw",ci="ser",ui="cb",di="seg",pi="ts",_i="d",fi="dframe",gi=1870,mi=30,yi=gi-mi,vi=25e3,Ci=3e4;class wi{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ln(e),this.stats_=ti(t),this.urlFn=e=>(this.appCheckToken&&(e[zn]=this.appCheckToken),Jn(t,Yn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ii(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Ci)),fn((()=>{if(this.isClosed_)return;this.scriptTagHolder=new bi(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===si)this.id=n,this.password=i;else{if(t!==ri)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[si]="t",e[ci]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ui]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Un]=qn,this.transportSessionId&&(e[Wn]=this.transportSessionId),this.lastSessionId&&(e[$n]=this.lastSessionId),this.applicationId&&(e[Vn]=this.applicationId),this.appCheckToken&&(e[zn]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&Hn.test(location.hostname)&&(e[Bn]=jn);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wi.forceAllow_=!0}static forceDisallow(){wi.forceDisallow_=!0}static isAvailable(){return!P()&&(!!wi.forceAllow_||!wi.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!Tn()&&!Sn())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=u(t),i=bn(n,yi);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(P())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[fi]="t",n[hi]=e,n[li]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=U(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class bi{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,P())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=tn(),window[oi+this.uniqueCallbackIdentifier]=e,window[ai+this.uniqueCallbackIdentifier]=t,this.myIFrame=bi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){hn("frame writing exception"),s.stack&&hn(s.stack),hn(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||hn("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hi]=this.myID,e[li]=this.myPW,e[ci]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+mi+n.length<=gi))break;{const e=this.pendingSegs.shift();n=n+"&"+di+i+"="+e.seg+"&"+pi+i+"="+e.ts+"&"+_i+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(vi)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){P()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{hn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=16384,Ei=45e3;let Ti=null;"undefined"!==typeof MozWebSocket?Ti=MozWebSocket:"undefined"!==typeof WebSocket&&(Ti=WebSocket);class Si{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ln(this.connId),this.stats_=ti(t),this.connURL=Si.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r[Un]=qn,!P()&&"undefined"!==typeof location&&location.hostname&&Hn.test(location.hostname)&&(r[Bn]=jn),t&&(r[Wn]=t),n&&(r[$n]=n),i&&(r[zn]=i),s&&(r[Vn]=s),Jn(e,Kn,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xt.set("previous_websocket_failure",!0);try{let e;if(P()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${qn}/${Kt}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_API_URL:"https://hangoutserver.onrender.com",BASE_URL:"/HangOut/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Ti(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Si.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ti&&!Si.forceDisallow_}static previouslyFailed(){return Xt.isInMemoryStorage||!0===Xt.get("previous_websocket_failure")}markConnectionHealthy(){Xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=q(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(r(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=bn(t,Ii);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ei))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Si.responsesRequiredToBeHealthy=2,Si.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wi,Si]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Si&&Si["isAvailable"]();let n=t&&!Si.previouslyFailed();if(e.webSocketOnly&&(t||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Si];else{const e=this.transports_=[];for(const t of ki.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ki.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ni=6e4,Ri=5e3,Pi=10240,Di=102400,xi="t",Ai="d",Oi="s",Mi="r",Li="e",Fi="o",qi="a",Ui="n",Wi="p",Bi="h";class ji{constructor(e,t,n,i,s,r,o,a,h,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ln("c:"+this.id+":"),this.transportManager_=new ki(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=On((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Di?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pi?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xi in e){const t=e[xi];t===qi?this.upgradeIfSecondaryHealthy_():t===Mi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Fi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Cn("t",e),n=Cn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ui,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Cn("t",e),n=Cn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Cn(xi,e);if(Ai in e){const n=e[Ai];if(t===Bi){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Ui){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Oi?this.onConnectionShutdown_(n):t===Mi?this.onReset_(n):t===Li?cn("Server Error: "+n):t===Fi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qn!==n&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),On((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ni))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):On((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ri))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.allowedEvents_=e,this.listeners_={},r(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){r(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends $i{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||N()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Vi}getInitialEvent(e){return r("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=32,Ki=768;class Yi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Gi(){return new Yi("")}function Qi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ji(e){return e.pieces_.length-e.pieceNum_}function Xi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Yi(e.pieces_,t)}function Zi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function es(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function ts(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ns(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Yi(t,0)}function is(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Yi)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Yi(n,0)}function ss(e){return e.pieceNum_>=e.pieces_.length}function rs(e,t){const n=Qi(e),i=Qi(t);if(null===n)return t;if(n===i)return rs(Xi(e),Xi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function os(e,t){const n=ts(e,0),i=ts(t,0);for(let s=0;s<n.length&&s<i.length;s++){const e=yn(n[s],i[s]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function as(e,t){if(Ji(e)!==Ji(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function hs(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Ji(e)>Ji(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ls{constructor(e,t){this.errorPrefix_=t,this.parts_=ts(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Z(this.parts_[n]);ds(this)}}function cs(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Z(t),ds(e)}function us(e){const t=e.parts_.pop();e.byteLength_-=Z(t),e.parts_.length>0&&(e.byteLength_-=1)}function ds(e){if(e.byteLength_>Ki)throw new Error(e.errorPrefix_+"has a key path longer than "+Ki+" bytes ("+e.byteLength_+").");if(e.parts_.length>zi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zi+") or object contains a cycle "+ps(e))}function ps(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends $i{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new _s}getInitialEvent(e){return r("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=1e3,gs=3e5,ms=3e4,ys=1.3,vs=3e4,Cs="server_kill",ws=3;class bs extends Hi{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=bs.nextPersistentConnectionId_++,this.log_=ln("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=gs,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!P())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_s.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Vi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(U(s)),r(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new T,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),r(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];bs.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&H(e,"w")){const n=$(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||j(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ms)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=B(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+U(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):cn("Unrecognized action received from server: "+U(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){r(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>vs&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ys)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bs.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const h=function(){a?a.close():(o=!0,n())},l=function(e){r(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:h,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?hn("getToken() completed but was canceled"):(hn("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=h&&h.token,a=new ji(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{dn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Cs)}),s))}catch(cn){this.log_("Failed to get token: "+cn),o||(this.repoInfo_.nodeAdmin&&dn(cn),h())}}}interrupt(e){hn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],V(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>wn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Yi(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){hn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ws&&(this.reconnectDelay_=ms,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){hn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ws&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";P()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Kt.replace(/\./g,"-")]=1,N()?e["framework.cordova"]=1:R()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vi.getInstance().currentlyOnline();return V(this.interruptReasons_)&&e}}bs.nextPersistentConnectionId_=0,bs.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Is(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Is(gn,e),i=new Is(gn,t);return 0!==this.compare(n,i)}minPost(){return Is.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;class Ss extends Es{static get __EMPTY_NODE(){return Ts}static set __EMPTY_NODE(e){Ts=e}compare(e,t){return yn(e.name,t.name)}isDefinedOn(e){throw o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Is.MIN}maxPost(){return new Is(mn,Ts)}makePost(e,t){return r("string"===typeof e,"KeyIndex indexValue must always be a string."),new Is(e,Ts)}toString(){return".key"}}const ks=new Ss;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Rs{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Rs.RED,this.left=null!=i?i:Ds.EMPTY_NODE,this.right=null!=s?s:Ds.EMPTY_NODE}copy(e,t,n,i,s){return new Rs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ds.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ds.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Rs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Rs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Rs.RED=!0,Rs.BLACK=!1;class Ps{copy(e,t,n,i,s){return this}insert(e,t,n){return new Rs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ds{constructor(e,t=Ds.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ds(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Rs.BLACK,null,null))}remove(e){return new Ds(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rs.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ns(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ns(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ns(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xs(e,t){return yn(e.name,t.name)}function As(e,t){return yn(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;function Ms(e){Os=e}Ds.EMPTY_NODE=new Ps;const Ls=function(e){return"number"===typeof e?"number:"+En(e):"string:"+e},Fs=function(e){if(e.isLeafNode()){const t=e.val();r("string"===typeof t||"number"===typeof t||"object"===typeof t&&H(t,".sv"),"Priority must be a string or number.")}else r(e===Os||e.isEmpty(),"priority of unexpected type.");r(e===Os||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qs,Us,Ws;class Bs{constructor(e,t=Bs.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,r(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Fs(this.priorityNode_)}static set __childrenNodeConstructor(e){qs=e}static get __childrenNodeConstructor(){return qs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Bs(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Bs.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ss(e)?this:".priority"===Qi(e)?this.priorityNode_:Bs.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Bs.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Qi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(r(".priority"!==n||1===Ji(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Bs.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ls(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?En(this.value_):this.value_,this.lazyHash_=nn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Bs.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Bs.__childrenNodeConstructor?-1:(r(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Bs.VALUE_TYPE_ORDER.indexOf(t),s=Bs.VALUE_TYPE_ORDER.indexOf(n);return r(i>=0,"Unknown leaf type: "+t),r(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function js(e){Us=e}function Hs(e){Ws=e}Bs.VALUE_TYPE_ORDER=["object","boolean","number","string"];class $s extends Es{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?yn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Is.MIN}maxPost(){return new Is(mn,new Bs("[PRIORITY-POST]",Ws))}makePost(e,t){const n=Us(e);return new Is(t,new Bs("[PRIORITY-POST]",n))}toString(){return".priority"}}const Vs=new $s,zs=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){const t=e=>parseInt(Math.log(e)/zs,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ys=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Rs(a,o.node,Rs.BLACK,null,null);{const h=parseInt(r/2,10)+t,l=s(t,h),c=s(h+1,i);return o=e[h],a=n?n(o):o,new Rs(a,o.node,Rs.BLACK,l,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),c=e[r],u=n?n(c):c;h(new Rs(u,c.node,i,null,l))},h=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Rs.BLACK):(a(i,Rs.BLACK),a(i,Rs.RED))}return r},o=new Ks(e.length),a=r(o);return new Ds(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;const Qs={};class Js{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return r(Qs&&Vs,"ChildrenNode.ts has not been loaded"),Gs=Gs||new Js({".priority":Qs},{".priority":Vs}),Gs}get(e){const t=$(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ds?t:null}hasIndex(e){return H(this.indexSet_,e.toString())}addIndex(e,t){r(e!==ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Is.Wrap);let o,a=s.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?Ys(n,e.getCompare()):Qs;const h=e.toString(),l=Object.assign({},this.indexSet_);l[h]=e;const c=Object.assign({},this.indexes_);return c[h]=o,new Js(c,l)}addToIndexes(e,t){const n=z(this.indexes_,((n,i)=>{const s=$(this.indexSet_,i);if(r(s,"Missing index implementation for "+i),n===Qs){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Is.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Ys(n,s.getCompare())}return Qs}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Is(e.name,i))),s.insert(e,e.node)}}));return new Js(n,this.indexSet_)}removeFromIndexes(e,t){const n=z(this.indexes_,(n=>{if(n===Qs)return n;{const i=t.get(e.name);return i?n.remove(new Is(e.name,i)):n}}));return new Js(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class Zs{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Fs(this.priorityNode_),this.children_.isEmpty()&&r(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xs||(Xs=new Zs(new Ds(As),null,Js.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new Zs(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Xs:t}}getChild(e){const t=Qi(e);return null===t?this:this.getImmediateChild(t).getChild(Xi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(r(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Is(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Xs:this.priorityNode_;return new Zs(i,r,s)}}updateChild(e,t){const n=Qi(e);if(null===n)return t;{r(".priority"!==Qi(e)||1===Ji(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Xi(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Vs,((r,o)=>{t[r]=o.val(e),n++,s&&Zs.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ls(this.getPriority().val())+":"),this.forEachChild(Vs,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":nn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Is(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Is(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Is(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Is.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Is.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tr?-1:0}withIndex(e){if(e===ks||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Zs(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Vs),n=t.getIterator(Vs);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===ks?null:this.indexMap_.get(e.toString())}}Zs.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class er extends Zs{constructor(){super(new Ds(As),Zs.EMPTY_NODE,Js.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Zs.EMPTY_NODE}isEmpty(){return!1}}const tr=new er;Object.defineProperties(Is,{MIN:{value:new Is(gn,Zs.EMPTY_NODE)},MAX:{value:new Is(mn,tr)}}),Ss.__EMPTY_NODE=Zs.EMPTY_NODE,Bs.__childrenNodeConstructor=Zs,Ms(tr),Hs(tr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nr=!0;function ir(e,t=null){if(null===e)return Zs.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),r(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new Bs(n,ir(t))}if(e instanceof Array||!nr){let n=Zs.EMPTY_NODE;return In(e,((t,i)=>{if(H(e,t)&&"."!==t.substring(0,1)){const e=ir(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ir(t))}{const n=[];let i=!1;const s=e;if(In(s,((e,t)=>{if("."!==e.substring(0,1)){const s=ir(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Is(e,s)))}})),0===n.length)return Zs.EMPTY_NODE;const r=Ys(n,xs,(e=>e.name),As);if(i){const e=Ys(n,Vs.getCompare());return new Zs(r,ir(t),new Js({".priority":e},{".priority":Vs}))}return new Zs(r,ir(t),Js.Default)}}js(ir);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr extends Es{constructor(e){super(),this.indexPath_=e,r(!ss(e)&&".priority"!==Qi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?yn(e.name,t.name):s}makePost(e,t){const n=ir(e),i=Zs.EMPTY_NODE.updateChild(this.indexPath_,n);return new Is(t,i)}maxPost(){const e=Zs.EMPTY_NODE.updateChild(this.indexPath_,tr);return new Is(mn,e)}toString(){return ts(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Es{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?yn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Is.MIN}maxPost(){return Is.MAX}makePost(e,t){const n=ir(e);return new Is(t,n)}toString(){return".value"}}const or=new rr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e){return{type:"value",snapshotNode:e}}function hr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function lr(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function cr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function ur(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.index_=e}updateChild(e,t,n,i,s,o){r(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(lr(t,a)):r(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(hr(t,n)):o.trackChildChange(cr(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Vs,((e,i)=>{t.hasChild(e)||n.trackChildChange(lr(e,i))})),t.isLeafNode()||t.forEachChild(Vs,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(cr(t,i,s))}else n.trackChildChange(hr(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Zs.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.indexedFilter_=new dr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pr.getStartPost_(e),this.endPost_=pr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new Is(t,n))||(n=Zs.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Zs.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Zs.EMPTY_NODE);const s=this;return t.forEachChild(Vs,((e,t)=>{s.matches(new Is(e,t))||(i=i.updateImmediateChild(e,Zs.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new pr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Is(t,n))||(n=Zs.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Zs.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Zs.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Zs.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),s=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);s?n++:i=i.updateImmediateChild(t.name,Zs.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;r(a.numChildren()===this.limit_,"");const h=new Is(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(h);if(a.hasChild(t)){const e=a.getImmediateChild(t);let r=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=r&&(r.name===t||a.hasChild(r.name)))r=i.getChildAfterChild(this.index_,r,this.reverse_);const u=null==r?1:o(r,h),d=c&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(cr(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(lr(t,e));const n=a.updateImmediateChild(t,Zs.EMPTY_NODE),i=null!=r&&this.rangedFilter_.matches(r);return i?(null!=s&&s.trackChildChange(hr(r.name,r.node)),n.updateImmediateChild(r.name,r.node)):n}}return n.isEmpty()?e:c&&o(l,h)>=0?(null!=s&&(s.trackChildChange(lr(l.name,l.node)),s.trackChildChange(hr(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,Zs.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Vs}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return r(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return r(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gn}hasEnd(){return this.endSet_}getIndexEndValue(){return r(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return r(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return r(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Vs}copy(){const e=new fr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gr(e){return e.loadsAllData()?new dr(e.getIndex()):e.hasLimit()?new _r(e):new pr(e)}function mr(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Vs?n="$priority":e.index_===or?n="$value":e.index_===ks?n="$key":(r(e.index_ instanceof sr,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=U(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=U(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+U(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=U(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+U(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function yr(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==Vs&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Hi{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ln("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(r(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=vr.getListenId_(e,n),o={};this.listens_[r]=o;const a=mr(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),$(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=vr.getListenId_(e,t);delete this.listens_[n]}get(e){const t=mr(e._queryParams),n=e._path.toString(),i=new T;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+G(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=q(o.responseText)}catch(e){dn("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&dn("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.rootNode_=Zs.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(){return{value:null,children:new Map}}function br(e,t,n){if(ss(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Qi(t);e.children.has(i)||e.children.set(i,wr());const s=e.children.get(i);t=Xi(t),br(s,t,n)}}function Ir(e,t,n){null!==e.value?n(t,e.value):Er(e,((e,i)=>{const s=new Yi(t.toString()+"/"+e);Ir(i,s,n)}))}function Er(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&In(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=1e4,kr=3e4,Nr=3e5;class Rr{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Tr(e);const n=Sr+(kr-Sr)*Math.random();On(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;In(e,((e,i)=>{i>0&&H(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),On(this.reportStats_.bind(this),Math.floor(2*Math.random()*Nr))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr;function Dr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ar(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Pr||(Pr={}));class Or{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Pr.ACK_USER_WRITE,this.source=Dr()}operationForChild(e){if(ss(this.path)){if(null!=this.affectedTree.value)return r(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Yi(e));return new Or(Gi(),t,this.revert)}}return r(Qi(this.path)===e,"operationForChild called for unrelated child."),new Or(Xi(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.source=e,this.path=t,this.type=Pr.LISTEN_COMPLETE}operationForChild(e){return ss(this.path)?new Mr(this.source,Gi()):new Mr(this.source,Xi(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Pr.OVERWRITE}operationForChild(e){return ss(this.path)?new Lr(this.source,Gi(),this.snap.getImmediateChild(e)):new Lr(this.source,Xi(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Pr.MERGE}operationForChild(e){if(ss(this.path)){const t=this.children.subtree(new Yi(e));return t.isEmpty()?null:t.value?new Lr(this.source,Gi(),t.value):new Fr(this.source,Gi(),t)}return r(Qi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fr(this.source,Xi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ss(e))return this.isFullyInitialized()&&!this.filtered_;const t=Qi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wr(e,t,n,i){const s=[],r=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(ur(t.childName,t.snapshotNode))})),Br(e,s,"child_removed",t,i,n),Br(e,s,"child_added",t,i,n),Br(e,s,"child_moved",r,i,n),Br(e,s,"child_changed",t,i,n),Br(e,s,"value",t,i,n),s}function Br(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>Hr(e,t,n))),o.forEach((n=>{const i=jr(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function jr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Hr(e,t,n){if(null==t.childName||null==n.childName)throw o("Should only compare child_ events.");const i=new Is(t.childName,t.snapshotNode),s=new Is(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e,t){return{eventCache:e,serverCache:t}}function Vr(e,t,n,i){return $r(new qr(t,n,i),e.serverCache)}function zr(e,t,n,i){return $r(e.eventCache,new qr(t,n,i))}function Kr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Yr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;const Qr=()=>(Gr||(Gr=new Ds(vn)),Gr);class Jr{constructor(e,t=Qr()){this.value=e,this.children=t}static fromObject(e){let t=new Jr(null);return In(e,((e,n)=>{t=t.set(new Yi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Gi(),value:this.value};if(ss(e))return null;{const n=Qi(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Xi(e),t);if(null!=s){const e=is(new Yi(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ss(e))return this;{const t=Qi(e),n=this.children.get(t);return null!==n?n.subtree(Xi(e)):new Jr(null)}}set(e,t){if(ss(e))return new Jr(t,this.children);{const n=Qi(e),i=this.children.get(n)||new Jr(null),s=i.set(Xi(e),t),r=this.children.insert(n,s);return new Jr(this.value,r)}}remove(e){if(ss(e))return this.children.isEmpty()?new Jr(null):new Jr(null,this.children);{const t=Qi(e),n=this.children.get(t);if(n){const i=n.remove(Xi(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Jr(null):new Jr(this.value,s)}return this}}get(e){if(ss(e))return this.value;{const t=Qi(e),n=this.children.get(t);return n?n.get(Xi(e)):null}}setTree(e,t){if(ss(e))return t;{const n=Qi(e),i=this.children.get(n)||new Jr(null),s=i.setTree(Xi(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new Jr(this.value,r)}}fold(e){return this.fold_(Gi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(is(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Gi(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ss(e))return null;{const i=Qi(e),s=this.children.get(i);return s?s.findOnPath_(Xi(e),is(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Gi(),t)}foreachOnPath_(e,t,n){if(ss(e))return this;{this.value&&n(t,this.value);const i=Qi(e),s=this.children.get(i);return s?s.foreachOnPath_(Xi(e),is(t,i),n):new Jr(null)}}foreach(e){this.foreach_(Gi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(is(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.writeTree_=e}static empty(){return new Xr(new Jr(null))}}function Zr(e,t,n){if(ss(t))return new Xr(new Jr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=rs(s,t);return r=r.updateChild(o,n),new Xr(e.writeTree_.set(s,r))}{const i=new Jr(n),s=e.writeTree_.setTree(t,i);return new Xr(s)}}}function eo(e,t,n){let i=e;return In(n,((e,n)=>{i=Zr(i,is(t,e),n)})),i}function to(e,t){if(ss(t))return Xr.empty();{const n=e.writeTree_.setTree(t,new Jr(null));return new Xr(n)}}function no(e,t){return null!=io(e,t)}function io(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(rs(n.path,t)):null}function so(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Vs,((e,n)=>{t.push(new Is(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Is(e,n.value))})),t}function ro(e,t){if(ss(t))return e;{const n=io(e,t);return new Xr(null!=n?new Jr(n):e.writeTree_.subtree(t))}}function oo(e){return e.writeTree_.isEmpty()}function ao(e,t){return ho(Gi(),e.writeTree_,t)}function ho(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(r(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=ho(is(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(is(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(e,t){return Ao(t,e)}function co(e,t,n,i,s){r(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Zr(e.visibleWrites,t,n)),e.lastWriteId=i}function uo(e,t,n,i){r(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=eo(e.visibleWrites,t,n),e.lastWriteId=i}function po(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function _o(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));r(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;while(s&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&fo(t,i.path)?s=!1:hs(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return go(e),!0;if(i.snap)e.visibleWrites=to(e.visibleWrites,i.path);else{const t=i.children;In(t,(t=>{e.visibleWrites=to(e.visibleWrites,is(i.path,t))}))}return!0}return!1}function fo(e,t){if(e.snap)return hs(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&hs(is(e.path,n),t))return!0;return!1}function go(e){e.visibleWrites=yo(e.allWrites,mo,Gi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function mo(e){return e.visible}function yo(e,t,n){let i=Xr.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)hs(n,e)?(t=rs(n,e),i=Zr(i,t,r.snap)):hs(e,n)&&(t=rs(e,n),i=Zr(i,Gi(),r.snap.getChild(t)));else{if(!r.children)throw o("WriteRecord should have .snap or .children");if(hs(n,e))t=rs(n,e),i=eo(i,t,r.children);else if(hs(e,n))if(t=rs(e,n),ss(t))i=eo(i,Gi(),r.children);else{const e=$(r.children,Qi(t));if(e){const n=e.getChild(Xi(t));i=Zr(i,Gi(),n)}}}}}return i}function vo(e,t,n,i,s){if(i||s){const r=ro(e.visibleWrites,t);if(!s&&oo(r))return n;if(s||null!=n||no(r,Gi())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(hs(e.path,t)||hs(t,e.path))},o=yo(e.allWrites,r,t),a=n||Zs.EMPTY_NODE;return ao(o,a)}return null}{const i=io(e.visibleWrites,t);if(null!=i)return i;{const i=ro(e.visibleWrites,t);if(oo(i))return n;if(null!=n||no(i,Gi())){const e=n||Zs.EMPTY_NODE;return ao(i,e)}return null}}}function Co(e,t,n){let i=Zs.EMPTY_NODE;const s=io(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Vs,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=ro(e.visibleWrites,t);return n.forEachChild(Vs,((e,t)=>{const n=ao(ro(s,new Yi(e)),t);i=i.updateImmediateChild(e,n)})),so(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=ro(e.visibleWrites,t);return so(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function wo(e,t,n,i,s){r(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=is(t,n);if(no(e.visibleWrites,o))return null;{const t=ro(e.visibleWrites,o);return oo(t)?s.getChild(n):ao(t,s.getChild(n))}}function bo(e,t,n,i){const s=is(t,n),r=io(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=ro(e.visibleWrites,s);return ao(t,i.getNode().getImmediateChild(n))}return null}function Io(e,t){return io(e.visibleWrites,t)}function Eo(e,t,n,i,s,r,o){let a;const h=ro(e.visibleWrites,t),l=io(h,Gi());if(null!=l)a=l;else{if(null==n)return[];a=ao(h,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let h=n.getNext();while(h&&e.length<s)0!==t(h,i)&&e.push(h),h=n.getNext();return e}}function To(){return{visibleWrites:Xr.empty(),allWrites:[],lastWriteId:-1}}function So(e,t,n,i){return vo(e.writeTree,e.treePath,t,n,i)}function ko(e,t){return Co(e.writeTree,e.treePath,t)}function No(e,t,n,i){return wo(e.writeTree,e.treePath,t,n,i)}function Ro(e,t){return Io(e.writeTree,is(e.treePath,t))}function Po(e,t,n,i,s,r){return Eo(e.writeTree,e.treePath,t,n,i,s,r)}function Do(e,t,n){return bo(e.writeTree,e.treePath,t,n)}function xo(e,t){return Ao(is(e.treePath,t),e.writeTree)}function Ao(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;r("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),r(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,cr(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,lr(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,hr(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw o("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,cr(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Lo=new Mo;class Fo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new qr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Do(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Yr(this.viewCache_),s=Po(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(e){return{filter:e}}function Uo(e,t){r(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),r(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Wo(e,t,n,i,s){const a=new Oo;let h,l;if(n.type===Pr.OVERWRITE){const o=n;o.source.fromUser?h=$o(e,t,o.path,o.snap,i,s,a):(r(o.source.fromServer,"Unknown source."),l=o.source.tagged||t.serverCache.isFiltered()&&!ss(o.path),h=Ho(e,t,o.path,o.snap,i,s,l,a))}else if(n.type===Pr.MERGE){const o=n;o.source.fromUser?h=zo(e,t,o.path,o.children,i,s,a):(r(o.source.fromServer,"Unknown source."),l=o.source.tagged||t.serverCache.isFiltered(),h=Yo(e,t,o.path,o.children,i,s,l,a))}else if(n.type===Pr.ACK_USER_WRITE){const r=n;h=r.revert?Jo(e,t,r.path,i,s,a):Go(e,t,r.path,r.affectedTree,i,s,a)}else{if(n.type!==Pr.LISTEN_COMPLETE)throw o("Unknown operation type: "+n.type);h=Qo(e,t,n.path,i,a)}const c=a.getChanges();return Bo(t,h,c),{viewCache:h,changes:c}}function Bo(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Kr(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ar(Kr(t)))}}function jo(e,t,n,i,s,o){const a=t.eventCache;if(null!=Ro(i,n))return t;{let h,l;if(ss(n))if(r(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Yr(t),s=n instanceof Zs?n:Zs.EMPTY_NODE,r=ko(i,s);h=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=So(i,Yr(t));h=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=Qi(n);if(".priority"===c){r(1===Ji(n),"Can't have a priority with additional path components");const s=a.getNode();l=t.serverCache.getNode();const o=No(i,n,s,l);h=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=Xi(n);let u;if(a.isCompleteForChild(c)){l=t.serverCache.getNode();const e=No(i,n,a.getNode(),l);u=null!=e?a.getNode().getImmediateChild(c).updateChild(r,e):a.getNode().getImmediateChild(c)}else u=Do(i,c,t.serverCache);h=null!=u?e.filter.updateChild(a.getNode(),c,u,r,s,o):a.getNode()}}return Vr(t,h,a.isFullyInitialized()||ss(n),e.filter.filtersNodes())}}function Ho(e,t,n,i,s,r,o,a){const h=t.serverCache;let l;const c=o?e.filter:e.filter.getIndexedFilter();if(ss(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){const e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{const e=Qi(n);if(!h.isCompleteForPath(n)&&Ji(n)>1)return t;const s=Xi(n),r=h.getNode().getImmediateChild(e),o=r.updateChild(s,i);l=".priority"===e?c.updatePriority(h.getNode(),o):c.updateChild(h.getNode(),e,o,s,Lo,null)}const u=zr(t,l,h.isFullyInitialized()||ss(n),c.filtersNodes()),d=new Fo(s,u,r);return jo(e,u,n,s,d,a)}function $o(e,t,n,i,s,r,o){const a=t.eventCache;let h,l;const c=new Fo(s,t,r);if(ss(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),h=Vr(t,l,!0,e.filter.filtersNodes());else{const s=Qi(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),h=Vr(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=Xi(n),l=a.getNode().getImmediateChild(s);let u;if(ss(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===Zi(r)&&e.getChild(ns(r)).isEmpty()?e:e.updateChild(r,i):Zs.EMPTY_NODE}if(l.equals(u))h=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,c,o);h=Vr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function Vo(e,t){return e.eventCache.isCompleteForChild(t)}function zo(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,h)=>{const l=is(n,i);Vo(t,Qi(l))&&(a=$o(e,a,l,h,s,r,o))})),i.foreach(((i,h)=>{const l=is(n,i);Vo(t,Qi(l))||(a=$o(e,a,l,h,s,r,o))})),a}function Ko(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Yo(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h,l=t;h=ss(n)?i:new Jr(null).setTree(n,i);const c=t.serverCache.getNode();return h.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const h=t.serverCache.getNode().getImmediateChild(n),c=Ko(e,h,i);l=Ho(e,l,new Yi(n),c,s,r,o,a)}})),h.children.inorderTraversal(((n,i)=>{const h=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!h){const h=t.serverCache.getNode().getImmediateChild(n),c=Ko(e,h,i);l=Ho(e,l,new Yi(n),c,s,r,o,a)}})),l}function Go(e,t,n,i,s,r,o){if(null!=Ro(s,n))return t;const a=t.serverCache.isFiltered(),h=t.serverCache;if(null!=i.value){if(ss(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return Ho(e,t,n,h.getNode().getChild(n),s,r,a,o);if(ss(n)){let i=new Jr(null);return h.getNode().forEachChild(ks,((e,t)=>{i=i.set(new Yi(e),t)})),Yo(e,t,n,i,s,r,a,o)}return t}{let l=new Jr(null);return i.foreach(((e,t)=>{const i=is(n,e);h.isCompleteForPath(i)&&(l=l.set(e,h.getNode().getChild(i)))})),Yo(e,t,n,l,s,r,a,o)}}function Qo(e,t,n,i,s){const r=t.serverCache,o=zr(t,r.getNode(),r.isFullyInitialized()||ss(n),r.isFiltered());return jo(e,o,n,i,Lo,s)}function Jo(e,t,n,i,s,o){let a;if(null!=Ro(i,n))return t;{const h=new Fo(i,t,s),l=t.eventCache.getNode();let c;if(ss(n)||".priority"===Qi(n)){let n;if(t.serverCache.isFullyInitialized())n=So(i,Yr(t));else{const e=t.serverCache.getNode();r(e instanceof Zs,"serverChildren would be complete if leaf node"),n=ko(i,e)}c=e.filter.updateFullNode(l,n,o)}else{const s=Qi(n);let r=Do(i,s,t.serverCache);null==r&&t.serverCache.isCompleteForChild(s)&&(r=l.getImmediateChild(s)),c=null!=r?e.filter.updateChild(l,s,r,Xi(n),h,o):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Zs.EMPTY_NODE,Xi(n),h,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=So(i,Yr(t)),a.isLeafNode()&&(c=e.filter.updateFullNode(c,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Ro(i,Gi()),Vr(t,c,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new dr(n.getIndex()),s=gr(n);this.processor_=qo(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(Zs.EMPTY_NODE,r.getNode(),null),h=s.updateFullNode(Zs.EMPTY_NODE,o.getNode(),null),l=new qr(a,r.isFullyInitialized(),i.filtersNodes()),c=new qr(h,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=$r(c,l),this.eventGenerator_=new Ur(this.query_)}get query(){return this.query_}}function Zo(e){return e.viewCache_.serverCache.getNode()}function ea(e,t){const n=Yr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ss(t)&&!n.getImmediateChild(Qi(t)).isEmpty())?n.getChild(t):null}function ta(e){return 0===e.eventRegistrations_.length}function na(e,t){e.eventRegistrations_.push(t)}function ia(e,t,n){const i=[];if(n){r(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function sa(e,t,n,i){t.type===Pr.MERGE&&null!==t.source.queryId&&(r(Yr(e.viewCache_),"We should always have a full cache before handling merges"),r(Kr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=Wo(e.processor_,s,t,n,i);return Uo(e.processor_,o.viewCache),r(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,oa(e,o.changes,o.viewCache.eventCache.getNode(),null)}function ra(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(Vs,((e,t)=>{i.push(hr(e,t))}))}return n.isFullyInitialized()&&i.push(ar(n.getNode())),oa(e,i,n.getNode(),t)}function oa(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return Wr(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa,ha;class la{constructor(){this.views=new Map}}function ca(e){r(!aa,"__referenceConstructor has already been defined"),aa=e}function ua(){return r(aa,"Reference.ts has not been loaded"),aa}function da(e){return 0===e.views.size}function pa(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return r(null!=o,"SyncTree gave us an op for an invalid query."),sa(o,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(sa(r,t,n,i));return s}}function _a(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=So(n,s?i:null),r=!1;e?r=!0:i instanceof Zs?(e=ko(n,i),r=!1):(e=Zs.EMPTY_NODE,r=!1);const o=$r(new qr(e,r,!1),new qr(i,s,!1));return new Xo(t,o)}return o}function fa(e,t,n,i,s,r){const o=_a(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),na(o,n),ra(o,n)}function ga(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=wa(e);if("default"===s)for(const[h,l]of e.views.entries())o=o.concat(ia(l,n,i)),ta(l)&&(e.views.delete(h),l.query._queryParams.loadsAllData()||r.push(l.query));else{const t=e.views.get(s);t&&(o=o.concat(ia(t,n,i)),ta(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!wa(e)&&r.push(new(ua())(t._repo,t._path)),{removed:r,events:o}}function ma(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ya(e,t){let n=null;for(const i of e.views.values())n=n||ea(i,t);return n}function va(e,t){const n=t._queryParams;if(n.loadsAllData())return ba(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ca(e,t){return null!=va(e,t)}function wa(e){return null!=ba(e)}function ba(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e){r(!ha,"__referenceConstructor has already been defined"),ha=e}function Ea(){return r(ha,"Reference.ts has not been loaded"),ha}let Ta=1;class Sa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Jr(null),this.pendingWriteTree_=To(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ka(e,t,n,i,s){return co(e.pendingWriteTree_,t,n,i,s),s?Ua(e,new Lr(Dr(),t,n)):[]}function Na(e,t,n,i){uo(e.pendingWriteTree_,t,n,i);const s=Jr.fromObject(n);return Ua(e,new Fr(Dr(),t,s))}function Ra(e,t,n=!1){const i=po(e.pendingWriteTree_,t),s=_o(e.pendingWriteTree_,t);if(s){let t=new Jr(null);return null!=i.snap?t=t.set(Gi(),!0):In(i.children,(e=>{t=t.set(new Yi(e),!0)})),Ua(e,new Or(i.path,t,n))}return[]}function Pa(e,t,n){return Ua(e,new Lr(xr(),t,n))}function Da(e,t,n){const i=Jr.fromObject(n);return Ua(e,new Fr(xr(),t,i))}function xa(e,t){return Ua(e,new Mr(xr(),t))}function Aa(e,t,n){const i=Va(e,n);if(i){const n=za(i),s=n.path,r=n.queryId,o=rs(s,t),a=new Mr(Ar(r),o);return Ka(e,s,a)}return[]}function Oa(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||Ca(o,t))){const h=ga(o,t,n,i);da(o)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=h.removed;if(a=h.events,!s){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>wa(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=Ya(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=ja(e,i);e.listenProvider_.startListening(Ga(s),Ha(e,s),r.hashFn,r.onComplete)}}}if(!s&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Ga(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get($a(t));e.listenProvider_.stopListening(Ga(t),n)}))}Qa(e,l)}return a}function Ma(e,t,n,i){const s=Va(e,i);if(null!=s){const i=za(s),r=i.path,o=i.queryId,a=rs(r,t),h=new Lr(Ar(o),a,n);return Ka(e,r,h)}return[]}function La(e,t,n,i){const s=Va(e,i);if(s){const i=za(s),r=i.path,o=i.queryId,a=rs(r,t),h=Jr.fromObject(n),l=new Fr(Ar(o),a,h);return Ka(e,r,l)}return[]}function Fa(e,t,n,i=!1){const s=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=rs(e,s);o=o||ya(t,n),a=a||wa(t)}));let h,l=e.syncPointTree_.get(s);if(l?(a=a||wa(l),o=o||ya(l,Gi())):(l=new la,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o)h=!0;else{h=!1,o=Zs.EMPTY_NODE;const t=e.syncPointTree_.subtree(s);t.foreachChild(((e,t)=>{const n=ya(t,Gi());n&&(o=o.updateImmediateChild(e,n))}))}const c=Ca(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=$a(t);r(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ja();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const u=lo(e.pendingWriteTree_,s);let d=fa(l,t,n,u,o,h);if(!c&&!a&&!i){const n=va(l,t);d=d.concat(Xa(e,t,n))}return d}function qa(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=rs(e,t),s=ya(n,i);if(s)return s}));return vo(s,t,r,n,i)}function Ua(e,t){return Wa(t,e.syncPointTree_,null,lo(e.pendingWriteTree_,Gi()))}function Wa(e,t,n,i){if(ss(e.path))return Ba(e,t,n,i);{const s=t.get(Gi());null==n&&null!=s&&(n=ya(s,Gi()));let r=[];const o=Qi(e.path),a=e.operationForChild(o),h=t.children.get(o);if(h&&a){const e=n?n.getImmediateChild(o):null,t=xo(i,o);r=r.concat(Wa(a,h,e,t))}return s&&(r=r.concat(pa(s,e,i,n))),r}}function Ba(e,t,n,i){const s=t.get(Gi());null==n&&null!=s&&(n=ya(s,Gi()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=xo(i,t),h=e.operationForChild(t);h&&(r=r.concat(Ba(h,s,o,a)))})),s&&(r=r.concat(pa(s,e,i,n))),r}function ja(e,t){const n=t.query,i=Ha(e,n);return{hashFn:()=>{const e=Zo(t)||Zs.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Aa(e,n._path,i):xa(e,n._path);{const i=kn(t,n);return Oa(e,n,null,i)}}}}function Ha(e,t){const n=$a(t);return e.queryToTagMap.get(n)}function $a(e){return e._path.toString()+"$"+e._queryIdentifier}function Va(e,t){return e.tagToQueryMap.get(t)}function za(e){const t=e.indexOf("$");return r(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Yi(e.substr(0,t))}}function Ka(e,t,n){const i=e.syncPointTree_.get(t);r(i,"Missing sync point for query tag that we're tracking");const s=lo(e.pendingWriteTree_,t);return pa(i,n,s,null)}function Ya(e){return e.fold(((e,t,n)=>{if(t&&wa(t)){const e=ba(t);return[e]}{let e=[];return t&&(e=ma(t)),In(n,((t,n)=>{e=e.concat(n)})),e}}))}function Ga(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ea())(e._repo,e._path):e}function Qa(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=$a(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Ja(){return Ta++}function Xa(e,t,n){const i=t._path,s=Ha(e,t),o=ja(e,n),a=e.listenProvider_.startListening(Ga(t),s,o.hashFn,o.onComplete),h=e.syncPointTree_.subtree(i);if(s)r(!wa(h.value),"If we're adding a query, it shouldn't be shadowed");else{const t=h.fold(((e,t,n)=>{if(!ss(e)&&t&&wa(t))return[ba(t).query];{let e=[];return t&&(e=e.concat(ma(t).map((e=>e.query)))),In(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Ga(i),Ha(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Za(t)}node(){return this.node_}}class eh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=is(this.path_,e);return new eh(this.syncTree_,t)}node(){return qa(this.syncTree_,this.path_)}}const th=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},nh=function(e,t,n){return e&&"object"===typeof e?(r(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ih(e[".sv"],t,n):"object"===typeof e[".sv"]?sh(e[".sv"],t):void r(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ih=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:r(!1,"Unexpected server value: "+e)}},sh=function(e,t,n){e.hasOwnProperty("increment")||r(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&r(!1,"Unexpected increment value: "+i);const s=t.node();if(r(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s,a=o.getValue();return"number"!==typeof a?i:a+i},rh=function(e,t,n,i){return ah(t,new eh(n,e),i)},oh=function(e,t,n){return ah(e,new Za(t),n)};function ah(e,t,n){const i=e.getPriority().val(),s=nh(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=nh(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Bs(r,ir(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Bs(s))),i.forEachChild(Vs,((e,i)=>{const s=ah(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function lh(e,t){let n=t instanceof Yi?t:new Yi(t),i=e,s=Qi(n);while(null!==s){const e=$(i.node.children,s)||{children:{},childCount:0};i=new hh(s,i,e),n=Xi(n),s=Qi(n)}return i}function ch(e){return e.node.value}function uh(e,t){e.node.value=t,yh(e)}function dh(e){return e.node.childCount>0}function ph(e){return void 0===ch(e)&&!dh(e)}function _h(e,t){In(e.node.children,((n,i)=>{t(new hh(n,e,i))}))}function fh(e,t,n,i){n&&!i&&t(e),_h(e,(e=>{fh(e,t,!0,i)})),n&&i&&t(e)}function gh(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function mh(e){return new Yi(null===e.parent?e.name:mh(e.parent)+"/"+e.name)}function yh(e){null!==e.parent&&vh(e.parent,e.name,e)}function vh(e,t,n){const i=ph(n),s=H(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,yh(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,yh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=/[\[\].#$\/\u0000-\u001F\u007F]/,wh=/[\[\].#$\u0000-\u001F\u007F]/,bh=10485760,Ih=function(e){return"string"===typeof e&&0!==e.length&&!Ch.test(e)},Eh=function(e){return"string"===typeof e&&0!==e.length&&!wh.test(e)},Th=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Eh(e)},Sh=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!_n(e)||e&&"object"===typeof e&&H(e,".sv")},kh=function(e,t,n,i){i&&void 0===t||Nh(J(e,"value"),t,n)},Nh=function(e,t,n){const i=n instanceof Yi?new ls(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ps(i));if("function"===typeof t)throw new Error(e+"contains a function "+ps(i)+" with contents = "+t.toString());if(_n(t))throw new Error(e+"contains "+t.toString()+" "+ps(i));if("string"===typeof t&&t.length>bh/3&&Z(t)>bh)throw new Error(e+"contains a string greater than "+bh+" utf8 bytes "+ps(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(In(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Ih(t)))throw new Error(e+" contains an invalid key ("+t+") "+ps(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');cs(i,t),Nh(e,r,i),us(i)})),n&&s)throw new Error(e+' contains ".value" child '+ps(i)+" in addition to actual children.")}},Rh=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=ts(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!Ih(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(os);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&hs(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Ph=function(e,t,n,i){if(i&&void 0===t)return;const s=J(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const r=[];In(t,((e,t)=>{const i=new Yi(e);if(Nh(s,t,is(n,i)),".priority"===Zi(i)&&!Sh(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),Rh(s,r)},Dh=function(e,t,n,i){if((!i||void 0!==n)&&!Eh(n))throw new Error(J(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},xh=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Dh(e,t,n,i)},Ah=function(e,t){if(".info"===Qi(t))throw new Error(e+" failed = Can't modify data under /.info/")},Oh=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ih(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Th(n))throw new Error(J(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lh(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||as(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Fh(e,t,n){Lh(e,n),Uh(e,(e=>as(e,t)))}function qh(e,t,n){Lh(e,n),Uh(e,(e=>hs(e,t)||hs(t,e)))}function Uh(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Wh(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Wh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();rn&&hn("event: "+n.toString()),xn(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="repo_interrupt",jh=25;class Hh{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Mh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wr(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $h(e,t,n){if(e.stats_=ti(e.repoInfo_),e.forceRestClient_||An())e.server_=new vr(e.repoInfo_,((t,n,i,s)=>{Kh(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Yh(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new bs(e.repoInfo_,t,((t,n,i,s)=>{Kh(e,t,n,i,s)}),(t=>{Yh(e,t)}),(t=>{Gh(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ni(e.repoInfo_,(()=>new Rr(e.stats_,e.server_))),e.infoData_=new Cr,e.infoSyncTree_=new Sa({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Pa(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Qh(e,"connected",!1),e.serverSyncTree_=new Sa({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);qh(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Vh(e){const t=e.infoData_.getNode(new Yi(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function zh(e){return th({timestamp:Vh(e)})}function Kh(e,t,n,i,s){e.dataUpdateCount++;const r=new Yi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=z(n,(e=>ir(e)));o=La(e.serverSyncTree_,r,t,s)}else{const t=ir(n);o=Ma(e.serverSyncTree_,r,t,s)}else if(i){const t=z(n,(e=>ir(e)));o=Da(e.serverSyncTree_,r,t)}else{const t=ir(n);o=Pa(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=ll(e,r)),qh(e.eventQueue_,a,o)}function Yh(e,t){Qh(e,"connected",t),!1===t&&el(e)}function Gh(e,t){In(t,((t,n)=>{Qh(e,t,n)}))}function Qh(e,t,n){const i=new Yi("/.info/"+t),s=ir(n);e.infoData_.updateSnapshot(i,s);const r=Pa(e.infoSyncTree_,i,s);qh(e.eventQueue_,i,r)}function Jh(e){return e.nextWriteId_++}function Xh(e,t,n,i,s){sl(e,"set",{path:t.toString(),value:n,priority:i});const r=zh(e),o=ir(n,i),a=qa(e.serverSyncTree_,t),h=oh(o,a,r),l=Jh(e),c=ka(e.serverSyncTree_,t,h,l,!0);Lh(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||dn("set at "+t+" failed: "+n);const o=Ra(e.serverSyncTree_,l,!r);qh(e.eventQueue_,t,o),rl(e,s,n,i)}));const u=fl(e,t);ll(e,u),qh(e.eventQueue_,u,[])}function Zh(e,t,n,i){sl(e,"update",{path:t.toString(),value:n});let s=!0;const r=zh(e),o={};if(In(n,((n,i)=>{s=!1,o[n]=rh(is(t,n),ir(i),e.serverSyncTree_,r)})),s)hn("update() called with empty data.  Don't do anything."),rl(e,i,"ok",void 0);else{const s=Jh(e),r=Na(e.serverSyncTree_,t,o,s);Lh(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const o="ok"===n;o||dn("update at "+t+" failed: "+n);const a=Ra(e.serverSyncTree_,s,!o),h=a.length>0?ll(e,t):t;qh(e.eventQueue_,h,a),rl(e,i,n,r)})),In(n,(n=>{const i=fl(e,is(t,n));ll(e,i)})),qh(e.eventQueue_,t,[])}}function el(e){sl(e,"onDisconnectEvents");const t=zh(e),n=wr();Ir(e.onDisconnect_,Gi(),((i,s)=>{const r=rh(i,s,e.serverSyncTree_,t);br(n,i,r)}));let i=[];Ir(n,Gi(),((t,n)=>{i=i.concat(Pa(e.serverSyncTree_,t,n));const s=fl(e,t);ll(e,s)})),e.onDisconnect_=wr(),qh(e.eventQueue_,Gi(),i)}function tl(e,t,n){let i;i=".info"===Qi(t._path)?Fa(e.infoSyncTree_,t,n):Fa(e.serverSyncTree_,t,n),Fh(e.eventQueue_,t._path,i)}function nl(e,t,n){let i;i=".info"===Qi(t._path)?Oa(e.infoSyncTree_,t,n):Oa(e.serverSyncTree_,t,n),Fh(e.eventQueue_,t._path,i)}function il(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Bh)}function sl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),hn(n,...t)}function rl(e,t,n,i){t&&xn((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function ol(e,t,n){return qa(e.serverSyncTree_,t,n)||Zs.EMPTY_NODE}function al(e,t=e.transactionQueueTree_){if(t||_l(e,t),ch(t)){const n=dl(e,t);r(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&hl(e,mh(t),n)}else dh(t)&&_h(t,(t=>{al(e,t)}))}function hl(e,t,n){const i=n.map((e=>e.currentWriteId)),s=ol(e,t,i);let o=s;const a=s.hash();for(let c=0;c<n.length;c++){const e=n[c];r(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=rs(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const h=o.val(!0),l=t;e.server_.put(l.toString(),h,(i=>{sl(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ra(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();_l(e,lh(e.transactionQueueTree_,t)),al(e,e.transactionQueueTree_),qh(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)xn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{dn("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ll(e,t)}}),a)}function ll(e,t){const n=ul(e,t),i=mh(n),s=dl(e,n);return cl(e,s,i),i}function cl(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let h=0;h<t.length;h++){const o=t[h],l=rs(n,o.path);let c,u=!1;if(r(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,c=o.abortReason,s=s.concat(Ra(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=jh)u=!0,c="maxretry",s=s.concat(Ra(e.serverSyncTree_,o.currentWriteId,!0));else{const n=ol(e,o.path,a);o.currentInputSnapshot=n;const i=t[h].update(n.val());if(void 0!==i){Nh("transaction failed: Data returned ",i,o.path);let t=ir(i);const r="object"===typeof i&&null!=i&&H(i,".priority");r||(t=t.updatePriority(n.getPriority()));const h=o.currentWriteId,l=zh(e),c=oh(t,n,l);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=c,o.currentWriteId=Jh(e),a.splice(a.indexOf(h),1),s=s.concat(ka(e.serverSyncTree_,o.path,c,o.currentWriteId,o.applyLocally)),s=s.concat(Ra(e.serverSyncTree_,h,!0))}else u=!0,c="nodata",s=s.concat(Ra(e.serverSyncTree_,o.currentWriteId,!0))}qh(e.eventQueue_,n,s),s=[],u&&(t[h].status=2,function(e){setTimeout(e,Math.floor(0))}(t[h].unwatcher),t[h].onComplete&&("nodata"===c?i.push((()=>t[h].onComplete(null,!1,t[h].currentInputSnapshot))):i.push((()=>t[h].onComplete(new Error(c),!1,null)))))}_l(e,e.transactionQueueTree_);for(let r=0;r<i.length;r++)xn(i[r]);al(e,e.transactionQueueTree_)}function ul(e,t){let n,i=e.transactionQueueTree_;n=Qi(t);while(null!==n&&void 0===ch(i))i=lh(i,n),t=Xi(t),n=Qi(t);return i}function dl(e,t){const n=[];return pl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function pl(e,t,n){const i=ch(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);_h(t,(t=>{pl(e,t,n)}))}function _l(e,t){const n=ch(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,uh(t,n.length>0?n:void 0)}_h(t,(t=>{_l(e,t)}))}function fl(e,t){const n=mh(ul(e,t)),i=lh(e.transactionQueueTree_,t);return gh(i,(t=>{gl(e,t)})),gl(e,i),fh(i,(t=>{gl(e,t)})),n}function gl(e,t){const n=ch(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(r(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(r(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ra(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?uh(t,void 0):n.length=o+1,qh(e.eventQueue_,mh(t),s);for(let e=0;e<i.length;e++)xn(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function yl(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const vl=function(e,t){const n=Cl(e),i=n.namespace;"firebase.com"===n.domain&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pn();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Gn(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new Yi(n.pathString)}},Cl=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",h=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=ml(e.substring(c,u)));const d=yl(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,h=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:h,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},wl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bl=function(){let e=0;const t=[];return function(n){const i=n===e;let s;e=n;const o=new Array(8);for(s=7;s>=0;s--)o[s]=wl.charAt(n%64),n=Math.floor(n/64);r(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(s=11;s>=0&&63===t[s];s--)t[s]=0;t[s]++}else for(s=0;s<12;s++)t[s]=Math.floor(64*Math.random());for(s=0;s<12;s++)a+=wl.charAt(t[s]);return r(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Il{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+U(this.snapshot.exportVal())}}class El{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return r(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ss(this._path)?null:Zi(this._path)}get ref(){return new kl(this._repo,this._path)}get _queryIdentifier(){const e=yr(this._queryParams),t=wn(e);return"{}"===t?"default":t}get _queryObject(){return yr(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Sl))return!1;const t=this._repo===e._repo,n=as(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+es(this._path)}}class kl extends Sl{constructor(e,t){super(e,t,new fr,!1)}get parent(){const e=ns(this._path);return null===e?null:new kl(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Nl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Yi(e),n=Pl(this.ref,e);return new Nl(this._node.getChild(t),n,Vs)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Nl(n,Pl(this.ref,t),Vs))))}hasChild(e){const t=new Yi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rl(e,t){return e=ee(e),e._checkNotDeleted("ref"),void 0!==t?Pl(e._root,t):e._root}function Pl(e,t){return e=ee(e),null===Qi(e._path)?xh("child","path",t,!1):Dh("child","path",t,!1),new kl(e._repo,is(e._path,t))}function Dl(e,t){e=ee(e),Ah("push",e._path),kh("push",t,e._path,!0);const n=Vh(e._repo),i=bl(n),s=Pl(e,i),r=Pl(e,i);let o;return o=null!=t?xl(r,t).then((()=>r)):Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function xl(e,t){e=ee(e),Ah("set",e._path),kh("set",t,e._path,!1);const n=new T;return Xh(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Al(e,t){Ph("update",t,e._path,!1);const n=new T;return Zh(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Ol{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Il("value",this,new Nl(e.snapshotNode,new kl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new El(this,e,t):null}matches(e){return e instanceof Ol&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ml{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new El(this,e,t):null}createEvent(e,t){r(null!=e.childName,"Child events should have a childName.");const n=Pl(new kl(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Il(e.type,this,new Nl(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ml&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ll(e,t,n,i,s){let r;if("object"===typeof i&&(r=void 0,s=i),"function"===typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{nl(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Tl(n,r||void 0),a="value"===t?new Ol(o):new Ml(t,o);return tl(e._repo,e,a),()=>nl(e._repo,e,a)}function Fl(e,t,n,i){return Ll(e,"value",t,n,i)}ca(kl),Ia(kl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ql="FIREBASE_DATABASE_EMULATOR_HOST",Ul={};let Wl=!1;function Bl(e,t,n,i){e.repoInfo_=new Gn(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function jl(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hn("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,h=vl(r,s),l=h.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_API_URL:"https://hangoutserver.onrender.com",BASE_URL:"/HangOut/"}[ql]),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,h=vl(r,s),l=h.repoInfo):o=!h.repoInfo.secure;const c=s&&o?new Fn(Fn.OWNER):new Ln(e.name,e.options,t);Oh("Invalid Firebase Database URL",h),ss(h.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const u=$l(l,e,c,new Mn(e.name,n));return new Vl(u,e)}function Hl(e,t){const n=Ul[t];n&&n[e.key]===e||un(`Database ${t}(${e.repoInfo_}) has already been deleted.`),il(e),delete n[e.key]}function $l(e,t,n,i){let s=Ul[t.name];s||(s={},Ul[t.name]=s);let r=s[e.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hh(e,Wl,n,i),s[e.toURLString()]=r,r}class Vl{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($h(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kl(this._repo,Gi())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Hl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&un("Cannot call "+e+" on a deleted database.")}}function zl(e=Tt(),t){const n=vt(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=I("database");e&&Kl(n,...e)}return n}function Kl(e,t,n,i={}){e=ee(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Fn(Fn.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:S(i.mockUserToken,e.app.options.projectId);r=new Fn(t)}Bl(s,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yl(e){Yt(It),yt(new te("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return jl(n,i,s,t)}),"PUBLIC").setMultipleInstances(!0)),St(Vt,zt,e),St(Vt,zt,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},bs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Yl();var Gl=n(5121),Ql=n(5199);const Jl="https://hangoutserver.onrender.com",Xl={apiKey:"AIzaSyCTIDRYBSvZak9CqKLulVG3XcqXQgbA4Tk",authDomain:"hangoutchatroom-e390c.firebaseapp.com",projectId:"hangoutchatroom-e390c",storageBucket:"hangoutchatroom-e390c.appspot.com",messagingSenderId:"59840666908",appId:"1:59840666908:web:a03db8e68c40b76b4baed9",measurementId:"G-TSYQ76H9JL"},Zl=Et(Xl),ec=zl(Zl),tc=(0,Ql.Z)();var nc=(0,i.Q_)("chatRoomStore",{state:()=>({loadingRoom:!1,allRoom:{},userId:"",targetId:"",targetRoomKey:"",targetName:"",targetPic:"",ownKeys:[],ownRooms:[],renderNavData:[],targetMsgDataAry:[],renderMsgData:[]}),actions:{getConnect(){this.targetRoomKey="",this.allRoom={},this.ownKeys=[],this.ownRooms=[],this.renderNavData=[];const e=Rl(ec,"/");Fl(e,(e=>{this.allRoom=e.val()}))},getTargetRoomKey(){if(null!=this.allRoom){let e=Object.keys(this.allRoom);e.forEach((e=>{void 0!=this.allRoom[e].owner&&this.allRoom[e].owner.includes(this.userId)&&this.allRoom[e].owner.includes(this.targetId)&&(this.targetRoomKey=e)}))}},getOwnKeys(){if(null!=this.allRoom){let e=Object.keys(this.allRoom);e.forEach((e=>{if(void 0!=this.allRoom[e].owner)if(this.allRoom[e].owner.includes(this.userId)&&!this.ownKeys.includes(e))this.ownKeys.push(e),this.ownRooms.push(this.allRoom[e]);else if(this.ownKeys.includes(e)){let t;for(let n=0;n<this.ownKeys.length;n++)e==this.ownRooms[n].roomKey&&this.ownRooms[n].lastestTime.time!=this.allRoom[e].lastestTime.time&&(t=n,this.ownRooms[t]=this.allRoom[e])}})),this.getTargetRoomMsg(),this.updateData()}},updateData(){console.log("執行了一次updateData"),this.renderNavData=[];let e=[];for(let t=0;t<this.ownRooms.length;t++){let n={lastestTime:"",roomKey:"",otherId:"",otherName:"",otherPic:"",petPic:""};n.lastestTime=this.ownRooms[t].lastestTime.time;let i=this.ownRooms[t].owner.filter((e=>e!=this.userId));n.otherId=i[0],n.roomKey=this.ownRooms[t].roomKey,this.loadingRoom=!0;let s=Gl.Z.get(`${Jl}/users/${i[0]}`).then((e=>{n.otherName=e.data.userInfo.name,n.otherPic=e.data.userInfo.pic,n.petPic=e.data.petInfo.pic;let t=this.renderNavData.filter((e=>e.otherId==i[0]));void 0==t[0]&&this.renderNavData.push(n)})).catch((e=>{console.log(e)}));e.push(s)}Promise.all(e).then((()=>{this.sortOwnRooms()})).catch((e=>{console.log(e)}))},sortOwnRooms(){this.renderNavData=this.renderNavData.sort((function(e,t){return e.lastestTime<t.lastestTime?1:-1})),this.loadingRoom=!1},switchTargetIdAndRoomKey(e,t){this.targetRoomKey=t,this.targetId=e,this.getTargetRoomMsg(),this.getTargetInfo()},getTargetRoomMsg(){this.targetMsgDataAry=[],this.renderMsgData=[];for(let e=0;e<this.ownRooms.length;e++)if(this.ownRooms[e].roomKey==this.targetRoomKey){let t=Object.keys(this.ownRooms[e].msgData);return t.forEach((t=>{this.targetMsgDataAry.push(this.ownRooms[e].msgData[t])})),void this.sortMsgData(this.targetMsgDataAry)}},getTargetInfo(){this.targetId&&Gl.Z.get(`${Jl}/users/${this.targetId}`).then((e=>{this.targetName=e.data.userInfo.name,this.targetPic=e.data.userInfo.pic})).catch((e=>{console.log(e)}))},sortMsgData(e){this.renderMsgData=e.sort((function(e,t){return e.time>t.time?1:-1}))},sendMsg(e){let t;if(this.targetRoomKey){t=this.targetRoomKey;const n=Dl(Pl(Rl(ec),`/${t}`)).key;let i={msgKey:n,sender:this.userId,msg:e,time:tc.getCurrentTime()};const s={};s[`/${t}/msgData/${n}`]=i,Al(Rl(ec),s);let r={time:tc.getCurrentTime()};const o={};o[`/${t}/lastestTime`]=r,Al(Rl(ec),o)}else{t=Dl(Pl(Rl(ec),"/")).key;const n=Dl(Pl(Rl(ec),`/${t}`)).key;let i={roomKey:t,owner:[this.userId,this.targetId],lastestTime:{time:tc.getCurrentTime()},msgData:{}};i.msgData[n]={msgKey:n,sender:this.userId,msg:e,time:tc.getCurrentTime()};const s={};s[`/${t}`]=i,Al(Rl(ec),s)}}}})},5199:function(e,t,n){var i=n(9876);t.Z=(0,i.Q_)("timeStore",{state:()=>({}),actions:{getCurrentTime(){let e=new Date,t=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),s=e.getHours(),r=e.getMinutes(),o=e.getSeconds();return n=(n<10?"0":"")+n,i=(i<10?"0":"")+i,s=(s<10?"0":"")+s,r=(r<10?"0":"")+r,o=(o<10?"0":"")+o,`${t}-${n}-${i} ${s}:${r}:${o}`}}})}}]);
//# sourceMappingURL=469.52b952f1.js.map