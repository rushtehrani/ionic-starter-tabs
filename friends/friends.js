'use strict';

var Friends = require('./friends-service'),
		FriendsCtrl = require('./friends-controller'),
		FriendsDetailCtrl = require('./friends-detail-controller');

angular.module('friends', [])

	.factory('Friends', Friends)

	.controller('FriendsCtrl', FriendsCtrl)

	.controller('FriendsDetailCtrl', FriendsDetailCtrl)

	.config(function($stateProvider) {
		$stateProvider

			.state('tabs.friends', {
	      url: '/friends',
	      views: {
	        'friends': {
	          templateUrl: 'friends/friends.html',
	          controller: 'FriendsCtrl'
	        }
	      }
	    })

	    .state('tabs.friends-detail', {
	      url: '/friends/:id',
	      views: {
	        'friends': {
	          templateUrl: 'friends/friends-detail.html',
	          controller: 'FriendsDetailCtrl'
	        }
	      }
	    })
	});