(function () {

    'use strict';

    angular.module('dsm.filters')
        .filter('MainFilter', filter);


    function filter() {
        return function (items, filterParams) {
            var types = filterParams.atypes;
            var prices = filterParams.prices;
            var locations = filterParams.locations;
            var days = filterParams.days;
            var times = filterParams.times;

            var displayItem;
            var visible = [];
            angular.forEach(items, function (item) {
                displayItem = true;
                for (var type in types) {
                    if (types[type]) {
                        if (item[type]) {
                            displayItem = true;
                            break;
                        } else {
                            displayItem = false;
                        }
                    }
                }
                if (displayItem) {
                    for (var price in prices) {
                        if (prices[price]) {
                            if (item.price === price) {
                                displayItem = true;
                                break;
                            } else {
                                displayItem = false;
                            }
                        }
                    }
                }
                if (displayItem) {
                    var neighborhoodFound = false;
                    var cityFound = false;
                    for (var location in locations) {
                        if (!neighborhoodFound && !cityFound) {
                            if (locations[location].active) {
                                if (item.city === location) {
                                    displayItem = true;
                                    cityFound = true;
                                } else {
                                    displayItem = false;
                                }
                                if (cityFound) {
                                    for (var neighborhood in locations[location]) {
                                        if (neighborhood != 'active' && locations[location][neighborhood]) {
                                            if (item.neighborhood === neighborhood) {
                                                neighborhoodFound = true;
                                                displayItem = true;
                                                break;
                                            } else {
                                                displayItem = false;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (displayItem) {
                    var timeFound = false;
                    for (var day in days) {
                        if (days[day] && !timeFound) {
                            if (item.times[day]) {
                                for (var nextTime in item.times[day]) {
                                    var time = item.times[day][nextTime];
                                    var minTime = time.start;
                                    var maxTime = time.end;
                                    var minFilter = times[0];
                                    var maxFilter = times[1];
                                    if ((minTime >= minFilter && minTime <= maxFilter) || (maxTime >= minFilter && maxTime <= maxFilter) || (minFilter >= minTime && minFilter <= maxTime) || (maxFilter >= minTime && maxFilter <= maxTime)) {
                                        displayItem = true;
                                        timeFound = true;
                                        break;
                                    } else {
                                        displayItem = false;
                                    }
                                }
                            } else {
                                displayItem = false;
                            }
                        }
                    }
                }

                if (displayItem === true) {
                    visible.push(item);
                }
            });
            return visible;
        };
    }
})();