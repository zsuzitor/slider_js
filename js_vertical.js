var slider;

function up_slider() {
//из hidden берем количество объектов в списке
    var count_img_in_list_ = 7;//document.getElementById("count_id_slider_main_index").value;
    
    
    //создаем объект слайдера и запускаем его
    //params :
    //1- количество объектов в списке
    //2- id блока в котором будет расположен слайдер
    //3- часть id блока с очередным слайдом (id формируется: main_slider_one_slide_id0,main_slider_one_slide_id1 .....)
    //4- скорость прокрутки
    //5- ширина 1 слайда
	//6- высота 1 слайда
    //7- интервал смены слайда (1000==1s)
	//8- тип слайдера true-горизонтальный false-вертикальный
	//9- имя объекта который создается (var slider=new Slider_();)
    slider = new Slider_(count_img_in_list_, "bbbbbbbb", "main_slider_one_slide_id", 1000, 300,800, 0,false,"slider");
    slider.up();
}

document.addEventListener("DOMContentLoaded", up_slider);
