/*
 * Возвращает объект Event
 *
 * @param {Number|Date} start             Начало события
 * @param {Number|Date} end               Конец события
 * @param {String}      [name="Имя"]      Название события
 * @param {String}      [place="Место"]   Место события
 * @param {Number} GPS                    Координаты события
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "Совещание",
 *          "Хаят",
 *          "624:342" )
 *
 * @return {Object}
 */

function Event(start, end, name, place, GPS) {
    return {
        "start": +start,
        "end": +end,
        "name": name || "Имя",
        "place": place ||  "Место",
        "GPS": GPS || "624:342
    };
}