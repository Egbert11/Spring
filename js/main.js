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
        var x = $(this).position().left + 83;
        $(".top-arrow").css({'left': x+'px'});
	});
	
	// 鼠标停留在圆圈上方显示提示框
	var circle = $(".task-dating");
	circle.find("li.circle-candy").mouseover(function() {
		circle.find("li ul").css("display","block");
	});
	circle.find("li.circle-candy").mouseout(function() {
		circle.find("li ul").css("display","none");
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
    });

    var leftPanel = $('.total-rank-panel .active .panel-left ul');
    leftPanel.find("li a").bind("click", function(){
       leftPanel.find("li a").removeClass("active");
        $(this).addClass('active');

        // to-do
        // refresh right panel
    });
});

