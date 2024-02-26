import React from 'react'
import Template from '../../Components/Template'
import TestReport from './TestReport'

function Page() {
  
  return (
    <div>
      <Template content={<TestReport/>} />
    </div>
  )
}

export default Page