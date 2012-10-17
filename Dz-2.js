/**
 * Возвращает объект Event
 *
 * @param {String}      name              Название события
 * @param {Number|Date} start             Дата и время начала события
 * @param {Number|Date} end               Дата и время окончания события
 * @param {String}      destination       Пункт назначения
 * @param {String}      priority          Важность события
 * @param {String}      InfSource         Источники информации о событии
 * @param {boolean}     ready             Событие состоялось? 
 *
 * @example
 *    Event("event",
 *          new Date('2012-01-01T12:00:00'),
 *          new Date('2012-01-01T14:00:00'),
 *          "Earth",
 *          "important",
 *          "http://www.world-newspapers.com/science.html",
 *          true) 
 *
 * @return {Object}
 */
function Event(name, start, end, destination, priority, InfSource, ready) {
    "use strict";
    if (typeof start === "Date") {
        if (typeof end === "Date") {
            if (typeof ready === "boolean") {
                return {
                    "name": name || "event",
                    "start": +start || '2012-01-01T12:00:00',
                    "end": +end || '2012-01-01T14:00:00',
                    "destination": destination || "any place",
                    "priority": priority || "no important",
                    "InfSource": InfSource || "-",
                    "ready": ready || false
                };
            } else {
                throw new TypeError("error of end time format");
            }
        } else {
            throw new TypeError("error of start time format");
        }
    }
}