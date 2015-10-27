(function () {
    //everything should be wrapped in these immediately invoked function expressions
    //this removes variables from global scope and keeps everything isolated
    //also use strict cause some nerd said so.
    'use strict';

    angular.module('dsm.controllers')
        .controller('FilterController', FilterController);

    FilterController.$inject = ['FilterService'];

    function FilterController(FilterService) {
        //avoid $scope or scope, use vm as the default name that contains 'this'
        //this isolates this controllers scope and keeps everything neat
        //to reference this properties, e.g. vm.filters or vm.updateFilters()
        //they can be referred to in the html as mainFilter.filters , mainFilter.updateFilters()
        //since mainFilter is the alias I gave it in the directive w/ 'controllerAs'
        var vm = this;

        //this could be updated dynamically based on what categories we want to filter by
        vm.filters = FilterService.filters;
    }
})();