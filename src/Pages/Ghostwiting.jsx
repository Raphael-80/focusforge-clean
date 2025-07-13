import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgzwndk"; // <- replace

export default function Ghostwriting() {
  const [sent, setSent]   = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      name:        e.target.name.value,
      email:       e.target.email.value,
      contentType: e.target.contentType.value,
      topic:       e.target.topic.value,
      length:      e.target.length.value,
      notes:       e.target.message.value,
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) setSent(true);
      else throw new Error("Network error");
    } catch (err) {
      alert("Couldn’t send—please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar solid />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Ghostwriting Services
          </h1>

          {sent ? (
            <p className="text-green-600 text-center text-lg">
              ✅ Your request was sent! I’ll reply shortly.
            </p>
          ) : (
            <>
              <p className="mb-8 text-center">
                Need compelling content but no time to write it? Fill out the
                form below—your words, my craft.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* name + email (stack on mobile, side‑by‑side on md) */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                </div>

                {/* type + length */}
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="contentType"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  >
                    <option>Article</option>
                    <option>Blog Post</option>
                    <option>Speech</option>
                    <option>Social Media Thread</option>
                    <option>E‑book Chapter</option>
                  </select>

                  <input
                    name="length"
                    placeholder="Word Count (e.g., 800)"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                </div>

                {/* topic */}
                <input
                  name="topic"
                  placeholder="Topic / Title"
                  required
                  className="border border-gray-300 p-3 rounded-md w-full"
                />

                {/* notes */}
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Details, tone, deadline..."
                  className="border border-gray-300 p-3 rounded-md w-full"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Request"}
                </button>
              </form>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
