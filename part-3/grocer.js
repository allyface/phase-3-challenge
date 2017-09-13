let count = 3

function addToCart () {
  count++
  document.getElementById('cart-item-count').innerHTML = `(${count})`
}
