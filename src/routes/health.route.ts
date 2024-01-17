import { Router } from 'express';
import { healthController } from '@/controllers';

const healthRouter = Router();
healthRouter.get('/health', healthController.healthFunction);

export { healthRouter };
