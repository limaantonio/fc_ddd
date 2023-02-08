export default interface RepositoryInterface<T> {
  create(data: T): Promise<void>;
  update(id: string, data: T): Promise<void>;
  delete(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}
