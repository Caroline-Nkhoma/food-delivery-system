import React from 'react';
import Navbar from './Navbar';
import img from './images/img.png';

//helper function for the open/close sign according to time of the day
function nthawi() {
    const currentTime = new Date(); // Get the current time
    const currentHour = currentTime.getHours(); // Get the current hour (0-23)
    const currentMinute = currentTime.getMinutes(); // Get the current minute (0-59)

    let open_close; // Declare the variable

    // Convert 7:30 AM and 4:30 PM to their respective hour and minute values
    const openingHour = 7;
    const openingMinute = 30;
    const closingHour = 16;
    const closingMinute = 30;

    // Check if the current time is between 7:30 AM and 4:30 PM
    if (
        (currentHour > openingHour || (currentHour === openingHour && currentMinute >= openingMinute)) &&
        (currentHour < closingHour || (currentHour === closingHour && currentMinute < closingMinute))
    ) {
        open_close = 'Open'; // Set the variable to 'open'
    } else {
        open_close = 'Closed'; // Set the variable to 'close'
    }

    return open_close;
}

// function for the colours of the 'Open' and 'Closed' sign on the restaurant card
function OpenClose() {
    let open_close = nthawi();
    if (open_close === 'Open') {
        return <>
            {/* when open*/}
            <div className="w-3 h-3 rounded-full bg-green-500  mr-1"></div>
            <h2 className="text-green-500">{open_close}</h2>
        </>;
    } else if (open_close === 'Closed') {
        return <>
            {/* when closed */}
            <div className="w-3 h-3 rounded-full bg-yellow-500  mr-1"></div>
            <h2 className="text-yellow-500">{open_close}</h2>
        </>;
    }
}

function RestaurantCard(props) {
    return <>
        <div className="w-1/3 mr-5 bg-gray-200  text-black p-10 text-xl rounded-lg">

            <div className="flex mb-5">
                <div className="w-28 h-28 rounded-lg">
                    <img src={img} alt="restaurant logo" />
                </div>
                <div className="ml-5">
                    <h1 className="font-semibold mb-3">{props.name}</h1>
                    <h2 className="mb-3 text-sm text-gray-500">Chikanda - Near Bridge</h2>
                    <div className="flex items-center text-sm">
                        <OpenClose></OpenClose>
                    </div>
                </div>
            </div>
            <button className="w-full border-white p-4 text-white bg-orange-600 rounded-lg">View Menu</button>
        </div>
    </>;
}



function Message() {
    return <>
        <h1 className="h-10 pl-60 pr-60 pt-5 pb-20 text-bold text-5xl font-bold">Choose your restaurant</h1>
    </>;
}

function Restaurants() {
    return <div className="bg-gray-50 ">

        <Navbar></Navbar>
        <Message />
        <div className="flex h-full pl-60 pr-60 pt-5 justify-around">
            <RestaurantCard name={"Bossman Restaurant"}></RestaurantCard>
            <RestaurantCard name={"Akuzike Foods"} />
            <RestaurantCard name={"Steers Chikanda"} />
        </div>
        <div className="flex h-full pl-60 pr-60 pt-5 justify-around">
            <RestaurantCard name={"ChiefChef Delicacy"} />
            <RestaurantCard name={"Undercroft Cafe"} />
            <RestaurantCard name={"Aunt Nina Cafe"} />
        </div>
        <div className="flex h-full pl-60 pr-60 pt-5 pb-20 justify-around">
            <RestaurantCard name={"Makawa Restaurant"} />
            <RestaurantCard name={"UNIMA Food Haven"} />
            <RestaurantCard name={"UNIMA H/Eco Cafe"} />
        </div>
    </div>;
}

export default Restaurants;