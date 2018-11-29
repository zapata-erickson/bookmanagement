var app = angular.module('BookManagement', ['ngRoute','ngAnimate','angularjsToast']);

app.controller("BookManagementController", ['$scope', function ($scope) {
    $scope.appInfo = {
        name: "Book Management",
        version: "v1.0",
        author: "Erickson Zapata"
    };
}]);


app.config(function ($routeProvider, $locationProvider) {
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
        controller: 'BookController',
        controllerAs: 'controller'
    })
    .when('/books/add',
    {
        templateUrl: 'app/views/books/add.html',
        controller: 'BookController',
        controllerAs: 'controller'
    })
    .when('/books/edit/:idx',
    {
        templateUrl: 'app/views/books/edit.html',
        controller: 'BookController',
        controllerAs: 'controller'
    })
    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true,
        rewriteLinks: true
    }).hashPrefix('!');
});