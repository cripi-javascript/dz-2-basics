/**
 * Возвращает объект Event
 *
 * @param {String}      [name="Событие"]  Имя события
 * @param {Number|Date} start             Начало события
 * @param {Number|Date} end               Конец события
 * @param {Boolean}     allDay            Весь день?
 * @param {Object}      location          Координаты
 * @param {Object}      withPeople        Соучастники
 * @param {Number}      repeat            Повторяемость события
 * @param {Number}      stars             Рейтинг от 0 до 5
 * @param {String}      color             Цвет в календаре
 * @param {String}      [uri="Ссылка"]    Ссылка на мероприятие
 * @param {String}      [notes="Заметки"] Заметки
 *
 * @example
 *    Event("КРиПИ по JS",
 *          new Date("2012-10-17T18:50:00"),
 *          false,
 *          new Date("2012-10-17T21:00:00"),
 *          "56.841587, 60.614925",
 *          "Михаил Давыдов",
 *          7,
 *          5,
 *          "red",
 *          "http://cripi.ru/#javascript",
 *          "Взять ноутбук и пропуск")
 *
 * @return {Object}
 */
function Event(name, start, end, allDay, location, withPeople, repeat, stars, color, uri, notes) {
    'use strict';
    return {
        "name": name || "Встреча",
        "start": +start || new Date(),
        "end": +end || start.hoursValue(+2),
        "allDay": allDay || false,
        "location": location.split(', ') || [],
        "wwithPeople": withPeople.split(', ') || [],
        "repeat": +repeat || 0,
        "stars": +stars || 0,
        "color": color || "white",
        "uri": uri || "Ссылка",
        "notes": notes || "Заметки"
    };
}