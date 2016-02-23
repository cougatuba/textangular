app = angular.module('testApp', ['textAngular']);
console.log(app);
app.controller('testCtrl', ['$scope', function($scope){
  $scope.content = 'llll';
  $scope.htmlContent = '<h2>Welcome to JS Word!</h2>';
  $scope.htmlContent += '<p>JSWord is a basic text editor using Angularjs and TextAngular</p>';
  $scope.htmlContent += '<p>Simply select the text box and start typing!</p>';
  $scope.htmlContent += '<p>You can also select the buttons on the ribbon to change formatting</p>';
}]);