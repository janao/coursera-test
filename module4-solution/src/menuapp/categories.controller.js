angular.module('data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['categoryList'];
function CategoriesListController(categoryList) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categoryList.data;
  //console.log("CategoriesListController.items="+categoriesCtrl.categories);
}
