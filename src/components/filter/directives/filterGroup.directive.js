(function () {

    'use strict';

    angular.module('dsm.directives')
        .directive('filterGroup', filterGroup);

    function filterGroup() {
        return {
            restrict: 'E',
            scope: {
                key: '=',
                filters: '=',
            },
            controller: 'FilterGroupController',
            controllerAs: 'filterGroupCtrl',
            templateUrl: 'src/components/filter/partials/filterGroup.html'
        };
    }
})();