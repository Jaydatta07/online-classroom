import React from "react";
import { BookOpen, Video, Users, Brain } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Create & Manage Courses",
    desc: "Easily build, organize, and manage your online courses with flexible tools and intuitive dashboards.",
  },
  {
    icon: <Video className="w-8 h-8 text-blue-600" />,
    title: "Host Live Sessions",
    desc: "Engage learners in real-time with video sessions, whiteboards, and screen sharing features.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Collaborate & Learn",
    desc: "Students and teachers can collaborate seamlessly through chat, group discussions, and shared notes.",
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "AI-Powered Insights",
    desc: "Get AI-driven performance analytics and smart suggestions to enhance learning outcomes.",
  },
];

const InfoSection = () => {
  return (
    <section className="relative py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Everything You Need for Modern Online Learning
        </h2>
        <p className="text-gray-600 mb-12">
          Our platform combines simplicity with powerful tools to help educators and learners
          connect, collaborate, and grow together.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
