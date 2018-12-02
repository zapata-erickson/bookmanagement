/// <reference path="../app.js" />

(function () {

    app.factory('BookServiceFactory', ['$http', '$location',
        function ($http, $location) {

            var factory = {};

            factory.getService = function () {

                var baseUrl = $location.protocol() + ":" + "//" + location.host;

                var service = {
                    getBookList: function () {
                        return $http.get(baseUrl + '/api/books');
                    },
                    addNewBook: function (book) {
                        return $http.post(baseUrl + '/api/books/create', book);
                    },
                    removeBook: function (book) {
                        return $http.post(baseUrl + '/api/books/delete', book);
                    },
                    updateBook: function (book) {
                        return $http.post(baseUrl + '/api/books/update', book);
                    }
                };

                return service;
            };

            return factory;
        }
    ]);
})();