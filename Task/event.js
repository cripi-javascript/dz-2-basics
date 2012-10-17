/*jslint nomen: true*/
/*global runTests: true*/
/*global Event: true*/
/*global _isDateTime: true*/
/*global _isDateTimeTestCorrect: true*/
/*global _correctionStarts: true*/
/*global __correctionStartsTest: true*/
/*global _isDateTimeTestCorrect: true*/
function runTests() {
    "use strict";
    _isDateTimeTestCorrect();
    __correctionStartsTest();
    var myevent = new Event(new Date(10), new Date(1), "Happy Birthday)", "Home");
}
// передавать в функцию объект - задача функции просто провалидировать поля
function Event(start, end, name, location) {
    "use strict";
    if (!_isDateTime(start)) {
        throw new Error("Start Event dont exists!");
    }
    if (!_isDateTime(end)) {
        end = start;
    }
    if (start.getTime() < end.getTime()) {
        var tempDate = end;
        end = start;
        start = tempDate;
    }
    name = name || "New Event";
    location = location || {
        "gps": {x: 0, y: 0},
        "nameLocation": "Earth"
    };
    return {
        "start": start,
        "end": end,
        "name": name,
        "location": location,
        "friends": [],
        "stars": 0,
        "setLocation": function (gps , name) {
            if (typeof gps !== "undefined"  && typeof gps.x !== "undefined" && typeof gps.y !== "undefined" && typeof name === "string" ) {
                this.location.gps=gps;
                this.location.nameLocation=name;
            }
        },
        "addFriend": function (friend) {
            this.friends.push(friend);
        },
        "leaveMark": function(stars) {
            "use strict";
            if (typeof stars !== "number" || stars < 0) {
                stars = 0;
            }
            if (stars > 5) {
                stars = 5;
            }
            stars = (stars - (stars % 1)); //обрезаем дробную часть
            this.stars = stars;
        }
    };
}
// проверка date === undefined не работает  -  нужно писать typeof date === undefined, нулл не знаю. странно както выглядит
function _isDateTime(date) {
    "use strict";
    if (typeof date === "undefined" || date === null) {
        return false;
    }
    return (date.getTime || false);
}
function _isDateTimeTestCorrect() {
    "use strict";
    var testData = new Date();
    if (!_isDateTime(testData)) {
        throw new Error("Ошибка: Дата - это не дата O_*");
    }
    testData = "12341";
    if (_isDateTime(testData)) {
        throw new Error("Ошибка: Число - это дата O_o");
    }
}

// мне кажется или это лишнее ? звездочка вроде как не обьязательный параметр
function __correctionStartsTest() {
    "use strict";
    var dontStarts = "dont start", bigStart = 10, smallStart = -1, doubleStart = 1.234, correctStart = 2, testEvent=new Event(new Date(1));
    testEvent.leaveMark(dontStarts);
    if (testEvent.stars !== 0) {
        throw new Error("Ошибка: Звездочка не число Оо");
    }
    testEvent.leaveMark(bigStart);
    if (testEvent.stars !== 5) {
        throw new Error("Ошибка: Функция пропустила слишком большую звездочку");
    }
    testEvent.leaveMark(smallStart);
    if (testEvent.stars !== 0) {
        throw new Error("Ошибка: Функция пропустила слишком маленькую звездочку");
    }
    testEvent.leaveMark(doubleStart);
    if (testEvent.stars !== 1) {
        throw new Error("Ошибка: Функция не отрезала дробное окончание");
    }
    testEvent.leaveMark(correctStart);
    if (testEvent.stars !== 2) {
        throw new Error("Ошибка: Функция изменила хорошую звездочку");
    }
}