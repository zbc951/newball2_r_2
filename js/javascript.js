//專業版/新手版切換
$(function(){
    $('.newbut,.oldbut').click(function(){
        $('.newold').toggleClass('open')
    })
    $('.turnnew').click(function(){
        $('.oldbut').addClass('un');
        $('.newbut').removeClass('un');
        $('.new').addClass('display');
        $('.newold,.timesort').removeClass('open')
        $('.turnnew').addClass('active')
        $('.turnold').removeClass('active')
        $('.old,.let,.bgsm,.bettingbar').removeClass('display');
        $('.teachbut,.bettingbut').removeClass('active');
    });
    $('.turnold').click(function(){
        $('.newbut').addClass('un');
        $('.oldbut').removeClass('un');
        $('.old').addClass('display');
        $('.newold,.timesort').removeClass('open')
        $('.turnold').addClass('active')
        $('.turnnew').removeClass('active')
        $('.new,.let,.bgsm,.bettingbar').removeClass('display');
        $('.teachbut,.bettingbut').removeClass('active');
    });
});
//串關投注
$(function(){
    $('.opbut').click(function(){
        $('.bettingbar,.bettingbox').toggleClass('open');
    });
    $('.cur').click(function(){
        $('.bettingch').addClass('display');
        $('.filter').addClass('on');
    });
    $('.chbut').click(function(){
        $('.bettingch').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.bettingbut').click(function(){
        $('.bettingbar').toggleClass('display');
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $('.new,.result,.teach,.resultsearch').removeClass('display');
        $('.teachbut,.sort,.old,.complex').addClass('display');
        $('.newbut').addClass('un');
        $('.oldbut').removeClass('un');
        $('.turnold').addClass('active')
        $('.turnnew').removeClass('active')
        $('.newold,.timesort').removeClass('open')
    });
});
//登入/註冊頁
$(function(){
    $('.loginbut').click(function(){
        $('.login').addClass('display');
        $('.filter').addClass('on');
    });
    $('.loginbar button').click(function(){
        $('.login').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.loginbox button:nth-of-type(1)').click(function(){
        $('.login').removeClass('display');
        $('.signup').addClass('display');
    })
    $('.loginbox button:nth-of-type(2)').click(function(){
        $('.lobbyact').removeClass('turn');
        $('.head_but').addClass('turn');
        $('.login').removeClass('display');
        $('.filter').removeClass('on');

        $('.middle table').removeClass('turn');
        $('.li_hot').addClass('active');
        $('.li_hot').siblings().removeClass('active');
        $('.li_soc').children('a').attr('href','./html/balls/soccer.html');
        $('.li_base').children('a').attr('href','./html/balls/baseball.html');
        $('.li_bsk').children('a').attr('href','./html/balls/basketball.html');
        $('.li_race').children('a').attr('href','./html/balls/race.html');
        $('.li_esp').children('a').attr('href','./html/balls/esp.html');
        $('.li_stock').children('a').attr('href','./html/balls/stock.html');
        $('.li_lotto').children('a').attr('href','./html/balls/lotto.html');
        $('.li_iceball').children('a').attr('href','./html/balls/iceball.html');
        $('.li_tennis').children('a').attr('href','./html/balls/tennis.html');
        $('.li_snooker').children('a').attr('href','./html/balls/snooker.html');
        $('.li_vball').children('a').attr('href','./html/balls/vball.html');
        $('.li_racecar').children('a').attr('href','./html/balls/racecar.html');
        $('.li_badminton').children('a').attr('href','./html/balls/badminton.html');
        $('.li_beachball').children('a').attr('href','./html/balls/beachball.html');
        $('.li_football').children('a').attr('href','./html/balls/football.html');
        $('.li_tableball').children('a').attr('href','./html/balls/tableball.html');
    })
    $('.signupbut').click(function(){
        $('.signup').addClass('display');
        $('.filter').addClass('on');
    });
    $('.signupbar button').click(function(){
        $('.signup').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.lobbyact .dollar button:nth-of-type(1)').click(function(){
        if(window.location.href.indexOf("index") > 0 ){
            window.location.href = "./index.html"
        }
        window.location.href = "../../index.html"
    })
});
//比賽結果
$(function(){
    $('.resultbut').click(function(){
        $(this).addClass('active');
        $('.newold,.timesort').removeClass('open')
        $('.bettingbut,.allgame').removeClass('active');
        $('.sort,.resultsearch,.result').addClass('display');
        $('.new,.old,.sort,.let,.bgsm,.bettingbar,.teachbut,.complex').removeClass('display');
    });
});
//盤口教程
$(function(){
    $('.teachbut').click(function(){
        $('.letbut,.teachbut').addClass('active');
        $('.bgsmbut,.bettingbut,.allgame').removeClass('active');
        $('.let').addClass('display');
        $('.bgsm,.bettingbar,.new,.old').removeClass('display');
        $('.newbut').removeClass('un');
        $('.oldbut').addClass('un');
        $('.newold,.timesort').removeClass('open')
        $('.turnnew').addClass('active');
        $('.turnold').removeClass('active');
    });
    $('.letbut').click(function(){
        $('.letbut').addClass('active');
        $('.bgsmbut').removeClass('active');
        $('.let').addClass('display');
        $('.bgsm').removeClass('display');
    });
    $('.bgsmbut').click(function(){
        $('.letbut').removeClass('active');
        $('.bgsmbut').addClass('active');
        $('.let').removeClass('display');
        $('.bgsm').addClass('display');
    });
});
//內頁出入
$(function(){
    $('.inn_soc').click(function(){
        $('.topfix,.new,.old,.bettingbar,.chleague,.complex').removeClass('display');
        $('.innertopfix,.inner').addClass('display');
        $('.hideboard').addClass('innerboard');
        $('.newold,.timesort').removeClass('open')
    });
    $('.back').click(function(){
        $('.topfix,.new,.complex').addClass('display');
        $('.innertopfix,.inner').removeClass('display');
        $('.hideboard').removeClass('innerboard');
        $('.turnold').removeClass('active');
        $('.turnnew').addClass('active');
        $('.newbut').removeClass('un');
        $('.oldbut').addClass('un');
    });
});
//所有賽事
$(function(){
    $('.allgame').click(function(){
        $('.new,.sort,.teachbut,.complex').addClass('display');
        $('.old,.bettingbar,.teach,.result,.resultsearch').removeClass('display');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.newbut').removeClass('un');
        $('.oldbut').addClass('un');
        $('.newold,.timesort').removeClass('open');
        $('.turnnew').addClass('active');
        $('.turnold').removeClass('active');
    });
});
//即時注單
$(function(){
    $('.tbet').click(function(){
        if($(this).next().hasClass('op')){
            $(this).removeClass('display');
            $(this).next().addClass('display')
        };
    });
    $('.op').click(function(){
        $(this).prev().addClass('display');
        $(this).removeClass('display')
    });
});
//投注紀錄
$(function(){
    $('.recordbar').click(function(){
        if($(this).next().hasClass('recordbox')){
            $(this).next().toggleClass('display');
            $(this).toggleClass('open');
        };
    });
});
//交易紀錄
$(function(){
    $('.deal_li1').click(function(){
        $('.forli1').addClass('display');
        $('.forli1').siblings().removeClass('display');
    });
    $('.deal_li2').click(function(){
        $('.forli2').addClass('display');
        $('.forli2').siblings().removeClass('display');
    });
    $('.deal_li3').click(function(){
        $('.forli3').addClass('display');
        $('.forli3').siblings().removeClass('display');
    });
});
//我的錢包
$(function(){
    //無註冊信用卡彈出信息
    $('.remindbox button,.remindbar button').click(function(){
        $('.filter').removeClass('on');
        $('.cardremind').removeClass('display');
    });
    //銀行卡
    $('.creditcard').hover(function(){
        $(this).toggleClass('un');
    });
    $('.c1,.c2,.c3').click(function(){
        $(this).addClass('click');
        $(this).siblings().removeClass('click');
    });
    $('.cardbank button').click(function(){
        $('.cardbank').toggleClass('open');
    });
    $('.city button').click(function(){
        $('.city').toggleClass('open');
    });
    $('.county button').click(function(){
        $('.county').toggleClass('open');
    });
    $('.cardaddbar button').click(function(){
        $('.cardadd').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.add .creditcard').click(function(){
        $('.cardadd').addClass('display');
        $('.filter').addClass('on');
    });
});
//幫助中心
$(function(){
    $('.helpbar').click(function(){
        if($(this).next().hasClass('helpbox')){
            $(this).next().toggleClass('display');
            $(this).toggleClass('open');
        };
    });
    //頁面切換
    $('.help li:nth-of-type(1)').click(function(){
        $('.depositP').addClass('display');
        $('.depositP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(2)').click(function(){
        $('.transP').addClass('display');
        $('.transP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(3)').click(function(){
        $('.withP').addClass('display');
        $('.withP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(4)').click(function(){
        $('.betP').addClass('display');
        $('.betP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(5)').click(function(){
        $('.sportP').addClass('display');
        $('.sportP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(6)').click(function(){
        $('.skillP').addClass('display');
        $('.skillP').siblings().removeClass('display');
    });
    //sportP
    $('.sportbar button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.sportbar button:nth-of-type(1)').click(function(){
        $('.sportP table:nth-of-type(1)').addClass('display');
        $('.sportP table:nth-of-type(1)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(2)').click(function(){
        $('.sportP table:nth-of-type(2)').addClass('display');
        $('.sportP table:nth-of-type(2)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(3)').click(function(){
        $('.sportP table:nth-of-type(3)').addClass('display');
        $('.sportP table:nth-of-type(3)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(4)').click(function(){
        $('.sportP table:nth-of-type(4)').addClass('display');
        $('.sportP table:nth-of-type(4)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(5)').click(function(){
        $('.sportP table:nth-of-type(5)').addClass('display');
        $('.sportP table:nth-of-type(5)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(6)').click(function(){
        $('.sportP table:nth-of-type(6)').addClass('display');
        $('.sportP table:nth-of-type(6)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(7)').click(function(){
        $('.sportP table:nth-of-type(7)').addClass('display');
        $('.sportP table:nth-of-type(7)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(8)').click(function(){
        $('.sportP table:nth-of-type(8)').addClass('display');
        $('.sportP table:nth-of-type(8)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(9)').click(function(){
        $('.sportP table:nth-of-type(9)').addClass('display');
        $('.sportP table:nth-of-type(9)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(10)').click(function(){
        $('.sportP table:nth-of-type(10)').addClass('display');
        $('.sportP table:nth-of-type(10)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(11)').click(function(){
        $('.sportP table:nth-of-type(11)').addClass('display');
        $('.sportP table:nth-of-type(11)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(12)').click(function(){
        $('.sportP table:nth-of-type(12)').addClass('display');
        $('.sportP table:nth-of-type(12)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(13)').click(function(){
        $('.sportP table:nth-of-type(13)').addClass('display');
        $('.sportP table:nth-of-type(13)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(14)').click(function(){
        $('.sportP table:nth-of-type(14)').addClass('display');
        $('.sportP table:nth-of-type(14)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(15)').click(function(){
        $('.sportP table:nth-of-type(15)').addClass('display');
        $('.sportP table:nth-of-type(15)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(16)').click(function(){
        $('.sportP table:nth-of-type(16)').addClass('display');
        $('.sportP table:nth-of-type(16)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(17)').click(function(){
        $('.sportP table:nth-of-type(17)').addClass('display');
        $('.sportP table:nth-of-type(17)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(18)').click(function(){
        $('.sportP table:nth-of-type(18)').addClass('display');
        $('.sportP table:nth-of-type(18)').siblings().removeClass('display');
    });
});
//聯絡我們
$(function(){
    $('.callus li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.callus li:nth-of-type(1)').click(function(){
        $('.contact').addClass('display');
        $('.contact').siblings().removeClass('display');
    });
    $('.callus li:nth-of-type(2)').click(function(){
        $('.suggest').addClass('display');
        $('.suggest').siblings().removeClass('display');
    });
    $('.callus li:nth-of-type(3)').click(function(){
        $('.feeback').addClass('display');
        $('.feeback').siblings().removeClass('display');
    });
    $('.callus li:nth-of-type(4)').click(function(){
        $('.online').addClass('display');
        $('.online').siblings().removeClass('display');
    });
});
//消息中心
$(function(){
    $('.mes li:nth-of-type(1)').click(function(){
        $('.notice').addClass('display');
        $('.notice').siblings().removeClass('display');
        $('.mes button').removeClass('none');
        $('.mes_rowbut').removeClass('display')
    });
    $('.mes li:nth-of-type(2)').click(function(){
        $('.activity').addClass('display');
        $('.activity').siblings().removeClass('display');
        $('.mes button').addClass('none');
        $('.mes_rowbut').removeClass('display')
    });
    $('.mes li:nth-of-type(3)').click(function(){
        $('.announcement').addClass('display');
        $('.announcement').siblings().removeClass('display');
        $('.mes button').addClass('none');
        $('.mes_rowbut').removeClass('display')
    });
    $('.mes li:nth-of-type(4)').click(function(){
        $('.competition').addClass('display');
        $('.competition').siblings().removeClass('display');
        $('.mes button').addClass('none');
        $('.mes_rowbut').addClass('display')
    });
    $('.mes_rowbut').click(function(){
        if($(this).hasClass('lside')){
            $(this).removeClass('lside');
            $(this).addClass('rside');
        } else{
            $(this).removeClass('rside');
            $(this).addClass('lside');
        };
    });
    $('.editbut').click(function(){
        $('.helpbar').addClass('edit');
        $('.helpbar').next().addClass('editing');
        $('.fixbar').addClass('edit');
    });
    $('.cancelbut').click(function(){
        $('.fixbar').removeClass('edit');
        $('.helpbar').removeClass('edit');
        $('.helpbar').next().removeClass('editing');
    });
    $('.mes li').click(function(){
        $('.fixbar').removeClass('edit');
        $('.helpbar').removeClass('edit');
        $('.helpbar').next().removeClass('editing');
    });
});
//設定
$(function(){
    $('.rowbut').click(function(){
        if($(this).hasClass('lside')){
            $(this).removeClass('lside');
            $(this).addClass('rside');
        } else{
            $(this).removeClass('rside');
            $(this).addClass('lside');
        };
    });
});
//關於我們
$(function(){
    $('.about li:nth-of-type(1)').click(function(){
        $('.aboutus').addClass('display');
        $('.aboutus').siblings().removeClass('display');
    });
    $('.about li:nth-of-type(2)').click(function(){
        $('.aboutlink').addClass('display');
        $('.aboutlink').siblings().removeClass('display');
    });
});
//取款
$(function(){
    $('.withdrawl input').focus(function(){
        $(this).addClass('focus');
        $('.withdrawl button').addClass('focus');
    });
    $('.withdrawl input').blur(function(){
        $(this).removeClass('focus');
        $('.withdrawl button').removeClass('focus');
    });
});
//轉點
$(function(){
    $('.transpoint ul button').click(function(){
        $(this).closest('ul').toggleClass('open')
    })
    $('.trans .rowbut').click(function(){
        $(this).toggleClass('turn');
    })
    $('.sword input').focus(function(){
        $(this).addClass('focus');
        $('.sword button').addClass('focus');
    });
    $('.sword input').blur(function(){
        $(this).removeClass('focus');
        $('.sword button').removeClass('focus');
    });
});
//存款
$(function(){
    $('.paybut').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.moneybut').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.tnetcard button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.dbox input').focus(function(){
        $(this).addClass('focus');
        $('.dbox button').addClass('focus');
    });
    $('.dbox input').blur(function(){
        $(this).removeClass('focus');
        $('.dbox button').removeClass('focus');
    });
    $('.bank').click(function(){
        $('.tbank').addClass('display');
        $('.tbank').siblings().removeClass('display');
    })
    $('.num').click(function(){
        $('.tnum').addClass('display');
        $('.tnum').siblings().removeClass('display');
    })
    $('.netcard').click(function(){
        $('.tnetcard').addClass('display');
        $('.tnetcard').siblings().removeClass('display');
    })
})
//優惠頁
$(function(){
    $('.discount .window button').click(function(){
        $($(this).closest('div')).next().toggleClass('open');
        $($(this).closest('div')).next().siblings().removeClass('open');
    })
})
//時間排序
$(function(){
    $('.timesortbut,.leaguesortbut').click(function(){
        $('.timesort').toggleClass('open')
    })
    $('.timesort li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.timesort').removeClass('open')
    })
    $('.timebut').click(function(){
        $('.timesortbut').removeClass('un');
        $('.leaguesortbut').addClass('un');
    })
    $('.leaguebut').click(function(){
        $('.leaguesortbut').removeClass('un');
        $('.timesortbut').addClass('un');
    })
})
//串關計算機
$(function(){
    $('.calbtn').click(function(){
        $('.calculator').addClass('display');
        $('.filter').addClass('on');
    })
    $('.calbar button').click(function(){
        $('.calculator').removeClass('display');
        $('.filter').removeClass('on');
    })
})

//right房間切換
$(function(){
    $('.liveBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
        $('.livelist').addClass('open');
        $('.chatroom').removeClass('open');
    });
    $('.StatusBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
        $('.chatroom').addClass('open');
        $('.livelist').removeClass('open');
    });
    //直播賽事選單開關
    $('.livelist li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//球頭換算表
$(function(){
    $('.conversionBtn').click(function(){
        $('.filter,.conversionBox').addClass('display');
    })
    $('.conversionBox button').click(function(){
        $('.filter,.conversionBox').removeClass('display');
    })
})

//設定
$(function(){
    $('.controlBtn').click(function(){
        $('.filter').addClass('display');
        $('.controlBox').addClass('display');
    })
    $('.Handicap .eu').click(function(){
        $('.Handicap').removeClass('rSide');
        $('.Handicap').addClass('lSide');
    })
    $('.Handicap .hk').click(function(){
        $('.Handicap').removeClass('lSide');
        $('.Handicap').addClass('rSide');
    })
    $('.Theme .light').click(function(){
        $('.Theme').removeClass('rSide');
        $('.Theme').addClass('lSide');
    })
    $('.Theme .dark').click(function(){
        $('.Theme').removeClass('lSide');
        $('.Theme').addClass('rSide');
    })
    $('.Desktop .on').click(function(){
        $('.Desktop').removeClass('rSide');
        $('.Desktop').addClass('lSide');
    })
    $('.Desktop .off').click(function(){
        $('.Desktop').removeClass('lSide');
        $('.Desktop').addClass('rSide');
    })
    $('.Email .on').click(function(){
        $('.Email').removeClass('rSide');
        $('.Email').addClass('lSide');
    })
    $('.Email .off').click(function(){
        $('.Email').removeClass('lSide');
        $('.Email').addClass('rSide');
    })
    $('.cancelBtn').click(function(){
        $('.filter').removeClass('display');
        $('.controlBox').removeClass('display');
    })
})

//選擇聯盟
$(function(){
    $('.chooseLeague span').click(function(){
        $('.chleague').toggleClass('display');
    })
})

//一般投注
$(function(){
    $('.playBorad button').click(function(){
        $('.filter,.norbetting').addClass('display');
        $(this).addClass('active');
    })

    $('.norcancelbtn').click(function(){
        $('.norbetting,.filter').removeClass('display');
        $('.playBorad button').removeClass('active');
    })

    $('.decideBtn').click(function(){
        $('.norbetting').removeClass('display');
        $('.norbettingCheck').addClass('display');
    })

    $('.checkCancelBtn').click(function(){
        $('.norbettingCheck,.filter').removeClass('display');
        $('.playBorad button').removeClass('active');
    })
})

//左列效果
$(function(){
    $('.left li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.smallList').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//登入登出切換
$(function(){
    $('.loginBtn').click(function(){
        $('.logged').removeClass('display');
        $('.loggedIn').addClass('display');
    })
    $('.logoutBtn').click(function(){
        $('.logged').addClass('display');
        $('.loggedIn').removeClass('display');
    })
})

//fixside
$(function(){
    // var wWD = window.innerWidth;
    //     if(wWD <= 1460) {
    //         $('.fixside').addClass('rwd');
    //     } else {
    //         $('.fixside').removeClass('rwd');
    //     }
    // $(window).resize(function(){
    //     var wWD = window.innerWidth;
    //     if(wWD <= 1460) {
    //         $('.fixside').addClass('rwd');
    //     } else {
    //         $('.fixside').removeClass('rwd');
    //     }
    // })

    $('.searchbut').click(function(){
        $(this).toggleClass('active');
        $('.search').toggleClass('open');
    });
    $('.searchbox li').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $(this).next('div').toggleClass('open');
        $(this).next('div').siblings().removeClass('open');
    })
    $('.hamBtn').click(function(){
        $(this).toggleClass('active')
        $('.fun').toggleClass('open');
    })
});

//首頁時間列
$(function(){
    $('.timeSelect .date').click(function(){
        $('.moreTimeList').toggleClass('display');
    })
})

//共用

//修改密碼窗
$(function(){
    $('.changebut').click(function(){
        $('.filter').addClass('on');
        $('.passwordchange').addClass('display');
    });
    $('.changebar button').click(function(){
        $('.filter').removeClass('on');
        $('.passwordchange').removeClass('display');
    });
});

//radio單擊取消
$(function(){
    $('input:radio').click(function(){
        var $radio = $(this);
        if ($radio.data('checked')){
          $radio.prop('checked', false);
          $radio.data('checked', false);
        } else{
          $radio.prop('checked', true);
          $radio.data('checked', true);
        }
    });
});

//cube
$(function(){
    $('.cube').click(function(){
        $(this).toggleClass('active');
    });
});

//left自動高度
$(document).ready(function () {
    //預設高度
    var leftNav = $(".left");
    var wH = window.innerHeight;
    leftNav.css("height", (String(wH - 110) + "px"));
    //自適應高度
    $(window).resize(function () {
        var leftNav = $(".left");
        var wH = window.innerHeight;
        leftNav.css("height", (String(wH - 110) + "px"));
    });
});

// middle自動高度
$(document).ready(function () {
    var middleNav = $(".middle");
    var wH = window.innerHeight;
    middleNav.css("height", (String(wH - 110) + "px"));
    $(window).resize(function () {
        var middleNav = $(".middle");
        var wH = window.innerHeight;
        middleNav.css("height", (String(wH - 110) + "px"));
    });
});

// myself自動高度
$(document).ready(function () {
    var middleNav = $(".myself");
    var wH = window.innerHeight;
    middleNav.css("height", (String(wH - 260) + "px"));
    $(window).resize(function () {
        var middleNav = $(".myself");
        var wH = window.innerHeight;
        middleNav.css("height", (String(wH - 260) + "px"));
    });
});

// right自動高度
$(document).ready(function () {
    var rightNav = $(".right");
    var wH = window.innerHeight;
    rightNav.css("height", (String(wH - 110) + "px"));
    $(window).resize(function () {
        var rightNav = $(".right");
        var wH = window.innerHeight;
        rightNav.css("height", (String(wH - 110) + "px"));
    });
});

// rightlivelist自動高度
$(document).ready(function () {
    var livelistNav = $(".livelist");
    var wH = window.innerHeight;
    livelistNav.css("height", (String(wH - 525) + "px"));
    $(window).resize(function () {
        var livelistNav = $(".livelist");
        var wH = window.innerHeight;
        livelistNav.css("height", (String(wH - 525) + "px"));
    });

    if($('.room div').hasClass('onebut')) {
         livelistNav.css("height", (String(wH - 412) + "px"));
        $(window).resize(function () {
            var livelistNav = $(".livelist");
            var wH = window.innerHeight;
            livelistNav.css("height", (String(wH - 412) + "px"));
        });
    }
});

// rightchatroom自動高度
$(document).ready(function () {
    var bettingStatusNav = $(".bettingStatus");
    var wH = window.innerHeight;
    bettingStatusNav.css("height", (String(wH - 525) + "px"));
    $(window).resize(function () {
        var bettingStatusNav = $(".bettingStatus");
        var wH = window.innerHeight;
        bettingStatusNav.css("height", (String(wH - 525) + "px"));
    });
});

//middle全版型自動寬度
$(function(){
    var wWD = window.innerWidth;
    if(wWD == 1920) {
        $('.middle').css('width',(String(1270) + 'px'));
        $('.topfix,.hideboard').css('width',(String(1260) + 'px'));
        $('.playBorad').removeClass('hide1 hide2 hide3');
    } else if(wWD < 1920 && wWD >= 1840) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard').css('width',(String(wWD - 660) + 'px'));
        $('.playBorad').removeClass('hide1');
    } else if(wWD < 1840 && wWD >= 1700) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard').css('width',(String(wWD - 660) + 'px'));
        $('.playBorad').addClass('hide1');
        $('.playBorad').removeClass('hide2');
    } else if(wWD < 1700 && wWD >= 1560) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard').css('width',(String(wWD - 660) + 'px'));
        $('.playBorad').addClass('hide1 hide2');
        $('.playBorad').removeClass('hide3');
    } else {
        $('.marqueeBox').css('width',(String(59) + '%'));
        $('.middle').css('width',(String(880) + 'px'));
        $('.topfix,.hideboard').css('width',(String(870) + 'px'));
        $('.playBorad').addClass('hide1 hide2 hide3');
        $('body').css('overflow-x','auto');
    }

    if(wWD == 1920) {
        $('.chleague').css('width',(String(1260) + 'px'));
    } else if(wWD < 1920 && wWD > 1460) {
        $('.chleague').css('width',(String(wWD - 660) + 'px'));
    } else {
        $('.chleague').css('width',(String(870) + 'px'));
    }
    $(window).resize(function(){
        var wWD = window.innerWidth;
    if(wWD == 1920) {
        $('.middle').css('width',(String(1270) + 'px'));
        $('.topfix,.hideboard').css('width',(String(1260) + 'px'));
        $('.playBorad').removeClass('hide1 hide2 hide3');
    } else if(wWD < 1920 && wWD >= 1840) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard').css('width',(String(wWD - 660) + 'px'));
        $('.playBorad').removeClass('hide1');
    } else if(wWD < 1840 && wWD >= 1700) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard').css('width',(String(wWD - 660) + 'px'));
        $('.playBorad').addClass('hide1');
        $('.playBorad').removeClass('hide2');
    } else if(wWD < 1700 && wWD >= 1560) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard').css('width',(String(wWD - 660) + 'px'));
        $('.playBorad').addClass('hide1 hide2');
        $('.playBorad').removeClass('hide3');
    } else {
        $('.marqueeBox').css('width',(String(59) + '%'));
        $('.middle').css('width',(String(880) + 'px'));
        $('.topfix,.hideboard').css('width',(String(870) + 'px'));
        $('.playBorad').addClass('hide1 hide2 hide3');
        $('body').css('overflow-x','auto');
    }

        if(wWD == 1920) {
            $('.chleague').css('width',(String(1260) + 'px'));
        } else if(wWD < 1920 && wWD > 1460) {
            $('.chleague').css('width',(String(wWD - 660) + 'px'));
        } else {
            $('.chleague').css('width',(String(870) + 'px'));
        }
    })
})

//disable鎖圖
$(function(){
    var txt1 = "<p>text</p>";
    if($('.playBorad button').hasClass('disable')) {
        $('.disable').children('span').addClass('fas fa-lock');
        $('.disable').children('span').text("");
        $('.disable').append(txt1);
    }

    $('.playBorad button').has('i').children('p').css('display','none');
})