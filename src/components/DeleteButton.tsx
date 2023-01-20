import React from 'react'
import './styles/add.css'
import { DeleteIcon } from '../assets/Svg/Index';
interface AddButtonProps{
  onClick?:()=>void;
}
function DeleteButton({onClick}:AddButtonProps) {
  return (
    <div onClick={onClick} className='add_button'>
        <div className='add_plus'>
        <span>
            <DeleteIcon/>
        </span>
        </div>
        <span className='addplus_label'>Label</span>
        
    </div>
  )
}

export default DeleteButton