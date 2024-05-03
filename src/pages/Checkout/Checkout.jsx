import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service  = useLoaderData([]);
    const {title, id} = service;
    return (
        <div>
            <div className="relative">
                <img className="w-full" src="https://i.postimg.cc/1Rc91mxj/checkout.png" alt="#" />
                <h2 className="absolute bottom-36 left-24 text-white text-[45px] font-bold">Check Out</h2>
                <div className="absolute bottom-0 left-1/2">
                <div className="relative">
                    <img draggable={false} className="left-1/2 select-none h-14 transform -translate-x-1/2" src="https://i.postimg.cc/d3zK2VL8/svgviewer-png-output.png" alt="#" />
                    <p className="absolute text-white text-xl font-medium top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">Home/Checkout</p>
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-20">
            <form className="p-24 bg-[#F3F3F3] w-3/4">
                <div className="grid grid-cols-2"> 
                    <input className="bg-white py-3 pl-5 mr-6 mb-5 rounded-lg" type="text" name="firstname" id="" placeholder="First Name"/>
                    <input className="bg-white py-3 pl-5 mb-5 rounded-lg" type="text" name="lastname" id="" placeholder="Last Name"/>
                    <input className="bg-white py-3 pl-5 mr-6 rounded-lg mb-5" type="number" name="phone" id="" placeholder="Your Phone"/>
                    <input className="bg-white py-3 pl-5 rounded-lg mb-5" type="email" name="email" id="" placeholder="Your Email"/>
                </div>
                <textarea className="w-full bg-white rounded-lg placeholder:pl-5 pt-5" name="textarea" id="" cols="60" rows="10" placeholder="Your Message"></textarea> <br />
                <input className="w-full bg-[#FF3811] py-3 rounded-lg text-white text-base font-medium" type="submit" value="Order Confirm" />
            </form>
            </div>
        </div>
    );
};

export default Checkout;