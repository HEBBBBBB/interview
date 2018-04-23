$(function(){
    start();     //初始化 所有都为false

    $('.product_list').on('click',function(){   //点击单个

        var _this = $(this);
        if(_this.attr('onOff')==='true'){
            _this.attr('onOff',false);
            _this.find('div').eq(0).attr('class','btn_round fl');

        }else{
            _this.attr('onOff',true);
            _this.find('div').eq(0).attr('class','btn_round_click fl');
        }


        if( $('.product_list[onOff="true"]').get().length == $('.product_list').get().length ){  //算出已被选择的有多少个
            $('#btn_all').attr('class','btn_round_click fl');
        }else{
            $('#btn_all').attr('class','btn_round fl');
        }
    });

    $('#btn_all').on('click',function(){    //点击全选

        if( $('.product_list[onOff="true"]').get().length == $('.product_list').get().length){  //如果已被选择个数等于所有个数，全部取消选择，全选为false
            
            start(); //取消全选样式

        }else{           //所有没选中或者部分没选择时：全选

            btn_allT(); //全选样式
        }
    });

    var plus_minus = $('.product_list').find('input');      

    plus_minus.on('click',function(ev){             //点击加减商品

        ev.stopPropagation();       //阻止冒泡

        var n = $(this).closest('div').find('span').eq(3).html();       //获取商品数量

        if( $(this).val()==='-' ){
            // console.log(n);

            if( n > 2 ){
                n--;
            }else{
                n = 1;
            }
           
        }else{
            n++;
        }

        if( n < 2 ){
            $(this).addClass('plus-minus-min');
        }else{
            $(this).prev().removeClass('plus-minus-min');
        }

        $(this).closest('div').find('span').eq(3).html(n);  
    });

    




    $('#sum_rs_cancel').on('click',function(){             //点击，删除选中的商品

        $('#product_list').find('.product_list[onOff="true"]').remove();

    });

    




    // $('#rightside').click(function(){
    
    //     $('.product_list').each(function(i,elem){

    //         n = $('.product_list').eq(i).find('span').eq(3).text().replace('×','')-0; 

    //         $('.product_list').eq(i).find('span').eq(3).html(n);
    //         $('.product_list').eq(i).find('span').eq(3).css('marginRight','4rem');

    //         var plus = $('<div class="plus-minus">+</div>');    //创造‘加’‘减’按钮
    //         var minus = $('<div class="plus-minus">-</div>');
    //         var r = $('.product_list').eq(i).find('span').eq(3).outerWidth(true)+ 24 + 'px';
            
    //         plus.appendTo($('.product_list').eq(i).find('div').eq(2)).css('right','0');
    //         minus.appendTo($('.product_list').eq(i).find('div').eq(2)).css('right',r);

    //         var plus = $('.product_list').eq(1).find('div').eq(2).find('input').eq(1);
    //         var minus = $('.product_list').eq(1).find('div').eq(2).find('input').eq(0);

    //         plus.click(function(){      //点击加号按钮

    //             n = $(this).find('span').eq(3).text().replace('×','')-0;  
    //             console.log(n);     
    //             n++;
    //             $(this).find('span').eq(3).html(n);
    //         });

    //         minus.click(function(){      //点击减号号按钮
    //             n = $(this).find('span').eq(3).text().replace('×','')-0;     
    //             if(n>1){
    //                 n--;
    //                 $(this).removeClass('plus-minus-min');
    //                 $(this).addClass('plus-minus');
                    
    //             }else{
    //                 n = 1;
    //                 $(this).removeClass('plus-minus');
    //                 $(this).addClass('plus-minus-min');
    //             }
    //             $(this).find('span').eq(3).html(n);
                
    //         });         

    //     });

    //     // $('#rightside').attr('onOff',true);
    // });


    function btn_allT(){        //全选样式

        start();

        $('.product_list').each(function(i,elem){
            $('.product_list').eq(i).attr('onOff',true);
            $('.product_list').eq(i).find('div').eq(0).attr('class','btn_round_click fl');
        });

        $('#btn_all').attr('class','btn_round_click fl');
    }

    function start(){       //初始化

        $('.product_list').each(function(i,elem){
            $('.product_list').eq(i).attr('onOff',false);
            $('.product_list').eq(i).find('div').eq(0).attr('class','btn_round fl');
        });
        $('#btn_all').attr('class','btn_round fl');
    }
});
