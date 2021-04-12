import React, {Component } from "react";

import SubmitFunction from "./onSubmit";
import UpdateFunction from "./update"
import DRows from "../dataRows/dataRows"

import "../../assets/sass/Style.scss";

class NameComp extends Component {
  render() {
    return (
      <>
        <div className="formBox">
          <form>
            <div className="box1">
              <input type="hidden" id="txtId" />

              <label className="boxLabel">
                <img src="https://img.icons8.com/fluent/16/000000/watermelon.png" />{" "}
                Item Name
              </label>
              <br />
              <input type="text" className="inputBox" id="ItemName" />
            </div>

            <div className="box2">
              <label className="boxLabel">
                <img src="https://img.icons8.com/emoji/16/000000/alarm-clock-emoji.png" />{" "}
                Expiry Date
              </label>
              <br />
              <input
                type="date"
                name="dateofbirth"
                className="inputBox"
                id="ExpireDate"
              ></input>
            </div>

            <div className="box3">
              <br />
              <SubmitFunction />
              <UpdateFunction />
            </div>
          </form>
        </div>
        <div className="dataRowContainer">
          <DRows />
        </div>
      </>
    );
  }
}
export default NameComp;
