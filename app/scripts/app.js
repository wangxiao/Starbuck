AV.initialize('5uxaqtmf7byh23sxod374rubp4ik5uc4fnqsle12mzq7qyz5', 'hoodcj3tuq4m3fa6m1yil3qju2t1ulm5wa3ewc22hkr1qaoy');
// angular.bootstrap(document, ['StarbuckApp']);
angular.module('StarbuckApp', 
['ngMaterial', 'ngRoute'])
.config(['$routeProvider',
function ($routeProvider) {
$routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    })
    .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'loginCtrl'
    })
    .otherwise({
        redirectTo: '/login'
    });
}]);
