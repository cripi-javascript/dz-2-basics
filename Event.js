/*
 * ���������� ������ Event
 *
 * @param {Number|Date} start             ������ �������
 * @param {Number|Date} end               ����� �������
 * @param {String}      [name="�������"]  ��� �������
 * @param {String}      [place="�����"]      ����� �������
 * @param {Number} GPS                    ���������� �������
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "���������",
 *          "����",
 *          "624:342" )
 *
 * @return {Object}
 */

function Event(start, end, name, place, GPS) {
    return {
        "start": +start,
        "end": +end,
        "name": name || "�������",
        "place": place ||  "�����",
        "GPS": GPS || "624:342
    };
}