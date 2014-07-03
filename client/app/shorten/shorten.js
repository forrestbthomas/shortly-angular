angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  //
  $scope.link = {};
  $scope.loading = false;
  $scope.addLink = function() {
    $scope.loading = true;
    console.log($scope.link);

    Links.addLink($scope.link)
      .then(function() {
        $scope.loading = false;

        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });

  };

});
