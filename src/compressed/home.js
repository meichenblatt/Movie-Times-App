MovieApp.controller("homeController",function($scope,Movies,Times){Times.query(function(times){$scope.theaters=times,Movies.query(function(movies){$scope.movies=movies,$scope.theaters.forEach(function(theater){theater.showtimes.forEach(function(movie){$scope.movies.forEach(function(m){movie.id==m.id&&(movie.movie=m)})})}),console.log($scope.theaters)})}),window.innerWidth<=991?$scope.mobile=!0:$scope.mobile=!1});