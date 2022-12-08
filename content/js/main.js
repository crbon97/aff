function rand(n, t) {
    return (t - n) * Math.random() + n
}

 $(document).ready(function () {
      $("button.top_btn").click(function () {
           return $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top + "px" },
            { duration: 500, easing: "swing" }), !1 }) 






        }),
            
            
            
 $(document).ready(function () {
      $(function () { setInterval(function () { 
          var n = "animated tada"; $(".new_price").addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
           function () {
                $(this).removeClass(n) }) }, 3e3) }) }),
                
                
                
                
                
$(document).ready(function () {
     $(".slider").slick({ autoplay: !0, dots: !0 })
     })
     ,

 $(function () {
                     (countDown = function () { var t = Math.round(new Date / 1e3), e = $(".timer").FlipClock({ countdown: !0, language: "es-es", callbacks: {
                          init: function () {
                               if (!$.cookie("endDate")) { var n = Date.now() + 983440; $.cookie("endDate", Math.round(n / 1e3)) } }, destroy: function () {
                                    var n = Date.now() + 983440; $.cookie("endDate", Math.round(n / 1e3)) }, start: function () {
                                         var n = Date.now() + 983440; $.cookie("endDate", Math.round(n / 1e3)) }, interval: function () {
                                              Math.round(new Date / 1e3), e.getTime().time }, stop: function () { $.removeCookie("endDate"),
                                               countDown() } } }); n = $.cookie("endDate") - t, n <= 0 && (n = 10 + n % 10), e.setTime(n), 
                                               e.setCountdown(!0), e.start() })(), AOS.init({}) });
                                               
                                               
                                               
                                               
                                               
 var paks = sessionStorage.getItem("packs"), 
  container = document.getElementById("packs"), 
  from = 39,
   to = 4,
  timer = setInterval(function n() { from === to && clearInterval(timer), container.innerHTML = --from, 
                                                    setTimeout(n, rand(15e3, 3e4)), 4 === from && (container.innerHTML = ++from) }());



//  window.onload =
//   function () { null != sessionStorage.getItem("packs") && (from = paks, container.innerHTML = sessionStorage.getItem("packs")) },
//   window.onunload =
//    function () { sessionStorage.setItem("packs", container.innerHTML)
//  };





$(document).ready(function () {
  

     $('.change-package-selector2').on('change', (function () {
          $('.item-gift').hide();
          $('#' + $(this).val()).show();
  
          var package_id = $(this).val();
          set_package_prices(package_id);
        }));


           

       })