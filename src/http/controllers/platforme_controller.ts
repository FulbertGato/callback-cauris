import { Request, Response } from 'express';
import {getRepository} from "../../config/config";
import IPlatformeRepository from "../../dao/interfaces/i_platforme_repository";

class  PlatformeController {
    private platformeRepository: IPlatformeRepository;

    constructor(){
        this.platformeRepository = getRepository('platforme', 'mariadb') as IPlatformeRepository;
    }
    public async listPlatformes(req: Request, res: Response) {
        res.send('Hello World!');
    }
}

export default PlatformeController;