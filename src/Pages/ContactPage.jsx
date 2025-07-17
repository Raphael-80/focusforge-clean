import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*  1️⃣  Replace with your own Formspree endpoint          */
const CONTACT_ENDPOINT = "https://formspree.io/f/mblkrenz";
/*    (Create a form in Formspree → copy its URL)         */

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      name:    e.target.name.value,
      email:   e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) setSent(true);
      else throw new Error();
    } catch {
      alert("Could not send message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar solid />

      <main className="pt-24 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We’d love to connect with you! Follow us or send us a message below.
        </p>

        {/* Socials */}
        <div className="flex justify-center items-center space-x-6 mb-10">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/facebook.jpg"
              alt="Facebook"
              className="w-10 h-10 hover:scale-110 transition"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/Instagram.jpg"
              alt="Instagram"
              className="w-10 h-10 hover:scale-110 transition"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/tiktok.jpg"
              alt="TikTok"
              className="w-10 h-10 hover:scale-110 transition"
            />
          </a>
        </div>

        {/* Form */}
        {sent ? (
          <p className="text-green-600 text-xl">✅ Message sent! Thank you.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500 mt-8">
          Or email us at <strong>focusforge@gmail.com</strong>
        </p>
      </main>

      <Footer />
    </>
  );
}
