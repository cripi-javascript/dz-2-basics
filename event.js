/**
*���������� ������ Event
*@param {Number | Date} start	������ �������
*@param {Number | Date} end	����� �������
*@param {String} name	��� �������
*@param {String} place	����� ����������
*@param {String} repeat["���", "������ ����", "������ ������", "��� � 2 ������", "������ �����", "������ ���"]	������
*@param {String} member[]	���������
*@param {String} reminder["� ������ �������", "�� 5 �����", "�� 15 �����", "�� 30 �����", "�� 1 ���", "�� 2 ����"]	�����������
*@param {Number} gps[longitude, latitude]	GPS ���������� �����
*@param {String} note	�������
*@example
*Event(new Date('2011-10-10T14:48:00'),
*	new Date('2011-10-10T15:48:00'),
*	"������� �������",
*	"�. ������������, ��. ���������, �. 67",
*	new []("������ ����"),
*	new []("������� �����", "������� ������", "������� ���������"),
*	new [](�� 1 ���),
*	new [](56.855636, 60.636671),
*	"�������� � ����� �������.")
*
*@return {Object}
*/
function Event(start, end, name, place, repeat, member, reminder, gps, note) {
    "use strict";
	return {
	    "start": +start,
	    "end": +end,
	    "name": name || "�������",
	    "place": place || "�����, �����, ���",
	    "repeat": repeat,
	    "member": member[],
	    "reminder": reminder,
	    "gps": gps,
	    "note": note || "�������"
    };
}
