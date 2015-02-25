(function() {

    'use strict';

    angular.module('bezierConverter')
        .controller('MainCtrl', ['$scope', function($scope) {
            $scope.works = 'yep';
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

            /*
            TweenMax.to(YOUR_ELEMENT, 5, {bezier:{curviness:2, type:"thru", values:[{x:14, y:1000},{x:550, y:753},{x:801, y:687},{x:868, y:834},{x:674, y:925},{x:684, y:773}]}, ease:Linear.easeNone});
           */

          /*
           514,1000,550,753,801,687,868,834,674,925,684,773
           */

            $scope.easing = [
                'Power0.easeIn',
                'Power0.easeInOut',
                'Power0.easeOut',
                'Power1.easeIn',
                'Power1.easeInOut',
                'Power1.easeOut',
                'Power2.easeIn',
                'Power2.easeInOut',
                'Power2.easeOut',
                'Power3.easeIn',
                'Power3.easeInOut',
                'Power3.easeOut',
                'Power4.easeIn',
                'Power4.easeInOut',
                'Power4.easeOut',
                'Back.easeIn',
                'Back.easeInOut',
                'Back.easeOut',
                'Elastic.easeIn',
                'Elastic.easeInOut',
                'Elastic.easeOut',
                'Bounce.easeIn',
                'Bounce.easeInOut',
                'Bounce.easeOut',
                'Rough.easeIn',
                'Rough.easeInOut',
                'Rough.easeOut',
                'SlowMo.easeIn',
                'SlowMo.easeInOut',
                'SlowMo.easeOut',
                'Stepped.easeIn',
                'Stepped.easeInOut',
                'Stepped.easeOut',
                'Circ.easeIn',
                'Circ.easeInOut',
                'Circ.easeOut',
                'Expo.easeIn',
                'Expo.easeInOut',
                'Expo.easeOut',
                'Sine.easeIn',
                'Sine.easeInOut',
                'Sine.easeOut',
            ];
        }]);
})();
