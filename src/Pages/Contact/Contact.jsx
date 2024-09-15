import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Footer from "../../Components/Footer/Footer";

const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  popupAnchor: [-3, -38],
});

const Contact = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div>
        <div className="bg-white text-gray-800">
          {/* Header Section */}
          <header className="bg-black text-white p-8 text-center">
            <h1 className="text-5xl font-extrabold leading-tight tracking-wide uppercase">
              Contact Us
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed">
              Discover the world with{" "}
              <span className="font-bold text-blue-500">TourIndia</span>. Our
              team is here to help you plan the perfect getaway, from exploring
              vibrant cities to relaxing on secluded beaches. Reach out to us
              for personalized travel advice, bookings, or any inquiries you may
              have.
            </p>
            <button
              onClick={handleBackToHome} 
              className="mt-6 px-10 py-4 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </button>
          </header>

          {/* Contact Form Section */}
          <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1638295402787-68719e720b8c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact Us"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Feel Free To Get In Touch
              </h2>
              <p className="mb-8 text-lg leading-relaxed">
                Whether you're looking for adventure or a quiet escape,
                TourIndia is here to help you create memories that last a
                lifetime. Fill out the form below, and one of our travel experts
                will get back to you shortly with the best travel options
                tailored just for you.
              </p>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 px-4 py-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 px-4 py-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </section>

          {/* Map */}
          <section className="container mx-auto px-4 py-16">
            <MapContainer
              center={[22.6573, 88.3624]}
              zoom={13}
              className="h-96 w-full rounded-lg shadow-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={[22.6573, 88.3624]} icon={customIcon}>
                <Popup>Visit Us: TourIndia Office, New York, NY, USA</Popup>
              </Marker>
            </MapContainer>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
