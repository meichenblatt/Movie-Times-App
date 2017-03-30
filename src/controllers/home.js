MovieApp.controller('homeController', function($scope, Movies, Times) {
	
	

	Times.query(function(times){
		$scope.theaters = times;

		Movies.query(function(movies){
			$scope.movies = movies;

			$scope.theaters.forEach(function(theater){

				theater.showtimes.forEach(function(movie){

					$scope.movies.forEach(function(m){

						if(movie.id == m.id){
							movie.movie = m;
						}
					})
				})	
			})
			console.log($scope.theaters)
		})
	})
	

	if(window.innerWidth <= 991){
		$scope.mobile = true;
	} else {
		$scope.mobile = false;
	}


});

