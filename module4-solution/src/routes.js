(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.html'
  })

  .state('categoriesList',{
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.html',
    controller: 'CategoriesListController as categoriesCtrl',
    resolve: {
      categoryList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categoryItemsList',{
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/categoryItems.html',
    controller: 'MenuItemsListController as menuItemsCtrl',
    resolve: {
      selectedCategory:['$stateParams',function ($stateParams){
        return $stateParams.categoryShortName;
      }],
      categoryItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}
})();
