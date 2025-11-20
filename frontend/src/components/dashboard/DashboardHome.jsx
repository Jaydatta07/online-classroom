import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Jaydatta Shinde",
    email: "jaydatta@example.com",
    phone: "9876543210",
    role: "Student",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-0 flex justify-start items-start">
      <div className="bg-white shadow-lg rounded-xl w-[560px] max-w-2xl overflow-hidden">
        
        {/* Cover Image */}
        <div className="w-full h-40 bg-blue-600 relative">
          <img
            src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1350&q=80"
            alt="cover"
            className="w-full h-full object-cover"
          />

          {/* Profile Avatar Over the Cover */}
          <div className="absolute left-6 -bottom-14">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="w-28 h-28 rounded-full shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* User Name & Role */}
        <div className="pt-20 px-6">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500 mb-4">{user.role}</p>
        </div>

        {/* Form */}
        <div className="px-6 mt-4 space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
        </div>

        {/* Update Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleUpdate}
            className="w-full bg-blue-600 mt-6 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
