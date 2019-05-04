import React, { Component } from 'react'

class Custs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            items: []
        };
    }

    async componentDidMount() {
        const url = "http://localhost:8080/Customers/3";
        const response = await fetch(url, { "mode": "cors" });
        const data = await response.json();
        //   console.log(await response.json());
        this.setState({
            isLoaded: false,
            items: data
        })
        console.log(data)
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (isLoaded) {
            return (
                <div>Loading.....</div>
            );
        }
        else{
            
      return (
            <div>
                <ul>
                    <p key= {items.customerID}>Welcome {items.customerMailID}</p>
                </ul>
            </div>
        );
        }
      
    }
}
export default Custs