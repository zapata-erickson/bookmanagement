var app = angular.module('BookManagement', ['ngRoute', 'ngAnimate', 'angularjsToast', 'ui.bootstrap']);

(function () {

    app.controller("BookManagementController", ['$scope',
        function ($scope) {
            $scope.appInfo = {
                name: "Book Management",
                version: "v1.0",
                author: "Erickson Zapata"
            };
        }
    ]);
    
    app.config(
        function ($routeProvider, $locationProvider) {

            $routeProvider
                .when('/',
                    {
                        redirectTo: function () {
                            return '/home';
                        }
                    })
                .when('/home',
                    {
                        templateUrl: 'app/views/home.html',
                        controller: 'HomeController',
                        controllerAs: 'controller'
                    })
                .when('/books',
                    {
                        templateUrl: 'app/views/books/list.html',
                        controller: 'ListBookController',
                        controllerAs: 'controller'
                    })
                .otherwise({ redirectTo: '/' });

            $locationProvider.html5Mode({
                enabled: false,
                requireBase: true,
                rewriteLinks: true
            }).hashPrefix('!');
        }
    );
})();