"user strict";


//Esta directiva es un apaño para ocultar un códido de jQuery
//Solo sirve para que se genere un "click" sobre el elemento indicado 
//en la directiva
//El objetivo real de crear la directiva es para que:
//Se cierre el menu superior cuando está en un movil.
//Es decir al pulsar sobre una opción se cierra el propio menu
//TODO: En vez de poner la directiva en cada link <a> sería mejor ponerlo e¡solo en el botón y el él, busque los elementos <a>
app.directive("fpeClickButtonOnClick", ['$window', '$rootScope', '$location', function ($window, $rootScope, $location) {
        var directiveDefinitionObject = {
            restrict:"A",
            compile: function (tElement, tAttrs) {
                return {
                    pre: function (scope, iElement, iAttrs, controller, transcludeFn) {
                    },
                    post: function (scope, iElement, iAttrs, controller, transcludeFn) {
                        iElement.on("click",function() {
                            $("#"+iAttrs.fpeClickButtonOnClick+":visible").click();
                        });
                    }
                };
            }
        };

        return directiveDefinitionObject;
    }]);


