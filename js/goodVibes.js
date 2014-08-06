;(function() {
    if (!window.navigator.vibrate) {
        return;
    }

    var registeredEvents = ["touchstart", "touchend"];
    var elemClicked = null;

    var vibrate = function(evt, type) {
        var elem = evt.target;
        if (!("vibrate" in elem.dataset)) {
            return;
        }

        if (("vibrateTrigger" in elem.dataset && elem.dataset.vibrateTrigger === type) || (!("vibrateTrigger" in elem.dataset) && type === "touchend")) {
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
            evt.target.removeEventListener(vibrateEnd);
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

        [].forEach.call(document.querySelectorAll('[data-vibrate-trigger]'), function(elem) {
            registerEvent(elem.dataset.vibrateTrigger);
        });

        document.body.addEventListener("DOMNodeInserted", function(evt) {
            var elem = evt.target;
            if ("vibrateTrigger" in elem.dataset) {
                registerEvent(elem.dataset.vibrateTrigger);
            }
        }, false);

    }, false);
}());