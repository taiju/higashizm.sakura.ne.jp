$(function(){

  var DEFAULT_SLIDE = 'img/jQuery.001.jpg';
  var INDEX_NUMBER  = [2, 14, 29, 42, 70, 76, 83, 89, 94];

  var Slide = function() {
    this.slides = [];
    for (var i = 0; i < 106; i++) {
      if (i != 100) {
        var number = i.toString();
        if (number < 10) { number = '00' + number }
        else if (number < 100) { number = '0' + number }
        else { }
        this.slides.push('img/jQuery.' + number + '.jpg');
      }
      else if (i == 105) {
        this.slides.push(DEFAULT_SLIDE);
      }
      else {
        this.slides.push('<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/7dk0-AuZgdU&hl=ja&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/7dk0-AuZgdU&hl=ja&fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>');
      }
    }
  }
  Slide.prototype = {
    get_current : function() {
      if ($('#slide > img').attr('src')) {
        var number = $('#slide > img').attr('src').match(/jQuery\.0*(.*)\.jpg/);
        return eval(number[1]);
      }
      else {
        return 100; 
      }
    },
    prev : function(n) {
      if (n == 1) { return false; }
      else if (n == 100) {
        $('#slide').empty().append('<img src="' + this.slides[n - 1] + '" alt="' + $('#source > div').eq(n - 2).text() + '" />');
      }
      else if (n == 101) {
        $('#slide').empty().append(this.slides[n - 1]);
      }
      else if (n > 100) {
        $('#slide > img').attr({
          'src' : this.slides[n - 1],
          'alt' : $('#source > div').eq(n - 3).text()
        });
      }
      else {
        var alt = '';
        if ($('#source > div').eq(n).text() == '') {
          alt = $('#source > div').eq(n - 2).children().text();
          alert(alt);
        }
        else {
          alt = $('#source > div').eq(n).text();
        }
        $('#slide > img').attr({
          'src' : this.slides[n - 1],
          'alt' : $('#source > div').eq(n - 2).text()
        });
      }
    },
    next : function(n) {
      if (n == 99) {
        $('#slide').empty().append(this.slides[n + 1]);
      }
      else if (n >= 100 && n < 105) {
        $('#slide').empty().append('<img src="' + this.slides[n + 1] + '" alt="' + $('#source > div').eq(n - 1).text() + '" />');
      }
      else if (n == 105) {
        $('#slide > img').attr({
          'src' : 'img/jQuery.001.jpg',
          'alt' : 'はじめてのjQuery'
        });
      }
      else {
        var alt = '';
        if ($('#source > div').eq(n).text() == '') {
          alt = $('#source > div').eq(n).children().text();
        }
        else {
          alt = $('#source > div').eq(n).text();
        }
        $('#slide > img').attr({
          'src' : this.slides[n + 1],
          'alt' : alt 
        });
      }
    }
  }

  //slideshow
  $('#home').click(function(){
    $('#source > div').fadeOut(1000);
    var s = new Slide();
    if (s.get_current = 100) {
      $('#slide > img').attr({
        'src' : 'img/jQuery.001.jpg',
        'alt' : 'はじめてのjQuery'
      });
    }
    else {
      $('#slide').empty().append('<img src="img/jQuery.001.jpg" alt="はじめてのjQuery" />');
    }
  });

  $('#prev').click(function(){
    $('#source > div').fadeOut(1000);
    var s = new Slide();
    var n = s.get_current();
    s.prev(n);
  });

  $('#next').click(function(){
    $('#source > div').fadeOut(1000);
    var s = new Slide();
    var n = s.get_current();
    s.next(n);
  });

  $('#slide').click(function(){
    $('#source > div').fadeOut(1000);
    var s = new Slide();
    var c = s.get_current();
    s.next(c);
  });

  var Index = function(object) {
    this.indexs = [];
    this.get = function() {
      for (var i = 0; i < object.length; i++) {
        this.indexs.push(object.eq(i).text());
      }
      return this.indexs;
    }
    this.create = function() {
      this.get();
      $('#index').append('<ol></ol>');
      for (var i = 0; i < this.indexs.length; i++) {
        $('#index ol').append('<li><a href="javascript:void(0);" id="index' + i + '">' + this.indexs[i] + '</a></li>');
      }
      $('#index').slideDown('slow');
      var index_funcs = [];
      var s = new Slide();
      if (s.get_current() == 100) {
        $('#slide').append('<img />');
      }
      for (var i = 0; i < 9; i++) {
        index_funcs.push("$('#index" + i + "').click(function(){$('#source > div').fadeOut(1000);setTimeout(function(){var s = new Slide();s.next(" + (INDEX_NUMBER[i] - 1) + ");},100);$('#slide > object').remove();$('#index').slideUp('slow', function(){ $(this).empty() })});");
      }
      for (var i = 0; i < 9; i++) {
        eval(index_funcs[i]);
       }
    }
  }

  $('#view_index').click(function() {
    $('#source > div').fadeOut(1000);
    var obj = new Index($('.heading'));
    if (!$('#index0').attr('id')) {
      obj.create();
    }
    else {
      $('#index').slideUp('slow', function(){ $(this).empty() });
    }
  });

  $('#view_source').toggle(
    function() {
      var s = new Slide();
      var n = s.get_current();
      $('#source > div').eq(n - 1).fadeIn(1000);
    },
    function() {
      var s = new Slide();
      var n = s.get_current();
      $('#source > div').eq(n - 1).fadeOut(1000);
    }
  );
});
