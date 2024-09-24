import React, { useState } from 'react';

const PostPageUI = ({ posts }) => {
    console.log(posts)
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
            {currentPosts.length > 0 ? (
                currentPosts.map((post, index) => (
                    <div key={index} className="bg-white p-6 mb-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No posts available</p>
            )}


            <div className="flex justify-center mt-8">
                {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(pageNumber => (
                    <button
                        key={pageNumber + 1}
                        onClick={() => paginate(pageNumber + 1)}
                        className={`mx-1 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 ${
                            currentPage === pageNumber + 1 ? 'bg-blue-700 font-bold' : ''
                        }`}
                    >
                        {pageNumber + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PostPageUI;
