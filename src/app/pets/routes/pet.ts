import { Router } from 'express';
import { read, create, remove, update } from '../controllers/pet';

const router = Router();

router.get('/', read);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', remove);

export default router;
