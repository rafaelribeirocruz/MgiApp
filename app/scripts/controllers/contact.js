'use strict';

angular.module('mgiApp')
  .controller('ContactCtrl', function ($scope) {
      $scope.name = '';
      $scope.email = '';
      $scope.message = '';
      $scope.showSuccess = false;
          
      $scope.nameIsValid = function(){
          if($scope.name.trim().length<=0){
              return false;
          }
          
          return true;
      };
      
      $scope.nameClass = function(){
          if(!$scope.nameIsValid()){
              return 'has-error';
          }
          
          return '';
      };
      
      $scope.emailIsValid = function(){
          if($scope.email.trim().length<=0){
              return false;
          }
          
          return true;
      };
      
      $scope.emailClass = function(){
          if(!$scope.emailIsValid()){
              return 'has-error';
          }
          
          return '';
      };
      
      $scope.messageIsValid = function(){
          if($scope.message.trim().length<=0){
              return false;
          }
          
          return true;
      };
      
      $scope.messageClass = function(){
          if(!$scope.messageIsValid()){
              return 'has-error';
          }
          
          return '';
      };
      
      $scope.validateForm = function (){
          if($scope.name.trim().length<=0){
              return false;
          }
          
          if($scope.email.trim().length<=0){
              return false;
          }
          
          if($scope.message.trim().length<=0){
              return false;
          }
          
          return true;
      };
      
      $scope.submitForm = function(){
          $scope.name = '';
          $scope.message = '';
          $scope.email = '';
          $scope.showSuccess = true;
      };
  });
