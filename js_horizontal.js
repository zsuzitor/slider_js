var slider;

function up_slider() {
//из hidden берем количество объектов в списке
    var count_img_in_list__ = 7;//document.getElementById("count_id_slider_main_index").value;
    //расчитываем ширину экрана
    var width = document.documentElement.clientWidth;
    if (width < 960) {
        width = 960;
    }
    //var block = document.getElementById("block_type_1_id");//блок в котором будет показан текущий слайд
    //ширина для слайда
    width = width * 0.8 - width * 0.8 * 0.2;
    //block.style.width = width + 'px';
    //создаем объект слайдера и запускаем его
    //params :
    //1- количество объектов в списке
    //2- id блока в котором будут находиться активные объекты
    //3- часть id блока с очередным слайдом (id формируется: main_slider_one_slide_id0,main_slider_one_slide_id1 .....)
    //4- скорость прокрутки
    //5- ширина 1 слайда
    //6- интервал смены слайда (1000==1s)
	//7- тип слайдера true-горизонтальный false-вертикальный
    slider = new Slider_(count_img_in_list__, "bbbbbbbb", "main_slider_one_slide_id", 1000, width,300, 0,true,"slider");
    slider.up();
}

document.addEventListener("DOMContentLoaded", up_slider);
