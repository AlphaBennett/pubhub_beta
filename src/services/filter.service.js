(function () {

    'use strict';

    angular.module('dsm.services')
        .factory('FilterService', FilterService);

FilterService.$inject = ['UtilityService'];
    
    function FilterService(UtilityService) {
        var vm = this;

        vm.filters = {
            types: {
                displayType: 'button',
                values: [
                    {
                        type: 'Food',
                        icon: 'local_restaurant'
                    },
                    {
                        type: 'Drink',
                        icon: 'local_bar'
                    },
                    {
                        type: 'Entertainment',
                        icon: 'local_play'
                    }
                ],
            },
            prices: {
                displayType: 'button',
                values: ['$', '$$', '$$$', '$$$$'],
            },
            days: {
                displayType: 'button',
                values: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                length: 1
            },
            times: {
                displayType: 'slider',
                values: getTimes()
            },
            zlocations: {
                displayType: 'subCheckbox',
                values: {
                    'Des Moines': ['East Village', 'Downtown', 'Western Gateway', 'Ingersoll', 'Drake', 'Beaverdale'],
                    'West Des Moines': ['West Glen', 'Jordan Creek'],
                    'Altoona': ['West Side'],
                    'Ankeny': ['Raccoon River', 'Valley West']
                }
            }
        };

        vm.filterParams = getFilterParams();

        //this will be a service call later based on what city you're in we will provide all the filters needed
        //this will allow us to dynamically populate a list of filter checkboxes, radios, whatever
        //using ng-repeat
        var service = {
            filterParams: vm.filterParams,
            filters: vm.filters
        };

        return service;

        function getFilterParams() {
            var params = {};
            for (var filter in vm.filters) {
                params[filter] = [];
            }
            return params;
        }

        function getTimes() {
            var timesObject = {};
            for (var i = 1; i < 25; i++) {
                timesObject[i] = UtilityService.convertTime(i);
            }
            return timesObject;
        }
    }
})();