angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $timeout) {
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
        console.dir(linkData);

        $scope.data.links = [];


        linkData.sort(function(a,b){return a._id < b._id});
        linkData.sort(function(a,b){return a.visits > b.visits});

        for (var i = 0; i < linkData.length; i++){
          $timeout(function(){
            $scope.data.links.push(linkData.pop());
          }, 60 * i);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();
});
