app.directive('fireioPosts', function() {
    return {
        restrict: 'E',
        scope: { html: '@' },
        templateUrl: 'templates/directives/content/posts/posts.html',
        controller: function($scope, $firebaseArray) {
            var scrollRef = new Firebase.util.Scroll(new Firebase(config.fb + '/content/posts'), 'timestamp');
            $scope.posts = $firebaseArray(scrollRef);
            $scope.posts.scroll = scrollRef.scroll;
        }
    }
});
