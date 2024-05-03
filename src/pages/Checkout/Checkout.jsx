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
            <h2>{title}</h2>
            <h2>Book Service:</h2>
        </div>
    );
};

export default Checkout;