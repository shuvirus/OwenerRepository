import React, { Component } from 'react'

class Customers extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        const url = "http://localhost:8080/Customers";
        fetch(url,{"mode":"no-cors"})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.Customers
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.customerID}>
                  {item.customerUserName} {item.customerUserName}
                </li>
              ))}
            </ul>
          );
        }
      }
}
export default Customers
