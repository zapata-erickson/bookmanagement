/// <reference path="../../app.js" />
app.controller('AddBookController', ['$uibModalInstance', 'ToasterFactory', 'BookService',
    function ($uibModalInstance, ToasterFactory,BookService) {
        var controller = this;

        this.toasterService = ToasterFactory.createService();

        this.bookModel = { id: null, name: null, author: null };

        this.saveBook = function () {
            BookService
                .addNewBook(controller.bookModel);

            var toast = controller.toasterService.createSuccessToast('Book successfully added!');

            toast.show();

            $uibModalInstance.close(controller.bookModel);
        };

        this.close = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);;