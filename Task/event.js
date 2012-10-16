/*jslint nomen: true*/
/*global runTests: true*/
/*global Event: true*/
/*global _defaultFriendList: true*/
/*global _defaultLocation: true*/
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
function Event(start, end, name, location, friends, stars) {
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
    location = location || _defaultLocation();
    friends = friends || _defaultFriendList();
    stars = _correctionStarts(stars);
    return {
        "start": start,
        "end": end,
        "name": name,
        "location": location,
        "friends": friends,
        "stars": stars
    };
}
function _defaultFriendList() {
    "use strict";
    return [];
}
function _defaultLocation() {
    "use strict";
    return {
        "GPS": {x: 0, y: 0},
        "NameLocation": "Earth"
    };
}

function _isDateTime(date) {
    "use strict";
    if (date === undefined || date === null) {
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

function _correctionStarts(stars) {
    "use strict";
    if (typeof stars !== "number") {
        return 0;
    }
    if (stars < 0) {
        return 0;
    }
    if (stars > 5) {
        return 5;
    }
    return (stars - (stars % 1)); //обрезаем дробную часть
}
function __correctionStartsTest() {
    "use strict";
    var dontStarts = "dont start", bigStart = 10, smallStart = -1, doubleStart = 1.234, correctStart = 2;
    if (_correctionStarts(dontStarts) !== 0) {
        throw new Error("Ошибка: Звездочка не число Оо");
    }
    if (_correctionStarts(bigStart) !== 5) {
        throw new Error("Ошибка: Функция пропустила слишком большую звездочку");
    }
    if (_correctionStarts(smallStart) !== 0) {
        throw new Error("Ошибка: Функция пропустила слишком маленькую звездочку");
    }
    if (_correctionStarts(doubleStart) !== 1) {
        throw new Error("Ошибка: Функция не отрезала дробное окончание");
    }
    if (_correctionStarts(correctStart) !== 2) {
        throw new Error("Ошибка: Функция изменила хорошую звездочку");
    }
}