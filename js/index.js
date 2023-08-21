// https://2boki.tistory.com/120

// var id = ["phb1234", "qwer1234"];
//         var pw = ["11", "22"];

//         function login_check() {
//             var form = document.login_form;
//             // document 객체 안에 있는 login_form 정보를 가져옴

//             for (var i = 0; i < id.length; i++) {
//                 if (id[i] == form.id.value) {
//                     if (pw[i] == form.pw.value) {
//                         alert(id[i] + "님, 환영합니다.");
//                         location.href = "./main.html";
//                         break;
//                     }
//                     else {
//                         alert("비밀번호가 틀렸습니다.");
//                         break;
//                     }
//                 }
//                 else {
//                     alert("아이디가 틀렸습니다.");
//                     break;
//                 }
//             }
//         }

//         <body>
//     <form name="login_form">
//         아이디 : <input type="text" name="id"> <br>
//         비밀번호 : <input type="password" name="pw"> <br>

//         <input type="button" value="로그인" onclick="login_check()">
//     </form>
// </body>
