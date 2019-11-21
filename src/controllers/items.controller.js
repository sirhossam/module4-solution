(function () {
  "use strict";
  angular
    .module("MenuApp")
    .controller('itemsCtrl', itemsCtrl);
    itemsCtrl.$inject = ['myItems'];
  function itemsCtrl(myItems ) {
    let $ctrl = this;
    $ctrl.items =myItems;
  }
}
)()