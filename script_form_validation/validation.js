var btnResgiter = document.getElementById('resgiter')
var formResgiter = document.querySelector('form')
var close = document.querySelector('.form-resgiter__close')
var overlay = document.querySelector('.overlay')
btnResgiter.onclick = function() {
    formResgiter.classList.add('form-opacity-scale')
}
close.onclick = function() {
    formResgiter.classList.remove('form-opacity-scale')
}
overlay.onclick = function() {
    if (formResgiter.classList.contains('form-opacity-scale') === true) {
        formResgiter.classList.remove('form-opacity-scale')
    }
}

// onkeydown / onkeyup
document.onkeydown = function(e) {
    switch (e.which) {
        case 27:
            formResgiter.classList.remove('form-opacity-scale')
            break;
    }
};

// đối tượng validator
function Validator(option) {
    var selectorRules = {};
    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
        var errorMessage;
        // lấy ra các rule của selector
        var rules = selectorRules[rule.selector]
            // Lặp qua từng rule và kiểm tra, nếu có lỗi thì dừng kiểm tra
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.querySelector('input').classList.add('inputError')
        } else {
            errorElement.innerText = ''
            inputElement.parentElement.querySelector('input').classList.remove('inputError')
        }
        return !errorMessage;
    }

    // lấy Element của form cần validate
    var formElement = document.querySelector(option.form)
    if (formElement) {
        // khi ấn submit form thì loại bỏ hành động mặc định của button submit
        formElement.onsubmit = function(e) {
                e.preventDefault();
                var isFormValid = true;
                // Lặp qua từng rule và validate luôn
                option.rules.forEach(function(rule) {
                    var inputElement = formElement.querySelector(rule.selector);
                    var isValid = validate(inputElement, rule);
                    if (!isValid) {
                        isFormValid = false;
                    }
                });
                if (isFormValid) {
                    // trường hợp submit với javascript
                    if (typeof option.onSubmit === 'function') {

                        var enableInputs = formElement.querySelectorAll('[name]:not([disable])');
                        var formValue = Array.from(enableInputs).reduce(
                            function(value, input) {
                                return (value[input.name] = input.value) && value;
                            }, {}
                        );
                        option.onSubmit(formValue);
                    }
                    // trường hợp submit với hành vi mặc định của trình duyệt
                    else {
                        formElement.submit();
                    }
                }
            }
            // Lặp qua mỗi rule và lắng nghe sự kiện blur ...
        option.rules.forEach(function(rule) {

            // lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // xử lý trường hợp người dùng blur khỏi input
                inputElement.onblur = function() {
                        validate(inputElement, rule);
                    }
                    // xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
                    errorElement.innerText = ''
                    inputElement.parentElement.querySelector('input').classList.remove('inputError')
                }
            }

        });

    }
};

// Định nghĩa Rules
// Nguyên tắc của các rules:
// 1. khi có lỗi => trả ra message lỗi
// 2. khi không có lỗi thì không trả ra gì cả
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'vui lòng nhập trường này';
        },
    }

}
Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        },
    }
}
Validator.minlength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `vui lòng nhập tối thiểu ${min} ký tự`;
        },
    }

}
Validator.confirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'giá trị nhập vào không chính xác';
        },
    }

}