/**
 * Возвращает объект Event
 *
 * @param {Number|Date} start                     Начало события
 * @param {Number|Date} end                       Конец события
 * @param {String}      [name="Событие"]          Имя события
 * @param {String}	[description="Описание"]  Описание события
 * @param {Boolean}	[alarm=false]	          Нужно ли напоминание
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "Совещание")
 *
 * @return {Object}
 */
function Event(start, end, name, description, alarm) {
    if (typeof(alarm) === "boolean") {
        var new_alarm = alarm;
    } else {
        var new_alarm = false;
    }
    return {
        "start": +start,
        "end": +end,
        "name": name || "Событие",
        "description": description || "Описание",
        "alarm": new_alarm
    };
}
