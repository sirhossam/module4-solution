(function () {
  "use strict";
  angular
    .module("MenuApp")
    .controller('categoriesCtrl', categoriesCtrl);
  categoriesCtrl.$inject = ['myData','$stateParams'];
  function categoriesCtrl(myData,$stateParams) {
    let $ctrl = this;
    $ctrl.categories = myData;
  }
}
)()