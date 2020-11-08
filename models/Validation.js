// Tạo lớp đối tượng kiểm tra hợp lệ 
// Tên lớp đối tượng viết hoa chữ cái đầu tiên
var Validation = function () {
    this.kiemTraRong = function (value, name, selectorError) {
        // (sv.maSinhVien, 'Mã sinh viên', 'kiemTraRong-maSinhVien')
        if (value.trim() === '') {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống!';
            // console.log("1");
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    // Kiểm tra email 
    this.kiemTraEmail = function (value, name, selectorError) {
        var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regexEmail.test(value)) {
            document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng!';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    // Kiểm tra tất cả các ký tự
    this.kiemTraTatCaKyTu = function (value, name, selectorError) {
        var regexKyTu = /^[A-Za-z ]+$/;
        if (!regexKyTu.test(value)) {
            document.querySelector(selectorError).innerHTML = name + ' tất cả phải là ký tự!';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    // Kiem tra tat ca la so
    this.kiemTraTatCaLaSo = function (value, name, selectorError) {
        var regexSo = /^[0-9+]+$/;
        if (!regexSo.test(value)) {
            document.querySelector(selectorError).innerHTML = name + ' tất cả phải là số!';
            return false;
        }
        document.querySelector(selectorError).innerHTML =  '';
        return true;
    }
    //
    this.kiemTraGiaTri = function (value, name, selectorError, minValue, maxValue) {
        if (Number(value) < minValue || Number(value) > maxValue){
            document.querySelector(selectorError).innerHTML = name + ` phải từ ${minValue} đến ${maxValue}!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    //
    this.kiemTraDoDaiChuoi = function (value, name, selectorError, minLength, maxLength){
        if (value.trim().length < minLength || value.trim().length > maxLength){
            document.querySelector(selectorError).innerHTML = name + ` độ dài ${minLength} - ${maxLength} ký tự`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}