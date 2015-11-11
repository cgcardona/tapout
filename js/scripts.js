'use strict';
window.onload = function(){
    buildGrid();
};

function buildGrid() {
    var elem = document.getElementById("container");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    var innerGrid = $('.innerGrid li');
    setInterval(function(){
        _.each(_.shuffle([true, false, false, false]), function(item, index) {
            $(innerGrid[index]).removeClass('hot cold correct incorrect').addClass(item === true ? 'hot' : 'cold');
        });
    }, 1000);
    $(innerGrid).click(function(evt) {
        if($(evt.currentTarget).hasClass('hot') && !$(evt.currentTarget).hasClass('correct')) {
            var scoreDOM = $('#score');
            var currentScore = $(scoreDOM).text();
            $(scoreDOM).text(parseInt(currentScore, 10) + 1);
            $(evt.currentTarget).addClass('correct');
        } else if(!$(evt.currentTarget).hasClass('correct')) {
            $(evt.currentTarget).addClass('incorrect');
        }
    });
}
