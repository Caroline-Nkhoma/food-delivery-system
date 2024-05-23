import { Link, useLocation } from 'react-router-dom';
import logo from './images/cm-logo.svg';

function Navbar() {
    const {pathname}=useLocation();

    let renderLogin=false;

    if(pathname==="/Home"|| pathname==="/"){
        renderLogin=true;
    }
    console.log(pathname);
    console.log(renderLogin);
    
    return <>
        <div>
            <div className="flex px-60 h-10 ml-6 mr-6 pt-20 pb-20 items-center justify-center font-sans font-medium text-xl">
                <nav className="flex w-full justify-between items-center">
                    <Link to="/">
                        <img src={logo} alt="FDS Logo" className="w-56" />
                    </Link>
                    <div className="flex w-90 items-center justify-between">
                        <ul className="flex w-1/3 justify-between font-normal">
                            <li className="p-5">
                                <Link to="/Home">Home</Link>
                            </li>
                            <li className="p-5">
                                <Link to="/Restaurants">Restaurants</Link>
                            </li>
                            <li className="p-5">
                                <Link to="/About">About</Link>
                            </li>
                        </ul>
                        {renderLogin&&
                        <div className="ml-5">

                            <Link to="#">
                                <button className="px-5 py-2.5 border-2 border-gray-800 text-xl text-black ml-5 bg-transparent rounded-lg">
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/Login">
                                <button className="px-5 py-2.5 border-2 border-gray-800 text-xl text-white ml-5 bg-gray-900 rounded-lg">Log In</button>
                            </Link>

                        </div>
                        }
                    </div>
                </nav>
            </div>

        </div>
    </>;
}

export default Navbar;