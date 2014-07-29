;(function() {
    if (!"vibrate" in window.navigator) {
        return;
    }

    var registeredEvents = [];

    var vibrate = function(evt, type) {
        var elem = evt.target;
        if (!("vibrate" in elem.dataset)) {
            return;
        }

        if (("vibrateTrigger" in elem.dataset && elem.dataset.vibrateTrigger === type) || (!("vibrateTrigger" in elem.dataset) && type === "click")) {
            window.navigator.vibrate(JSON.parse(elem.dataset.vibrate));
        }
    }

    var append = function(type) {
        if (~registeredEvents.indexOf(type)) {
            return;
        }

        registeredEvents.push(type);
        document.body.addEventListener(type, function(evt) {
            vibrate(evt, type);
        }, false);
    };

    window.addEventListener("DOMContentLoaded", function() {
        append("click");
        [].forEach.call(document.querySelectorAll('[data-vibrate-trigger]'), function(elem) {
            append(elem.dataset.vibrateTrigger);
        })
    }, false);

    document.body.addEventListener("DOMNodeInserted", function(evt) {
        var elem = evt.target;
        if ("vibrateTrigger" in elem.dataset) {
            append(elem.dataset.vibrateTrigger);
        }
    }, false);
}());