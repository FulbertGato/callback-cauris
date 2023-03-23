interface IBaseRepository<T> {
    find(): Promise<T[]>;
    findOne(): Promise<T | null>;
    create(data: T): Promise<T>;
    update(id: string, data: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}