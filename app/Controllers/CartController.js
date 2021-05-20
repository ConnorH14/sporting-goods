import { ProxyState } from "../AppState.js"

function _drawCart(){
  let template = ``
  let modalDisplay = document.getElementById('modal-display')
  ProxyState.cart.forEach(cartItem =>
    template += /*html*/ `
      <div  class="col-md-6"><span>${cartItem.name}</span></div>
      <div  class="col-md-6"><span>Quantity: </span></div>
    `
  )
  modalDisplay.innerHTML = template
}
export class CartController {

  addToCart(cartItem){
    ProxyState.cart.push(ProxyState.goods[cartItem])
    console.log(ProxyState.cart.length)
    
    _drawCart()
  }

}