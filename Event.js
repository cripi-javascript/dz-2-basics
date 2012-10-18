/**
 * Возращает объект Event
 *
 * @param {Number|Date} DateStart							Начало события
 * @param {Number|Date} DateFinish 							Конец события
 * @param {String}      [name="Новое событие"]  			Имя события
 * @param {String}      [description="Описание события"]	Описание события
 * @param {Object}      Parent								Предшествующие связанные события
 * @param {Object}      Childs								Последующие связанные события
 * @param {Object}      Comments							Отзывы о прошедшем мероприятии
 * @param {Object}      Peoples								Участники события
 * @param {Object}      Location							Место проведения
 * @param {Boolean}     Private								Флаг приватности
 * @param {Number}      Rank								Оценка
 * @param {Number}      EvRS								Возрастное ограничение
 * @param {Sting}       [link=""]							Ссылка на внешний ресурс
 *
 *
 *
 */

function Event(Call, DateStart, DateFinish, Description, Parent, Childs, Comments, Peoples, Location, Private, Rank, EvRS, Link) {
    'use strict';
	return {
		"start": DateStart || new Date(),
		"end": DateFinish,
		"name": Call || "Новое событие",
		"description": Description || "Описание события",
		"parent": Parent || {},
		"childs": Childs || [],
		"comments": Comments || [],
		"peoples": Peoples || [], 
		"location": Location || {},
		"private": Private || False, 
		"rank": Rank || 0,		
		"EvRS": EvRS || 18,		
		"Link": Link || '' 		
	}
}