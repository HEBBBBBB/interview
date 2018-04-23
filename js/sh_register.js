//60s发送短信定时器(对象)
function massage(obj,t){

    obj.onOff = true;        //设置开关
    obj.onclick = function(){
        var n = t;

        if(obj.onOff == true){

            obj.onOff = false;      //按下以后关闭开关，避免效果重复

            clearInterval(obj.timer);

            obj.timer = setInterval(function(){
                n--;
                obj.value = n + 's后可重发';
                if(n==0){
                    obj.value = '重新发送';
                    obj.onOff = true;       //恢复开关
                    clearInterval(obj.timer);
                }
            },1000);
        }

    };
}