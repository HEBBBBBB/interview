$(function(){
    $('#star').on('click','li',function(){
        var n = $(this).index();
        console.log(n);

        for(var i=0;i<$('#star img').length;i++){
            $('#star img').eq(i).attr('src','../img/my/comment/star_grey.png')
        }
        
        for(var i=0;i<=n;i++){
            $('#star img').eq(i).attr('src','../img/my/comment/star_orange.png')
        }
    });
});