$("button").click(function(){
let variable1=$(".a") .val();   
let variable2=$(".b").val(); 
let variable3=$(".C").val();
    
    
let variable4= variable3* 10;
    
    $(".fortune-display").append( variable1+" you will have "+ variable4 + " pairs of shoes.");
    
    console.log(variable1,variable2,variable3);
});