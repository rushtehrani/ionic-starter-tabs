'use strict';

module.exports = function($scope, $stateParams, Friends) {
	$scope.friend = Friends.get($stateParams.id);
};