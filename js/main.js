new Vue({
    el: '#app',
    data: {
        // Пункт 4 завдання: Масив товарів
        products: [
            { 
                id: 1, 
                title: 'Blood Orange', 
                short_text: 'Anthocyanin Rich Hybrid', 
                image: 'images/orange3.jpg', 
                desc: 'Deep ruby red internal pigmentation. Unique flavor with berry notes. Performs best in climates with cold nights.' 
            },
            { 
                id: 2, 
                title: 'Cara Cara', 
                short_text: 'Pink Navel Selection', 
                image: 'images/orange4.jpg', 
                desc: 'Unique rose-pink internal color. Extremely sweet flavor profile. Lycopene rich; Seedless variety.' 
            },
            { 
                id: 3, 
                title: 'Seville Orange', 
                short_text: 'Bitter Orange Variety', 
                image: 'images/orange5.jpg', 
                desc: 'Rough, thick orange skin. Very sour and bitter juice. High Pectin content; Aromatic essential oils.' 
            },
            { 
                id: 4, 
                title: 'Valencia Orange', 
                short_text: 'Juicing Specialist', 
                image: 'images/orange1.jpg', 
                desc: 'Excellent for fresh juice. Thin skin and high juice content. Very sweet and late maturing.' 
            },
            { 
                id: 5, 
                title: 'Navel Orange', 
                short_text: 'Classic Table Orange', 
                image: 'images/orange2.jpg', 
                desc: 'Seedless and easy to peel. Distinguished by the "navel" at the blossom end. Rich in Vitamin C.' 
            }
        ],
        product: {}, // Пустий об'єкт для обраного товару (Пункт 9)
        btnVisible: 0 // Змінна для кнопок (Пункт 9)
    },
    methods: {
        // Пункт 10: Функція зчитування ID з хешу (#)
        getProduct() {
            let id = window.location.hash.replace('#', '');
            if (id) {
                this.product = this.products.find(item => item.id == id);
            }
        },
        // Пункт 12: Додавання в кошик
        addToCart(id) {
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            if (!cart[id]) {
                cart[id] = true;
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            this.btnVisible = 1;
        },
        // Пункт 14: Перевірка кошика
        checkInCart() {
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            if (this.product && cart[this.product.id]) {
                this.btnVisible = 1;
            }
        }
    },
    mounted() {
        // Пункт 11 та 15: Виклик функцій при завантаженні
        this.getProduct();
        this.checkInCart();
    }
});
