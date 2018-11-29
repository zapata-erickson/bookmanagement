/// <reference path="../app.js" />
app.factory("ToasterFactory", ['toast', function (toast) {
    var maxToast = 1;
    var duration = 10000;
    var factory = {};
    factory.createService = function () {      
        
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
}]);




//app.service('NotificationService', ['toast', function (toast) {
//    var service = this;

//    this.maxToast = 1;
//    this.duration = 10000;
   
//    this.notifySuccess = function (msg) {
//        toast({
//            duration: service.duration,
//            message: msg,
//            maxToast: service.maxToast,
//            className: 'alert-success'            
//        });
//    };

//    this.notifyInfo = function (msg) {
//        toast({
//            duration: service.duration,
//            message: msg,
//            maxToast: service.maxToast,
//            className: 'alert-info'
//        });
//    };

//    this.notifyError = function (msg) {
//        toast({
//            duration: service.duration,
//            message: msg,
//            maxToast: service.maxToast,
//            className: 'alert-danger'
//        });
//    }


//}]);