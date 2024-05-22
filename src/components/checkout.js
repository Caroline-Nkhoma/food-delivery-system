import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";
import food from "./images/burger.png";



const Checkout = () => {

    return (
        <>
 <NavBar />
            {/* div supposed to be linked to previous page*/}
            <Link to="/checkout" className="">
                <p className="px-60 mb-1.5 font-bold flex text-3xl items-center">
                    <MdOutlineArrowBackIos className="mr-1 h-6 text-3xl" />
                    Back
                </p>
            </Link>
            <div className="px-60">
                <div className="flex bg-gray-100 items-center py-36 justify-around min-h-96  rounded-lg">
                    <div className="h-96">
                        <img
                            src={food}
                            alt="payImage"
                            className="h-96 rounded-lg"
                        />
                    </div>

                    <div className="flex-column pr-1 min-w-16 mr-40">
                        <h1 className="font-bold mb-5 text-4xl">Burger</h1>
                        <h2 className="text-2xl mb-5">MWK2,500</h2>
                        
                        <div>
                            <div className="mb-3 w-96 flex items-center">
                            <p className="font-normal">
                                Enjoy our juicy, premium beef patty seasoned to perfection, nestled in a toasted brioche bun with fresh lettuce, tomatoes, pickles, cheddar cheese, and signature burger sauce. A delicious, mouthwatering meal delivered straight to your door!
                                </p>
                            </div>
                            <button className="bg-orange-600 py-4 px-20 text-white mt-5  rounded font-medium text-2xl">
                                Proceed
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}


export default Checkout;