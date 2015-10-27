(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('ListItemController', ListItemController);

    ListItemController.$inject = ['$mdDialog', '$scope', 'UtilityService'];

    function ListItemController($mdDialog, $scope, UtilityService) {
        var vm = this;
        var date = new Date();
        switch(6){
                case 0:
                    vm.today = 'Sunday';
                    break;
                case 1:
                    vm.today = 'Monday';
                    break;
                case 2:
                    vm.today = 'Tuesday';
                    break;
                case 3:
                    vm.today = 'Wednesday';
                    break;
                case 4:
                    vm.today = 'Thursday';
                    break;
                case 5:
                    vm.today = 'Friday';
                    break;
                case 6:
                    vm.today = 'Saturday';
                    break;
                default:
                    break;
        }
        
        vm.showDialog = function (ev, item) {
            $scope.selectedItem = item;

            $mdDialog.show({
                controller: 'DialogController',
                templateUrl: 'src/components/list/partials/dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true,
            });
        };
        
        vm.convertTime = function(time){
            return UtilityService.convertTime(time);
        };
    }
})();