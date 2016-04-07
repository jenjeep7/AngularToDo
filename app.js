var app = angular.module('myApp', []);

app.controller('MainController', function($scope){
$scope.items = [];

  $scope.makeList = function(){
  // console.log('button clicked');
  $scope.items.push($scope.listItem);
  };
});
