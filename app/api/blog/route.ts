import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET() {
    const allBlogs = await client.blog.findMany();
    return NextResponse.json(allBlogs);
    
  }

  export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const now = new Date();
  
      const blog = await client.blog.create({
        data: {
          title: body.title,
          content: body.content,
          postDate: now,
        },
      });
  
      return NextResponse.json({
        message: "New blog is added successfully",
      });
    } catch (error) {
      console.error("Error adding new blog:", error);
  
      return NextResponse.json(
        {
          message: "Failed to add new blog",
        },
        { status: 500 } // Return a 500 status code on error
      );
    }
}