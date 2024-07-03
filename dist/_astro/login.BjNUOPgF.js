import{j as a}from"./jsx-runtime.K1e75nIr.js";import{r as s}from"./index.NEDEFKed.js";import{a as c}from"./axios.Cm0UX6qg.js";import{S as t}from"./sweetalert2.all.DleYb7kt.js";const u=()=>{const[e,l]=s.useState(""),[r,i]=s.useState("");s.useEffect(()=>{localStorage.getItem("userData")&&(window.location.href="/casos")},[]);const n=async()=>{if(console.log("login",e,r),e!==""&&r!==""){t.fire({title:"Espere por favor",html:"Verificando datos",allowOutsideClick:!1,didOpen:()=>{t.showLoading()}});try{const o=await c.post("https://www.superaabogados.com/superabackend/usuarios/login",{usuario:e,clave:r});console.log(o.data),o.data&&(localStorage.setItem("userData",JSON.stringify(o.data)),window.location.href="/casos")}catch{t.fire({icon:"error",title:"Error",text:"Usuario o contraseña incorrectos"})}}};return a.jsxs("div",{className:"py-5",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-0 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[a.jsx("h2",{className:"text-3xl text-primary-450 sm:text-3xl font-bold mb-6",children:"Iniciar sesión"}),a.jsxs("div",{className:"w-ful",children:[a.jsx("input",{type:"text",placeholder:"Correo electrónico",className:" border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900",onChange:o=>l(o.target.value)}),a.jsx("br",{}),a.jsx("input",{type:"password",placeholder:"Contraseña",className:"border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-4 text-gray-900",onChange:o=>i(o.target.value)}),a.jsx("br",{}),a.jsx("button",{className:"bg-primary-450 text-white rounded-lg shadow-sm px-4 py-2 mb-4",onClick:n,children:"Iniciar sesión"})]})]})}),a.jsx("style",{children:`
            .swal2-confirm{
              background-color: #0A6C48 !important;
              color: #fff !important;
              
            }
            .swal2-modal{
              background-color: #23262D !important;
              color: #fff !important;
            }
          `})]})};export{u as default};
