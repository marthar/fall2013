



$(function () {
	//looping over data
    for(var i=0;i<data.length;i++) {
 	
 	console.log(data);

 	var salary= parseFloat(data[i][18]);
 	var barVal= salary/1000;

		
 	//placing the data on the page
		var name= $("<div class='name'>").text(data[i][8])
		$('#people').append(name)

		var salaryDiv= $("<div class='salaryDiv'>").text(data[i][18])
		$('#people').append(salaryDiv)

	//make large number smaller

	salaryDiv.css("width", barVal);

     }


    });
