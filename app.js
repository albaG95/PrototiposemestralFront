const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const loginForm = document.getElementById('loginForm');

const products = [
  {
    id: 1,
    title: 'Yamaha YAS-480 Intermedio Eb Saxofon Alto',
    price: 2177.6,
    colors: [
      {
        code: 'black',
        img: './img/saxofon1.png',
      },
      {
        code: 'darkblue',
        img: './img/saxofon2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Jean Paul USA Trumpet',
    price: 382.64,
    colors: [
      {
        code: 'lightgray',
        img: './img/tromp2.png',
      },
      {
        code: 'darkblue',
        img: './img/tromp1.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Jean Paul USA Trombone',
    price: 109,
    colors: [
      {
        code: 'lightgray',
        img: './img/trombon1.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 129,
    colors: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'lightgray',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 99,
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = '$' + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aquí debes realizar una llamada al backend para autenticar al usuario.
  // Por simplicidad, usaremos la función fakeAuthentication como lo hicimos anteriormente.

  const isAuthenticated = fakeAuthentication(email, password);
  console.log('🚀 ~ file: app.js:146 ~ isAuthenticated:', isAuthenticated);

  if (isAuthenticated) {
    // Redirigir al usuario a la página principal (dashboard.html) después del inicio de sesión exitoso
    window.location.href = 'index.html';
  } else {
    alert('Credenciales inválidas. Inténtalo de nuevo.');
  }
});
const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});

function fakeAuthentication(email, password) {
  // La función fakeAuthentication es la misma que utilizamos anteriormente para simular la autenticación.
  // Reemplaza esta función con una llamada real a tu backend para autenticar al usuario.

  // Código de autenticación simulado (debes reemplazar con la lógica real del backend)
  const validEmail = 'user@example.com';
  const validPassword = 'password';

  return email === validEmail && password === validPassword;
}
