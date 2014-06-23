(function (document) {
    'use strict';

    var $btnupload = document.getElementById('article-singup-upload'),
        $uploadfile = document.getElementById('uploadfile'); 

    var loop = function (elements, callback) {
        var max = elements.length;

        while (max--) {
            callback(elements[max]);
        };
    };

    // file drag hover
    var FileDragHover = function (e) {
        e.stopPropagation();
        e.preventDefault();
    };

    // file selection
    var FileSelectHandler = function(e) {
        // cancel event and hover styling
        FileDragHover(e);

        // fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
    
        // process all File objects
        loop(files, function (file) {
            ParseFile(file);
        });
    };

    var Output = function (msg) {
        var m = document.getElementById("output");

        m.innerHTML = msg + m.innerHTML;
    };

    var Init = function () {
        var fileselect = document.getElementById('article-singup-upload'),
            filedrag = document.getElementById('form-drag-and-drop'); 
   
        // File Select
        fileselect.addEventListener('change', FileSelectHandler, false);

        // is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
        
            // file drop
            filedrag.addEventListener("dragover", FileDragHover, false);
            filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener("drop", FileSelectHandler, false);
        };
    };

    if (window.File && window.FileList && window.FileReader) {
        Init();
    };

    var ParseFile = function (file) {
        Output(
            "<p>File information: <strong>" + file.name +
            "</strong><p>Qtd: <strong>" + file. +
            "</strong></p>"
        );
    };
})(document);
