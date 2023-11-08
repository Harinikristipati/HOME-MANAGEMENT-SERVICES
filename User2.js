import React, { Component } from 'react';
import './admin.css';
import axios from 'axios';

class User1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      MobileNo: '',
      Location: '',
      Service: '',
      Email: '',
      bookingData: [],
      loading: false,
      bookingConfirmed: false,
      error: null,
      filterData: [], 
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCheckAvailability = () => {
    const { Location, Service } = this.state;

    if (Location !== '' && Service !== '') {
      this.setState({ loading: true, error: null });

      axios
        .get(`http://localhost:3002/admin-api`, {
          params: {
            Location,
            Service,
          },
        })
        .then((response) => {
          this.setState({ loading: false, bookingData: response.data });
          const filteredData = response.data.filter(
            (x) => Location === x.Location && Service === x.Service
          );
          this.setState({ filterData: filteredData });

          if (filteredData.length === 0) {
            alert(`No availability found for ${Service} in ${Location}.`);
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ loading: false, error: 'An error occurred. Please try again later.' });
        });
    } else {
      alert('Please select both Location and Service.');
    }
  };

  handleBookNow = () => {
    const { Name, MobileNo, Location, Service, Email } = this.state;
    if (Name && MobileNo && Location && Service && Email) {
      // Here, you can send a booking request to your server
      // and show a confirmation message upon success
      this.setState({ bookingConfirmed: true });
      alert('Booking confirmed!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  render() {
    const {
      Name,
      MobileNo,
      Location,
      Service,
      Email,
      loading,
      bookingConfirmed,
      error,
      filterData, // Use filterData here
    } = this.state;

    return (
      <div className="booking-page">
        <div className="booking-form-container">
          <form>
            <h1>User Data</h1>
            <div className="form-group">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={Name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="MobileNo">Mobile No:</label>
              <input
                type="text"
                id="MobileNo"
                name="MobileNo"
                value={MobileNo}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Location:</label>
              <select
                id="Location"
                name="Location"
                value={Location}
                onChange={this.handleInputChange}
              >
                <option value="">Select Location</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Service">Service:</label>
              <select
                id="Service"
                name="Service"
                value={Service}
                onChange={this.handleInputChange}
              >
                <option value="">Select Service</option>
                <option value="Painting">Painting</option>
                <option value="House Maintenance">House Maintenance</option>
                <option value="House Cleaning">House Cleaning</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={Email}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="button" onClick={this.handleCheckAvailability}>
              Check for Availability
            </button>
          </form>
        </div>
        <br />
        <br />
        {loading ? (
          <div className="loading-indicator">Loading...</div>
        ) : bookingConfirmed ? (
          <p>Booking confirmed!</p>
        ) : filterData.length > 0 ? (
          <div className="booking-postcards-container">
            <h2>Booking Data</h2>
            {filterData.map((booking) => (
              <div className="booking-postcard" key={booking.id}>
                <h3>{booking.Name}</h3>
                <p>Mobile No: {booking.MobileNo}</p>
                <p>Location: {booking.Location}</p>
                <p>Service: {booking.Service}</p>
                <p>Email: {booking.Email}</p>
              </div>
            ))}
            <button onClick={this.handleBookNow}>Book Now</button>
          </div>
        ) : (
          error && <p>{error}</p>
        )}
      </div>
    );
  }
}

export default User1;