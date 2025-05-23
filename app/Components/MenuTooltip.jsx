"use client"
import {useEffect,useState} from "react"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloudUploadSharp } from "react-icons/io5";
import { TbPresentationAnalytics } from "react-icons/tb";
import { useRouter } from 'next/navigation'
import Link from "next/link";
function MenuTooltip() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   console.log("Cliked ",open);
  // }, [open]);
  return (
    <div className={` ${open ? "w-52" : "font-semibold leading-loose"}`} >
        <ul className="menu bg-base-200 font-semibold leading-loose "  style={{ minHeight: "calc(100vh  - 4rem)" }}  >
        <div  className={` ${open ? "flex justify-end content-end mb-3" : "flex justify-start content-start mb-3"}`} >
          {/* <AiOutlineMenuUnfold className='h-5 w-5 mb-2' onClick={()=>{setOpen(prev=>!prev)}} /> */}
          { open ? <AiOutlineMenuFold className='h-5 w-5  mr-3' onClick={()=>{setOpen(prev=>!prev)}} /> : < AiOutlineMenuUnfold className='h-5 w-5  mr-3' onClick={()=>{setOpen(prev=>!prev)}} />}
          </div>
      <li>
        <a className="tooltip tooltip-right flex" data-tip="Upload File" onClick={()=>{router.push('/upload')}} >
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> */}
          <IoCloudUploadSharp className='h-6 w-6  mr-3' /> 
        <span className={` ${open ? "" : "hidden"}`} > Upload File </span>
        </a>
      </li>
      <li>
        <Link href={"/UsageReport"} className="tooltip tooltip-right flex" data-tip="UsageReport">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
          <TbPresentationAnalytics className='h-6 w-6  mr-3' />
        <span className={` ${open ? "" : "hidden"}`} > UsageReport </span>
        </Link>
      </li>
      <li>
        <a className="tooltip tooltip-right flex" data-tip="Stats">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> */}
          <TbPresentationAnalytics className='h-6 w-6  mr-3' />
          <span className={` ${open ? "" : "hidden"}`} > Stats </span>
        </a>
      </li>
      <li>
        <Link href={"/TestReport"} className="tooltip tooltip-right flex" data-tip="TestReport">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
          <TbPresentationAnalytics className='h-6 w-6  mr-3' />
        <span className={` ${open ? "" : "hidden"}`} > UsageReport </span>
        </Link>
      </li>
        </ul>
    </div>
  )
}

export default MenuTooltip