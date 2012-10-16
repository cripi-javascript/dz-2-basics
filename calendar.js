/**
 * Created with PyCharm.
 * User: meded
 * Date: 10/13/12
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Описания собития
 * @param eventOptions {Object}                            Обекс с параметарми
 * @param eventOptions.startEvent {Number | Date}          Начало собития
 * @param eventOptions.endEvent {Number | Date}            Конец события
 * @param eventOptions.name {string}                       Заголовок
 * @param eventOptions.description {string}                Описание
 * @param eventOptions.tegs {string}                       Теги
 * @param eventOptions.place {string}                      Адрес собития
 * @param eventOptions.coordinates {string}                Кардинаты собития
 * @param eventOptions.colorFon {string}                   Цвети стикира
 * @param eventOptions.reminders {boolean}                 Индекатор уведомлений
 * @param eventOptions.reminderTimeBefore {Number | Date}  Время уведомления
 * @param eventOptions.friends {string}                    Ссылки на друзей из соц сетей
 *
 * @return {Object}
 */
function Event(eventOptions) {
    'use strict';
    /**
     * проверка и приведения к дате
     * @param time {Number | Date} Дата или стока
     * @return {Date}              Вернет в формате даты
     */
    function isData(time){
        if ('string' === typeof(time)){
            var start = new Date(time)
            if ('Invalid Date' === start){
                alert ("не верный формат даты");
            } else{
                return start
            }
        } else{
            return time
        }
    }
    eventOptions.startEvent = isData(eventOptions.startEvent);
    eventOptions.endEvent = isData(eventOptions.endEvent);
    if (eventOptions.startEvent > eventOptions.endEvent) {
        var t = eventOptions.startEvent;
        eventOptions.startEvent = eventOptions.endEvent;
        eventOptions.endEvent = t;
    }

    eventOptions.startEvent = eventOptions.startEvent || new Date;
    eventOptions.endEvent = eventOptions.endEvent || new Date;
    eventOptions.name = eventOptions.name || "Событие";
    eventOptions.description = eventOptions.description || "";
    eventOptions.tegs = tegs.split(",") || [];

    /**
     * преоброзумем адрес в точные кардинаты
     * @param place {string}    Адрес собыитя
     * @return {*}              Кардинаты провдения собития
     */
    function findCoordinates(place) {
        //...
        return coordinates;
    }
    if (eventOptions.coordinates === "" && eventOptions.place) {
        eventOptions.coordinates = findCoordinates(eventOptions.place);
    }
    eventOptions.place = +place || "";
    eventOptions.coordinates = +coordinates || "";


    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
    if (regColorcode.test(eventOptions.color) !== false) {
        eventOptions.color = "";
        alert ("все плохо это не цвет");
    }
    eventOptions.color = color || "#fff";
    eventOptions.reminders = reminders || false;
    eventOptions.reminderTimeBeforeEvent = isData(eventOptions.reminderTimeBeforeEvent) || eventOptions.startEvent;
    eventOptions.friends = friends.split(",") || [];
    return eventOptions;
};
