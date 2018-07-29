import React, { Component } from "react";
import Student from './Student';
import './Students.css';
import '../App.css';



class Students extends Component {
    constructor (props){
        super(props);
        this.state = {
            students : [],

        }
    }
    componentDidMount() {
       console.log('Did mount')
       fetch("/students")
       .then(res => res.json())
       .then(students=> this.setState({students}))
    }
    renderStudents = () => {

    {
      this.state.students.map((student, i) => {
        return <Student student={student} />;
      });
    }

    }
    render () {
     
        return <div>
            <h2>Integrify Students List</h2>
            <h4>Number of students: {this.state.students.length}</h4>
            <div className="flex-container">
              {this.state.students.map((student, i) => {
                return <Student student = {student} />
              })}
          </div>
          </div>
    }
}

export default Students;

