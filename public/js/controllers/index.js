function IndexController($scope, $socket, $t){
	//i18next
	$scope.hello = $t("hello");

	//angular service with socket.io
	$socket.on("test/another/event", function(data){
		$scope.data = data;
	});
	//angular service with socket.io
	$socket.emit("test/event", $scope.hello);
}