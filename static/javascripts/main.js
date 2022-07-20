/*===========================================================*/
/* 入力必須項目が全て埋まったら送信ボタンを有効化する */
/*===========================================================*/
$(document).ready(function () {
  const $submitBtn = $('#js-submit')
  $('#form input, #form textarea').on('change', function () {
      if (
          $('#form input[id="name"]').val() !== "" &&
          $('#form input[id="email"]').val() !== "" &&
          $('#form textarea[id="message"]').val() !== ""
      ) {
          $submitBtn.prop('disabled', false);
          $submitBtn.removeClass('submit-button--disabled');
      } else {
          $submitBtn.prop('disabled', true);
          $submitBtn.addClass('submit-button--disabled');
      }
  });
});

/*===========================================================*/
/* 入力内容をGoogleFormに送信する */
/*===========================================================*/
$(document).ready(function () {

  $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdVU-b0hA1-syOOU06l5lhQGn2mcVVXOYUYWW-l9x9ggR6Huw/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
              0: function () {
                  $(".end-message").slideDown();
                  $(".submit-button").fadeOut();
              },
              200: function () {
                  $(".false-message").slideDown();
              }
          }
      });
      event.preventDefault();
  });

});

/*===========================================================*/
/* モーダルウィンドウを開く */
/*===========================================================*/
var scrollPosition;

$('.js-modal__open').each(function () {

  $(this).on('click', function () {
      scrollPosition = $(window).scrollTop(); //topからのスクロール位置を格納
      $('.content').fadeIn(); //モーダルをフェードイン

      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn(300);

      $('body').addClass('fixed').css({
          top: -scrollPosition
      }); //背景固定
      return false;
  });
});

/*===========================================================*/
/* モーダルウィンドウを閉じる */
/*===========================================================*/
$('.js-modal__close').on('click', function () {

  $('.js-modal').fadeOut(300);

  $('body').removeClass('fixed').css({
      top: 0
  }); //背景固定を解除
  $(window).scrollTop(scrollPosition); //元の位置までスクロール

  return false;
});

/*===========================================================*/
/* サムネイルをクリックして表示させる */
/*===========================================================*/
const thumbs = document.querySelectorAll('.modal__thumb');
thumbs.forEach(function (item, index) {
  item.onclick = function () {
      this.parentNode.parentNode.previousElementSibling.children[0].src = this.dataset.image;
  }
});

/*===========================================================*/
/*  アルファベットがランダムに変化して出現させる */
/*===========================================================*/
var arr = []
//初期値の設定
function TypingInit() {
  $('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
      arr[i] = new ShuffleText(this); //動作させるテキストを配列に格納
  });
}
//スクロールした際のアニメーションの設定
function TypingAnime() {
  $(".js_typing").each(function (i) {
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
          if (!$(this).hasClass("endAnime")) { //endAnimeのクラスがあるかチェック
              arr[i].start(); //配列で登録テキストのアニメーションをおこなう
              arr[i].duration = 800; //テキストが最終変化するまでの時間※規定値600
              $(this).addClass("endAnime"); //１度アニメーションした場合はendAnimeクラスを追加
          }
      } else {
          $(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
      }
  });
}

/*===========================================================*/
/* 関数をまとめる */
/*===========================================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  TypingInit(); // アルファベットがランダムに変化して出現 初期設定
  TypingAnime(); // アルファベットがランダムに変化して出現の関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  TypingInit(); // アルファベットがランダムに変化して出現 初期設定
  TypingAnime(); // アルファベットがランダムに変化して出現
}); // ここまでページが読み込まれたらすぐに動かしたい場合の記述

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', { //アニメーションをするIDの指定
      start: 'manual', //自動再生をせずスタートをマニュアルに
      type: 'scenario-sync', // アニメーションのタイプを設定
      duration: 30, //アニメーションの時間設定。数字が小さくなるほど速い
      forceRender: false, //パスが更新された場合に再レンダリングさせない
      animTimingFunction: Vivus.EASE, //動きの加速減速設定
  },
  function () {
      $("#mask").attr("class", "done"); //描画が終わったらdoneというクラスを追加
  }
);

$(window).on('load', function () {
  $("#splash").delay(4000).fadeOut('slow'); //ローディング画面を3秒（3000ms）待機してからフェイドアウト
  $("#splash_logo").delay(4000).fadeOut('slow'); //ロゴを3秒（3000ms）待機してからフェイドアウト
  stroke.play(); //SVGアニメーションの実行
});

//同じ日付で2回目以降ならローディング画面非表示の設定

var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
var myD = new Date(); //日付データを取得
var myYear = String(myD.getFullYear()); //年
var myMonth = String(myD.getMonth() + 1); //月
var myDate = String(myD.getDate()); //日

if (splash_text != myYear + myMonth + myDate) { //cookieデータとアクセスした日付を比較↓
  $("#splash").css("display", "block"); //１回目はローディングを表示
  setTimeout(function () {
      $("#splash_logo").fadeIn(1000, function () { //1000ミリ秒（1秒）かけてロゴがフェードイン
          setTimeout(function () {
              $("#splash_logo").fadeOut(1000); //1000ミリ秒（1秒）かけてロゴがフェードアウト
          }, 1000); //1000ミリ秒（1秒）後に処理を実行
          setTimeout(function () {
              $("#splash").fadeOut(1000, function () { //1000ミリ秒（1秒）かけて画面がフェードアウト
                  var myD = new Date();
                  var myYear = String(myD.getFullYear());
                  var myMonth = String(myD.getMonth() + 1);
                  var myDate = String(myD.getDate());
                  $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
              });
          }, 1700); //1700ミリ秒（1.7秒）後に処理を実行
      });
  }, 1000); //1000ミリ秒（1秒）後に処理を実行
} else {
  $("#splash").css("display", "none"); //同日2回目のアクセスでローディング画面非表示
}
