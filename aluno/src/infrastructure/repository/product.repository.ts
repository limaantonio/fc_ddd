import Product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product-repository.interface";

export default class ProductRepository implements ProductRepositoryInterface {
  async create(product: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async update(id: string, product: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<Product> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }

  async findByName(name: string): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
