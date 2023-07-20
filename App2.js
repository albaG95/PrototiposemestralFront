((Products) => {
  const App = {
    products: Products,
    choosenProduct: {},
    htmlElements: {
      wrapper: document.querySelector('.sliderWrapper'),
      menuItems: document.querySelectorAll('.menuItem'),
      loginForm: document.getElementById('loginForm'),
      currentProductImg: document.querySelector('.productImg'),
      currentProductTitle: document.querySelector('.productTitle'),
      currentProductPrice: document.querySelector('.productPrice'),
      currentProductproductDesc: document.querySelector('.productDesc'),
      currentProductColors: document.querySelectorAll('.color'),
      currentProductSizes: document.querySelectorAll('.size'),
      productButton: document.querySelector('.productButton'),
      payment: document.querySelector('.payment'),
      close: document.querySelector('.close'),
    },
    init() {
      App.choosenProduct = App.products[0];
      App.methods.menu();
      App.methods.currentProductColors();

      App.htmlElements.loginForm &&
        App.htmlElements.loginForm.addEventListener(
          'submit',
          App.handlers.AddNotaFormHandler
        );
      App.htmlElements.productButton &&
        App.htmlElements.productButton.addEventListener('click', () => {
          App.htmlElements.payment.style.display = 'flex';
        });
      App.htmlElements.close &&
        App.htmlElements.close.addEventListener('click', () => {
          App.htmlElements.payment.style.display = 'none';
        });
    },
    handlers: {
      AddNotaFormHandler(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const isAuthenticated = App.methods.fakeAuthentication(email, password);
        if (isAuthenticated) {
          window.location.href = 'index.html';
        } else {
          alert('Credenciales inválidas. Inténtalo de nuevo.');
        }
      },
    },
    methods: {
      menu() {
        App.htmlElements.menuItems.forEach((item, index) => {
          item.addEventListener('click', () => {
            //change the current slide
            App.htmlElements.wrapper.style.transform = `translateX(${
              -100 * index
            }vw)`;

            //change the choosen product
            App.choosenProduct = App.products[index];

            //change texts of currentProduct
            App.htmlElements.currentProductTitle.textContent =
              App.choosenProduct.title;
            App.htmlElements.currentProductPrice.textContent =
              '$' + App.choosenProduct.price;
            App.htmlElements.currentProductImg.src =
              App.choosenProduct.colors[0].img;
            App.htmlElements.currentProductproductDesc.textContent =
              App.choosenProduct.desc;
            //assing new colors
            App.htmlElements.currentProductColors.forEach((color, index) => {
              color.style.backgroundColor = choosenProduct.colors[index].code;
            });
          });
        });
      },
      currentProductColors() {
        App.htmlElements.currentProductColors.forEach((color, index) => {
          color.addEventListener('click', () => {
            App.htmlElements.currentProductImg.src =
              App.choosenProduct.colors[index].img;
          });
        });
      },
      currentProductSizes() {
        App.htmlElements.currentProductSizes.forEach((size, index) => {
          size.addEventListener('click', () => {
            App.htmlElements.currentProductSizes.forEach((size) => {
              size.style.backgroundColor = 'white';
              size.style.color = 'black';
            });
            size.style.backgroundColor = 'black';
            size.style.color = 'white';
          });
        });
      },
      fakeAuthentication(email, password) {
        // La función fakeAuthentication es la misma que utilizamos anteriormente para simular la autenticación.
        // Reemplaza esta función con una llamada real a tu backend para autenticar al usuario.

        // Código de autenticación simulado (debes reemplazar con la lógica real del backend)
        const validEmail = 'nombre@alwiro.com';
        const validPassword = 'contraseña';

        return email === validEmail && password === validPassword;
      },
    },
  };
  App.init();
})(document.Products);
