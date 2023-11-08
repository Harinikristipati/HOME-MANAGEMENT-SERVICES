import React, { Component } from 'react'
import Frames from './Frames';
 export class Service extends Component {
render() {
return (
<div>
    <br></br>
  <br></br>
<h1>Service Page</h1>
<Frames />
<section class="con">
                <div class="container">
                    <img src="https://img.freepik.com/free-vector/people-taking-care-plants-together_23-2148976507.jpg" alt="Notebook"/>
                    <div class="content">
                        {/* <h1>Gardening</h1> */}
                        {/* <p>Gardener responsibilities include monitoring the health of all plants and greenscapes, watering and feeding plants, trimming trees and shrubs, fertilizing and mowing lawns, weeding gardens and keeping green spaces and walkways clear of debris and litter.</p> */}
                    </div>
                </div>  
            </section>
            <section class="con">
                <div class="container">
                    {/* <img src="https://img.freepik.com/free-vector/home-renomation-flat-composition-with-plumber-fixing-pipes-vector-illustration_1284-80776.jpg" alt="Notebook"/> */}
                    <div class="content">
                        {/* <h1>Home maintainance</h1> */}
                        {/* <p>It includes maintenance activities such as safety checks, cleaning, rodent control, garbage disposal, gardening, landscaping, and asset repairs.</p> */}
                    </div>
                </div>  
            </section>
            <section class="con">
                <div class="container">
                    {/* <img src="https://cdn.shopify.com/s/files/1/0523/6080/6591/files/Repair_kitchen_faucet.jpg?v=1684394666" alt="Notebook"/> */}
                    <div class="content">
                        {/* <h1>Plumber</h1> */}
                     
                    </div>
                </div>  
            </section>
</div>
)
}
 }

 export default Service






