
const BookingsRow = ({booking, handleDelete, handleBookingConfirm}) => {
    const {_id, customerName, email, date, service, price, status} = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        <td>
            <div className="flex items-center gap-3">
            <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
                <div className="font-bold">{customerName}</div>
            </div>
            </div>
        </td>
        <td>
            {service}
        </td>
        <td>{email}</td>
        <td>${price}</td>
        <td>{date}</td>
        <th>
            {
                status === 'confirm' ? <span>confirmed</span> :
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
            }
        </th>
        </tr>
    );
};

export default BookingsRow;