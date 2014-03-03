$(function() {
	var element = $(".tabnav");
	element.find("li a").bind("click", function() {
		// 从列表项中添加或删除active类
		element.find("li a").removeClass("active");
		$(this).addClass("active");
		$(this).animate({opacity:'0.7'},'slow');
		$(this).animate({opacity:'1'},'slow');
		
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

        if ($(this).attr("id") == 'total-rank')
            $('p.task-status').css({'display':'none'});
        else
            $('p.task-status').css({'display':'block'});
        refreshTip();
	});

    $('#meet').trigger("click");
	
	// 显示当前日期所属阶段
	var currentDate = new Date();
	var year = currentDate.getFullYear();  //当前年份：2014
	var month = currentDate.getMonth();    //当前月份：0-11
	var day = currentDate.getDate();       //当前日期：1-31
	var meeting = $(".task-meeting");
	var season = $(".task-season");
	var dating = $(".task-dating");
	if (year == 2014 && month == 2) {
		switch(day){
			case 5:
				meeting.find("[name='1']").addClass("processing");
				break;
			case 6:
				meeting.find("[name='1']").addClass("finishing");
				meeting.find("[name='2']").addClass("processing");
				break;
			case 7:
				meeting.find("[name='1']").addClass("finishing");
				meeting.find("[name='2']").addClass("finishing");
				meeting.find("[name='3']").addClass("processing");
				break;
			case 8:
				meeting.find("[name='1']").addClass("finishing");
				meeting.find("[name='2']").addClass("finishing");
				meeting.find("[name='3']").addClass("finishing");
				meeting.find("[name='4']").addClass("processing");
				break;
			case 9:
				meeting.find("[name='1']").addClass("finishing");
				meeting.find("[name='2']").addClass("finishing");
				meeting.find("[name='3']").addClass("finishing");
				meeting.find("[name='4']").addClass("finishing");
				meeting.find("[name='5']").addClass("processing");
				break;
			case 10:
				meeting.find("[name='1']").addClass("finishing");
				meeting.find("[name='2']").addClass("finishing");
				meeting.find("[name='3']").addClass("finishing");
				meeting.find("[name='4']").addClass("finishing");
				meeting.find("[name='5']").addClass("finishing");
				meeting.find("[name='6']").addClass("processing");
				break;
			case 11:
				meeting.find("[name='1']").addClass("finishing");
				meeting.find("[name='2']").addClass("finishing");
				meeting.find("[name='3']").addClass("finishing");
				meeting.find("[name='4']").addClass("finishing");
				meeting.find("[name='5']").addClass("finishing");
				meeting.find("[name='6']").addClass("finishing");
				meeting.find("[name='7']").addClass("processing");
				break;
			case 12:
				meeting.find("a").addClass("finishing");
				season.find("[name='1']").addClass("processing");
				break;
			case 13:
				meeting.find("a").addClass("finishing");
				season.find("[name='1']").addClass("finishing");
				season.find("[name='2']").addClass("processing");
				break;
			case 14:
				meeting.find("a").addClass("finishing");
				season.find("[name='1']").addClass("finishing");
				season.find("[name='2']").addClass("finishing");
				season.find("[name='3']").addClass("processing");
				break;
			case 15:
				meeting.find("a").addClass("finishing");
				season.find("[name='1']").addClass("finishing");
				season.find("[name='2']").addClass("finishing");
				season.find("[name='3']").addClass("finishing");
				season.find("[name='4']").addClass("processing");
				break;
			case 16:
				meeting.find("a").addClass("finishing");
				season.find("[name='1']").addClass("finishing");
				season.find("[name='2']").addClass("finishing");
				season.find("[name='3']").addClass("finishing");
				season.find("[name='4']").addClass("finishing");
				season.find("[name='5']").addClass("processing");
				break;
			case 17:
				meeting.find("a").addClass("finishing");
				season.find("[name='1']").addClass("finishing");
				season.find("[name='2']").addClass("finishing");
				season.find("[name='3']").addClass("finishing");
				season.find("[name='4']").addClass("finishing");
				season.find("[name='5']").addClass("finishing");
				season.find("[name='6']").addClass("processing");
				break;
			case 18:
				meeting.find("a").addClass("finishing");
				season.find("[name='1']").addClass("finishing");
				season.find("[name='2']").addClass("finishing");
				season.find("[name='3']").addClass("finishing");
				season.find("[name='4']").addClass("finishing");
				season.find("[name='5']").addClass("finishing");
				season.find("[name='6']").addClass("finishing");
				season.find("[name='7']").addClass("processing");
				break;
			case 19:
				meeting.find("a").addClass("finishing");
				season.find("a").addClass("finishing");
				dating.find("[name='1']").addClass("processing");
				break;
			case 20:
				meeting.find("a").addClass("finishing");
				season.find("a").addClass("finishing");
				dating.find("[name='1']").addClass("finishing");
				dating.find("[name='2']").addClass("processing");
				break;
			case 21:
				meeting.find("a").addClass("finishing");
				season.find("a").addClass("finishing");
				dating.find("[name='1']").addClass("finishing");
				dating.find("[name='2']").addClass("finishing");
				dating.find("[name='3']").addClass("processing");
				break;
			case 22:
				meeting.find("a").addClass("finishing");
				season.find("a").addClass("finishing");
				dating.find("[name='1']").addClass("finishing");
				dating.find("[name='2']").addClass("finishing");
				dating.find("[name='3']").addClass("finishing");
				dating.find("[name='4']").addClass("processing");
				break;
			case 23:
				meeting.find("a").addClass("finishing");
				season.find("a").addClass("finishing");
				dating.find("[name='1']").addClass("finishing");
				dating.find("[name='2']").addClass("finishing");
				dating.find("[name='3']").addClass("finishing");
				dating.find("[name='4']").addClass("finishing");
				dating.find("[name='5']").addClass("processing");
				break;
			case 24:
				meeting.find("a").addClass("finishing");
				season.find("a").addClass("finishing");
				dating.find("[name='1']").addClass("finishing");
				dating.find("[name='2']").addClass("finishing");
				dating.find("[name='3']").addClass("finishing");
				dating.find("[name='4']").addClass("finishing");
				dating.find("[name='5']").addClass("finishing");
				dating.find("[name='6']").addClass("processing");
				break;
			case 25:
				meeting.find("a").addClass("finishing");
				season.find("a").addClass("finishing");
				dating.find("[name='1']").addClass("finishing");
				dating.find("[name='2']").addClass("finishing");
				dating.find("[name='3']").addClass("finishing");
				dating.find("[name='4']").addClass("finishing");
				dating.find("[name='5']").addClass("finishing");
				dating.find("[name='6']").addClass("finishing");
				dating.find("[name='7']").addClass("processing");
				break;
			default:
				break;
		}
	}
	// 如果活动已过期，将所有状态都设为已完成
	if (month == 2 && day > 25 || month > 2){
		meeting.find("a").addClass("finishing");
		season.find("a").addClass("finishing");
		dating.find("a").addClass("finishing");
	}
	refreshTip();
	
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

            // refresh right panel
            $.ajax({
                type: 'GET',
                url: '',
                data: {},
                dataType: 'json',
                success: function(data){

                },
                error: function(error){

                }
            });
        });
    });
});


function refreshTip() {
   // 圈圈任务的提示框
    var active_panel = $("div.panels > div.active");
    active_panel.find("a.finishing").hover(
        function(){
            var whichCircle = $(this).attr('class').split(' ')[0];
            var circleId = $(this).attr('name');
            switch(whichCircle){
                case "circle-candy1":
                    $("#"+circleId).css({'left': '100px','top': '127px'});
                    break;
                case "circle-candy2":
                    $("#"+circleId).css({'left': '200px','top': '207px'});
                    break;
                case "circle-candy3":
                    $("#"+circleId).css({'left': '305px','top': '135px'});
                    break;
                case "circle-candy4":
                    $("#"+circleId).css({'left': '405px','top': '205px'});
                    break;
                case "circle-candy5":
                    $("#"+circleId).css({'left': '475px','top': '95px'});
                    break;
                case "circle-candy6":
                    $("#"+circleId).css({'left': '295px','top': '200px'});
                    break;
                case "circle-candy7":
                    $("#"+circleId).css({'left': '395px','top': '120px'});
                    break;
            }
            $("#"+circleId).show();
			$("#"+circleId).hover(function(){
				$("#"+circleId).show();
			},
			function(){
				$("#"+circleId).hide();
				return false;
			});
        },
        function(){
            var circleId = $(this).attr('name');
            $("#"+circleId).hide();
            return false;
        }
    );
}

// 点击圈圈，显示已经完成任务和正在进行任务的贡献榜
function showPlayerContribute(day){
    $(".zuijia").find("ul").css({'display':'none'});
    $(".renqi").find("ul").css({'display':'none'});
    $(".jiechu").find("ul").css({'display':'none'});
    // 显示当前圈圈的最佳主播 人气主播 杰出主播排行榜
    $(".ranks").find("ul."+day).css({'display':'block'});
}