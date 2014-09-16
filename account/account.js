'use strict';

var AccountCtrl = require('./account-controller')

angular.module('account', [])

	.controller('AccountCtrl', AccountCtrl)

	.config(function($stateProvider) {
		$stateProvider
			.state('tabs.account', {
	      url: '/account',
	      views: {
	        'account': {
	          templateUrl: 'account/account.html',
	          controller: 'AccountCtrl'
	        }
	      }
	    });
	});