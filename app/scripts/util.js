
    MgiAppSetup = {
        GamesCalendar: {
            JsonpProxyUrl: 'http://jsonp.jit.su/?url=',
            ServiceUrl: 'http://whitelabelyahoo.footstats.com.br/Calendario/ListaJogos?',
            UserId: '772',
            TeamId: '1083'
        },
        NewsFeed: {
            JsonpProxyUrl: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=',
            FeedUrl: 'http://gremioindependente.com.br/mgi/?feed=rss2',
            NewsCount: 10
        }
    };

    Util = {
        getGamesServiceUrl : function (date) {   
            //month zero based value
            var mes = date.getMonth() + 1;
            var ano = date.getUTCFullYear();
            var dia = date.getDate();
            var date = date.getUTCFullYear() + '/' + mes + '/' + date.getDate();
        
            var result =  
                MgiAppSetup.GamesCalendar.JsonpProxyUrl + 
                encodeURIComponent(MgiAppSetup.GamesCalendar.ServiceUrl + 
                                   'idEquipe=' + MgiAppSetup.GamesCalendar.TeamId +
                                   '&MesAno=' + date +
                                   '&usuario=' + MgiAppSetup.GamesCalendar.UserId);
            return result;
        },
        getFeedServiceUrl : function (){
            var url = MgiAppSetup.NewsFeed.FeedUrl;
            
            return MgiAppSetup.NewsFeed.JsonpProxyUrl + encodeURIComponent(url);
        },
        searchNews : function (field){
            var query = document.getElementById(field).value;
            document.getElementById(field).value = "";
            window.location.href = 'app.html#/news/' + encodeURIComponent(query);
        },
        scrollTop : function (){
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
    };    
