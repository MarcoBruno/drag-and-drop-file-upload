(function (document) {
    'use strict';

    var $btnupload = document.getElementById('article-singup-upload'),
        $uploadfile = document.getElementById('uploadfile'); 

    $btnupload.addEventListener('change', function () {
        $uploadfile.value = this.value; 
    });
})(document);
