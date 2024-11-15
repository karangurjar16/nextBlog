"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import Loading from './Loading';
import Link from "next/link";



export function Index() {
    const [blogs,setblogs] = useState([]);
    const [loading,setLoading] = useState(true);

    async function getallBlogs(){
      const res = await axios.get("http://localhost:3000/api/blog");
      const blogss = res.data; 
      console.log(blogss);
      
      setblogs(blogss);
      setLoading(false)
      
    }


    useEffect(()  =>{
        getallBlogs();
    },[])



    if(loading){
      return <Loading/>
    }

    return <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Blog Dashboard</h1>
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Posted Date</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">
                <Link href={`/Blog?id=${blog.id}`}>
                  {blog.title}
                </Link>
              </td>
              <td className="px-6 py-4">
                {new Date(blog.postDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

}

