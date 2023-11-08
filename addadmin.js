import React, { Component } from 'react';
import axios from 'axios';

export class AddAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      MobileNo: "",
      Location: "", // Initialize Location with an empty string
      Service: "", // Initialize Service with an empty string
      Email: ""
    };
  }

  addtodb = () => {
    const { Name, MobileNo, Location, Service, Email } = this.state;
    axios.post('http://localhost:3002/admin-api', {
      Name: Name,
      MobileNo: MobileNo,
      Location: Location,
      Service: Service,
      Email: Email,
    })
      .then(res => {
        console.log(res);
        alert("Data added successfully");
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Create functions to handle changes in dropdowns
  handleLocationChange = (e) => {
    this.setState({ Location: e.target.value });
  };

  handleServiceChange = (e) => {
    this.setState({ Service: e.target.value });
  };

  render() {
    const { Name, MobileNo, Location, Service, Email } = this.state;
    return (
      <div>
        <form className='form-add'>
          <label>Name</label>
          <input value={Name} onChange={(e) => this.setState({ Name: e.target.value })}></input><br />
          <label>MobileNo</label>
          <input type="Number" value={MobileNo} onChange={(e) => this.setState({ MobileNo: e.target.value })}></input><br />
          <label>Location</label>
          <select value={Location} onChange={this.handleLocationChange}>
            <option value="">Select Location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select><br />
          <label>Service</label>
          <select value={Service} onChange={this.handleServiceChange}>
            <option value="">Select Service</option>
            <option value="Painting">Painting</option>
            <option value="House Services">House Services</option>
            <option value="House Maintenance">House Maintenance</option>
          </select><br />
          <label>Email</label>
          <input value={Email} onChange={(e) => this.setState({ Email: e.target.value })}></input><br />
          
          <button onClick={this.addtodb}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddAdmin;

