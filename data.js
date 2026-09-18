// Biến toàn cục chứa danh sách sản phẩm (để các file khác như main.js gọi trực tiếp không bị lỗi)
let products = [];

// Hàm tự động đọc file Excel và điền dữ liệu vào mảng products
async function loadProductsFromExcel() {
    try {
        let response = await fetch('products.xlsx');
        if (!response.ok) throw new Error("Không tìm thấy file products.xlsx");
        
        let data = await response.arrayBuffer();
        let workbook = XLSX.read(data, { type: 'array' });
        
        // Lấy sheet đầu tiên trong file Excel
        let firstSheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[firstSheetName];
        
        // Chuyển dữ liệu Excel sang dạng JSON
        let rawData = XLSX.utils.sheet_to_json(worksheet);
        
        // Map dữ liệu chuẩn vào mảng products của bro
        products = rawData.map(item => ({
            id: isNaN(item.id) ? item.id : Number(item.id),
            category: item.category ? item.category.trim() : '',
            name: item.name,
            fullDesc: item.fullDesc ? item.fullDesc.replace(/\\n/g, '\n') : '',
            image: item.image ? item.image.trim() : '',
            images: item.images ? item.images.split(',').map(img => img.trim()) : (item.image ? [item.image.trim()] : [])
        }));

        // Thêm mục Video TikTok cố định vào cuối danh sách (nếu code gốc của bro có)
        products.push({
            id: "video-tiktok",
            name: "Video Kênh TikTok",
            category: "video",
            fullDesc: "Xem tất cả các video đóng pin và chia sẻ kỹ thuật tại kênh TikTok của mình nhé!",
            image: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
        });

        console.log("Đã load xong dữ liệu từ Excel cho trang web:", products);
        
        // Sau khi load xong, nếu trang web của bro có hàm render lại giao diện thì gọi nó ở đây
        if (typeof renderProducts === 'function') {
            renderProducts();
        } else if (typeof displayProducts === 'function') {
            displayProducts();
        }

    } catch (error) {
        console.error("Lỗi khi đọc file Excel:", error);
    }
}

// Kích hoạt chạy ngay khi load trang
loadProductsFromExcel();