$(function(){
  //問題の初期化
  let char_index = 1;

  $(document).on("keypress", function(e){
    const $target = $("#char-" + char_index);
    const char = $target.text();
    if(e.key === char ){
      alert("正解");
      $target.removeClass("default");
      $target.addClass("correct");
      char_index++;
    }
  });

});
