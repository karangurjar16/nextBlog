'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Blog {
  id: number;
  title: string;
  content: string;
  postDate: string;
}

export default function BlogPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      setLoading(false);
      return;
    }

    axios
      .get(`/api/blog/${numericId}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }



  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500">
        Published on: {new Date(blog.postDate).toLocaleDateString()}
      </p>
      <div className="mt-4">
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
