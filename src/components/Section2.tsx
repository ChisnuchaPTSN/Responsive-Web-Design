import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Section2() {

  useEffect(() => { AOS.init(); }, []);
  
  return (
    <div className="relative min-h-screen bg-slate-100 pt-0 md:pt-30">
      <div className="relative w-full h-[400px] flex flex-col md:flex-row items-center justify-center gap-70">
        <div data-aos="fade-right" className="absolute md:relative top-0 text-white p-5 md:text-left z-40 order-2 md:order-1">
          <h2 className="text-2xl md:text-4xl font-bold mt-10">
            Contact Me
          </h2>
          <p className="text-sm md:text-lg font-semibold mt-7">
            Contact me for more information. I will contact you back.
          </p>
          <Link to="/contact"
            className="bg-white text-cyan-800 px-6 md:px-8 py-3 md:py-4 rounded-full mt-8 inline-block hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <img data-aos="fade-left"
          src="/Person.PNG"
          alt="Person"
          className="z-30 w-auto h-[400px] md:h-[500px] object-contain top-50 left-20 order-1 md:order-2 relative md:-top-12.5"
        />

        <div className="absolute inset-0 bg-white w-full h-150 md:h-full opacity-50 z-20"></div>

        <img
          src="https://img.freepik.com/free-photo/stratosphere-blue-space-outdoor-cloud_1127-2383.jpg?semt=ais_hybrid"
          alt="Background"
          className="absolute inset-0 w-full h-150 md:h-full object-cover z-10"
        />
      </div>
    </div>
  );
}

export default Section2;