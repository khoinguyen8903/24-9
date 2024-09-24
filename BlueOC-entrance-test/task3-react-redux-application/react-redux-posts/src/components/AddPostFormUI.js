import React, { useState } from 'react';

const AddPostFormUI = ({ onAddPost }) => {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });
    const [error, setError] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim() || !formData.body.trim()) {
            setError('Both title and body are required.');
            return;
        }
        setError('');
        onAddPost(formData);
        setFormData({
            title: '',
            body: ''
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${error && !formData.title.trim() ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        placeholder="Enter post title"
                    />
                    {error && !formData.title.trim() && <p className="text-red-500 text-sm">Title is required.</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Body</label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${error && !formData.body.trim() ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        placeholder="Enter post body"
                    />
                    {error && !formData.body.trim() && <p className="text-red-500 text-sm">Body is required.</p>}
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                >
                    Add Post
                </button>

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default AddPostFormUI;
