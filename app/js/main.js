'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('seekimApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/templates/home.html'
  })
  .when('/something', {
    templateUrl: 'js/templates/about.html'
  })
  .when('/something', {
    templateUrl: 'js/templates/work.html'
  })
  .when('/gallery', {
    templateUrl: 'js/templates/contact.html'
  })
  .when('/shop', {
    templateUrl: 'js/templates/seekim.html'
  })
  .when('/contact', {
    templateUrl: 'js/templates/seekim.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
