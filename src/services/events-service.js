const eventsService = {
    allEvents: function() {
        fetch('http:localhost:9000/events/all')
            .then(function(res){
                return res.json()
            }).then(function(jsonData){
                return JSON.stringify(jsonData)
            }).then(function(data){
                console.log(data);
            })
    }
}

export default eventsService