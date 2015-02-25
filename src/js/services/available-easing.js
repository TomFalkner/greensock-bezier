(function() {

    'use strict';

    angular.module('bezierConverter')
        .factory('availableEasing', [function(){

            return {
                all: function() {
                    return [
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
                        'Sine.easeOut'
                    ];                }
            };
        }]);
})();
