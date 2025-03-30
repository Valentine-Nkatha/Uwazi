'use client'
import Image from "next/image";
import HeaderComponent from "../components/Navbar";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/Images/human.jpeg",
    description: "John has over 15 years of experience in real estate and technology, leading our vision."
  },
  {
    name: "Jane Smith",
    role: "Chief Operations Officer",
    image: "/Images/human.jpeg",
    description: "Jane ensures smooth operations and excellent client satisfaction across all properties."
  },
  {
    name: "Mark Brown",
    role: "Lead Developer",
    image: "/Images/human.jpeg",
    description: "Mark drives the tech behind our platform, ensuring security and innovation."
  },
  {
    name: "Emily White",
    role: "Head of Marketing",
    image: "/Images/human.jpeg",
    description: "Emily crafts strategies that connect buyers, sellers, and investors effectively."
  }
];

const AboutUs = () => {
  return (
    <div>
      <HeaderComponent/>
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are a dedicated team committed to simplifying real estate transactions
          through technology and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
