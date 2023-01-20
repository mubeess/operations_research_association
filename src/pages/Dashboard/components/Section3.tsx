import React, { useState } from "react";
import { Header } from "../../../components/Common";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import AddButton from "../../../components/AddButton";
import Sample from "../../../assets/Images/sample.png";
import DeleteButton from "../../../components/DeleteButton";

interface initialStateProp {
  initial: [any] | any;
}
const initalState: initialStateProp["initial"] = [];
function Section3() {
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
    <div className="section3_main">
      <Header text="SECTION C: Upload supporting documents" />
      <div className="sec3_container">
        <div className="sec3_inputs">
          <div className="sec2_inputs">
            <Select
              style={{ width: "15%" }}
              placeholder="Select Doc"
              label="Document type"
              options={["me", "me"]}
            />
            <Input outlined type="file" label="Upload document" />
            <div className="sec3_btn">
              <AddButton onClick={onClick} />
            </div>
          </div>
          <div className="sec3_img">
            <img src={Sample} alt="img" />
          </div>
        </div>
        {listItem.map((item: any) => (
          <div className="sec3_inputs">
            <div className="sec2_inputs">
              <Select
                style={{ width: "15%" }}
                placeholder="Select Doc"
                label="Document type"
                options={["me", "me"]}
              />
              <Input outlined type="file" label="Upload document" />
              <div className="sec3_btn">
                <DeleteButton onClick={() => onRemove(item.id)} />
              </div>
              
            </div>

            <div className="sec3_img">
                <img src={Sample} alt="img" />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
