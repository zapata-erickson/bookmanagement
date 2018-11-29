/// <reference path="../app.js" />

app.controller('BookController', ['$scope', '$routeParams', '$location', 'notificationService', 'bookService', function BookController($scope, $routeParams, $location, notificationService, bookService) {
    var controller = this;

    this.bookModel = { id: null, name: null, author: null };

    this.bookList = [];

    this.selectedBooks = [];

    this.orderByColumn = 'id';

    this.selectBook = function (book) {
        var idx = controller.selectedBooks.indexOf(book);
        if (idx == -1) {
            controller.selectedBooks.push(book);            
        }
        else {
            controller.selectedBooks.splice(idx, 1);            
        }
    };

    this.selectAllBooks = function () {
        if (controller.selectedBooks.length < controller.bookList.length) {
            controller.bookList.forEach(function (book) {
                if (controller.selectedBooks.indexOf(book) == -1) {
                    controller.selectedBooks.push(book);
                };                    
            });
        }
        else {
            controller.bookList.forEach(function (book) {
                var idx = controller.selectedBooks.indexOf(book);
                controller.selectedBooks.splice(idx, 1);
            });
        }
    };
    
    this.isBookSelected = function (book) {
        if (controller.selectedBooks.indexOf(book) != -1) {
            return true;
        }
        else {
            return false;
        }
    }

    this.areAllBooksSelected = function () {
        if (controller.selectedBooks.length == controller.bookList.length) {
            return true;
        }
        else {
            return false;
        }
    }

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
            notificationService.notifySuccess('Book successfully updated!');
        }
        else
        {
            bookService
            .addNewBook(controller.bookModel);
            $location.path('/books');
            notificationService.notifySuccess('Book successfully added!');
        }        
    };

    this.removeSelectedBooks = function () {
        if (controller.selectedBooks.length != 0) {
            controller.selectedBooks.forEach(function (book) {
                controller.removeBook(book);
            });
            controller.selectedBooks = [];
            notificationService.notifySuccess('Book(s) successfully removed!');
        }
        else {
            notificationService.notifyError('No book(s) has been selected!');
        }
    }

    this.removeBook = function (book) {
        bookService.removeBook(book);        
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



