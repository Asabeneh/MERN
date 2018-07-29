import React, { Component } from "react";
import "./Student.css";
import '../App.css';

class Student extends Component {
  constructor(props) {
    super(props);

  }
 
  render() {
    return <div>
      <div className="image">
          <h2>
            {this.props.student._id}. {this.props.student.firstName} {this.props.student.lastName}
          </h2>

          <a href = ""><img src={window.location.origin + `/images/${this.props.student.src}`} /></a>
        </div>
        <div className="student-detail">
          <li>{this.props.student.nationality}</li>
          <li>{this.props.student.title}</li>
          <li>{this.props.student.skills}</li>
          <li>{this.props.student.longTermVision}</li>
          <li>{this.props.student.motivatesMe}</li>
          <li>{this.props.student.favoriteQuote}</li>
          <li>{this.props.student.joinedOn}</li>
      </div>
    
        </div>
    
  }
}

export default Student;

