'use strict';

(function () {

  function homeController($http, Authentication) {
    var self = this;
    self.authentication = Authentication;
    self.resultsMongo = null;

    $http({
      method:'get',
      url:'http://localhost:3000/getData'
    })
      .then(function(response) {
        self.resultsMongo = response.data;
      })
  }

  angular.module('core')
    .controller('homeController', ['$http' ,'Authentication', homeController])

}());
