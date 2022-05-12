import logo from './logo.svg';
import './App.css';
import cs from './cro.module.css';
function App() {
  return (
    <>
      {/* https://websitedemos.net/coffee-shop-04/?customize=template */}

      <html>
        <body>

          <section className="header">
            <div className="logo">
              <img src={require(`./images/logo.png`)} />
            </div>
            <div className="header_img">   
              <img src={require('./images/hero-01-free-img.jpg')}/>
            </div>
            <nav>
              <ul className="container flex main_menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
            <div className="container welcome">
              <h4>Welcome!</h4>
              <h1>We serve the richest coffee in the city!</h1>
              <div className="flex">
                <a href="#"><i class="fa-solid fa-circle-play"></i></a>
                <h5>High quality in every cup of coffee we serve...</h5>
                <img src={require("./images/hero.png")} />
              </div>
            </div>
            <div className="drink">
              <h2>Drinks</h2>
              <h6></h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br></br>luctus nec ullamcorper mattis.</p>
              <span>All Drinks<i class="fa-solid fa-angle-right"></i></span>
            </div>
          </section>
          <div className="items">
            <div className="container flex space_between">
              <div className="item1">
                <img src={require("./images/product-01-free-img.png")} />
                <h4>$ 4.20</h4>
                <h3>Cappuccino</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. </p>
                <button>Get delivery</button>
              </div>
              <div className="item1" id="item2">
                <img src={require("./images/product-02-free-img.png")} />
                <h4>$ 3.15</h4>
                <h3>Cafe Latte</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. </p>
                <button>Get delivery</button>
              </div>
              <div className="item1" id="item3">
                <img src={require("./images/product-03-free-img.png")} />
                <h4>$ 2.75</h4>
                <h3>Dark Coffee</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. </p>
                <button>Get delivery</button>
              </div>
            </div>
          </div>
          <section className={cs.Croissant}>
            <div className="container flex space_between">
              <div className={cs.cro_text}>
                <h5>From $2.50</h5>
                <h2>Croissants</h2>
                <h6></h6>
                <h4>Duis aute irure quasi</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                <span>All Croissants<i class="fa-solid fa-angle-right"></i></span>
              </div>
              <div className={cs.cro_img}>
                <img src={require(`./images/croissant-01-free-img.png`)} width="550px" />
              </div>
            </div>
          </section>
          <div className="container buy_product flex">
            <div className="product_img">
              <img src={require(`./images/coffee-01-free-img.png`)} />
            </div>
            <div className="product_list">
              <h5>From $19.50</h5>
              <h2>Buy for Home</h2>
              <h6></h6>
              <h4>Totam rem aperiam</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
              <span>All Coffee<i class="fa-solid fa-angle-right"></i></span>
            </div>
          </div>
          <div className="About">
            <h2>About</h2>
            <h6></h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Ut elit tellus.luctus nec ullamcorper mattis.</p>
            <div className="container flex">
              <div className="about_product">
                <h4>Tailored-Made Coffee</h4>
                <h3>We offer a unique coffee house environment unlike any other in N.Y.</h3>
              </div>
              <div className="about_product1">
                <h5>The perfect place to enjoy your coffee</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <span>Read More<i class="fa-solid fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <section className="location">
            <div className="container flex party">
              <div className="col-4">
                <h2>Barista<br></br>Party</h2>
                <h5></h5>
                <h4>Every Friday & Saturday</h4>
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <span>Make Reservation<i class="fa-solid fa-angle-right"></i></span>
              </div>
              <div className="col-3">
                <img src={require(`./images/bg-02-free-img.png`)} />
              </div>
              <div className="col-2">
                <h3>Location</h3>
                <h6></h6>
                <p>You can find us consectetur  elit,<br></br> sed do eiusmod tempor incididun.</p>
                <div className="flex">
                  <div className="address_icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="address_text">
                    <span>Address</span>
                    <p>123 Fifth Avenue, New York,<br></br>NY 10160 </p>
                  </div>
                </div>
                  <span id="map">See on Google Maps<i class="fa-solid fa-angle-right"></i></span>
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
}

export default App;
