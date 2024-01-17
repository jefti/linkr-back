import prisma from '@/database/database';
import { PostType } from '@/types';

async function createPost(post: PostType) {
  const body = { userId: 1, ...post };
  const createdPost = await prisma.post.create({ data: body });
  return createdPost;
}

async function selectPosts() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' }, take: 10 });
  return posts;
}

export const postRepository = { createPost, selectPosts };
