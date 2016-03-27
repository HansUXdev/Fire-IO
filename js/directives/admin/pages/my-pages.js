app.directive('fireioMyPages', function() {
    return {
        restrict: 'E',
        scope: { html: '@' },
        templateUrl: 'templates/directives/admin/pages/my-pages.html',
        controller: function($scope, PagesFactory, $firebaseArray, toaster) {
            $scope.delete = function($index) {
                PagesFactory.deletePage($scope.pages[$index].$id, function(err) {
                    if(err) return toaster.pop({
                        type: 'error',
                        title: 'Error',
                        body: err,
                        timeout: 4000
                    });

                    toaster.pop({
                        type: 'success',
                        title: 'Success',
                        body: 'Page has been deleted',
                        timeout: 3000
                    });
                });
            };

            var scrollRef = new Firebase.util.Scroll(new Firebase(config.fb + '/content/pages'), 'timestamp');
            $scope.pages = $firebaseArray(scrollRef);
            $scope.scroll = scrollRef.scroll;
        }
    }
});
