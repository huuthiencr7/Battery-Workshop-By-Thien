// Khởi tạo mảng sản phẩm trống
let products = [];

async function loadProductsFromExcel() {
    try {
        console.log("Đang tiến hành kết nối đến file products.xlsx...");
        
        // 1. Kiểm tra fetch file
        let response = await fetch('products.xlsx');
        if (!response.ok) {
            throw new Error(`Không tìm thấy file products.xlsx (Mã lỗi: ${response.status})`);
        }
        
        let data = await response.arrayBuffer();
        
        // 2. Kiểm tra thư viện XLSX đã được nhúng trong index.html chưa
        if (typeof XLSX === 'undefined') {
            throw new Error("Chưa nhúng thư viện SheetJS (xlsx) vào file index.html!");
        }

        let workbook = XLSX.read(data, { type: 'array' });
        let firstSheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[firstSheetName];
        let rawData = XLSX.utils.sheet_to_json(worksheet);
        
        console.log("Đã đọc được dữ liệu thô từ Excel:", rawData);

        // 3. Map dữ liệu chuẩn hóa
        products = rawData.map(item => ({
            id: item.id,
            category: item.category ? String(item.category).trim() : '',
            name: item.name || '',
            fullDesc: item.fullDesc ? String(item.fullDesc).replace(/\\n/g, '\n') : '',
            image: item.image ? String(item.image).trim() : '',
            images: item.images ? String(item.images).split(',').map(img => img.trim()) : (item.image ? [String(item.image).trim()] : [])
        }));

        console.log("Mảng products sau khi xử lý thành công:", products);

        // 4. Kích hoạt vẽ lại giao diện cho tất cả các dạng hàm render phổ biến
        if (typeof renderProducts === 'function') renderProducts();
        if (typeof displayProducts === 'function') displayProducts();
        if (typeof loadCategory === 'function') loadCategory();
        
        // Nếu trang dùng sự kiện tự load của DOM
        document.dispatchEvent(new Event('DOMContentLoaded'));

    } catch (error) {
        console.error("CHI TIẾT LỖI:", error);
        alert("Lỗi tải sản phẩm từ Excel: " + error.message);
    }
}

// Chạy hàm ngay khi load
loadProductsFromExcel();