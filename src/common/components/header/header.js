angular.module('brendan-seed.components.header', [])
    .directive("wsHeader", function WSHeader(){
        return{
            restrict: "E",
            templateUrl: "components/header/header.tpl.html",
            controller: "WSHeaderCtrl as headerCtrl"
        }
    })

    .controller("WSHeaderCtrl", function WSHeaderCtrl() {
        var headerCtrl = this;
        console.log('i got to the WSHeaderCtrl');
    })
;