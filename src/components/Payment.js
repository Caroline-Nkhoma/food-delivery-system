import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";
import food from "./images/burger.png";



const Payment = () => {

    function handleSubmit(e) {
        e.preventDefault();
        //handling payment submission code
    }

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

                        <p className="font-bold mb-5 text-4xl">Choose payment method</p>
                        <form onSubmit={(e => handleSubmit(e))}>
                            <div className="mb-3 flex items-center">
                                <input type="radio" name="pay-method" checked="true" />
                                <BiSolidBank className="bg-black h-6 w-6 text-white ml-3 mr-2 text-sm rounded" />
                                <label className="font-normal ml-1">
                                    PayChangu
                                </label>
                            </div>
                            <hr className="font-semibold mb-2 mx-3" />
                            <div className="mb-5 flex items-center">
                                <input type="radio" name="pay-method" />
                                <BiSolidBank className="bg-black h-5 w-5 text-white ml-3 mr-2 rounded" />
                                <label className="font-normal ml-1">
                                    Airtel money
                                </label>
                            </div>
                            <button className="bg-orange-600 py-4 px-20 text-white mt-5  rounded font-medium text-2xl">
                                Proceed
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}


export default Payment;