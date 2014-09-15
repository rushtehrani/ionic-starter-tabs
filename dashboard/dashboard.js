'use strict';

var DashboardCtrl = require('./dashboard-controller')

angular.module('dashboard', [])

	.controller('DashboardCtrl', DashboardCtrl)

	.config(function($stateProvider) {
		$stateProvider
			.state('tabs.dashboard', {
	      url: '/dashboard',
	      views: {
	        'dashboard': {
	          templateUrl: 'dashboard/dashboard.html',
	          controller: 'DashboardCtrl'
	        }
	      }
	    });
	});