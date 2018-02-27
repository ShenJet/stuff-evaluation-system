/**
 * Created by hjl on 2015/12/24.
 */
$(function(){
    $(".my-star-rater").rating({
        "step":1.0,
        "size":"sm",
        showClear: false,
        showCaption: false
    }).on('rating.hover', function(event, val, caption) {
//                    console.log("hover...");
        appendCaption($(event.currentTarget), val);
    }).on('rating.change', function(event, value, caption) {
//                    console.log("change");
        $(event.currentTarget).attr("currVal", value);
    }).on('rating.hoverleave', function(event, target) {
//                    console.log("hoverleave");
        var $starInput = $(event.currentTarget);
        var val = $starInput.attr("currVal");
        appendCaption($starInput, val);
    });
});

/**
 * 追加自定义 Caption 文字标签到 star 控件后面
 * @param $starInput star input 标签
 * @param val star 值
 */
function appendCaption($starInput,val){
//                console.log("appendCaption...");
//                console.log($starInput.attr("data-key"));
    var $starParent = $starInput.parents(".star-rating");
    $starParent.find(".caption").remove();
    if(val){
        var text = "<span class='caption' style='color: red;font-weight: bolder;'>"+val+"分</span>";
        if(val > 0){
            var key = $starInput.attr("data-key");
            text += "<span class='caption' style='color: black;'> - " + dataSet[key][val-1] + "</span>";
        }
        $starParent.append(text);
    }
}