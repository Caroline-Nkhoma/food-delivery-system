
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import meal from './images/meal-plate.png';

const handleButtonClick = () => {
    fetch('https://ntfy.sh/omikhe', {
        method: 'POST',
        body: 'Your order is on the way!',
        headers: {
            'Title': 'Chirunga Munchies',
            'Priority': 'urgent'
        }
    })
        .then((response) => {
            console.log('Notification sent successfully');
        })
        .catch((error) => {
            console.error('Error sending notification:', error);
        });
};


function Home() {
    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-col justify-center items-center text-center">
                <div className="h-full pl-60 pr-60 pt-40 pb-5  text-7xl ">
                    <h1 className="mr-5 mb-2"><b>Hungry?</b> Let Us</h1>
                    Bring the Food to You!
                </div>
                <h2 className="mr-6 mb-5 text-xl">Simplify Your Meals With <b>Chirunga Munchies</b> Food Delivery System</h2>

                <button onClick={handleButtonClick} className="px-5 py-5 text-xl text-white ml-5 mt-5 bg-orange-600 rounded-lg font-medium">

                    {/*if logged in will lead to "Restaurants page"*/}
                    <Link to="/Restaurants">Order now</Link>

                </button>
            </div>
            <div className="flex w-full justify-center items-center mt-60 fixed">
                <img src={meal} alt="a plate of food" className="md:w-96 h-auto rounded-lg mx-auto mt-40 fixed" />
            </div>
        </>

    )
};
export default Home;

