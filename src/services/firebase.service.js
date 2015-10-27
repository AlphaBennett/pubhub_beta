(function () {

    'use strict';

    angular.module('dsm.services')
        .factory('FirebaseService', FirebaseService);

    FirebaseService.$inject = ['$firebaseObject', '$firebaseArray', '$firebaseAuth', '$q'];

    function FirebaseService($firebaseObject, $firebaseArray, $firebaseAuth, $q) {

        var vm = this;
        var ref = new Firebase("https://shining-heat-5810.firebaseio.com/");

        vm.getDeals = function () {

            var deferred = $q.defer();
            var results = [];

            ref.once("value", function (snapshot) {
                var resultsObj = snapshot.val();

                for (var result in resultsObj) {
                    results.push(resultsObj[result]);
                }

                deferred.resolve(results);

            }, function (errorObject) {
                console.log('Error in fbService function (FirebaseService): ' + errorObject);
            });

            return deferred.promise;
        };

        var service = {
            getDeals: vm.getDeals(),
        };

        return service;

    }

})();