import { FaCrown, FaSmile, FaTrophy, FaHome } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { icon: <FaCrown />, count: "9k+", label: "Premium Property", color: "bg-orange-300" },
    { icon: <FaSmile />, count: "5k+", label: "Happy Customer", color: "bg-indigo-300" },
    { icon: <FaTrophy />, count: "30+", label: "Award Winning", color: "bg-green-300" },
    { icon: <FaHome />, count: "15", label: "Years Experience", color: "bg-gray-300" },
  ];

  return (
    <div className="flex justify-center items-center gap-12 py-4 bg-white">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <div className={`w-16 h-16 flex justify-center items-center rounded-full ${stat.color}`}>
            <span className="text-white text-2xl">{stat.icon}</span>
          </div>
          <h3 className="text-2xl font-bold">{stat.count}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
