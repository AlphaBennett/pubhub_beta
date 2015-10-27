(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('FilterSliderController', FilterSliderController);

    FilterSliderController.$inject = ['$scope', 'FilterService', 'UtilityService'];

    function FilterSliderController($scope, FilterService, UtilityService) {
        //http://codepen.io/caseymhunt/pen/kertA/ look into using this slider??
        var vm = this;
        vm.filters = FilterService.filters;
        vm.filterParams = FilterService.filterParams;
        vm.filterParams[$scope.key] = defaultTime();    
        
        function defaultTime() {
            var time = new Date().getHours();
            return [time, time+3];

        }
         vm.filterChanged = function(event){
            $('[ng-change]').each(function(){
                $(this).find('span').each(function(count){
                   $(this).html(UtilityService.convertTime(vm.filterParams[$scope.key][count]));
                });
            });
        };
        
        setTimeout(vm.filterChanged, 50);
    }
})();