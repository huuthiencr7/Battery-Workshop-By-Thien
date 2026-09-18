// Biến toàn cục chứa danh sách sản phẩm
let products = [];

// Hàm tự động đọc file Excel
async function loadProductsFromExcel() {
    try {
        let response = await fetch('products.xlsx');
        if (!response.ok) throw new Error("Không tìm thấy file products.xlsx");
        
        let data = await response.arrayBuffer();
        let workbook = XLSX.read(data, { type: 'array' });
        
        // Lấy sheet đầu tiên
        let firstSheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[firstSheetName];
        
        // Chuyển dữ liệu Excel sang mảng JSON
        let rawData = XLSX.utils.sheet_to_json(worksheet);
        
        // Format lại dữ liệu cho khớp với code web
        products = rawData.map(item => ({
            id: isNaN(item.id) ? item.id : Number(item.id),
            category: item.category,
            name: item.name,
            fullDesc: item.fullDesc ? item.fullDesc.replace(/\\n/g, '\n') : '',
            image: item.image,
            // Cắt chuỗi ảnh phụ bằng dấu phẩy thành mảng
            images: item.images ? item.images.split(',').map(img => img.trim()) : [item.image]
        }));

        // Thêm mục Video TikTok cố định vào cuối
        products.push({
            id: "video-tiktok",
            name: "Video Kênh TikTok",
            category: "video",
            fullDesc: "Xem tất cả các video đóng pin và chia sẻ kỹ thuật tại kênh TikTok của mình nhé!",
            image: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
        });

        console.log("Đã tải thành công sản phẩm từ Excel!", products);
    } catch (error) {
        console.error("Lỗi đọc file Excel:", error);
        alert("Không thể đọc file products.xlsx! Hãy đảm bảo bro đang chạy web qua Local Server.");
    }
}

// Chạy hàm load dữ liệu ngay khi load file js