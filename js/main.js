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
			//默认点击第一项（活动最佳主播）
		//$(".total-rank-header ul li a#nav1").trigger("click");
    total_rank.find("li a").bind("click", function(){
        // 从列表项中添加或删除active类
        total_rank.find("li a").removeClass("active");
        $(this).addClass("active");
        // 给total-rank-panel添加或删除active类
        var tabName = $(this).attr("id");
        // 获取所点击的榜的数据
        var data, path;
        switch (tabName){
            case 'nav1':
                data = {topic_id: 1232001};
				path = "zuiJiaZhuPoRanking/";
				break;
            case 'nav2':
                data = {topic_id: 1232001};
				path = "get_reqizhupo_ranking/";
				break;
            case 'nav3':
                data = {topic_id: 1232001};
				path = "get_zuiqianfensi_ranking/";
				break;
            case 'nav4':
                data = {topic_id: 1232001};
				path = "get_zuiJiaZhuPo_all_ranking/";
				break;
            case 'nav5':
                data = {topic_id: 1232001};
				path = "get_zuiqianfensi_all_ranking/";
				break;
        }
		var users;
        $.ajax({
            type: 'GET',
            url: 'http://192.168.11.42:9292/marchactive/'+path,
            data: data,
            dataType: 'json',
            success: function(data){
				users = data.users;
				// nav1,nav2,nav4
				var left = $('.total-rank-panel .active .panel-left ul');
				left.find("li a#1 span.no1").text(users[0].nickName);
				left.find("li a#2 span.no2").text(users[1].nickName);
				left.find("li a#3 span.no3").text(users[2].nickName);
				left.find("li a#4 span.no1").text(users[3].nickName);
				left.find("li a#5 span.no1").text(users[4].nickName);
				left.find("li a#1 span.number").text(users[0].level);
				left.find("li a#2 span.number").text(users[1].level);
				left.find("li a#3 span.number").text(users[2].level);
				left.find("li a#4 span.number").text(users[3].level);
				left.find("li a#5 span.number").text(users[4].level);
				// nav3, nav5
				var rank = $('.total-rank-panel div.active');
				var friend = data.users;
				for(var i = 1; i <= friend.length; i++)
				{
					rank.find('.exponent'+i+' p').text(friend[i-1].playerName);
					rank.find('.exponent'+i+' span.exp').text(friend[i-1].exp);
				}
            },
            error: function(){}
        });
		
        $(".total-rank-panel>[class]").removeClass("active");
        $(".total-rank-panel>[class='" + tabName + "']").addClass("active");

        var leftPanel = $('.total-rank-panel .active .panel-left ul');
        leftPanel.find("li a").bind("click", function(){
            leftPanel.find("li a").removeClass("active");
            $(this).addClass("active");
			//默认点击列表第一项
			/*$(".total-rank-panel ul li a#1").trigger("click");*/
			var path;
			//点击主播加载主播甜蜜指数排行
			switch (tabName){
				case 'nav1':
					data['uid'] = users[0].uid;
					path = "getAuthFriends/";
					break;
				case 'nav2':
					data['uid'] = users[1].uid;
					path = "getAuthFriends/";
					break;
				case 'nav3':
					data['uid'] = users[2].uid;
					path = "getAuthFriends/";
					break;
				case 'nav4':
					data = {uid: users[3].uid};
					path = "getAuthAllFriends/";
					break;
				case 'nav5':
					data['uid'] = users[4].uid;
					path = "getAuthFriends/";
					break;
			}
            // refresh right panel
            $.ajax({
                type: 'GET',
                url: 'http://192.168.11.42:9292/marchactive/'+path,
                data: data,
                dataType: 'json',
                success: function(data){
					var friend = data.users;
					var rightPanel = $(".total-rank-panel .active .panel-right");
					for(var i = 1; i <= friend.length; i++)
					{
						rightPanel.find('.exponent'+i+' p').text(friend[i-1].playerName);
						rightPanel.find('.exponent'+i+' span.exp').text(friend[i-1].exp);
					}
                },
                error: function(error){

                }
            });
        });
		
    });
	
	//默认点击第一项（活动最佳主播）
	$(".total-rank-header ul li a#nav1").trigger("click");
	$(".total-rank-panel .active ul li a#1").trigger("click");
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
