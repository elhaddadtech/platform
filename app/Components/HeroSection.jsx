"use client"
import React, { useRef,useState,useEffect } from 'react';
import LoginForm from './LoginForm';


function HeroSection() {
  const modalRef = useRef(null);

    // const [theme,setTheme] = useState(localStorage.getItem("theme") ? true: false)
      useEffect(()=>{
        // console.log(typeof JSON.parse( localStorage.getItem("theme")  ));
        const Theme =JSON.parse( localStorage.getItem("theme")) ? "dark" : "light";
        document.querySelector("html").setAttribute("data-theme", Theme);
        console.log("Runding")
      },[])

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      



   
    <div className="hero min-h-screen" style={{backgroundImage: 'url(./img/cover.jpeg)'}} >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary w-40" onClick={openModal} >Login</button>
    </div>
  </div>
</div>




{/* Modal Section  */}
<dialog id="my_modal_3" className="modal" ref={modalRef} >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Welcome To Rosetta Stone</h3>
          <div className="py-4">
          <LoginForm/>
          </div>
        </div>
      </dialog>

 </div>
  )
}

export default HeroSection