import express from 'express';
import PlatformeController from "../http/controllers/platforme_controller";


const router = express.Router();


router.get('/', new PlatformeController().listPlatformes);



export default router;
