import { ProxyState } from "../AppState.js";

function _drawGoods(){
  let template = ``
  let goodsDisplay = document.getElementById('goods-display')

  ProxyState.goods.forEach(good =>
    template += /*html*/ `
    <div class="col-2 mx-5 p-4">
      <div class="card">
        <img class="card-img-top" src="${good.img}">
        <div class="card-body">
          <h3>${good.name}</h3>
          <small>${good.description}</small>
          <p><b>$${good.price.toFixed(2)}</b></p>
          <span>Stock: ${good.stock}</span>
          <span><button class="btn btn-dark text-light" onclick="addToCart('${good.id}')">Add to Cart</button></span>
        </div>
      </div>
    </div>
    `
    )
  
  goodsDisplay.innerHTML = template
}

export default class GoodsController {
  constructor(){
    ProxyState.on("goods", _drawGoods);
    _drawGoods()
  }

}