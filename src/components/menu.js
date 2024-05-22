import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from './images/steers-chikanda-logo.png';
import burger from './images/burger.png';
import chipsChicken from './images/chips-chicken.png';
import coffeeTea from './images/coffee-tea.png';
import coffee from './images/coffee.png';
import pizza from './images/pizza.png';
import riceBeans from './images/rice-beans.png';
import riceChicken from './images/rice-chicken.png';
import salad from './images/salad.png';
import spaghettiMeatBalls from './images/spaghetti-meat-balls.png';
import spaghettiSoya from './images/spaghetti-soya.png';

function RestaurantDetails({ logo, name, location }) {
  return (
    <div className="flex items-center gap-10 mt-10">
      <div className="w-40 h-40 rounded-3xl overflow-hidden bg-black">
        <img src={logo} alt="Restaurant Logo" />
      </div>
      <div>
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p>{location}</p>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <p className="text-green-600">Open</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="mt-20 mb-7">
      <h1 className="text-5xl font-bold mb-4">Checkout our menu!</h1>
      <hr className="border bg-gray-500"></hr>
    </div>
  );
}

function MenuItem({ image, name, price }) {
  return (
    <div className="flex flex-col w-64 h-80 mr-8 p-6 justify-between items-center bg-gray-200 text-black text-xl rounded-2xl">
      <div className="w-full h-full rounded-3xl p-0 mb-1 overflow-hidden bg-transparent">
        <img src={image} alt={name} className="w-full h-full  object-cover" />
      </div>
      <div className="flex flex-col items-center mb-2 mt-0">
        <h2 className="font-bold text-base">{name}</h2>
        <p className="text-center">{price}</p>
      </div>
      <Link to="/Checkout" className="w-full">
        <button className="w-full p-2 bg-orange-600 text-white rounded-md">
          Order
        </button>
      </Link>
    </div>
  );
}

function Menu() {
  return (
    <>
      <Navbar />
      <div className="px-60">
        <RestaurantDetails logo={logo} name={"Steers Chikanda"} location={"Chikanda - Near Matiya"} />
        <CallToAction />
      </div>

      <div className="flex px-60">
        <MenuItem image={burger} name={"Burger"} price={"MWK2,500"}/>
        <MenuItem image={pizza} name={"Pizza"} price={"MWK4,500"}/>
        <MenuItem image={spaghettiMeatBalls} name={"Spaghetti & Meatballs"} price={"MWK3,500"}/>
        <MenuItem image={spaghettiSoya} name={"Spaghetti & Soya Pieces  "} price={"MWK3,500"}/>
        <MenuItem image={chipsChicken} name={"Chips & Chicken"} price={"MWK3,500"}/>
      </div>

      <div className="flex px-60 mt-8">
        <MenuItem image={salad} name={"Greek Salad"} price={"MWK1,000"}/>
        <MenuItem image={coffeeTea} name={"Coffee & Cake"} price={"MWK4,500"}/>
        <MenuItem image={coffee} name={"Burger"} price={"MWK1,500"}/>
        <MenuItem image={riceChicken} name={"Burger"} price={"MWK1,500"}/>
        <MenuItem image={riceBeans} name={"Burger"} price={"MWK1,500"}/>
      </div>

      <div className="flex px-60 mt-8">
        <MenuItem image={burger} name={"Burger"} price={"MWK1,500"}/>
        <MenuItem image={burger} name={"Burger"} price={"MWK1,500"}/>
        <MenuItem image={burger} name={"Burger"} price={"MWK1,500"}/>
        <MenuItem image={burger} name={"Burger"} price={"MWK1,500"}/>
        <MenuItem image={burger} name={"Burger"} price={"MWK1,500"}/>
      </div>

    </>
  );
}

export default Menu;
