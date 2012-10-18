/**
 * Возвращает объект Event
 *
 * @param {Number|Date} start                     Начало события
 * @param {Number|Date} end                       Конец события
 * @param {String}      [name="Событие"]          Имя события
 * @param {String}	[description="Описание"]  Описание события
 * @param {Number}      [number=1]                Рейтинг события  
 * @param {Boolean}	[alarm=false]	          Нужно ли напоминание
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "Совещание")
 *
 * @return {Object}
 */
function Event(start, end, name, description, rating, alarm) {
    if (typeof(alarm) === "boolean") {
        var new_alarm = alarm;
    } else {
        var new_alarm = false;
    }
    if (typeof(rating) === "number") {
        if (rating > 5 || rating < 1) {
            var new_rating = 1;
        } else {
            var new_rating = rating;
        }
    }
    return {
        "start": +start,
        "end": +end,
        "name": name || "Событие",
        "description": description || "Описание",
        "rating": new_rating,
        "alarm": new_alarm
    };
}
