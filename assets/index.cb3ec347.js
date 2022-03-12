var V=Object.defineProperty,J=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var L=(t,e,r)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,M=(t,e)=>{for(var r in e||(e={}))q.call(e,r)&&L(t,r,e[r]);if(C)for(var r of C(e))E.call(e,r)&&L(t,r,e[r]);return t},N=(t,e)=>J(t,X(e));var U=(t,e)=>{var r={};for(var n in t)q.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&C)for(var n of C(t))e.indexOf(n)<0&&E.call(t,n)&&(r[n]=t[n]);return r};var F=(t,e,r)=>(L(t,typeof e!="symbol"?e+"":e,r),r),H=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var S=(t,e,r)=>(H(t,e,"read from private field"),r?r.call(t):e.get(t)),O=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},G=(t,e,r,n)=>(H(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);import{j as _,s as b,U as Z,L as P,O as tt,r as h,R as et,a as rt,B as nt,b as st,c as z}from"./vendor.30de0ab7.js";const ot=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};ot();var at="/apparentlyapis/assets/MCU_Films_Logos.4720c1f2.webp",it="/apparentlyapis/assets/logo.ecc203fb.svg",ct="/apparentlyapis/assets/Marvel_Logo.7e3f489f.svg";function lt(t){const e=new Image;return e.src=t,{width:e.width,height:e.height,aspectRatio:`${e.width} / ${e.height}`}}const dt=function(){const t=(...r)=>{let n,s=r.length;for(const[a,c]of r.entries())s*=s,n=a?parseInt(n+c,s):c;return String.fromCodePoint(n)},e=r=>atob(r).split("").filter(n=>n!==",").reduce((n,s,a,c)=>{const[f,m]=[c,n].map(l=>l.length),y=n[m-1];return a%2===0?n.push(s):n[m-1]=t(y,s),n},[]);return r=>e(r).join("")},o=_.exports.jsx,v=_.exports.jsxs,A=_.exports.Fragment,ht=b.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`,pt=Z`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`,ut=b.div.attrs(t=>{const{width:e,aspectRatio:r}=lt(t.imgsrc);return N(M({},t),{width:e,aspectRatio:r})})`
  animation: ${pt} ${t=>t.animSeconds}s linear infinite;
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
`;function mt(t){return o(A,{children:o(ht,{className:"marquee-container",children:o(ut,M({className:"marquee-image"},t))})})}function ft(){return v("header",{className:"App-header",children:[v("div",{className:"App-logo",children:[o("img",{src:it,className:"logo react-logo",alt:"react logo"}),o("img",{src:ct,className:"logo marvel-logo",alt:"marvel"})]}),o(mt,{imgsrc:at,animSeconds:"180"})]})}function gt(){return v("div",{id:"navbar",children:[o(P,{to:"/characters",children:o("h5",{children:"Characters"})}),o(P,{to:"/stories",children:o("h5",{children:" Stories"})}),o(P,{to:"/events",children:o("h5",{children:"Events"})}),o(P,{to:"/comics",children:o("h5",{children:"Comics"})})]})}function yt(){return v("div",{className:"App",children:[o(ft,{}),o(gt,{}),o("div",{className:"container",children:o(tt,{})})]})}function I(t){var u,p,g;const x=t,{propsClickHandler:e,data:w}=x,i=w,{description:r,thumbnail:n}=i,s=U(i,["description","thumbnail"]),{variant:a,isModalChild:c}=x,f=(p=(u=s==null?void 0:s.name)!=null?u:s==null?void 0:s.title)!=null?p:"none",m=a!=null?a:"/portrait_medium",y=(g=t==null?void 0:t.showText)!=null?g:!1;return v("div",{className:"card",onClick:()=>{!c&&console.log(f),e&&e(t.data)},children:[o("h2",{children:y&&f}),o("img",{className:"thumbnail",src:(n==null?void 0:n.path)&&(n==null?void 0:n.extension)&&`${path}${m}.${extension}`,alt:""}),");",o("p",{children:y&&r})]})}const vt=b.div.attrs(t=>{const{cols:e}=t;return{cols:e}})`
  display: grid;
  grid-template-columns: repeat(${t=>t.cols}, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
`,xt=t=>{const{children:e,cols:r}=t;return o(vt,{cols:r,children:e})};function B(t){const{data:e,propsClickHandler:r}=t,n=Math.floor(window.innerWidth*.8/100);return o(xt,{className:"card-container",cols:n,children:e?e.map(s=>o(I,{data:s,propsClickHandler:r},s.id)):""})}var bt="/apparentlyapis/assets/avbg.6a79a5db.png";const wt=b.dialog.attrs(t=>{const{open:e}=t;return{open:e}})`
  height: fit-content;
  width: fit-content;
  position: fixed;
  /* ${t=>t.open?"display: block;":"display: none;"} */

  &&::backdrop {
    background-image: url(${bt});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    opacity: 0.4;
  }
  && > * {
    max-width: 500px;
    max-height: 500px;
  }
`,K=h.exports.forwardRef(function(e,r){const{children:n}=e;return o(wt,{className:"Modal",ref:r,children:n})});var k,j;const R=class{constructor(e){O(this,j,void 0);F(this,"_queryParams");this.base=e,this.base=e,G(this,j,new Map([["apikey",S(R,k).key(S(R,k).string)]]))}set queryParams(e){var n;const r=(n=this._queryParams)!=null?n:S(this,j);if(typeof e=="object")for(const[s,a]of Object.entries(e))r.set(s,a);else if(Array.isArray(e))for(const[s,a]of e)r.set(s,a);this._queryParams=r}get queryParams(){return this._queryParams}};let D=R;k=new WeakMap,j=new WeakMap,O(D,k,{string:"NjIzMTY1MzUzODM5NjI2NCw2MzY2MzQzOTYxMzE2NTM3LDY0NjYzMzYzMzUzODY2NjIsNjYzNzY2NjM2NjMxMzgzOA==",key:dt()});class Mt extends D{constructor(e,r,n,s){super(e);this.base=e,this.path=r,this.options=s,this.queryParams=n,this.options=s,this.path=r}get url(){if(this.path){const e=new URL(this.path,this.base);if(this.queryParams)for(const[r,n]of this.queryParams)e.searchParams.set(r,n);return e.toString()}}}function Q(t){const[e,r]=h.exports.useState(t),[n,s]=h.exports.useState({path:"",queryParams:{},options:{}}),[a,c]=h.exports.useState(),[f,m]=h.exports.useState(!1),[y,l]=h.exports.useState(),x=new Mt(t,n.path,n.queryParams,n.options),w=i=>{var u,p;i!=null&&i.options||(i.options={headers:{"Content-Type":"application/json",Accept:"application/json",referer:"http://localhost:3000"}}),s(i),x.path=(u=i==null?void 0:i.path)!=null?u:"",x.queryParams=(p=i==null?void 0:i.queryParams)!=null?p:{limit:50},r(x.url),m(!0)};return h.exports.useEffect(()=>{!f||fetch(e,n.options).then(i=>i.json()).then(i=>(c(i),m(!1),i)).catch(i=>{l(i),m(!1)})},[f,n.options,e]),[{data:a,isLoading:f,error:y},w]}const kt=b.div`
  outline: hotpink solid 5px;
  height: fit-content;
  width: 95%;
  display: flex;
  justify-content: center;
`;function jt(){var g;const[t,e]=h.exports.useState(),r=h.exports.createRef(),n="http://gateway.marvel.com/v1/public/",[s,a]=h.exports.useState({path:"series",options:{headers:{"Content-Type":"application/json",Accept:"application/json",referer:"http://localhost:3000"}},queryParams:{limit:100,events:"314,315,238"}}),[c,f]=h.exports.useState({}),[m,y]=Q(n),{data:l,isLoading:x,error:w}=m,i=d=>{r.current.showModal(),f($=>d)},u=d=>{d.cardData?i(d.cardData):console.log(d.cardData)},p=(g=/(?<=public\/)\S+(?=\?|$|")/.exec(c==null?void 0:c.resourceURI))==null?void 0:g[0];return p&&a(d=>N(M({},d),{path:p,queryParams:{limit:20}})),h.exports.useEffect(()=>{var $,T;y(s);const d=(T=($=l==null?void 0:l.data)==null?void 0:$.results)!=null?T:l==null?void 0:l.results;d&&d.filter(Y=>Y.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"),e(Y=>d)},[s]),v(A,{children:[v(kt,{children:[x&&"loading",t&&o(B,{data:t,header:"title",propsClickHandler:u})]}),o(K,{ref:r,children:o(I,{variant:"/landscape_incredible",data:c,onClick:()=>{},isModalChild:!0,showText:!0})})]})}const Ct=b.div`
  height: fit-content;
  width: 95%;
  display: flex;
  justify-content: center;
`;function W(){const[t,e]=h.exports.useState(),r=h.exports.createRef(),n="http://gateway.marvel.com/v1/public/",[s,a]=h.exports.useState({path:"series",options:{headers:{"Content-Type":"application/json",Accept:"application/json",referer:"http://localhost:3000"}},queryParams:{limit:100,events:"314,315,238"}}),[c,f]=h.exports.useState({}),[m,y]=Q(n),{data:l,isLoading:x,error:w}=m,i=u=>{var g;r.current.showModal(),f(d=>u);const p=(g=/(?<=public\/)\S+(?=\?|$|")/.exec(c==null?void 0:c.resourceURI))==null?void 0:g[0];p&&a(d=>N(M({},d),{path:p,queryParams:{limit:20}}))};return h.exports.useEffect(()=>{var p,g;y(s);const u=(g=(p=l==null?void 0:l.data)==null?void 0:p.results)!=null?g:l==null?void 0:l.results;u&&u.filter(d=>d.thumbnail.path!=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"),e(d=>u)},[s]),v(A,{children:[v(Ct,{children:[x&&"loading",t&&o(B,{data:t,header:"title",propsClickHandler:i})]}),o(K,{ref:r,children:o(I,{variant:"/landscape_incredible",data:c,onClick:()=>{},isModalChild:!0,showText:!0})})]})}et.render(o(rt.StrictMode,{children:o(nt,{children:o(st,{children:v(z,{path:"/",element:o(yt,{}),children:[o(z,{index:!0,element:o(W,{})}),o(z,{path:"/:page",element:o(W,{})}),o(z,{path:"/test",element:o(jt,{})})]})})})}),document.getElementById("root"));
