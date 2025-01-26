import { Handshake, Shrub, DollarSign, Scale, Contact, Star } from 'lucide-react';
import Card from './Card';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => { AOS.init(); }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-16 px-4">
        <div data-aos="fade-up" className='container justify-center text-center text-gray-700 mb-30'>
            <h1 className="text-3xl font-bold mb-9">"Keep learning-Keep building-Keep growing"</h1>
            <p className="text-base md:text-lg block md:w-250 mx-auto">
                Hello! My name is Ham, and I’m a passionate web developer with expertise in building responsive and user-friendly websites. 
                I specialize in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Tailwind. 
                I’m always eager to learn new skills and keep up with the latest trends in web development to create modern, efficient, 
                and visually appealing websites.
                </p>
        </div>
      <div className="max-w-5xl mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-900 mb-16">Life Goals</h1>
        
        <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            icon={Handshake} 
            title="Inspiring teamwork"
            className="bg-cyan-50"
          />
          
          <Card 
            icon={DollarSign} 
            title="High income"
            className="bg-cyan-50"
          />
          
          <Card 
            icon={Shrub} 
            title="Skill growth"
            className="bg-cyan-50"
          />
          
          <Card 
            icon={Scale} 
            title="Work-life balance"
            className="bg-cyan-50"
          />
          
          <Card 
            icon={Contact} 
            title="Career satisfaction"
            className="bg-cyan-50"
          />
          
          <Card 
            icon={Star} 
            title="Strong reputation"
            className="bg-cyan-50"
          />
        </div>
      </div>
    </div>
  );
}

export default App;