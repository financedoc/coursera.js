(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.name = "";
  $scope.message=" ";
  $scope.msgcolor="black"
  $scope.checkit = function () {
    var strval = $scope.name
    var listmembers= $scope.name.split(',')
    var lenny = listmembers.length;
    var spaces = $scope.name.split(' ').length
    var count = 0;
    for(var i=0; i<lenny;i++) {
        if (listmembers[i] != "") count++
    };

    if (strval == "") {
      $scope.borcolor = "red"
      $scope.msgcolor="red";
      $scope.message= "Please Enter Text First";
    }
    else if (spaces > count){
      $scope.msgcolor="black";
      $scope.message= "You must use commas, not spaces";
    }
    else if (count <= 3) {
      $scope.borcolor = "green"
      $scope.msgcolor="green";
      $scope.message= "Enjoy!"
    }
    else if(count >3) {
      $scope.borcolor = "green"
      $scope.msgcolor="green";
      $scope.message= "Too Much!"
    }
    else  $scope.message= "Invalid Entry. Try again."



  };
}

})();
