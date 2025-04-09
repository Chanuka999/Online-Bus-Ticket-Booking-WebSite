import React from "react";
import RootLayout from "../../../Components/Layout/RootLayout";
import ServiceCard from "../../../Components/Service/ServiceCard";
import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri";
import { PiHeadsetFill } from "react-icons/pi";
import {
  FaBus,
  FaCalendarAlt,
  FaChair,
  FaLock,
  FaMobileAlt,
  FaBell,
  FaUserShield,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBus className="text-4xl text-blue-600" />,
    title: "Online Bus Booking",
    description:
      "Easily search, compare, and book bus tickets to your preferred destinations in minutes.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-green-600" />,
    title: "Real-Time Schedule",
    description:
      "Get up-to-date departure times, routes, and seat availability anytime, anywhere.",
  },
  {
    icon: <FaChair className="text-4xl text-orange-500" />,
    title: "Seat Selection",
    description:
      "Choose your favorite seat from an interactive bus seat map before confirming your booking.",
  },
  {
    icon: <FaLock className="text-4xl text-red-500" />,
    title: "Secure Payment",
    description:
      "Make fast and secure payments through trusted gateways like PayPal or Stripe.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-purple-600" />,
    title: "Mobile Friendly",
    description:
      "Enjoy a seamless experience on all devices with our fully responsive design.",
  },
  {
    icon: <FaBell className="text-4xl text-yellow-500" />,
    title: "Alerts & Notifications",
    description:
      "Receive instant updates about your bookings, cancellations, and more.",
  },
  {
    icon: <FaUserShield className="text-4xl text-pink-500" />,
    title: "Admin Panel",
    description:
      "Admins can manage users, buses, and bookings through a powerful dashboard.",
  },
];

const Services = () => {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full  items-center justify-center text-center p-12">
        <h1 className="text-3xl text-neutral-800 font-bold ">
          Our <span className="text-red-500">Services</span>
        </h1>
      </div>

      <div className="w-full grid grid-cols-3 gap-10 ">
        <ServiceCard
          icon={RiSecurePaymentLine}
          title={"secure Payment"}
          desc={
            "intergeate secure payment getways for users to pay the tickets"
          }
        />

        <ServiceCard
          icon={RiRefund2Line}
          title={"Refund policy"}
          desc={
            "offer option for the users to purchas refundable tickets with  claer terms"
          }
        />

        <ServiceCard
          icon={PiHeadsetFill}
          title={"24/7 Support"}
          desc={"Get assistance anytime through chat, email or moblie"}
        />
      </div>
      <p className="text-lg text-gray-600 mb-12">
        We provide a wide range of features to enhance your travel experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </RootLayout>
  );
};

export default Services;
