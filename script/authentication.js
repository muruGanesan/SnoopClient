
/*****  Check authentication within App *****/

function initAuthentication_banner (){
    var str =  '<div id="snoop_login_modal" style=""><div class="modal_wrap"><h1>Login</h1><p>Please login to use SNOOP!</p><div id="loginModal"><form id="loginForm" action=""  method="POST"><div class="login-panel panel panel-default"><div class="panel-heading">Please Sign in</div><div class="panel-body"><div class="form-group"><label class="control-label">username</label><input type="text" name="username" class="form-control" required="required"></div><div class="form-group"><label class="control-label">password</label><input type="password" name="passwd" class="form-control" required="required"></div><span id="snoop_result" class="alert alert-danger"></span><button type="submit" class="btn btn-success loginField">Login</button></div></div></form></div> </div></div>';
    var banner = document.createElement("SPAN");
    banner.id="snoop_login_modal_wrap";
    
    banner.innerHTML=str;
    
     document.body.appendChild(banner);
    
    
      
    
    
     
    
    
}
 
//Init
initAuthentication_banner();
 



/******************  CORE AUTHENTICATION *****************/





















   
window.snoop_var_username = "";
window.snoop_var_user_type = "";
window.snoop_var_last_authentication_status = "checked";
function ShowLogin(){
    
    $("#snoop_login_modal").show();
    
    
}
function HideLogin(){
    
    $("#snoop_login_modal").hide();
    
    
}
  
    
    
    
 function Update_authentication_ui(){
     
     $( "#snoop_result").empty(); 
     
     
     if(snoop_var_username == ""){
         $( "#snoop_username" ).empty().append( "Guest" );
         $( "#snoop_loginout" ).empty().append( "<span onclick='ShowLogin()'>Login</span>" );
         
         ShowLogin();
         
        }else if(snoop_var_username != ""){
         $( "#snoop_username" ).empty().append( window.snoop_var_username );
         $( "#snoop_loginout" ).empty().append( "<span onclick='Logout()'>Logout</span>" );
            HideLogin();
        
            
        }else {
         $( "#snoop_username" ).empty().append( "Guest" );
         $( "#snoop_loginout" ).empty().append( "<span onclick='ShowLogin()'>Login</span>" ); 
             ShowLogin();
        }
     
     
     
     if(window.snoop_var_last_authentication_status == "login_attempted" && window.snoop_var_username == "" ){
            $( "#snoop_result").empty().append( "<span style='color:red'>Username or password incorrect</span>" ); 
            ShowLogin();
        }else{
            $( "#snoop_result").empty(); 
            
        }
 }  
    
    
 function Logout(){
     var url = "http://localhost/snoop/admin/logout_api.php"; // $form.attr( "action" );
var posting = $.post( url, { username: window.snoop_var_username    } );
// Put the results in a div
posting.done(function( data ) {
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "checked";
 if(data.indexOf("success")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "login_attempted";
        Update_authentication_ui();
 }else if(data.indexOf("loggedin")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "checked";
     Update_authentication_ui();
 }else if(data.indexOf("failed")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "login_attempted";
     Update_authentication_ui();
 }else if(data.indexOf("expired")> -1){
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "checked";
     Update_authentication_ui();
     
 }else if(data.indexOf("loggedout")> -1){
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "loggedout";
     Update_authentication_ui();
     
 }; 

     
    
});
     
 }  
    
    
    
 function Check_Auth(){
     var url = "http://localhost/snoop/admin/check_auth_api.php"; // $form.attr( "action" );
var posting = $.post( url, { username: window.snoop_var_username    } );
// Put the results in a div
posting.done(function( data ) {
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "checked";
 if(data.indexOf("success")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "login_attempted";
        Update_authentication_ui();
 }else if(data.indexOf("loggedin")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "checked";
     Update_authentication_ui();
 }else if(data.indexOf("failed")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "login_attempted";
     Update_authentication_ui();
 }else if(data.indexOf("expired")> -1){
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "checked";
     Update_authentication_ui();
     
 }else if(data.indexOf("loggedout")> -1){
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "loggedout";
     Update_authentication_ui();
     
 }; 

     
    
});
     
 }  
       
    
    
    
    
    
    
// Attach a submit handler to the form
$( "#loginForm" ).submit(function( event ) {
    HideLogin();
    
// Stop form from submitting normally
event.preventDefault();
// Get some values from elements on the page:
var $form = $( this );
var _username = $form.find( "input[name='username']" ).val();
var _password = $form.find( "input[name='passwd']" ).val();
var url = "http://localhost/snoop/admin/login_api.php"; // $form.attr( "action" );
// Send the data using post
var posting = $.post( url, { username: _username, passwd: _password } );
// Put the results in a div
posting.done(function( data ) {
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "checked";
 if(data.indexOf("success")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "login_attempted";
        Update_authentication_ui();
 }else if(data.indexOf("loggedin")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "checked";
     Update_authentication_ui();
 }else if(data.indexOf("failed")> -1){
        window.snoop_var_username = data.split("||")[1];
        window.snoop_var_user_type = data.split("||")[2];
        window.snoop_var_last_authentication_status = "login_attempted";
     Update_authentication_ui();
 }else if(data.indexOf("expired")> -1){
        window.snoop_var_username = "";
        window.snoop_var_user_type = "";
        window.snoop_var_last_authentication_status = "checked";
     Update_authentication_ui();
     
 }; 

     
    
});
});
    
    
    
    
    
    
    
Check_Auth();    
    
    
    
    
    
    
    
