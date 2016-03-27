app.directive('fireio404', function() {
    return {
        restrict: 'E',
        scope: { html: '@' },
        templateUrl: 'templates/directives/content/pages/404.html',
        controller: function($scope, $rootScope, $state, PagesFactory, toaster) {
            //$state.current.name
            PagesFactory.getPage($state.current.name, function(err, content) {
                console.log(err, content);
                if(err) return toaster.pop({
                    type: 'error',
                    title: 'Error',
                    body: err,
                    timeout: 4000
                });

                if(content == null) return toaster.pop({
                    type: 'error',
                    title: 'Error',
                    body: 'It seems as if this page has been removed, or never existed.',
                    timeout: 4000
                });

                $scope.page.content = content;
            });
            $scope.page = {};
        }
    }
});
