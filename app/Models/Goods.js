import { GetId } from "../Utils/GetId.js"

export class Goods{
  constructor(name, price, stock, description, img, id){
    this.name = name
    this.price = price
    this.stock = stock
    this.description = description
    this.img = img
    this.id = id//GetId()
  }
}