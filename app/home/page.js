// "use client"
// import CSVReader from "../Components/CsvReader"
import Template from "../Components/Template"
// import Navbar from "../Components/Navbar"
import Home from "./Home.jsx"



function page() {
  return (
    <div>
  <Template content={ <Home />}/>
         {/* <Navbar/> */}
    
    </div>
  )
}

export default page