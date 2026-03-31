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
        btnVisible: 0
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
        }
    },
    mounted() {
        this.getProduct();
        this.checkInCart();
    }
});
