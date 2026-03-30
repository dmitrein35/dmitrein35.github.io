var app = new Vue({
    el: '#app',
    data: {
        // Твой массив с 5 товарами (Вариант 2 - Апельсины)
        products: [
            { 
                id: 1, 
                title: "Orange Navel", 
                short_text: "Соковитий сорт з яскравим смаком.", 
                image: "images/orange1.jpg",
                link: "odin.html"
            },
            { 
                id: 2, 
                title: "Valencia Orange", 
                short_text: "Найкращий вибір для свіжого соку.", 
                image: "images/orange2.jpg",
                link: "dva.html"
            },
            { 
                id: 3, 
                title: "Blood Orange", 
                short_text: "Унікальний сорт з червоною м'якоттю.", 
                image: "images/orange3.jpg",
                link: "tri.html"
            },
            { 
                id: 4, 
                title: "Cara Cara", 
                short_text: "Рожевий апельсин з низькою кислотністю.", 
                image: "images/orange4.jpg",
                link: "chetyre.html"
            },
            { 
                id: 5, 
                title: "Seville Orange", 
                short_text: "Гіркуватий сорт для кращого мармеладу.", 
                image: "images/orange5.jpg",
                link: "pyat.html"
            }
        ]
    }
});
