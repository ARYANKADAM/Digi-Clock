let time = document.getElementById("time");

    document.addEventListener("DOMContentLoaded",() => {
        setInterval(showTime, 1000);
    });
    
    const showTime =() =>{

        let date = new Date();
 
        
        let hrs = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();

        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;


        console.log("hours"+hrs +"mins"+mins +"seconds"+secs);
       
    
        time.innerHTML = `${hrs}:${mins}:${secs}`;
        
    }
    



