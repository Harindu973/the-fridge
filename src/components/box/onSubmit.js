import React, { Component } from "react";
import axios from "axios";



class NameComp extends Component {

//New Item Adding Function 
async addItem() {

   if(document.getElementById("ItemName").value != "" && document.getElementById("ExpireDate").value != ""){

    var ItemName = document.getElementById("ItemName").value;
    var ExpireDate = document.getElementById("ExpireDate").value;

        // POST request using axios with async/await
          const item = { 
          title: ItemName,
          expiry: ExpireDate,
      };
      await axios.post('https://thefridge-api.karapincha.io/fridge', item)
      .then(console.log("Added Succesfuly"));

      window.location.reload();
    
   }else{
     alert("Please Input Values!");
   }    
}

  render() {
   
    return (
      <div>
        <input
          type="Button"
          className="btnSubmit"
          value="Add to Fridge"
          onClick={this.addItem}
        />
      </div>
    );
  }
}
export default NameComp;