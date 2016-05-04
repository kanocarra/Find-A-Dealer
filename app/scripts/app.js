'use strict';

/**
 * @ngdoc overview
 * @name findADealerApp
 * @description
 * # findADealerApp
 *
 * Main module of the application.
 */
angular
  .module('findADealerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
