angular.module("ClinicVet", ["ngRoute", "ngResource", "ui.bootstrap"])

.config(["$routeProvider", function($routeProvider)
{
    "use strict";

    $routeProvider

        // Home
        .when("/",
        {
            templateUrl : "app/home/home.tpl.html"
        })
  }])
