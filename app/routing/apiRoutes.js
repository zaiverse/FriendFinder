module.exports = function apiroutes(app){

    var friends = [
        {
            name: "Hermione Granger",
            photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgix.bustle.com%2Frehost%2F2016%2F9%2F13%2Fdf278a16-44e9-4553-80ef-a23966f6d367.jpg%3Fw%3D970%26h%3D546%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dformat%26q%3D70&imgrefurl=https%3A%2F%2Fwww.bustle.com%2Farticles%2F129048-heres-what-hermione-granger-was-almost-named-in-harry-potter&docid=WtYiWPX4Ie6tmM&tbnid=zpn9M4no-kBBAM%3A&vet=10ahUKEwjP8uGG3Y_hAhVHOK0KHd3SDVIQMwhLKAwwDA..i&w=970&h=546&bih=969&biw=1920&q=hermione%20granger&ved=0ahUKEwjP8uGG3Y_hAhVHOK0KHd3SDVIQMwhLKAwwDA&iact=mrc&uact=8",
            scores:[
                2,3,5,2,5,2,3,3,5,3
            ]
        },
        {
            name:"Draco Malfoy",
            photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F1%2F16%2FDraco_Mal.JPG%2F220px-Draco_Mal.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDraco_Malfoy&docid=myC-onTCuU7pDM&tbnid=98Gvok6DZPFzEM%3A&vet=10ahUKEwjFi-fc3Y_hAhVFb60KHY-mBIoQMwhBKAIwAg..i&w=220&h=376&bih=969&biw=1920&q=draco%20malfoy&ved=0ahUKEwjFi-fc3Y_hAhVFb60KHY-mBIoQMwhBKAIwAg&iact=mrc&uact=8",
            scores:[
                3,4,5,1,2,3,1,4,2,3
            ]
        }
    ]

    app.get("/api/friends", function(req, res){
        return res.json(friends);
    })
    app.post("/api/friends", function(req,res){
        var newfriend = req.body;
        var min = 40;

        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriend);

        for(i=0; i<friends.length; i++){
            var difference = Math.abs(newfriend.scores[i] - friends[i].scores[i]);
            totaldifference = 0;
            totaldifference += difference;

            if(totaldifference < min){
                bestie = i;
            }

        };

        friends.push(newfriend);

        
        res.json(friends[bestie]);

    })
}