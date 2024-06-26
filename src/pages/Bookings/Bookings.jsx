import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from 'sweetalert2'

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBookings(data)
        })
    }, [url])


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);

                        if(data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Booking has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                }
            });
    }


    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'  
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                //update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
            <div className="overflow-x-auto">
                <h2 className="text-5xl">Your Bookings: {bookings.length}</h2>
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th></th>
                    <th>customerName</th>
                    <th>Service</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingsRow>)
                    }
                </tbody>
                </table>
            </div>
    );
};

export default Bookings;