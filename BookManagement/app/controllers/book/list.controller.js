/// <reference path="../../app.js" />

(function () {

    app.controller('ListBookController', ['ModalWindowFactory', 'ToasterFactory', 'BookServiceFactory',
        function BookController(ModalWindowFactory, ToasterFactory, BookServiceFactory) {

            var controller = this;

            this.toasterService = ToasterFactory.getService();

            this.modalWindowService = ModalWindowFactory.getService();

            this.bookService = BookServiceFactory.getService();

            this.bookModel = { id: null, title: null, author: null, checked: false };

            this.bookList = [];

            this.selectedBooks = [];

            this.orderByColumn = 'Id';

            this.loadingMessage = "Nothing to show yet..."

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

                    book.checked = true;
                }
                else {

                    controller.selectedBooks.splice(idx, 1);

                    book.checked = false;
                }
            };

            this.selectAllBooks = function () {

                if (controller.selectedBooks.length < controller.bookList.length) {

                    controller.bookList.forEach(function (book) {

                        if (controller.selectedBooks.indexOf(book) == -1) {

                            controller.selectedBooks.push(book);

                            book.checked = true;
                        };
                    });
                }
                else {
                    controller.bookList.forEach(function (book) {

                        var idx = controller.selectedBooks.indexOf(book);

                        controller.selectedBooks.splice(idx, 1);

                        book.checked = false;
                    });
                }
            };

            this.isBookSelected = function (book) {

                return book.checked;
            }

            this.hightlightIfSelected = function (book) {

                return book.checked;
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

                controller.loadingMessage = "Loading.. please wait!";

                controller.bookService
                    .getBookList()
                    .then(function (result) {

                        var books = result.data;

                        controller.bookList = [];

                        books.forEach(function (book) {

                            var book = { id: book.Id, title: book.Title, author: book.Author, checked: false };

                            controller.bookList.push(book);
                        });
                    })
                    .catch(function (error) {

                        controller.loadingMessage = "Something went wrong...";

                        var toast = controller.toasterService.createErrorToast(error);

                        toast.show();
                    });
            };

            this.showCreateBookWindow = function () {
                                
                var service = controller.modalWindowService;

                var createBookWindow = service.createWindow(controller, controller.bookModel, 'app/views/books/add.html', 'AddBookController', 'sm');

                createBookWindow.show();
            };

            this.saveNewBook = function (book) {

                controller.bookService
                    .addNewBook(book)
                    .then(function (result) {

                        var bookId = result.data;

                        controller.bookModel = { id: bookId, title: book.title, author: book.author, checked: false };

                        controller.bookList.push(controller.bookModel);

                        var toast = controller.toasterService.createSuccessToast('Book successfully added!');

                        toast.show();
                    })
                    .catch(function (error) {

                        var toast = controller.toasterService.createErrorToast(error);

                        toast.show();
                    })
                    .finally(function () {
                       // controller.getBooksList();
                    })
            }

            this.showEditBookWindow = function (book) {

                controller.bookModel = book;

                var service = controller.modalWindowService;

                var editBookWindow = service.createWindow(controller, book, 'app/views/books/edit.html', 'EditBookController', 'sm');

                editBookWindow.show();
            };

            this.saveUpdatedBook = function (book) {

                controller.bookService
                    .updateBook(book)
                    .then(function (result) {

                        var updatedBook = result.data;

                        controller.bookModel.id = book.id;

                        controller.bookModel.title = updatedBook.Title;

                        controller.bookModel.author = updatedBook.Author;                        

                        var toast = controller.toasterService.createSuccessToast('Book successfully updated!');

                        toast.show();
                    })
                    .catch(function (error) {

                        var toast = controller.toasterService.createFailToast(error);

                        toast.show();
                    })
                    .finally(function () {
                       // controller.getBooksList();
                    })
            }

            this.removeSelectedBooks = function () {
                if (controller.selectedBooks.length != 0) {

                    controller.selectedBooks.forEach(function (book) {

                        controller.removeBook(book);

                        controller.bookList.splice(controller.bookList.indexOf(book), 1);   
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
                controller.bookService
                    .removeBook(book)
                    .then(function (result) {
                                            
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            };

            this.getBooksList();
        }
    ]);
})();