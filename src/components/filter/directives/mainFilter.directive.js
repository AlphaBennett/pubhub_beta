(function () {

    'use strict';

    angular.module('dsm.directives')
        .directive('mainFilter', mainFilter);

    function mainFilter() {
        return {
            restrict: 'E',
            controller: 'FilterController',
            controllerAs: 'filterCtrl',
            templateUrl: 'src/components/filter/partials/mainFilter.html',
            scope: {
                component: '='
            }
        };
    }

})();