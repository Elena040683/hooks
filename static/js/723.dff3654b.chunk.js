"use strict";(self.webpackChunkhooks=self.webpackChunkhooks||[]).push([[723],{85:(e,t,s)=>{s.d(t,{A:()=>i});const a={gradientColor:"SolidTitle_gradientColor__1rY8i",title3:"SolidTitle_title3__-xwWe SolidTitle_gradientColor__1rY8i",distort:"SolidTitle_distort__8t70A"};var r=s(270),n=s(43),o=s(579);function i(e){let{titleText:t}=e;const s=(0,n.useRef)(),i=(0,n.useCallback)((()=>{r.os.to("feDisplacementMap",1,{attr:{scale:0},ease:"circ.out"},1),r.os.to("feTurbulence",1,{attr:{baseFrequency:"2.01 .01"},ease:"circ.out"},1),r.os.to(s.current,1,{fontVariationSettings:"'wght' 700",ease:"back.out"},1)}),[]),c=(0,n.useCallback)((()=>{r.os.to("feDisplacementMap",1,{attr:{scale:100},ease:"circ.out"}),r.os.to("feTurbulence",1,{attr:{baseFrequency:"2.08 .08"},ease:"circ.out"},1),r.os.to(s.current,1,{fontVariationSettings:"'wght' 650",ease:"back.out"})}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("h2",{className:a.title3,onMouseEnter:c,onMouseLeave:i,ref:s,children:[t," "]}),(0,o.jsx)("svg",{className:a.distort,children:(0,o.jsxs)("filter",{id:"distortionFilter",children:[(0,o.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"2.01 .01",numOctaves:"5",seed:"2",stitchTiles:"noStitch",x:"0%",y:"0%",width:"100%",height:"100%",result:"noise"}),(0,o.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"0",xChannelSelector:"R",yChannelSelector:"B",x:"0%",y:"0%",width:"100%",height:"100%",filterUnits:"userSpaceOnUse"})]})})]})}},723:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(43),r=s(579);function n(e){let{getSearchValues:t}=e;const[s,n]=(0,a.useState)(""),[o,i]=(0,a.useState)(5),c=e=>{const{name:t,value:s}=e.target;switch(t){case"searchValue":n(s);break;case"perPage":i(s)}};return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log("BEFORE FETCH",s,o),t(s,o),n(""),i(2)},children:[(0,r.jsx)("input",{type:"text",name:"searchValue",onChange:c,value:s,placeholder:"value"}),(0,r.jsx)("input",{type:"number",name:"perPage",onChange:c,value:o,placeholder:"how many results?"}),(0,r.jsx)("button",{type:"submit",children:"search"})]})}var o=s(213);const i={imagesList:"ImagesList_imagesList__2hk-h",loadMoreBtn:"ImagesList_loadMoreBtn__TMNNX"},c=new class{constructor(e,t){this.base_url=e,this.api_key=t,this._searchQuery="",this._page=1,this._perPage=5,this.endpoint=""}get searchQuery(){return this._searchQuery}set searchQuery(e){return this._searchQuery=e}get page(){return this._page}set page(e){return this._page+=e}resetPage(){return this._page=1,this._perPage=5}get perPage(){return this._perPage}set perPage(e){return this._perPage=e}searchPhotos(){o.A.defaults.baseURL=this.base_url,o.A.defaults.headers.common.Authorization=this.api_key,this.endpoint="search",console.log("searchQuery:",this.searchQuery,"page:",this.page,"perPage:",this.perPage);let e="?query=".concat(this.searchQuery,"&page=").concat(this.page,"&per_page=").concat(this.perPage),t=this.endpoint+e;return o.A.get(t).then((e=>e.data)).then((e=>e.photos)).catch((e=>{console.log(e)}))}}("https://api.pexels.com/v1/","C0c8jsEIkIzHhJ34LClN7vk5fJStc0qpj2n2MRQ5zthwSKBkRibKG5uF");function l(e){let{searchValue:t,perPage:s}=e;const[n,o]=(0,a.useState)([]),[l,h]=(0,a.useState)("init");(0,a.useEffect)((()=>{t.trim()&&(h("pending"),c.resetPage(),c.searchQuery=t,c.perPage=s,c.searchPhotos().then((e=>{console.log(e),h("success"),o(e)})).catch((e=>{console.log(e),h("error")})))}),[t,s]);const u=()=>{c.page=1,console.log(c.page),c.searchPhotos().then((e=>{console.log(e),o((t=>[...t,...e])),h("success")})).catch((e=>{h("error")}))};return"init"===l?(0,r.jsx)("h1",{children:"Hello! Search something."}):"pending"===l?(0,r.jsx)("h1",{children:"Wait please!"}):"success"===l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("ul",{className:i.imagesList,children:n.length>0&&n.map((e=>(0,r.jsx)("li",{children:(0,r.jsx)("img",{src:e.src.small,alt:e.alt})},e.id)))}),(0,r.jsx)("button",{type:"button",onClick:u,className:i.loadMoreBtn,children:"Load more"})]}):"error"===l?(0,r.jsx)("h1",{children:"ALARMA!!!"}):void 0}console.log(c);s(85);function h(){const[e,t]=(0,a.useState)(""),[s,o]=(0,a.useState)(5);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Pexels"}),(0,r.jsx)(n,{getSearchValues:(e,s)=>{t(e),o(s)}}),(0,r.jsx)(l,{searchValue:e,perPage:s})]})}}}]);
//# sourceMappingURL=723.dff3654b.chunk.js.map