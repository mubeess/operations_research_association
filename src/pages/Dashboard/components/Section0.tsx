import React from 'react'
import Select from '../../../components/Select'
import { RegularText } from '../../../components/Common'
const options=['Member','Non-member']
function Section0() {
  return (
    <div className="section_0">
    <RegularText text="Kindly Select your Membership category and upload supporting document to get started " />
    <Select
    options={options}
      placeholder="Please Select Category"
      style={{
        width: "80%",
      }}
      label="Select Category"
    />
    
    <span className="asteric">
    ***Requirements
    </span>
    
  </div>
  )
}

export default Section0