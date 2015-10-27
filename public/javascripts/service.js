/**
 * Created by allenbklj on 10/27/15.
 */
var myApp = angular.module('practiceApp',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('question1',{
        url:'/question1',
        template:'<div id="div1">{{message}}</div><button ng-click="change()">Click here to change message</button>',
        controller: function ($scope) {
            $scope.message = 'original message';
            $scope.change = function(){
                console.log(angular.element(document.getElementById('div1')).scope());
                angular.element(document.getElementById('div1')).scope().message = 'new message';
            }
        }
    }).state('question2',{
        url:'/question2',
        templateUrl:'_answer2.html',
        controller:function($scope){
            $scope.delete = function(){
                angular.element(document.getElementById('div2')).remove();
            }
        }
    }).state('question3',{
        url:'/question3',
        template:'<input type="text" ng-model="function" placeholder="input any function with one argument">&nbsp;&nbsp;<input ng-model="result" placeholder="result will always be 5">&nbsp;&nbsp;<button ng-click="test(value,5)">Test</button>',
        controller:function($scope) {
            $scope.test = function (fn, value) {
                $scope.result = (fn || angular.identity)(value);
                console.log($scope.result)
            };
        }
    });
});

myApp.directive('myDiv',function(){
    return{
        link:function(scope,element){
            element.on('$destroy',function(){
                alert('myDiv element is destroyed');
            })
        }
    }
});

//angular.bootstrap(document,['practiceApp']);