const products = [
    // --- 🔋 PIN DỰ PHÒNG ---
    { 
        id: 1, 
        category: 'du-phong', 
        name: 'Sạc dự phòng 25.000 mah', 
        fullDesc: 'Sạc dự phòng 25.000 mah<br>Lõi pin: LGMJ1, EVE35V<br>Dung lượng: 25.000 mah<br>Công suất 22.5W<br>Chất liệu: Vỏ nhôm và nhựa ABS<br>Giá:420K',
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
        name: 'Trạm Sạc Dự Phòng 65W PD', 
        shortDesc: 'Sạc nhanh siêu tốc cho Laptop, Điện thoại, Máy tính bảng.', 
        fullDesc: 'Dung lượng thực 20.000mAh sử dụng lốc cell Lithium chính hãng nội trở thấp. Thiết kế vỏ hợp kim nhôm CNC tản nhiệt tốt, trang bị mạch sạc nhanh đa giao thức Power Delivery 65W.', 
        image: 'media/pin-du-phong/sac-65w.jpg'
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