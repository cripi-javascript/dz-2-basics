function Event() {
	return {
		/**
		*���������� ���� number, �������� ������ ������� � ���� "��������".
		*/
		startTime : undefined,
		/**
		*���������� ���� number, �������� ����� ������� � ���� "��������".
		*/
		endTime : undefined,
		/**
		*������, ���������� �� ������� �������.
		*/
		rating : {
			/**
			*���������� ���� number, �������� ������� �������.
			*/
			rating : 0,
			/**
			*���������� ���� number, �������� ���������� �������, ��������� ������� � �����������.
			*/
			numberOfVoters : 0
		},
		/**
		*������, ���������� �� �������� �����, ����������� ������� � ������ �������.
		*/
		members : {
			/**
			*���������� ���� number, �������� ����� �����, ����������� ������� � ������ �������.
			*/
			numberOfParticipants : 0,
			/**
			*������ string, �������� ��� �����, ����������� ������� � ������ �������.
			*/
			namesOfParticipants : []
		},
		/**
		*���������� ���� string, �������� ������ �� ���������� ������� �� �������� ����� �������.
		*/
		link : undefined,
		/**
		*������, �������� ���������� ������� �������.
		*/
		coordinate : {
			/**
			*���������� ���� string, �������� �������� ������, � ������� ����� ��������� �������.
			*/
			city : undefined,
			/**
			*���������� ���� String, �������� �������� �����, �� ������� ����� ��������� �������.
			*/
			street : undefined,
			/**
			*���������� ���� number, �������� ����� ����, � ������� ����� ��������� �������.
			*/
			house : undefined
		},
		/**
		*����������� �� �������.
		*
		*@param {Number} mark    ������ �� 0 �� 5 �� ��� �������.
		*/
		vote : function (mark) {
			if ((mark >= 0) && (mark <= 5)) {
				++this.rating.numberOfVoters;
				this.rating.rating = (this.rating.rating + mark) / this.rating.numberOfVoters;
			}
		},
		/**
		*����������� �������.
		*
		*@param {Number} start    ���� ������ �������. ���� �� �������� ����� number, ���� �� �����, ������� �� ��������.
		*
		*@param {Number} end      ���� ����� �������. ���� �� �������� ����� number, ���� �� �����, ��� ���� ����� ������, ��� ���� ������ �������, ������� �� ��������.
		*
		*@param {String} link     ������ �� ���������� �������, ���� �� �������� ����� string, ������������� ������ �� ����������.
		*
		*@param {String} city     �������� ������,� ������� ������ �������, ���� �� �������� ����� string, ������������� ������� coordinate �� ���������.
		*
		*@param {String} street   �������� �����, �� ������� ������ �������, ���� �� �������� ����� string, ������������� ������� coordinate �� ���������.
		*
		*@param {Number} house    ����� ����, � ������� ������ �������, ���� �� �������� ����� number, ������������� ������� coordinate �� ���������.
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
		*���������� �������� � ������ ���������� �������.
		*
		*@param {String} name     ��� ��������� �������.
		*/
		addParticipant : function (name) {
			if (typeof name === "string") {
				++this.members.numberOfParticipants;
				this.members.namesOfParticipants[this.members.numberOfParticipants] = name;
			}
		}
	};
}