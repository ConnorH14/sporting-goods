import { Goods } from "./Models/Goods.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Goods[]}*/
  goods = [
    new Goods('Tennis Ball', 4, 25, 'Good balls for smackin', '//placehold.it/200x200.png', 0),
    new Goods('Golf Ball', 10, 50, 'Good balls for whakin', '//placehold.it/200x200.png', 1),
    new Goods('Basket Ball', 15, 10, 'Good balls for shottin', '//placehold.it/200x200.png', 2),
    new Goods('Foot Ball', 20, 10, 'Good balls for tossin', '//placehold.it/200x200.png', 3),
    new Goods('Soccer Ball', 4, 25, 'Good balls for footin', '//placehold.it/200x200.png', 4),
    new Goods('Base Ball', 10, 50, 'Good balls for dingin', '//placehold.it/200x200.png', 5),
    new Goods('Medicine Ball', 15, 10, 'Good balls for rollin', '//placehold.it/200x200.png', 6),
    new Goods("Right Ball", 20000, 1, 'nice', '//placehold.it/200x200.png', 7)
  ]

  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
