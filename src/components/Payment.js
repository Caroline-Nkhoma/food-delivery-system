
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";

import food from "./images/burger.png";



const Payment=()=>{

    function handleSubmit(e){
        e.preventDefault();
        //handling payment submission code
    }

    return(
        <>
        <NavBar />
        {/* div supposed to be linked to previous page*/}
        <Link to="/checkout" className="">
        <p className="px-60 pb-5 font-bold flex items-center mt-6">
            <MdOutlineArrowBackIos className="mr-1 text-2xl"/>
            Back 
        </p>
        </Link>
        <div className="px-60 pb-20">
        <div className="flex bg-gray-100 items-center  justify-around min-h-96  rounded-lg">
            <div>
            <img
                src={food} 
                alt="payImage" 
                className="h-96 rounded-lg"
             />
            </div>

            <div className="flex-column pr-1 min-w-16 ml-5">
                <p className="font-bold mb-5 text-base">Choose payment method</p>

                <form   onSubmit={(e=>handleSubmit(e))}>
                    <div className="mb-3 flex items-center">
                        <input type="radio" name="pay-method" checked="true"/>
                        <BiSolidBank className="bg-black h-6 w-6 text-white ml-3 mr-2 text-sm rounded p-1"/>
                        <label className="font-normal ml-1">
                            PayChangu
                        </label>
                    </div>
                    <hr className="font-semibold mb-2 mx-3"/>
                    <div className="mb-7 flex items-center">
                        <input type="radio" name="pay-method"/>
                        <BiSolidBank className="bg-black h-6 w-6 text-white ml-3 mr-2 rounded p-1"/>
                        <label className="font-normal ml-1">
                            Airtel money
                        </label>
                    </div>
                    <button className="bg-orange-500 py-1 px-8 text-white mt-5  rounded "
                            
                    >
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