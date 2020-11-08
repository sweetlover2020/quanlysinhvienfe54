// Khai báo lớp đối tượng trong javascrip Class (Prototype)
var SinhVien = function (maSV, tenSV, loaiSV, email, soDienThoai, diemToan, diemLy, diemHoa, diemRenLuyen) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.loaiSinhVien = loaiSV;
    this.email = email;
    // this.soDienThoai = soDienThoai;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemRenLuyen = diemRenLuyen;

    // Tính điểm trung bình
    this.tinhDiemTrungBinh = function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb.toFixed(1);
    };
    
    // Xếp loại sinh viên 
    this.xepLoaiSinhVien = function () {
        var diemTrungBinh = this.tinhDiemTrungBinh();
        if (this.diemRenLuyen < 5) {
            return ('Yếu');
        } else {
            if (diemTrungBinh < 5) {
                return ('Yếu');
            } else if (diemTrungBinh >= 5 && diemTrungBinh < 6) {
                return ('Trung bình');
            } else if (diemTrungBinh >= 6 && diemTrungBinh < 7) {
                return ('Trung bình khá');
            } else if (diemTrungBinh >= 7 && diemTrungBinh < 8) {
                return ('Khá');
            } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
                return ('Giỏi');
            } else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
                return ('Xuất sắc');
            } else {
                return ('Yếu');
            }
        }
    }
}