customerApp.controller('customerController', function($scope, $http) {

	/** get all products * */

	// get all data
	$http({
		method : 'POST',
		url : './'
	}).then(successCallback, errorCallback);

	function successCallback(products, response) {
		// this callback will be called asynchronously
		// when the response is available
		console.log('success')
		// $scope.products = products.data.productResponse;
		// $scope.userName = products.data.userName;
		$scope.headerPage = 'customer/header.html';
		$scope.topNavBar = "customer/topNavBar.html"
		$scope.sidebar = "customer/sidebarNav.html"

		// console.log("all pages displayed");
	}

	function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.log('error');
		console.log(response.status);
		if (response.status == '401')
			window.location.href = 'loginPage.do';
	}

	$scope.getProductDetails = function() {
		var store = this.store;
		console.log("hello" + store);
	}
});

customerApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/store', {
		templateUrl : 'customer/store.html',
		controller : 'StoreController'
	}).when('/orders', {
		templateUrl : 'customer/orders.html',
		controller : 'OrdersController'
	}).when('/order/:orderId', {
		templateUrl : 'customer/order.html',
		controller : 'OrderController'
	}).when('/', {
		templateUrl : 'customer/welcome.html'

	}).otherwise({
		redirectTo : '/'
	});
} ]);

customerApp.controller('OrdersController',
		function($scope, $http, $routeParams) {
			$scope.message = 'Show Order List';
			console.log("order")
			// get all orders

		});

customerApp.controller('OrderController',
		function($scope, $http, $routeParams) {
			var orderId = $routeParams.orderId;
			$scope.message = 'Show Order List for: ' + orderId;
			console.log("order")
			// get all orders

		});

customerApp.controller('StoreController',
		function($scope, $http, $routeParams) {
			var id = $routeParams.id;
			$scope.message = 'Grocery Store';
			console.log("store")

		});
