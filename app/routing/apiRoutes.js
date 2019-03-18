module.exports = function apiroutes(app){
    
    var friends = [
        {
            name: "Hermione Granger",
            photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81Z9f1Kos%252BL._SY679_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FHermione-Granger-Poster-Print-Rolled%2Fdp%2FB06XX6BWNG&docid=_KX-Zx2Aq-S1pM&tbnid=LSewDyAKitg2-M%3A&vet=10ahUKEwiClLCUhozhAhUM5awKHXm0DAwQMwhsKAIwAg..i&w=453&h=679&bih=610&biw=1280&q=hermione%20granger&ved=0ahUKEwiClLCUhozhAhUM5awKHXm0DAwQMwhsKAIwAg&iact=mrc&uact=8",
            scores:[
                2,3,5,2,5,2,3,3
            ]
        },
    ]

    app.get("/api/friends", function(req, res){
        return res.json(friends);
    })
    app.post("/api/friends", function(req,res){
        var newfriend = req.body;

        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newfriend);

        friends.push(newfriend);
        
        res.json(newfriend);
    })
}