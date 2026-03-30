new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, title: "Orange 1", short_text: "Description 1", image: "images/Tomato1.png" },
            { id: 2, title: "Orange 2", short_text: "Description 2", image: "images/Tomato2.png" },
            { id: 3, title: "Orange 3", short_text: "Description 3", image: "images/Tomato3.png" },
            { id: 4, title: "Orange 4", short_text: "Description 4", image: "images/Tomato4.png" },
            { id: 5, title: "Orange 5", short_text: "Description 5", image: "images/Tomato5.png" },
            { id: 6, title: "Orange 6", short_text: "Description 6", image: "images/Tomato6.png" },
            { id: 7, title: "Orange 7", short_text: "Description 7", image: "images/Tomato1.png" }, // добавь свои новые фото
            { id: 8, title: "Orange 8", short_text: "Description 8", image: "images/Tomato2.png" }
        ],
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    methods: {
        addToCart(id) {
            if (!this.cart.includes(id)) {
                this.cart.push(id);
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        },
        checkInCart(id) {
            return this.cart.includes(id);
        }
    }
});
