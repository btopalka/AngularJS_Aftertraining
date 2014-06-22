/**
 * Created by opalkabr on 6/20/2014.
 */
angular.module('ws.home', [
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('ws.home', {
                url:'/home',
                views: {
                    'content@': {
                        templateUrl: 'home/home.tpl.html',
                        controller: 'HomeCtrl as home'
                    }
                }
            })
        ;
    })
    .controller('HomeCtrl', function (){
        var home=this;
    })
;