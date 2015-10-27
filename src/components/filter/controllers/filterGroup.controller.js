(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('FilterGroupController', FilterGroupController);

    FilterGroupController.$inject = ['$scope', 'FilterService'];

    function FilterGroupController($scope, FilterService) {
        var vm = this;
        vm.subFilters = false;
        if ($scope.filters.length === undefined) {
            vm.subFilters = true;
        }
    }

})();