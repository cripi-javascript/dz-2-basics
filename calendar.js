/**
 * Created with PyCharm.
 * User: meded
 * Date: 10/13/12
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Описания собития
 * @param start {Date}
 * @param end {string}
 * @param name {string}
 * @param description {string}
 * @param tegs {string}
 * @param place {string}
 * @param coordinates {string}
 * @param colorFon {string}
 * @param reminders {boolean}
 * @param reminderTimeBeforeEvent {string}
 * @param friends {string}
 */
function Event(start, end, name, description, tegs, place, coordinates, colorFon, reminders, reminderTimeBeforeEvent, friends) {
    'use strict';
    var startEvent =  new Date(start),
        endEvent = new Date(end),
        color = colorFon;


    if ('Invalid Date' === startEvent || 'Invalid Date' === endEvent) {
        alert ("не верный формат даты");
    }
    if (startEvent > endEvent) {
        var t = startEvent;
        startEvent = endEvent;
        endEvent = t;
    }
    /**
     * преоброзумем адрес в точные кардинаты
     * @param place {string}
     * @return {*}
     */
    function findCoordinates(place) {
        //...
        return coordinates;
    }
    if (coordinates === "" && place) {
        var coordinates = findCoordinates(place);
    }

    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
    if (regColorcode.test(color) !== false) {
        alert ("все плохо это не цвет");
    }

    return {
        "startEvent": startEvent,
        "endEvent": endEvent,
        "name": +name || "Событие",
        "description": +description,
        "tegs": tegs.split(","),
        "place": +place,
        "coordinates": +coordinates,
        "color": color || "#fff",
        "reminders": reminders || false,
        "reminderTimeBeforeEvent": new Date(reminderTimeBeforeEvent) || startEvent
        "friends": friends.split(",")
    };
};
