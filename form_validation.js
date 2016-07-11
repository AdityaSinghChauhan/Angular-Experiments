<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>  
<body>

<h2>Form Validation</h2>

<form ng-app="myApp" ng-controller="validateCtrl" 
name="myForm" novalidate>

<p>Name:<br>
<input type="text" name="name" ng-model="name" required>
<span style="color:red" ng-show="myForm.name.$dirty && myForm.name.$invalid">
Name is required.
</span>
</p>

<p>Email:<br>
<input type="email" name="email" ng-model="email" required>
<span style="color:red" ng-show="myForm.email.$dirty && myForm.email.$invalid">
<span ng-show="myForm.email.$error.required">Email is required.</span>
<span ng-show="myForm.email.$error.email">Invalid email address.</span>
</span>
</p>

<p>
<input type="submit"
ng-disabled="myForm.name.$dirty && myForm.name.$invalid ||  
myForm.email.$dirty && myForm.email.$invalid">
</p>

</form>

<script>
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.name = 'Your Name';
    $scope.email = 'username@example.com';
});
</script>

</body>
</html>
