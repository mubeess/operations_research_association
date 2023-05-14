import React from "react";
import './styles/edit.css'
import Edit from '../assets/Svg/edit.svg'
function EditButton({onClick}) {
  return <div onClick={onClick} className="edit-sec">
    <img className="cursor-pointer" src={Edit}/>
  </div>;
}

export default EditButton;
