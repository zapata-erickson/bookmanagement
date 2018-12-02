/// <reference path="../../app.js" />

(function () {

    app.controller('AddBookController', ['$uibModalInstance', 'parentController',
        function ($uibModalInstance, parentController) {

            var controller = this;

            this.bookModel = { id: null, title: null, author: null, checked: false };

            this.saveBook = function () {

                parentController.saveNewBook(controller.bookModel);

                $uibModalInstance.close(controller.bookModel);

            };

            this.close = function () {

                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);;
})();