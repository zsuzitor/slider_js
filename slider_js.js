class Slider_ {

    constructor(count_img_in_list_, id_main_block_, part_id_one_img_, speed_load_, width_slide_,height_slide_, timer_change_,horizontal_bool_,object_name_) {
        this.count_img_in_list = count_img_in_list_;
        this.id_main_block = id_main_block_;
        this.part_id_one_img = part_id_one_img_;
        this.speed_load = speed_load_;
		this.width_slide=width_slide_;
		this.height_slide=height_slide_;
        //this.size_one_image = size_one_image_;
		
		
        this.horizontal_bool=horizontal_bool_;
		this.object_name=object_name_;
		
		
        this.current_num_img = 0;
        this.activated_slider = false;
        this.bias = 0;
        this.start;
        this.timer;
        //
        this.timer_change = timer_change_;
        this.interval_changes;
        //this.timer_changes;

    }

    //-----

    load_sl() {
		var slider=this;
        var div_ = document.getElementById("main_slider_3_view_block_id");
        if (slider.current_num_img < 0) {
            slider.current_num_img = +slider.count_img_in_list + +slider.current_num_img;
        }
        var img = document.getElementById(slider.part_id_one_img + (slider.current_num_img - 1));
        //alert(part_id_one_img + (current_num_img - 1));
        if (img != null) {
if(slider.horizontal_bool){
	 div_.innerHTML += "<div class='div_inline_block' style='width:"+slider.width_slide+"px;'"+">" + img.innerHTML + "</div>"
}
else{
	 div_.innerHTML += "<div style='height:"+slider.height_slide+"px;'"+">" + img.innerHTML + "</div>"
}
             }
        else {
            //с конца
            img = document.getElementById(slider.part_id_one_img + (slider.count_img_in_list - 1));
           if(slider.horizontal_bool){
	 div_.innerHTML += "<div class='div_inline_block' style='width:"+slider.width_slide+"px;'"+">" + img.innerHTML + "</div>"
}
else{
	 div_.innerHTML += "<div style='height:"+slider.height_slide+"px;'"+">" + img.innerHTML + "</div>"
}}
        img = document.getElementById(slider.part_id_one_img + slider.current_num_img);
        if (img != null) {
            if(slider.horizontal_bool){
	 div_.innerHTML += "<div class='div_inline_block' style='width:"+slider.width_slide+"px;'"+">" + img.innerHTML + "</div>"
}
else{
	 div_.innerHTML += "<div style='height:"+slider.height_slide+"px;'"+">" + img.innerHTML + "</div>"
}}
        else {
            slider.current_num_img = 0;
            img = document.getElementById(slider.part_id_one_img + slider.current_num_img);
            if(slider.horizontal_bool){
	 div_.innerHTML += "<div class='div_inline_block' style='width:"+slider.width_slide+"px;'"+">" + img.innerHTML + "</div>"
}
else{
	 div_.innerHTML += "<div style='height:"+slider.height_slide+"px;'"+">" + img.innerHTML + "</div>"
}}
        img = document.getElementById(slider.part_id_one_img + (slider.current_num_img + 1));
        if (img != null) {
            if(slider.horizontal_bool){
	 div_.innerHTML += "<div class='div_inline_block' style='width:"+slider.width_slide+"px;'"+">" + img.innerHTML + "</div>"
}
else{
	 div_.innerHTML += "<div style='height:"+slider.height_slide+"px;'"+">" + img.innerHTML + "</div>"
}}
        else {
            img = document.getElementById(slider.part_id_one_img + 0);
            if(slider.horizontal_bool){
	 div_.innerHTML += "<div class='div_inline_block' style='width:"+slider.width_slide+"px;'"+">" + img.innerHTML + "</div>"
}
else{
	 div_.innerHTML += "<div style='height:"+slider.height_slide+"px;'"+">" + img.innerHTML + "</div>"
}}

        
    }
	up(){
		var slider=this;
		var main= document.getElementById(slider.id_main_block);
		var str="";
		str=" <div id='block_type_1_id' class='block_type_1 div_inline_block' style='height:";
		str+=slider.height_slide+"px; width:"+slider.width_slide+"px;'";
		
		
		str+="><div id='main_slider_3_view_block_id' style='";
		if(slider.horizontal_bool){
			str+="height:100%; width:300%;";
		}
		else{
			str+="height:300%; width:100%;";
		}
		str+="'></div></div>";
		main.innerHTML=str;
		slider.reload();
	}
    reload() {
		var slider=this;
        var div_ = document.getElementById("main_slider_3_view_block_id");
		if(slider.horizontal_bool){
			slider.bias = -slider.width_slide;
		}
		else{
			slider.bias = -slider.height_slide;
		}
        
		
if(slider.horizontal_bool){
	div_.style.left = slider.bias + 'px';
}
else{
	div_.style.top = slider.bias + 'px';
}
        
        div_.innerHTML = "";
        slider.load_sl();
        slider.activated_slider = false;

		//добавление кнопок перехода
var str="<div id='test_id' class='test'>"
for(var i=0;i<slider.count_img_in_list;++i){
	//
	var tmp="<div  class='test_block"
	if(slider.horizontal_bool){
			tmp+=" div_inline_block";
		}
		tmp+="' onclick='"+slider.object_name+".num_slide";
	tmp+="("+i+")'";
	tmp+=">";
	if(i==slider.current_num_img){
	tmp+="<div class='test_block12'></div>";	
	}
	tmp+="</div>";
	str+=tmp;
}
str+="</div>";

div_.innerHTML+=str;
var but =document.getElementById("test_id");
if(slider.horizontal_bool){
	but.style.top='0px';
but.style.left=slider.width_slide+20 +'px';
}
else{
	but.style.top=slider.height_slide+20 +'px';
but.style.left=20 +'px';
}

//добавление кнопок перехода: влево вправо
str="<div id='tttt_id'";
if(!slider.horizontal_bool){
	str+=" class='hhjjj'";
}


str+=">";
str+="<div class='tttt'>";
str+="<div class='hhhhhh div_inline_block' onclick='"+slider.object_name+".prev()'></div>";

str+="<div class='hhhhhh1 div_inline_block' onclick='"+slider.object_name+".next()'></div>";

//str+=">";

str+="</div></div>";

div_.innerHTML+=str;
but =document.getElementById("tttt_id");
if(slider.horizontal_bool){
	but.style.left=slider.width_slide*2-200+"px";
	but.style.top=slider.height_slide-100+"px";
}
else{
	but.style.top=slider.height_slide*2-150+"px";
	but.style.left=slider.width_slide-150+"px";
}


//
        if (slider.timer_change != 0) {
            slider.interval_changes = setInterval(function () {
                slider.next();
            }, slider.timer_change);
        }

    }
	num_slide(num){
		var slider=this;
		slider.current_num_img=num;
		//var div_1 = document.getElementById(slider.img_3_block_id);
		 //div_1.innerHTML = "";
		//setTimeout(()=>{slider.reload();},50);
		slider.reload();
		
	}
    action_slider(a) {
var slider=this;
        if (!slider.activated_slider) {
            var element = document.getElementById("main_slider_3_view_block_id");
            slider.activated_slider = true;
            slider.start = Date.now();

            slider.timer = setInterval(function () {

                var timePassed = Date.now() - slider.start;

                if (timePassed >= slider.speed_load) {
                    clearInterval(slider.timer);
                    if (a) {
                        ++slider.current_num_img;
                    }
                    else {
                        --slider.current_num_img;
                    }
                    slider.reload();
                    return;
                }



                if (a) {
if(slider.horizontal_bool){
	 slider.bias -= ((slider.width_slide * 20) / slider.speed_load);
			
		}
		else{
			slider.bias -= ((slider.height_slide * 20) / slider.speed_load);
		}
                   

                }
                else {
					
					if(slider.horizontal_bool){
	 slider.bias += ((slider.width_slide * 20) / slider.speed_load);
			
		}
		else{
			 slider.bias += ((slider.height_slide * 20) / slider.speed_load);
		}
                   
                }
				
if(slider.horizontal_bool){
	element.style.left = slider.bias + 'px';
}
else{
	element.style.top = slider.bias + 'px';
	
}
                

            }, 20);

        }

    }
	clear_button(){
		var but =document.getElementById("test_id");
		but.innerHTML="";
		but =document.getElementById("tttt_id");
		but.innerHTML="";
	}
    next() {
		var slider=this;
		slider.clear_button();
        clearTimeout(slider.interval_changes);
        slider.action_slider(true);

    }
    prev() {
		var slider=this;
		slider.clear_button();
        clearTimeout(slider.interval_changes);
        slider.action_slider(false);

    }
}
