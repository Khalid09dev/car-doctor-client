import {Link} from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service;
    return (
        <div className="card w-96 bg-slate-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ml-2 text-center">
                <h2 className="card-title text-[#444] text-[25px] font-semibold">{title}</h2>
                <p className="text-xl font-semibold text-[#FF3811] text-left">Price: ${price}</p>
                    <Link to={`/book/${_id}`} className="card-actions">
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
            </div>
        </div>
    );
};

export default ServiceCard;