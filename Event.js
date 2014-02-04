/**
*Возвращает объект Event
*@param {Number | Date} start	Начало события
*@param {Number | Date} end	Конец события
*@param {String} name	Имя события
*@param {String} place	Место проведения
*@param {String} repeat["Нет", "Каждый день", "Каждую неделю", "Раз в 2 недели", "Каждый месяц", "Каждый год"]	Повтор
*@param {String} member[]	Участники
*@param {String} reminder["В момент события", "За 5 минут", "За 15 минут", "За 30 минут", "За 1 час", "За 2 часа"]	Напоминание
*@param {Number} gps[longitude, latitude]	GPS координаты места
*@param {String} note	Заметки
*@example
*Event(new Date('2011-10-10T14:48:00'),
*	new Date('2011-10-10T15:48:00'),
*	"Деловая встреча",
*	"г. Екатеринбург, ул. Уральская, д. 67",
*	new []("Каждый день"),
*	new []("Беднева Дарья", "Петрова Марина", "Беляева Анастасия"),
*	new [](За 1 час),
*	new [](56.855636, 60.636671),
*	"Принести с собой ноутбук.")
*
*@return {Object}
*/
function Event(start, end, name, place, repeat, member, reminder, gps, note) {
    "use strict";
	return {
	    "start": +start,
	    "end": +end,
	    "name": name || "Событие",
	    "place": place || "Город, улица, дом",
	    "repeat": repeat,
	    "member": member[],
	    "reminder": reminder,
	    "gps": gps,
	    "note": note || "Заметки"
    };
}