import React, { Component } from "react";


//import Row from "../../components/footer/footer"
import "../../assets/sass/Style.scss";

class NameComp extends Component {
    render(){
        return(
            <div className="header">
                <center>
                <span className="title">Good Morning, Johny!</span><br />
                <span className="subheadding"><img src="https://img.icons8.com/color/20/000000/partly-cloudy-day--v1.png"/>It's Better to go shopping before this friday</span>
                </center>
            </div>
        );
    }
}
export default NameComp;