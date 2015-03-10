'use strict';

angular.module('mgiApp')
  .controller('CalendarCtrl', ['$scope', 'gamesSchedule', function ($scope, gamesSchedule) {
      $scope.loadedComplete = false;
      //get matches results from last week
      $scope.lastMatch = new Date();
      //$scope.lastMatch.setDate($scope.lastMatch.getDate()-7);
      
      $scope.matches = [];
      $scope.list = {};
      $scope.loadingButton = "Carregar mais jogos";
      
      $scope.buildMatchList = function () {
          gamesSchedule.getMatchList($scope.lastMatch)
            .then(function (result) {
                $scope.matches = $scope.matches.concat(result.Partidas);
                $scope.loadedComplete = true;
                console.log($scope.list);
            });
      };
      
      $scope.loadMoreMatches = function () {          
          $scope.loadingButton = "Carregando...";
          
          $scope.lastMatch.setMonth($scope.lastMatch.getMonth() + 1);
          
          $scope.buildMatchList();
          
          $scope.loadingButton = "Carregar mais jogos";
      };

      $scope.getLogoUrl = function (logoImage){
          return MgiAppSetup.GamesCalendar.LogoPath + logoImage;
      };
  }]);
