console.log(axios);

// Kết nối backend dựa vào thư viện axios
// -------------- Lấy danh sách sinh viên API-------------------
var svService = new SinhVienService();
var layDanhSachSinhVienApi = function () {

    var promise = svService.layDanhSachSinhVienApi(); // Gọi đến BE lấy data

    // Xử lý cho trường hợp gọi thành công
    promise.then(function (result) {
        console.log('Kết quả', result.data);
        // Lấy dữ liệu server trả về gọi hàm tạo table
        renderTable(result.data);
    });

    // Xử lý cho trường hợp gọi thất bại
    promise.catch(function (error) {
        console.log('Lỗi', error);
    })
}
layDanhSachSinhVienApi();

var renderTable = function (mangSinhVien) {
    var noiDungTable = '';
    for (var i = 0; i < mangSinhVien.length; i++) {

        // Từ dữ liệu api tạo đối tượng lưu trữ
        var sv = new SinhVien();
        sv.maSinhVien = mangSinhVien[i].maSinhVien;
        sv.tenSinhVien = mangSinhVien[i].tenSinhVien;
        sv.diemToan = mangSinhVien[i].diemToan;
        sv.diemLy = mangSinhVien[i].diemLy;
        sv.diemHoa = mangSinhVien[i].diemHoa;
        sv.diemRenLuyen = mangSinhVien[i].diemRenLuyen;
        sv.loaiSinhVien = mangSinhVien[i].loaiSinhVien;
        sv.email = mangSinhVien[i].email;
        // Tạo các tr chứa thông tin sinh viên tương ứng
        noiDungTable += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.xepLoaiSinhVien()}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xóa</button></td>
                <td><button class="btn btn-primary" onclick="suaSinhVien('${sv.maSinhVien}')">Chỉnh sửa</button></td>
            </tr >
        `
    }
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
}

// ----------- Chức năng thêm sinh viên lữu trữ vào server thông quá api backend ----------
document.querySelector('#btnXacNhan').onclick = function () {
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    console.log(sv);
    // ------------------Dùng axios đưa dữ liệu vể server thông qua api BE cung cấp---------------------
    var promise = svService.themSinhVienApi(sv);

    // Hàm thực thi khi gọi ajax thành công
    promise.then(function (result) {
        console.log(result.data);
        layDanhSachSinhVienApi();
    })
    // Hàm thực thi khi gọi ajax thất bại
    promise.then(function (error) {
        console.log('Lỗi', error.response.data);
    })
}

// -------------- Chức năng xóa sinh viên--------------------
var xoaSinhVien = function (maSinhVien) {
    // Dùng axios đưa dữ liệu vể server thông qua api BE cung cấp
    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=` + maSinhVien, // Cach 1
        method: 'DELETE',
    })

    // Hàm thực thi khi gọi ajax thành công
    promise.then(function (result) {
        console.log(result.data);
        layDanhSachSinhVienApi();
    })
    // Hàm thực thi khi gọi ajax thất bại
    promise.then(function (error) {
        console.log('Lỗi: ', error.response.data);
    })
}

// -------------- Chức năng xóa sinh viên--------------------
var suaSinhVien = function (maSinhVien) {
    // alert(maSinhVien);
    // Dùng axios đưa dữ liệu vể server thông qua api BE cung cấp
    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=` + maSinhVien, // Cach 1
        method: 'GET',
    })

    // Hàm thực thi khi gọi ajax thành công
    promise.then(function (result) {
        console.log(result.data);
        document.querySelector('#maSinhVien').disabled = true;
        // Gán dữ liệu trả về lên giao diện
        document.querySelector('#maSinhVien').value = maSinhVien;
        document.querySelector('#tenSinhVien').value = result.data.tenSinhVien;;
        document.querySelector('#email').value = result.data.email;;
        document.querySelector('#loaiSinhVien').value = result.data.loaiSinhVien;;
        document.querySelector('#diemToan').value = result.data.diemToan;;
        document.querySelector('#diemLy').value = result.data.diemLy;;
        document.querySelector('#diemHoa').value = result.data.diemHoa;;
        document.querySelector('#diemRenLuyen').value = result.data.diemRenLuyen;;
    })
    // Hàm thực thi khi gọi ajax thất bại
    promise.then(function (error) {
        console.log('Lỗi: ', error.response.data);
    })
}

// --------------- Chức năng lưu thông tin sinh viên server dựa vào api backend cung cấp -------------------
document.querySelector('#btnLuuThongTin').onclick = function () {
    // lấy dữ liệu từ người dùng nhập đưa vào đối tượng theo format dữ liệu quả Backend yêu cầu
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    // Cach 1:
    // Gọi axios đưa dữ liệu về server cập nhật
    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=` + sv.maSinhVien, // Cach 1
        method: 'PUT',
        data: sv
    })

    // Hàm thực thi khi gọi ajax thành công
    promise.then(function (result) {
        console.log(result.data);
        layDanhSachSinhVienApi();
    })
    // Hàm thực thi khi gọi ajax thất bại
    promise.then(function (error) {
        console.log('Lỗi: ', error.response.data);
    })


    // // --------------- Cach 2: ----------------
    // var sinhVienCapNhat = {
    //     "maSinhVien": document.querySelector('#maSinhVien').value,
    //     "tenSinhVien": "string",
    //     "loaiSinhVien": "string",
    //     "diemToan": 0,
    //     "diemLy": 0,
    //     "diemHoa": 0,
    //     "diemRenLuyen": 0,
    //     "email": "string"
    // }
}