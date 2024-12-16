//テキストのカウントアップの設定
var bar = new ProgressBar.Line(loading_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1000,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定	
		style: {
			position:'absolute',
			left:'50%',
			top:'50%',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-family':'sans-serif',
			'font-size':'1.5rem',
			color:'#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画
	$("#loading").delay(500).fadeOut(800);//アニメーションが終わったら#loadingをフェードアウト
});  

const ham = $('#js-hamburger');
const nav = $('#js-nav');
const head = $("header");

ham.on('click', function () { //ハンバーガーメニューをクリックしたら
   ham.toggleClass('active');
   nav.toggleClass('active');
   head.toggleClass('active');
});

$(".hamburger_a").click(function () {
    ham.removeClass("active");
    nav.removeClass("active");
    head.removeClass("active");
});

//テキストを含む一般的なモーダル
// $(".works_card").modaal({
// 	overlay_close:true,//モーダル背景クリック時に閉じるか
// 	before_open:function(){// モーダルが開く前に行う動作
// 	  $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
// 	},
// 	after_close:function(){// モーダルが閉じた後に行う動作
// 	  $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
// 	}
// });
$(function () {
	$('.works_modal, .link_rule').magnificPopup({
	  type: 'inline',
	  preloader: false
	});
	//閉じるリンクの設定
	$(document).on('click', '.popup-modal-dismiss', function (e) { 
	  e.preventDefault();
	  $.magnificPopup.close();
	});

	//スライダー
	$('.top_image_slide').slick({
		autoplay: true,
		arrows: false,
		dots: false,
		infinite: true,
		autoplaySpeed: 3000,
		asNavFor:".top_image_thumb"
	});

	
	$(document).ready(function() {
		if ($(window).width() <= 1023) {
			$('.top_image_thumb').slick({
				slidesToShow: 3,
				vertical: false,
				focusOnSelect: true, // サムネイルクリックを有効化
				arrows: false,
				dots: false,
				infinite: true,
				asNavFor:".top_image_slide"
			});
		}
		else {
			$('.top_image_thumb').slick({
				slidesToShow: 3,
				vertical: true,
				focusOnSelect: true, // サムネイルクリックを有効化
				arrows: false,
				dots: false,
				infinite: true,
				asNavFor:".top_image_slide"
			});
		}
	 });
  });