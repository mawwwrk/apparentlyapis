var B=Object.defineProperty,G=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var A=(t,e,s)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,O=(t,e)=>{for(var s in e||(e={}))Q.call(e,s)&&A(t,s,e[s]);if(I)for(var s of I(e))V.call(e,s)&&A(t,s,e[s]);return t},E=(t,e)=>G(t,K(e));var q=(t,e,s)=>(A(t,typeof e!="symbol"?e+"":e,s),s),D=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var x=(t,e,s)=>(D(t,e,"read from private field"),s?s.call(t):e.get(t)),P=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},R=(t,e,s,n)=>(D(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);import{M as J,j as T,s as S,U as X,L as z,O as Z,r as p,R as ee,a as te,B as se,b as re,c as L}from"./vendor.4fe896be.js";const ne=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};ne();var oe="/apparentlyapis/assets/MCU_Films_Logos.4720c1f2.webp",ae="/apparentlyapis/assets/logo.ecc203fb.svg",ie="/apparentlyapis/assets/Marvel_Logo.7e3f489f.svg";const ce=t=>e=>s=>J(s,t,e),le="51184a2a364c3bc94cde1f132c5592eb49e5245d",pe=ce(le);function he(t){const e=new Image;return e.src=t,{width:e.width,height:e.height,aspectRatio:`${e.width} / ${e.height}`}}const de=function(){const t=(...s)=>{let n,r=s.length;for(const[a,h]of s.entries())r*=r,n=a?parseInt(n+h,r):h;return String.fromCodePoint(n)},e=s=>atob(s).split("").filter(n=>n!==",").reduce((n,r,a,h)=>{const[m,d]=[h,n].map(c=>c.length),g=n[d-1];return a%2===0?n.push(r):n[d-1]=t(g,r),n},[]);return s=>e(s).join("")},o=T.exports.jsx,y=T.exports.jsxs,_=T.exports.Fragment,ue=S.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`,me=X`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`,ge=S.div.attrs(t=>{const{width:e,aspectRatio:s}=he(t.imgsrc);return E(O({},t),{width:e,aspectRatio:s})})`
  animation: ${me} ${t=>t.animSeconds}s linear infinite;
  background-image: url(${t=>t.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  width: min(80vw, ${t=>t.width}px);
  aspect-ratio: ${t=>t.aspectRatio};

  &&:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${t=>t.imgsrc});
    background-size: 100%;
    transform: translate(-50%, 100%);
  }
`;function fe(t){return o(_,{children:o(ue,{className:"marquee-container",children:o(ge,O({className:"marquee-image"},t))})})}function ye(){return y("header",{className:"App-header",children:[y("div",{className:"App-logo",children:[o("img",{src:ae,className:"logo react-logo",alt:"react logo"}),o("img",{src:ie,className:"logo marvel-logo",alt:"marvel"})]}),o(fe,{imgsrc:oe,animSeconds:"180"})]})}function ve(){return y("div",{id:"navbar",children:[o(z,{to:"/apparentlyapis/characters",children:o("h5",{children:"Characters"})}),o(z,{to:"/apparentlyapis/stories",children:o("h5",{children:" Stories"})}),o(z,{to:"/apparentlyapis/events",children:o("h5",{children:"Events"})}),o(z,{to:"/apparentlyapis/comics",children:o("h5",{children:"Comics"})})]})}function xe(){return y("div",{className:"App",children:[o(ye,{}),o(ve,{}),o("div",{className:"container",children:o(Z,{})})]})}function Y(t){var u,w,i,f;const{propsClickHandler:e,data:s,variant:n,isModalChild:r}=t,a=(w=(u=s==null?void 0:s.name)!=null?u:s==null?void 0:s.title)!=null?w:"none",h=(i=s==null?void 0:s.description)!=null?i:"",m=n!=null?n:"/portrait_medium",d=(f=t==null?void 0:t.showText)!=null?f:!1,g=()=>{!r&&console.log(a),e&&e(s)};let c;try{c=`${s.thumbnail.path}${m}.${s.thumbnail.extension}`}catch{console.error("no src"),c=void 0}return y("div",{className:"card",onClick:g,children:[o("h2",{children:d&&a}),c&&o("img",{className:"thumbnail",src:c,alt:""}),o("p",{children:h!==void 0&&d&&h})]})}const be=S.div.attrs(t=>{const{cols:e}=t;return{cols:e}})`
  display: grid;
  grid-template-columns: repeat(${t=>t.cols}, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
`,we=t=>{const{children:e,cols:s}=t;return o(be,{cols:s,children:e})};function U(t){const{data:e,propsClickHandler:s}=t,n=Math.floor(window.innerWidth*.8/100);return o(we,{className:"card-container",cols:n,children:e?e.map(r=>o(Y,{data:r,propsClickHandler:s},r.id)):""})}var Me="/apparentlyapis/assets/avbg.6a79a5db.png";const ke=S.dialog.attrs(t=>{const{open:e}=t;return{open:e}})`
  height: fit-content;
  width: fit-content;
  position: fixed;
  /* ${t=>t.open?"display: block;":"display: none;"} */

  &&::backdrop {
    background-image: url(${Me});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    opacity: 0.4;
  }
  && > * {
    max-width: 500px;
    max-height: 500px;
  }
`,F=p.exports.forwardRef(function(e,s){const{children:n}=e;return o(ke,{className:"Modal",ref:s,children:n})});var b,C,N;const M=class{constructor(e){P(this,C,void 0);P(this,N,void 0);q(this,"_queryParams");this.base=e,this.base=e,R(this,N,new Map([["apikey",x(M,b).key(x(M,b).string)]])),R(this,C,pe(x(M,b).key(x(M,b).string)))}makeHash(e){return x(this,C).call(this,e)}set queryParams(e){var n;const s=(n=this._queryParams)!=null?n:x(this,N);if(typeof e=="object")for(const[r,a]of Object.entries(e))s.set(r,a);else if(Array.isArray(e))for(const[r,a]of e)s.set(r,a);this._queryParams=s}get queryParams(){return this._queryParams}};let $=M;b=new WeakMap,C=new WeakMap,N=new WeakMap,P($,b,{string:"NjIzMTY1MzUzODM5NjI2NCw2MzY2MzQzOTYxMzE2NTM3LDY0NjYzMzYzMzUzODY2NjIsNjYzNzY2NjM2NjMxMzgzOA==",key:de()});class je extends ${constructor(e,s,n,r){super(e);this.base=e,this.path=s,this.options=r,this.queryParams=n,this.options=r,this.path=s}get url(){var e;if((e=this.queryParams)==null||e.set("hash",this.makeHash(new Date().getTime())),this.path){const s=new URL(this.path,this.base);if(this.queryParams)for(const[n,r]of this.queryParams)s.searchParams.set(n,r);return s.toString()}}}function W(t){const[e,s]=p.exports.useState(t);p.exports.useState();const[n,r]=p.exports.useState({path:"",queryParams:{},options:{}}),[a,h]=p.exports.useState(),[m,d]=p.exports.useState(!1),[g,c]=p.exports.useState(),u=new je(t,n.path,n.queryParams,n.options),w=i=>{var f,l;i!=null&&i.options||(i.options={headers:{"Content-Type":"application/json",Accept:"application/json"}}),r(i),u.path=(f=i==null?void 0:i.path)!=null?f:"",u.queryParams=(l=i==null?void 0:i.queryParams)!=null?l:{limit:50},s(u.url),d(!0)};return p.exports.useEffect(()=>{!m||fetch(e,n.options).then(i=>i.json()).then(i=>(h(i),d(!1),i)).catch(i=>{c(i),d(!1)})},[e,n]),[{data:a,isLoading:m,error:g},w]}function Ce(){const[t,e]=p.exports.useState(),s=p.exports.createRef(),n="https://gateway.marvel.com/v1/public/",[r,a]=p.exports.useState({path:"series",options:{headers:{"Content-Type":"application/json",Accept:"application/json",referer:"http://localhost:3000"}},queryParams:{limit:100,events:"314,315,238"}}),[h,m]=p.exports.useState({}),[d,g]=W(n),{data:c,isLoading:u,error:w}=d,i=l=>{s.current.showModal(),m(v=>l)},f=l=>{l?i(l):console.log(l)};return p.exports.useEffect(()=>{var v,k;g(r);const l=(k=(v=c==null?void 0:c.data)==null?void 0:v.results)!=null?k:c==null?void 0:c.results;l&&l.filter(j=>j.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"),e(j=>l)},[r]),y(_,{children:[u?"loading":t&&Array.isArray(t)?o(U,{data:t,header:"title",propsClickHandler:f}):Array.isArray(t)||"",o(F,{ref:s,children:o(Y,{variant:"/landscape_incredible",data:h,onClick:()=>{},isModalChild:!0,showText:!0})})]})}const Ne=S.div`
  outline: hotpink solid 5px;
  height: fit-content;
  width: 95%;
  display: flex;
  justify-content: center;
`;function H(){const[t,e]=p.exports.useState(),s=p.exports.createRef(),n="https://gateway.marvel.com/v1/public/",[r,a]=p.exports.useState({path:"series",options:{headers:{"Content-Type":"application/json",Accept:"application/json",referer:"http://localhost:3000"}},queryParams:{limit:100,events:"314,315,238"}}),[h,m]=p.exports.useState({}),[d,g]=W(n),{data:c,isLoading:u,error:w}=d,i=l=>{s.current.showModal(),m(v=>l)},f=l=>{l?i(l):console.log(l)};return p.exports.useEffect(()=>{var v,k;g(r);const l=(k=(v=c==null?void 0:c.data)==null?void 0:v.results)!=null?k:c==null?void 0:c.results;l&&l.filter(j=>j.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"),e(j=>l)},[r]),console.log(t),y(_,{children:[y(Ne,{children:[u&&"loading",t&&o(U,{data:t,header:"title",propsClickHandler:f})]}),o(F,{ref:s,children:o(Y,{variant:"/landscape_incredible",data:h,onClick:()=>{},isModalChild:!0,showText:!0})})]})}ee.render(o(te.StrictMode,{children:o(se,{children:o(re,{children:y(L,{path:"/apparentlyapis/",element:o(xe,{}),children:[o(L,{index:!0,element:o(H,{})}),o(L,{path:"/apparentlyapis/:page",element:o(H,{})}),o(L,{path:"/apparentlyapis/test",element:o(Ce,{})})]})})})}),document.getElementById("root"));
