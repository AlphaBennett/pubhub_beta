(function () {

    'use strict';

    angular.module('dsm.directives')
        .directive('filterSlider', filterSlider);

    function filterSlider() {
        return {
            restrict: 'E',
            scope: {
                key: '=',
                filters: '=',
            },
            controller: 'FilterSliderController',
            controllerAs: 'filterSliderCtrl',
            templateUrl: 'src/components/filter/partials/filterSlider.html',
        };
    }
})();