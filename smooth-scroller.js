var smooth_scroll = function(){
  
  // (이동할 페이지 위치, 현재 페이지 위치)
  function smooth_scroll(el, _y) {
    var y = document.querySelector('#' + el).offsetTop;
    var i = _y; // 현재 페이지 위치
    console.log('current position y: ' + i, y); // 현재위치, 이동할 위치
    var int = setInterval(function () {
      if (i < y) {
        (i < y && (y - i) > 20) ? i += 20 : i = i + 1;
        if (i >= y) clearInterval(int);
      } else {
        (i > y && Math.abs(y - i) > 20) ? i -= 20 : i = i - 1;
        if (i <= y) clearInterval(int);
      }
      scrollTo(0, i);
    }, 10);
  }

    // 페이지 이동 버튼 
    var btn_page = document.querySelectorAll('.btn_page');

    for (var i = 0; i < btn_page.length; i++) {
      btn_page[i].addEventListener('click', function () {
        var target_page = this.getAttribute('href').substring(1);
        console.log(target_page);
        // 이동할 페이지 위치, 현재 페이지 위치
        smooth_scroll(target_page, this.parentElement.offsetTop);
        return false;
      });
    }

}; // smooth_scroll


smooth_scroll();