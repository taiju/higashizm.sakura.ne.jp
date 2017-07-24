$(function(){
	
  var NUMBER = 1;
  
  //コピペできるスライドナンバー  
  var COPYPASTNUMBERS = [10, 11, 16, 21, 32, 37, 42, 47, 52, 66, 70, 74, 88]

  // 次へ
  $("#next").click(function(){
    if (NUMBER == 92) {
      return;
    }
    else {
      NUMBER++;
      $("#img").attr("src","img/" + NUMBER + ".png");
      checknumber();
    }
  });
  
  // 前へ
  $("#prev").click(function(){
    if (NUMBER == 1) {
      return;
    }
    else {
      NUMBER--;
      $("#img").attr("src","img/" + NUMBER + ".png");
      checknumber();
    }
  });

  //コピペ表示ありかなしかを判断
  function checknumber() {
  	$("#img").removeClass("copypast");
  	for (var i = 0; i < COPYPASTNUMBERS.length; i++) {
  		if (NUMBER == COPYPASTNUMBERS[i]) {
  			$("#img").addClass("copypast");
			break;
  		}
  	}
  }
 
  //目次の表示
  $("#showindex").click(function(){
  	$("#index").modal({onOpen: effectOpen, onClose: effectClose});
  });

  //目次の各項目に移動
  $("#toNo01").click(function(){NUMBER = 1;$("#img").attr("src","img/1.png");$.modal.close();});
  $("#toNo09").click(function(){NUMBER = 9;$("#img").attr("src","img/9.png");$.modal.close();});
  $("#toNo19").click(function(){NUMBER = 19;$("#img").attr("src","img/19.png");$.modal.close();});
  $("#toNo30").click(function(){NUMBER = 30;$("#img").attr("src","img/30.png");$.modal.close();});
  $("#toNo35").click(function(){NUMBER = 35;$("#img").attr("src","img/35.png");$.modal.close();});
  $("#toNo40").click(function(){NUMBER = 40;$("#img").attr("src","img/40.png");$.modal.close();});
  $("#toNo45").click(function(){NUMBER = 45;$("#img").attr("src","img/45.png");$.modal.close();});
  $("#toNo50").click(function(){NUMBER = 50;$("#img").attr("src","img/50.png");$.modal.close();});
  $("#toNo68").click(function(){NUMBER = 68;$("#img").attr("src","img/68.png");$.modal.close();});
  $("#toNo86").click(function(){NUMBER = 86;$("#img").attr("src","img/86.png");$.modal.close();});

  //目次に使うエフェクト
  function effectOpen (dialog) {
	  dialog.overlay.fadeIn('slow', function () {
		  dialog.container.fadeIn('slow', function () {
			  dialog.data.slideDown('slow');
		  });
	  });
  }
  
  function effectClose (dialog) {
	dialog.data.fadeOut('slow', function () {
		dialog.container.hide('slow', function () {
			dialog.overlay.slideUp('slow', function () {
				$.modal.close();
			});
		});
	});
  }

  //コピペできるようにする
  $("#modalarea").click(function(){
    var header = "<div id='modalwindow'><h1>コピペするがよいさ！</h1>";
	var fotter = "<p><a href='#' class='modalClose'>Close</a></p>";
	  switch(NUMBER) {
	  	case 10:
		  $(header + "<p>.（ピリオド）<br />任意の文字列（改行以外）を表す</p>" + fotter).modal();
		  break;
		case 11:
		  $(header + "<p>*（アスタリクス）<br />直前の文字を0回以上繰り返す</p>" + fotter).modal();
		case 16:
		  $(header + "<p>¥n（改行）<br />¥t（タブ）<br />^（行頭）<br />$（行末）<br />(A|B)（AまたはB）</p>" + fotter).modal();
		case 21:
		  $(header + "<p>検索する文字列<br />『^』<br /><br />置換する文字列<br />『&gt; 』</p>" + fotter).modal();
		case 32:
		  $(header + "<p>検索する文字列<br />『 $』<br /><br />置換する文字列<br />『』</p>" + fotter).modal();
		case 37:
		  $(header + "<p>検索する文字列<br />『$』<br /><br />置換する文字列<br />『&lt;br /&gt;』</p>" + fotter).modal();
		case 42:
		  $(header + "<p>検索する文字列<br />『(ウェブ|ウエブ)』<br /><br />置換する文字列<br />『Web』</p>" + fotter).modal();
		case 47:
		  $(header + "<p>検索する文字列<br />『^( |　|¥t)*』<br /><br />置換する文字列<br />『』</p>" + fotter).modal();
		case 52:
		  $(header + "<p>検索する文字列<br />『(..............................)』<br /><br />置換する文字列<br />『¥1¥n』</p>" + fotter).modal();
		case 66:
		  $(header + "<p>検索する文字列<br />『(.{30})』<br /><br />置換する文字列<br />『¥1¥n』</p>" + fotter).modal();
		case 70:
		  $(header + "<p>検索する文字列<br />『(&lt;(meta|link|br|img|hr|textarea|input).*?)&gt;』<br /><br />置換する文字列<br />『¥1 /&gt;』</p>" + fotter).modal();
		case 74:
		  $(header + "<p>検索する文字列<br />『(&lt;img.*?)&gt;』<br /><br />置換する文字列<br />『¥1 /&gt;』</p>" + fotter).modal();
		case 88:
		  $(header + "<p>検索する文字列<br />『(&lt;a href=\")(.*?\"&gt;)』<br /><br />置換する文字列<br />『¥1http://www.exsample.com/¥2』</p>" + fotter).modal();
	  }
  });
});