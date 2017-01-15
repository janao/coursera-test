(function(){
  'use strict';

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){

  var toBuyCtrl = this;
  toBuyCtrl.itemsList = ShoppingListCheckOffService.getToBuyItems();

  toBuyCtrl.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  toBuyCtrl.emptyItemsList = function(){
    return (toBuyCtrl.itemsList.length==0);
  };
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBoughtCtrl = this;
  alreadyBoughtCtrl.itemsList = ShoppingListCheckOffService.getBoughtItems();

  alreadyBoughtCtrl.emptyItemsList = function(){
      return (alreadyBoughtCtrl.itemsList.length==0);
  };
}

function ShoppingListCheckOffService(){
  var service = this;

  var boughtItems=[];
  var toBuyItems = [
    {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
  ];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };
}
})();
