var util = (function () {
    'use strict';

    var module = {};

    module.loop = function (elements, callback) {
        var max = elements.length;

        while (max--) {
            callback(elements[max]);
        };
    };

    return {
        loop: module.loop
    };
})();
