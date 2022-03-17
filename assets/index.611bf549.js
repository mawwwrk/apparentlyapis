var P=Object.defineProperty,U=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&j(e,n,t[n]);if(I)for(var n of I(t))H.call(t,n)&&j(e,n,t[n]);return e},A=(e,t)=>U(e,q(t));import{j as L,R as _,s as g,U as T,L as R,O as B,r as a,u as G,a as Y,B as K,b as Q,c as S}from"./vendor.2bc4755c.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};V();const r=L.exports.jsx,w=L.exports.jsxs,N=L.exports.Fragment;class W extends _.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,n){console.log(t,n)}render(){return this.state.hasError?r("h1",{children:"Something went wrong."}):this.props.children}}var J="/apparentlyapis/assets/MCU_Films_Logos.4720c1f2.webp",X="/apparentlyapis/assets/logo.ecc203fb.svg",Z="/apparentlyapis/assets/Marvel_Logo.7e3f489f.svg";function ee(e){const t=new Image;return t.src=e,{width:t.width,height:t.height,aspectRatio:`${t.width} / ${t.height}`}}const te=g.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
`,re=T`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`,ne=g.div.attrs(e=>{const{width:t,aspectRatio:n}=ee(e.imgsrc);return A(E({},e),{width:t,aspectRatio:n})})`
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
`;function se(e){return r(N,{children:r(te,{className:"marquee-container",children:r(ne,E({className:"marquee-image"},e))})})}function oe(){return w("header",{className:"App-header",children:[w("div",{className:"App-logo",children:[r("img",{src:X,className:"logo react-logo",alt:"react logo"}),r("img",{src:Z,className:"logo marvel-logo",alt:"marvel"})]}),r(se,{imgsrc:J,animSeconds:"180"})]})}function ae(){return w("div",{id:"navbar",children:[r(R,{to:"/apparentlyapis/characters",children:r("h5",{children:"Characters"})}),r(R,{to:"/apparentlyapis/stories",children:r("h5",{children:" Stories"})}),r(R,{to:"/apparentlyapis/events",children:r("h5",{children:"Events"})}),r(R,{to:"/apparentlyapis/comics",children:r("h5",{children:"Comics"})})]})}function ie(){return w("div",{className:"App",children:[r(oe,{}),r(ae,{}),r("div",{className:"container",children:r(W,{children:r(B,{})})})]})}function M(e){var p,d,u,f;const{propsClickHandler:t,data:n,variant:c,isModalChild:s}=e,o=(d=(p=n==null?void 0:n.name)!=null?p:n==null?void 0:n.title)!=null?d:"none",i=(u=n==null?void 0:n.description)!=null?u:"",v=c!=null?c:"/portrait_medium",l=(f=e==null?void 0:e.showText)!=null?f:!1,b=()=>{!s&&console.log(o),t&&t(n)};let h;try{h=`${n.thumbnail.path}${v}.${n.thumbnail.extension}`}catch{console.debug("no src"),h=void 0}return w("div",{className:"card",onClick:b,"aria-hidden":"true",children:[r("h2",{children:l&&o}),h&&r("img",{className:"thumbnail",src:h,alt:""}),r("p",{children:i!==void 0&&l&&i})]})}function ce(){return"b1e589bdcf49a1e7df3c58fbf7fcf188"}const le="https://gateway.marvel.com",de="/v1/public/",ue="series",pe=(e={})=>Object.entries(e).map(([t,n])=>`&${t}=${n}`).join(""),F=(e=ue)=>`${le}${de}${e}?apikey=${ce()}`,he=(e,t)=>`${e}${pe(t)}`;function D(e,t){const[n,c]=a.exports.useState(null),[s,o]=a.exports.useState(!1),[i,v]=a.exports.useState(!1),[l,b]=a.exports.useState([]),[h,p]=a.exports.useState(!1),d=new AbortController,{signal:u}=d,f=a.exports.useRef(50),k={limit:f.current,offset:f.current*t},C={signal:u,headers:new Headers({referer:"developer.marvel.com/"})};return a.exports.useEffect(()=>{t===1&&b([]);const m=he(e,k);return(async()=>{try{const x=await fetch(m,C);if(x.status!==200)throw new Error(`${x.status}: ${x.statusText}`);const $=await x.json();if($.code!==200)return $;c($),o(!1),v(!1),b([...l,...$.data.results]),p($.data.total>l.length+f.current)}catch(x){return v(!0),o(!1),x}})(),()=>{d.abort()}},[e,t]),{data:n,results:l,isLoading:s,isError:i,hasMore:h}}const fe=g.div`
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
`;g.p`
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
`;g.div`
  transition: all 1s ease-in-out;
`;function me(){const e=F("series"),[t,n]=a.exports.useState(e),[c,s]=a.exports.useState(0),o=a.exports.useRef(),{results:i,data:v,isLoading:l,isError:b,hasMore:h}=D(t,c),p=a.exports.useCallback(d=>{l||(o.current&&o.current.disconnect(),o.current=new IntersectionObserver(u=>{u[0].isIntersecting&&s(f=>f+1)}),d&&o.current.observe(d))},[l,h]);return r(N,{children:r(fe,{children:i&&Array.isArray(i)&&i.map((d,u)=>i.length===u+1?r("div",{ref:p},u):r(M,{data:d,variant:"/portrait_incredible"},d.id))})})}var ge="/apparentlyapis/assets/avbg.6a79a5db.png";const ve=g.dialog.attrs(e=>{const{open:t}=e;return{open:t}})`
  height: fit-content;
  width: fit-content;
  position: fixed;
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
`,be=a.exports.forwardRef(function(t,n){const{children:c,open:s}=t;return r(ve,{className:"Modal",ref:n,open:s,children:c})}),xe=g.div`
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
`;g.p`
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
`;g.div`
  transition: all 1s ease-in-out;
`;function O(){const t=G().page||"series",n=F(t),[c,s]=a.exports.useState(n),[o,i]=a.exports.useState(0),v=a.exports.useRef(),l=a.exports.useRef(),[b,h]=a.exports.useState(),{results:p,data:d,isLoading:u,isError:f,hasMore:k}=D(c,o);console.log(d);const C=a.exports.useCallback(m=>{u||(l.current&&l.current.disconnect(),l.current=new IntersectionObserver(y=>{y[0].isIntersecting&&i(x=>x+1)}),m&&l.current.observe(m))},[u,k]);return a.exports.useEffect(()=>(i(m=>0),()=>{}),[t]),w(N,{children:[r(xe,{children:p&&Array.isArray(p)&&p.map((m,y)=>p.length===y+1?r("div",{ref:C},y):r(M,{data:m,variant:"/portrait_incredible",onClick:()=>{h(m),v.current.showModal()}},m.resourceURI))}),r(be,{ref:v,children:b?r(M,{data:b,variant:"/landscape_incredible"}):null})]})}Y.render(r(_.StrictMode,{children:r(K,{children:r(Q,{children:w(S,{path:"/apparentlyapis/",element:r(ie,{}),children:[r(S,{index:!0,element:r(O,{})}),r(S,{path:"/apparentlyapis/:page",element:r(O,{})}),r(S,{path:"/apparentlyapis/test",element:r(me,{})})]})})})}),document.getElementById("root"));
