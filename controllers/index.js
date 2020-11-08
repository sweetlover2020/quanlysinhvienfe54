// var sv = new sinhVien();
// sv.maSinhVien = 1;
// sv.tenSinhVien = 'Nguyễn Văn A';

// var sv2 = new sinhVien();
// sv2.maSinhVien = 2;
// sv2.tenSinhVien = 'Hoàng Văn Thụ';

// console.log(sv);
// console.log(sv2);
var mangSinhVien = [];
var validate = new Validation();
// Định nghĩa event khi người dùng bấm nút xác nhận
document.querySelector('#btnXacNhan').onclick = function () {

    // Tạo ra đối tượng chứa thông tin người dùng nhập vào từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;

    // Kỹ thuật cờ 
    var valid = true;

    // Kiểm tra rỗng 
    valid = validate.kiemTraRong(sv.maSinhVien, 'Mã sinh viên', '.kiemTraRong-maSinhVien')
        & validate.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '.kiemTraRong-tenSinhVien')
        & validate.kiemTraRong(sv.email, 'Email', '.kiemTraRong-email')
        & validate.kiemTraRong(sv.soDienThoai, 'Số điện thoại', '.kiemTraRong-soDienThoai')
        & validate.kiemTraRong(sv.diemToan, 'Điểm toán', '.kiemTraRong-diemToan')
        & validate.kiemTraRong(sv.diemLy, 'Điểm lý', '.kiemTraRong-diemLy')
        & validate.kiemTraRong(sv.diemHoa, 'Điểm hóa', '.kiemTraRong-diemHoa')
        & validate.kiemTraRong(sv.diemRenLuyen, 'Điểm rèn luyện', '.kiemTraRong-diemRenLuyen')

    // Kiểm tra định dạng dữ liệu 
    // Kiểm tra định dạng email
    valid &= validate.kiemTraEmail(sv.email, 'Email', '.kiemTraDinhDang-email')
    // Kiểm tra định dạng số điện thoại
    valid &= validate.kiemTraTatCaLaSo(sv.soDienThoai, 'Số điện thoại', '.kiemTraDinhDang-soDienThoai')
    // Kiểm tra định dạng tenSinhVien
    valid &= validate.kiemTraTatCaKyTu(sv.tenSinhVien, 'Tên sinh viên', '.kiemTraDinhDang-tenSinhVien')
    // Kiểm tra định dạng giá trị điểm số nhập vào
    valid &= validate.kiemTraTatCaLaSo(sv.diemToan, 'Điểm toán', '.kiemTraDinhDang-diemToan')
    valid &= validate.kiemTraTatCaLaSo(sv.diemLy, 'Điểm lý', '.kiemTraDinhDang-diemLy')
    valid &= validate.kiemTraTatCaLaSo(sv.diemHoa, 'Điểm hóa', '.kiemTraDinhDang-diemHoa')
    valid &= validate.kiemTraTatCaLaSo(sv.diemRenLuyen, 'Điểm rèn luyện', '.kiemTraDinhDang-diemRenLuyen')
    // Kiểm tra điểm giá trị số nhập vào
    valid &= validate.kiemTraGiaTri(sv.diemToan, 'Điểm toán', '.kiemTraGiaTri-diemToan', 0, 10)
    valid &= validate.kiemTraGiaTri(sv.diemLy, 'Điểm lý', '.kiemTraGiaTri-diemLy', 0, 10)
    valid &= validate.kiemTraGiaTri(sv.diemHoa, 'Điểm hóa', '.kiemTraGiaTri-diemHoa', 0, 10)
    valid &= validate.kiemTraGiaTri(sv.diemRenLuyen, 'Điểm rèn luyện', '.kiemTraGiaTri-diemRenLuyen', 0, 10)
    // Kiểm tra độ dài chuỗi 
    valid &= validate.kiemTraDoDaiChuoi(sv.tenSinhVien, 'Tên sinh viên', '.kiemTraDoDaiChuoi-tenSinhVien', 1, 32)
    valid &= validate.kiemTraDoDaiChuoi(sv.email, 'Email', '.kiemTraDoDaiChuoi-email', 10, 128)

    if (!valid) {
        return;
    }

    // // Kỹ thuật cờ 
    // var valid = true;
    // // ------------Kiểm tra hợp lệ---------------
    // // Kiểm tra rỗng
    // // .trim(): Hàm loại bỏ khoảng trống đầu và cuối của chuỗi 
    // if (sv.maSinhVien.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-maSinhVien => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML = '';
    // }

    // if (sv.tenSinhVien.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-tenSinhVien => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML = '';
    // }

    // if (sv.email.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-email => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-email').innerHTML = 'Email không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-email').innerHTML = '';
    // }

    // if (sv.soDienThoai.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-soDienThoai => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML = 'Số điện thoại không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML = '';
    // }

    // if (sv.diemToan.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-diemToan => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML = 'Điểm toán không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML = '';
    // }

    // if (sv.diemLy.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-diemLy => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML = 'Điểm toán không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML = '';
    // }

    // if (sv.diemHoa.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-diemHoa => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML = 'Điểm toán không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML = '';
    // }

    // if (sv.diemRenLuyen.trim() === '') {
    //     // Dom đến thẻ lỗi kiemTraRong-diemRenLuyen => Ghi nội dung lỗi vào innerHTML
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML = 'Điểm toán không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML = '';
    // }
    // // Kết thúc kiểm tra rỗng
    // // Điều kiện xác thực valid - Nếu valid = false thì không cho chương trình không in kết quả 
    // if (valid === false) {
    //     return;
    // }

    // Cách 1: Thêm sinh viên vào mảng
    mangSinhVien.push(sv);

    renderTable(mangSinhVien)

    // Lưu vào localstorage
    luuLocalStore();

    // Cách 2: Thêm sinh viên bằng giao diện
    // // Tạo thẻ trSinhVien, cú pháp tạo thẻ: document.createElement('tên thẻ');
    // var trSinhVien = document.createElement('tr');

    //  // Tạo thẻ tdMaSinhVien => chứa nội dung sv.maSinhVien
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;
    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;
    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;
    // var tdSoDienThoai = document.createElement('td');
    // tdSoDienThoai.innerHTML = sv.soDienThoai;
    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh().toFixed(1);
    // var tdXepLoai = document.createElement('td');
    // tdXepLoai.innerHTML = sv.xepLoaiSinhVien();

    // // Tạo ra td chức năng
    // var tdChucNang = document.createElement('td');
    // // Tạo nút button xóa
    // var buttonXoa = document.createElement('button');
    // buttonXoa.innerHTML = 'Xóa';
    // buttonXoa.className = 'btn btn-danger';
    // buttonXoa.onclick = function (){
    //     // this: là nút xóa
    //     // This vị trí hiện tại là thẻ button => .parentElement là thẻ td => td.parentElement => Thẻ tr => .remove('xóa')
    //     // 
    //     this.parentElement.remove();
    // }
    // //  Addbutton vào td
    //  tdChucNang.appendChild(buttonXoa);

    // // Chèn thẻ con vào thẻ cha: theCha.appendChild('theCon')
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdSoDienThoai);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // //Addbutton vào tr
    // trSinhVien.appendChild(tdChucNang);

    // // DOM den the tbody => appenChild thẻ tr vào 
    // document.querySelector('#tableSinhVien').appendChild(trSinhVien);

}


// Cách 1: 
var renderTable = function (arrSV) {
    // Từ mảng sinh viên tạo ra 1 chuỗi html nhiều thẻ tr dừa vào vòng lặp
    var noiDungtable = '';
    for (var index = 0; index < arrSV.length; index++) {
        // Mỗi lần lặp lấy ra 1 đối tượng sinhVien
        var sinhVien = arrSV[index];
        var sv = new SinhVien(sinhVien.maSinhVien, sinhVien.tenSinhVien, sinhVien.loaiSinhVien, sinhVien.email, sinhVien.soDienThoai, sinhVien.diemToan, sinhVien.diemLy, sinhVien.diemHoa, sinhVien.diemRenLuyen);

        // ------Gọi hàm trực tiếp như trên thay vì gọi quá nhiều------
        // sv.maSinhVien = sinhVien.maSinhVien
        // sv.tenSinhVien = sinhVien.tenSinhVien
        // sv.email = sinhVien.email
        // sv.soDienThoai = sinhVien.soDienThoai
        // sv.loaiSinhVien = sinhVien.loaiSinhVien
        // sv.diemToan = sinhVien.diemToan
        // sv.diemLy = sinhVien.diemLy
        // sv.diemHoa = sinhVien.diemHoa
        // sv.diemRenLuyen = sinhVien.diemRenLuyen

        // Tạo ra 1 chuỗi + dồn vào nội dung <tr></tr>
        noiDungtable += `
        <tr>
            <td class="text-center">${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.soDienThoai}</td>
            <td>${sv.tinhDiemTrungBinh()}</td>
            <td>${sv.xepLoaiSinhVien()}</td>
            <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xóa</button></td>
            <td><button class="btn btn-danger" onclick="chinhSua('${sv.maSinhVien}')">Sửa</button></td>
        </tr>
        `
    }
    // console.log(noiDungtable);
    document.querySelector('#tableSinhVien').innerHTML = noiDungtable;
}

// Cài đặt sự kiện cho nút button xóa 
var xoaSinhVien = function (maSV) {
    // alert(maSV);
    // mangSinhVien = [{ma:1, ten:'a'}, { ma:2,ten:'b'}]
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        // Mỗi lần duyệt lấy ra 1 đối tượng sinh Viên
        var sv = mangSinhVien[index];
        // Lấy mã sinh viên của từng đối tượng so sánh với maSV được click 
        if (sv.maSinhVien === maSV) {
            // Splice là hàm xóa phần tử của mảng dụa vào index 
            mangSinhVien.splice(index, 1);
        }
    }
    // Sau khi xóa dữ liệu trong mảng goij lại gàm tạo table truyền vào mảng sinh viên đã xóa 
    renderTable(mangSinhVien);
}

var chinhSua = function (maSV) {
    document.querySelector('#maSinhVien').disabled = true;
    // Từ mã sinh viên => Tìm sinh viên trong mangSinhVien
    for (var index = 0; index < mangSinhVien.length; index++) {
        // Mỗi lần duyệt mảng lấy ra 1 đối tượng sinh viên
        var sv = mangSinhVien[index];
        // So sánh nếu maSV truyền vào === với đối tượng đang duyệt => gán ngược lại lên các control phía trên
        if (maSV === sv.maSinhVien) {
            document.querySelector('#maSinhVien').value = sv.maSinhVien;
            document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
            document.querySelector('#email').value = sv.email;
            document.querySelector('#soDienThoai').value = sv.soDienThoai;
            document.querySelector('#loaiSinhVien').value = sv.loaiSinhVien
            document.querySelector('#diemToan').value = sv.diemToan;
            document.querySelector('#diemLy').value = sv.diemLy;
            document.querySelector('#diemHoa').value = sv.diemHoa;
            document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
        }
    }
    // alert(maSV)
}

// Viết hàm lưu trữ dữ liệu xuống máy tính client
var luuLocalStore = function () {
    // Biến mảng sv thành chuỗi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    // Đem chuỗi mangSinhVien lưu vào localstorage
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

// Viết phương thức lấy dữ liệu từ localStore => khi người dùng vừa vào trang web
var layMangSinhVienStorage = function () {
    // Kiểm tra dữ liệu ccos trong localStore không
    if (localStorage.getItem('mangSinhVien')) {
        // Lấy dữ liệu được lưu trong localStore ra ngoài
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        //BiếN dữ liệu từ chuỗi chuyển về object js gán vào mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);
        // Sau khi lấy dữ liệu ra gọi hàm tạo bảng
        renderTable(mangSinhVien);
    }
}

layMangSinhVienStorage();


// Cập nhật thông tin người dùng
document.querySelector('#btnLuuThongTin').onclick = function () {
    // Lấy thông tin người dùng sau khi thay đổi gán vào đối tượng sinhVien
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    // Tìm trong mangSinhVien đối tuognjw cùng mã => cập nhật lại giá trị
    for (var index = 0; index < mangSinhVien.length; index++) {
        var sinhVienCapNhat = mangSinhVien[index];
        // Tìm ra sinhVien trong mảng có mã = vớI mã sv trên giao diện => cập nhật giá trị
        if (sinhVienCapNhat.maSinhVien === sv.maSinhVien) {
            sinhVienCapNhat.maSinhVien = sv.maSinhVien;
            sinhVienCapNhat.tenSinhVien = sv.tenSinhVien;
            sinhVienCapNhat.email = sv.email;
            sinhVienCapNhat.soDienThoai = sv.soDienThoai;
            sinhVienCapNhat.loaiSinhVien = sv.loaiSinhVien;
            sinhVienCapNhat.diemToan = sv.diemToan;
            sinhVienCapNhat.diemLy = sv.diemLy;
            sinhVienCapNhat.diemHoa = sv.diemHoa;
            sinhVienCapNhat.diemRenLuyen = sv.diemRenLuyen;
        }
    }
    // Gọi hàm tạo lại bảng
    renderTable(mangSinhVien);
    // Gọi hàm lưu vòa localStorage
    luuLocalStore();

    document.querySelector('#maSinhVien').disabled = false;
}