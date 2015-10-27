(function(){
    'use strict';
    
    angular.module('dsm.services')
        .factory('UtilityService', UtilityService);
    
    function UtilityService(){
        
        var service = {convertTime: convertTime};
        
        return service;
        
        function convertTime(time) {
            var timeString = '';
                if (time % 12 === 0) {
                    timeString = '12';
                } else {
                    timeString = '' + time % 12;
                }
                if (time < 12) {
                    timeString += 'AM';
                } else {
                    timeString += 'PM';
                }
            return timeString;
        }
    }
})();