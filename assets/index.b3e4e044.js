var U=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var O=(e,t,n)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&O(e,n,t[n]);if(A)for(var n of A(t))B.call(t,n)&&O(e,n,t[n]);return e},_=(e,t)=>q(e,z(t));import{j as N,R as H,s as v,U as D,L as y,O as G,r as i,u as Y,a as K,B as Q,b as V,c as $}from"./vendor.2bc4755c.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};W();const r=N.exports.jsx,b=N.exports.jsxs,I=N.exports.Fragment;class J extends H.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,n){console.log(t,n)}render(){return this.state.hasError?r("h1",{children:"Something went wrong."}):this.props.children}}var X="/apparentlyapis/assets/MCU_Films_Logos.4720c1f2.webp",Z="/apparentlyapis/assets/logo.ecc203fb.svg",ee="/apparentlyapis/assets/Marvel_Logo.7e3f489f.svg";function te(e){const t=new Image;return t.src=e,{width:t.width,height:t.height,aspectRatio:`${t.width} / ${t.height}`}}const re=v.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`,ne=D`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`,se=v.div.attrs(e=>{const{width:t,aspectRatio:n}=te(e.imgsrc);return _(M({},e),{width:t,aspectRatio:n})})`
  animation: ${ne} ${e=>e.animSeconds}s linear infinite;
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
`;function oe(e){return r(I,{children:r(re,{className:"marquee-container",children:r(se,M({className:"marquee-image"},e))})})}function ae(){return b("header",{className:"App-header",children:[b("div",{className:"App-logo",children:[r("img",{src:Z,className:"logo react-logo",alt:"react logo"}),r("img",{src:ee,className:"logo marvel-logo",alt:"marvel"})]}),r(oe,{imgsrc:X,animSeconds:"180"})]})}function ie(){return b("div",{id:"navbar",children:[r(y,{to:"/apparentlyapis/characters",children:r("h5",{children:"Characters"})}),r(y,{to:"/apparentlyapis/series",children:r("h5",{children:" Series"})}),r(y,{to:"/apparentlyapis/events",children:r("h5",{children:"Events"})}),r(y,{to:"/apparentlyapis/comics",children:r("h5",{children:"Comics"})})]})}function ce(){return b("div",{className:"App",children:[r(ae,{}),r(ie,{}),r("div",{className:"container",children:r(J,{children:r(G,{})})})]})}function E(e){var h,u,p,g;const{propsClickHandler:t,data:n,variant:l,isModalChild:s}=e,o=(u=(h=n==null?void 0:n.name)!=null?h:n==null?void 0:n.title)!=null?u:"none",c=(p=n==null?void 0:n.description)!=null?p:"",x=l!=null?l:"/portrait_medium",d=(g=e==null?void 0:e.showText)!=null?g:!1,w=()=>{!s&&console.log(o),t&&t(n)};let m;try{m=`${n.thumbnail.path}${x}.${n.thumbnail.extension}`}catch{console.debug("no src"),m=void 0}return b("div",{className:"card",onClick:w,"aria-hidden":"true",children:[r("h2",{children:d&&o}),m&&r("img",{className:"thumbnail",src:m,alt:""}),r("p",{children:c!==void 0&&d&&c})]})}function le(){return"b1e589bdcf49a1e7df3c58fbf7fcf188"}const de="https://gateway.marvel.com",ue="/v1/public/",pe="series",he=(e={})=>Object.entries(e).map(([t,n])=>`&${t}=${n}`).join(""),L=(e=pe)=>`${de}${ue}${e}?apikey=${le()}`,fe=(e,t)=>`${e}${he(t)}`;function P(e,t){const[n,l]=i.exports.useState(null),[s,o]=i.exports.useState(!1),[c,x]=i.exports.useState(!1),[d,w]=i.exports.useState([]),[m,h]=i.exports.useState(!1),u=new AbortController,{signal:p}=u,g=i.exports.useRef(50),k={limit:g.current,offset:g.current*t},C={signal:p,headers:new Headers({referer:"developer.marvel.com/"})};return i.exports.useEffect(()=>{const R=fe(e,k);return(async()=>{try{const a=await fetch(R,C);if(a.status!==200)throw new Error(`${a.status}: ${a.statusText}`);const f=await a.json();if(f.code!==200)return f;l(f),o(!1),x(!1),w(S=>[...t===0?[]:S,...f.data.results]),h(f.data.total>d.length+g.current)}catch(a){return x(!0),o(!1),a}})(),()=>{u.abort()}},[e,t]),{data:n,results:d,isLoading:s,isError:c,hasMore:m}}const me=v.div`
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
`;v.p`
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
`;v.div`
  transition: all 1s ease-in-out;
`;function ge(){const e=L("series"),[t,n]=i.exports.useState(e),[l,s]=i.exports.useState(0),o=i.exports.useRef(),{results:c,data:x,isLoading:d,isError:w,hasMore:m}=P(t,l),h=i.exports.useCallback(u=>{d||(o.current&&o.current.disconnect(),o.current=new IntersectionObserver(p=>{p[0].isIntersecting&&s(g=>g+1)}),u&&o.current.observe(u))},[d,m]);return r(I,{children:r(me,{children:c&&Array.isArray(c)&&c.map((u,p)=>c.length===p+1?r("div",{ref:h},p):r(E,{data:u,variant:"/portrait_incredible"},u.id))})})}var ve="/apparentlyapis/assets/avbg.6a79a5db.png";const xe=v.dialog.attrs(e=>{const{open:t}=e;return{open:t}})`
  height: fit-content;
  width: fit-content;
  position: fixed;
  /* ${e=>e.open?"display: block;":"display: none;"} */

  &&::backdrop {
    background-image: url(${ve});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    opacity: 0.4;
  }
  && > * {
    max-width: 500px;
    max-height: 500px;
  }
`,be=i.exports.forwardRef(function(t,n){const{children:l,open:s}=t;return r(xe,{className:"Modal",ref:n,open:s,children:l})}),we=v.div`
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
`;v.p`
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
`;v.div`
  transition: all 1s ease-in-out;
`;function F(){const t=Y().page||"events",n=L(t),[l,s]=i.exports.useState(n),[o,c]=i.exports.useState(0),x=i.exports.createRef(),d=i.exports.useRef(),[w,m]=i.exports.useState(),{results:h,data:u,isLoading:p,isError:g,hasMore:k}=P(l,o);console.log(u);const C=i.exports.useCallback(a=>{p||(d.current&&d.current.disconnect(),d.current=new IntersectionObserver(f=>{f[0].isIntersecting&&c(S=>S+1)}),a&&d.current.observe(a))},[p,k]);i.exports.useEffect(()=>(c(a=>0),s(a=>L(t)),()=>{}),[t]);const R=a=>{m(f=>a),x.current.showModal()},j=a=>{a?R(a):console.log(a)};return b(I,{children:[r(we,{children:h&&Array.isArray(h)&&h.map((a,f)=>h.length===f+1?r("div",{ref:C},f):r(E,{data:a,variant:"/portrait_incredible",propsClickHandler:j},a.resourceURI))}),r(be,{ref:x,children:r(E,{data:w,variant:"/landscape_incredible",isModalChild:!0,showText:!0})})]})}K.render(r(H.StrictMode,{children:r(Q,{children:r(V,{children:b($,{path:"/apparentlyapis/",element:r(ce,{}),children:[r($,{index:!0,element:r(F,{})}),r($,{path:"/apparentlyapis/:page",element:r(F,{})}),r($,{path:"/apparentlyapis/test",element:r(ge,{})})]})})})}),document.getElementById("root"));
