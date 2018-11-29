/// <reference path="../app.js" />
app.factory('ModalWindowFactory', ['$uibModal', function ($uibModal) {
    var factory = {};

    factory.createService = function () {
        var service = {
            createWindow: function (data, templateUrl, controller,sz) {
                var uibModalInstance = {};
                var modalWindow = {
                    animation: true,
                    templateUrl: templateUrl,
                    controller: controller,
                    controllerAs: 'controller',
                    size: sz,
                    resolve: {
                        data: function () {
                            return data;
                        }
                    },
                    show: function () {
                        uibModalInstance = $uibModal.open(this);
                        uibModalInstance.result.then(function (data) {
                            return data;
                        });
                    }
                };
                return modalWindow;
            }
        };
        return service;
    };
    return factory;
}]);