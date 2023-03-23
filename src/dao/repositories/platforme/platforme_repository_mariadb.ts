import IPlatformeRepository from "../../interfaces/i_platforme_repository";


class PlatformeRepositoryMariaDB implements IPlatformeRepository {
    create(data: any): Promise<any> {
        return Promise.resolve(null);
    }

    delete(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    find(): Promise<any[]> {
        return Promise.resolve([]);
    }

    findOne(): Promise<any | null> {
        return Promise.resolve(null);
    }

    update(id: string, data: any): Promise<any | null> {
        return Promise.resolve(null);
    }

}
export default PlatformeRepositoryMariaDB;

