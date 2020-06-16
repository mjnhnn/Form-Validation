var element = document.querySelector('.box>img');
var element2 = document.querySelector('.ligh');
var submit = document.querySelector('input[type="button"]');

setTimeout(() => {
    setInterval(() => {
        element.classList.toggle('red') // Xóa class sau 3 giây
        element2.classList.toggle('ligh') // Xóa class sau 3 giây
    }, 2000)
}, 5000);

var acc = document.querySelector('.acc');
var pass = document.querySelector('.pass');
console.log(acc)
submit.onclick = function() {
    if (acc.value == "admin" && pass.value == "admin") {
        alert('Đăng nhập thành công');
        window.location.href = "admin.html";
        return true;
    }
    if (acc.value == "") {
        alert('Bạn chưa nhập tài khoản')
        acc.focus();
        return false;
    }
    if (pass.value == "") {
        alert('Bạn chưa nhập mật khẩu')
        pass.focus();
        return false;
    } else {
        alert('Sai tài khoản hoặc mật khẩu')
    }

}

// var cf = confirm('haha');
// if (cf == true) {
//     document.querySelector('#p').innerHTML = cf
// } else {
//     document.querySelector('#p').innerHTML = cf
// }