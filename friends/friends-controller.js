'use strict';

module.exports = function($scope, Friends) {
	$scope.friends = Friends.all();
};