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
        allfriends: '/getAuthAllFriends',
        friends: '/getAuthFriends'
    }
    return config;
}

// 显示当前阶段
function showCurrentPeroid(){
    var showday = $('#c_showday').val();
    var day = parseInt(showday.split('-')[2]);
    if(day <= 11){
        $('#meet').trigger("click");
    }else if(day <= 18){
        $('#season').trigger("click");
    }else if(day <= 25){
        $('#dating').trigger("click");
    }

    if(new Date().Format("yyyy-MM-dd") == showday){
        showPlayerContribute(showday);
    }
}

//根据完成了的任务设置相应圆圈img的src
function updateFinishingCircleSrc(){
	var imgSrc = [
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OWsnsLD",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OWsnvDV",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/ONjEbaT",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OXYMiVT",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OHh8Wd9",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OHh4jt0",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OHhABSK",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/ONjEjaG",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OKbe82p",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OKUiEgo",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OWsnpV7",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/ONjE8Rs",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/ONjEFx2",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OWsnmza",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/ONjF7Qp",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OHhBuGy",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OVdc5tk",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OVdc0Db",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OVdbrbU",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OVdc2yY",
		"http://c.cotton.netease.com/buckets/2bQIVn/files/OHhAxUK"
	];
	var month = Date.getMonth();
	var day = Data.getDay();
	if ( month == 2 ) {
		for(var i = 5;i < day; i++)
		{
			if (i < 10) {
				$("a.finishing[name='dpac_2014_03_0"+ i +"'] .gift").attr('src',imgSrc[i-5]);
			}
			else {
				$("a.finishing[name='dpac_2014_03_"+ i +"'] .gift").attr('src',imgSrc[i-5]);
			}
		}
	}
	else {
		for(var i = 5;i <= 25; i++)
		{
			if (i < 10) {
				$("a.finishing[name='dpac_2014_03_0"+ i +"'] .gift").attr('src',imgSrc[i-5]);
			}
			else {
				$("a.finishing[name='dpac_2014_03_"+ i +"'] .gift").attr('src',imgSrc[i-5]);
			}
		}
	}
}

function refreshTip(){
    // 圈圈任务的提示框
    var active_panel = $("div.panels > div.active");
    active_panel.find("a.finishing").hover(
        function(){
            var whichCircle = $(this).attr('class').split(' ')[1];
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

function getUidUrl(tabName){
    var path;
    if(tabName == 'nav1')
        path = config.baseUrl + config.friends;
    else if(tabName == 'nav4')
        path = config.baseUrl + config.allfriends;
    return path;
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

function limitText(){
    $('li >span.text').each(function(){
        var tmp = mySubStr($(this).text(), 14);
        $(this).text(tmp);
    });
}

function liconcate(el, imgno, fieldno, level, username, tabName){
    el.find('a').append('<span class="icon img-'+ imgno +' ib"></span>');
    el.find('a').append('<span class="number ib">'+ level +'</span>');
    if(tabName == 'nav2')
        el.find('a').append('<span class="sweet ib"></span>');
    else
        el.find('a').append('<span class="star ib"></span>');
    el.find('a').append('<span class="field '+ fieldno + ' ib">'+username+'</span>');
}

function clearHideExponent(ele, n){
    ele.find('p').empty();
    ele.find('.exp').empty();
    for(var i = 1; i<=n; i++){
        ele.find('.exponent'+i).css({'display':'none'});
    }
}

function fetchRankingLeftList(tabName, url){
    $.ajax({
            type: 'GET',
            url: url,
            data: {topic_id: config.topic_id,time: new Date().getTime()},
            dataType: 'json',
            success: function(data){
                if(data.code == 0){
                    if(tabName == 'nav1' || tabName == 'nav4'){
                        $('.total-rank-panel .nav1').addClass('active');
                        $('.total-rank-panel .nav2').removeClass('active');
                        $('.total-rank-panel .nav3').removeClass('active');

                        var parent = $('.total-rank-panel .nav1 .panel-left ul');
                        parent.empty();
                        $.each(data.users, function(index, user){
                            var li = $('<li><a href="javascript:void(0);"' + ' onclick="fetchRankingRightListByUid(' + "'"+tabName + "'" +', '+ user.uid + ');" class="panel-left-a" title="'+user.nickName+'" name="'+user.uid+'"></a></li>');
                            var username = mySubStr(user.nickName, 14);
                            if(index == 0){
                                liconcate(li, 'no1', 'no1', user.level, username, tabName);
                            }else if(index == 1){
                                liconcate(li, 'no2', 'no2', user.level, username, tabName);
                            }else if(index == 2){
                                liconcate(li, 'no3', 'no3', user.level, username, tabName);
                            }else if(index == 3){
                                liconcate(li, 'no4', 'no1', user.level, username, tabName);
                            }else if(index == 4){
                                liconcate(li, 'no5', 'no1', user.level, username, tabName);
                            }
                            parent.append(li);
                        });

                        var leftPanel = $('.panel-left ul');
                        leftPanel.find("li a").bind("click", function(){
                            leftPanel.find("li a").removeClass("active");
                            $(this).addClass("active");
                        });
                        // 默认获取第一项列表的数据
                        var uid = $('.total-rank-panel .active .panel-left ul li a:first').attr('name');
                        $('.total-rank-panel .active .panel-left ul li a:first').addClass('active');
                        fetchRankingRightListByUid(tabName, uid);
                    }else if(tabName == 'nav2'){
                        // nav2
                        $('.total-rank-panel .nav1').removeClass('active');
                        $('.total-rank-panel .nav3').removeClass('active');
                        $('.total-rank-panel .nav2').addClass('active');

                        var rank = $('.total-rank-panel .nav2 ');
                        clearHideExponent(rank, 5);
                        $('.bg-nav3 .bg-label').text('房间人气主播排行');

                        var friend = data.users;
                        for(var i = 1; i <= friend.length; i++)
                        {
                            rank.find('.exponent'+i).css({'display':'block'});
                            rank.find('.exponent'+i+' p').attr('title', friend[i-1].nickName);
                            rank.find('.exponent'+i+' p').text(mySubStr(friend[i-1].nickName, 14));
                            rank.find('.exponent'+i+' span.exp').text(friend[i-1].level);
                        }
                    }else{
                        // nav3, nav5
                        $('.total-rank-panel .nav1').removeClass('active');
                        $('.total-rank-panel .nav2').removeClass('active');
                        $('.total-rank-panel .nav3').addClass('active');
                        var rank = $('.total-rank-panel .nav3 ');
                        clearHideExponent(rank, 5);

                        if(tabName == 'nav3')
                            $('.bg-nav3 .bg-label').text('最强粉丝贡献排行');
                        if(tabName == 'nav5')
                            $('.bg-nav3 .bg-label').text('最强粉丝贡献总榜');

                        var friend = data.users;
                        for(var i = 1; i <= friend.length; i++)
                        {
                            rank.find('.exponent'+i).css({'display':'block'});
                            rank.find('.exponent'+i+' p').attr('title', friend[i-1].nickName);
                            rank.find('.exponent'+i+' p').text(mySubStr(friend[i-1].nickName, 14));
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
    var url = getUidUrl(tabName);
    var data;
    if(tabName == 'nav1')
        data = {uid: uid, topic_id:config.topic_id, time: new Date().getTime()};
    else if(tabName == 'nav4')
        data = {uid: uid, time: new Date().getTime()};
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        dataType: 'json',
        success: function(data){
            if(data.code == 0){
                var rightPanel = $(".total-rank-panel .active .panel-right");
                clearHideExponent(rightPanel, 3);

                var friend = data.users;
                for(var i = 1; i <= friend.length; i++)
                {
                    rightPanel.find('.exponent'+i).css({'display':'block'});
                    rightPanel.find('.exponent'+i+' p').attr('title', friend[i-1].nickName);
                    rightPanel.find('.exponent'+i+' p').text(mySubStr(friend[i-1].nickName, 14));
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

        var showday = $('#c_showday').attr('value');
        var day = parseInt(showday.split('-')[2]);
        if(day <= 11){
            if(tabName == 'meet')
                showPlayerContribute(showday);
            else if(tabName == 'season')
                showPlayerContribute('2014-03-12');
            else if(tabName == 'dating')
                showPlayerContribute('2014-03-19');
        }else if(day <= 18){
            if(tabName == 'meet')
                showPlayerContribute('2014-03-05');
            else if(tabName == 'season')
                showPlayerContribute(showday);
            else if(tabName == 'dating')
                showPlayerContribute('2014-03-19');
        }else if(day <= 25){
            if(tabName == 'meet')
                showPlayerContribute('2014-03-05');
            else if(tabName == 'season')
                showPlayerContribute('2014-03-12');
            else if(tabName == 'dating')
                showPlayerContribute(showday);
        }
        refreshTip();
	});
	
	//更改已完成任务圆圈的图像
	updateFinishingCircleSrc();
    // 显示当前阶段
	showCurrentPeroid();
	refreshTip();

    limitText();

    $('.intro').click(function(){
        var external = window.external;
        external.ICC_OPENURL($(this).attr("href"));
        return false;
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
});
