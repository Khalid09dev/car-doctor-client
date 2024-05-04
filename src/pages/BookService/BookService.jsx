import Swal from 'sweetalert2'
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
    const service  = useLoaderData([]);
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(order)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Service Booked Successfully.",
                    icon: "success"
                });
            }
        })

    }

    return (
        <div>
            <h1 className="text-2xl text-center">Book Service: {title}</h1>
        <div className="flex justify-center mt-20">
        <form onSubmit={handleBookService} className="px-24 pb-24 pt-0 w-3/4">
            <div className="grid grid-cols-2"> 
                <input className="bg-white py-3 pl-5 mr-6 mb-5 rounded-lg" type="text" name="name" id="" placeholder="Name"/>
                <input className="bg-white py-3 pl-5 mb-5 rounded-lg" type="date" name="date" id=""/>
                <input className="bg-white py-3 pl-5 mr-6 rounded-lg mb-5" type="email" name="email" id="" placeholder="Your Email"/>
                <input className="bg-white py-3 pl-5 rounded-lg mb-5" type="text" name="price" id="" defaultValue={price} placeholder="Due Ammount"/>
            </div>
            <input className="w-full bg-[#FF3811] py-3 rounded-lg text-white text-base font-medium" type="submit" value="Order Confirm" />
        </form>
        </div>
    </div>
    );
};

export default BookService;