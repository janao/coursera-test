(function () {
'use strict';

angular.module('data')
.constant('ApiRestaurantBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiRestaurantBasePath'];
function MenuDataService($http, ApiRestaurantBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiRestaurantBasePath + "/categories.json")
    });
    //console.log("MenuDataService.getAllCategories: " + response);
    return response;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiRestaurantBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    //console.log("MenuDataService.getItemsForCategory("+categoryShortName+"): " + response);
    return response;
  };

}

})();
