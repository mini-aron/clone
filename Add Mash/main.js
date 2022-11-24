$(document).ready(function() {
	var i=1; // 변수설정은 함수의 바깥에 설정!
  $("button").click(function() {
    
    $("#boxWrap").append("<p class='original'>등장"+i+"</p>");
    
    i++; // 함수 내 하단에 증가문 설정
    

  });
});