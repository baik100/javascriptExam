$(document).ready(function() {



    /**
     *  UI 스크립트
     */

    myApp.init()


    /**
     * lib
     */


});



var myApp = {
    init: function() {
        myApp.tabScript();
        myApp.sideMenu();
        myApp.accordion();
        myApp.isScroll();
        myApp.spyScroll();
        myApp.anim();
    },

    tabScript : function() {

        var tabEl = $(".tab-script nav li");
        var contentEl = $(".tab-script .contents > div");
        var dotEl = $(".tab-script .dot");


        tabEl.click(function () {
            var index =  $(this).index();
            // contentEl.eq(index).addClass("is-active").siblings().removeClass("is-active");


            var dataContent = $(this).data("content");
            $("." + dataContent).addClass("is-active").siblings().removeClass("is-active");

            dotEl.removeClass("is-active");
            dotEl.eq(index).addClass("is-active");
        }).eq(0).trigger('click');

    },

    sideMenu : function () {

        $('.main-header .btn').click(function (){
            $(".side-menu").addClass("is-active");
        });

        $(".close").click(function () {
            $(".side-menu").removeClass("is-active");
        });

    },

    accordion : function () {

        $(".ac h3").on("click",function () {
            var self = $(this);


            if(self.hasClass('is-active')){
                //열려있는 state -> 닫아줘야한다.
                self.removeClass("is-active").next("p").slideUp();
            }else {
                //닫혀있는 state -> 열어줘야한다.
                self.parent().siblings().find("h3")
                    .removeClass("is-active")
                    .next('p').slideUp();
                self.addClass("is-active").next("p").slideDown();

            }
        });
    },

    isScroll : function () {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();
            // console.log(sct);
;
            if(sct >200){
                $("html").addClass("is-scroll");
            }else{
                $("html").removeClass("is-scroll");
            }
        })
    },

    spyScroll: function () {
        $('.nav-link').on("click",function () {
            var self = $(this);
            var dataNav = self.data('nav');

            console.log($(dataNav).offset());
            var oft = $(dataNav).offset().top;

            $('html, body').animate({scrollTop: oft});
        });

    },

    anim : function () {
        TweenMax.from('h2',0.7,{y:50, opacity:0});
        TweenMax.from('p',1,{y:50, opacity:0, delay:0.1});
    },



}
