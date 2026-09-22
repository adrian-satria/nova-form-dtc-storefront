let cart=[];
function addToCart(name,price){cart.push({name,price});renderCart();openCart();}
function renderCart(){
 const box=document.getElementById('cartItems');
 document.getElementById('cartCount').textContent=cart.length;
 if(!cart.length){box.innerHTML='<p class="empty">Your cart is empty.</p>';}
 else{box.innerHTML=cart.map(x=>`<div class="cart-row"><span>${x.name}</span><strong>$${x.price}</strong></div>`).join('');}
 document.getElementById('cartTotal').textContent='$'+cart.reduce((s,x)=>s+x.price,0);
}
function openCart(){document.getElementById('cart').classList.add('open');document.getElementById('cart').setAttribute('aria-hidden','false');}
function closeCart(){document.getElementById('cart').classList.remove('open');document.getElementById('cart').setAttribute('aria-hidden','true');}
renderCart();
