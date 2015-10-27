(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('FilterItemController', FilterItemController);

    FilterItemController.$inject = ['$scope', 'FilterService'];

    function FilterItemController($scope, FilterService) {
        var vm = this;
        vm.filterParams = FilterService.filterParams;
    }

})();