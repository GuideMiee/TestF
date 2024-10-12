import React from "react";
import {
  Book,
  Award,
  Briefcase,
  User,
  Code,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";



const Resume = () => {
  return (
    <div className="bg-white p-6 max-w-4xl mx-auto font-sans">
      <div className="flex flex-col sm:flex-row items-center mb-6 bg-gray-100 p-4 rounded-lg">
        <img
          src="public/images/IMG_8927.jpg"
          alt="Profile"
          className="w-24 h-24 object-cover rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-white"
        />

        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            THAMMATORN SUDJAI
          </h1>
          <p className="text-blue-600 font-semibold">
            FRONT END, BACK END, FULL STACK
          </p>
          <p className="text-gray-600">Guide | Age 21</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Section title="Education" icon={<Book className="text-blue-500" />}>
            <p className="text-gray-600 font-semibold">University</p>
            <p className="text-gray-600">Sripratum University</p>
            <p className="text-gray-600">Information Technology</p>
            <p className="text-gray-600">GPA: 3.63</p>
          </Section>

          <Section
            title="Certificate"
            icon={<Award className="text-blue-500" />}
          >
            <p className="font-semibold">Basic Cybersecurity</p>
            <p className="text-gray-600">MOOC - 2024</p>
            <p className="font-semibold mt-2">Basic Cybersecurity</p>
            <p className="text-gray-600">Ministry of Labour</p>
            <p className="text-gray-600">2024</p>
          </Section>

          <Section
            title="Experience"
            icon={<Briefcase className="text-blue-500" />}
          >
            <p className="font-semibold">Network Administrator</p>
            <p className="text-gray-600">EX1T - Oct - Dec 2020</p>
          </Section>
        </div>

        <div>
          <Section
            title="Introduction"
            icon={<User className="text-blue-500" />}
          >
            <p className="text-gray-700 text-sm">
              I am a proactive and adaptable individual committed to continuous
              skill development and growth. My strong willingness to learn and
              my ability to quickly adjust to new environments enable me to
              contribute effectively to diverse teams and projects. I am eager
              to leverage my skills and experiences to drive success and achieve
              excellence in every opportunity.
            </p>
          </Section>

          <Section title="Skills" icon={<Code className="text-blue-500" />}>
            <p className="font-semibold mb-2">Coding Language</p>
            <ul className=" list-disc grid grid-cols-2 gap-3  list-inside text-gray-700">
              <li>Python</li>
              <li>C++</li>
              <li>HTML/CSS</li>
              <li>React</li>
            </ul>
          </Section>

          <Section title="Program" icon={<Code className="text-blue-500" />}>
            <div className="grid grid-cols-4 gap-3">
              <img
                src="public/images/premierepro.png"
                alt="Premiere Pro"
                className="w-8 h-8"
              />
              <img
                src="public/images/photoshop.png"
                alt="Photoshop"
                className="w-8 h-8"
              />
              <img
                src="public/images/vscode.png"
                alt="Visual Studio Code"
                className="w-8 h-8"
              />
              <img
                src="public/images/vb.png"
                alt="Visual Studio"
                className="w-8 h-8"
              />
              <img
                src="public/images/github.png"
                alt="GitHub"
                className="w-8 h-8"
              />
              <img
                src="public/images/word.png"
                alt="Word"
                className="w-8 h-8"
              />
              <img
                src="public/images/powerpoint.png"
                alt="PowerPoint"
                className="w-8 h-8"
              />
              <img
                src="public/images/canva.png"
                alt="Canva"
                className="w-8 h-8"
              />
            </div>
          </Section>

          <Section title="Language" icon={<Globe className="text-blue-500" />}>
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-2 px-4">Language</th>
                  <th className="text-center py-2 px-4">Speak</th>
                  <th className="text-center py-2 px-4">Read</th>
                  <th className="text-center py-2 px-4">Write</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Thai</td>
                  <td className="text-center py-2 px-4">Good</td>
                  <td className="text-center py-2 px-4">Good</td>
                  <td className="text-center py-2 px-4">Good</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4">English</td>
                  <td className="text-center py-2 px-4">Good</td>
                  <td className="text-center py-2 px-4">Good</td>
                  <td className="text-center py-2 px-4">Medium</td>
                </tr>
              </tbody>
            </table>
          </Section>
        </div>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg flex items-center justify-between px-12">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <Phone className="text-blue-500 mr-2" />
          Contact
        </h2>
        <div className="ml-2 text-sm ">
          <div className="flex items-center mb-2">
            <Phone size={16} className="text-gray-600 mr-2" />
            <span>095-727-5534</span>
          </div>
          <div className="flex items-center mb-2">
            <Mail size={16} className="text-gray-600 mr-2" />
            <span>Thammatorn.sud@gmail.com</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="text-gray-600 mr-2" />
            <span>2398 Phahonyothin Road, Senanikom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, icon, children }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        {icon}
        <h2 className="text-xl font-semibold ml-2">{title}</h2>
      </div>
      <div className="ml-6">{children}</div>
    </div>
  );
};

export default Resume;
