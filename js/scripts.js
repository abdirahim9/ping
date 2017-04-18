var toPingPong=function(userInput){
  var firstArray=[];
  for(var i=1; i<=userInput; i++){
    if(i % 15 === 0){
      firstArray.push("pingpong");
    }else if(i % 5 === 0){
      firstArray.push("pong");
    }else if ( (i % 3 === 0)) {
      firstArray.push("ping");
    }else {
      firstArray.push(i);
    }

}
    return firstArray + "</br>";
}


$(document).ready(function() {
  $("#ping-pong").submit(function(event){
    var userInput=parseInt($("#numbers").val());
    var result= toPingPong(userInput);

    $("#out-put").text( result);
    event.preventDefault();
  });

  });
