import{j as e}from"./index-Cws_IRuu.js";import{r as n}from"./index-C5e9SFkp.js";import"./create-nonce-GGcjuytk.js";import{q as fe,A as he}from"./useConsolidatedRef-FEYVq0tu.js";import{w as ve}from"./withConfiguration-B9Eslcrb.js";import"./index-Dy23IbDT.js";const p=fe.div(()=>he`
    width: 100%;

    .video-player {
      display: block;
      max-width: 100%;
      border-radius: 0.375rem;
      background-color: #000;
    }

    .loading-message,
    .no-video-message {
      padding: 1rem;
      color: #6b7280;
      font-style: italic;
    }

    .error-message {
      padding: 1rem;
      color: #dc2626;
    }
  `),L={default:"https://www.w3schools.com/html/mov_bbb.mp4",autoplay:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",responsive:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"};function ne(I){const{getPConnect:m,width:v="100%",height:y="auto",autoplay:P=!1,muted:b=!1,loop:x=!1,isBase64:C=!1,videoSource:s,testId:i,datapage:d,datapageparams:W}=I,[ie,Q]=n.useState(null),[de,R]=n.useState(!1),[T,q]=n.useState(null),l=n.useRef(null);try{l.current=m&&typeof m=="function"?m():null}catch{l.current=null}const f=!l.current||!m||typeof m!="function"||!window.PCore,B=n.useCallback(t=>{if(!t)return{};try{const a=A=>{if(A===null||A==="")return A;const r=A.split(":");if(r[1].trim().startsWith(".")){let c=r[1].trim();const F=c.lastIndexOf(".");if(F===0)c=l.current.getValue(c);else{const me=c.substring(F);c=l.current.getValue(me,`caseInfo.content${c.substring(0,F)}`)}return`${JSON.stringify(r[0].trim())}:${JSON.stringify(c)}`}return`${JSON.stringify(r[0].trim())}:${JSON.stringify(r[1].trim())}`},o=`{${t.split(",").map(a).join(",")}}`;return JSON.parse(o)}catch{return{}}},[]),w=n.useCallback((t,a)=>{const o=B(a);let A=L.default;return o.videoId==="autoplay-video"?A=L.autoplay:o.videoId==="responsive-video"&&(A=L.responsive),{videoSource:A,width:o.width??v,height:o.height??y,autoplay:o.autoplay??P,muted:o.muted??b,loop:o.loop??x}},[B,v,y,P,b,x]),Z=n.useCallback(async()=>{if(!d)return;if(f){Q(w(d,W));return}const t=l.current;if(t){R(!0),q(null);try{const a=window.PCore;if(!a)throw new Error("PCore not available");const o=B(W),A=await a.getDataPageUtils().getPageDataAsync(d,t.getContextName&&t.getContextName(),o),r=(A==null?void 0:A.data)??A;if(r)Q(r);else throw new Error("No data returned from data page")}catch(a){q(`Failed to load video data: ${a instanceof Error?a.message:"Unknown error"}`)}finally{R(!1)}}},[d,W,f,w,B]);if(n.useEffect(()=>{s===void 0&&(d?Z():f&&Q(w("D_VideoData",void 0)))},[d,s,Z,f,w]),s!==void 0){if(!s)return e.jsx(p,{"data-testid":i,children:e.jsx("div",{className:"no-video-message",children:"No video source provided"})});const t=C?s.startsWith("data:")?s:`data:video/mp4;base64,${s}`:s,a={controls:!0,width:v,height:y,autoPlay:P,muted:b,loop:x,className:"video-player"};return e.jsx(p,{"data-testid":i,children:C?e.jsxs("video",{...a,children:[e.jsx("source",{src:t,type:"video/mp4"}),e.jsx("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video tag."]}):e.jsxs("video",{...a,children:[e.jsx("source",{src:t,type:"video/mp4"}),e.jsx("source",{src:t,type:"video/webm"}),e.jsx("source",{src:t,type:"video/ogg"}),e.jsx("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video tag."]})})}if(!d&&!f)return e.jsx(p,{"data-testid":i,children:e.jsx("div",{className:"no-video-message",children:"No data page configured"})});if(de)return e.jsx(p,{"data-testid":i,children:e.jsx("div",{className:"loading-message",children:"Loading video…"})});if(T)return e.jsx(p,{"data-testid":i,children:e.jsx("div",{className:"error-message",children:T})});const{videoSource:h="",width:ce=v,height:pe=y,autoplay:le=P,muted:ue=b,loop:ge=x}=ie??{};if(!h)return e.jsx(p,{"data-testid":i,children:e.jsx("div",{className:"no-video-message",children:"No video source provided from data page"})});const j=C?h.startsWith("data:")?h:`data:video/mp4;base64,${h}`:h,G={controls:!0,width:ce,height:pe,autoPlay:le,muted:ue,loop:ge,className:"video-player"};return e.jsx(p,{"data-testid":i,children:C?e.jsxs("video",{...G,children:[e.jsx("source",{src:j,type:"video/mp4"}),e.jsx("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video tag."]}):e.jsxs("video",{...G,children:[e.jsx("source",{src:j,type:"video/mp4"}),e.jsx("source",{src:j,type:"video/webm"}),e.jsx("source",{src:j,type:"video/ogg"}),e.jsx("track",{kind:"captions",src:"",srcLang:"en",label:"English"}),"Your browser does not support the video tag."]})})}const ye=ve(ne);ne.__docgenInfo={description:"",methods:[],displayName:"PegaFieldVideo",props:{getPConnect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => any",signature:{arguments:[],return:{name:"any"}}},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:""},muted:{required:!1,tsType:{name:"boolean"},description:""},loop:{required:!1,tsType:{name:"boolean"},description:""},datapage:{required:!1,tsType:{name:"string"},description:""},datapageparams:{required:!1,tsType:{name:"string"},description:""},isBase64:{required:!1,tsType:{name:"boolean"},description:`If true, the videoSource is treated as a Base64-encoded string.
 If false (default), it is treated as a URL.`},videoSource:{required:!1,tsType:{name:"string"},description:"Direct video source (Base64 string or URL). When provided, skips data-page fetching."},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["Partial"]};const u={width:"100%",height:"auto",autoplay:!1,muted:!1,loop:!1,isBase64:!1,testId:"pega-field-video"},Pe={...u,autoplay:!0,muted:!0,datapageparams:"videoId:autoplay-video"},be={...u,datapageparams:"videoId:responsive-video"},xe={...u,datapage:"D_VideoData",datapageparams:"videoId:default-video"},Ce={...u,isBase64:!0,videoSource:"AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAJibW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAFfkAABX5AAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAe50cmFrAAAAYHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAABX5AAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAABAAAAAQAAAAABhm1kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAABX5AAAV+QVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAATFtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADxc3RibAAAAIlzdHNkAAAAAAAAAAEAAAB5YXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAABAAEASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAACNhdmNDAWQACP/hAAxnZAAIrCtAHgiJ+WYBAARozjiAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABhzdHN6AAAAAAAAAAAAAAABAAAAIQAAABRzdGNvAAAAAAAAAAEAAAKKAAAAKW1kYXQAAAAMZ2QACKwrQB4IiflmAAAABGjOOIAAAAAFZYiAhAA="},De={title:"Pega/Field/Video",component:ye,excludeStories:/.*Data$/,argTypes:{width:{control:"text",description:"Width of the video player"},height:{control:"text",description:"Height of the video player"},autoplay:{control:"boolean",description:"Autoplay the video on load"},muted:{control:"boolean",description:"Mute the video"},loop:{control:"boolean",description:"Loop the video"},isBase64:{control:"boolean",description:"When true, the videoSource from the data page is treated as a Base64-encoded string. When false (default), it is treated as a URL."},datapage:{control:"text",description:"Pega data page name"},datapageparams:{control:"text",description:"Comma-separated key:value parameters for the data page"}}},g=()=>({getActionsApi:()=>({updateFieldValue:()=>{},triggerFieldChange:()=>{}}),getContextName:()=>"app/primary_1",getValue:I=>I,ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}}),S={args:{...u,getPConnect:g,autoplay:!0,muted:!0}},k={args:{...Pe,getPConnect:g}},N={args:{...be,getPConnect:g}},D={args:{...u,loop:!0,getPConnect:g}},E={args:{...xe,getPConnect:g}},V={name:"Base64 Source",args:{...Ce,getPConnect:g,autoplay:!0}};var H,Y,_;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...configProps,
    getPConnect: basePConnect as any,
    autoplay: true,
    muted: true
  }
}`,...(_=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var $,O,J;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...configPropsAutoplay,
    getPConnect: basePConnect as any
  }
}`,...(J=(O=k.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var M,X,z;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...configPropsResponsive,
    getPConnect: basePConnect as any
  }
}`,...(z=(X=N.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var U,K,ee;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...configProps,
    loop: true,
    getPConnect: basePConnect as any
  }
}`,...(ee=(K=D.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var Ae,te,ae;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...configPropsWithDataPage,
    getPConnect: basePConnect as any
  }
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,se,re;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Base64 Source',
  args: {
    ...configPropsBase64,
    getPConnect: basePConnect as any,
    autoplay: true
  }
}`,...(re=(se=V.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const Ee=["Default","Autoplay","Responsive","Loop","WithDataPage","Base64Video"];export{k as Autoplay,V as Base64Video,S as Default,D as Loop,N as Responsive,E as WithDataPage,Ee as __namedExportsOrder,De as default};
