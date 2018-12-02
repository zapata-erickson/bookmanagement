/// <reference path="../app.js" />

(function () {

    app.factory("ToasterFactory", ['toast',
        function (toast) {

            var maxToast = 1;

            var duration = 10000;

            var factory = {};

            factory.getService = function () {

                var service = {
                    createSuccessToast: function (msg) {
                        var toaster = {
                            duration: duration,
                            message: msg,
                            maxToast: maxToast,
                            className: 'alert-success',
                            show: function () {
                                toast(this);
                            }
                        };
                        return toaster;
                    },
                    createErrorToast: function (msg) {
                        var toaster = {
                            duration: duration,
                            message: msg,
                            maxToast: maxToast,
                            className: 'alert-danger',
                            show: function () {
                                toast(this);
                            }
                        };

                        return toaster;
                    },
                    createInfoToast: function (msg) {
                        var toaster = {
                            duration: duration,
                            message: msg,
                            maxToast: maxToast,
                            className: 'alert-info',
                            show: function () {
                                toast(this);
                            }
                        };

                        return toaster;
                    }
                };

                return service;
            }

            return factory;
        }
    ]);
})();