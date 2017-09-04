
/*****  Check authentication within App *****/

function initAuthentication_banner (){
    var str =  '<div id="snoop_offline_indicator" style=""><div class="offline_wrap"><h1>No network!</h1><p>Could not connect to server!</p><image src="snooplogo.png"  ><h3>Enable the network to use Snoop!</h3></div></div>';
    var banner = document.createElement("SPAN");
    banner.id="snoop_offline_indicator_wrap";
    
    banner.innerHTML=str;
    
    //document.body.appendChild(banner);
    
    
      
    
    
    updateIndicator ();
    
    
}


function updateIndicatorOff() {
   
     
       document.getElementById("snoop_offline_indicator").style.display= "block"; 
       
}
function updateIndicatorOn() {
    
   
   
      if(window.location.href.indexOf("index.html")> -1 && document.title.indexOf("Loading...") > -1){
          window.location  = "snoop_frame.html";
          document.getElementById("snoop_offline_indicator").style.display= "none"; 
          
      }else{
          
           document.getElementById("snoop_offline_indicator").style.display= "none"; 
          
      }
         
        
       
}
    
    function updateIndicator (){
        
        
    if (navigator.onLine) {
   updateIndicatorOn();
} else {
   updateIndicatorOff();
}
        
        
    }




//Init
initOffline_banner();
// Update the online status icon based on connectivity
 window.addEventListener('online',  updateIndicatorOn);
 window.addEventListener('offline', updateIndicatorOff);
 

   
