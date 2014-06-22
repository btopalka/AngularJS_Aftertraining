angular.module('brendan-seed.components.footer', [])
    .directive("wsFooter", function WSFooter(){
        return{
            restrict: "E",
            templateUrl: "components/footer/footer.tpl.html",
            controller: "WSFooterCtrl as footerCtrl"
        }
    })

    .controller("WSFooterCtrl", function WSFooterCtrl(){
        var footerCtrl = this;
    })

;