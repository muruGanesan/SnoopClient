   
/************** SNOOP Core CSS ************

v0.1 Beta, 2017
Author: Samir Dash <sdash@redhat.com>
Based on Opensource project SNOOP (https://github.com/SNOOP-EcoSystem/)
MIT License

*******************************************/		
	
    var $noopCore = {

        
        $core_version:"0.1",
        $core_prod:"beta",
        $core_author:"Samir Dash", 
        $core_license: "MIT License", 
        $core_email: "sdash@redhat.com", 
        $core_publish: "2017",
        $core_repo: "https://github.com/SNOOP-EcoSystem/SnoopCore", 
      
        $coreconfig:{
            $coreconfig_snoop_frame_id:"snoop_frame",
            /*$coreconfig_snoop_frame:document.getElementById($noopCore.$coreconfig.$coreconfig_snoop_frame_id),
            $coreconfig_snoop_frame_target_window:$noopCore.$coreconfig.$coreconfig_snoop_frame.contentWindow,
            $coreconfig_snoop_frame_target_document:$noopCore.$coreconfig.$coreconfig_snoop_frame_target_window
            */
  
        },
        $coreuser:{
            $coreuser_username:"",
            $coreuser_last_login:"",
            $coreuser_preference_report_format:"pdf",/*pdf|text|doc*/
            $coreuser_email:"",
            
        },
        $coreglobal :{
            
            $coreglobal_current_url:"",
            $coreglobal_current_body_dom: "",
            $coreglobal_current_head_dom: "",
            $coreglobal_current_body_dom_array: [],
            
        },
        $coremethods_public:{
            $coremethods_public_reset: function(){ 
                   
                                    //$noopCore.$coreglobal.$coreglobal_current_body_dom_array = $noopCore.$coremethods_support.$coremethods_support_create_dom_array();
                 
                                
            },
            $coremethods_public_load_url:function(){},
            $coremethods_public_analyse_url:function(){},
            $coremethods_public_simulate_screenreader_manual:function(){},
            $coremethods_public_simulate_screenreader_auto:function(){},
            $coremethods_public_find_itle_attributes_issues:function(){},
            $coremethods_public_get_title_attributes_in_links:function(){},
            $coremethods_public_get_title_attributes_in_inputtext:function(){},
            $coremethods_public_get_title_attributes_in_inputpassword:function(){},
            $coremethods_public_get_title_attributes_in_textarea:function(){},
            $coremethods_public_get_title_attributes_in_all_textfieldsnareas:function(){},
            $coremethods_public_get_title_attributes_in_inputsubmit:function(){},
            $coremethods_public_get_title_attributes_in_inputbutton:function(){},
            $coremethods_public_get_title_attributes_in_button:function(){},
            $coremethods_public_get_title_attributes_in_all_inputnbuttons:function(){},
            $coremethods_public_find_tab_index_issues:function(){},
            
        },
        $coremethods_support:{
            
            
                                     
    
    
    
            $coremethods_support_get_screen_coordinate: function (obj, typeStr){

                                            var p = {};
                                            p.id=obj.id;
                                            p.type = typeStr;
                                            p.width = obj.offsetWidth;
                                            p.height = obj.offsetHeight
                                            p.x = obj.offsetLeft;
                                            p.y = obj.offsetTop;
                                            while (obj.offsetParent) {
                                            p.x = p.x + obj.offsetParent.offsetLeft;
                                            p.y = p.y + obj.offsetParent.offsetTop;
                                            if (obj == document.getElementsByTagName("body")[0]) {
                                            break;
                                            }
                                            else {
                                            obj = obj.offsetParent;
                                            }
                                            }
                                            return p;
            },
    
            
            $coremethods_support_create_dom_array:function(){
                
                
                            //$noopCore.$coreglobal_current_body_dom_array = 
            },
            $coremethods_support_create_dom_array:function(){
                
                    var input_Arr = $('input[type="text"],input[type="password"]').toArray();
                    var objsArr =[];
                    for(var i=0; i<input_Arr.length; i++){
                        objsArr.push($noopCore.$coremethods_support.$coremethods_support_get_screen_coordinate(input_Arr[i], 'input[type="text"],input[type="password"]'));
                        console.log(objsArr[i])
                    }
                
                
                //$noopCore.$coreglobal_current_body_dom_array = 
            },
            
            
            
            
    
    
    
    
    
    
    
    
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            $coremethods_support_analyse_url:function(){
                
            },
            $coremethods_support_load_url:function(){
                             $noopCore.$coreglobal_current_body_dom = $("body").html(); 
                             
            },
            $coremethods_support_change_url:function(){
                
            },
        },
        
     $core_init:function(){  
            
                                window.$noopCore = this;
                                $noopCore.$coremethods_public.$coremethods_public_reset(); 
                                return true;
        }
        
    };
    
    $noopCore.$core_init("$noopCore");
    
    
    
    $noopCore.$coremethods_support.$coremethods_support_create_dom_array();
    
   //alert($noopCore.$dom);  
    
   //alert($noopCore.b());   
        
     // alert($coreconfig.snoop_frame_target_document)  ;
        
        
        
        
