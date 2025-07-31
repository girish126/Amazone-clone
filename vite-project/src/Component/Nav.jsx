
import './Nav.css';
function First() {
  return (
    <>
    <div className='navbar'>
      <div className='nav-logo border'>
        <div className='logo'></div>
      </div>

      <div className='nav-address border'>
        <p className='add-first'>Deliver to</p>
        <div className='add-icon'>
        <i class="fa-solid fa-location-dot"></i>
          <p className='add-sec'>India</p>
        </div>
      </div>


<div className="nav-search">
  <select className="search-select">
    <option>All</option>
  </select>
  <input
    placeholder="Search Amazon"
    className="search-input"
  />
  <div className="search-icon">
    <i className="fa-solid fa-magnifying-glass"></i>
  </div>
</div>

 
 <div className="nav-signin border">
  <p className="nav-line1">Hello, sign in</p>
  <p className="nav-line2">Accounts & Lists</p>
</div>


<div className="nav-returns border">
  <p className="nav-line1">Returns</p>
  <p className="nav-line2">& Orders</p>
</div>

<div className="nav-cart border">
  <i className="fa-solid fa-cart-shopping cart-icon"></i>
  <p className="cart-text">Cart</p>
</div>
</div>

  <div className='panel'>
  <div className='panel-all'>
  <i class="fa-solid fa-bars"></i>
  All
  </div>

<div className='panel-ops'>
 
 <p>Today's Deal</p>
  <p>Customer's Services</p>
   <p>Registry</p>
    <p>Gifts cards</p>
     <p>Sell</p>
</div>
  
  <div className='panel-deals'>
    Shop Deals in Elotronics
  </div>
  
  </div>
 
  <div className='hero-sec'>
  </div>

<div className='shop-sec'>
  <div className='box-1 box' >
  <div className='box-content'>
<h2>Clothes</h2>
<div className='box-img1'></div>
<p>See more</p>
</div>
</div>
  
  <div className='box-2 box' >
  <div className='box-content'>
<h2>Health & Presonal care</h2>
<div className='box-img2'></div>
<p>See more</p>
</div>
</div>

 <div className='box-3 box' >
  <div className='box-content'>
<h2>Furniture</h2>
<div className='box-img3'></div>
<p>See more</p>
</div>
</div>

 <div className='box-4 box' >
  <div className='box-content'>
<h2>Phone</h2>
<div className='box-img4'></div>
<p>See more</p>
</div>
</div>

 <div className='box-5 box' >
  <div className='box-content'>
<h2>Beauty Product</h2>
<div className='box-img5'></div>
<p>See more</p>
</div>
</div>

 <div className='box-6 box' >
  <div className='box-content'>
<h2>Animals</h2>
<div className='box-img6'></div>
<p>See more</p>
</div>
</div>

 <div className='box-7 box' >
  <div className='box-content'>
<h2>Travel</h2>
<div className='box-img7'></div>
<p>See more</p>
</div>
</div>

 <div className='box-8 box' >
  <div className='box-content'>
<h2>Fashion</h2>
<div className='box-img8'></div>
<p>See more</p>
</div>
</div>
</div>

<footer>
  <div className="foot-panel1">
    Back to Top
  </div>

<div className='foot-panel2'>
<ul>
<p>Get to know us</p>
<a>careers</a>
<a>Blog</a>
<a>About Amazone</a>
<a>Investors</a>
<a>Devices</a>
<a>Amazone Science</a>
</ul>

<ul>

<p>Make Money with Us</p>
      <a>Sell on Amazon</a>
      <a>Sell under Amazon Accelerator</a>
      <a>Protect and Build Your Brand</a>
      <a>Amazon Global Selling</a>
      <a>Become an Affiliate</a>
      <a>Advertise Your Products</a>
</ul>

<ul>
 <p>Amazon Payment Products</p>
      <a>Amazon Business Card</a>
      <a>Shop with Points</a>
      <a>Reload Your Balance</a>
      <a>Amazon Currency Converter</a>
</ul>

<ul>
 <p>Let Us Help You</p>
      <a>COVID-19 and Amazon</a>
      <a>Your Account</a>
      <a>Returns Centre</a>
      <a>100% Purchase Protection</a>
      <a>Help</a>
</ul>
</div>

<div className='foot-panel3'>

<div className='logo'>


</div>

</div>
</footer>

</>
);
}

export default First;
