(function () {
    'use strict';

    angular.module('dsm.directives')
        .directive('dialog', dialog);

    function dialog() {
        return {
            restrict: 'E',
            controller: 'DialogController',
            controllerAs: 'dialogCtrl',
            templateUrl: 'src/components/list/partials/dialog.html'
        };
    }
})();