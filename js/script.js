// jQueryの場合
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// ハンバーガーメニューないのリンクがクリックされると
// メニューを閉じて遷移する
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// スムーススクロール jQuery ver
// 今回はCSSでスムーススクロール実装
// jQuery('a[href^="#"]').on("click", function (e) {
//   const speed = 300;
//   const id = jQuery(this).attr("href");
//   const target = jQuery("#" === id ? "html" : id);
//   const position = jQuery(target).offset().top - 80;

//   jQuery("html, body").animate(
//     {
//       scrollTop: position,
//     },
//     speed,
//     "swing" //swing or linear
//   );
// });
