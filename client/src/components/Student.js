import React, { Component } from "react";
import "./Student.css";

class Student extends Component {
  constructor(props) {
    super(props);

  }
 
  render() {
    return <div className="student">
          <h3>
            {this.props.student._id}. {this.props.student.firstName} {this.props.student.lastName}
          </h3>

          <img src={window.location.origin + `/images/${this.props.student.src}`} />
        </div>;
    
  }
}

export default Student;
