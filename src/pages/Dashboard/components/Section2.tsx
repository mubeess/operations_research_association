import React, { useState } from "react";
import "./styles/section2.css";
import Input from "../../../components/Input";
import AddButton from "../../../components/AddButton";
import { Header } from "../../../components/Common";
import DeleteButton from "../../../components/DeleteButton";
interface initialStateProp {
  initial: [any] | any;
}
const initalState: initialStateProp["initial"] = [];
function Section2() {
  const [listItem, setListItem] = useState(initalState);
  function onClick() {
    const newList = listItem.concat({ id: Date.now() });
    setListItem(newList);
  }
  function onRemove(id: any) {
    const newItem = listItem.filter((item: any) => item.id != id);
    setListItem(newItem);
  }
  return (
    <div className="section2_main">
      <Header text="SECTION B: Educational Qualification" />
      <div className="section2_container">
        <div className="sec2_inputs">
          <Input onChange={()=>{}}
            style={{
              width: "30%",
            }}
            outlined
            label="Institution Attend "
            placeholder="Enter the name of institution attend"
          />
          <Input onChange={()=>{}} outlined type="date" label="From" />
          <Input onChange={()=>{}} outlined type="date" label="To" />
          <Input onChange={()=>{}} outlined type="file" label="Qualification Obtained" />
          <AddButton onClick={onClick} />
        </div>
        {listItem.map((item: any) => (
          <div className="sec2_inputs">
            <Input onChange={()=>{}}
              style={{
                width: "30%",
              }}
              outlined
              label="Institution Attend "
              placeholder="Enter the name of institution attend"
            />
            <Input onChange={()=>{}} outlined type="date" label="From" />
            <Input onChange={()=>{}} outlined type="date" label="To" />
            <Input onChange={()=>{}} outlined type="file" label="Qualification Obtained" />
            <DeleteButton onClick={() => onRemove(item.id)} />
            {/* <AddButton onClick={onClick} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
