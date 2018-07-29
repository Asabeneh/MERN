import React, {Component} from 'react';
import '../App.css';
class AddStudent extends Component {
    render () {
        return (
            <div>
            <h1>Add Student</h1>
            <form method="post" action = "/students" encType="multipart/form-data">
            <label htmlFor="firstName">First Name:</label>
            <input id ="firstName" type="text" name="firstName" placeholder="First name" /><br/>
            <label htmlFor="lastName">Last Name:</label>
            <input id ="lastName" type="text" name="lastName" placeholder="Last name" /><br/>
            <label htmlFor="title">Title:</label>
            <input id="title" type="text" name="title" placeholder="Title" />
            <br/>
            <label htmlFor="nationality">Nationality:</label>
            <input id="nationality" type="text" name="nationality" placeholder="Nationality" />
            <br/>
            <label htmlFor="whySofterDeveloper">Why software Developer:</label>
            <input id="whySofterDeveloper" type="text" name="whySofterDeveloper" placeholder="Why software Developer" />
            <br/>
            <label htmlFor="longTermVision">Long term vision:</label>
            <input id="longTermVision" type="text" name="longTermVision" placeholder="Long Term Vision" />
            <br/>

            <label htmlFor="motivatesMe">What motivates you:</label>
            <input id="motivatesMe" type="text" name="motivatesMe" placeholder="What motivates you " />
                <br/>
                
            <label htmlFor="quote">Favorite Quote:</label>
            <input id ="quote" type="text" name="favoriteQuote" placeholder="You favorite quote" /><br/>
            <br/>
            <label htmlFor="joinedOn">Date join:</label>
            <input id="joinedOn" type="date" name="joinedOn"  />
            <br/>
            <br/>
            <label htmlFor="src">Attach Photo</label>
            <input type="file" name="src" /><br/>

            <label htmlFor="skills">Skills:</label><br/>
            <textarea id ="skills" rows="10" cols="50" name="skills">Add you skills separated by comma</textarea> <br />
            <button type="submit" value ="Add"> Add Student</button>
            <a href="/">Back</a>
            </form>
            </div>
        )
    }
}

export default AddStudent;