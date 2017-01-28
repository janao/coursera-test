angular.module('data')
.controller('MenuItemsListController', MenuItemsListController);

MenuItemsListController.$inject = ['selectedCategory','categoryItems'];
function MenuItemsListController(selectedCategory,categoryItems) {
  var menuItemsCtrl = this;
  menuItemsCtrl.selectedCategory = selectedCategory;
  menuItemsCtrl.categoryItems = categoryItems.data.menu_items;
  //console.log("MenuItemsListController.selectedCategory="+menuItemsCtrl.selectedCategory);
  //console.log("MenuItemsListController.categoryItems="+menuItemsCtrl.categoryItems);
}
