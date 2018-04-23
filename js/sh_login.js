 //输入框清空(所选输入框，文案)
 function inputClean(obj,str,attr,fn){

    var reg = /^[0-9a-zA-Z]+$/;
    if(obj.type == 'text'){
        obj.onfocus= function(){
            if(obj.value == str){
                obj.value = '';
                obj.type = attr;
            }
        };

        obj.onblur = function(){
            if(obj.value == ''){
                obj.value = str;
                obj.type = 'text';
            }
            if(fn == 1){
                if(obj.value.length < 6){
                    alert("密码至少需要6个字符");
                    obj.value = '';
                }else{
                    if(!reg.test(obj.value)){
                        alert("密码不能填空格，可由英文字母和数字组成！");
                        obj.value == '';
                    }
                }
            }
        };
    }
}


function textareaClean(obj,str){
    obj.onfocus= function(){
        if(obj.value == str){
            obj.value = '';
        }
    };

    obj.onblur = function(){
        if(obj.value == ''){
            obj.value = str;
        }
    };
}

