(function() {

    'use strict';

    angular.module('bezierConverter')
        .controller('MainCtrl', ['$scope', function($scope) {
            $scope.digits = '';
            $scope.output = '';
            $scope.docWidth = 1100;
            $scope.docHeight = 1000;
            $scope.elementName = 'largeCircle';
            $scope.animTime = 5;
            
            $scope.$watch('digits', function(newVal) {

                if (typeof newVal === 'undefined') return;

                var result = beginning();
                result += processDigits(newVal);
                result += ending();


                $scope.output = result;
            });

            function processDigits(digitString) {
                return percentProcess(digitString);
            }

            function relativeProcess(digitString) {
                var result = '';

                var sourceArray = digitString.split(',');

                var sourceLength = sourceArray.length;

                for (var i = 0; i < sourceLength; i += 2) {
                    result += '{right:';
                    result += $scope.docWidth - sourceArray[i];
                    result += ', bottom:';
                    result += $scope.docHeight - sourceArray[i+1];
                    result += '}';

                    if (i + 2 !== sourceLength) {
                        result += ',';
                    }
                }

                return result;
            }

            function percentProcess(digitString) {
                var result = '';

                var sourceArray = digitString.split(',');

                var sourceLength = sourceArray.length;

                for (var i = 0; i < sourceLength; i += 2) {
                    result += '{right:"';
                    result += makePercent($scope.docWidth - sourceArray[i], $scope.docWidth);
                    result += '", bottom:"';
                    result += makePercent($scope.docHeight - sourceArray[i+1], $scope.docHeight);
                    result += '"}';

                    if (i + 2 !== sourceLength) {
                        result += ',';
                    }
                }

                return result;
            }

            function makePercent(amnt, max) {
                var result = '';

                result += parseInt((amnt / max) * 100);
                result += '%';

                return result;
            }

            function standardProcess(digitString) {
                var result = '';

                var sourceArray = digitString.split(',');

                var sourceLength = sourceArray.length;

                for (var i = 0; i < sourceLength; i += 2) {
                    result += '{x:';
                    result += sourceArray[i];
                    result += ', y:';
                    result += sourceArray[i+1];
                    result += '}';

                    if (i + 2 !== sourceLength) {
                        result += ',';
                    }
                }

                return result;
            }

            function beginning() {
                var elementName = $scope.elementName ? $scope.elementName : 'YOUR_ELEMENT';
                return 'animation.to(' + elementName + ', ' + $scope.animTime + ', {bezier:{curviness:2, type:"thru", values:[';
            }

            function ending() {
                var ease = $scope.selectedEase || 'Linear.easeNone';
                return ']}, ease:' + ease + '});'
            }

        }]);
})();
