(function(){
    
    'use strict';
    
    angular.module('dsm.directives')
        .directive('header', header);
                   
    function header(){
        return{
            restrict: 'E',
            templateUrl:'src/components/header/partials/header.html'
        }
    }
    
})();