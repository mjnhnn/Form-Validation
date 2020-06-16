/* 
// khai báo biến
var fullName = 'dang ngoc son';
var age = '16';
alert(fullName);
alert(age);
*/

/** 
// 1 số hàm build-in
alert
console
confirm
prompt
setTimeout

// setInterval(function() {
//     alert('thongbao')
// }, 2000);

// confirm('Xác nhận')

// prompt('nhập tuổi của b')
*/

/* 
var number = 9;

var output = --number + number--;
// 8 
console.log('output: ', output);
*/


// var a = 1;
// a -= 2
// console.log(a)

// var name = 'son';
// name = name + ' dang'
// console.log(name)

// var a = 'ngo van minh';
// var b = 'ngo van minh';
// if (a == b) {
//     console.log('dieu kien dung')
// } else {
//     console.log('dieu kien sai')
// }


// if (true) {
//     console.log('dieu kien dung')
// } else {
//     console.log('dieu kien sai')
// }

// var a = 1;
// var b = 2;
// if (!(a > 0)) {
//     console.log('dieu kien dung')
// } else {
//     console.log('dieu kien sai')
// }

// number type
// var a = 1;

// string type
// var name = 'son \'dang';
// console.log(name);

// // boolean type
// var isSuccess = true;

// // undefinded type
// var age;
// console.log(age)

// // null type
// var isNull = null;
// console.log(isNull)

// symbol type
// var id = Symbol('id'); // unique(duy nhaast)
// var id2 = Symbol('id'); // unique(duy nhaast)
// console.log(id == id2)

// // funtion
// var myfuntion = function() {
//     alert('chao cac ban');
// }

// // Object type
// var myObject = {
//     name: 'son dang',
//     age: '18',
//     adress: 'ha noi',
//     myfuntion: function() {

//     }

// };
// console.log(myObject)
// console.log('myObject', myObject)

// var myArray = [
//     'javascript',
//     'php',
//     'php'
// ];
// console.log(myArray);

// var firstname = 'minh';
// var lastname = 'ngo';
// console.log(`Ten toi la: ${ firstname }  ${ lastname }`);

// function myFuntion() {
//     alert('hi');
// }
// myFuntion();




// var list = [{
//     id: 1,
//     name: 'minh',
//     age: 18,
// }, {
//     id: 2,
//     name: 'hien',
//     age: 18,
// }];

// var boolean = list.some(function(indexx, list) {
//     return indexx.id === 1;
// })
// console.log(boolean);
// var courses = [
//     { name: 'Javascript', vnd: 1000000 },
//     { name: 'PHP', vnd: 990000 },
//     { name: 'HTML, CSS', vnd: 0 }
// ]

// function courseHandler() {
//     return 123
// }
// var newCourse = courses.map(courseHandler);

// console.log(newCourse);



// Ví dụ Array reduce method

var depthArray = [1, 2, [3, 4], 5, [6, 7, 8]];

var flatArray = depthArray.reduce(
    function(output, depthArray) {
        return output.concat(depthArray);
    }, []
);
console.log(flatArray);



/*
object constructor

function objconstructor(firstname, lastname, avatar) {
    this.firstname = firstname,
        this.lastname = lastname,
        this.avatar = avatar,
        this.fullname = function() {
            return `${this.firstname} ${this.lastname}`
        }
}
var athor = new objconstructor('minh', 'hien', 'hanh');
var user = new objconstructor('Trinh', 'nhung', 'huyen');
athor.title = 'Minh là siêu nhân';
user.cmt = 'Minh pro no 1';

console.log(athor);
console.log(athor.fullname());
*/


/* object prototype
function objconstructor(firstname, lastname, avatar) {
    this.firstname = firstname,
        this.lastname = lastname,
        this.avatar = avatar,
        this.fullname = function() {
            return `${this.firstname} ${this.lastname}`
        }
}
objconstructor.prototype.date = '12/12/2092';
objconstructor.prototype.getClassName = function() {
    return this.date;
}
var athor = new objconstructor('minh', 'hien', 'hanh');
var user = new objconstructor('Trinh', 'nhung', 'huyen');

console.log(athor.date);
console.log(athor.fullname());
console.log(athor.getClassName());
*/




// Làm việc với chuỗi

length()
indexof('keywork', 'start') //lastindexof 
seach(/abs/g) //biểu thức chính quy 
    //nếu không tìm thấy sẽ ra -1
slice(start, end)
replace('a', 'a sau khi thay thế')
toUpercase() // chuyển đổi chữ hoa
toUperlowercase() // chuyển đổi chữ thường
trim() //loại bỏ phần thừa giữa 2 đầu của 1 chuỗi
split('điểm chung') // chuyển chuỗi thành array (mảng), cần có điểm chung hợp lý
charAt('vị trí') // lấy ra 1 ký tự trong 1 index cho trước



// làm việc với số
// kiểm tra số không hợp lệ thì sử dụng hàm isNaN
toString() // chuyển số sang chuỗi
toFixed(2) // làm tròn số 




// Làm việc với mảng (array)

toString() // chuyển mảng sang dạng chuỗi
join('-') // giống như chuyển mảng sang chuỗi nhưng có thể truyền vào khoảng cách giữa các phần tử
pop() // xóa phần tử cuối mảng và trả về phần tử đã xóa , xóa hết sẽ trả về undefined
push() // thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
shift() // xóa phần tử đầu mảng và trả về phần tử đã xóa , xóa hết sẽ trả về undefined
unshift() // thêm phần tử vào đầu mảng và trả về độ dài mới của mảng
splice(2, 2) // vị trí xóa bắt đầu từ 2 và xóa đến phần tử thứ 2 kể từ vị trí muốn xóa(ở đây là 2)
splice(2, 0, 'phần tử') // không xóa phần tử nào và chèn thêm phần tử mới vào vị trí số 2
concat('mảng cần nối') // nối mảng
slice() // cắt toàn bộ hoặc 1 vài element của mảng 

// Làm việc với mảng (array) phần 2

forearch() // dùng để duyệt qua từng phần tử của mảng
every() // dùng để kiểm tra tất cả phần tử của 1 mảng phải thỏa mãn điều kiện gì đó, chỉ cần 1 điều kiện sai sẽ trả về false và dừng vòng lặp
some() // dùng để kiểm tra các phần tử của 1 mảng có thỏa mãn điều kiện gì đó , chỉ cần 1 điều kiện đúng sẽ trả về true
find() // dùng để tìm kiếm, chỉ trả về 1 phần tử thỏa mãn điều kiện
filter() // dùng để tìm kiếm nhưng trả về tất cả các phần tử thỏa mãn điều kiện
map('function(element, index, originArray)') // hàm được truyền vào return cái gì thì phương thức map sẽ trả về cái đó(1 mảng), có thể return về mã html
reduce('function..., Giá trị khởi tạo') //
    // function...(biến lưu trữ, vị trí element(currentvalue), index của currentvalue, originArray(mảng gốc))
    {

    }

// Đối tượng date

var date = new Date;

var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDay();

console.log(`${day} / ${month} / ${year}`);


// Lệnh rẽ nhánh if else

var date = 2;
if (date === 2) {
    console.log('Hôm nay là thứ 2')
} else if (date === 3) {
    console.log('Hôm nay là thứ 3')
} else {
    console.log('Không biết')
}



// Lệnh rẽ nhánh Switch case

var date2 = 6; // input
switch (date2) {
    case 2: // Trường hợp xảy ra
    case 3:
    case 4:
        console.log('2, 3, 4');
        break; // Thoát khỏi case
    case 5:
        console.log('5');
        break;
    default: // Ngoại lệ
        console.log('Không biết')
}


// Toán tử 3 ngôi

var course = {
    name: 'javascript',
    coin: 0
}
var result = course.coin > 0 ? `${course.coin} Coin` : 'Miễn phí';

console.log(result)

// Vòng lặp for

for (var i = 1; i <= 1000; i++) {
    // console.log(i);
}

var myArray_for = [
    'java',
    'html css',
    'ruby'
];

var myArray_for_length = myArray_for.length;

for (var i = 0; i < myArray_for_length; i++) {
    console.log(myArray_for[i]);
}

// Vòng lặp for/in

var myInfo_forin = {
    name: 'minh',
    age: '18'
};

for (var key in myInfo_forin) {
    // console.log(myInfo_forin[key]);
};


// Vòng lặp for/of

var language = {
    name: 'java',
    age: 18
};
Object.keys(language) // chuyển object thành mảng

for (var value of Object.keys(language)) {
    console.log(language[value])
}


// Vòng lặp while

var languages = [
    'php',
    'sql'
];

// var whiles_length = whiles.length;
var i = 0;
while (i < languages.length) {
    console.log(languages[i]);
    i++;
};
// Vòng lặp do while

// var i2 = 0;
// do {
//     i2++;
//     console.log(i2);
// }
// while (i2 < 10);

var i = 0;
var napthethanhcong = false;
do {
    i++;
    console.log('nạp thẻ lần ' + i);
    //thành công
    if (true) {
        napthethanhcong = true;
    }
}
while (!napthethanhcong && napthethanhcong <= 3)



// Break và continue trong vòng lặp

for (var i = 0; i < 10; i++) {

    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
    if (i >= 5) {
        break;
    }
}

// Vòng lặp lồng nhau

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[j].length; j++) {
        console.log(myArray[i][j]);
    }
}

// Ví dụ về vòng lặp

for (var i = 100; i > 0; i--) {
    console.log(i);
}

// Math object

console.log(Math.PI);
console.log(Math.round(1.8));
console.log(Math.abs(-9));
console.log(Math.ceil(9.1));
console.log(Math.floor(9.9));
console.log(Math.random());

console.log(Math.floor(Math.random() * 10))

var random = Math.floor(Math.random() * 3);

var bonus = [
    '10',
    '20',
    '30'
];

console.log(bonus[random])

var random = Math.floor(Math.random() * 100);
if (random < 5) {
    console.log('Nâng cấp thành công!');
}

console.log(Math.max(-100, 20, 30))

console.log(Math.min(-100, 20, 30))



// Callback
function myFuntion(param) {
    param();
}

function myCallback(value) {
    console.log('value: ', value)
}

myFuntion(myCallback);

// Callback 2

var course = [
    'html',
    'css',
    'js'
]
var htmls = course.map(
    function() {
        return `<h2>${course}</h2>`;
    }
)

console.log(htmls.join());





Array.prototype.map2 = function() {
    var ouput = [];
    var arraylength = this.length;
    for (var i = 0; i < arraylength; i++) {
        var result = callback(this[i], i)
        ouput.push(result);
    }
    return ouput;
}


var htmls = course.map2(
    function() {
        return `<h2>${course}</h2>`;
    }
)
console.log(htmls.join());


// Emppty element of Array

var course = [
    'html',
    'css'
];

course.length = 10;

for (var index in course) {
    console.log(course[index]);
}

// my forearch method

Array.prototype.foreach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

var course = new Array(100);
course.push('html', 'css');
course.foreach2(
    function(course, index, array) {
        console.log(course, index, array)
    }
)

// My filter() method

Array.prototype.filter2 = function(callback) {
    var ourput = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this);
            if (result) {
                ourput.push(this[i])
            }
        }
    }
    return ourput;
}


var course = [{
        coin: '100'
    },
    {
        coin: '200'
    },
    {
        coin: '300'
    }
]

var fitterCourse = course.filter2(function(element, index, array) {
    return element.coin > '100';
});
console.log(fitterCourse);


// My some() method

Array.prototype.some2 = function(callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {
                return true;
            }
        }
    }
    return false;
}
var course = [{
        coin: '100'
    },
    {
        coin: '200'
    },
    {
        coin: '300'
    }
]

var fitterCourse = course.some(function(element, index, array) {
    return element.coin === '100';
});
console.log(fitterCourse);

//My every() method

Array.prototype.every2 = function(callback) {
    var ourput = true;
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this);
            if (!result) {
                ourput = false;
                break;
            }

        }
    }
    return ourput;
}
var course = [{
        coin: '100'
    },
    {
        coin: '200'
    },
    {
        coin: '300'
    }
]

var fitterCourse = course.every2(function(element, index, array) {
    return element.coin > '10';
});
console.log(fitterCourse);



// HTML DOM
'Document Object model', 'Mã HTML được browser nhận và tạo ra 1 mô hình gọi là DOM'
'DOM có 3 thành phần: element, attribute, text'
'html DOM không phải của javascript, javascript cung cấp những công cụ để trỏ vào html DOM'
'javascript có thể chạy trên browser hoặc có thể chạy trên server(thường là node js)'

// Document object
'document là đại diện cho toàn bộ website'

// Get element methods trong DOM
'1. element: get qua ID, Class, Tag, Css selector, HTML collection'
document.getElementById('id') // trả về trực tiếp element
document.getElementsByClassName('class') // trả về đối tượng html colection gồm 1 mảng
document.getElementsByTagName('h1') // trả về đối tượng html colection gồm 1 mảng
'css selector'
document.querySelector('.title .tile2 ...') // trả về trực tiếp element
document.querySelectorAll('.title') // trả về tất cả các class title 



// Get element methods trong DOM phần 2
var boxNode = document.querySelector('.box');

console.log(boxNode.querySelector('.box-child'))

// Attribute node & Text node
// bao gồm element node, attribute node, text node

// DOM attribute
VD: var element = document.querySelector('h1'); // GET element
element.className = 'index.html'; // thêm attribute vào thẻ h1
element.setAttribute('href', 'index.html'); // thêm attribute không tồn tại vào thẻ h1
element.getAttribute('className'); // lấy ra value của attribute class trong thẻ h1 

// InnerText vs textContent Property 
// InnerText , là thuộc tính của element node
// InnerText: lấy ra textnode nằm trong element node, trả về y như những gì nhìn thấy và loại bỏ khoảng trắng, element con, vẫn bị css tác động
vd:
    var a = document.querySelector('h1');
a.innerText // lấy ra textnode trong element h1
a.innerText = 'update' // sửa nội dung textnode trong element h1
    // textContent , là thuộc tính của element node lẫn textnode
    // textContent: giống innerText nhưng trả về nguyên bản của element được chọn bao gồm cả khoảng trắng, xuống dòng...



// InnerHTML vs OuterHTML Property, là 2 thuộc tính của element node
// InnerHTML thêm vào trong element
var element = document.querySelector('.box');
element.innerHTML = '<h1 class="haha">hi</h1>';

console.log(element)
    // OuterHTML thêm vào chính element gọi đến nó


// Node properties


// DOM CSS
// css inline, Cú pháp viết css khác với css thông thường
var element = document.querySelector('.box');

element.style.width = '100px';
element.style.height = '100px';
element.style.backgroundColor = 'red';

Object.assign(element.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'blue'
});

// ClassList Property

// add thêm class
var element = document.querySelector('.box');
element.classList.add('red')
    // contains kiểm tra xem class có tồn tại hay không
var element = document.querySelector('.box');
element.classList.contains('red') // trả về true
    // remove xóa class
var element = document.querySelector('.box');
element.classList.add('red')
setTimeout(() => {
        element.classList.remove('red') // Xóa class sau 3 giây
    }, 3000)
    // toggle sẽ kiểm tra xem có class đó không, không có thì add nếu có thì remove
var element = document.querySelector('.box');
element.classList.add('red')
setInterval(() => {
    element.classList.toggle('red') // Xóa class sau 3 giây
}, 1000)


// DOM Event

// Atribute Event
// Assign event using the element node(gán sự kiện được thực hiện)
vd
var h1Element = document.querySelectorAll('.h1');
for (var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}

// DOM events example
// 1. input / select
// 2. Keyup / down

// PreventDefault and StopPropagation
// 1. PreventDefault () Ngăn chặn hành vi mặc định được trình duyệt cho lên thẻ trong dom html
var element = document.querySelector('.h1')
for (var i = 0; i < element.length; i++) {
    element[i].onclick = function(e) {
        if (!e.target.href.startsWith('https')) {
            e.preventDefault();
        }
    }
}

var element = document.querySelector('ul')
element.onmousedown = function(e) {
        e.preventDefault();
    }
    // StopPropagation (Ngăn chặn hành vi nổi bọt)

document.querySelector('div').onclick = function() {
    console.log('div')
}
document.querySelector('div_child').onclick = function(e) {
    e.stopPropagation();
    console.log('div_child')
}



// Thực hành HTML DOM
// Form validation - Phần 1