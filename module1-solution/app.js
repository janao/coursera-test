(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.message = "";
    $scope.dishesList = "";
    $scope.styleForCustomMessageColor = {};

    $scope.checkDishes = function(){
      var re = /\s*,\s*/;
      var arrayOfDishes = $scope.dishesList.split(re).filter( function( value ){
                                                              return value!="" ? true : false;
                                                            });

      console.log(arrayOfDishes);
      console.log(arrayOfDishes.length);

      switch (arrayOfDishes.length) {
        case 0:
            $scope.message = "Please enter data first";
            $scope.styleForCustomMessageColor = {
                'color' : 'Red'
            };
          break;
        case 1:
        case 2:
        case 3:
            $scope.message = "Enjoy!";
            $scope.styleForCustomMessageColor = {
                'color' : 'Green'
            };
          break;
        default:
            $scope.message = "Too much!";
            $scope.styleForCustomMessageColor = {
                'color' : 'Green'
            };
      }
    };
  }
})();
