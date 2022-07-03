
const cartside = document.querySelector('.carts');

const cartstorage = JSON.parse(localStorage.getItem('cart') || "[]");

var newCard
if (cartstorage.length) {
    cartstorage.forEach((el, idx) => {
        const { img, price, title } = el

        newCard = document.createElement('div');
        newCard.classList.add('cardddd');

        newCard.innerHTML = `<div class="goods-box"><div class="d-flex justify-content-between product-top"><div class="yenis text-center"><a href="#"> Tövsiyə edilir</a></div><img src="/img/icon/heart-filled.svg" alt=""class="img-fluid imp-heart"></div><div class="img-box"><a href="#"><img src="${img}" alt="" class="img-fuid product-img"></a></div><div class="info"><h3 class="title"> ${title}</h3><h6>${price}</h6></div><div class="add-btn"><button class="btn btn-outline-danger" >Səbətə at</button</div></div`;
        cartside.appendChild(newCard);

    })
}