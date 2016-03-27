app.factory('PagesFactory', function($firebaseObject, $firebaseArray) {
    var $scope = this;

    return {
        getPage(location, fn) {
            var page = $firebaseObject(new Firebase(config.fb + '/content/pages/' + location.toLowerCase()));
            page.$loaded().then(function() {
                if(page.content == undefined)
                    return fn();

                fn(null, page.content);
            }).catch(function(err) {
                fn(err);
            });
        },
        createPage(data, fn) {
            var page = $firebaseObject(new Firebase(config.fb + '/content/pages/' + data.location.toLowerCase()));
            page.$loaded().then(function() {
                page.content = data.content;
                page.timestamp = data.timestamp;
                page.$save().then(function() {
                    fn();
                })
            }).catch(function(err) {
                fn(err);
            })
        },
        deletePage: function(location, fn) {
            $firebaseObject(new Firebase(config.fb + '/content/pages/' + location.toLowerCase())).$remove().then(function() {
                fn();
            }).catch(function(err) {
                fn(err);
            })
        }
    }
});
