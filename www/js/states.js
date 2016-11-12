angular.module('starter')
/* Archive responsible to connect all controllers and respective views defining as states of application */
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider

  //State of initial login screen
  .state('signin', {
  url: '/signin',
  templateUrl: 'views/signIn.html',
  controller: 'signinCtrl'
  })

  //Sign Up state
  .state('signup', {
  url: '/signup',
  templateUrl: 'views/user/signUp.html',
  controller: 'signupCtrl'
  })

  //Tabs state
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs.html'
    })


      //Home state
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-page': {
            templateUrl: "views/home.html"
          }
        }
      })

      //State of markings initial page
      .state('tabs.markings', {
      url: '/markings',
      abstract: true,
      views: {
        'markings': {
          templateUrl: 'views/markings.html'
        }
      }
    })

    //New Marking state
    .state('tabs.newMarkings', {
      url: '/newMarkings',
      abstract: true,
      views: {
        'newMarkings': {
          templateUrl: 'views/newMarkings.html'
        }
      }
    })

    //State of my markings and nearby markings
    .state('tabs.markings.myMarkings', {
      url: '/myMarkings',
      views: {
        'markings-page': {
          templateUrl: 'views/marking/myMarkings.html'
        }
      }
    })

      //State of my pevs and nearby pevs
      .state('tabs.markings.myPEVS', {
        url: '/myPEVS',
        views: {
          'markings-page': {
            templateUrl: 'views/pev/myPevs.html'
          }
        }
      })

  //State of register marking screen
  .state('tabs.newMarkings.newMarking', {
    url: '/newMarking',
    views: {
      'new-markings-page': {
        templateUrl: 'views/marking/newMarking.html',
        controller: 'newMarkingCtrl'
      }
    }
  })

  //State of new pevs screen
  .state('tabs.newMarkings.newPEV', {
    url: '/newPEV',
    views: {
      'new-markings-page': {
        templateUrl: 'views/pev/newPEV.html',
        controller: 'newPevCtrl'
      }
    }
  })

  //Tô Contribuindo State
  .state('tabs.to-contribuindo.welcome', {
    url: '/welcome',
    views: {
      'to-contribuindo-page': {
        templateUrl: 'views/contribute/toContribuindoWelcome.html'
      }
    }
  })

  //Edit Markings state
  .state('editMarking', {
    url: '/editMarkings',
      controller: 'editMarkingCtrl',
      templateUrl: 'views/marking/editMarkings.html'
  })

  //Edit PEVs state
  .state('editPEV', {
    url: '/editPEV',
      controller: 'editPevCtrl',
      templateUrl: 'views/pev/editPEV.html'
  })

  //Profile User state
  .state('profile', {
    url: '/profile',
    templateUrl: 'views/user/userProfile.html',
    controller: 'profileCtrl'
    })

  //Edit profile user state
  .state('editProfile',{
    url: '/editProfile',
    templateUrl: 'views/user/editProfile.html',
    controller: 'editProfileCtrl'
  })

  //Map state
    .state('map', {
      url: '/map',
      templateUrl: 'views/map.html',
      controller: 'mapCtrl'
    })


    //Tutorial state
    .state('tutorial', {
      url: '/tutorial',
      templateUrl: 'views/tutorial.html',
      controller: 'tutorialCtrl'
    });

  //Initial state of system defined in login
  $urlRouterProvider.otherwise('/signin')
});
