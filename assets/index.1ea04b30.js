var B=Object.defineProperty,G=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var $=(e,t,s)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,O=(e,t)=>{for(var s in t||(t={}))Q.call(t,s)&&$(e,s,t[s]);if(I)for(var s of I(t))V.call(t,s)&&$(e,s,t[s]);return e},D=(e,t)=>G(e,K(t));var E=(e,t,s)=>($(e,typeof t!="symbol"?t+"":t,s),s),q=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var x=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),P=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},R=(e,t,s,o)=>(q(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{M as J,j as A,s as M,U as X,L as z,O as Z,r as p,R as tt,a as et,B as st,b as nt,c as L}from"./vendor.4fe896be.js";const ot=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};ot();var rt="/apparentlyapis/assets/MCU_Films_Logos.4720c1f2.webp",it="/apparentlyapis/assets/logo.ecc203fb.svg",at="/apparentlyapis/assets/Marvel_Logo.7e3f489f.svg";const ct=e=>t=>s=>J(s,e,t),lt="51184a2a364c3bc94cde1f132c5592eb49e5245d",ht=ct(lt);function pt(e){const t=new Image;return t.src=e,{width:t.width,height:t.height,aspectRatio:`${t.width} / ${t.height}`}}const dt=function(){const e=(...s)=>{let o,n=s.length;for(const[i,h]of s.entries())n*=n,o=i?parseInt(o+h,n):h;return String.fromCodePoint(o)},t=s=>atob(s).split("").filter(o=>o!==",").reduce((o,n,i,h)=>{const[m,d]=[h,o].map(l=>l.length),f=o[d-1];return i%2===0?o.push(n):o[d-1]=e(f,n),o},[]);return s=>t(s).join("")},r=A.exports.jsx,g=A.exports.jsxs,_=A.exports.Fragment,ut=M.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`,mt=X`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`,gt=M.div.attrs(e=>{const{width:t,aspectRatio:s}=pt(e.imgsrc);return D(O({},e),{width:t,aspectRatio:s})})`
  animation: ${mt} ${e=>e.animSeconds}s linear infinite;
  background-image: url(${e=>e.imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  width: min(80vw, ${e=>e.width}px);
  aspect-ratio: ${e=>e.aspectRatio};

  &&:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${e=>e.imgsrc});
    background-size: 100%;
    transform: translate(-50%, 100%);
  }
`;function ft(e){return r(_,{children:r(ut,{className:"marquee-container",children:r(gt,O({className:"marquee-image"},e))})})}function yt(){return g("header",{className:"App-header",children:[g("div",{className:"App-logo",children:[r("img",{src:it,className:"logo react-logo",alt:"react logo"}),r("img",{src:at,className:"logo marvel-logo",alt:"marvel"})]}),r(ft,{imgsrc:rt,animSeconds:"180"})]})}function vt(){return g("div",{id:"navbar",children:[r(z,{to:"/apparentlyapis/characters",children:r("h5",{children:"Characters"})}),r(z,{to:"/apparentlyapis/stories",children:r("h5",{children:" Stories"})}),r(z,{to:"/apparentlyapis/events",children:r("h5",{children:"Events"})}),r(z,{to:"/apparentlyapis/comics",children:r("h5",{children:"Comics"})})]})}function xt(){return g("div",{className:"App",children:[r(yt,{}),r(vt,{}),r("div",{className:"container",children:r(Z,{})})]})}function Y(e){var u,w,a,y;const{propsClickHandler:t,data:s,variant:o,isModalChild:n}=e,i=(w=(u=s==null?void 0:s.name)!=null?u:s==null?void 0:s.title)!=null?w:"none",h=(a=s==null?void 0:s.description)!=null?a:"",m=o!=null?o:"/portrait_medium",d=(y=e==null?void 0:e.showText)!=null?y:!1,f=()=>{!n&&console.log(i),t&&t(s)};let l;try{l=`${s.thumbnail.path}${m}.${s.thumbnail.extension}`}catch{console.error("no src"),l=""}return g("div",{className:"card",onClick:f,children:[r("h2",{children:d&&i}),r("img",{className:"thumbnail",src:l,alt:""}),");",r("p",{children:h!==void 0&&d&&h})]})}const bt=M.div.attrs(e=>{const{cols:t}=e;return{cols:t}})`
  display: grid;
  grid-template-columns: repeat(${e=>e.cols}, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
`,wt=e=>{const{children:t,cols:s}=e;return r(bt,{cols:s,children:t})};function U(e){const{data:t,propsClickHandler:s}=e,o=Math.floor(window.innerWidth*.8/100);return r(wt,{className:"card-container",cols:o,children:t?t.map(n=>r(Y,{data:n,propsClickHandler:s},n.id)):""})}var kt="/apparentlyapis/assets/avbg.6a79a5db.png";const Mt=M.dialog.attrs(e=>{const{open:t}=e;return{open:t}})`
  height: fit-content;
  width: fit-content;
  position: fixed;
  /* ${e=>e.open?"display: block;":"display: none;"} */

  &&::backdrop {
    background-image: url(${kt});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    opacity: 0.4;
  }
  && > * {
    max-width: 500px;
    max-height: 500px;
  }
`,F=p.exports.forwardRef(function(t,s){const{children:o}=t;return r(Mt,{className:"Modal",ref:s,children:o})});var b,N,S;const k=class{constructor(t){P(this,N,void 0);P(this,S,void 0);E(this,"_queryParams");this.base=t,this.base=t,R(this,S,new Map([["apikey",x(k,b).key(x(k,b).string)]])),R(this,N,ht(x(k,b).key(x(k,b).string)))}makeHash(t){return x(this,N).call(this,t)}set queryParams(t){var o;const s=(o=this._queryParams)!=null?o:x(this,S);if(typeof t=="object")for(const[n,i]of Object.entries(t))s.set(n,i);else if(Array.isArray(t))for(const[n,i]of t)s.set(n,i);this._queryParams=s}get queryParams(){return this._queryParams}};let T=k;b=new WeakMap,N=new WeakMap,S=new WeakMap,P(T,b,{string:"NjIzMTY1MzUzODM5NjI2NCw2MzY2MzQzOTYxMzE2NTM3LDY0NjYzMzYzMzUzODY2NjIsNjYzNzY2NjM2NjMxMzgzOA==",key:dt()});class jt extends T{constructor(t,s,o,n){super(t);this.base=t,this.path=s,this.options=n,this.queryParams=o,this.options=n,this.path=s}get url(){var t;if((t=this.queryParams)==null||t.set("hash",this.makeHash(new Date().getTime())),this.path){const s=new URL(this.path,this.base);if(this.queryParams)for(const[o,n]of this.queryParams)s.searchParams.set(o,n);return s.toString()}}}function W(e){const[t,s]=p.exports.useState(e),[o,n]=p.exports.useState({path:"",queryParams:{},options:{}}),[i,h]=p.exports.useState(),[m,d]=p.exports.useState(!1),[f,l]=p.exports.useState(),u=new jt(e,o.path,o.queryParams,o.options),w=a=>{var y,c;a!=null&&a.options||(a.options={headers:{"Content-Type":"application/json",Accept:"application/json"}}),n(a),u.path=(y=a==null?void 0:a.path)!=null?y:"",u.queryParams=(c=a==null?void 0:a.queryParams)!=null?c:{limit:50},s(u.url),console.log(u.url),d(!0)};return p.exports.useEffect(()=>{!m||fetch(t,o.options).then(a=>a.json()).then(a=>(h(a),d(!1),a)).catch(a=>{l(a),d(!1)})},[m,o.options,t]),[{data:i,isLoading:m,error:f},w]}const Ct=M.div`
  outline: hotpink solid 5px;
  height: fit-content;
  width: 95%;
  display: flex;
  justify-content: center;
`;function Nt(){const[e,t]=p.exports.useState(),s=p.exports.createRef(),o="https://gateway.marvel.com/v1/public/",[n,i]=p.exports.useState({path:"series",options:{headers:{"Content-Type":"application/json",Accept:"application/json",referer:"http://localhost:3000"}},queryParams:{limit:100,events:"314,315,238"}}),[h,m]=p.exports.useState({}),[d,f]=W(o),{data:l,isLoading:u,error:w}=d,a=c=>{s.current.showModal(),m(v=>c)},y=c=>{c?a(c):console.log(c)};return p.exports.useEffect(()=>{var v,j;f(n);const c=(j=(v=l==null?void 0:l.data)==null?void 0:v.results)!=null?j:l==null?void 0:l.results;c&&c.filter(C=>C.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"),t(C=>c)},[n]),console.log(e),g(_,{children:[g(Ct,{children:[u&&"loading",e&&r(U,{data:e,header:"title",propsClickHandler:y})]}),r(F,{ref:s,children:r(Y,{variant:"/landscape_incredible",data:h,onClick:()=>{},isModalChild:!0,showText:!0})})]})}const St=M.div`
  outline: hotpink solid 5px;
  height: fit-content;
  width: 95%;
  display: flex;
  justify-content: center;
`;function H(){const[e,t]=p.exports.useState(),s=p.exports.createRef(),o="https://gateway.marvel.com/v1/public/",[n,i]=p.exports.useState({path:"series",options:{headers:{"Content-Type":"application/json",Accept:"application/json",referer:"http://localhost:3000"}},queryParams:{limit:100,events:"314,315,238"}}),[h,m]=p.exports.useState({}),[d,f]=W(o),{data:l,isLoading:u,error:w}=d,a=c=>{s.current.showModal(),m(v=>c)},y=c=>{c?a(c):console.log(c)};return p.exports.useEffect(()=>{var v,j;f(n);const c=(j=(v=l==null?void 0:l.data)==null?void 0:v.results)!=null?j:l==null?void 0:l.results;c&&c.filter(C=>C.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"),t(C=>c)},[n]),console.log(e),g(_,{children:[g(St,{children:[u&&"loading",e&&r(U,{data:e,header:"title",propsClickHandler:y})]}),r(F,{ref:s,children:r(Y,{variant:"/landscape_incredible",data:h,onClick:()=>{},isModalChild:!0,showText:!0})})]})}tt.render(r(et.StrictMode,{children:r(st,{children:r(nt,{children:g(L,{path:"/apparentlyapis/",element:r(xt,{}),children:[r(L,{index:!0,element:r(H,{})}),r(L,{path:"/apparentlyapis/:page",element:r(H,{})}),r(L,{path:"/apparentlyapis/test",element:r(Nt,{})})]})})})}),document.getElementById("root"));
