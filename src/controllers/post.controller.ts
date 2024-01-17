import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { postService } from '@/services';
import { PostType } from '@/types';

async function postLink(req: Request, res: Response) {
  const body = req.body as PostType;
  const createdPost = await postService.registerPost(body);
  res.status(httpStatus.CREATED).send(createdPost);
}
async function getPosts(req: Request, res: Response) {
  const list = await postService.GetPosts();
  res.status(httpStatus.OK).send(list);
}

export const postController = { postLink, getPosts };
