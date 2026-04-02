new Vue({
    el: '#app',
    data: {
        products: [
            { 
                id: 1, 
                title: 'Blood Orange', 
                short_text: 'Anthocyanin Rich Hybrid', 
                image: 'images/orange3.jpg', 
                desc: 'Deep ruby red internal pigmentation. Unique flavor with berry notes. Performs best in climates with cold nights.',
                fruit: 'Unique ruby-red internal flesh; high antioxidant content.',
                color: 'Deep Orange with Red streaks'
            },
            { 
                id: 2, 
                title: 'Cara Cara', 
                short_text: 'Pink Navel Selection', 
                image: 'images/orange4.jpg', 
                desc: 'Unique rose-pink internal color. Extremely sweet flavor profile. Lycopene rich; Seedless variety.',
                fruit: 'Seedless; extremely sweet and low acid profile.',
                color: 'Orange skin; Pink internal flesh'
            },
            { 
                id: 3, 
                title: 'Seville Orange', 
                short_text: 'Bitter Orange Variety', 
                image: 'images/orange5.jpg', 
                desc: 'Rough, thick orange skin. Very sour and bitter juice. High Pectin content; Aromatic essential oils.',
                fruit: 'Rough skin; high pectin content for marmalades.',
                color: 'Classic Bright Orange'
            },
            { 
                id: 4, 
                title: 'Valencia Orange', 
                short_text: 'Juicing Specialist', 
                image: 'images/orange1.jpg', 
                desc: 'Excellent for fresh juice. Thin skin and high juice content. Very sweet and late maturing.',
                fruit: 'High juice content (min 50%); thin rind.',
                color: 'Pale to Bright Orange'
            },
            { 
                id: 5, 
                title: 'Navel Orange', 
                short_text: 'Classic Table Orange', 
                image: 'images/orange2.jpg', 
                desc: 'Seedless and easy to peel. Distinguished by the "navel" at the blossom end. Rich in Vitamin C.',
                fruit: 'Seedless; easy to peel; large fruit size.',
                color: 'Golden Orange'
            }
        ],
        product: {},
        btnVisible: 0,
        // Нові змінні для ПР7
        cart: [],           // Масив для товарів у кошику
        contactFields: {},  // Об'єкт для полів форми (v-model)
        orderMade: false    // Стан для відображення результату після відправки
    },
    methods: {
        getProduct() {
            let id = window.location.hash.replace('#', '');
            if (id) {
                this.product = this.products.find(item => item.id == id);
            }
        },
        addToCart(id) {
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            if (!cart[id]) {
                cart[id] = true;
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            this.btnVisible = 1;
        },
        checkInCart() {
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            if (this.product && cart[this.product.id]) {
                this.btnVisible = 1;
            }
        },
        // ПР7: Функція отримання товарів для сторінки кошика
        getCart() {
            let cartData = JSON.parse(localStorage.getItem('cart')) || {};
            // Фільтруємо основний масив products, залишаючи лише ті, чий ID є в localStorage
            this.cart = this.products.filter(item => cartData[item.id]);
        },
        // ПР7: Видалення товару з кошика та сховища
        removeFromCart(id) {
            let cartData = JSON.parse(localStorage.getItem('cart')) || {};
            if (cartData[id]) {
                delete cartData[id]; // Видаляємо ключ із об'єкта
                localStorage.setItem('cart', JSON.stringify(cartData));
                this.getCart(); // Оновлюємо масив cart, щоб таблиця перерендерилась
            }
        },
        // ПР7: Обробка відправки форми
        makeOrder() {
            // Виводимо дані в консоль для перевірки
            console.log("Замовлення оформлено користувачем:", this.contactFields);
            
            this.orderMade = true; // Змінюємо стан (ховаємо форму, показуємо результат)
            
            // Видаляємо все з кошика після замовлення
            localStorage.removeItem('cart');
            this.cart = [];
        }
    },
    mounted() {
        this.getProduct();
        this.checkInCart();
        this.getCart(); // Викликаємо при завантаженні, щоб на сторінці контактів одразу був список
    }
});
