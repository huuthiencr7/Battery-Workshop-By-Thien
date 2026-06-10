// =========================================================================
// I. CÁC HÀM ĐIỀU HƯỚNG VIEW
// =========================================================================
function openCategory(catCode, catName) {
    hideAllViews();
    document.getElementById('category-view').classList.replace('hidden-view', 'active-view');
    document.getElementById('category-title').innerText = catName;
    renderProducts(catCode);
}

function goHome() {
    hideAllViews();
    document.getElementById('home-view').classList.replace('hidden-view', 'active-view');
}

function hideAllViews() {
    ['home-view', 'category-view'].forEach(id => {
        document.getElementById(id).classList.remove('active-view');
        document.getElementById(id).classList.add('hidden-view');
    });
}

// =========================================================================
// II. HÀM RENDER SẢN PHẨM (ĐÃ TỐI ƯU CÁC CLASS)
// =========================================================================
function renderProducts(cat) {
    const list = document.getElementById('product-list');
    const filtered = products.filter(p => p.category === cat);
    
    if(filtered.length === 0) {
        list.innerHTML = `<p class="sub-desc italic col-span-3 text-center py-10">Sản phẩm đang được cập nhật...</p>`;
        return;
    }

    list.innerHTML = filtered.map(p => `
        <div class="bg-card border border-gray-700 rounded-2xl overflow-hidden hover:border-yellow-500 transition-all duration-300 shadow-xl flex flex-col justify-between h-full group">
            <div>
                <div class="img-container overflow-hidden h-56 cursor-pointer bg-inner flex items-center justify-center p-2" onclick="showDetail(${p.id})">
                    <img src="${p.image}" alt="${p.name}" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://via.placeholder.com/500x300?text=Battery+Workshop'">
                </div>
                <div class="p-6 text-center">
                    <h3 class="prod-name mb-2 group-hover:text-highlight transition-colors">${p.name}</h3>
                </div>
            </div>
            <div class="p-6 pt-0 flex justify-center">
                <span onclick="showDetail(${p.id})" class="detail-link font-semibold hover:underline flex items-center gap-1">
                    Xem chi tiết cấu hình &rarr;
                </span>
            </div>
        </div>
    `).join('');
}

// =========================================================================
// III. HÀM POP-UP CHI TIẾT (ĐÃ TỐI ƯU CÁC CLASS)
// =========================================================================
let currentImgIndex = 0;
let currentImgList = [];

function showDetail(id) {
    const p = products.find(item => item.id === id);
    const content = document.getElementById('modal-content');
    currentImgList = p.images && p.images.length > 0 ? [...p.images] : [p.image];
    currentImgIndex = 0;
    const arrowClass = currentImgList.length > 1 ? '' : 'hidden';

    content.innerHTML = `
        <div class="flex flex-col items-center text-center w-full">
            <div class="relative w-full max-w-full md:max-w-[450px] mx-auto h-[45vh] md:h-[350px]">
                <div class="img-container w-full h-full rounded-xl bg-inner shadow-inner border border-gray-700 overflow-hidden flex items-center justify-center">
                    <img id="main-target-img" src="${currentImgList[0]}" class="max-w-full max-h-full object-contain transition-all duration-300">
                </div>
                <button onclick="changeImage(-1)" class="${arrowClass} absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all z-10 text-xl font-bold border border-white/20">&#10094;</button>
                <button onclick="changeImage(1)" class="${arrowClass} absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all z-10 text-xl font-bold border border-white/20">&#10095;</button>
            </div>
            <p class="text-lg uppercase tracking-wider mt-6 mb-4 font-semibold text-gray-700">
                Danh mục: ${p.category === 'du-phong' ? 'Pin Dự Phòng' : p.category === 'may-cong-cu' ? 'Pin Máy Công Cụ' : 'Pin Lưu Trữ hehe'}
            </p>
        <div class="bg-inner p-5 rounded-xl mb-6 border border-gray-500 flex flex-col items-center justify-center">
            <p class="text-sm leading-relaxed whitespace-pre-line text-left">${p.fullDesc}</p>
        </div>

        </div>
    `;
    document.getElementById('product-modal').classList.remove('hidden');
}

function closeModal() { document.getElementById('product-modal').classList.add('hidden'); }

function changeImage(direction) {
    if (currentImgList.length <= 1) return;
    currentImgIndex = (currentImgIndex + direction + currentImgList.length) % currentImgList.length;
    document.getElementById('main-target-img').src = currentImgList[currentImgIndex];
}