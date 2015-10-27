(function () {

    'use strict';

    angular.module('dsm.directives')
        .directive('filterItem', filterItem);

    function filterItem() {
        return {
            restrict: 'E',
            scope: {
                key: '=',
                filter: '=',
            },
            controller: 'FilterItemController',
            controllerAs: 'filterItemCtrl',
            templateUrl: 'src/components/filter/partials/filterItem.html'
        };
    }
})();