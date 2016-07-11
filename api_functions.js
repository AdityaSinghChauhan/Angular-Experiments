<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
<p><h1>{{ x1 }}</h1></p>
<p>{{ x2 }}</p>
<p>{{ x3 }}</p>
<p>{{ x4 }}</p>
<p>{{ x5 }}</p>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.x1 = "aDiTyA";
    $scope.x2 = angular.lowercase($scope.x1);
    $scope.x3 = angular.uppercase($scope.x1);
    $scope.x4 = angular.isString($scope.x1);
    $scope.x5 = angular.isNumber($scope.x1);
});
</script>

</body>
</html>
