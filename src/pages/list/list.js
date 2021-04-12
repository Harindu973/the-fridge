import React, { Component } from "react";
import DataRows from "../../components/dataRows/dataRows"


class NameComp extends Component {
    render(){
        return(
            <div>
                <div className="rowContainer">
                   <DataRows />
                </div>
            </div>
        );
    }
}
export default NameComp;
