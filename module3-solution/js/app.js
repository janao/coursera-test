(function(){
  'use strict';

  angular.module("NarrowItDownApp",[])
  .controller("NarrowItDownController",NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope:{
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrowItDownCtrl',
      bindToController: true
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService){
    var narrowItDownCtrl = this;
    narrowItDownCtrl.stringToSearch;
    narrowItDownCtrl.foundItems;

    narrowItDownCtrl.search = function(){
      var promise = MenuSearchService.getMatchedMenuItems(narrowItDownCtrl.stringToSearch);
      promise.then(function (response) {
        narrowItDownCtrl.foundItems = response;
      }).catch(function (error) {
        console.log("Something went terribly wrong.");
        });
    };

    narrowItDownCtrl.remove = function(itemIndex){
      console.log("remove at index: "+itemIndex);
      narrowItDownCtrl.foundItems.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service = this;
    var allItems = null;

    service.getMatchedMenuItems = function(searchTerm) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        var foundItems = null;
        service.allItems = result.data.menu_items;
        for (var i = 0; i < service.allItems.length; ++i) {
            if(service.allItems[i].description.toLowerCase().includes(searchTerm.toLowerCase())){
              if(foundItems==null){
                foundItems = [];
              }
              foundItems.push(service.allItems[i]);
            }
        }
        return foundItems;
        }).catch(function (error) {
            console.log(error);
          });
      console.log("srv" + response);
      return response;
    };
  }
})();
