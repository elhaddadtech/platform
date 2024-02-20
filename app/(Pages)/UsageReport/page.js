import React from 'react'
import Template from '../../Components/Template'
import UsageReport from  "./UsageReport"

function page() {
  return (
    <div>
        <Template content={ <UsageReport /> } />
    </div>
  )
}

export default page