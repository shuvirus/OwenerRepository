import React, { Component } from 'react'

class UserRegistration extends Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            passWord: "",
            emailID: "",
            mobileNumber: "",
        };
        this.setFormData = this.setFormData.bind(this);
        this.submitFormData = this.submitFormData.bind(this);
    }

    setFormData(data, type) {
        let itemValue = data.target.value;
        
        switch (type) {
            case "username": {
                this.setState({ userName: itemValue });
                //console.log(itemValue)
                break;
            }
            case "password": {
                this.setState({ passWord: itemValue });
                //console.log(itemValue)
                break;
            }
            case "emailID": {
                this.setState({ emailID: itemValue });
                // console.log(itemValue)
                break;
            }
            case "mobileNumber": {
                this.setState({ mobileNumber: itemValue });
                // console.log(itemValue)
                break;
            }
        }

        console.log("User/name : ",this.state.userName , "Type : " ,type)
    }

    submitFormData() {
        let obj = {};
        obj.userName = this.state.userName;
        obj.passWord = this.state.passWord;
        obj.emailID = this.state.emailID;
        obj.mobileNumber = this.state.mobileNumber;
        console.warn(this.obj);
    }

    render() {
        return (
            <div>
                <input type="username" placeholder="Enter username"  onChange={(data) => this.setFormData(data, "username")} /><br />
                <input type="password" placeholder="Enter Password"  onChange={(data) => this.setFormData(data, "password")} /><br />
                <input type="emailID" placeholder="Email ID"  onChange={(data) => this.setFormData(data, "emailID")} /><br />
                <input type="mobileNumber" placeholder="Mobile Number"  onChange={(data) => this.setFormData(data, "mobileNumber")} /><br />
                <button type="submit" onClick={() => this.submitFormData()}>Register</button><br />
            </div>
        )
    }
}
export default UserRegistration