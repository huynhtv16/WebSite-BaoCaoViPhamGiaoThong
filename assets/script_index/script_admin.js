// tải menu 
function loadMenu() {
    fetch('menu.php')
        .then(response => response.text())
        .then(data => document.getElementById('menu-container').innerHTML = data);
}

function loadPage(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
      //  attachEventListeners(); // Gọi lại sự kiện sau khi tải trang
    });
}

//pop-up bao cao vi pham
function showForm() {
    document.getElementById("reportForm").classList.add("show");
}

function closeForm() {
    document.getElementById("reportForm").classList.remove("show");
}

window.onload = function() {
    loadMenu();
    loadPage('home.php');
};
//xử lý tiếng anh và tiếng việt
function changeLanguage(lang) {
    if (lang === 'vi') {
        alert("Đã chọn Tiếng Việt 🇻🇳");
    } else if (lang === 'en') {
        alert("English selected 🇺🇸");
    }
}


// Đóng modal
function closeModal() {
    document.getElementById("modal3").style.display = "none";
}

// Phóng to ảnh khi click vào ảnh trong modal
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".modal-image");

    images.forEach(img => {
        img.addEventListener("click", function() {
            this.classList.toggle("zoomed");
        });
    });
});



// $(document).ready(function () {
//     // Khi bấm nút Sửa, đổ dữ liệu sản phẩm vào form
//     $(".edit-btn").click(function () {
//         var id = $(this).data("id");
//         var ten_sp = $(this).data("ten");
//         var so_luong = $(this).data("sl");
//         var mo_ta = $(this).data("mota");
//         var gia_ban = $(this).data("gia");
//         var ma_danh_muc = $(this).data("madanhmuc");

//         $("input[name='ten_sp']").val(ten_sp);
//         $("input[name='so_luong']").val(so_luong);
//         $("input[name='mo_ta']").val(mo_ta);
//         $("input[name='gia_ban']").val(gia_ban);
//         $("input[name='ma_danh_muc']").val(ma_danh_muc);

//         // Xóa input ẩn cũ (nếu có) rồi thêm input ẩn mới chứa id sản phẩm
//         $("input[name='ma_san_pham']").remove();
//         $("#product-form").append('<input type="hidden" name="ma_san_pham" value="' + id + '">');

//         // Đổi chữ trên nút submit thành "Cập nhật sản phẩm"
//         $("button[type='submit']").text("Cập nhật sản phẩm");
//     });

//     // Khi bấm nút Xóa, gửi yêu cầu AJAX để xóa sản phẩm
//     $(".delete-btn").click(function () {
//         var id = $(this).data("id");
//         if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
//             $.ajax({
//                 url: "delete.php",
//                 type: "POST",
//                 data: { ma_san_pham: id },
//                 success: function (response) {
//                     alert(response);
//                     location.reload();
//                 }
//             });
//         }
//     });
// });


// Hàm tải danh sách báo cáo
function loadReports() {
    fetch('/BTL/frm/frm_admin/get_reports.php')
        .then(response => response.text())
        .then(html => {
            document.getElementById('reportList').innerHTML = html;
        })
        .catch(error => console.error('Lỗi tải danh sách:', error));
}

// Tải danh sách ban đầu và thiết lập interval
loadReports();
setInterval(loadReports, 5000); // Cập nhật mỗi 5 giây

// Xử lý hành động admin
function handleAdminAction(button, action) {
    const formData = new FormData(button.closest('form'));
    formData.append('action', action);

    fetch('/BTL/frm/frm_admin/home.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            loadReports(); // Tải lại danh sách sau khi xử lý
            alert('Thao tác thành công!');
        } else {
            alert('Có lỗi xảy ra khi xử lý');
        }
    })
    .catch(error => console.error('Error:', error));
}



