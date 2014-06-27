var XHR = (function () {
    'use strict';

    var module = {};

    module.init = function () {
        return new XMLHttpRequest();
    };

    return {
        init: module.init
    }
})();
