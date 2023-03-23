abstract class BaseRepository<T> {
    async find(): Promise<T[]> {
        throw new Error("Not implemented");
    }

    async findOne(): Promise<T | null> {
        throw new Error("Not implemented");
    }

    async create(data: T): Promise<T> {
        throw new Error("Not implemented");
    }

    async update(id: string, data: T): Promise<T | null> {
        throw new Error("Not implemented");
    }

    async delete(id: string): Promise<boolean> {
        throw new Error("Not implemented");
    }
}

export default BaseRepository;
