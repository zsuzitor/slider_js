var slider;

function up_slider() {
//из hidden берем количество объектов в списке
    var count_img_in_list__ = 7;//document.getElementById("count_id_slider_main_index").value;
    //расчитываем ширину экрана
    var height = document.documentElement.clientHeight;
    
    var block = document.getElementById("block_type_1_id");//блок в котором будет показан текущий слайд
    //ширина для слайда
    height = 800;
    block.style.height = height + 'px';
    //создаем объект слайдера и запускаем его
    //params :
    //1- количество объектов в списке
    //2- id блока в котором будут находиться активные объекты
    //3- часть id блока с очередным слайдом (id формируется: main_slider_one_slide_id0,main_slider_one_slide_id1 .....)
    //4- скорость прокрутки
    //5- ширина 1 слайда
    //6- интервал смены слайда (1000==1s)
	//7- тип слайдера true-горизонтальный false-вертикальный
    slider = new slider_horizontal(count_img_in_list__, "main_slider_3_view_block_id", "main_slider_one_slide_id", 1000, 800, 0,false);
    slider.reload();
}

document.addEventListener("DOMContentLoaded", up_slider);
