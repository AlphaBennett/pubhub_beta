(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('SubFilterGroupController', SubFilterGroupController);

    SubFilterGroupController.$inject = ['$scope', 'FilterService'];

    function SubFilterGroupController($scope, FilterService) {
        var vm = this;
        vm.filterParams = FilterService.filterParams;
        vm.filters = FilterService.filters;
        vm.filterParams[$scope.key][$scope.header] = {
            active: false
        };

        vm.primaryButtonClick = function () {
            if (vm.filterParams[$scope.key][$scope.header].active) {
                angular.forEach(vm.filters[$scope.component][$scope.key].values[$scope.header], function (subFilter, key) {
                    vm.filterParams[$scope.key][$scope.header][subFilter] = false;
                });
            }
            vm.filterParams[$scope.key][$scope.header].active = !vm.filterParams[$scope.key][$scope.header].active;

        };

        vm.subButtonClick = function (filter) {
            vm.filterParams[$scope.key][$scope.header][filter] = !vm.filterParams[$scope.key][$scope.header][filter];
        };
    }

})();