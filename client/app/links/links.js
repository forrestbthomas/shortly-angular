angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
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
