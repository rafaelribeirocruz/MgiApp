'use strict';

angular.module('mgiApp')
    .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.selectedItem = {};
      
        $scope.Items = [
            {
                name: 'Notícias do MGI',
                target: '#news',
                icon: 'newsIcon',
                image: 'newsBigIcon'
            },
            {
                name: 'Agenda de Jogos',
                target: '#calendar',
                icon: 'calendarIcon',
                image: 'calendarBigIcon'
            },
            {
                name: 'Fale com o MGI',
                target: '#contact',
                icon: 'contactIcon',
                image: 'contactBigIcon'
            }
        ];
      
      
        //trick used to select the current item
        for (var i = 0; i < $scope.Items.length; i++){
            if($location.path().indexOf($scope.Items[i].target.replace('#',''))>=0){
                $scope.selectedItem = $scope.Items[i];
            }
        }
      
        $scope.showMenuTitle = function(item){
            return (item == $scope.selectedItem);
        };
      
        $scope.selectItem = function(item){
            $scope.selectedItem = item;
        };
    }]);