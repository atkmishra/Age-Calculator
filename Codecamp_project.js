function age() {  
    var birthday_Date = document.getElementById('date').value;  
    var birthday_Month = document.getElementById('month').value;  
    var birthday_Year = document.getElementById('year').value;  
    var date = new Date();  
    var today_Date = date.getDate();  
    var today_Month = date.getMonth();  
    var today_Year = date.getFullYear();  
    if(birthday_Date>today_Date){
        
    }
    if(today_Month>birthday_Month){
        calculated_age = today_Year - birthday_Year;
    }
    else{
        claculated_age = today_Year - birthday_Month-1;
    }

      
    var d = today_Date - birthday_Date;  
    var m = today_Month - birthday_Month;  
    var y = today_Year - birthday_Year;  
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';  
   }  
