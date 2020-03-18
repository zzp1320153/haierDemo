define(["jquery"], function($){
    function navTab(){
        $(".navTitle").mouseenter(function(){
            var num = $(this).find("ul li").size();
            $(this).find("ul").css({
                display: "block",
                bottom: -50 * num
            })
        })
        $(".navTitle").mouseleave(function(){
            $(this).find("ul").css("display", "none")
        })

        $.ajax({
            type: "get",
            url: "../data/nav.json",
            success: function(arr){
                $(".navTitle ul li").mouseenter(function(){
                    $(this).css("background", "#fff");
                    if($(this).parent().parent().index() == 1){
                    $(".navKind").empty().css("display", "block");
                    var num = $(this).index();
                        for(var i = 0; i < arr[num].id.length; i++){
                            var nodeId = $(`<div><strong><a href="#">${arr[num].id[i]}</a></strong><ol></ol></div>`);
                            nodeId.appendTo(".navKind");
                            var num2 = arr[num].variety[i];
                            for(var j = 0; j < num2.length; j++){
                                var nodeVariety = $(`<li><a href="#">${num2[j]}</a></li>`)
                                var fatherNode = $(".navKind div").find("ol").eq(i);
                                nodeVariety.appendTo(fatherNode) 
                            }
                        }
                    }
                })
                $(".navTitle ul li").mouseleave(function(){
                    $(this).css("background", "#f6f6f6")
                    $(".navKind").css("display", "none")
                })
            },
            error: function(msg){
                console.log(msg);
                
            }
        })
      
    }

    return{
        navTab:navTab,
    }
})