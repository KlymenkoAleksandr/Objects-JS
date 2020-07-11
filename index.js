// Задача 1:
// Создайте объект city1 (let city1 = {}), укажите у него свойства name (название города, строка)
//  со значением «ГородN» и population (населенность города, число) со значением 10 млн.


let city1 = {
    name: 'ГородN',
    population: '10 млн'
}

console.log(city1);


// Задача 2:
// Из обьекта johnDoe https://jsfiddle.net/72qkgetv/1/
// Вытащить и вывести в консоль следующие значения:

// - город из рабочего адреса
// - имя второго друга
// - номера телефонов через запятую
// - имя друга с наименьшим возрастом
// - роль пользователя, которая true (в данном случае isUser)
const maksTwen = {
    name: 'Mark',
    surname: 'Twen',
    age: 16
}

const sarahDoe = {
    name: 'Sarah',
    surname: 'Doe',
    age: 14
}

const johnDoe = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    hobbies: ['football', 'darts', 'swimming'],
    contacts: {
        phones: ['0987654', '1234567'],
        email: ['asd@asd.com', 'asdfd@asw.com']
    },
    address: {
        work: {
            city: 'Berlin',
            postCode: '03457'
        },
        home: {
            city: 'Munich',
            postCode: '12356'
        },
    },
    sallary: {
        main: 3000,
        bonus: 500,
        rate: 25
    },
    roles: {
        isAdmin: false,
        isModer: false,
        isUser: true
    },
    friends: [
        maksTwen,
        sarahDoe,
        {
            name: 'John',
            surname: 'Snow',
            age: 5
        }
    ]
}

let city = johnDoe.address.work.city;
let secondFriend = johnDoe.friends[1].name;
let firstPhoneNumber = johnDoe.contacts.phones[0];
let secondPhoneNumber = johnDoe.contacts.phones[1];


let youngerFriendName;
for (let i = 0; i <johnDoe.friends.length; i++) {
    let youngerFriend = johnDoe.friends[0].age;

     if (youngerFriend > johnDoe.friends[i].age) {
        youngerFriendName = johnDoe.friends[i].name;
     } else if (johnDoe.friends[0].age === johnDoe.friends[i].age) {
        youngerFriendName = johnDoe.friends[0].name;
     }
}
let role = johnDoe.roles.isUser;


console.log(city);
console.log(secondFriend);
console.log(`${firstPhoneNumber}, ${secondPhoneNumber}`);
console.log(youngerFriendName);
console.log(role);

// Задача 3:
// Создать 5 обьектов автомобилей и наполнить их большим количеством данных:
// Год выпуска
// Вес
// Кузов
// Двигатель
// Трансмиссия
// Тормозная система
// Рулевое управление
// и т д

const kiaRio = {
    name: 'Kia Rio',
    year: 2006,
    weight: 1040,
    corpusType: 'seddan',
    engineCapacity: 1.4,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'whole'

}
const fordMustang = {
    name: 'Ford Mustang',
    year: 2019,
    weight: 2065,
    corpusType: 'sedan',
    engineCapacity: 3.2,
    brakeSystem: 'ABS',
    transmissionType: 'automatic',
    roof: 'cabriolet'

}
const camaro = {
    name: 'Chevrolet Camaro',
    year: 1976,
    weight: 2430,
    corpusType: 'sedan',
    engineCapacity: 5,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'whole'

}
const toyotaPrado = {
    name: 'Toyota Prado',
    year: 2016,
    weight: 3250,
    corpusType: 'jeep',
    engineCapacity: 4.5,
    brakeSystem: 'ABS',
    transmissionType: 'automatic',
    roof: 'whole'

}
const ferrariF50 = {
    name: 'Ferrari F50',
    year: 1995,
    weight: 3250,
    corpusType: 'coupe',
    engineCapacity: 4.7,
    brakeSystem: 'ABS',
    transmissionType: 'manual',
    roof: 'cabriolet'

}

// Задача 4:
// Добавить все автомобили в массив.
// И написать функции которые находит:

// - авто с ручной коробкой (трансмиссия)
// - самый тяжелый автомобиль (поле вес)
// - самый старый автомобиль (поле год выпуска)
// - авто с самым большим объемом двигателя (поле объем двигателя)
// - авто у которых откидывается крыша
// - считают средний вес всех автомобилей
// - считают средний обьем двигателя

// все эти свойства должны быть определены в объектах.

const cars = [kiaRio, fordMustang, camaro, toyotaPrado, ferrariF50];

function transmission() {
    for (let i = 0; i < cars.length; i++) {
        if(cars[i].transmissionType === 'manual') {
            console.log(cars[i].name);
        }
    }
}
transmission();

function maxWeight (cars) {
    let weightestCarname = null;
    
    let weightestCar = cars[0].weight;

    for (let i = 1; i < cars.length; i++) {
        weightestCar = Math.max(weightestCar, cars[i].weight)
    }

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].weight === weightestCar) {
            weightestCarname = cars[i].name;
            break;
        }
    }

    return weightestCarname;

}

const weightestCarname = maxWeight(cars);

console.log(weightestCarname);


function minYear(cars) {
    let oldestCarName = null;
    
    let oldestCar = cars[0].year;

    for (let i = 1; i < cars.length; i++) {
        oldestCar = Math.min(oldestCar, cars[i].year)
    }

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].year === oldestCar) {
            oldestCarName = cars[i].name;
            break;
        }
    }

    return oldestCarName;
}

const oldestCarName = minYear(cars);

console.log(oldestCarName);

function powerful(cars) {
    let powerfulCarName = null;
    
    let powerfulCar = cars[0].engineCapacity;


    for (let i = 1; i < cars.length; i++) {
        powerfulCar = Math.max(powerfulCar, cars[i].engineCapacity);
    }

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].engineCapacity === powerfulCar) {
            powerfulCarName = cars[i].name;
            break;
        }
    }

    return powerfulCarName;
}

const powerfulCarName = powerful(cars);

console.log(powerfulCarName);

function roof() {
    for (let i = 0; i < cars.length; i++) {
        if(cars[i].roof === 'cabriolet') {
            console.log(cars[i].name);
        }
    }
}

roof();


function mediumWeight () {
    let commonWeight = null;
    for (let i = 0; i < cars.length; i++) {
        commonWeight += cars[i].weight;
    }
    let mediumWeight = commonWeight / cars.length;

    console.log(mediumWeight);
}

mediumWeight();


function mediumEngineCapacity () {
    let commonEngineCapacity = null;
    for (let i = 0; i < cars.length; i++) {
        commonEngineCapacity += cars[i].engineCapacity;
    }
    let mediumEngineCapacity = commonEngineCapacity / cars.length;

    console.log(mediumEngineCapacity);
}

mediumEngineCapacity();


// Задача 5:
// В обьекте: https://jsfiddle.net/72qkgetv/2/

// - Достать из него данные так, чтобы получился текст:  “Киевский политехнический институт, вулиця Академіка Янгеля, 5, місто Київ, Украина»
// - Вывести координаты lat, lng.

const coordinates = {    "results" : [
    {
        "address_components" : [
            {
                "long_name" : "5",
                "short_name" : "5",
                "types" : [ "street_number" ]
            },
            {
                "long_name" : "Киевский политехнический институт",
                "short_name" : "Киевский политехнический институт",
                "types" : [ "establishment" ]
            },
            {
                "long_name" : "вулиця Академіка Янгеля",
                "short_name" : "вулиця Академіка Янгеля",
                "types" : [ "route" ]
            },
            {
                "long_name" : "Солом'янський район",
                "short_name" : "Солом'янський район",
                "types" : [ "sublocality_level_1", "sublocality", "political" ]
            },
            {
                "long_name" : "Київ",
                "short_name" : "Київ",
                "types" : [ "locality", "political" ]
            },
            {
                "long_name" : "місто Київ",
                "short_name" : "місто Київ",
                "types" : [ "administrative_area_level_2", "political" ]
            },
            {
                "long_name" : "місто Київ",
                "short_name" : "місто Київ",
                "types" : [ "administrative_area_level_1", "political" ]
            },
            {
                "long_name" : "Украина",
                "short_name" : "UA",
                "types" : [ "country", "political" ]
            }
        ],
	       "geometry" : {
            "location" : {
                "lat" : 50.449819,
                "lng" : 30.453404
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
                "northeast" : {
                    "lat" : 50.4511679802915,
                    "lng" : 30.4547529802915
                },
                "southwest" : {
                    "lat" : 50.4484700197085,
                    "lng" : 30.4520550197085
                }
            }
        },
        "types" : [ "street_address" ]
    }
],
    "status" : "OK"
}

 let university = coordinates.results[0].address_components[1].long_name;
let street = coordinates.results[0].address_components[2].short_name;
let numberOfStreet = coordinates.results[0].address_components[0].long_name;
let cityName = coordinates.results[0].address_components[5].long_name;
let contryName = coordinates.results[0].address_components[7].long_name;

console.log(`${university}, ${street}, ${numberOfStreet}, ${cityName}, ${contryName}`);

let vertical = coordinates.results[0].geometry.location.lat;
let horysontal = coordinates.results[0].geometry.location.lng;

console.log(`Вертикаль ${vertical}, горизонталь ${horysontal}`);

