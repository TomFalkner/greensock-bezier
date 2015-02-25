(function() {

    'use strict';

    angular.module('bezierConverter')
        .directive('tools', ['availableEasing', function(availableEasing){

            function tool(scope, elem, attr) {
                scope.easing = availableEasing.all();
            }

            return {
                restrict: 'A',
                templateUrl: 'templates/tools.html',
                scope: {
                    docWidth: '=',
                    docHeight: '=',
                    animTime: '=',
                    elementName: '='
                },
                link: tool
            }
        }]);
})();
