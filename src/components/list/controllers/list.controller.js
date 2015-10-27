(function () {

    'use strict';

    angular.module('dsm.controllers')
        .controller('ListController', ListController);

    ListController.$inject = ['FilterService', '$mdDialog', '$scope', 'FirebaseService'];

    function ListController(FilterService, $mdDialog, $scope, FirebaseService) {

        var vm = this;
        vm.filterParams = FilterService.filterParams;
        vm.results = FirebaseService.deals;

        if (vm.results !== null) {
            $scope.showContent = true;
        }
    }

})();