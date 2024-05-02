import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-[#FF3811] text-xl font-semibold text-center pt-10">Service</h3>
                <h2 className="text-[#FFFFFF] text-[45px] font-bold text-center ">Our Service Area</h2>
                <p className="text-[#] text-[#FFFFFF] text-center pb-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don<span>&#39;</span>t look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                { 
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;