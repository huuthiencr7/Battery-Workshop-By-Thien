const products = [
    // --- 🔋 PIN DỰ PHÒNG ---
    { 
        id: 1, 
        category: 'du-phong', 
        name: 'Sạc dự phòng 25.000 mah', 
        fullDesc: 'Sạc dự phòng 25.000 mah\n Lõi pin: LGMJ1, EVE33V, EVE35V\n Dung lượng: 25.000 mah\n Công suất 22.5w\n Màu sắc: Đen, Xanh dương\n Cổng sạc input: Type C, Micro, Lightning\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ nhôm và nhựa ABS\n Kích thước: 160x82x24mm\n Giá:430K',
        image: 'media/sdp8cellnhom3.jpg', // Đường dẫn lấy ảnh từ thư viện media của m
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp8cellnhom3.jpg", 
           "media/sdp8cellnhom3_Blue.jpg",
           "media/sdp8cellnhom.jpg", 
           "media/sdp8cellnhom1.jpg",
           "media/sdp8cellnhom2.jpg"
          
        ]
       
    },
    { 
        id: 2, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 20.000 mah', 
        fullDesc: 'Sạc dự phòng 20.000 mah\n Lõi pin: LG50LT, LGM52VT, Samsung50E\n Dung lượng: 20.000 mah\n Công suất 22.5W\n Màu sắc: Đen, Xanh ngọc, Xám\n Cổng sạc input: Type C\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ nhôm và nhựa ABS\n Có đèn led, dây sạc type C và Lightning đi kèm\n Kích thước:120x52x55mm\n Giá:430K',
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
        fullDesc: 'Sạc dự phòng 25.000 mah\n Lõi pin: LGMJ1, EVE33V, EVE35V\n Dung lượng: 25.000 mah\n Công suất 22.5W\n Cổng sạc input: Type C, Lightning, Micro\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ mica và nhựa ABS\n Skin Pin in theo yêu cầu + 30K\n Kích thước: 150x45x56mm\n Giá:420K',
        image: 'media/sdp_8cell_18650_Skin1.jpg', // Đường dẫn lấy ảnh từ thư viện media của m
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp_8cell_18650_Skin1.jpg", 
           "media/sdp_8cell_18650_Skin4.jpg", 
           "media/sdp_8cell_18650_Skin2.jpg",
           "media/Skin_18650.jpg"
          
        ]
       
    },
    {         id: 4, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 20.000 mah', 
        fullDesc: 'Sạc dự phòng 20.000 mah\n Lõi pin: LG50LT, LGM52VT, Samsung50E\n Dung lượng: 20.000 mah\n Công suất 22.5W\n Cổng sạc input: Type C\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ nhôm và nhựa ABS\n Kích thước: 110x48x47mm\n Giá:420K',
        image: 'media/sdp_Nhom_4cell.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp_Nhom_4cell.jpg", 
           "media/sdp_Nhom_4cell2.jpg", 
           "media/sdp_Nhom_4cell3.jpg",
           "media/sdp_Nhom_4cell4.jpg"
        ]
    },
   {         id: 5, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 30.000 mah 100W', 
        fullDesc: 'Sạc dự phòng 30.000 mah\n Lõi pin: LG50LT, LGM52VT, Samsung50E\n Dung lượng: 30.000 mah\n Công suất tổng 100W\n Cổng sạc input: Type C\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ nhôm và nhựa ABS\n Kích thước: 180x80x27mm\n Giá: 800K',
        image: 'media/100w.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/100w.jpg", 
           "media/100w_sp1.jpg", 
           "media/100w_sp12.jpg"
        ]
    },
    {         id: 6, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 20.000 mah 100W', 
        fullDesc: 'Sạc dự phòng 20.000 mah\n Lõi pin: LG50LT, LGM52VT, Samsung50E\n Dung lượng: 20.000 mah\n Công suất 100W\n Cổng sạc input: Typmah\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ nhôm và nhựa ABS\n Giá: 700K',
        image: 'media/spd100w.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/spd100w.jpg", 
           "media/spd100w1.jpg" 
        ]
    },
    {         id: 7, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 10.000 mah', 
        fullDesc: 'Sạc dự phòng 10.000 mah\n Lõi pin: LG50LT, LGM52VT, Samsung50E\n Dung lượng: 10.000 mah\n Công suất 22.5W\n Cổng sạc input: Type C, Micro usb\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ nhôm và nhựa ABS\n Kích thước: 110x50x25mm\n Giá:300K',
        image: 'media/sdp_Nhom_2cell.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp_Nhom_2cell.jpg",  
           "media/sdp_Nhom_2cell_blue_Balck.jpg", 
           "media/sdp_Nhom_2cell_black.jpg",
           "media/sdp_Nhom_2cell_blue.jpg",
           "media/sdp_Nhom_2cell_type.jpg" 
        ]
    },
    {         id: 8, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 10.000 mah', 
        fullDesc: 'Sạc dự phòng 10.000 mah\n Lõi pin: LG50LT, LGM52VT, Samsung50E\n Dung lượng: 10.000 mah\n Công suất 22.5W\n Cổng sạc input: Type C\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ nhôm và nhựa ABS\n Kích thước: 80x56x24mm\n Giá:280K',
        image: 'media/sdp_Nhom_2cell_sample2.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/sdp_Nhom_2cell_sample2.jpg",  
           "media/sdp_Nhom_2cell_sample2_Blue.jpg"
        ]
    },
    {         id: 9, 
        category: 'du-phong', 
        name: 'Sạc Dự Phòng 10.000 mah', 
        fullDesc: 'Sạc dự phòng 10.000 mah\n Lõi pin: LG50LT, LGM52VT, Samsung50E\n Dung lượng: 10.000 mah\n Công suất 22.5W\n Cổng sạc input: Type C, Micro, Lightning\n Cổng sạc Output: USB, Type C\n Chất liệu: Vỏ Mica và nhựa ABS\n Kích thước: 85x55x38mm\n Giá: 280K',
        image: 'media/Spd_mica_2cell_21700_Yellow1.jpg',
         // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Spd_mica_2cell_21700_Yellow1.jpg",  
           "media/Spd_mica_2cell_21700_Blue.jpg",
           "media/charging port.jpg",
           "media/Discharging port.jpg"
        ]
    },
    // --- 🛠️ PIN MÁY CÔNG CỤ ---
    { 
        id: 20, 
        category: 'may-cong-cu', 
        name: 'Pin chân phổ thông 5Ah', 
        fullDesc: 'Pin chân phổ thông 5Ah\n  Phân loại: 10 Cell 18650, báo pin phía trước\n Lõi Pin: EVE25P , Vtc5d,Sunpower, EVE35V, EVE33v...\n Mạch bảo vệ: BW-60A, BM-90A, DX-100A\n Chất liệu: Nhựa ABS\n Giá: 450-550k\n Liên hệ để được tư vấn giá, chọn lõi pin và mạch phù hợp', 
        image: 'media/10_cell_PT_2.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/10_cell_PT_2.jpg",  
           "media/10_cell_PT.jpg",
           "media/10_cell_PT_1.jpg",
           "media/info_pho_thong.jpg"
        ]
    },
    { 
        id: 21, 
        category: 'may-cong-cu', 
        name: 'Pin chân phổ thông 5Ah', 
        fullDesc: 'Pin chân phổ thông 5Ah\n Phân loại: 10 Cell 18650, báo pin bên hông\n Lõi Pin: EVE25P ,Vtc5d , EVE35V, Sunpower...\n Mạch bảo vệ: Mạch DXIONG & BMS-SG-V1 90A\n Chất liệu: Nhựa ABS & đệm cao su\n Giá: 450-550k\n Liên hệ để được tư vấn giá, chọn lõi pin và mạch phù hợp', 
        image: 'media/10_cell_PT_led_suon_1.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/10_cell_PT_led_suon_1.jpg",  
           "media/10_cell_PT_led_suon.jpg",
           "media/info_pho_thong.jpg"
        ]
    },
    { 
        id: 22, 
        category: 'may-cong-cu', 
        name: 'Pin chân phổ thông 7.5Ah', 
        fullDesc: 'Pin chân phổ thông 7.5Ah\n Phân loại: 15 Cell 18650, báo pin phía trước\n Lõi Pin: EVE25P, Vtc5d, EVE35V, Sunpower...\n Mạch bảo vệ: BW-60A, BM-90A, DX-100A\n Chất liệu: Nhựa ABS\n Giá: 550-650k\n Liên hệ để được tư vấn giá, chọn lõi pin và mạch phù hợp',  
        image: 'media/15_cell_PT_2.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/15_cell_PT_2.jpg",  
           "media/15_cell_PT.jpg",
           "media/15_cell_PT_1.jpg",
           "media/info_pho_thong.jpg"
        ]
    },
    { 
        id: 23, 
        category: 'may-cong-cu', 
        name: 'Pin chân phổ thông 8Ah', 
        fullDesc: 'Pin chân phổ thông 8Ah\n Phân loại: 10 Cell 21700, báo pin phía trước\n Lõi Pin: EVE40P, Vtc6A, Samsung40T, LG50LT, Samsung50E...\n Mạch bảo vệ: BW-60A, BM-90A, DX-100A\n Chất liệu: Nhựa ABS\n Giá: 650-750K\n Liên hệ để được tư vấn giá, chọn lõi pin và mạch phù hợp', 
        image: 'media/10_cell_PT_21700_2.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/10_cell_PT_21700_2.jpg",  
           "media/10_cell_PT_21700_1.jpg",
           "media/10_cell_PT_21700.jpg"
         
        ]
    },
    { 
        id: 24, 
        category: 'may-cong-cu', 
        name: 'Pin chân phổ thông 12Ah', 
        fullDesc: 'Pin chân phổ thông 12Ah\n Phân loại: 15 Cell 21700, báo pin phía trước\n Lõi Pin: EVE40P, Vtc6A, Samsung40T, LG50LT, Samsung50E...\n Mạch bảo vệ: BW-60A, BM-90A, DX-100A\n Chất liệu: Nhựa ABS\n Giá: 850K-1tr\n Liên hệ để được tư vấn giá, chọn lõi pin và mạch phù hợp', 
        image: 'media/Pin_15cell_21700.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Pin_15cell_21700.jpg",  
           "media/Pin_15cell_21700_2.jpg",
           "media/Pin_15cell_21700_1.jpg"
         
        ]
    },
    { 
        id: 25, 
        category: 'may-cong-cu', 
        name: 'Đóng pin theo yêu cầu', 
        fullDesc: 'Makita, Milwaukee, Bosch, DCA...', 
        image: 'media/Mil.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Makita.jpg",
           "media/Mil.jpg",  
           "media/Bosch.jpg",
           "media/DCA.jpg"
         
        ]
    },
    
    // ---  Acquy Xe Máy ---
    { 
        id: 30, 
        category: 'Acquy-Xe-May', 
        name: 'Acquy Xe Máy YT4 Mẫu 1', 
        fullDesc: 'Acquy Xe Máy YT4\n Kích thước (Dài x Rộng x Cao): Khoảng 113 mm x 70 mm x 85 mm. \n Phân loại:\n- Honda: Air Blade (đời cũ), Click, Future (từ năm 2008 trở đi), Wave (các dòng RS, RSV, 100s, ZX), Blade, Winner, Super Cub\n - Yamaha: Exciter, Nouvo (đời 1-5), Nozza, Acruzo, Grande, Janus, Sirius (sau 2010), Jupiter\n - Suzuki: Viva, Axelo, Address, Hayate.\n Lõi Pin: LFP 32700, LFP A123B\n Mạch bảo vệ: BW-QD600A\n Chất liệu: Nhựa ABS & Cọc bình mạ đồng\n Giá: 400-450K', 
        image: 'media/Acquy_YT4_1_1.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Acquy_YT4_1_1.jpg",  
           "media/Acquy_YT4_1.jpg"
         
         
        ]
    },
    { 
        id: 31, 
        category: 'Acquy-Xe-May', 
        name: 'Acquy Xe Máy YT4 Mẫu 2', 
        fullDesc: 'Acquy Xe Máy YT4\n Kích thước (Dài x Rộng x Cao): Khoảng 113 mm x 70 mm x 85 mm. \n Phân loại:\n- Honda: Air Blade (đời cũ), Click, Future (từ năm 2008 trở đi), Wave (các dòng RS, RSV, 100s, ZX), Blade, Winner, Super Cub\n - Yamaha: Exciter, Nouvo (đời 1-5), Nozza, Acruzo, Grande, Janus, Sirius (sau 2010), Jupiter\n - Suzuki: Viva, Axelo, Address, Hayate.\n Lõi Pin: LFP 32700, LFP A123B\n Mạch bảo vệ: BW-QD600A\n Chất liệu: Nhựa ABS & Cọc bình mạ đồng\n Giá: 400-450K', 
        image: 'media/Acquy_YT4_2_2.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Acquy_YT4_2_2.jpg",
           "media/Acquy_YT4_2_1.jpg",   
           "media/Acquy_YT4_2.jpg"
         
         
        ]
    },
     { 
        id: 32, 
        category: 'Acquy-Xe-May', 
        name: 'Acquy Xe Máy YT4 Mẫu 3', 
        fullDesc: 'Acquy Xe Máy YT4\n Kích thước (Dài x Rộng x Cao): Khoảng 113 mm x 70 mm x 85 mm. \n Phân loại:\n- Honda: Air Blade (đời cũ), Click, Future (từ năm 2008 trở đi), Wave (các dòng RS, RSV, 100s, ZX), Blade, Winner, Super Cub\n - Yamaha: Exciter, Nouvo (đời 1-5), Nozza, Acruzo, Grande, Janus, Sirius (sau 2010), Jupiter\n - Suzuki: Viva, Axelo, Address, Hayate.\n Lõi Pin: LFP 32700, LFP A123B\n Mạch bảo vệ: BW-QD600A\n Chất liệu: Nhựa ABS & Cọc bình mạ đồng\n Giá: 400-450K', 
        image: 'media/Acquy_YT4_3.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Acquy_YT4_3.jpg",  
                  
        ]
    },
    { 
        id: 33, 
        category: 'Acquy-Xe-May', 
        name: 'Acquy Xe Máy YT5 Mẫu 1', 
        fullDesc: 'Acquy Xe Máy YT5\n Kích thước (Dài x Rộng x Cao): Khoảng 113 mm x 70 mm x 105 mm. \n Phân loại:\n- Honda: Air Blade (đời cũ), Click, Future (từ năm 2008 trở đi), Wave (các dòng RS, RSV, 100s, ZX), Blade, Winner, Super Cub\n - Yamaha: Exciter, Nouvo (đời 1-5), Nozza, Acruzo, Grande, Janus, Sirius (sau 2010), Jupiter\n - Suzuki: Viva, Axelo, Address, Hayate.\n Lõi Pin: LFP 32700, LFP A123B\n Mạch bảo vệ: BW-QD600A\n Chất liệu: Nhựa ABS & Cọc bình mạ đồng\n Giá: 400-550K', 
        image: 'media/Acquy_YT5_1_2.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Acquy_YT5_1_2.jpg",  
           "media/Acquy_YT5_1.jpg"
         
         
        ]
    },
    { 
        id: 34, 
        category: 'Acquy-Xe-May', 
        name: 'Acquy Xe Máy YT5 Mẫu 2', 
        fullDesc: 'Acquy Xe Máy YT5\n Kích thước (Dài x Rộng x Cao): Khoảng 113 mm x 70 mm x 105 mm. \n Phân loại:\n- Honda: Air Blade 125cc (các đời có hệ thống đề từ / Idling Stop), Lead 125cc (đời dùng đề từ / Lead mới), SH Mode 125cc, SH 125i / 150i (các đời sử dụng đề từ), PCX 125cc, Vision (một số đời hoặc tùy phiên bản hộc bình), Click Thái / Vario\n - Yamaha: Nozza 115cc / Nozza Grande 125cc, Janus\n - Suzuki: Impulse 125cc (dòng xe tay ga phổ thông của Suzuki)\n Lõi Pin: LFP 32700, LFP A123B\n Mạch bảo vệ: BW-QD600A\n Chất liệu: Nhựa ABS & Cọc bình mạ đồng\n Giá: 400-550K', 
        image: 'media/Acquy_YT5_2_2.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Acquy_YT5_2_2.jpg",  
           "media/Acquy_YT5_2_1.jpg",
           "media/Acquy_YT5_2.jpg"
        ]
    },
     { 
        id: 35, 
        category: 'Acquy-Xe-May', 
        name: 'Acquy Xe Máy YT5 Mẫu 3', 
        fullDesc: 'Acquy Xe Máy YT5\n Kích thước (Dài x Rộng x Cao): Khoảng 113 mm x 70 mm x 105 mm. \n Phân loại:\n- Honda: Air Blade 125cc (các đời có hệ thống đề từ / Idling Stop), Lead 125cc (đời dùng đề từ / Lead mới), SH Mode 125cc, SH 125i / 150i (các đời sử dụng đề từ), PCX 125cc, Vision (một số đời hoặc tùy phiên bản hộc bình), Click Thái / Vario\n - Yamaha: Nozza 115cc / Nozza Grande 125cc, Janus\n - Suzuki: Impulse 125cc (dòng xe tay ga phổ thông của Suzuki)\n Lõi Pin: LFP 32700, LFP A123B\n Mạch bảo vệ: BW-QD600A\n Chất liệu: Nhựa ABS & Cọc bình mạ đồng\n Giá: 400-550K', 
        image: 'media/Acquy_YT5_3_2.jpg',
        // Thêm mảng này để chứa nhiều hình cho phần xem chi tiết
        images: [
           "media/Acquy_YT5_3_2.jpg",  
           "media/Acquy_YT5_3_1.jpg"
         
        ]
    },
    // ---  PIN CHO LƯU TRỮ & Thiết bị điện tử---
    
    // ---  DIY LOA ---
    

    
    
    // ---  Video tham khảo ---
    {
    id: "video-tiktok",
    name: "Video Kênh TikTok",
    category: "video", // Đây là key để hàm nhận diện
    fullDesc: "Xem tất cả các video đóng pin và chia sẻ kỹ thuật tại kênh TikTok của mình nhé!",
    image: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" // Bro có thể thay bằng link ảnh đại diện
    },
];