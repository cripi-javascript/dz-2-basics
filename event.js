var requiredParams = {
	start: new Date('27-10-2012T09:00:00'),
	end: new Date('28-10-2012T22:00:00'),
	name: 'Поездка на озеро Тургояк',
	isNotify: 'true',
	notify: new Date('26-10-2012T20:00:00)
	};
var optionalParams = {
	description: 'Отличная возможность отдохнуть и насладиться природой',
	place: 'Озеро Тургояк',
	importance: 'h',
	url: 'http://www.turgoyak.com/'
	};
function addEvent(requiredParams, optionalParams) {
	"use strict";
	if (typeof requiredParams.start === 'Date') {
		if (typeof requiredParams.end === 'Date') {
			return {
				start: requiredParams.start,
				end: requiredParams.end,
				name: requiredParams.name || "Событие",
				isNotify: isNotify || "false"
				
		}
	}
	