import React, { Component } from "react";
import axios from "axios";


class NameComp extends Component {

async updateItem() {

    if(document.getElementById("ItemName").value != "" && document.getElementById("ExpireDate").value != ""){

      var Id = document.getElementById("txtId").value;
      var ItemName = document.getElementById("ItemName").value;
      var ExpireDate = document.getElementById("ExpireDate").value;
 
         // POST request using axios with async/await
           const item = { 
           title: ItemName,
           expiry: ExpireDate,
       };
       await axios.put('https://thefridge-api.karapincha.io/fridge/'+Id, item)
       .then(console.log("Updated Succesfuly"));
 
      window.location.reload();
     
    }else{
      alert("Select a Item to Update!");
    }
     
 }
    render(){
        return(
            <div>
            <input
              type="Button"
              className="btnSubmit"
              value="Update"
              onClick={this.updateItem}
            />
          </div>
        );
    }
}
export default NameComp;
