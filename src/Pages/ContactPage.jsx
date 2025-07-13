import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Message:", form);
    alert("Message sent! (Not actually submitted yet 😅)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar solid />
      <main className="pt-24 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We’d love to connect with you! Follow us or send us a message below.
        </p>

        {/* Social Media */}
        <div className="flex justify-center items-center space-x-6 mb-10">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.jpg" alt="Facebook" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram.jpg" alt="Instagram" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/tiktok.jpg" alt="Tiktok" className="w-10 h-10 hover:scale-110 transition" />
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8">Or email us at <strong>focusforge@gmail.com</strong></p>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
