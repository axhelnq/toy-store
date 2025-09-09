const toyTypeEl = document.querySelector('.toy-type');
const scrollToToyTypeEl = () => {
  window.scrollTo({
    top: toyTypeEl.offsetTop,
    behavior: 'smooth'
  })
}

const stuffedEl = document.querySelector('.stuffed-catalogue');
const scrollToStuffedEl = () => {
  window.scrollTo({
    top: stuffedEl.offsetTop,
    behavior: 'smooth'
  })
}



const woodenEl = document.querySelector('.wooden-catalogue');
const scrollToWoodenEl = () => {
  window.scrollTo({
    top: woodenEl.offsetTop,
    behavior: 'smooth'
  });
}

const topBarEl = document.querySelector('.top-bar');
const scrollToTop = () => {
  window.scrollTo({
    top: topBarEl.offsetTop,
    behavior: 'smooth'
  })
}

const instagramEl = document.querySelector('.instagram');
const scrollToInstagramEl = () => {
  window.scrollTo({
    top: instagramEl.offsetTop,
    behavior: 'smooth'
  })
}

const trialEl = document.querySelector('.trial');
const scrollToTrialEl = () => {
  window.scrollTo({
    top: trialEl.offsetTop,
    behavior: 'smooth'
  })
}

const cartCountEl = document.querySelector('.cart__count');
let cartCount = 0;
cartCountEl.innerHTML = cartCount;

const addItemToCart = () => {
  cartCount++;
  cartCountEl.innerHTML = cartCount;
};

const catalogueElsBtns = document.querySelectorAll('.catalogue button');

catalogueElsBtns.forEach(btn => {
  btn.addEventListener('click', () => addItemToCart());
});