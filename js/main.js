function initConfig(){
    var config = {
        topic_id:1232001,
        baseUrl: 'http://192.168.11.42:9292/marchactive',
        zuijiazhubo: '/zuiJiaZhuPoRanking',
        renqizhubo: '/get_reqizhupo_ranking',
        zuiqiangfensi: '/get_zuiqianfensi_ranking',
        zuijiazhubozongbang: '/get_zuiJiaZhuPo_all_ranking',
        fensigongxianbang: '/get_zuiqianfensi_all_ranking'
    }
    return config;
}

function refreshTip(){
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
    $(".ranks").find("ul.dpac_"+day).css({'display':'block'});

    // 更新日期
    var current_show_day_id = $("#c_showday").val();
    $("#day_str_"+current_show_day_id).hide();
    $("#day_str_"+day).show();
    $("#c_showday").val(day);
}

// 初始化配置
var config = initConfig();

function fetchRankingLeftList(tabName, url){
    $.ajax({
            type: 'GET',
            url: url,
            data: {topic_id: config.topic_id},
            dataType: 'json',
            success: function(data){
                if(data.code == 0){
                    if(tabName == 'nav1' || tabName == 'nav2' || tabName == 'nav3'){
                        $('.total-rank-panel .nav1').addClass('active');
                        $('.total-rank-panel .nav3').removeClass('active');

                        var parent = $('.total-rank-panel .nav1 .panel-left ul');
                        parent.empty();
                        var temp;
                        $.each(data.users, function(index, user){
                            var li = $('<li><a href="#" class="panel-left-a"></a></li>');
                            if(index == 0){
                                li.append('<span class="icon img-no1 ib"></span>');
                                li.append('<span class="number ib">'+ user.level+'</span>');
                                li.append('<span class="star ib"></span>');
                                li.append('<span class="field no1 ib">'+user.nickName+'</span>');
                            }else if(index == 1){
                                li.append('<span class="icon img-no2 ib"></span>');
                                li.append('<span class="number ib">'+ user.level+'</span>');
                                li.append('<span class="star ib"></span>');
                                li.append('<span class="field no2 ib">'+user.nickName+'</span>');
                            }else if(index == 2){
                                li.append('<span class="icon img-no3 ib"></span>');
                                li.append('<span class="number ib">'+ user.level+'</span>');
                                li.append('<span class="star ib"></span>');
                                li.append('<span class="field no3 ib">'+user.nickName+'</span>');
                            }else if(index == 3){
                                li.append('<span class="icon img-no4 ib"></span>');
                                li.append('<span class="number ib">'+ user.level+'</span>');
                                li.append('<span class="star ib"></span>');
                                li.append('<span class="field no4 ib">'+user.nickName+'</span>');
                            }else if(index == 4){
                                li.append('<span class="icon img-no5 ib"></span>');
                                li.append('<span class="number ib">'+ user.level+'</span>');
                                li.append('<span class="star ib"></span>');
                                li.append('<span class="field no5 ib">'+user.nickName+'</span>');
                            }
                            temp += li;
                        });
                        parent.append(temp);
                    }else{
                        // nav3, nav5
                        $('.total-rank-panel .nav1').removeClass('active');
                        $('.total-rank-panel .nav3').addClass('active');

                        var rank = $('.total-rank-panel .nav3 ');
                        var friend = data.users;
                        for(var i = 1; i <= friend.length; i++)
                        {
                            rank.find('.exponent'+i+' p').text(friend[i-1].playerName);
                            rank.find('.exponent'+i+' span.exp').text(friend[i-1].exp);
                        }
                    }
                }else{
                    console.log("fetching "+tabName+" data error --> "+data.reason);
                }
            },
            error: function(){}
        });
}

function fetchRankingRightListByUid(uid){

}

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

        var tabName = $(this).attr("id");
        // 获取所点击的榜的数据
        var path = '';
        switch (tabName){
            case 'nav1':
				path = config.baseUrl + config.zuijiazhubo;
				break;
            case 'nav2':
				path = config.baseUrl + config.renqizhubo;
				break;
            case 'nav3':
				path = config.baseUrl + config.zuiqiangfensi;
				break;
            case 'nav4':
				path = config.baseUrl + config.zuijiazhubozongbang;
				break;
            case 'nav5':
				path = config.baseUrl + config.fensigongxianbang;
				break;
        }

        fetchRankingLeftList(tabName, path);

        $(".total-rank-panel>[class]").removeClass("active");
        $(".total-rank-panel>[class='" + tabName + "']").addClass("active");

        var leftPanel = $('.total-rank-panel .active .panel-left ul');
        leftPanel.find("li a").bind("click", function(){
            leftPanel.find("li a").removeClass("active");
            $(this).addClass("active");
			//默认点击列表第一项
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
});