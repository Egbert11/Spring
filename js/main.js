// 定义全局配置变量
var config;

function initConfig(){
    var topic_id = $('#topcid').attr('value');
    var config = {
        topic_id:topic_id,
        baseUrl: 'http://192.168.11.42:8389/marchactive',
        zuijiazhubo: '/zuiJiaZhuPoRanking',
        renqizhubo: '/get_reqizhupo_ranking',
        zuiqiangfensi: '/get_zuiqianfensi_ranking',
        zuijiazhubozongbang: '/get_zuiJiaZhuPo_all_ranking',
        fensigongxianbang: '/get_zuiqianfensi_all_ranking',
        allfriends: '/getAuthAllFriends'
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

function getRequestUrlByTabName(tabName){
    var path;
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
    return path;
}

function getUidUrl(){
    return path = config.baseUrl + config.allfriends;
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

function fetchRankingLeftList(tabName, url){
    $.ajax({
            type: 'GET',
            url: url,
            data: {topic_id: config.topic_id},
            dataType: 'json',
            success: function(data){
                if(data.code == 0){
                    if(tabName == 'nav1' || tabName == 'nav2' || tabName == 'nav4'){
                        $('.total-rank-panel .nav1').addClass('active');
                        $('.total-rank-panel .nav3').removeClass('active');

                        var parent = $('.total-rank-panel .nav1 .panel-left ul');
                        parent.empty();
                        $.each(data.users, function(index, user){
                            var li = $('<li><a href="#" class="panel-left-a" title="'+user.nickName+'" name="'+user.uid+'"></a></li>');
                            var username = String.mySubStr(user.nickName, 16);
                            if(index == 0){
                                li.find('a').append('<span class="icon img-no1 ib"></span>');
                                li.find('a').append('<span class="number ib">'+ user.level+'</span>');
                                li.find('a').append('<span class="star ib"></span>');
                                li.find('a').append('<span class="field no1 ib">'+username+'</span>');
                            }else if(index == 1){
                                li.find('a').append('<span class="icon img-no2 ib"></span>');
                                li.find('a').append('<span class="number ib">'+ user.level+'</span>');
                                li.find('a').append('<span class="star ib"></span>');
                                li.find('a').append('<span class="field no2 ib">'+username+'</span>');
                            }else if(index == 2){
                                li.find('a').append('<span class="icon img-no3 ib"></span>');
                                li.find('a').append('<span class="number ib">'+ user.level+'</span>');
                                li.find('a').append('<span class="star ib"></span>');
                                li.find('a').append('<span class="field no3 ib">'+username+'</span>');
                            }else if(index == 3){
                                li.find('a').append('<span class="icon img-no4 ib"></span>');
                                li.find('a').append('<span class="number ib">'+ user.level+'</span>');
                                li.find('a').append('<span class="star ib"></span>');
                                li.find('a').append('<span class="field no1 ib">'+username+'</span>');
                            }else if(index == 4){
                                li.find('a').append('<span class="icon img-no5 ib"></span>');
                                li.find('a').append('<span class="number ib">'+ user.level+'</span>');
                                li.find('a').append('<span class="star ib"></span>');
                                li.find('a').append('<span class="field no1 ib">'+username+'</span>');
                            }
                            parent.append(li);
                        });
                        // 默认获取第一项列表的数据
                        var uid = $('.total-rank-panel .active .panel-left ul li a:first').attr('name');
                        fetchRankingRightListByUid(tabName, uid);
                    }else{
                        // nav3, nav5
                        $('.total-rank-panel .nav1').removeClass('active');
                        $('.total-rank-panel .nav3').addClass('active');

                        var rank = $('.total-rank-panel .nav3 ');
                        var friend = data.users;
                        for(var i = 1; i <= friend.length; i++)
                        {
                            rank.find('.exponent'+i+' p').text(String.mySubStr(friend[i-1].nickName, 16));
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

function fetchRankingRightListByUid(tabName, uid){
    var url = getUidUrl();
    var data = {uid: uid};
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        dataType: 'json',
        success: function(data){
            if(data.code == 0){
                var friend = data.users;
                var rightPanel = $(".total-rank-panel .active .panel-right");
                for(var i = 1; i <= friend.length; i++)
                {
                    rightPanel.find('.exponent'+i+' p').text(friend[i-1].nickName);
                    rightPanel.find('.exponent'+i+' span.exp').text(friend[i-1].exp);
                }
            }else{
                console.log("fetching data by uid "+uid+" error --> "+data.reason);
            }
        },
        error: function(error){}
    });
}

$(function() {

    config = initConfig();

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

        if ($(this).attr("id") == 'total-rank'){
            $('p.task-status').css({'display':'none'});
            fetchRankingLeftList('nav1', getRequestUrlByTabName('nav1'));
        }
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
        var path = getRequestUrlByTabName(tabName);
        // 获取所点击的榜的数据
        fetchRankingLeftList(tabName, path);
    });

    var leftPanel = $('.total-rank-panel .active .panel-left ul');
    leftPanel.find("li a").bind("click", function(){
        leftPanel.find("li a").removeClass("active");
        $(this).addClass("active");

        var tabName = $('.total-rank-header ul li a.active').attr("id");
        var uid = '';
        //点击主播加载主播甜蜜指数排行
        fetchRankingRightListByUid(tabName, uid);
    });
});
