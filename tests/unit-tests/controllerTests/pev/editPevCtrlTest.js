describe("editPevCtrl", function(){
   var $scope = {};
   var $controller;
   var $httpBackend;
   var URL;
   var findPevService;
   var $ionicPopup;
   var $rootScope;

   beforeEach(function(){
       module("starter");
   });

   beforeEach(inject(function(_$controller_, _$httpBackend_, $injector, 
                              _findPevService_, _$ionicPopup_, _$rootScope_){

       URL = $injector.get("URL");
       $rootScope = _$rootScope_
       $controller = _$controller_;
       findPevService = _findPevService_;
       $ionicPopup = _$ionicPopup_;
       $httpBackend = _$httpBackend_;
       $httpBackend.when('GET', /\.html$/).respond('');
   }));

   beforeEach(function(){
       var controller = $controller("editPevCtrl", 
                              {
                                $scope: $scope, 
                                findPevService: findPevService
                              });
   });


   it("Should not get pev on failed connection", function(){
       $httpBackend.flush();
   });

   it("Should show dialog popup and confirm before pev edition", function(){

		$rootScope.pevs = [];

		var pev = {latitude: -15, longitude: 45}
    var modalEditPev = {
      show: function() {return 'shown'},
      hide: function() {return 'hid'}
    }

		spyOn($ionicPopup, "confirm").and.callFake(function() {
			return {
				then: function(res) {
				return res({});
				}
			};
		});

		$scope.confirmEditPEV(pev, modalEditPev);
		expect($ionicPopup.confirm).toHaveBeenCalled();
		$httpBackend.expectPOST(URL+"/pevs/edit").respond(200);
		$httpBackend.flush();
   });

   it("Should show dialog popup and confirm before pev edition", function(){

		$rootScope.pevs = [];

		var pev = {latitude: -15, longitude: 45}
		spyOn($ionicPopup, "confirm").and.callFake(function() {
			return {
				then: function(res) {
				return res({});
				}
			};
		});
		$scope.confirmEditPEV(pev);
		expect($ionicPopup.confirm).toHaveBeenCalled();
		$httpBackend.expectPOST(URL+"/pevs/edit").respond(400);
		$httpBackend.flush();
   });

	it("Should show diolog popup and cancel before pev edition", function(){

		$rootScope.pevs = [];

		var pev = {latitude: -15, longitude: 45}
		spyOn($ionicPopup, "confirm").and.callFake(function() {
			return {
				then: function(res) {
				return res();
				}
			};
		});
		$scope.confirmEditPEV(pev);
		expect($ionicPopup.confirm).toHaveBeenCalled();
		$httpBackend.flush();
   });

});
