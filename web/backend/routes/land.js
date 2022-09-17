import express from 'express';

import { getLandById, getLands, createLand, updateLandById, deleteLandById } from '../controllers/land.js';

const router = express.Router();

router.get('/', getLands);
router.post('/', createLand);
router.get('/:landId', getLandById);
router.patch('/:landId', updateLandById);
router.delete('/:landId', deleteLandById);

export default router;