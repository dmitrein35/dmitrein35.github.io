var app = new Vue({
    el: '#app',
    data: {
        // Твой массив с 5 товарами (Вариант 2 - Апельсины)
        products: [
            { 
                id: 1, 
                title: "Orange Navel", 
                short_text: "Соковитий сорт з яскравим смаком.", 
                image: "img/orange1.jpg" 
            },
            { 
                id: 2, 
                title: "Valencia Orange", 
                short_text: "Найкращий вибір для свіжого соку.", 
                image: "img/orange2.jpg" 
            },
            { 
                id: 3, 
                title: "Blood Orange", 
                short_text: "Унікальний сорт з червоною м'якоттю.", 
                image: "img/orange3.jpg" 
            },
            { 
                id: 4, 
                title: "Cara Cara", 
                short_text: "Рожевий апельсин з низькою кислотністю.", 
                image: "img/orange4.jpg" 
            },
            { 
                id: 5, 
                title: "Seville Orange", 
                short_text: "Гіркуватий сорт для кращого мармеладу.", 
                image: "img/orange5.jpg" 
            }
        ]
    }
});
