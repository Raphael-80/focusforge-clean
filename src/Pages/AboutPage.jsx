import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar solid />
      <main className="pt-24 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About FocusForge</h1>
        <p className="text-lg text-gray-600 mb-8">
          FocusForge is a platform dedicated to sharing inspirational and motivational articles to uplift minds and spark transformation. We believe that words have the power to heal, guide, and push people forward.
        </p>

        <div className="text-left space-y-6">
          <p className="text-gray-700">
            Founded by <strong>Chizzy</strong>, this platform was created out of a deep passion to encourage people through storytelling and empowering messages. Whether it’s a tough day, a new beginning, or a long journey — there's always a story that speaks to you.
          </p>

          <p className="text-gray-700">
            We welcome contributors from all walks of life who have something valuable and authentic to share. Every voice matters, and every story counts.
          </p>

          <p className="text-gray-700">
            Thank you for being here. Whether you’re reading, writing, or just passing through — we hope you leave better than you came.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
