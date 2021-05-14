    //上段

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
    $('.longBox input').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

    //左側

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

    //右側
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
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
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

    //首頁

//首頁時間列
$(function(){
    $('.timeSelect .date').click(function(){
        $('.moreTimeList').toggleClass('display');
    })
})

//首頁未登入效果
$(function(){
    $('.hotBtn').click(function(){
        $('.mainBox table').css('display','table');
    })

    $('.soccerBtn').click(function(){
        $('.soccer').css('display','table');
        $('.soccer').siblings().css('display','none');
    })

    $('.baseballBtn').click(function(){
        $('.baseball').css('display','table');
        $('.baseball').siblings().css('display','none');
    })

    $('.basketballBtn').click(function(){
        $('.basketball').css('display','table');
        $('.basketball').siblings().css('display','none');
    })

    $('.raceBtn').click(function(){
        $('.race').css('display','table');
        $('.race').siblings().css('display','none');
    })

    $('.espBtn').click(function(){
        $('.esp').siblings().css('display','none');
        $('.esp').css('display','table');
    })

    $('.stockBtn').click(function(){
        $('.stock').css('display','table');
        $('.stock').siblings().css('display','none');
    })

    $('.lottoBtn').click(function(){
        $('.lotto').siblings().css('display','none');
        $('.lotto').css('display','table');
    })

    $('.iceballBtn').click(function(){
        $('.iceball').css('display','table');
        $('.iceball').siblings().css('display','none');
    })

    $('.tennisBtn').click(function(){
        $('.tennis').css('display','table');
        $('.tennis').siblings().css('display','none');
    })

    $('.snookerBtn').click(function(){
        $('.snooker').css('display','table');
        $('.snooker').siblings().css('display','none');
    })

    $('.vballBtn').click(function(){
        $('.vball').css('display','table');
        $('.vball').siblings().css('display','none');
    })

    $('.racecarBtn').click(function(){
        $('.racecar').css('display','table');
        $('.racecar').siblings().css('display','none');
    })

    $('.badmintonBtn').click(function(){
        $('.badminton').css('display','table');
        $('.badminton').siblings().css('display','none');
    })

    $('.beachballBtn').click(function(){
        $('.beachball').css('display','table');
        $('.beachball').siblings().css('display','none');
    })

    $('.footballBtn').click(function(){
        $('.football').css('display','table');
        $('.football').siblings().css('display','none');
    })

    $('.tableballBtn').click(function(){
        $('.tableball').css('display','table');
        $('.tableball').siblings().css('display','none');
    })
})

//登入登出+註冊切換
$(function(){
    $('.loginBtn').click(function(){
        $('.logged').removeClass('display');
        $('.loggedIn').addClass('display');
        $('.soccerBtn a').attr('href','./html/balls/soccer.html');
        $('.baseballBtn a').attr('href','./html/balls/baseball.html');
        $('.basketballBtn a').attr('href','./html/balls/basketball.html');
        $('.raceBtn a').attr('href','./html/balls/race.html');
        $('.espBtn a').attr('href','./html/balls/esp.html');
        $('.stockBtn a').attr('href','./html/balls/stock.html');
        $('.lottoBtn a').attr('href','./html/balls/lotto.html');
        $('.iceballBtn a').attr('href','./html/balls/iceball.html');
        $('.tennisBtn a').attr('href','./html/balls/tennis.html');
        $('.snookerBtn a').attr('href','./html/balls/snooker.html');
        $('.vballBtn a').attr('href','./html/balls/vball.html');
        $('.racecarBtn a').attr('href','./html/balls/racecar.html');
        $('.badmintonBtn a').attr('href','./html/balls/badminton.html');
        $('.beachballBtn a').attr('href','./html/balls/beachball.html');
        $('.footballBtn a').attr('href','./html/balls/football.html');
        $('.tableballBtn a').attr('href','./html/balls/tableball.html');
        $('.filter,.unLogin').css('display','none')
        $('.headerlist li:nth-of-type(1) a').attr('href','./html/balls/soccer.html');
        $('.headerlist li:nth-of-type(3) a').attr('href','./html/balls/result.html');
        $('.headerlist li:nth-of-type(4) a').attr('href','./html/balls/teach.html');
        $('.headerlist li:nth-of-type(6) a').attr('href','./html/myself/mine.html');
    })

    $('.logoutBtn').click(function(){
        $('.logged').addClass('display');
        $('.loggedIn').removeClass('display');
    })

    $('.signupBtn').click(function(){
        $('.signupWindow,.filter').addClass('display');
    })

    $('.signupbar button,.signupbox button:nth-of-type(1)').click(function(){
        $('.signupWindow,.filter').removeClass('display');
    })

    $('.cantUse').click(function(){
        $('.filter,.unLogin').addClass('display');
    })

    $('.topBar button,.remindBox button').click(function(){
        $('.filter,.unLogin').removeClass('display');
    })
})

    //賽事比分頁

//選擇聯盟
$(function(){
    $('.chooseLeague span').click(function(){
        $('.chleague').toggleClass('display');
    })
})

//一般投注
$(function(){
    $('.playBoard button').click(function(){
        $('.filter,.norbetting').addClass('display');
        $(this).addClass('active');
    })

    $('.norcancelbtn').click(function(){
        $('.norbetting,.filter').removeClass('display');
        $('.playBoard button').removeClass('active');
    })

    $('.decideBtn').click(function(){
        $('.norbetting').removeClass('display');
        $('.norbettingCheck').addClass('display');
    })

    $('.checkCancelBtn').click(function(){
        $('.norbettingCheck,.filter').removeClass('display');
        $('.playBoard button').removeClass('active');
    })
})

//我的最愛切換
$(function(){
    $('.love').click(function(){
        $(this).addClass('active');
        $(this).closest('table').addClass('haveLove');
        $(this).closest('tr').addClass('myLove');
        if(window.location.href.indexOf("index") >= 0 ){
            $('.haveLove tr:nth-of-type(1),.haveLove tr:nth-of-type(2)').addClass('myLove')
        } else {
            $('.haveLove tr:nth-of-type(1)').addClass('myLove')
        }
    })
})

//修改密碼窗
$(function(){
    $('.changePassword').click(function(){
        $('.filter,.changePasswordWindow').addClass('display');
    });

    $('.changePasswordWindow .topbar button,.changePasswordWindow .box .cancelBtn').click(function(){
        $('.filter,.changePasswordWindow').removeClass('display');
    });
});

//內頁
$(function(){
    $('.innerBtn').click(function(){
        $('.inner,.inn').addClass('display');
        $('.topfix').addClass('innerMode')
        $('.mainBox,.nor').removeClass('display');
    });
    $('.back').click(function(){
        $('.inner,.inn').removeClass('display');
        $('.topfix').removeClass('innerMode')
        $('.mainBox,.nor').addClass('display');
    });
});

//disable鎖圖
$(function(){
    var txt1 = "<p>text</p>";
    if($('.playBoard button').hasClass('disable')) {
        $('.disable').children('span').addClass('fas fa-lock');
        $('.disable').children('span').text("");
        $('.disable').append(txt1);
    }

    $('.playBoard button').has('i').children('p').css('display','none');
})

//盤口教程
$(function(){
    $('.Soc_teach1').click(function(){
        $('.soccerTeach,.let').addClass('display');
        $('.soccerTeach,.let').siblings().removeClass('display');
    })

    $('.Soc_teach2').click(function(){
        $('.soccerTeach,.bgsm').addClass('display');
        $('.soccerTeach,.bgsm').siblings().removeClass('display');
    })

    $('.Base_teach1').click(function(){
        $('.baseballTeach,.let').addClass('display');
        $('.baseballTeach,.let').siblings().removeClass('display');
    })

    $('.Base_teach2').click(function(){
        $('.baseballTeach,.bgsm').addClass('display');
        $('.baseballTeach,.bgsm').siblings().removeClass('display');
    })

    $('.Bask_teach1').click(function(){
        $('.basketballTeach,.let').addClass('display');
        $('.basketballTeach,.let').siblings().removeClass('display');
    })

    $('.Bask_teach2').click(function(){
        $('.basketballTeach,.bgsm').addClass('display');
        $('.basketballTeach,.bgsm').siblings().removeClass('display');
    })
})

//串關計算機
$(function(){
    $('.calbtn').click(function(){
        $('.calculator,.filter').addClass('display');
    })
    $('.calbar button').click(function(){
        $('.calculator,.filter').removeClass('display');
    })
})

//串關投注
$(function(){
    $('.openBtn').click(function(){
        $('.bettingbar,.bettingbox').toggleClass('open');
    });

    $('.cur').click(function(){
        $('.bettingCheck,.filter').addClass('display');
    });

    $('.bettingCheck .cancelBtn').click(function(){
        $('.bettingCheck,.filter').removeClass('display');
    });
});

//球種篩選
$(function(){
    $('.selector').change(function(){
        if($(this).val() == 0){
            $('.playBoard').css('display','table');
        }
        if($(this).val() == 1){
            $('.soccer').siblings().css('display','none');
            $('.soccer').css('display','table');
        }
        if($(this).val() == 2){
            $('.baseball').siblings().css('display','none');
            $('.baseball').css('display','table');
        }
        if($(this).val() == 3){
            $('.basketball').siblings().css('display','none');
            $('.basketball').css('display','table');
        }
        if($(this).val() == 4){
            $('.race').siblings().css('display','none');
            $('.race').css('display','table');
        }
        if($(this).val() == 5){
            $('.esp').siblings().css('display','none');
            $('.esp').css('display','table');
        }
        if($(this).val() == 6){
            $('.stock').siblings().css('display','none');
            $('.stock').css('display','table');
        }
        if($(this).val() == 7){
            $('.lottery').siblings().css('display','none');
            $('.lottery').css('display','table');
        }
        if($(this).val() == 8){
            $('.iceball').siblings().css('display','none');
            $('.iceball').css('display','table');
        }
        if($(this).val() == 9){
            $('.tennis').siblings().css('display','none');
            $('.tennis').css('display','table');
        }
        if($(this).val() == 10){
            $('.snooker').siblings().css('display','none');
            $('.snooker').css('display','table');
        }
        if($(this).val() == 11){
            $('.vball').siblings().css('display','none');
            $('.vball').css('display','table');
        }
        if($(this).val() == 12){
            $('.racecar').siblings().css('display','none');
            $('.racecar').css('display','table');
        }
        if($(this).val() == 13){
            $('.badminton').siblings().css('display','none');
            $('.badminton').css('display','table');
        }
        if($(this).val() == 14){
            $('.beachball').siblings().css('display','none');
            $('.beachball').css('display','table');
        }
        if($(this).val() == 15){
            $('.football').siblings().css('display','none');
            $('.football').css('display','table');
        }
        if($(this).val() == 16){
            $('.tableball').siblings().css('display','none');
            $('.tableball').css('display','table');
        }
    })
})

    //我的頁面

//懸浮列fixbar ul選定效果
$(function(){
    $('.fixbar ul li,.teach li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//投注紀錄
$(function(){
    $('.recordbar').click(function(){
        if($(this).next().hasClass('recordbox')){
            $(this).next().toggleClass('display');
            $(this).toggleClass('open');
        };
    });

    $('.recordbox .bettingRecord,.bettingRecord.now').click(function(){
        $(this).next('.open').addClass('display');
        $(this).removeClass('display');
    })

    $('.recordbox .bettingRecord.open,.bettingRecord.now.open').click(function(){
        $(this).prev().addClass('display');
        $(this).removeClass('display');
    })
});

//交易紀錄
$(function(){
    $('.depositBtn').click(function(){
        $('.dealRecord.deposit').addClass('display');
        $('.dealRecord.deposit').siblings().removeClass('display');
    })

    $('.transferBtn').click(function(){
        $('.dealRecord.transfer').addClass('display');
        $('.dealRecord.transfer').siblings().removeClass('display');
    })

    $('.withdrawlBtn').click(function(){
        $('.dealRecord.withdrawl').addClass('display');
        $('.dealRecord.withdrawl').siblings().removeClass('display');
    })
})

//我的錢包
$(function(){
    //無註冊信用卡彈出信息
    $('.cardremind .topbar button,.cardremind .box button').click(function(){
        $('.filter').removeClass('display');
        $('.cardremind').removeClass('display');
    });

    //添加銀行卡
    $('.creditcardBtn').click(function(){
        $('.filter,.cardAdd').addClass('display');
    })

    $('.cardAdd .box button,.cardAdd .topbar button').click(function(){
        $('.filter,.cardAdd').removeClass('display');
    })

    //銀行卡點擊打勾
    $('.creditcardBtn.c1,.creditcardBtn.c2,.creditcardBtn.c3').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.filter,.cardAdd').removeClass('display');
    })
})

//幫助中心
$(function(){
    //展開列
    $('.helpbar').click(function(){
        if($(this).next().hasClass('helpbox')){
            $(this).next().toggleClass('display');
            $(this).toggleClass('open');
        };
    });

    //頁面切換
    $('.help1').click(function(){
        $('.depositP').addClass('display');
        $('.mineHideBoard').removeClass('sportBoard');
        $('.sportbar').removeClass('display');
        $('.depositP').siblings().removeClass('display');
    })
    $('.help2').click(function(){
        $('.transP').addClass('display');
        $('.mineHideBoard').removeClass('sportBoard');
        $('.sportbar').removeClass('display');
        $('.transP').siblings().removeClass('display');
    })
    $('.help3').click(function(){
        $('.withP').addClass('display');
        $('.mineHideBoard').removeClass('sportBoard');
        $('.sportbar').removeClass('display');
        $('.withP').siblings().removeClass('display');
    })
    $('.help4').click(function(){
        $('.betP').addClass('display');
        $('.mineHideBoard').removeClass('sportBoard');
        $('.sportbar').removeClass('display');
        $('.betP').siblings().removeClass('display');
    })
    $('.help6').click(function(){
        $('.skillP').addClass('display');
        $('.mineHideBoard').removeClass('sportBoard');
        $('.sportbar').removeClass('display');
        $('.skillP').siblings().removeClass('display');
    })

    //sportbar
    $('.sportbar button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.ruleB1').click(function(){
        $('.rule1').addClass('display');
        $('.rule1').siblings().removeClass('display');
    })
    $('.ruleB2').click(function(){
        $('.rule2').addClass('display');
        $('.rule2').siblings().removeClass('display');
    })
    $('.ruleB3').click(function(){
        $('.rule3').addClass('display');
        $('.rule3').siblings().removeClass('display');
    })
    $('.ruleB4').click(function(){
        $('.rule4').addClass('display');
        $('.rule4').siblings().removeClass('display');
    })
    $('.ruleB5').click(function(){
        $('.rule5').addClass('display');
        $('.rule5').siblings().removeClass('display');
    })
    $('.ruleB6').click(function(){
        $('.rule6').addClass('display');
        $('.rule6').siblings().removeClass('display');
    })
    $('.ruleB7').click(function(){
        $('.rule7').addClass('display');
        $('.rule7').siblings().removeClass('display');
    })
    $('.ruleB8').click(function(){
        $('.rule8').addClass('display');
        $('.rule8').siblings().removeClass('display');
    })
    $('.ruleB9').click(function(){
        $('.rule9').addClass('display');
        $('.rule9').siblings().removeClass('display');
    })
    $('.ruleB10').click(function(){
        $('.rule10').addClass('display');
        $('.rule10').siblings().removeClass('display');
    })
    $('.ruleB11').click(function(){
        $('.rule11').addClass('display');
        $('.rule11').siblings().removeClass('display');
    })
    $('.ruleB12').click(function(){
        $('.rule12').addClass('display');
        $('.rule12').siblings().removeClass('display');
    })
    $('.ruleB13').click(function(){
        $('.rule13').addClass('display');
        $('.rule13').siblings().removeClass('display');
    })
    $('.ruleB14').click(function(){
        $('.rule14').addClass('display');
        $('.rule14').siblings().removeClass('display');
    })
    $('.ruleB15').click(function(){
        $('.rule15').addClass('display');
        $('.rule15').siblings().removeClass('display');
    })
    $('.ruleB16').click(function(){
        $('.rule16').addClass('display');
        $('.rule16').siblings().removeClass('display');
    })
    $('.ruleB17').click(function(){
        $('.rule17').addClass('display');
        $('.rule17').siblings().removeClass('display');
    })
    $('.ruleB18').click(function(){
        $('.rule18').addClass('display');
        $('.rule18').siblings().removeClass('display');
    })
})

//消息中心
$(function(){
    $('.editbut').click(function(){
        $(this).removeClass('display');
        $('.helpbar,.helpbox').addClass('edit');
        $('.cancelbut,.delbut').addClass('display');
    });
    $('.fixbar li,.cancelbut').click(function(){
        $('.editbut').addClass('display');
        $('.helpbar,.helpbox').removeClass('edit');
        $('.cancelbut,.delbut').removeClass('display');
    });
    $('.mes1').click(function(){
        $('.notice,.editbut').addClass('display');
        $('.rowbutMes').removeClass('display');
        $('.notice').siblings().removeClass('display');
    })
    $('.mes2').click(function(){
        $('.activity').addClass('display');
        $('.editbut,.rowbutMes').removeClass('display');
        $('.activity').siblings().removeClass('display');
    })
    $('.mes3').click(function(){
        $('.announcement').addClass('display');
        $('.editbut,.rowbutMes').removeClass('display');
        $('.announcement').siblings().removeClass('display');
    })
    $('.mes4').click(function(){
        $('.competition,.rowbutMes').addClass('display');
        $('.editbut').removeClass('display');
        $('.competition').siblings().removeClass('display');
    })
    $('.rowbutMes').click(function(){
        if($(this).hasClass('lside')){
            $(this).removeClass('lside');
            $(this).addClass('rside');
        } else{
            $(this).removeClass('rside');
            $(this).addClass('lside');
        };
    });
});

//聯繫我們
$(function(){
    $('.fixbar .call1').click(function(){
        $('.callusBox').siblings().removeClass('display');
        $('.callusBox').addClass('display');
    })
    $('.fixbar .call2').click(function(){
        $('.problemBox').siblings().removeClass('display');
        $('.problemBox').addClass('display');
    })
    $('.fixbar .call3').click(function(){
        $('.feebackBox').siblings().removeClass('display');
        $('.feebackBox').addClass('display');
    })
    $('.fixbar .call4').click(function(){
        $('.onlineCilentBox').siblings().removeClass('display');
        $('.onlineCilentBox').addClass('display');
    })
})

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

//關於
$(function(){
    $('.fixbar .about1').click(function(){
        $('.aboutBox').addClass('display');
        $('.aboutBox').siblings().removeClass('display');
    })

    $('.fixbar .about2').click(function(){
        $('.linkBox').addClass('display');
        $('.linkBox').siblings().removeClass('display');
    })
})

//轉點
$(function(){
    $('.turnBtn').click(function(){
        $(this).toggleClass('turn');
    })
})

//存款
$(function(){
    $('.payStyle button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.payStyle .bank').click(function(){
        $('.tbank').addClass('display');
        $('.tbank').siblings().removeClass('display');
    })

    $('.payStyle .num').click(function(){
        $('.tnum').addClass('display');
        $('.tnum').siblings().removeClass('display');
    })

    $('.payStyle .netcard').click(function(){
        $('.tnetcard').addClass('display');
        $('.tnetcard').siblings().removeClass('display');
    })
})

    //優惠

$(function(){
    $('.discount .window button').click(function(){
        $($(this).closest('div')).next().toggleClass('open');
        $($(this).closest('div')).next().siblings().removeClass('open');
    })
})

    //共用

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
    var wH = window.innerHeight;
    $('.myself').css("height", (String(wH - 110) + "px"));
    //聯繫我們-線上客服
    $('.onlineCilent').css("height", (String(wH - 250) + "px"));
    //幫助中心-體育規則
    $('.ruleBox').css("height", (String(wH - 427) + "px"));
    $(window).resize(function () {
        var wH = window.innerHeight;
        $('.myself').css("height", (String(wH - 110) + "px"));
        //聯繫我們-線上客服
        $('.onlineCilent').css("height", (String(wH - 250) + "px"));
        //幫助中心-體育規則
        $('.ruleBox').css("height", (String(wH - 427) + "px"));
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
    if(wWD >= 1920) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
        $('.playBoard').removeClass('hide1 hide2 hide3');
        $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
        $('.left').css('width',(String(270) + 'px'));
    } else if(wWD < 1920 && wWD >= 1840) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
        $('.playBoard').removeClass('hide1');
        $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
        $('.left').css('width',(String(270) + 'px'));
    } else if(wWD < 1840 && wWD >= 1700) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
        $('.playBoard').addClass('hide1');
        $('.playBoard').removeClass('hide2');
        $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
        $('.left').css('width',(String(270) + 'px'));
    } else if(wWD < 1700 && wWD >= 1560) {
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
        $('.playBoard').addClass('hide1 hide2');
        $('.playBoard').removeClass('hide3');
        $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
        $('.left').css('width',(String(270) + 'px'));
    } else if(wWD < 1560 && wWD > 1510) {
        $('.marqueeBox').css('width',(String(wWD - 600) + 'px'));
        $('.middle').css('width',(String(wWD - 650) + 'px'));
        $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
        $('.playBoard').addClass('hide1 hide2 hide3');
        $('.left').css('width',(String(wWD - 1290) + 'px'));
        $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(wWD - 1280) + 'px'));
    } else if(wWD < 1510 && wWD > 1200) {
        $('.marqueeBox').css('width',(String(wWD - 600) + 'px'));
        $('.middle').css('width',(String(880) + 'px'));
        $('.topfix,.hideboard,.topimg').css('width',(String(870) + 'px'));
        $('.playBoard').addClass('hide1 hide2 hide3');
        $('body').css('overflow-x','auto');
        $('.left').css('width',(String(220) + 'px'));
        $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(230) + 'px'));
    } else {
        $('.marqueeBox').css('width',(String(600) + 'px'));
        $('.middle').css('width',(String(880) + 'px'));
        $('.topfix,.hideboard,.topimg').css('width',(String(870) + 'px'));
        $('.playBoard').addClass('hide1 hide2 hide3');
        $('body').css('overflow-x','auto');
        $('.left').css('width',(String(220) + 'px'));
        $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(230) + 'px'));
    }

    if(wWD >= 1560){
        $('.sportbar').css('left',(String(270) + 'px'));
    } else if(wWD < 1560 && wWD > 1510) {
        $('.sportbar').css('left',(String(wWD - 1290) + 'px'));
    } else {
        $('.sportbar').css('left',(String(220) + 'px'));
    }

    if(wWD >= 1480){
        $('article.mine').css('width',(String(1480) + 'px'));
    } else if(wWD < 1480 && wWD > 1200) {
        $('article.mine').css('width',(String(wWD) + 'px'));
    } else {
        $('article.mine').css('width',(String(1200) + 'px'));
    }

    if(wWD >= 1470){
        $('section.myself').css('width',(String(1170) + 'px'));
    } else if(wWD < 1470 && wWD > 1200) {
        $('.minetopfix,.minetable,.recordbar,.recordbox,.helpbar,.helpbox,.onlineCilent').css('width',(String(wWD - 300) + 'px'));
        $('.sportbar').css('width',(String(wWD - 330) + 'px'));
        $('section.myself').css('width',(String(wWD - 290) + 'px'));
    } else {
        $('section.myself').css('width',(String(920) + 'px'));
    }

    if(wWD >= 1450){
        $('.minetopfix,.minetable,.mineHideBoard,.recordbar,.recordbox,.helpbar,.helpbox,.onlineCilent,.ruleBox,.ruleTitle').css('width',(String(1150) + 'px'));
        $('.record .bettingRecord').css('width',(String(1130) + 'px'));
        $('.sportbar').css('width',(String(1120) + 'px'));
        $('.linkBox').css('width',(String(1080) + 'px'));
        $('.minetable.bettingLimit,.minetable.download').css('width',(String(570) + 'px'));
    } else if(wWD < 1450 && wWD > 1200) {
        $('.minetopfix,.minetable,.mineHideBoard,.recordbar,.recordbox,.helpbar,.helpbox,.onlineCilent,.ruleBox,.ruleTitle').css('width',(String(wWD - 300) + 'px'));
        $('.record .bettingRecord').css('width',(String(wWD - 320) + 'px'));
        $('.sportbar').css('width',(String(wWD - 330) + 'px'));
        $('.linkBox').css('width',(String(wWD - 370) + 'px'));
        $('.minetable.bettingLimit,.minetable.download').css('width','calc(50% - 10px)');
    } else {
        $('.minetopfix,.minetable,.mineHideBoard,.recordbar,.recordbox,.helpbar,.helpbox,.onlineCilent,.ruleBox,.ruleTitle').css('width',(String(900) + 'px'));
        $('.record .bettingRecord').css('width',(String(880) + 'px'));
        $('.sportbar').css('width',(String(870) + 'px'));
        $('.linkBox').css('width',(String(840) + 'px'));
        $('.minetable.bettingLimit,.minetable.download').css('width',(String(445) + 'px'));
    }

    if(wWD > 1560) {
        $('.chleague').css('width',(String(wWD - 660) + 'px'));
    } else {
        $('.chleague').css('width',(String(870) + 'px'));
    }
    $(window).resize(function(){
        var wWD = window.innerWidth;
        if(wWD >= 1920) {
            $('.middle').css('width',(String(wWD - 650) + 'px'));
            $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
            $('.playBoard').removeClass('hide1 hide2 hide3');
            $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
            $('.left').css('width',(String(270) + 'px'));
        } else if(wWD < 1920 && wWD >= 1840) {
            $('.middle').css('width',(String(wWD - 650) + 'px'));
            $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
            $('.playBoard').removeClass('hide1');
            $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
            $('.left').css('width',(String(270) + 'px'));
        } else if(wWD < 1840 && wWD >= 1700) {
            $('.middle').css('width',(String(wWD - 650) + 'px'));
            $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
            $('.playBoard').addClass('hide1');
            $('.playBoard').removeClass('hide2');
            $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
            $('.left').css('width',(String(270) + 'px'));
        } else if(wWD < 1700 && wWD >= 1560) {
            $('.middle').css('width',(String(wWD - 650) + 'px'));
            $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
            $('.playBoard').addClass('hide1 hide2');
            $('.playBoard').removeClass('hide3');
            $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(280) + 'px'));
            $('.left').css('width',(String(270) + 'px'));
        } else if(wWD < 1560 && wWD > 1510) {
            $('.marqueeBox').css('width',(String(wWD - 600) + 'px'));
            $('.middle').css('width',(String(wWD - 650) + 'px'));
            $('.topfix,.hideboard,.topimg').css('width',(String(wWD - 660) + 'px'));
            $('.playBoard').addClass('hide1 hide2 hide3');
            $('.left').css('width',(String(wWD - 1290) + 'px'));
            $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(wWD - 1280) + 'px'));
        } else if(wWD < 1510 && wWD > 1200) {
            $('.marqueeBox').css('width',(String(wWD - 600) + 'px'));
            $('.middle').css('width',(String(880) + 'px'));
            $('.topfix,.hideboard,.topimg').css('width',(String(870) + 'px'));
            $('.playBoard').addClass('hide1 hide2 hide3');
            $('body').css('overflow-x','auto');
            $('.left').css('width',(String(220) + 'px'));
            $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(230) + 'px'));
        } else {
            $('.marqueeBox').css('width',(String(600) + 'px'));
            $('.middle').css('width',(String(880) + 'px'));
            $('.topfix,.hideboard,.topimg').css('width',(String(870) + 'px'));
            $('.playBoard').addClass('hide1 hide2 hide3');
            $('body').css('overflow-x','auto');
            $('.left').css('width',(String(220) + 'px'));
            $('.topfix,.chleague,.minetopfix,.hideboard,.mineHideBoard').css('left',(String(230) + 'px'));
        }

        if(wWD >= 1560){
            $('.sportbar').css('left',(String(270) + 'px'));
        } else if(wWD < 1560 && wWD > 1510) {
            $('.sportbar').css('left',(String(wWD - 1290) + 'px'));
        } else {
            $('.sportbar').css('left',(String(220) + 'px'));
        }

        if(wWD >= 1480){
            $('article.mine').css('width',(String(1480) + 'px'));
        } else if(wWD < 1480 && wWD > 1200) {
            $('article.mine').css('width',(String(wWD) + 'px'));
        } else {
            $('article.mine').css('width',(String(1200) + 'px'));
        }

        if(wWD >= 1470){
            $('section.myself').css('width',(String(1170) + 'px'));
        } else if(wWD < 1470 && wWD > 1200) {
            $('section.myself').css('width',(String(wWD - 280) + 'px'));
        } else {
            $('section.myself').css('width',(String(920) + 'px'));
        }

        if(wWD >= 1450){
            $('.minetopfix,.minetable,.mineHideBoard,.recordbar,.recordbox,.helpbar,.helpbox,.onlineCilent,.ruleBox,.ruleTitle').css('width',(String(1150) + 'px'));
            $('.record .bettingRecord').css('width',(String(1130) + 'px'));
            $('.sportbar').css('width',(String(1120) + 'px'));
            $('.linkBox').css('width',(String(1080) + 'px'));
            $('.minetable.bettingLimit,.minetable.download').css('width',(String(570) + 'px'));
        } else if(wWD < 1450 && wWD > 1200) {
            $('.minetopfix,.minetable,.mineHideBoard,.recordbar,.recordbox,.helpbar,.helpbox,.onlineCilent,.ruleBox,.ruleTitle').css('width',(String(wWD - 300) + 'px'));
            $('.record .bettingRecord').css('width',(String(wWD - 320) + 'px'));
            $('.sportbar').css('width',(String(wWD - 330) + 'px'));
            $('.linkBox').css('width',(String(wWD - 370) + 'px'));
            $('.minetable.bettingLimit,.minetable.download').css('width','calc(50% - 10px)');
        } else {
            $('.minetopfix,.minetable,.mineHideBoard,.recordbar,.recordbox,.helpbar,.helpbox,.onlineCilent,.ruleBox,.ruleTitle').css('width',(String(900) + 'px'));
            $('.record .bettingRecord').css('width',(String(880) + 'px'));
            $('.sportbar').css('width',(String(870) + 'px'));
            $('.linkBox').css('width',(String(840) + 'px'));
            $('.minetable.bettingLimit,.minetable.download').css('width',(String(445) + 'px'));
        }
        

        if(wWD > 1560) {
            $('.chleague').css('width',(String(wWD - 660) + 'px'));
        } else {
            $('.chleague').css('width',(String(870) + 'px'));
        }
    })
})

function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }
  
    catch(e){ return false;}
}

$(function(){
    if(isMobile()){
        $('.left,.middle,.right,.myself').css('height',(String(880) + 'px'));
        $('header.mine').css('width',(String(1480) + 'px'));
    }
})