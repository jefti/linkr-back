import { postRepository } from '@/repository';
import { PostType } from '@/types';

async function registerPost(post: PostType) {
  const createdPost = await postRepository.createPost(post);
  return createdPost;
}

async function GetPosts() {
  const postList = await postRepository.selectPosts();
  return postList;
}

export const postService = { registerPost, GetPosts };
