const ApiUrlPath = 'http://localhost:3002/api/sanki';
const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
const request = (endpoint: string, options: RequestInit) => {
    const url = `${ApiUrlPath}${endpoint}`;
    return fetch(url, options).then(checkResponse);
}
// export const fetchMenuData = () => {
//     const endpoint = '/menu';
//     return request(endpoint, {})
//         .then((res) => {
//             if (res.success)
//                 return res.menu;
//             return Promise.reject(res);
//         });
// }
// export const fetchIngredientsData = () => {
//     const endpoint = '/ingredients';
//     return request(endpoint, {})
//         .then((res) => {
//             if (res.success)
//                 return res.ingredients
//             return Promise.reject(res);
//         });
// }
export const fetchMenuData = () => {
    return [{
        id: 1,
        header: "Понедельник",
        menu: [1, 2, 3],
    }, {
        id: 2,
        header: "Вторник",
        menu: [2, 3, 4],
    }, {
        id: 3,
        header: "Среда",
        menu: [3, 4, 5],
    }, {
        id: 4,
        header: "Четверг",
        menu: [4, 5, 6],
    }, {
        id: 5,
        header: "Пятница",
        menu: [6, 7, 8],
    }, {
        id: 6,
        header: "Суббота",
        menu: [7, 8, 9],
    }, {
        id: 7,
        header: "Воскресенье",
        menu: [8, 9, 10],
    }]
}
export const fetchIngredientsData = () => {
    return [{
        id: 1,
        image: "https://static.1000.menu/img/content-v2/9b/80/20179/pirog-s-rikottoi-i-grushei-sloenyi-rikotnik_1696509349_prev_hor.jpg",
        name: "Пирог с рикоттой и грушей",
        ingredients: "Нежнейшая выпечка с невероятным вкусом - просто тает во рту!",
        price: 125
    }, {
        id: 2,
        image: "https://static.1000.menu/img/content-v2/fc/b4/12551/krem-rafaello_1695729458_prev_hor.jpg",
        name: "Крем Рафаэлло",
        ingredients: "Невероятно нежный, с легкой сливочной ноткой! Божественно!",
        price: 475
    }, {
        id: 3,
        image: "https://static.1000.menu/img/content-v2/f2/55/78833/sup-s-pomidorami_1695837474_prev_hor.jpg",
        name: "Суп с помидорами",
        ingredients: "Аппетитное и яркое первое блюдо из доступных продуктов!",
        price: 225
    }, {
        id: 4,
        image: "https://static.1000.menu/img/content-v2/88/93/24010/rojki-s-myasom-v-skovorode_1695753275_prev_hor.jpg",
        name: "Рожки с мясом в сковороде",
        ingredients: "Супер простой и бесподобно вкусный ужин для всей семьи!",
        price: 325
    }, {
        id: 5,
        image: "https://static.1000.menu/img/content-v2/19/85/19500/ananasy-v-sloenom-teste_1695541971_prev_hor.jpg",
        name: "Ананасы в слоеном тесте",
        ingredients: "Оригинальный десерт к чаю - такого в магазине не купишь!",
        price: 435
    }, {
        id: 6,
        image: "https://static.1000.menu/img/content-v2/93/c0/26868/skumbriya-v-butylke-v-lukovoi-sheluxe1_1695386874_prev_hor.jpg",
        name: "Скумбрия в бутылке в луковой шелухе",
        ingredients: "Абсолютно натуральная, но со вкусом копчения!",
        price: 385
    }, {
        id: 7,
        image: "https://static.1000.menu/img/content-v2/07/3b/20428/perec-farshirovannyi-farshem-i-risom-v-multivarke1_1695502583_prev_hor.jpg",
        name: "Перец фаршированный фаршем и рисом",
        ingredients: "Вкуснейший ужин для всей семьи без хлопот!",
        price: 295
    }, {
        id: 8,
        image: "https://static.1000.menu/img/content-v2/1c/36/29081/kalmar-na-grile_1695030665_prev_hor.jpg",
        name: "Кальмар на гриле",
        ingredients: "Такую вкуснятину вы еще не ели! Язык проглотишь!",
        price: 335
    }, {
        id: 9,
        image: "https://static.1000.menu/img/content-v2/36/a9/4114/krevetki-v-tomatnom-souse1_1695208737_prev_hor.jpg",
        name: "Креветки в томатном соусе",
        ingredients: "Ароматная, сытная, пикантная закуска или основное блюдо!",
        price: 425
    }, {
        id: 10,
        image: "https://static.1000.menu/img/content-v2/15/13/14608/salat-s-araxisom-kitaiskii_1695367637_prev_hor.jpg",
        name: "Салат с арахисом китайский",
        ingredients: "Освежающий, малокалорийный. На гарнир и просто так.",
        price: 425
    }]
}
