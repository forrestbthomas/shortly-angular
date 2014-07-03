angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;
  $scope.addLink = function() {
    $scope.loading = true;
    console.log($scope.link);

    Links.addLink($scope.link)
      .then(function() {
        $scope.loading = false;

        $scope.getLinks();
        $scope.link.url = '';
      })
      .catch(function (error) {
        console.error(error);
      });

  };
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinksFromServer()
      .then(function(linkData){
        console.log(linkData);

        $scope.data.links = linkData;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();
});
