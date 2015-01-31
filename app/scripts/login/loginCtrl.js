'use strict';
angular.module('StarbuckApp')
.controller('loginCtrl', 
['$scope', 'storageSer', 'loginSer', '$location',
function ($scope, storageSer, loginSer, $location) {
    $scope.userData = {
        name: '',
        phone: ''
    };
    $scope.submit = function() {
        if ($scope.userData.phone) {
            storageSer.item('userData', JSON.stringify($scope.userData));
            $location.path('/work');
        }
    };
}]);
