'use strict';

angular.module('mgiApp')
    .factory('feedService', ['$http', '$q', function ($http, $q) {
        return {
            getNews: function () {
                var deferred = $q.defer();
                
                $http({
                    url: Util.getFeedServiceUrl(),
                    method: 'jsonp',
                    responseType: 'json'
                })
                .success(function (data){
                    deferred.resolve(data.responseData.feed.entries);
                })
                .error(function (data, status, headers, config){
                    deferred.reject('Erro carregando notícias, tente novamente!');
                });
                
                return deferred.promise;
            }
        };
    }]);