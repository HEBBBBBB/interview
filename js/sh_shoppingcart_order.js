
$(function(){
    
    $('.pay_box').on('click',function(){
        $('.pay_box').each(function(i,elem){
            $('.pay_box').find('input').eq(i).attr('checked',false);
        });

        $(this).find('input').attr('checked',true);

    });


    $('#pw').on('input propertychange',function(){
        var $reg = /^[A-Za-z0-9]+$/g;
        var $text = $('#pw').val().trim();
        
        if( $reg.test($text) ){
            $('#pw').val( $text );
        }else{
            $('#pw').val('');
        }
        

        
        var n = $('#pw').val().length ;  //已输入密码长度
        console.log(n);
        
        for(var i=0;i<6;i++){
            $('#pw_list').find('li').eq(i).html('');
        }
        for(var j=0;j<n;j++){
            $('#pw_list').find('li').eq(j).html('·');
        }
    });

    $('#cancel_btn').on('click',function(){
        $('#section5').hide();
    });

    $('#sum_btn').on('click',function(){
        $('#section5').show();
    });

});
