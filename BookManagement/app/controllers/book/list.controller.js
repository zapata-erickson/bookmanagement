/// <reference path="../../app.js" />

app.controller('BookListController', ['$scope', '$routeParams', '$location', 'ModalWindowFactory', 'ToasterFactory', 'BookService', function BookController($scope, $routeParams, $location, ModalWindowFactory, ToasterFactory, BookService) {
    var controller = this;

    this.toasterService = ToasterFactory.createService();

    this.modalWindowService = ModalWindowFactory.createService();

    this.bookModel = { id: null, name: null, author: null };

    this.bookList = [];

    this.selectedBooks = [];

    this.orderByColumn = 'id';

    this.isDeletedEnabled = function () {
        if (controller.selectedBooks.length != 0) {
            return true;
        }
        else {
            return false;
        }
    }

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

    this.hightlightIfSelected = function (book) {
        return controller.selectedBooks[controller.selectedBooks.indexOf(book)] === book;
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
        controller.bookList = BookService.getBookList();
    };

    this.showCreateBookWindow = function () {
        var service = controller.modalWindowService;
        var createBookWindow = service.createWindow($scope, 'app/views/books/add.html','AddBookController','sm');
        createBookWindow.show();
    };

    this.showEditBookWindow = function (book) {
        var service = controller.modalWindowService;
        var editBookWindow = service.createWindow(book, 'app/views/books/edit.html', 'EditBookController', 'sm');
        editBookWindow.show();
    };
         
    this.removeSelectedBooks = function () {
        if (controller.selectedBooks.length != 0) {

            controller.selectedBooks.forEach(function (book) {
                controller.removeBook(book);

            });

            controller.selectedBooks = [];
           
            var toast = controller.toasterService.createSuccessToast('Book(s) successfully removed!');

            toast.show(); 
        }
        else {
            
            var toast = controller.toasterService.createInfoToast('No book(s) has been selected!');

            toast.show(); 
        }
    }

    this.removeBook = function (book) {
        BookService.removeBook(book);        
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



