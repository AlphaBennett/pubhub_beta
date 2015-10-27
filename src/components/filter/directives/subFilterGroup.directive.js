(function () {
    'use strict';

    angular.module('dsm.directives')
        .directive('subFilterGroup', subFilterGroup);

    function subFilterGroup() {
        return {
            restrict: 'E',
            scope: {
                key: '=',
                filters: '=',
                header: '='
            },
            controller: 'SubFilterGroupController',
            controllerAs: 'subFilterGroupCtrl',
            templateUrl: 'src/components/filter/partials/subFilterGroup.html'
        };
    }

})();