$(function() {
	var element = $(".tabnav");
	element.find("li a").bind("click", function() {
		// 从列表项中添加或删除active类
		element.find("li a").removeClass("active");
		$(this).addClass("active");

        // 给panel添加或删除active类
        var tabName = $(this).attr("name");
        $(".panels>[name]").removeClass("active");
        $(".panels>[name='" + tabName + "']").addClass("active");

        // 显示当前panel上方的箭头
        var x;
        if ($(this).attr("id") == 'meet')
            x = 83;
        else
            x = $(this).position().left + 83;
        $(".top-arrow").css({'left': x+'px'});

        refreshTip();
	});

    $('#meet').trigger("click");
	
	// 解决初次加载总榜点击最佳主播无效的问题
	var firstLeftPanel = $('.total-rank-panel .active .panel-left ul');
	firstLeftPanel.find("li a").bind("click", function(){
		firstLeftPanel.find("li a").removeClass("active");
		$(this).addClass("active");
});
	
    // 总榜tab
    var total_rank = $(".total-rank-header ul");
    total_rank.find("li a").bind("click", function(){
        // 从列表项中添加或删除active类
        total_rank.find("li a").removeClass("active");
        $(this).addClass("active");

        // 给total-rank-panel添加或删除active类
        var tabName = $(this).attr("id");
        $(".total-rank-panel>[class]").removeClass("active");
        $(".total-rank-panel>[class='" + tabName + "']").addClass("active");

        var leftPanel = $('.total-rank-panel .active .panel-left ul');
        leftPanel.find("li a").bind("click", function(){
            leftPanel.find("li a").removeClass("active");
            $(this).addClass("active");

            // to-do
            // refresh right panel
        });
    });
});

	

function refreshTip() {
   // 圈圈任务的提示框
    var active_panel = $("div.panels > div.active");
    active_panel.find("a.finishing").hover(
        function(){
            var whichCircle = $(this).attr('name');
            switch(whichCircle){
                case "1":
                    $(".tip").css({'left': '100px','top': '127px'});
                    break;
                case "2":
                    $(".tip").css({'left': '200px','top': '207px'});
                    break;
                case "3":
                    $(".tip").css({'left': '305px','top': '135px'});
                    break;
                case "4":
                    $(".tip").css({'left': '405px','top': '205px'});
                    break;
                case "5":
                    $(".tip").css({'left': '475px','top': '95px'});
                    break;
                case "6":
                    $(".tip").css({'left': '295px','top': '200px'});
                    break;
                case "7":
                    $(".tip").css({'left': '395px','top': '120px'});
                    break;
            }
            $(".tip").show();
			$(".tip").hover(function(){
				$(".tip").show();
			},
			function(){
				$(".tip").hide();
				return false;
			});
        },
        function(){
            $(".tip").hide();
            return false;
        }
    );
}
