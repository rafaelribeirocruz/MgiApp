'use strict';

angular.module('mgiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        redirectTo: '/news'
      })
      .when('/news',{
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/news/:query',{
          templateUrl: 'views/news.html',
          controller: 'NewsCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })    
      .when('/calendar',{
          templateUrl: 'views/calendar.html',
          controller: 'CalendarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      //$httpProvider.defaults.useXDomain = true;
      
      //delete $httpProvider.defaults.headers.common['X-Requested-With'];
      
      //$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  });
