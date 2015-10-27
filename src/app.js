(function () {

    'use strict';

    angular.module('dsm.app', ['dsm.controllers', 'dsm.directives', 'dsm.services', 'dsm.filters', 'ngRoute', 'ngRoute', 'ngMaterial', 'ngMdIcons', 'firebase', 'ngMap', 'ui.slider'])
        .config(router);

    function router($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/src/views/pageBody.html',
                resolve: {
                    Deals: ['FirebaseService', function (FirebaseService) {
                        return FirebaseService.getDeals.then(function (deals) {
                            FirebaseService.deals = deals;
                        })
                    }]
                }
            }).otherwise({
                redirectTo: '/'
            });
//                $locationProvider.html5Mode(true);
    }

})();