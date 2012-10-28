/*jslint plusplus: true, browser: true, devel: true */
/**
 * Возвращает объект Event
 *
 * @param {Object} NewEvent                        Объект - событие
 * @param {Number|Date} NewEvent.start             Начало события
 * @param {Number|Date} NewEvent.end               Конец события
 * @param {String}      [NewEvent.name="Событие"]  Имя события
 * @param {String} NewEvent.place                  Место события
 * @param {Number} NewEvent.rating                 Рейтинг события от 0 до 5
 * @param {String} NewEvent.comment                комментарий, описание события
 * @param {String} NewEvent.link                   ссылка
 *
 * @example
 *    Event({
 *    start: new Date('2011-10-10 14:48:00'),
 *    end: new Date('2011-10-10 15:48:00'),
 *    name: "Совещание",
 *    place: "офис 111",
 *    rating: 5,
 *    comment: "взять отчет!!!",
 *    }
 *    )
 *
 * @return {Object} 
 */
function Datatype(data) {
    "use strict";
    if (typeof data === 'undefined') {
        return false;
    }
    if (!data.getTime) {
        return false;
    }
    if ('Invalid Date' === data) {
        return false;
    }
    return true;
}
/**
* возвращает true, если data имеет тип дата и она корректна
*/
function ratingtype(rating) {
    "use strict";
    if (typeof rating !== 'number') {
        return false;
    }
    if (rating > 5 || rating < 0) {
        return false;
    }
    return true;
}
/**
* возвращает true, если rating - число от 0 до 5
*/
function Event(NewEvent) {
    "use strict";
    if (!Datatype(NewEvent.start)) {
        alert(NewEvent.start + " не является датой!");
        return;
    }
    if (!Datatype(NewEvent.end)) {
        alert(NewEvent.end + " не является датой!");
        return;
    }
    if (!ratingtype(NewEvent.rating)) {
        alert("введите рейтинг от 0 до 5");
        return;
    }
    return {
        "start": NewEvent.start,
        "end": NewEvent.end,
        "name": NewEvent.name || "Событие",
        "place": NewEvent.place,
        "rating": NewEvent.rating,
        "comment": NewEvent.comment,
        "link": NewEvent.link
    };
}