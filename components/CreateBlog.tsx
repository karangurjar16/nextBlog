"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter()

  async function addBlog(){
    try {
      const response = await axios.post("http://localhost:3000/api/blog", {
        title,
        content,
      });
      console.log(response);
      
      alert("Blog added Sucessfully");
      router.push('/')
    } catch (error) {
      console.error("Failed to add blog:", error);
      return { success: false, message: "Failed to add blog."};
    }
      
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Blog Created:", { title, content });
    addBlog();

  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Create New Blog</h2>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 text-lg font-medium mb-2">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your blog title"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 text-lg font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content here"
              rows={8}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-200 focus:outline-none"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
