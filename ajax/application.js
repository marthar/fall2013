
    // Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      console.log(data);
  
    var shot, image, title, author;

      for(var i=0;i<data.shots.length;i++) {



        shot= $("<div class='shot'>")

        image = $("<img class='image'>").attr('src', data.shots[i].image_teaser_url);
        $(shot).append(image)

        title= $("<div class='title'>").text(data.shots[i].title)
        $(shot).append(title)

        author= $("<div class='author'>").text(data.shots[i].player.name)
        $(shot).append(author)

        $("#images").append(shot);


        createShot(data.shots[i]);
     }




      function createShot(create) {

      shot.on("click",function() {

        var alien= $("<div class='alien'>").text(create.player.name)
        var name= $("<div class='name'>").text(create.title)
        var img = $("<img class='img'>").attr("src",create.image_url);
        $("#detail").empty().append(img, name, alien);

        window.scrollTo(0,0);
        
      });
      
    }
       

    });



          