'use strict';

angular.module('mgiApp')
    .factory('gamesSchedule', ['$http', '$q', '$parse', function ($http, $q, $parse) {
        return {
            getMatchList: function (lastMatch) {
                var deferred = $q.defer();
                
                $http.defaults.useXDomain = true;    
                
                $http({
                    url: Util.getGamesServiceUrl(lastMatch),
                    method: 'GET',
                    responseType: 'json'
                })
                .success(function (data){
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config){
                    deferred.reject('Erro carregando jogos, tente novamente!');
                });
                        
                return deferred.promise;
            }
        };
    }]);