define(["jquery"], function($){
    function goodsTab(){
        $.ajax({
            type: "get",
            url: "../data/data.json",
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node = $(`<div>${arr[i].title}</div>`);
                    if(i == 0){
                        node = $(`<div class="borderBlue">${arr[i].title}</div>`)
                    }
                    node.appendTo($("#main02 .selectGoods .allGoods"));
                }
            },
            error: function(msg){
                console.log(msg);
                
            }
        })

        var goodsBtn = $(".allGoods").find("div");
        //$(this).index()
        var iNow = 0;
        
        
        $(".allGoods").on("click", "div", function(){
            iNow = $(this).index();
            $(this).addClass("borderBlue").siblings().removeClass("borderBlue");
            $(".selectGoods ul").empty();
            $.ajax({
                type: "get",
                url: "../data/data.json",
                success: function(arr){
                    for(i = 0; i < 5; i++){
                        var node = $(`<li>
                        <a href="#${iNow}">
                            <img src="${arr[iNow].childs[i].img}" alt="">
                            <p>${arr[iNow].childs[i].name}</p>
                            <div>${arr[iNow].childs[i].model}</div>
                        </a>
                    </li>`);
                        node.appendTo(".selectGoods ul")
                        if(i == 0){
                            $(".selectGoods ul").find("li").addClass("goodsFirst")
                        }
                        if(iNow == 0 && i == 0){
                            $(".selectGoods ul").find("li.goodsFirst").css("background","#d8edfe")
                        }
                        if(i == 2){
                            $(".selectGoods ul").find("li").eq(2).addClass("goods02")
                        }
                        if(i == 3){
                            $(".selectGoods ul").find("li").eq(3).addClass("goods03")
                        }
                    }
                        
                }
            })
        })

        $(".selectGoods ul").on("mouseenter", "li", function(){
            $(this).find("a").addClass("borderBlue")
            if($(this).index() == 0){
                $(this).find("a img").stop().animate({
                    width: 500,
                    height: 500,
                    margin: 0
                },600)
            }else{
                $(this).find("a img").stop().animate({
                    height: 210,
                    margin: 0
                },600)
            }
        })
        $(".selectGoods ul").on("mouseleave", "li", function(){
            $(this).find("a").removeClass("borderBlue")
            if($(this).index() == 0){
                $(this).find("a img").stop().animate({
                    width: 460,
                    height: 460,
                    margin: 20
                },600)
            }else{
                $(this).find("a img").stop().animate({
                    height: 170,
                    margin: 20
                },600)
            }
        })
    }

    $.ajax({
        type: "get",
        url: "../data/data02.json",
        success: function(arr){
            for(var i = 0; i < arr.length; i++){
                var node = $(`<div>${arr[i].title}</div>`);
                if(i == 0){
                    node = $(`<div class="borderBlue">${arr[i].title}</div>`)
                }
                node.appendTo($("#main04 .hotGoods .hotAllGoods"));
            }
        },
        error: function(msg){
            console.log(msg);
            
        }

    })

    var goodsBtn = $(".hotAllGoods").find("div");
    //$(this).index()
    var iNow = 0;

    $(".hotAllGoods").on("click", "div", function(){
        iNow = $(this).index();
        $(this).addClass("borderBlue").siblings().removeClass("borderBlue");
        $(".hotGoods ul").empty();
        $.ajax({
            type: "get",
            url: "../data/data02.json",
            success: function(arr){
                for(i = 0; i < 3; i++){
                    var node = $(`<li>
                    <a href="#${iNow}">
                        <img src="${arr[iNow].childs[i].img}" alt="">
                        <p>${arr[iNow].childs[i].name}</p>
                        <div>${arr[iNow].childs[i].model}</div>
                    </a>
                    <div class="hotMore">了解更多</div>
                </li>`);
                    node.appendTo(".hotGoods ul")
                }   
            },
            error: function(msg){
                console.log(msg);
            }
        })
    })

    $(".hotGoods ul").on("mouseenter", "li", function(){
        // $(this).find("a").removeClass("borderBlue")
        $(this).find("a img").stop().animate({
            height: 360,
            margin: 0
        },600)
    })

    $(".hotGoods ul").on("mouseleave", "li", function(){
        // $(this).find("a").removeClass("borderBlue")
        $(this).find("a img").stop().animate({
            height: 320,
            margin: 20
        },600)
    })

    function activity(){
        $(".activity .house").mouseenter(function(){
            $(this).find("img").addClass("activeBorder").stop().animate({
                width: 620,
                margin: "80px 0"
            },800)
        })
        $(".activity .house").mouseleave(function(){
            $(this).find("img").removeClass("activeBorder").stop().animate({
                width: 600,
                margin: "90px 0",
                float: "none"
            },800)
        })

        $(".activity .place").mouseenter(function(){
            $(this).find("img").addClass("activeBorder").stop().animate({
                width: 632,
                margin: "70px 0"
            },800)
        })
        $(".activity .place").mouseleave(function(){
            $(this).find("img").removeClass("activeBorder").stop().animate({
                width: 612,
                margin: "80px 0",
            },800)
        })
    }

    function counsel(){
        $(".cs_left").mouseenter(function(){
            $(this).find("h3").css("color", "#0c5ca8");   
            $(this).find("p").css("color", "#0c5ca8");  
            $(this).css("borderBottom", "2px solid #0c5ca8")   
        })

        $(".cs_left").mouseleave(function(){
            $(this).find("h3").css("color", "#000");   
            $(this).find("p").css("color", "#000");
            $(this).css("borderBottom", "2px solid #c7d3d9")   
        })

        $(".cs_right ul").on("mouseenter", "li", function(){
            $(this).find("h3").css("color", "#0c5ca8");   
            $(this).find("p").css("color", "#0c5ca8");
            $(this).css("borderBottom", "2px solid #0c5ca8")   
        })

        $(".cs_right ul").on("mouseleave", "li", function(){
            $(this).find("h3").css("color", "#000");   
            $(this).find("p").css("color", "#000");
            $(this).css("borderBottom", "2px solid #c7d3d9")   
        })
    }

    function link(){
        $(".link ul").find("li").mouseenter(function(){
            $(this).find("a img").animate({
                width: "105%"
            },600)
        })
        $(".link ul").find("li").mouseleave(function(){
            $(this).find("a img").animate({
                width: "100%"
            },600)
        })
    }

    function footer(){
        $(".ft_bottom div").find("a").mouseenter(function(){
            $(this).css("color", "#0c5ca8")
        });
        $(".ft_bottom div").find("a").mouseleave(function(){
            $(this).css("color", "#444");
        })
    }
return{
        goodsTab: goodsTab,
        activity: activity,
        footer: footer,
        link: link,
        counsel: counsel,
    }
})

