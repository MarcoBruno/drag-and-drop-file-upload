var FileApi = (function (document) {
    'use strict';
    
    var module = {};

    module.dragHover = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };

    module.selectMultiple = function (event, callback) {
        var files = event.target.files || event.dataTransfer.files;

        callback(files);
    };

    return {
        dragHover: module.dragHover,
        selectMultiple: module.selectMultiple
    };

})(document);
