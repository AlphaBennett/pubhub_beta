(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('FilterButtonController', FilterButtonController);

    FilterButtonController.$inject = ['$scope', 'FilterService'];

    function FilterButtonController($scope, FilterService) {
        var vm = this;
        vm.begin = 2;
        vm.filterParams = FilterService.filterParams;

        if ($scope.key === 'days') {
            var today = new Date().getDay();
            switch (today) {
            case 0:
                today = 'Sunday';
                break;
            case 1:
                today = 'Monday';
                break;
            case 2:
                today = 'Tuesday';
                break;
            case 3:
                today = 'Wednesday';
                break;
            case 4:
                today = 'Thursday';
                break;
            case 5:
                today = 'Friday';
                break;
            case 6:
                today = 'Saturday';
                break;
            default:
                today = null;
                break;
            }
            if ($scope.filter === today) {
                vm.filterParams[$scope.key][$scope.filter] = true;
            } else {
                vm.filterParams[$scope.key][$scope.filter] = false;
            }
        }


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