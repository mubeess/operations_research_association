import React from 'react'
import './styles/add.css'
interface AddButtonProps{
  onClick?:()=>void;
}
function AddButton({onClick}:AddButtonProps) {
  return (
    <div onClick={onClick} className='add_button'>
        <div className='add_plus'>
        <span>+</span>
        </div>
        <span className='addplus_label'>Label</span>
        
    </div>
  )
}

export default AddButton