import { CartController } from "./Controllers/CartController.js";
import GoodsController from "./Controllers/GoodsController.js";

class App {

  goodsController = new GoodsController()

  cartController = new CartController()
}

window["app"] = new App();
