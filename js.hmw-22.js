

function timeute(){
    var index = 2;
   
    setInterval(function(){
       
        document.write(index + "<br>");
        if(index == 20){
            clearInterval(1);
        }
        index++;
    }, 2000)
}
timeute()
setTimeout(function(){
    document.write(1 + "<br>")
}, 1);