'use strict';

// Ionic Starter App

require('./dashboard/dashboard');
require('./friends/friends');
require('./account/account');

var AppCtrl = require('./app-controller');


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'dashboard', 'friends', 'account'])

.run(function($rootScope, $ionicPlatform) {
  $rootScope.$on('$stateChangeSuccess', function(event, toState) { //, toParams, fromState, fromParams 
    // Show/hide ionic tab bar
    if (toState.hasTabs === false) {
      $rootScope.hasTabs = false;
    } else {
      $rootScope.hasTabs = true;
    }
  });
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('AppCtrl', AppCtrl)

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tabs', {
      url: '/tabs',
      templateUrl: 'tabs.html',
      abstract: true,
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/dashboard');

});

