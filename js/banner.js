define(["jquery"], function($){
    function bannerTab(){
        $.ajax({
            type: "get",
            url: "../data/banner.json",
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node = $(`<li>
                        <a href="#${i}"><img src="${arr[i].img}" alt=""></a>
                    </li>`);
                    node.appendTo($("#main01 .banner01 ul"));
                }
            },
            error: function(msg){
                console.log(msg);    
            }
        })

        var aBtns = $(".banner01").find("ol li");
        var oUl = $(".banner01").find("ul");
        var iNow = 0;
        var timer = null;

        aBtns.click(function(){
            iNow = $(this).index();
            tab();
        })

        timer = setInterval(function(){
            iNow++;
            tab()
            

        },2000)

        $(".banner01").mouseenter(function(){
            clearInterval(timer);
        })

        $(".banner01").mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab()
            },2000)
        })

        var btnLeft = $(".banner01_left");
        var btnRight = $(".banner01_right");
        var add = true;

        btnRight.click(function(){
            iNow++;
            tab();
        })

        btnLeft.click(function(){
            iNow--;
            tab()
        })
        function tab(){
            aBtns.removeClass("active").eq(iNow).addClass("active");

            if(iNow == aBtns.size()){
                aBtns.eq(0).addClass("active");
            }

            oUl.animate({
                left: -iNow - 1 + `00%`
            }, 600, function(){
                if(iNow == 5){
                    oUl.css("left", "-100%");
                    iNow = 0;
                }
                if(iNow == -1){
                    oUl.css("left", "-500%");
                    iNow = 4;
                }
            })
        }
    }
    return{
        bannerTab: bannerTab,
    }
})