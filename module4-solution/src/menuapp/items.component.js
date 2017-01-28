(function () {
'use strict';

angular.module('data')
.component('items', {
templateUrl: 'src/menuapp/templates/categoryitemslist.template.html',
bindings: {
  categoryItems: '<',
  selectedCategory: '<'
}
});
})();
