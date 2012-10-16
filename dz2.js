/**
 * Возвращает объект Event
 * @param {String} [name="Встреча"]                        Имя события 
 * @param {Number|Date} start                              Начало события
 * @param {Number|Date} end                                Конец события
 * @param {Object} participants                            Список участников и их контакты
 * @param {Object} organizer                               Организатор и его контактная информация             
 * @param {String} place                                   Место встречи
 * @param {String} info                                    Дополнительная информация о встрече
 * @param {Number|Date} reminder                           Дата, когда напомнить о встрече
 * @param {String} type["Работа", "Отдых", "Дела"]         Тип встречи, пользователю будет предложено выбрать из списка
 * 
 * @example
 *     Event("Совещание",
 *          new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
 *          ["Паша", 8588264934],
 *          "Луначарского 92, кб.31",
 *          "Будут обсуждаться вопросы...",
 *          new Date('2011-10-10T14:48:00'),
 *          "Работа"
 *          )
 *
 * @return {Object}
 */
/*jslint browser: true, devel: true */
function Event(name, start, end, participants, organizer, place, info, reminder, type) {
    "use strict";
    if (typeof start === "undefined") {
        throw new TypeError("should be date");
    }
    return {
        "name": name || "Встреча",
        "start": +start,
        "end": +end,
        "participants": participants || {},
        "organizer": organizer || {},
        "place": place || {},
        "info": info || {},
        "reminder": reminder || function WorkData(start) {
            /* функция будет преобразовывать дату и выдавать день, предшествующий start*/
            var data;
            return {"data": data};
        },
        "type": type || "Работа"
    };
}