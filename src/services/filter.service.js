(function () {

    'use strict';

    angular.module('dsm.services')
        .factory('FilterService', FilterService);

    FilterService.$inject = ['UtilityService'];

    function FilterService(UtilityService) {
        var vm = this;

        vm.filters = {
            header: {
                days: {
                    displayType: 'button',
                    values: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    length: 1
                },
                times: {
                    displayType: 'slider',
                    values: getTimes()
                }
            },
            body: {
                atypes: {
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
                locations: {
                    displayType: 'subCheckbox',
                    values: {
                        'Des Moines': ['East Village', 'Downtown', 'Western Gateway', 'Ingersoll', 'Drake', 'Beaverdale'],
                        'West Des Moines': ['West Glen', 'Jordan Creek'],
                        'Altoona': ['West Side'],
                        'Ankeny': ['Raccoon River', 'Valley West']
                    }
                }
            }
        };

        vm.filterParams = getFilterParams();

        var service = {
            filterParams: vm.filterParams,
            filters: vm.filters
        };

        return service;

        function getFilterParams() {
            var params = {};
            for (var component in vm.filters) {
                for (var filter in vm.filters[component]) {
                    params[filter] = [];

                }
            }
            return params;

        }

        function getTimes() {
            var timesObject = {};
            for (var i = 0; i < 24; i++) {
                timesObject[i] = UtilityService.convertTime(i);
            }
            return timesObject;
        }
    }
})();