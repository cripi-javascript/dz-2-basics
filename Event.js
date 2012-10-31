/**
* Возвращает объект Event
*
* @param {String}    [name = "Событие"]  Имя события
* @param {String}    [address = ""]      Адресс события
* @param {Object}    time                Дата события
* @param {Array}     member              Участники
* @param {Number}    [raiting=3]         Важность события (по шкале от 0 до 5)
*
* @example
*   Event(
*       "Совещание", "Екатеринбург, ул. Тургенева, д. 4, ауд. 150",
*       EventTime(new Date(2011, 10, 10, 14, 48, 00), 60),
*       ["Жигалов Сергей Алексеевич"], 5)
*
* @return {Object}
* @see EventTime
*/

function Event(name, address, time, member, raiting) {
    "use strict";
    return {
        "name": name || "Событие",
        "address": address.toString(),
        "time": time,
        "member": member || [],
        "raiting": +raiting || 3
    };
}


/**
* Возвращает объект EventTime
*
* @private
* @param {Number|Date} start          Начало события
* @param {Number}      [length=0]     Длительность события в минутрах
*
* @example
*    EventTime(new Date(2011, 10, 10, 14, 48, 00), 60)
*
* @return {Object}
*/
function EventTime(start, length) {
    "use strict";
    return {
        "start": +start,
        "length": +length || 0
    };
}