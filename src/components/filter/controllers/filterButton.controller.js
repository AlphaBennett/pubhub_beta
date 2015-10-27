(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('FilterButtonController', FilterButtonController);

    FilterButtonController.$inject = ['$scope', 'FilterService'];

    function FilterButtonController($scope, FilterService) {
        var vm = this;
        vm.begin = 2;
        vm.filterParams = FilterService.filterParams;
        vm.filterParams[$scope.key][$scope.filter] = false;
        vm.buttonClick = function () {
            if ($scope.filter.type) {
                vm.filterParams[$scope.key][$scope.filter.type] = !vm.filterParams[$scope.key][$scope.filter.type];
            } else {
                vm.filterParams[$scope.key][$scope.filter] = !vm.filterParams[$scope.key][$scope.filter];
            }
        };
        if ($scope.length === undefined || $scope.length === null) {
            $scope.length = 50;
        }
    }
})();