import OrderItem from "./order_item";
export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._items = items;
    this._customerId = customerId;
    this._total = this.total();
    this.validate();
  }

  validate(): boolean {
    if (!this._id) {
      throw new Error("id is required");
    }
    if (!this._customerId) {
      throw new Error("CustomerId is required");
    }
    if (this._items.length <= 0) {
      throw new Error("Items is required");
    }

    if (this._items.some((item) => item.price <= 0)) {
      throw new Error("Quantity must be greater than 0");
    }
    return true;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}
