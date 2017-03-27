"use strict";


/**
 * Servicio de Animaciones para moverse por la página
 */
function AnimateScroll($timeout) {

    /**
     * Hace un Scroll animado hasta una posición en "Y" desde la parte superior
     * @param {type} top La opsición "Y" desde la parte superior
     */
    var toTop = function (top) {
        $('html, body').stop().animate({
            scrollTop: top
        }, 1500, 'easeInOutExpo');
    }

    /**
     * Hace un Scroll animado hasta un elemento
     * @param {Element || String} element Elemento hasta el que se hace un Scroll. Puede ser el propio elemento o un String con el "id" del elemento
     */
    var toElement = function (element) {
        var offset;
        if (typeof (element) === "string") {
            offset = $("#" + element).offset();
        } else {
            offset = element.offset();
        }

        if (offset) {
            toTop(offset.top);
        } else {
            $timeout(function () {
                if (typeof (element) === "string") {
                    offset = $("#" + element).offset();
                } else {
                    offset = element.offset();
                }
                toTop(offset.top);
            }, 1);
        }
    }


    return {
        toElement: toElement,
        toTop: toTop
    }
}
AnimateScroll.$inject=['$timeout'];


app.factory("animateScroll", AnimateScroll);


