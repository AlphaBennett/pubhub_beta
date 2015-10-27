(function () {
    'use strict';

    angular.module('dsm.directives')
        .directive('filterButton', filterButton);

    function filterButton() {
        return {
            restrict: 'E',
            scope: {
                key: '=',
                filter: '=',
                length: '='
            },
            controller: 'FilterButtonController',
            controllerAs: 'filterButtonCtrl',
            templateUrl: 'src/components/filter/partials/filterButton.html'
        };
    }
})();