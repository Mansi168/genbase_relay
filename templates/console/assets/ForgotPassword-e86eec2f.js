import{r as t,w as k,j as e,z as P,a7 as C,a8 as E,a9 as F,S as m,T as r,aa as u,ah as M}from"./index-e7d08f93.js";import{E as T,L}from"./ErrorMessage-b7407542.js";import{C as R}from"./CircularProgress-bde325c7.js";import{T as D}from"./TextField-b197fae8.js";function B(){const[n,l]=t.useState(""),[g,o]=t.useState(""),[h,i]=t.useState(!1),[x,f]=t.useState(!1),p=k(),[j,b]=t.useState(!1),v=()=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(n)?null:"Please enter a valid email address",y=async a=>{a.preventDefault(),i(!0);const d=v();if(d){i(!1),o(d);return}const S={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})};try{const s=await M(S),c=await s.json();console.log(s),console.log(c),s.ok||o(c.detail),s.status===401&&(l(n),f(!0)),b(!0)}catch{o("An error occurred. Please try again.")}finally{i(!1)}},w=e.jsxs(e.Fragment,{children:[e.jsx(m,{spacing:2,children:e.jsx(D,{name:"email",label:"Email address",onChange:a=>l(a.target.value)})}),e.jsx(T,{message:g}),x&&e.jsxs(r,{variant:"body2",sx:{mt:2,mb:5},children:["Didn't receive verification code? ",e.jsx(u,{to:"/verification",variant:"subtitle2",children:"Resend"})]}),e.jsx(L,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",loading:h,onClick:y,children:"Forgot Password"})]});return e.jsxs(P,{sx:{...C({color:E(p.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(F,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(m,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(R,{sx:{"&::-webkit-scrollbar":{display:"none"},p:5,width:1,maxWidth:420},children:[e.jsx(r,{variant:"h4",mb:4,children:"Forgot Password"}),j?e.jsx(r,{variant:"h6",mb:4,children:"Mail Sent for Password Reset Check the Mail box"}):e.jsxs(e.Fragment,{children:[w,e.jsxs(r,{variant:"body2",sx:{mt:5,mb:2},children:["Don’t have an account? ",e.jsx(u,{to:"/signup",variant:"subtitle2",style:{textDecoration:"none"},children:"Get started"})]})]})]})})]})}export{B as default};
