(function () {
    //everything should be wrapped in these immediately invoked function expressions
    //this removes variables from global scope and keeps everything isolated
    //also use strict cause some nerd said so.
    'use strict';

    angular.module('dsm.controllers')
        .controller('FilterController', FilterController);

    FilterController.$inject = ['FilterService', '$scope'];

    function FilterController(FilterService, $scope) {
        var vm = this;
        vm.filters = FilterService.filters[$scope.component];
    }
})();