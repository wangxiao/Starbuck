/**
 * @author wangxiao
 * 
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 */

'use strict';
angular.module('StarbuckApp')
.controller('workCtrl',
['$scope', 'loginSer', 'storageSer', '$location', '$timeout',
function ($scope, loginSer, storageSer, $location, $timeout) {
    $scope.userData = JSON.parse(storageSer.item('userData'));
    if (!$scope.userData) {
        goToLogin();
    }
    $scope.showLoading = true;
    $scope.workList = [];
    var dataList = [];
    loginSer.getWorkTime().then(function(data) {
        $scope.showLoading = false;
        dataList = data;
        $scope.workList = search('phone', $scope.userData.phone);
        if (!$scope.userData.name && $scope.workList.length) {
            $scope.userData.name = $scope.workList[0].name;
        }
    });
    function search(itemName, value) {
        var list = [];
        for (var i = 0, l = dataList.length; i < l; i ++) {
            if (dataList[i][itemName] === value) {
                list.push(dataList[i]);
            }
        }
        return list;
    }
    $scope.logout = function() {
        storageSer.remove('userData');
        goToLogin();
    };
    function goToLogin() {
        $scope.showLoading = true;
        $timeout(function() {
            $location.path('/login');
        }, 3000);
    }
}]);
