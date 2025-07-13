import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    console.log("Subscribed email:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <Navbar solid />
      <main className="pt-24 px-4 max-w-xl mx-auto text-center mb-3">
        <h1 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get the latest inspirational articles delivered right to your inbox.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-green-600 text-lg font-medium">
            ✅ Thank you for subscribing!
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default NewsletterPage;
