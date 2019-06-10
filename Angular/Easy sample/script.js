//This is the definition of module, which will contains the codes of our application
var app = angular.module('app', [])


//Add a controller to our module('app') in the name of 'main' and define it immiediately with one param, which is a scope.
//The scope param has an attribute in the name of 'message' what we set "Hello world"
app.controller('main', function($scope){
  $scope.message = "Hello world";
})