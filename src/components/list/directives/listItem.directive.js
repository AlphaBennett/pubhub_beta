(function () {
    'use strict';

    angular.module('dsm.directives')
        .directive('listItem', listItem);

    function listItem() {
        return {
            restrict: 'E',
            controller: 'ListItemController',
            controllerAs: 'listItemCtrl',
            templateUrl: 'src/components/list/partials/listItem.html'
        }
    }
})();