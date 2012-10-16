/**
 * Created with PyCharm.
 * User: meded
 * Date: 10/13/12
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */
function Event(startEvent, endEvent, name, description, tegs, place, coordinates,color) {
    var startEvent =  new Date(start);
    var endEvent = new Date(end);


    if ('Invalid Date' == startEvent||'Invalid Date' == endEvent) {
        alert("не верный формат даты")
    }
    if (startEvent > endEvent) {
        endEvent = startEvent;
    }

    function findCoordinates(place){
        //...
        return coordinates;
    }
    if (coordinates=="" && place){
        var coordinates = findCoordinates(place);
    }
    return {
        "startEvent": startEvent,
        "endEvent": endEvent,
        "name": +name || "Событие",
        "description": +description,
        "tegs": tegs.split(","),
        "place": +place,
        "coordinates": +coordinates,
        "color": color || "fff"
    };
}

var TegList = []