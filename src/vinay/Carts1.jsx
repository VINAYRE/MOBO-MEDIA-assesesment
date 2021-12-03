import React, { Component } from 'react'
import "./Carts1.css";
import axios from 'axios';
class Carts1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          data: (response.data.data)


        });

      })

      .catch((error) => {
        console.log("error", error);
      });
    console.log(this.state.data)
  }
  render() {
    return (
      <>
        <h1>Featured businesses near you</h1>
        <div className="container mt-100">

          <div className="row">
            <div className="col-md012 col">



              {/* ////------Second project */}
              <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
                <div className="card-heder">
                  <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="175px" />
                </div>
                <div className="card-body baby">
                  <h6>Modern, Well-Appointed Room</h6>
                  <h6>⭐⭐⭐⭐⭐</h6>
                  <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
                </div>
              </div>

              {/*  //  third product */}
              <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
                <div className="card-heder">
                  <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="170x" />
                </div>
                <div className="card-body baby">
                  <h6>Modern, Well-Appointed Room</h6>
                  <h6>⭐⭐⭐⭐⭐</h6>
                  <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
                </div>
              </div>

              <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
                <div className="card-heder ">
                  <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="170px" />
                </div>
                <div className="card-body baby">
                  <h6>Modern, Well-Appointed Room</h6>
                  <h6>⭐⭐⭐⭐⭐</h6>
                  <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
                </div>
              </div>

              <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
                <div className="card-heder">
                  <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="170px" />
                </div>
                <div className="card-body baby">
                  <h6>Modern, Well-Appointed Room</h6>
                  <h6>⭐⭐⭐⭐⭐</h6>
                  <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
        <div className="container mt-100">

<div className="row">
  <div className="col-md012 col">



    {/* ////------Second project */}
    <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
      <div className="card-heder">
        <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="170px" />
      </div>
      <div className="card-body baby">
        <h6>Modern, Well-Appointed Room</h6>
        <h6>⭐⭐⭐⭐⭐</h6>
        <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
      </div>
    </div>
    {/*  //  third product */}
    <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
      <div className="card-heder">
        <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="170x" />
      </div>
      <div className="card-body baby">
        <h6>Modern, Well-Appointed Room</h6>
        <h6>⭐⭐⭐⭐⭐</h6>
        <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
      </div>
    </div>

    <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
      <div  className="card-heder">
        <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="170px" />
      </div>
      <div className="card-body baby ">
        <h6>Modern, Well-Appointed Room</h6>
        <h6>⭐⭐⭐⭐⭐</h6>
        <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
      </div>
    </div>

    <div style={{ width: '2300rem', height: '25rem' }} class="card  mr-4 ">
      <div className="card-heder">
        <img id="cart__img" src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="52%" height="170px" />
      </div>
      <div className="card-body baby">
        <h6>Modern, Well-Appointed Room</h6>
        <h6>⭐⭐⭐⭐⭐</h6>
        <p>36b Talbot green, Liantrisant,Wales,CF72 8AF</p>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
      </>
    )
  }
}

export default Carts1
