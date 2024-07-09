import{m as b,g as m,h,_ as d,n as c,r as E,i as y,b as C,j as e,f as R,P as j}from"./index-1b397dd4.js";import{B as M,u as W,a as z}from"./CircularProgress-6ff9c322.js";function U(n){return m("MuiLoadingButton",n)}const _=b("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),i=_,T=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],F=n=>{const{loading:o,loadingPosition:t,classes:a}=n,r={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${c(t)}`],endIcon:[o&&`endIconLoading${c(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${c(t)}`]},l=R(r,U,a);return d({},a,l)},N=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",k=h(M,{shouldForwardProp:n=>N(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),q=h("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${c(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),A=E.forwardRef(function(o,t){const a=y({props:o,name:"MuiLoadingButton"}),{children:r,disabled:l=!1,id:x,loading:g=!1,loadingIndicator:u,loadingPosition:B="center",variant:I="text"}=a,$=C(a,T),L=W(x),p=u??e.jsx(z,{"aria-labelledby":L,color:"inherit",size:16}),s=d({},a,{disabled:l,loading:g,loadingIndicator:p,loadingPosition:B,variant:I}),P=F(s),f=g?e.jsx(q,{className:P.loadingIndicator,ownerState:s,children:p}):null;return e.jsxs(k,d({disabled:l||g,id:L,ref:t},$,{variant:I,classes:P,ownerState:s,children:[s.loadingPosition==="end"?r:f,s.loadingPosition==="end"?f:r]}))}),H=A,v=({message:n})=>e.jsx("p",{className:"has-text-weight-bold has-text-danger",children:n});v.propTypes={message:j.string.isRequired};const J=v;export{J as E,H as L};
