import { ProxyState } from "../AppState.js"

export function saveState(){
  localStorage.setItem(JSON.stringify(ProxyState.goods))
}

export function loadState(){
  JSON.parse(localStorage.getItem(ProxyState.goods))
}