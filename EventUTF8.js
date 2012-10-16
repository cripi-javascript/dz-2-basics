function Event() {
	return {
		/**
		*Переменная типа number, хранящая начало события в виде "ггггммдд".
		*/
		startTime : undefined,
		/**
		*Переменная типа number, хранящая конец события в виде "ггггммдд".
		*/
		endTime : undefined,
		/**
		*Объект, отвечающий за рейтинг события.
		*/
		rating : {
			/**
			*Переменная типа number, хранящая рейтинг события.
			*/
			rating : 0,
			/**
			*Переменная типа number, хранящая количество человек, принявших участие в голосовании.
			*/
			numberOfVoters : 0
		},
		/**
		*Объект, отвечающий за хранение людей, принимающих участие в данном событии.
		*/
		members : {
			/**
			*Переменная типа number, хранящая число людей, принимающих участие в данном событии.
			*/
			numberOfParticipants : 0,
			/**
			*Массив string, хранящий ФИО людей, принимающих участие в данном событии.
			*/
			namesOfParticipants : []
		},
		/**
		*Переменная типа string, хранящая ссылку со стороннего ресурса на описание этого события.
		*/
		link : undefined,
		/**
		*Объект, хранящий координаты данного события.
		*/
		coordinate : {
			/**
			*Переменная типа string, хранящая название города, в котором будет проходить событие.
			*/
			city : undefined,
			/**
			*Переменная типа String, хранящая название улицы, на которой будет проходить событие.
			*/
			street : undefined,
			/**
			*Переменная типа number, хранящая номер дома, в котором будет проходить событие.
			*/
			house : undefined
		},
		/**
		*Голосование за событие.
		*
		*@param {Number} mark    Оценка от 0 до 5 за это событие.
		*/
		vote : function (mark) {
			if ((mark >= 0) && (mark <= 5)) {
				++this.rating.numberOfVoters;
				this.rating.rating = (this.rating.rating + mark) / this.rating.numberOfVoters;
			}
		},
		/**
		*Конструктор события.
		*
		*@param {Number} start    Дата начала события. Если не является типом number, дата не верна, событие не создаётся.
		*
		*@param {Number} end      Дата конца события. Если не является типом number, дата не верна, или дата конца больше, чем дата начала события, событие не создаётся.
		*
		*@param {String} link     Ссылка со стороннего ресурса, если не является типом string, инициализация ссылки не происходит.
		*
		*@param {String} city     Название города,в котором пройдёт событие, если не является типом string, инициализация объекта coordinate не произойдёт.
		*
		*@param {String} street   Название улицы, на которой пройдёт событие, если не является типом string, инициализация объекта coordinate не произойдёт.
		*
		*@param {Number} house    Номер дома, в котором пройдёт событие, если не является типом number, инициализация объекта coordinate не произойдёт.
		*/
		createEvent : function (start, end, link, city, street, house) {
			if (((typeof start === "number") && (start / 20000000 > 0)) && ((typeof end === "number") && (end / 20000000 > 0) && (end > start))) {
				this.startTime = start;
				this.endTime = end;
				(typeof link === "string") && (this.link = link);
				if(((typeof house === "number") && (house > 0)) && (typeof city === "string") && (typeof street === "string")) {
					this.coordinate.street = street;
					this.coordinate.house = house;
					this.coordinate.city = city;
				}
			}
		},
		/**
		*Добавление человека в список участников события.
		*
		*@param {String} name     ФИО участника события.
		*/
		addParticipant : function (name) {
			if (typeof name === "string") {
				++this.members.numberOfParticipants;
				this.members.namesOfParticipants[this.members.numberOfParticipants] = name;
			}
		}
	};
}