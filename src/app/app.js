angular.module('brendan-seed', [
    'ui.router',
    'ws.home',
    'brendan-seed.common',
    'ui.bootstrap'

])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('ws',{
                abstract: true,
                views: {
                    'header': {
                        template: '<ws-header></ws-header>'
                    },
                    'content': {
                        template: 'This will be the content'
                    },
                    'footer': {
                        template: '<ws-footer></ws-footer>'
                    }
                }
            })
    }) .controller('AppCtrl', function AppCtrl() {
        var app = this;
        console.log('i got into the app controller');
    })

;
