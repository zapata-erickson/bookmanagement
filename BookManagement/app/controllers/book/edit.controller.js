/// <reference path="../../app.js" />
app.controller('EditBookController', ['$uibModalInstance','ToasterFactory', 'BookService','data',
    function ($uibModalInstance, ToasterFactory, BookService,data) {
        var controller = this;

        this.toasterService = ToasterFactory.createService();

        this.bookModel = { id: data.id, name: data.name, author: data.author };

        this.saveBook = function () {          
            
            BookService
                .updateBook(data, controller.bookModel);            

            var toast = controller.toasterService.createSuccessToast('Book successfully updated!');

            toast.show();           

            $uibModalInstance.close(controller.bookModel);
        };

        this.close = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);;