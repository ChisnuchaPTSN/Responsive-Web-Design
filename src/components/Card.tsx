interface CardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  className?: string;
}

function Card({ icon: Icon, title, className = "" }: CardProps) {
  return (
    <div className="bg-white p-10  rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${className}`}
      >
        <Icon className="w-8 h-8 text-cyan-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    </div>
  );
}

export default Card;
