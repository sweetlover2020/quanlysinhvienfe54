// Lớp đối tượng chứa các phương thức giao tiếp với BE
var SinhVienService = function () {
    this.layDanhSachSinhVienApi = function () {
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', // BE cung cấp
            method: 'GET', // BE cung cấp
        })
        return promise;
    }
    this.themSinhVienApi = function(sv){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
            method: 'POST',
            data: sv // Dữ liệu gửi đi (Lưu ý: Dữ liệu gửi đi phải đúng format dữ liệu của BE)
        })
        return promise;
    }
}