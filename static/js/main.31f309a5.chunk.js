(this["webpackJsonp@inovando/react-components-example"]=this["webpackJsonp@inovando/react-components-example"]||[]).push([[0],{54:function(e,a,t){e.exports=t(68)},55:function(e,a,t){},64:function(e,a,t){e.exports=t.p+"static/media/trash~XOtNinTH.3cf79106.svg"},65:function(e,a,t){e.exports=t.p+"static/media/close~yJuNWzHg.b195082a.svg"},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);t(55);var n=t(0),o=t.n(n),i=t(10),r=t.n(i),l=t(44),m=t(12),c=t(45),u=t(38),s=t.n(u),d=t(108),p=t(39),v=t(109),b=t(107),f=t(40),h=t.n(f);function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}var S={container:"_322ob",box:"_2iJED",preview:"_3NPDc",image:"_1VmJ9",thumb:"_1RxXZ",file:"_2D62F",filename:"_33B39",size:"_116mi",delete:"_2ps66",rejected:"_3nfTR",error:"_2WQtA"},x={border:"2px dashed #25abf2"},y={border:"2px dashed #f44336"};function C(e){var a=e.color,t=void 0===a?"":a,o=E(e,["color"]);return Object(n.createElement)("svg",g({width:75,height:50,viewBox:"0 0 75 50",fill:"none"},o),Object(n.createElement)("path",{d:"M60.469 18.875C58.344 8.094 48.875 0 37.5 0c-9.031 0-16.875 5.125-20.781 12.625C7.312 13.625 0 21.594 0 31.25 0 41.594 8.406 50 18.75 50h40.625C68 50 75 43 75 34.375c0-8.25-6.406-14.938-14.531-15.5zm-16.719 9.25v12.5h-12.5v-12.5h-9.375L37.5 12.5l15.625 15.625H43.75z",fill:t}))}var P=t(64),O=t(65),R={pt:{"file-invalid-type":"Tipo de arquivo inv\xe1lido","file-too-large":"Tamanho m\xe1ximo excedido {{maxSize}}","file-too-small":"Tamanho m\xednimo n\xe3o cumprido {{maxSize}}"}};function j(e,a){if(void 0===a&&(a=2),0===e)return"0 Bytes";var t=a<0?0:a,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function A(e){var a=e.onChange,t=void 0===a?function(){}:a,i=e.onBlur,r=void 0===i?function(){}:i,l=e.onFocus,m=void 0===l?function(){}:l,u=e.name,d=void 0===u?"upload":u,p=e.label,v=void 0===p?"":p,b=e.errorText,f=void 0===b?"":b,h=e.value,A=void 0===h?[]:h,w=e.locale,V=void 0===w?"pt":w,M=e.maxSize,N=void 0===M?null:M,z=e.style,B=void 0===z?{}:z,T=E(e,["onChange","onBlur","onFocus","name","label","errorText","value","locale","maxSize","style"]),F=Object(n.useState)([]),k=F[0],_=F[1],q=Object(n.useMemo)((function(){return N?1048576*N:null}),[N]),D=Object(c.a)(g({onDrop:function(e){t(e.map((function(e){return e.type.includes("image/")?Object.assign(e,{preview:URL.createObjectURL(e)}):e})))},onDropRejected:function(e){_(e)},maxSize:q},T)),W=D.getRootProps,I=D.getInputProps,G=D.isDragActive,J=D.isDragReject,L=A.map((function(e,a){return o.a.createElement("div",{className:S.thumb,key:e.name},o.a.createElement("div",{className:S.image},e.preview&&o.a.createElement("img",{src:e.preview}),!e.preview&&e.name&&e.name.split(".")[e.name.split(".").length-1]),o.a.createElement("aside",null,o.a.createElement("div",{className:S.file},o.a.createElement("div",{className:S.filename},e.name.split(".").slice(0,-1).join(".")),o.a.createElement("div",{className:S.extension},".",e.name.split(".")[e.name.split(".").length-1])),o.a.createElement("div",{className:S.size},j(e.size))),o.a.createElement("button",{onClick:function(){return t(A.filter((function(e,t){return a!==t})))},className:S.delete,type:"button"},o.a.createElement("img",{src:P})))})),U=Object(n.useMemo)((function(){return g({},G?x:{},J||f?y:{})}),[G,J,f]);return o.a.createElement("section",{className:S.container,style:B},o.a.createElement("div",g({className:S.box},W({style:U,onBlur:r,onFocus:m})),o.a.createElement("input",g({name:d},I())),o.a.createElement(C,{color:J?"#f44336":G?"#25abf2":"#CECFD1"}),o.a.createElement("p",null,v)),k.map((function(e,a){var t=e.errors,n=e.file.name;return o.a.createElement("div",{key:n,className:S.rejected},o.a.createElement("p",null,s()(R[V][t[0].code],{interpolate:/{{([\s\S]+?)}}/g})({maxSize:j(q)}),": ",o.a.createElement("strong",null,n)),o.a.createElement("button",{onClick:function(){return _(k.filter((function(e,t){return t!==a})))},type:"button"},o.a.createElement("img",{src:O})))})),o.a.createElement("div",{className:S.preview},L),f&&o.a.createElement("div",{className:S.error},f))}function w(e){var a=e.input,t=e.meta,n=E(e,["input","meta"]);return o.a.createElement(A,g({},a,{errorText:t.touched?t.error:""},n))}function V(e){var a=e.input,t=a.onChange,n=E(a,["onChange"]),i=e.meta,r=E(e,["input","meta"]),l=!(!i.touched||!i.error);return o.a.createElement(p.a,g({},n,{customInput:d.a,helperText:l?i.error:void 0,error:l,thousandSeparator:".",decimalSeparator:",",allowNegative:!1,decimalScale:2,fixedDecimalScale:!0,prefix:"R$ ",onValueChange:function(e){var a=e.floatValue;t(a)}},r))}function M(e){var a=e.input,t=a.onChange,n=a.value,i=E(a,["onChange","value"]),r=e.meta,l=e.onSearch,m=void 0===l?function(e){return e}:l,c=e.delay,u=void 0===c?250:c,s=e.kind,p=void 0===s?"object":s,f=e.options,S=void 0===f?[]:f,x=e.getOptionSelected,y=void 0===x?function(e){return e.value}:x,C=e.loading,P=void 0!==C&&C,O=E(e,["input","meta","onSearch","delay","kind","options","getOptionSelected","loading"]),R=!(!r.touched||!r.error);return o.a.createElement(v.a,g({options:S,getOptionLabel:function(e){return e.label||""},getOptionSelected:function(e){return"object"===p?y(e)===y(n):y(e)===n},loading:P,autoHighlight:!0,renderInput:function(e){return o.a.createElement(d.a,g({},e,{helperText:R?r.error:void 0,error:R,inputProps:g({},e.inputProps,{autoComplete:"no"}),InputProps:g({},e.InputProps,{endAdornment:o.a.createElement(o.a.Fragment,null,P?o.a.createElement(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})},i,O))},onChange:function(e,a){t("object"!==p?y(a):a)},onInputChange:h()((function(e,a){r.visited&&m(a)}),u),value:"object"===p?n||null:S.find((function(e){return y(e)===n}))||null},O))}t(67);const N={AC:"Acre",AL:"Alagoas",AP:"Amap\xe1",AM:"Amazonas",BA:"Bahia",CE:"Cear\xe1",DF:"Distrito Federal",ES:"Esp\xedrito Santo",GO:"Goi\xe1s",MA:"Maranh\xe3o",MT:"Mato Grosso",MS:"Mato Grosso do Sul",MG:"Minas Gerais",PA:"Par\xe1",PB:"Para\xedba",PR:"Paran\xe1",PE:"Pernambuco",PI:"Piau\xed",RJ:"Rio de Janeiro",RN:"Rio Grande do Norte",RS:"Rio Grande do Sul",RO:"Rond\xf4nia",RR:"Roraima",SC:"Santa Catarina",SP:"S\xe3o Paulo",SE:"Sergipe",TO:"Tocantins"};var z=()=>{const e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],i=a[1],r=e=>{console.log("values:",e)},c=Object.keys(N).map(e=>({label:N[e],value:e}));return o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center"}},"Inovando React Components"),o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Upload Component"),o.a.createElement(A,{onChange:e=>{i(e)},label:"Arraste arquivos ou clique aqui para fazer upload",value:t,accept:"image/*",maxSize:3,style:{margin:"0 auto",maxWidth:400}}),o.a.createElement("h2",{style:{textAlign:"center",marginTop:80}},o.a.createElement("a",{href:"https://final-form.org/react/",target:"_blank",rel:"noopener noreferrer"},"Final-Form")," ","Adapters"),o.a.createElement("h3",null,"UploadField"),o.a.createElement(m.b,{onSubmit:r,initialValues:{files:[]},render:({handleSubmit:e,submitting:a})=>o.a.createElement("form",{onSubmit:e,noValidate:!0},o.a.createElement(m.a,{name:"files",component:w,label:"Arraste arquivos ou clique aqui para fazer upload",validate:e=>e.length?void 0:"Campo obrigat\xf3rio",style:{margin:"0 auto",maxWidth:400}}),o.a.createElement("button",{disabled:a,type:"submit"},"submit"))}),o.a.createElement("h3",{style:{marginTop:80}},"UploadField (with"," ",o.a.createElement("a",{href:"https://final-form.org/docs/react-final-form/types/FormProps#initialvalues"},"initialValues"),")"),o.a.createElement(m.b,{onSubmit:r,initialValues:{files:[{name:"beach.jpg",size:1902381,preview:"https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"}]},render:({handleSubmit:e,submitting:a,values:t})=>o.a.createElement("form",{onSubmit:e,noValidate:!0},o.a.createElement("pre",{style:{overflow:"hidden",textOverflow:"ellipsis"}},JSON.stringify(t,null,2)),o.a.createElement(m.a,{name:"files",component:w,label:"Arraste arquivos ou clique aqui para fazer upload",validate:e=>e.length?void 0:"Campo obrigat\xf3rio",style:{margin:"0 auto",maxWidth:400}}),o.a.createElement("button",{disabled:a,type:"submit"},"submit"))}),o.a.createElement("h3",{style:{marginTop:80}},"MoneyField"),o.a.createElement(m.b,{onSubmit:r,initialValues:{anotherMoney:.5,thousandExample:1e3},render:({handleSubmit:e,submitting:a})=>o.a.createElement("form",{onSubmit:e,noValidate:!0},o.a.createElement(m.a,{name:"money",component:V,fullWidth:!0,margin:"normal",variant:"outlined",label:"Valor (R$)",validate:e=>e?void 0:"Campo obrigat\xf3rio"}),o.a.createElement(m.a,{name:"anotherMoney",component:V,fullWidth:!0,margin:"normal",variant:"outlined",label:"Valor (R$) (with initialValues as 0.5)",validate:e=>e?void 0:"Campo obrigat\xf3rio"}),o.a.createElement(m.a,{name:"thousandExample",component:V,fullWidth:!0,margin:"normal",variant:"outlined",label:"Valor (R$) (with initialValues as 1000)",validate:e=>e?void 0:"Campo obrigat\xf3rio"}),o.a.createElement("button",{disabled:a,type:"submit"},"submit"))}),o.a.createElement("h3",{style:{marginTop:80}},"AutocompleteField"),o.a.createElement(m.b,{onSubmit:r,initialValues:{anotherState:{value:"PR",label:"Paran\xe1"},stateAsValue:"PR"},render:({handleSubmit:e,submitting:a})=>o.a.createElement("form",{onSubmit:e,noValidate:!0},o.a.createElement(m.a,{name:"state",component:M,fullWidth:!0,margin:"normal",variant:"outlined",label:"Estado",onSearch:e=>{console.log("text:",e)},options:c,validate:e=>e?void 0:"Campo obrigat\xf3rio"}),o.a.createElement(m.a,{name:"anotherState",component:M,fullWidth:!0,margin:"normal",variant:"outlined",label:"Estado (with initialValues as an object)",onSearch:e=>{console.log("text:",e)},options:c,validate:e=>e?void 0:"Campo obrigat\xf3rio"}),o.a.createElement(m.a,{name:"stateAsValue",component:M,fullWidth:!0,margin:"normal",variant:"outlined",kind:"value",label:"Estado (with initialValues as a 'string' or 'number')",onSearch:e=>{console.log("text:",e)},options:c,validate:e=>e?void 0:"Campo obrigat\xf3rio"}),o.a.createElement("button",{disabled:a,type:"submit"},"submit"))})))};r.a.render(o.a.createElement(z,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.31f309a5.chunk.js.map