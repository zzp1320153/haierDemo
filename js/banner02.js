define(["jquery"], function($){
    function bannerTab02(){
        $.ajax({
            type: "get",
            url: "../data/banner02.json",
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node = $(`
                        <li>
                            <div class="banner02_left">
                                <p>${arr[i].id}</p>
                                <p>${arr[i].title}</p>
                                <div>${arr[i].model}</div>
                            </div>
                            <a href="#${i}">
                                <img src="${arr[i].img}" alt="">
                            </a>
                            <div class="banner02_right">
                                <p>${arr[i].advantages[0]}</p>
                                <p>${arr[i].advantages[1]}</p>
                                <p>${arr[i].advantages[2]}</p>
                            </div>
                            <div class="more">了解更多</div>
                            <div class="price">
                                <p>参考价￥<span>${arr[i].price}</span></p>
                            </div>
                        </li>
                    `)
                    if(i == 1 || i ==6){
                        $(".banner02 ul").find("li").eq(1).find(".price").empty();
                        $(".banner02 ul").find("li").eq(6).find(".price").empty();
                    }
                    node.appendTo($("#main03 .banner02 ul"))
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })

        var oUl = $(".banner02").find("ul");
        var iNow = 0;
        var timer = null;
        var btnLeft = $(".btn_left");
        var btnRight = $(".btn_right");
         

        timer = setInterval(function(){
            iNow++;
            tab()
        },3000)

        $(".banner02").mouseenter(function(){
            clearInterval(timer);
        })

        $(".banner02").mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab()
            },3000)
        })

        btnLeft.click(function(){
            iNow--;
            tab();
        })

        btnRight.click(function(){
            iNow++;
            tab();
        })
        function tab(){
            oUl.animate({
                left: -iNow - 1 + `00%`
            }, 800, function(){
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
        bannerTab02:bannerTab02,
    }
})