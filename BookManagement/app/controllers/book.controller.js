/// <reference path="../app.js" />

app.controller("BookController", ['$scope','$routeParams', '$location','notificationService','bookService', function BookController($scope, $routeParams,$location,notificationService,bookService) {
    var controller = this;  
    
    this.bookModel = { id: null, name: null, author: null };

    this.bookList = [];

    this.orderByColumn = 'id';

    this.getBooksList = function () {
        controller.bookList = bookService.getBookList();
    };

    this.updateBookList = function () {
        if ($routeParams.idx !== undefined)
        {
            var idx = $routeParams.idx;
            var book = controller.bookList[idx];
            book.name = controller.bookModel.name;
            book.author = controller.bookModel.author;
            bookService
            .updateBook(book, controller.bookModel);
            $location.path('/books');
            notificationService.notifySuccess("Book successfully updated!");
        }
        else
        {
            bookService
            .addNewBook(controller.bookModel);
            $location.path('/books');
            notificationService.notifySuccess("Book successfully added!");
        }        
    };

    this.removeBook = function (book) {
        bookService
        .removeBook(book);
        notificationService.notifySuccess("Book successfully removed!");
    };

    this.editBook = function () {
        controller.bookModel = book;
    };

    this.cancel = function () {
        $location.path('/books');
    };
    
    this.getBooksList();

    if($routeParams.idx!==undefined)
    {
        var idx = $routeParams.idx;
        this.bookModel = controller.bookList[idx];
    }

}]);



