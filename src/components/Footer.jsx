import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {/* Logo + About */}
                <div>
                    <h2 className="text-2xl font-bold text-red-500 mb-3">FocusForge</h2>
                    <p className="text-sm text-gray-400">
                        Sharing stories that uplift, inspire, and motivate you every day.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Explore</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/articles" className="hover:underline">Articles</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/subscribe" className="hover:underline">Subscribe</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                    <div className="flex items-center space-x-4">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src="/Instagram.jpg" alt="Instagram" className="w-8 h-8 hover:scale-110 rounded transition-transform" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src="/facebook.jpg" alt="Facebook" className="w-8 h-8 hover:scale-110 rounded transition-transform" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src="/tiktok.jpg" alt="Tiktok" className="w-8 h-8 hover:scale-110 rounded transition-transform" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src="/snap.jpg" alt="Snapchat" className="w-8 h-8 hover:scale-110 rounded transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} FocusForge. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
