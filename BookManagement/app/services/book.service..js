/// <reference path="../app.js" />
app.service('BookService', ['$http', function ($http) {
    var service = this;
    
    this.bookList = [
                { id: '1', name: 'Doomsday Conspiracy', author: 'Sydney Sheldon' },
                { id: '2', name: 'Undocumented DOS', author: 'Ray Duncan' },
                { id: '3', name: 'PC Upgrading/Repair', author: 'Unknown', },
                { id: '4', name: 'Bourne Ultimatum', author: 'Robert Ludlum' },
                { id: '5', name: 'Interview with the Vampire', author: 'Ann Rice' }];


    this.bookCount = this.bookList.length;

    this.getBookList = function () {
        return service.bookList;
    };

    this.addNewBook = function (book) {
        service.bookCount = service.bookCount + 1;
        book.id = service.bookCount ;
        service.bookList.push(book);
    };

    this.removeBook = function (book) {
        var bookIdx = service.bookList.indexOf(book);
        service.bookList.splice(bookIdx, 1);
    }

    this.updateBook = function (book, updatedBook) {
        var bookIdx = service.bookList.indexOf(book);
        service.bookList[bookIdx] = updatedBook;
    }
}]);