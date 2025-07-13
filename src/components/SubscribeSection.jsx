const SubscribeSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 mb-6">
          Get motivational and inspirational articles delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-md text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="bg-red-600 px-6 py-3 rounded-md text-white font-medium hover:bg-red-700 transition"
          >
            Subscribe →
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
