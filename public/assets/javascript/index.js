(function (document) {
    'use strict';

    var $btnupload = document.getElementById('btnupload'),
        $uploadfile = document.getElementById('uploadfile'); 

    $btnupload.addEventListener('change', function () {
        $uploadfile.value = this.value; 
    });
})(document);
