var MovieApp = angular.module('MovieApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

MovieApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller:  'homeController',
        templateUrl: 'tmpl/home.html'
    })
    .otherwise({
        redirect: '/'
    });
    $locationProvider.html5Mode(true);
});

MovieApp.factory('Movies', function($resource){
    return $resource('data/movie_metadata.json');
});

MovieApp.factory('Times', function($resource){
    return $resource('data/theater_showtimes.json');
});
