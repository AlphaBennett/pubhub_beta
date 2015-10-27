(function () {
    'use strict';

    angular.module('dsm.controllers')
        .controller('DialogController', DialogController);

    DialogController.$inject = ['$mdDialog', '$scope', '$timeout', 'UtilityService'];

    function DialogController($mdDialog, $scope, $timeout, UtilityService) {
        var vm = this;

        $scope.closeBusinessDetailsPopup = function () {
            $mdDialog.hide();
        };

        $scope.dayBlocks = [
            {
                name: 'Monday',
                state: true,
                short: 'Mon'
            },
            {
                name: 'Tuesday',
                state: true,
                short: 'Tues'
            },
            {
                name: 'Wednesday',
                state: true,
                short: 'Weds'
            },
            {
                name: 'Thursday',
                state: true,
                short: 'Thurs'
            },
            {
                name: 'Friday',
                state: true,
                short: 'Fri'
            },
            {
                name: 'Saturday',
                state: true,
                short: 'Sat'
            },
            {
                name: 'Sunday',
                state: true,
                short: 'Sun'
            },
        ];
        
        $scope.showSavedDisplay = false;
        $scope.showSocialMediaDisplay = false;

        $scope.showSavedMessage = function ($index, item) {
            $scope.showSavedDisplay = !$scope.showSavedDisplay;
            $scope.savedDisplayIndex = $index;
            item.saved = !item.saved;

            if ($scope.showSavedDisplay) {
                $timeout(function () {
                    $scope.showSavedDisplay = false;
                }, 4250);

            }
        };
        
        $scope.convertTime = function(time){
            return UtilityService.convertTime(time);
        };
    }
})();