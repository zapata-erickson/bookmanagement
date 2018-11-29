/// <reference path="../app.js" />
app.service('notificationService', ['toast', function (toast) {
    var service = this;

    this.maxToast = 1;
    this.duration = 10000;
   
    this.notifySuccess = function (msg) {
        toast({
            duration: service.duration,
            message: msg,
            maxToast: service.maxToast,
            className: 'alert-success'            
        });
    };

    this.notifyInfo = function (msg) {
        toast({
            duration: service.duration,
            message: msg,
            maxToast: service.maxToast,
            className: 'alert-info'
        });
    };

    this.notifyError = function (msg) {
        toast({
            duration: service.duration,
            message: msg,
            maxToast: service.maxToast,
            className: 'alert-danger'
        });
    }


}]);