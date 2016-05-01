'use strict';

app.controller('contactCtrl', function($scope, $http) {

    $scope.email = {
        status: false,
        success: false
    };

    $scope.patterns = {
        email: '[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})',
        phone: '\\d*'
    };

    this.sendEmail = function(isValid) {

        if (isValid) {
            var data = ({
                name: this.name,
                from: this.from,
                phone: this.phone,
                subject: this.subject,
                message: this.message
            });

            $scope.email.status = 'Sending your message...';

            $http.post('http://brettfrable.com:3000/send', data).
            success(function () {
                $scope.email.status = 'Message Sent!';
                $scope.email.success = true;
            }).
            error(function () {
                console.log('error');
            });
        }

    };

});
