$(function(){
  
    var embed = $('.youtube');
    $('.video').append(embed);
  
    /* click 'PLAY'  button */
    $('.pop_open').click( function() {
      // show popup background
      $('.gray_mask').show();
      // show popup 
      $('#popup').show();
      // append youtube iframe on popup
      $('.video').append(embed);
    });
 
  /* click 'CLOSE' button */
  $('.gray_mask, .close').click( function() {
    // hide popup background
    $('#popup').hide();
    // hide popup 
    $('.gray_mask').hide();
    // empty youtube iframe on popup
    $('.video').empty(); 
  }); 
  
  /* click 'popu background' */
  $('.gray_mask, .close').click( function() {
    // hide popup background
    $('#popup').hide();
    // hide popup 
    $('.gray_mask').hide();
    // empty youtube iframe on popup
    $('.video').empty(); 
  }); 

  // 달력
  $(document).ready(function () {
    $.datepicker.setDefaults($.datepicker.regional['ko']); 
    $( "#startDate" ).datepicker({
         changeMonth: true, 
         changeYear: true,
         nextText: '다음 달',
         prevText: '이전 달', 
         dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
         dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
         monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
         monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
         dateFormat: "yy.mm.dd",
         maxDate: 300,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
         onClose: function( selectedDate ) {    
              //시작일(startDate) datepicker가 닫힐때
              //종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
             $("#endDate").datepicker( "option", "minDate", selectedDate );
         }    

    });
    $( "#endDate" ).datepicker({
         changeMonth: true, 
         changeYear: true,
         nextText: '다음 달',
         prevText: '이전 달', 
         dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
         dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
         monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
         monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
         dateFormat: "yy.mm.dd",
         maxDate: 300,                       // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가)
         onClose: function( selectedDate ) {    
             // 종료일(endDate) datepicker가 닫힐때
             // 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
             $("#startDate").datepicker( "option", "maxDate", selectedDate );
         }    

    });    
    });

    $(function(){ 
      $('.bt_up').click(function(){ 
        var n = $('.bt_up').index(this);
        var num = $(".count:eq("+n+")").val();
        num = $(".count:eq("+n+")").val(num*1+1); 
        var pric = $(".price_num:eq("+n+")").val();
        pric = $(".price_num:eq("+n+")").val(pric*1+3000);
      });
      $('.bt_down').click(function(){ 
        var n = $('.bt_down').index(this);
        var num = $(".count:eq("+n+")").val();
        num = $(".count:eq("+n+")").val(num*1-1);
        var pric = $(".price_num:eq("+n+")").val();
        pric = $(".price_num:eq("+n+")").val(pric*1-3000); 
      });
    });

    $(function(){ 
      $('.bt_up_01').click(function(){ 
        var n = $('.bt_up_01').index(this);
        var num = $(".count01:eq("+n+")").val();
        num = $(".count01:eq("+n+")").val(num*1+1); 
        var pric_01 = $(".price_num01:eq("+n+")").val();
        pric_01 = $(".price_num01:eq("+n+")").val(pric_01*1+5000);
      });
      $('.bt_down_01').click(function(){ 
        var n = $('.bt_down_01').index(this);
        var num = $(".count01:eq("+n+")").val();
        num = $(".count01:eq("+n+")").val(num*1-1);
        var pric_01 = $(".price_num01:eq("+n+")").val();
        pric_01 = $(".price_num01:eq("+n+")").val(pric_01*1-5000); 
      });     
    });
    
    $(function(){	
      $(document).ready(function(){
        $('select[name=customSelect]').change(function() {
          if($(this).val()=="0"){    
            $('#price_num02').val("");    
          } else {    
            $('#price_num02').val($(this).val());    
            $("#price_num02").attr("readonly", true);    
          }   
        });    
      });    
    });
});