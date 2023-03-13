// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import DashboardController from "./dashboard_controller"
application.register("dashboard", DashboardController)

import GeolocalisationController from "./geolocalisation_controller"
application.register("geolocalisation", GeolocalisationController)

import FlipCardController from "./flip_card_controller"
application.register("flip-card", FlipCardController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapController from "./map_controller"
application.register("map", MapController)

import StarRatingController from "./star_rating_controller"
application.register("star-rating", StarRatingController)
