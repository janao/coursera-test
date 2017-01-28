(function () {
'use strict';

angular.module('data')
.component('categories', {
templateUrl: 'src/menuapp/templates/categorieslist.template.html',
bindings: {
  categories: '<'
}
});
})();
