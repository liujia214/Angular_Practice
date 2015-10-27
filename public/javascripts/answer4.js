/**
 * Created by allenbklj on 10/27/15.
 */
var injector = angular.injector(['ng']);
var $http = injector.get('$http');
$http.get('/info').then(function(result){
    alert(result.data.message);
});