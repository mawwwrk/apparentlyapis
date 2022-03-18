var q=Object.defineProperty,P=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var j=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&j(e,r,t[r]);if(L)for(var r of L(t))B.call(t,r)&&j(e,r,t[r]);return e},A=(e,t)=>P(e,U(t));import{j as E,R as _,s as w,U as D,L as y,O as T,r as i,u as G,a as Y,B as K,b as Q,c as M}from"./vendor.2bc4755c.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};V();const n=E.exports.jsx,v=E.exports.jsxs,H=E.exports.Fragment;class W extends _.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,r){console.log(t,r)}render(){return this.state.hasError?n("h1",{children:"Something went wrong."}):this.props.children}}var J="/apparentlyapis/assets/MCU_Films_Logos.4720c1f2.webp",X="/apparentlyapis/assets/logo.ecc203fb.svg",Z="/apparentlyapis/assets/Marvel_Logo.7e3f489f.svg";function ee(e){const t=new Image;return t.src=e,{width:t.width,height:t.height,aspectRatio:`${t.width} / ${t.height}`}}const te=w.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`,re=D`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`,ne=w.div.attrs(e=>{const{width:t,aspectRatio:r}=ee(e.imgsrc);return A(C({},e),{width:t,aspectRatio:r})})`
  animation: ${re} ${e=>e.animSeconds}s linear infinite;
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
`;function se(e){return n(H,{children:n(te,{className:"marquee-container",children:n(ne,C({className:"marquee-image"},e))})})}function oe(){return v("header",{className:"App-header",children:[v("div",{className:"App-logo",children:[n("img",{src:X,className:"logo react-logo",alt:"react logo"}),n("img",{src:Z,className:"logo marvel-logo",alt:"marvel"})]}),n(se,{imgsrc:J,animSeconds:"180"})]})}function ae(){return v("div",{id:"navbar",children:[n(y,{to:"/apparentlyapis/characters",children:n("h5",{children:"Characters"})}),n(y,{to:"/apparentlyapis/series",children:n("h5",{children:" Series"})}),n(y,{to:"/apparentlyapis/events",children:n("h5",{children:"Events"})}),n(y,{to:"/apparentlyapis/comics",children:n("h5",{children:"Comics"})})]})}function ie(){return v("div",{className:"App",children:[n(oe,{}),n(ae,{}),n("div",{className:"container",children:n(W,{children:n(T,{})})})]})}function I(e){var p,x,m,g;const{propsClickHandler:t,data:r,variant:c,isModalChild:s}=e,a=(x=(p=r==null?void 0:r.name)!=null?p:r==null?void 0:r.title)!=null?x:"none",l=(m=r==null?void 0:r.description)!=null?m:"",f=c!=null?c:"/portrait_medium",u=(g=e==null?void 0:e.showText)!=null?g:!1,b=()=>{!s&&t&&t(r)};let h;try{h=`${r.thumbnail.path}${f}.${r.thumbnail.extension}`}catch{console.debug("no src"),h=void 0}return v("div",{className:"card",onClick:b,"aria-hidden":"true",children:[n("h2",{children:u&&a}),h&&n("img",{className:"thumbnail",src:h,alt:""}),n("p",{children:l!==void 0&&u&&l})]})}function ce(){return"b1e589bdcf49a1e7df3c58fbf7fcf188"}const le="https://gateway.marvel.com",de="/v1/public/",ue="series",pe=(e={})=>Object.entries(e).map(([t,r])=>`&${t}=${r}`).join(""),he=e=>{const t=e.includes("?")?"&":"?";return`${e}${t}apikey=${ce()}`},O=(e=ue)=>he(`${le}${de}${e}`),fe=(e,t)=>`${e}${pe(t)}`;function me(e,t){const[r,c]=i.exports.useState(null),[s,a]=i.exports.useState(!1),[l,f]=i.exports.useState(!1),[u,b]=i.exports.useState([]),[h,p]=i.exports.useState(!1),x=new AbortController,{signal:m}=x,g=i.exports.useRef(50),$={limit:g.current,offset:g.current*t},k={signal:m,headers:new Headers({referer:"developer.marvel.com/"})};return i.exports.useEffect(()=>{const R=fe(e,$);return(async()=>{try{const o=await fetch(R,k);if(o.status!==200)throw new Error(`${o.status}: ${o.statusText}`);const d=await o.json();if(d.code!==200)return d;c(d),a(!1),f(!1),b(S=>[...t===0?[]:S,...d.data.results]),p(d.data.total>u.length+g.current)}catch(o){return f(!0),a(!1),o}})(),()=>{x.abort()}},[e,t]),{data:r,results:u,isLoading:s,isError:l,hasMore:h}}var ge="/apparentlyapis/assets/avbg.6a79a5db.png";const ve=w.dialog.attrs(e=>{const{open:t}=e;return{open:t}})`
  height: fit-content;
  width: fit-content;
  position: fixed;
  pointer-events: fill;
  /* ${e=>e.open?"display: block;":"display: none;"} */

  &&::backdrop {
    background-image: url(${ge});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    opacity: 0.4;
  }
  && > * {
    max-width: 500px;
    max-height: 500px;
  }
`,be=i.exports.forwardRef(function(t,r){const{children:c,open:s}=t;return n(ve,{className:"Modal",ref:r,open:s,children:c})}),xe=w.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;

  && p {
    margin: 0 auto;
    max-width: 200px;
  }
`;w.p`
  font-size: 1.5rem;
  &&::before,
  &&::after {
    font-weight: bold;
    color: darksalmon;
    width: 100%;
    height: 1px;
  }
  &&::before {
    content: "!>";
  }
  &&::after {
    content: "!<";
  }
`;w.div`
  transition: all 1s ease-in-out;
`;function F(){const e=G(),t=e.page||"events",r=O(t),[c,s]=i.exports.useState(r),[a,l]=i.exports.useState(0),f=i.exports.createRef(),u=i.exports.useRef(),[b,h]=i.exports.useState(),{results:p,data:x,isLoading:m,isError:g,hasMore:$}=me(c,a),k=i.exports.useCallback(o=>{m||(u.current&&u.current.disconnect(),u.current=new IntersectionObserver(d=>{d[0].isIntersecting&&l(S=>S+1)}),o&&u.current.observe(o))},[m,$]);i.exports.useEffect(()=>(l(o=>0),s(o=>O(t)),()=>{}),[t]);const R=o=>{h(d=>o),f.current.showModal()},N=o=>{o?R(o):console.log(o)};return v(H,{children:[n(xe,{children:p&&Array.isArray(p)&&p.map((o,d)=>p.length===d+1?n("div",{ref:k},d):n(I,{data:o,endpoint:e.page,variant:"/portrait_incredible",propsClickHandler:N},o.resourceURI))}),n(be,{ref:f,children:b&&n(I,{data:b,variant:"/landscape_incredible",isModalChild:!0,showText:!0})})]})}Y.render(n(_.StrictMode,{children:n(K,{children:n(Q,{children:v(M,{path:"/apparentlyapis/",element:n(ie,{}),children:[n(M,{index:!0,element:n(F,{})}),n(M,{path:"/apparentlyapis/:page",element:n(F,{})})]})})})}),document.getElementById("root"));
