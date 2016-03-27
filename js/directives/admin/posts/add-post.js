app.directive('fireioAddPost', function() {
    return {
        restrict: 'E',
        scope: { html: '@' },
        templateUrl: 'templates/directives/admin/posts/add-post.html',
        controller: function($scope, PostsFactory, toaster) {
            $scope.create = function() {
                if($scope.post.title == undefined || $scope.post.description == undefined || $scope.post.body == undefined) return toaster.pop({
                    type: 'error',
                    title: 'Error',
                    body: 'All fields are required',
                    timeout: 4000
                });

                PostsFactory.createPost({
                    title: $scope.post.title,
                    created: Date.now(),
                    updated: Date.now(),
                    timestamp: -Date.now(),
                    description: $scope.post.description,
                    body: $scope.post.body
                }, function(err) {
                    if(err) return toaster.pop({
                        type: 'error',
                        title: 'Error',
                        body: err,
                        timeout: 4000
                    });

                    toaster.pop({
                        type: 'success',
                        title: 'Success',
                        body: 'Successfully created post',
                        timeout: 4000
                    });

                    $scope.post = {};
                })
            };
            $scope.post = {};
        }
    }
});
