import React from 'react';
import ReactDOM from "react-dom/client";
import { restaurants } from './restaurants';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src = "https://play-lh.googleusercontent.com/LkHCQcTy4-VKC8OVcqMj7CChu_fT3q175mDR5nHjLwxm9oQYelA8vYrrKu_89h8ke44 " alt = "logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  );
};

const RestaurantCard = (props) =>{
  const {resData}= props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
  return(
    <div className="res-card">
      <img className= "card-image" alt="logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐️</h4>
      <h4>{costForTwo}</h4>
      <h4> {sla.deliveryTime} min⏳</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="restro-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData= {restaurant} />
        ))}
        
      </div>
    </div>
  );
}; 
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

export default AppLayout;

