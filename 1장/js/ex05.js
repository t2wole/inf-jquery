function hello() {
    var rnd1 = Math.floor(Math.random() * 20);
    var rnd2 = Math.floor(Math.random() * 40);
    var rnd3 = Math.floor(Math.random() * 3) + 100;

    // 흔들기
    $(".hello").css({
        "bottom" : rnd1,
        "left" : rnd2
    })
}
// 0.01초마다 hello()함수가 호출됨
setInterval(hello, 10);