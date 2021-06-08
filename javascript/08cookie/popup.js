/* 쿠키생성, 쿠키확인 함수를 선언 */


function createCookie() {
    var c = document.getElementById("checkbox");
    c.addEventListener("click", createCookie);
    if(document.getElementById("checkbox").checked == true) {

        var date = new Date();
        date.setDate(date.getDate() + 1);
    
        var cookie = "ddd = 123; expires=" + date;
    
        document.cookie = cookie;

        window.close();
    }
}

    window.onload = function() {

        var cookie = document.cookie;
        for(var i in cookie) {
            if(cookie[i].indexOf("ddd" != -1)) {
                return;
            }
        }
        
                var popup = setTimeout(function() {
                window.open("popup.html", "팝업창","width=500, height=500, top=100")
            }, 1000);

    }
