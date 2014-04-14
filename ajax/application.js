
    // Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      console.log(data);
  

      for(var i=0;i<data.shots.length;i++) {



        var shot= $("<div class='shot'>")

        var image = $("<img class='image'>").attr('src', data.shots[i].image_teaser_url);
        $(shot).append(image)

        var title= $("<div class='title'>").text(data.shots[i].title)
        $(shot).append(title)

        var author= $("<div class='author'>").text(data.shots[i].player.name)
        $(shot).append(author)

        $("#images").append(shot);


        createShot(data.shots[i]);
      }




      function createShot(create) {

      shot.on("click",function() {
        var img = $("<img>").attr("src",create.image_url);
        $("#detail").empty().append(img);
        
      });
    }
       

    });



          