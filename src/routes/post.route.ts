import { Router } from 'express';
import { postController } from '@/controllers';
import { validateSchemaMiddleware } from '@/middlewares';
import { postSchema } from '@/schemas';

const postRouter = Router();
postRouter.post('/post', validateSchemaMiddleware(postSchema), postController.postLink);
postRouter.get('/post', postController.getPosts);
export { postRouter };
