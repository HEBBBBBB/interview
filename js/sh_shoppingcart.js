$(function(){
    
    var n = 0;
    var m = 0;
    var o = 0;
    var s = 0;
    var sum = null;
    var sumO = '结算';
    var arrS = null;

    start();     //初始化 所有都为false
    // btn_allT();    //全都为true，方便用户结算

    $('.product_list').on('click',function(){   //点击单个

        var _this = $(this);

        if(_this.attr('onOff')==='true'){
            _this.attr('onOff',false);
            _this.find('div').eq(0).attr('class','btn_round fl');

        }else{
            _this.attr('onOff',true);
            _this.find('div').eq(0).attr('class','btn_round_click fl');
        }
        
    
        sumS(_this);


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
                
    


    function sumS(obj){       //计算总价

        m = obj.find('.money').text().replace('￥','')-0;
        n = obj.find('.amount').text().replace('×','')-0;

        if(obj.attr('onOff')==='true'){
            console.log(m,n,s);

            s += (m*n);     //商品总价
            o += n ;        //商品总数量    

        }else{

            console.log(m,n,s);

            s -= (m*n);
            o -= n ;

        }

        makeString(s,o);
    }

    function makeString(s,o){       //整理结算数据

        if(s <= 0 || o <= 0){
            s = 0;
            o = 0;
        }

        s = Math.round(s*100)/100; //四舍五入保留两位小数


        arrS = s.toString().split('.');
        console.log(s);

        if( s == 0 ){                   //给价钱后面加'0'

            sum = '￥0.00';

        }else{

            if( arrS[1] === undefined || arrS[1].length == 0){
                sum = '￥'+ s + '.00';
            }else if(arrS[1].length == 1){
                sum = '￥'+ s + '0'
            }else{
                sum = '￥'+ s + '';
            }
        }

        if( o != 0 ){                   //结算后面加'总数量'
            sumO = '结算（'+ o +'）';
        }else{
            sumO = '结算';
        }

        $('#sum_ms').find('span').eq(1).html(sum);
        $('#sum_rs_btn').val(sumO);
    }



    function btn_allT(){        //全选样式

        start();

        $('.product_list').each(function(i,elem){
            $('.product_list').eq(i).attr('onOff',true);
            $('.product_list').eq(i).find('div').eq(0).attr('class','btn_round_click fl');
            sumS($('.product_list').eq(i));
        });

        $('#btn_all').attr('class','btn_round_click fl');
    }



    function start(){       //初始化

        $('.product_list').each(function(i,elem){
            $('.product_list').eq(i).attr('onOff',false);
            $('.product_list').eq(i).find('div').eq(0).attr('class','btn_round fl');
            sumS($('.product_list').eq(i));
        });

        s = 0;
        o = 0; 
        $('#btn_all').attr('class','btn_round fl');
    }

});