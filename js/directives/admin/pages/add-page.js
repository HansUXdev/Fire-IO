app.directive('fireioAddPage', function() {
    return {
        restrict: 'E',
        scope: { html: '@' },
        templateUrl: 'templates/directives/admin/pages/add-page.html',
        controller: function($scope, PagesFactory, toaster) {
            $scope.create = function() {
                if($scope.page.location == undefined || $scope.page.content == undefined) return toaster.pop({
                    type: 'error',
                    title: 'Error',
                    body: 'Please fill out all fields',
                    timeout: 4000
                });

                if($scope.page.location.includes('/')) return toaster.pop({
                    type: 'error',
                    title: 'Error',
                    body: 'The location cannot have slashed',
                    timeout: 4000
                });

                PagesFactory.createPage({
                    location: $scope.page.location,
                    content: $scope.page.content,
                    timestamp: -Date.now()
                }, function(err) {
                    if(err) return toaster.pop({
                        type: 'error',
                        title: 'Error',
                        body: 'Please fill out all fields',
                        timeout: 4000
                    });

                    toaster.pop({
                        type: 'success',
                        title: 'Success',
                        body: 'Page has been created',
                        timeout: 4000
                    });
                    $scope.page = {};
                });
            };
            $scope.page = {};
        }
    }
});
