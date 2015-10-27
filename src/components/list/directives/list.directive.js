(function () {

    'use strict';

    angular.module('dsm.directives')
        .directive('list', list);
    
    function list() {
        return {
            restrict: 'E',
            controller: 'ListController',
            controllerAs: 'listCtrl',
            templateUrl: 'src/components/list/partials/list.html'
        };
    }

})();