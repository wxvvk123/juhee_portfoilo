$(function(){
     // 서브메뉴
     $(function(){
         $(".menu1").hover(function(){
              $(this).find(".gnb-sub-menu").stop().slideDown(); 
         }, function(){
              $(this).find(".gnb-sub-menu").stop().hide(); 
         });
     });
     
     // 스크롤시 네비 컬러변경
     $(function(){
          var $header = $("#header"),
              $logo_org = $(".logo_orgin"),
              $logo_red = $(".logo_red"),
              $location = $(".location"),
              $location_black = $(".location_black"),
              $btn = $('.btn'),
              $doc = $("html,body");
     
              $(window).scroll(function(){
                  var sclTop = $(window).scrollTop();
                  
                  if(sclTop > 0){ 
                         $header.addClass("scroll_on"); 
                         $logo_org.removeClass("visible");
                         $logo_red.addClass("visible"); 
                         $location.removeClass("visible");
                         $location_black.addClass("visible");
                         $btn.addClass("on_color");              
                  }else{ 
                         $header.removeClass("scroll_on"); 
                         $logo_red.removeClass("visible");
                         $logo_org.addClass("visible");
                         $location_black.removeClass("visible");
                         $location.addClass("visible");
                         $btn.removeClass("on_color");   
                  }
              });
     });
     // 베스트 제품 탭바 클릭시 상품 바뀜
     $('#product .btn').on('click',function(){
          $(this).addClass('current');
          $(this).siblings().removeClass('current');

          var $curIdx = $('#product li').index(this);
          $('.best_pd .prd').eq($curIdx).addClass('bestprd');
          $('.best_pd .prd').eq($curIdx).siblings().removeClass('bestprd');
     });

     // 랭기지 바 클릭시 언어 선택창 올라가고 내려가고
     $('.dropdown').on('click', function(){
          if($(this).hasClass('on')){ 
              $('.dropdown').removeClass('on');
              $('.option').slideUp();
          }else{
              $('.dropdown').addClass('on');
              $('.option').slideDown();
          } 
          return false;
      });

     // 언어 클릭시 선택한 언어배경 변경
     $(' .lang').on('click',function(){
          $(this).addClass('active');
          $(this).parent().siblings().find('.lang').removeClass('active');

          return false;
     });
     // 사이드메뉴바 클릭 시 사이드메뉴배경, 네비 활성화
     $('#nav_btn').on('click',function(){ 
          $('.page_bg').show();
          $('#sideNav').addClass('page_on');
     });
     // 네비 클로즈버튼 클릭 시 사이드메뉴배경, 네비 비활성화
     $('.close-sidenav').on('click',function(){
          $('.page_bg').hide();
          $('#sideNav').removeClass('page_on');
     });
     $('.page_bg').on('click',function(){
          $('.page_bg').hide();
          $('#sideNav').removeClass('page_on');
     })

     // 사이드메뉴의 메인메뉴 클릭시 서브메뉴 활성화및 비활성화
     $('.nav_01').on('click',function(){
          var menuHasClass = $(this).hasClass('d1_on');
          if(!menuHasClass) {
               $(this).addClass('d1_on');
               $(this).siblings().removeClass('d1_on');
               
               $('.side-menu li .sub').removeClass('sub_01');
               $('.side-menu li.d1_on .sub').addClass('sub_01');
          } else {
               $(this).removeClass('d1_on');
               $('.side-menu li .sub').removeClass('sub_01');
               $('.menu2 .menu3').removeClass('sub_02');
          }
          return false;
     });
     // 사이드메뉴의 서브메뉴 클릭시 서브의 서브 메뉴 활성화 및 비활성화
     $('.menu2').on('click',function(){
          var subMenuHasClass = $(this).hasClass('d2_on');
          console.log(subMenuHasClass);
          if(!subMenuHasClass){
               $(this).addClass('d2_on');
               $(this).siblings().removeClass('d2_on');
               
               $('.menu2 .menu3').removeClass('sub_02');
               $('.menu2.d2_on .menu3').addClass('sub_02');
          } else {
               $(this).removeClass('d2_on');
               $('.menu2 .menu3').removeClass('sub_02');
          }
          return false;
     });
     // 제품 버튼 클릭시 제품별 이미지 활성화
     $('#product .btn').on('click',function(){
          $(this).addClass('current');
          $(this).siblings().removeClass('current');
     
          var $curIdx = $('#product li').index(this);
          $('.best_pd .prd').eq($curIdx).addClass('bestprd');
          $('.best_pd .prd').eq($curIdx).siblings().removeClass('bestprd');
     });
});