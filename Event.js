/*jslint plusplus: true, vars: true, browser: true, devel: true */
/*
 * Возвращает объект Event
 *
 * @param {Number|Date} start             Начало события
 * @param {Number|Date} end               Конец события
 * @param {String}      [name="Имя"]      Название события
 * @param {String}      [place="Место"]   Место события
 * @param {String}      [definition="Описание"]   Место события
 * @param {Number} GPS [lon = "Долгота", lat = "Широта"]  GPS координаты места 
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "Совещание",							
 *          "Хаят",
 *			"Повышение в должности"
 *          "34.342, 60.354" )
 *
 * @return {Object}
 */

function Event(start, end, name, place, definition, GPS) {
    "use strict";
    if (typeof GPS === "number") {
	    if (GPS[0] > Math.abs(90) || GPS[1] > Math.abs(180)) {
            var new_GPS = [0, 0];
        } else {
            var new_GPS = GPS;
        }
    }
    return {
        "start": +start,
        "end": +end,
        "name": name || "Имя",
        "place": place ||  "Место",
	    "definition": definition || "Описание",
        "GPS": GPS || "Долгота, Широта"
    };
}