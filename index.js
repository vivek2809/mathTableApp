
function formula(){
    
    var table = document.getElementById('table');
    var txt = document.getElementById('valueBox');

    var i;
    var data = "";

    for(i=1;i<=10;i++)
        {
            const result = eval(txt.value)*i;
            data = data + txt.value + " X " + i + " = " + result +"<br/>";
            
        }
        table.innerHTML=data;
   
}
