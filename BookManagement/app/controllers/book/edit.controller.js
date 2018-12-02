/// <reference path="../../app.js" />

(function () {

    app.controller('EditBookController', ['$uibModalInstance', 'parentController', 'data',
        function ($uibModalInstance, parentController, data) {

            var controller = this;

            this.bookModel = { id: data.id, title: data.title, author: data.author };

            this.saveBook = function () {

                parentController.saveUpdatedBook(controller.bookModel);

                $uibModalInstance.close(controller.bookModel);
            };

            this.close = function () {

                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);
})();