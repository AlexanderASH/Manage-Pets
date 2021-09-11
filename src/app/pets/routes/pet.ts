import { Router } from 'express';
import { read, create, remove, update } from '../controllers/pet';

const router = Router();

router.get('/', read);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
