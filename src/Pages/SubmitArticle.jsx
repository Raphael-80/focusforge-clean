import { useState } from "react";
import Navbar from "../components/Navbar";

const SubmitPage = () => {
    const [form, setForm] = useState({
        title: "",
        author: "",
        image: "",
        date: "",
        content: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Article:", {
            ...form,
            imageName: form.image?.name,
        });
    };

    return (
        <div>
            <Navbar solid />
            <div className="max-w-3xl mx-auto pt-24 px-4">
                <h1 className="text-3xl font-bold mb-6">Submit New Article</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="title"
                        placeholder="Article Title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <input
                        name="author"
                        placeholder="Author Name"
                        value={form.author}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                        className="w-full border border-gray-300 p-3 rounded-md bg-white"
                    />
                    <input
                        name="date"
                        placeholder="Date (e.g. 25 June, 2025)"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <textarea
                        name="content"
                        placeholder="Article Content"
                        rows="6"
                        value={form.content}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                        Submit Article
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubmitPage;
