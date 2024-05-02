
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.postimg.cc/0j5gcLw6/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.postimg.cc/6pfm1HBn/parts.jpg" className="w-1/2 rounded-lg shadow-2xl absolute left-64 bottom-1 top-40 border-8 border-white" alt="#" />
                </div>
                <div className="lg:w-1/2">
                <h1 className="text-[#FF3811] text-xl font-semibold">About Us</h1>
                <h2 className="text-[#FFFFFF] leading-[50px] text-[45px] font-semibold pt-5 pb-7">We are qualified <br /> & of experience <br /> in this field</h2>
                <p className="text-base font-normal text-[#737373] pb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className="text-base font-normal text-[#737373] pb-7">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className="py-4 px-6 text-white font-semibold text-base bg-[#FF3811] rounded-md">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;