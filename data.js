const products = [
    // --- 🔋 PIN DỰ PHÒNG ---
    { 
        id: 1, 
        category: 'du-phong', 
        name: 'Sạc dự phòng 25.000 mah', 
        fullDesc: 'Sạc dự phòng 25.000 mah<br>Lõi pin: LGMJ1, EVE35V<br>Dung lượng: 25.000 mah<br>Công suất 22.5W<br>Cổng sạc input: Type C, Micro, Lightning<br>Cổng sạc Output: USB, Type C<br>Chất liệu: Vỏ nhôm và nhựa ABS<br>Kích thước: 160x82x24<br>Giá:420K',
        image: 'media/sdp8cellnhom3.jpg', // Đường dẫn lấy ảnh từ thư viện media của m
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp8cellnhom3.jpg", 
           "media/sdp8cellnhom.jpg", 
           "media/sdp8cellnhom1.jpg",
           "media/sdp8cellnhom2.jpg"
          
        ]
       
    },
    { 
        id: 2, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 20.000 mah', 
        fullDesc: 'Sạc dự phòng 20.000 mah<br>Lõi pin: LG50LT, LGM52VT, Samsung50E<br>Dung lượng: 20.000 mah<br>Công suất 22.5W<br>Cổng sạc input: Type C<br>Cổng sạc Output: USB, Type C<br>Chất liệu: Vỏ nhôm và nhựa ABS<br>Có đèn led và dây sạc type C và Lightning đi kèm<br>Kích thước:120x52x55<br>Giá:450K',
        image: 'media/sdp_Nhom_4cell_Lightandcable_Green.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp_Nhom_4cell_Lightandcable_Green.jpg", 
           "media/sdp_Nhom_4cell_Lightandcable_White.jpg", 
           "media/sdp_Nhom_4cell_Lightandcable.jpg"
          
        ]
    },
    { 
        id: 3, 
        category: 'du-phong', 
        name: 'Sạc dự phòng 25.000 mah', 
        fullDesc: 'Sạc dự phòng 25.000 mah<br>Lõi pin: LGMJ1, EVE35V<br>Dung lượng: 25.000 mah<br>Công suất 22.5W<br>Cổng sạc input: Type C<br>Cổng sạc Output: USB, Type C<br>Chất liệu: Vỏ mica và nhựa ABS<br>Skin Pin in theo yêu cầu +20K<br>Kích thước: 150x45x56<br>Giá:400K',
        image: 'media/sdp_8cell_18650_Skin1.jpg', // Đường dẫn lấy ảnh từ thư viện media của m
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp_8cell_18650_Skin1.jpg", 
           "media/sdp_8cell_18650_Skin4.jpg", 
           "media/sdp_8cell_18650_Skin2.jpg",
           "media/Skin_18650.jpg"
          
        ]
       
    },
    { 
        id: 4, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 20.000 mah', 
        fullDesc: 'Sạc dự phòng 20.000 mah<br>Lõi pin: LG50LT, LGM52VT, Samsung50E<br>Dung lượng: 20.000 mah<br>Công suất 22.5W<br>Cổng sạc input: Type C<br>Cổng sạc Output: USB, Type C<br>Chất liệu: Vỏ nhôm và nhựa ABS<br>Kích thước: 110x48x47<br>Giá:420K',
        image: 'media/sdp_Nhom_4cell.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp_Nhom_4cell.jpg", 
           "media/sdp_Nhom_4cell2.jpg", 
           "media/sdp_Nhom_4cell3.jpg",
           "media/sdp_Nhom_4cell4.jpg"
        ]
    },

    // --- 🛠️ PIN MÁY CÔNG CỤ ---
    { 
        id: 3, 
        category: 'may-cong-cu', 
        name: 'Nâng Cấp Pin Milwaukee 18V - Cell Xả Cao', 
        shortDesc: 'Độ lại lốc cell Sony/Murata VTC6A 30A chính hãng.', 
        fullDesc: 'Dịch vụ nâng cấp toàn diện cho pack pin Milwaukee đã chai hoặc yếu. Thay thế hoàn toàn bằng cell Sony VTC6A dòng xả cực đại lên đến 30A, giúp máy khoan, máy cắt, máy mài không bị ngắt mạch khi kéo tải nặng đột ngột.', 
        image: 'media/may-cong-cu/milwaukee-vtc6a.jpg'
    },
    { 
        id: 4, 
        category: 'may-cong-cu', 
        name: 'Phục Hồi Pin Makita - Reset Chip Quản Lý', 
        shortDesc: 'Chuyên trị pin Makita báo lỗi đèn chớp, thay lốc cell mới.', 
        fullDesc: 'Giải pháp sửa chữa triệt để lỗi khóa mạch của pin Makita bằng công cụ NodeMCU kết hợp phần mềm chuyên dụng. Thay thế lốc cell cũ bằng lốc cell mới chất lượng cao dung lượng 4.0Ah - 5.0Ah.', 
        image: 'media/may-cong-cu/makita-repair.jpg'
    },

    // --- 🏠 PIN CHO LƯU TRỮ ---
    { 
        id: 5, 
        category: 'luu-tru', 
        name: 'Hệ Pin Lưu Trữ LFP 12V 100Ah Solar', 
        shortDesc: 'Chuyên dụng cho hệ thống năng lượng mặt trời và UPS dự phòng.', 
        fullDesc: 'Cấu thành từ 4 cell LFP 100Ah dòng A+ mới 100%. Tuổi thọ đạt trên 3500 chu kỳ xả nạp sâu (tương đương 8-10 năm sử dụng liên tục). Đóng trong thùng cách điện thẩm mỹ.', 
        image: 'media/luu-tru/solar-100ah.jpg'
    }
];