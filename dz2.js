/*jslint regexp: true, browser: true, devel: true */
/**
 * Возвращает объект Event
 *
 * @param {Number|Date} start             Начало события
 * @param {Number|Date} end               Конец события
 * @param {Number} rating                 Рейтинг события от 1 до 5(по умолчанию 1)
 * @param {String}      [place="Земля"]   Место проведения
 * @param {Number} numbParticipants       Количество участников
 * @param {String} participants           Имена участников через запятую
 * @param {String} regularity             Регулярность(ежедневно, еженедельно, ежемесячно(по умолчанию), ежегодно)
 * @param {String}      [name="Событие"]  Имя события
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-11T14:48:00'),
 *          5,
 *          "Офис",
 *          3,
 *          "Петя,Вася,Коля",
 *          "Еженедельно",
 *          "Какой-то комментарий",
 *          "Встреча")
 *
 * @return {Object}
 */

function isNumber(n) {
    'use strict';
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isDate(input) {
    'use strict';
    var date, reg = /(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d/;
    if (input.match(reg)) {
        date = true;
    } else {
        date = false;
    }
    return date;
}

function isTime(input) {
    'use strict';
    var time, reg = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (input.match(reg)) {
        time = true;
    } else {
        time = false;
    }
    return time;
}

function Event(start, end, rate, place, numbParticipants, participants, regularity, comment, name) {
    'use strict';
    var startDate, endDate, startTime, endTime, participantsNames = [];
    startDate = start.getDate() + '/' + (start.getMonth() + 1) + '/' + start.getFullYear();
    endDate = end.getDate() + '/' + (end.getMonth() + 1) + '/' + end.getFullYear();
    startTime = start.getUTCHours() + ':' + start.getUTCMinutes();
    endTime = end.getUTCHours() + ':' + end.getUTCMinutes();
    if (!isDate(startDate)) {
        console.log("Please enter start date in dd/mm/yyyy format");
        return;
    }
    if (!isDate(endDate)) {
        console.log("Please enter end date in dd/mm/yyyy format");
        return;
    }
    if (!isTime(startTime)) {
        console.log("Please enter start date time in 24 format hh:mm");
        return;
    }
    if (!isTime(endTime)) {
        console.log("Please enter end date time in 24 format hh:mm");
        return;
    }
    if ((!isNumber(rate) && rate !== "") || (rate > 5 || rate < 1)) {
        console.log("Error in rating (Rating must be in range from 1 to 5)");
        return;
    }
    if (!isNumber(numbParticipants)) {
        console.log("Wrong number of participants");
        return;
    }
    participantsNames = participants.split(',');
    if (participantsNames.length !== numbParticipants) {
        console.log("Please check number of participants");
        return;
    }
    return {
        "start": start,
        "end": end,
		"rating": rate || 1,
		"place": place || "Земля",
		"numbParticipants": numbParticipants,
		"participants": participantsNames.toString(),
		"regularity": regularity || "Ежемесячно",
		"commentary": comment,
        "name": name || "Событие"
    };
}