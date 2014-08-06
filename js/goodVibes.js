;(function() {
    if (!("vibrate" in window.navigator)) {
        return;
    }

    var registeredEvents = ["touchstart", "touchend"];
    var elemClicked = null;

    var vibrate = function(evt, type) {
        var elem = evt.target;

        while (elem.nodeName.toLowerCase() !== "body" && !("vibrate" in elem.dataset)) {
            elem = elem.parentNode;
        }

        if (elem === document.body) {
            return;
        }

        if (("vibrateOn" in elem.dataset && elem.dataset.vibrateOn === type) || (!("vibrateOn" in elem.dataset) && type === "touchend")) {
            window.navigator.vibrate(JSON.parse(elem.dataset.vibrate));
        }
    };

    var registerEvent = function(type) {
        if (~registeredEvents.indexOf(type)) {
            return;
        }

        registeredEvents.push(type);
        document.body.addEventListener(type, function(evt) {
            vibrate(evt, type);
        }, false);
    };

    var addFastClick = function() {
        var vibrateEnd = function(evt) {
            var touch = evt.changedTouches[0];
            var endElem = document.elementFromPoint(touch.pageX, touch.pageY);

            if (endElem === elemClicked) {
                vibrate(evt, "touchend");
            }

            evt.target.removeEventListener("touchend", vibrateEnd, false);
        };

        document.body.addEventListener("touchstart", function(evt) {
            if (!evt.target.dataset.vibrate) {
                return;
            }

            elemClicked = evt.target;
            elemClicked.addEventListener("touchend", vibrateEnd, false);
        }, false);
    };

    window.addEventListener("DOMContentLoaded", function() {
        addFastClick();

        [].forEach.call(document.querySelectorAll("[data-vibrate-on]"), function(elem) {
            registerEvent(elem.dataset.vibrateOn);
        });

        document.body.addEventListener("DOMNodeInserted", function(evt) {
            var elem = evt.target;
            if ("vibrateOn" in elem.dataset) {
                registerEvent(elem.dataset.vibrateOn);
            }
        }, false);

    }, false);
}());