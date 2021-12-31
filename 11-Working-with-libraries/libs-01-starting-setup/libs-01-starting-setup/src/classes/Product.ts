import { IsNotEmpty } from "class-validator";
export class Product {
    @IsNotEmpty()
  public _price: string;
  constructor(_price: string, public name: string) {
    this._price = _price;
  }

  productdescription() {
    return this.name + " " + this.price + "€";
  }
  get price() {
    return this._price + " €";
  }
}
