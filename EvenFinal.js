function Event() {
	return {
		startTime : undefined,
		endTime : undefined,
		/**
		* Объект с информацией о рейтинге события.
		*
		* @type {ratingStruct}
		* @field {Number} rating Величина рейтинга события.
		* @field {Number} numberOfVoters Величина рейтинга события.
		*/
		rating : {
			rating : 0,
			numberOfVoters : 0
		},
		/**
		* Объект с информацией о участниках события.
		*
		* @type {membersStruct}
		* @field {Number} numberOfParticipants Число участников.
		* @field {Array} namesOfParticipants ФИО участников.
		*/
		members : {
			numberOfParticipants : 0,
			namesOfParticipants : []
		},
		link : undefined,
		/**
		* Объект с информацией о месте события.
		*
		* @type {coordinateStruct}
		* @field {Number} house  Дом события.
		* @field {String} street Улица события.
		* @field {String} city   Город события.
		*/
		coordinate : {
			city : undefined,
			street : undefined,
			house : undefined
		},
		/**
		* Голосование за событие.
		*
		* @param {Number} mark    Оценка от 0 до 5 за это событие.
		*/
		vote : function (mark) {
			if (mark >= 0 && mark <= 5) {
				++this.rating.numberOfVoters;
				this.rating.rating = (this.rating.rating + mark) / this.rating.numberOfVoters;
			}
		},
		/**
		* Конструктор события.
		*
		* @param {Number} start    Начало события в формате "ггггммдд".
		* @param {Number} end      Конец события в формате "ггггммдд".
		* @param {String} link     Ссылка события.
		* @param {String} city     Город события.
		* @param {String} street   Улица события.
		* @param {Number} house    Номер дома события.
		*/
		createEvent : function (start, end, link, city, street, house) {
			if (typeof start === "number" && start / 20000000 > 0 && end > start) {
				this.startTime = start;
				this.endTime = end;
				(typeof link === "string") && (this.link = link);
				if(typeof house === "number" && house > 0) {
					this.coordinate.street = street;
					this.coordinate.house = house;
					this.coordinate.city = city;
				}
			}
		},
		/**
		* Добавление человека в список участников события.
		*
		* @param {String} name     ФИО участника события.
		*/
		addParticipant : function (name) {
			if (typeof name === "string") {
				++this.members.numberOfParticipants;
				this.members.namesOfParticipants[this.members.numberOfParticipants] = name;
			}
		}
	};
}