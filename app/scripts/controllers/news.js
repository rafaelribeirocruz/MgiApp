'use strict';

angular.module('mgiApp')
  .controller('NewsCtrl', ['$scope', 'feedService', '$sce', '$routeParams', function ($scope, feedService, $sce, $routeParams) {
      $scope.rssFeedResult = "";
      $scope.newsList = [];
      $scope.searchQuery = "";
      $scope.loadedComplete = false;
      
      if($routeParams.query){
          $scope.searchQuery = decodeURIComponent($routeParams.query);
      }
      
      $scope.showFilters = function (){
          if($scope.searchQuery){
              if($scope.searchQuery.trim().length>0){
                  return true;
              }
          }
          
          return false;
      };
      
      $scope.clearFilters = function (){
          $scope.searchQuery = "";
      };
      
      $scope.displayItem = function (item){
          if($scope.showFilters()){
              if(item.title.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) < 0){
                  if(item.content.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) < 0){
                      return false;
                  }
              }
          }
          
          return true;
      }
      
      $scope.loadRssFeed = function () {
          feedService.getNews()
            .then(function (result) {
                var list = $scope.newsList.concat(result);
                
                $scope.newsList = list;

                $scope.loadedComplete = true;
            });
        };
      
        $scope.trustedHtml = function (html){
            return $sce.getTrustedHtml(html);
        };
      
  }]);
