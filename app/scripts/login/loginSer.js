'use strict';
angular.module('StarbuckApp')
.factory('loginSer', 
['$window', '$q',
function($window, $q) {
    return {
        getWorkTime: function() {
            var workTime = AV.Object.extend('WorkTime');
            var query = new AV.Query(workTime);
            var defer = $q.defer();
            query.find({
                success: function(results) {
                    var list = [];
                    for (var i = 0, l = results.length; i < l; i ++) {
                        list.push(results[i].attributes);
                    }
                    defer.resolve(list);
                },
                error: function(error) {
                    defer.reject();
                }
            });
            return defer.promise;
        }
    };
    // 结束 
}]);
