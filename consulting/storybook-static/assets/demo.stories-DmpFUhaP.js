import{j as e}from"./index-Cws_IRuu.js";import{r as p}from"./index-C5e9SFkp.js";import"./create-nonce-GGcjuytk.js";import{q as B,A as H}from"./useConsolidatedRef-FEYVq0tu.js";import{w as K}from"./withConfiguration-B9Eslcrb.js";import{I as U}from"./Input-CuiGarE_.js";import"./index-Dy23IbDT.js";import"./Badges.test-ids-Cv4_ccaG.js";import"./iframe-D5cjZ3_e.js";import"./Label-Bgz81c9T.js";import"./BareButton-DwDNO_qX.js";const r={value:"",label:"Text Sample",placeholder:"Text Placeholder",testId:"Text-12345678",hideLabel:!1,readOnly:!1,required:!1,disabled:!1},m={value:".TextSample",hasSuggestions:!1},Y=B.div(()=>H`
    margin: 0px 0;

    .masked-input-container {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .eye-toggle-button {
      position: absolute;
      right: 8px;
      top: 70%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: background-color 0.2s ease, opacity 0.2s ease;

      &:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.15);
        transform: translateY(-50%) scale(0.95);
      }
    }

    .eye-icon {
      font-size: 16px;
      line-height: 1;
      user-select: none;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      transition: color 0.2s ease;
    }

    .eye-toggle-button:hover:not(:disabled) .eye-icon {
      color: #333;
    }

    .eye-toggle-button:disabled .eye-icon {
      color: #ccc;
    }

    /* Adjust input padding to make room for the eye icon */
    .masked-input-container input[type="text"],
    .masked-input-container input[type="password"] {
      padding-right: 40px !important;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .eye-toggle-button {
        right: 6px;
        padding: 6px;
      }

      .eye-icon {
        font-size: 14px;
      }
    }
  `),$=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),G=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]});function O(n){const{getPConnect:a,value:s,placeholder:o,disabled:i=!1,readOnly:t=!1,required:w=!1,label:q,hideLabel:L=!1,testId:E,defaultMasked:N=!0}=n,b=a(),_=b.getActionsApi(),D=b.getStateProps().value,[l,T]=p.useState(N),W=d=>{const{value:z}=d.target;_.updateFieldValue(D,z)},y=()=>{T(!l)},R=d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),y())};return e.jsx(Y,{children:e.jsxs("div",{className:"masked-input-container",children:[e.jsx(U,{type:l?"password":"text",value:s,label:q,labelHidden:L,placeholder:o,disabled:i,readOnly:t,required:w,onChange:W,testId:E}),e.jsx("button",{type:"button",className:"eye-toggle-button",onClick:y,onKeyDown:R,"aria-label":l?"Show text":"Hide text","aria-pressed":!l,disabled:i||t,tabIndex:i||t?-1:0,children:e.jsx("span",{className:"eye-icon",role:"img","aria-hidden":"true",children:l?e.jsx($,{}):e.jsx(G,{})})})]})})}const c=K(O);O.__docgenInfo={description:"",methods:[],displayName:"PegaFieldMaskedWithEyeInput",props:{defaultMasked:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PConnFieldProps"]};const le={title:"Pega/Field/Masked Input",component:c,excludeStories:/.*Data$/,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the input field"},placeholder:{control:"text",description:"Placeholder text for the input field"},defaultMasked:{control:"boolean",description:"Whether the input is masked by default"},disabled:{control:"boolean",description:"Whether the input is disabled"},readOnly:{control:"boolean",description:"Whether the input is read-only"},required:{control:"boolean",description:"Whether the input is required"}}},u={args:{label:r.label,placeholder:r.placeholder,testId:r.testId,readOnly:r.readOnly,disabled:r.disabled,required:r.required,hideLabel:r.hideLabel,defaultMasked:!0},render:n=>{const[a,s]=p.useState(r.value),o={value:a,getPConnect:()=>({getStateProps:()=>m,getActionsApi:()=>({updateFieldValue:(i,t)=>s(t),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(c,{...o,...n})}},g={args:{label:"Visible Input",placeholder:"Text is visible",testId:"masked-unmasked",readOnly:!1,disabled:!1,required:!1,hideLabel:!1,defaultMasked:!1},render:n=>{const[a,s]=p.useState(""),o={value:a,getPConnect:()=>({getStateProps:()=>m,getActionsApi:()=>({updateFieldValue:(i,t)=>s(t),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(c,{...o,...n})}},h={args:{label:"Disabled Input",placeholder:"Cannot interact",testId:"masked-disabled",disabled:!0,readOnly:!1,required:!1,hideLabel:!1,defaultMasked:!0},render:n=>{const[a,s]=p.useState("secret123"),o={value:a,getPConnect:()=>({getStateProps:()=>m,getActionsApi:()=>({updateFieldValue:(i,t)=>s(t),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(c,{...o,...n})}},f={args:{label:"Read-Only Input",placeholder:"",testId:"masked-readonly",disabled:!1,readOnly:!0,required:!1,hideLabel:!1,defaultMasked:!0},render:n=>{const[a,s]=p.useState("readonly-value"),o={value:a,getPConnect:()=>({getStateProps:()=>m,getActionsApi:()=>({updateFieldValue:(i,t)=>s(t),triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return e.jsx(c,{...o,...n})}};var P,x,k;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: configProps.label,
    placeholder: configProps.placeholder,
    testId: configProps.testId,
    readOnly: configProps.readOnly,
    disabled: configProps.disabled,
    required: configProps.required,
    hideLabel: configProps.hideLabel,
    defaultMasked: true
  },
  render: (args: any) => {
    const [value, setValue] = useState(configProps.value);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
}`,...(k=(x=u.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,v,I;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Visible Input',
    placeholder: 'Text is visible',
    testId: 'masked-unmasked',
    readOnly: false,
    disabled: false,
    required: false,
    hideLabel: false,
    defaultMasked: false
  },
  render: (args: any) => {
    const [value, setValue] = useState('');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
}`,...(I=(v=g.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var C,V,F;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot interact',
    testId: 'masked-disabled',
    disabled: true,
    readOnly: false,
    required: false,
    hideLabel: false,
    defaultMasked: true
  },
  render: (args: any) => {
    const [value, setValue] = useState('secret123');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
}`,...(F=(V=h.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var M,j,A;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Read-Only Input',
    placeholder: '',
    testId: 'masked-readonly',
    disabled: false,
    readOnly: true,
    required: false,
    hideLabel: false,
    defaultMasked: true
  },
  render: (args: any) => {
    const [value, setValue] = useState('readonly-value');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
}`,...(A=(j=f.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const de=["Default","Unmasked","Disabled","ReadOnly"];export{u as Default,h as Disabled,f as ReadOnly,g as Unmasked,de as __namedExportsOrder,le as default};
