import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const client = new PrismaClient();

interface Context {
  params: { id: string };
}

export async function GET(request: Request) {
  const id = "8";

  try {
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      return NextResponse.json({ error: 'Invalid ID format, must be a number' }, { status: 400 });
    }

    const blog = await client.blog.findUnique({
      where: {
        id: numericId,
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
