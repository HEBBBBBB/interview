$(function(){
    var $use_address1 = $('#use_address1').find('ul');
    var $use_address2 = $('#use_address2').find('input');

    $use_address1.click(function(){
        $('#address_classification').css('display','block');    //打开城市选择
    });
    
    $('#main_header').find('a').click(function(){           //关闭城市选择
        $('#address_classification').css('display','none');
    });
    
    var $ul = $('#main_choice').find('ul');



    $ul.on('touchstart',function(ev){

        var _touch = ev.originalEvent.targetTouches[0];     
        var move = null;
        // var timer = null;
        var oT = $(this).offset().top
        var $startPage = _touch.clientY - oT;      //鼠标在对象内部距离

        // console.log( _touch.pageY );
        // console.log( $startPage );

        $(this).on('touchmove',function(ev){
            var _touch = ev.originalEvent.targetTouches[0];
            move = _touch.pageY - $startPage - $('#main_choice').offset().top;
            // console.log(move);
            $(this).css('top',move);
        });


        $(this).on('touchend',function(ev){
            var $li = $(this).find('li');
            var $li_top = null;
            var target_top = $('#main_choice').find('span').offset().top - $('#main_choice').offset().top;  //目标top值

            $li.each(function(i,elem){
                $li_top = $li.eq(i).offset().top - $('#main_choice').offset().top //相对于#main_choice的top值
                $li.eq(i).css('color','#666666');
                console.log( $li_top );

                if( $li_top >= 84 && $li_top <= 124 ){              //磁性媳妇

                    move = 103 - ( $li.height()*i );
                    console.log( move);
                    $li.eq(i).css('color','#333333');
                }
            });

            $(this).css('top',move);
            $(this).off('touchmove');
        });
        
    });





    $use_address2.focus(function(){             //点击value消失
        $(this).val('');
    });

    $use_address2.blur(function(){          //失去焦点时value
        if($use_address2.val() == ''){
            $use_address2.val('小区、街道、门牌等详细信息');
        }
    });

    
    
});