(function (document) {
    'use strict';

    var $btnupload = document.getElementById('article-singup-upload'),
        $uploadfile = document.getElementById('uploadfile'); 

    var Output = function (msg) {
        var m = document.getElementById("output");

        m.innerHTML = msg + m.innerHTML;
    };

    var ParseFile = function (files) {
       util.loop(files, function (file) {
            Output(
                "<p>File information: <strong>" + file.name +
                "</strong></p>"
            );
       }); 
    };

    if (window.File && window.FileList && window.FileReader) {
        var fileselect = document.getElementById('article-singup-upload'),
            filedrag = document.getElementById('form-drag-and-drop'); 
         
        fileselect.addEventListener('change', function (event) {
            console.log(this);
            FileApi.dragHover(event);
            FileApi.selectMultiple(event, ParseFile); 
        }, false);

        var xhr = XHR.init();
        if (xhr.upload) {
            filedrag.addEventListener("dragover", FileApi.dragHover, false);
            filedrag.addEventListener("dragleave", FileApi.dragHover, false);
            filedrag.addEventListener("drop", function (event) {
                FileApi.dragHover(event);
                FileApi.selectMultiple(event, ParseFile); 
            }, false);
        }; 
    };
    
})(document);
