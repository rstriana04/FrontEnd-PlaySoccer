angular
  .module('playsoccer', [])
  .controller('invitadoController', invitadoController);
invitadoController.$inject = ['$scope', '$state'];
function invitadoController($scope, $state) {
  $scope.delegado = function() {
    $state.go('login');
  };
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
}
