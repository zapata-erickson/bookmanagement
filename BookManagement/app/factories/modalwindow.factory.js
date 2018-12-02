/// <reference path="../app.js" />
(function () {
    app.factory('ModalWindowFactory', ['$uibModal',
        function ($uibModal) {

            var factory = {};

            factory.getService = function () {

                var service = {
                    createWindow: function (parentController, data, templateUrl, controller, sz) {

                        var uibModalInstance = {};

                        var modalWindow = {
                            animation: true,
                            templateUrl: templateUrl,
                            controller: controller,
                            controllerAs: 'controller',
                            size: sz,
                            resolve: {
                                parentController: function () {

                                    return parentController;
                                },
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
        }
    ]);
})();