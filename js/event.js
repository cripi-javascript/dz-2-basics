/**
 * Возвращает объект Event
 *
 * @param {String}       name             Название события
 * @param {String}       description      Описание события
 * @param {String}       date             Время события
 * @param {String}       time             Длительность события
 * @param {String}       where            Место проведения события
 *
 * @example
 *    Event('BalalaikaFest',
 *          'Awesome musical performance',
 *          '2012-10-30T19:30:00-05:00',
 *          '2 hours',
 *          'Yekaterinburg')
 *
 * @return {Object}
 */
function event(name, description, date, time, where) {
    "use strict";
    return {
        "name": name || "Name",
        "description": description || "Description",
        "date": new Date(+date) || "Date",
        "time": time || "Time",
        "where": where || "Where"
    };
}
function toTitleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(event('BalalaikaFest', 'Awesome musical performance', '2012-10-30T19:30:00-05:00', '2 hours', 'Yekaterinburg'));
function init() {
    "use strict";
    document.getElementById('htmlbutton').onclick = function () {
        var jsname = document.getElementById('htmlname').value || "Name of Event",
            jsdescription = document.getElementById('htmldescription').value,
            jsdate = document.getElementById('htmldate').value,
            jstime = document.getElementById('htmltime').value,
            jswhere = document.getElementById('htmlwhere').value;
        var obj = event(jsname, jsdescription, jsdate, jstime, jswhere);
        delete obj.name;
        var temp = '<table class="table table-striped"><p></p><p style = "font-size: 16px; font-weight: bold;  text-align: center;">' + jsname + '</p>';
        for (var objname in obj) {
            //noinspection JSUnfilteredForInLoop
            temp += '<tr><th>' + toTitleCase(objname) + '</th><td>' + obj[objname] + '</td></tr>';
        }
        temp += '</table>';
        document.getElementById('htmlresult').innerHTML += temp;
    };
}
onload = init;