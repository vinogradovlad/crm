
const testData = [{
        id: 1,
        nameSurname: "Владислав Виноградов",
        phone: 12348798445,
        email: "vlad@mail.ru",
        product: "course-js"
    },
    {
        id: 2,
        nameSurname: "Анна Карецкая",
        phone: 5667567568,
        email: "anna@yandex.ru",
        product: "course-vue"
    },
    {
        id: 3,
        nameSurname: "Елизавета Химина",
        phone: 5489789222,
        email: "liza@gmail.com",
        product: "course-php"
    },
    {
        id: 4,
        nameSurname: "Екатерина Заринская",
        phone: 45457568,
        email: "zarinka@icloud.com",
        product: "course-wordpress"
    },
    {
        id: 5,
        nameSurname: "Алексей Каширкин",
        phone: 979584838,
        email: "kashira@rambler.ru",
        product: "course-html"
    },
    {
        id: 5,
        nameSurname: "Сергей Гришин",
        phone: 78694328,
        email: "serega@inbox.ru",
        product: "course-js"
    }
    ];


export function randomPerson() {
        const index = Math.floor(Math.random()*testData.length);
        return testData[index];
    }
