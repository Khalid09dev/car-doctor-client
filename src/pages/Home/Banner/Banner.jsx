
const Banner = () => {
    return (
        <div className="carousel h-[600px] w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/8PtPjWJd/5.jpg" className="w-full" />
                <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 left-14 right-5 bottom-0">
                    <div>
                        <h1 className="text-white text-[55px] font-bold leading-[65px]">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-white text-[18px] py-6 font-normal">There are many variations of passages of available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-4">
                            <button className="text-white text-[16px] font-medium py-4 px-6 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="text-white text-[16px] font-medium py-4 px-6 rounded-md border-white border-[1px]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 ]">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/284hJ0tk/3.jpg" className="w-full" />
                <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 left-14 right-5 bottom-0">
                    <div>
                        <h1 className="text-white text-[55px] font-bold leading-[65px]">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-white text-[18px] py-6 font-normal">There are many variations of passages of available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-4">
                            <button className="text-white text-[16px] font-medium py-4 px-6 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="text-white text-[16px] font-medium py-4 px-6 rounded-md border-white border-[1px]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/j2YC4btz/4.jpg" className="w-full" />
                <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 left-14 right-5 bottom-0">
                    <div>
                        <h1 className="text-white text-[55px] font-bold leading-[65px]">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-white text-[18px] py-6 font-normal">There are many variations of passages of available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-4">
                            <button className="text-white text-[16px] font-medium py-4 px-6 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="text-white text-[16px] font-medium py-4 px-6 rounded-md border-white border-[1px]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/63Y1d9dP/6.jpg" className="w-full" />
                <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 left-14 right-5 bottom-0 bg-slate-400 bg-opacity-10">
                    <div> 
                        <h1 className="text-white text-[55px] font-bold leading-[65px]">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-white text-[18px] py-6 font-normal">There are many variations of passages of available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-4">
                            <button className="text-white text-[16px] font-medium py-4 px-6 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="text-white text-[16px] font-medium py-4 px-6 rounded-md border-white border-[1px]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>
    );
};

export default Banner;