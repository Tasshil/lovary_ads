document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. Configuration
    // ==========================================
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJ3sM27Dz25VwQyM-QldYPbv4-_y5wrX4kZcIYrSAdSSOJ6r0DsvfFqQ5K2Mkcthe9/exec';

    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu-overlay';
        mobileMenu.innerHTML = `
            <div class="mobile-menu-content">
                <div class="close-menu"><i class="fa-solid fa-xmark"></i></div>
                <ul class="mobile-links">
                    ${navLinks.innerHTML}
                </ul>
            </div>
        `;
        document.body.appendChild(mobileMenu);

        const closeMenuBtn = mobileMenu.querySelector('.close-menu');

        function toggleMenu() {
            mobileMenu.classList.toggle('active');
        }

        mobileToggle.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', toggleMenu));
    }

    // ==========================================
    // 2. Add to Cart Toast
    // ==========================================
    window.addToCart = (productName) => {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let count = parseInt(cartCount.innerText);
            cartCount.innerText = count + 1;
        }

        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => cartIcon.style.transform = 'scale(1)', 200);
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.dir = 'rtl';
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fa-solid fa-check-circle"></i>
                <div>
                    <h4>تمت الإضافة بنجاح</h4>
                    <p>تم إضافة ${productName} إلى سلة المشتريات</p>
                </div>
            </div>
        `;

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            backgroundColor: '#23201b',
            color: '#fff',
            padding: '15px 25px',
            borderRadius: '10px',
            border: '1px solid #e2b357',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            zIndex: '9999',
            minWidth: '300px',
            transform: 'translateY(20px)',
            opacity: '0',
            transition: 'all 0.4s ease'
        });

        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    };

    // ==========================================
    // 3. Header Scroll Effect
    // ==========================================
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.padding = '10px 0';
                header.style.backgroundColor = 'rgba(26, 24, 20, 0.98)';
            } else {
                header.style.padding = '20px 0';
                header.style.backgroundColor = 'rgba(26, 24, 20, 0.9)';
            }
        });
    }

    // ==========================================
    // 4. Hero Slider Logic Removed
    // ==========================================


    // ==========================================
    // 5. Product Page Logic
    // ==========================================
    if (document.querySelector('.product-page-body')) {

        // --- 5.1 Product Data ---
        // --- 5.1 Product Data ---
        const products = {

            'fasting': {
                title: 'لوحة "تقبل الله منك الصيام"',
                price: '3500',
                oldPrice: '4500',
                description: 'دعاء جميل يزين مائدتك في شهر الخير. "تقبل الله منك الصيام" تذكير دائم بروحانية الشهر.',
                image: 'img/b.jpg',
                badge: 'رمضان'
            },
            'health': {
                title: 'لوحة "بصحة وعافية"',
                price: '3500',
                oldPrice: '4500',
                description: 'أمنيات بالصحة والعافية لكل من يجلس على مائدتك. عبارة "بصحة وعافية" تزيد الطعام بركة.',
                image: 'img/c.jpg',
                badge: 'ترحيب'
            },
            'ramadan': {
                title: 'لوحة "رمضان كريم"',
                price: '3500',
                oldPrice: '4500',
                description: 'احتفل بقدوم الشهر الفضيل مع تصميم "رمضان كريم" الأنيق. لمسة تقليدية بأسلوب عصري.',
                image: 'img/d.jpg',
                badge: 'رمضان'
            },
            'eid': {
                title: 'لوحة "عيد مبارك"',
                price: '3500',
                oldPrice: '4500',
                description: 'فرحة العيد لا تكتمل إلا بالتفاصيل الجميلة. لوحة "عيد مبارك" تضفي بهجة خاصة على أيام العيد.',
                image: 'img/e.jpg',
                badge: 'العيد'
            }
        };

        // Check for Offer Context (Clean URL Price Override)
        if (window.offerContext) {
            Object.keys(products).forEach(key => {
                products[key].price = window.offerContext.price;
                products[key].oldPrice = window.offerContext.oldPrice;
                if (window.offerContext.pathPrefix) {
                    products[key].image = window.offerContext.pathPrefix + products[key].image;
                }
            });
        }

        const params = new URLSearchParams(window.location.search);
        let productId = params.get('id');

        window.selectProduct = function (id) {
            productData = products[id];
            if (!productData) return;

            // Scroll to order section
            const orderSection = document.querySelector('.product-detail-section');
            if (orderSection) orderSection.scrollIntoView({ behavior: 'smooth' });

            // Show selection message
            const msgEl = document.getElementById('selection-message');
            if (msgEl) {
                msgEl.style.display = 'block';
                // Optional: Hide after a few seconds or keep it? User said "specifies...". Keeping it is safer confirmation.
                msgEl.innerHTML = `<i class="fa-solid fa-check-circle"></i> لقد اخترت تصميم: ${productData.title}`;
            }

            window.baseProductPrice = parseInt(productData.price);
            window.currentProductPrice = window.baseProductPrice;

            // Update UI
            document.title = `${productData.title} - سجادات الفخامة`;
            document.getElementById('product-title').textContent = productData.title;
            // document.getElementById('breadcrumb-title').textContent = productData.title; 
            document.getElementById('product-price').textContent = `${productData.price} د.ج`;
            document.getElementById('product-old-price').textContent = `${productData.oldPrice} د.ج`;
            document.getElementById('product-description').textContent = productData.description;

            const mainImg = document.getElementById('main-product-img');
            if (mainImg) mainImg.src = productData.image; // Use single image for now

            const badgeEl = document.getElementById('product-badge');
            if (badgeEl) {
                badgeEl.textContent = productData.badge;
                badgeEl.className = 'badge';
                if (productData.badge === 'جديد') badgeEl.classList.add('new');
            }

            // Recalculate totals
            if (window.calculateShipping) window.calculateShipping();
        };

        // Default to 'ramadan'
        if (!productId) {
            productId = 'ramadan';
        }

        let productData = products[productId];

        if (productData) {
            document.title = `${productData.title} - سجادات الفخامة`;
            document.getElementById('product-title').textContent = productData.title;
            document.title = `${productData.title} - سجادات الفخامة`;
            document.getElementById('product-title').textContent = productData.title;
            const breadcrumb = document.getElementById('breadcrumb-title');
            if (breadcrumb) breadcrumb.textContent = productData.title;
            document.getElementById('product-price').textContent = `${productData.price} د.ج`;
            document.getElementById('product-old-price').textContent = `${productData.oldPrice} د.ج`;
            document.getElementById('product-description').textContent = productData.description;

            const mainImg = document.getElementById('main-product-img');
            if (mainImg) mainImg.src = productData.image;

            const badgeEl = document.getElementById('product-badge');
            if (badgeEl) {
                badgeEl.textContent = productData.badge;
                if (productData.badge === 'جديد') badgeEl.classList.add('new');
            }
        } else {
            // Fallback
            const grid = document.querySelector('.product-detail-grid');
            if (grid) grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 50px;"><h2>المنتج غير موجود</h2><a href="index.html" class="btn-primary">العودة للرئيسية</a></div>';
        }

        // --- 5.2 Image Gallery ---
        window.changeImage = function (element) {
            const mainImg = document.getElementById('product-img-main');
            // Fixing ID mismatch: user code used 'product-img-main' in HTML? 
            // Let's check HTML. It was 'main-product-img' in Step 475 replacement.
            // Wait, step 522 shows 'product-img-main' on line 241 of script.js?
            // But step 475 HTML had 'main-product-img'.
            // I will try to get 'main-product-img' first, then 'product-img-main'.

            const target = document.getElementById('main-product-img') || document.getElementById('product-img-main');
            if (target) target.src = element.src;

            document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
            element.classList.add('active');
        };

        // --- 5.3 Order Form Logic ---
        const orderForm = document.getElementById('order-form');
        if (orderForm && productData) {
            const wilayaSelect = document.getElementById('wilaya-select');
            const baladiyaSelect = document.getElementById('baladiya-select');
            const hubSelect = document.getElementById('hub-select');
            const baladiyaGroup = document.getElementById('baladiya-group');
            const hubGroup = document.getElementById('hub-group');
            const addressGroup = document.getElementById('address-group');
            const deliveryRadios = document.getElementsByName('delivery');

            const summaryShippingPrice = document.getElementById('summary-shipping-price');
            const summaryTotal = document.getElementById('summary-total');
            const summaryProductPrice = document.getElementById('summary-product-price');

            let currentPrice = parseInt(productData.price);
            let shippingPrice = 0;

            if (summaryProductPrice) summaryProductPrice.textContent = `${currentPrice} د.ج`;

            // Check Data Availability
            if (!window.appData || !window.appData.wilayas) {
                alert('عذراً، حدث خطأ في تحميل بيانات الولايات. يرجى تحديث الصفحة.');
                console.error('AppData missing');
                return;
            }

            // Populate Wilayas
            window.appData.wilayas.forEach(w => {
                const opt = document.createElement('option');
                opt.value = w.code;
                opt.textContent = `${w.code} - ${w.name}`;
                wilayaSelect.appendChild(opt);
            });

            // Update State
            function updateFormState() {
                const selectedRadio = document.querySelector('input[name="delivery"]:checked');
                if (!selectedRadio) return;

                const selectedType = selectedRadio.value;

                if (selectedType === 'desk') {
                    baladiyaGroup.style.display = 'none';
                    addressGroup.style.display = 'none';
                    hubGroup.style.display = 'block';

                    if (document.querySelector('#address-group input')) document.querySelector('#address-group input').required = false;
                    baladiyaSelect.required = false;
                    hubSelect.required = true;
                } else {
                    hubGroup.style.display = 'none';
                    baladiyaGroup.style.display = 'block';
                    addressGroup.style.display = 'block';

                    hubSelect.required = false;
                    if (document.querySelector('#address-group input')) document.querySelector('#address-group input').required = true;
                    baladiyaSelect.required = true;
                }
                calculateShipping();
            }

            // Handle Wilaya Change
            function handleWilayaChange() {
                const wilayaCode = wilayaSelect.value;
                const selectedRadio = document.querySelector('input[name="delivery"]:checked');
                const selectedType = selectedRadio ? selectedRadio.value : 'desk';

                if (!wilayaCode) {
                    calculateShipping();
                    return;
                }

                if (selectedType === 'desk') {
                    hubSelect.innerHTML = '<option value="">اختر المكتب</option>';
                    const hubs = window.appData.hubs.filter(h => h.wilayaCode === wilayaCode);
                    hubs.forEach(h => {
                        const opt = document.createElement('option');
                        opt.value = h.nameEn;
                        opt.textContent = h.nameAr;
                        hubSelect.appendChild(opt);
                    });
                } else {
                    baladiyaSelect.innerHTML = '<option value="">اختر البلدية</option>';
                    const communes = window.appData.communes[wilayaCode] || [];
                    communes.forEach(c => {
                        const opt = document.createElement('option');
                        opt.value = c;
                        opt.textContent = c;
                        baladiyaSelect.appendChild(opt);
                    });
                }
                calculateShipping();
            }

            // Calculate Shipping
            // Calculate Shipping
            window.calculateShipping = function () {
                const wilayaSelect = document.getElementById('wilaya-select');
                const summaryShippingPrice = document.getElementById('summary-shipping-price');
                const summaryTotal = document.getElementById('summary-total');
                const summaryProductPrice = document.getElementById('summary-product-price');

                // 1. Calculate Product Price based on Quantity
                let qty = 4;
                const qtyRadio = document.querySelector('input[name="person_count"]:checked');
                if (qtyRadio) {
                    if (qtyRadio.value === 'custom') {
                        const customVal = document.getElementById('custom-quantity').value;
                        qty = parseInt(customVal) || 4;
                    } else {
                        qty = parseInt(qtyRadio.value);
                    }
                }

                let finalProductPrice = window.baseProductPrice || 3500;

                if (window.offerContext && window.offerContext.customUnitPrice && qty > 4) {
                    finalProductPrice = qty * window.offerContext.customUnitPrice;
                } else if (qty === 5) {
                    finalProductPrice = 4000;
                } else if (qty >= 6) {
                    finalProductPrice = qty * 700;
                }

                window.currentProductPrice = finalProductPrice;
                if (summaryProductPrice) summaryProductPrice.textContent = `${finalProductPrice} د.ج`;

                // 2. Calculate Shipping
                const wilayaCode = wilayaSelect.value;
                const selectedRadio = document.querySelector('input[name="delivery"]:checked');
                const selectedType = selectedRadio ? selectedRadio.value : 'desk';
                let shippingPrice = 0;

                if (wilayaCode && window.appData.pricing && window.appData.pricing[wilayaCode]) {
                    const prices = window.appData.pricing[wilayaCode];
                    shippingPrice = selectedType === 'desk' ? prices.desk : prices.home;
                } else if (wilayaCode && window.appData.pricing.default) {
                    const def = window.appData.pricing.default;
                    shippingPrice = selectedType === 'desk' ? def.desk : def.home;
                } else {
                    shippingPrice = 0;
                    if (summaryShippingPrice) summaryShippingPrice.textContent = '---';
                    if (summaryTotal) summaryTotal.textContent = '---';
                    window.currentShippingPrice = 0;
                    return;
                }

                window.currentShippingPrice = shippingPrice;

                if (summaryShippingPrice) summaryShippingPrice.textContent = `${shippingPrice} د.ج`;
                if (summaryTotal) summaryTotal.textContent = `${finalProductPrice + shippingPrice} د.ج`;
            }

            // Initial call
            window.selectProduct('ramadan');

            // Events
            deliveryRadios.forEach(r => r.addEventListener('change', updateFormState));
            wilayaSelect.addEventListener('change', handleWilayaChange);

            // Re-trigger handleWilayaChange if delivery type changes while wilaya is selected
            deliveryRadios.forEach(r => r.addEventListener('change', () => {
                if (wilayaSelect.value) handleWilayaChange();
            }));

            // Styling click
            const deliveryOptionsLabels = document.querySelectorAll('.delivery-option');
            deliveryOptionsLabels.forEach(option => {
                option.addEventListener('click', () => {
                    deliveryOptionsLabels.forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                });
            });

            // Quantity Events
            document.querySelectorAll('input[name="person_count"]').forEach(r => {
                r.addEventListener('change', () => {
                    window.toggleCustomQuantity();
                    window.calculateShipping();
                });
            });
            document.getElementById('custom-quantity').addEventListener('input', window.calculateShipping);

            // Init
            updateFormState();

            // Submit
            orderForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = orderForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري الطلب...';
                btn.disabled = true;


                // Get selected color
                const selectedColor = document.querySelector('input[name="product_color"]:checked')?.value || 'غير محدد';

                // Get selected quantity
                let quantityVal = document.querySelector('input[name="person_count"]:checked')?.value;
                if (quantityVal === 'custom') {
                    const customInput = document.getElementById('custom-quantity');
                    quantityVal = customInput.value || 'غير محدد';
                }
                const quantityText = (quantityVal && !isNaN(quantityVal)) ? quantityVal + ' أشخاص' : (quantityVal || 'غير محدد');

                // Process Phone Number (+213)
                let rawPhone = orderForm.querySelector('input[placeholder="05xxxxxxxx"]').value;
                rawPhone = rawPhone.replace(/\D/g, ''); // Remove non-digits
                const formattedPhone = rawPhone.startsWith('0') ? rawPhone.replace(/^0/, '+213') : '+213' + rawPhone;

                const formData = {
                    name: orderForm.querySelector('input[placeholder="أدخل اسمك هنا"]').value,
                    phone: formattedPhone,
                    delivery: document.querySelector('input[name="delivery"]:checked').value === 'desk' ? 'OUI' : 'NON',
                    wilaya: wilayaSelect.options[wilayaSelect.selectedIndex]?.text || '',
                    baladiya: document.querySelector('input[name="delivery"]:checked').value === 'home' ? baladiyaSelect.value : '',
                    hub: document.querySelector('input[name="delivery"]:checked').value === 'desk' ? hubSelect.value : '',
                    address: document.querySelector('#address-group input').value,
                    price: window.currentProductPrice || 3500,
                    shipping: window.currentShippingPrice || 0,
                    total: (window.currentProductPrice || 3500) + (window.currentShippingPrice || 0),
                    color: selectedColor,
                    quantity: quantityText,
                    product: window.offerContext ? `${productData.title} [عرض: ${window.offerContext.price}]` : `${productData.title} [الرئيسية: 3500]`,
                    status: 'قيد المعالجة',
                    shipping_status: 'لم يرسل',
                    source: window.offerContext ? `صفحة العرض (${window.offerContext.price} د.ج)` : 'الصفحة الرئيسية (3500 د.ج)'
                };

                // Send to Google Sheet
                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Important for Google Apps Script
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }).then(() => {
                    console.log('Sent to Google Sheet');
                }).catch(err => console.error('Error sending to sheet', err));

                // WhatsApp Message
                setTimeout(() => {
                    const deliveryText = formData.delivery === 'OUI' ? 'مكتب' : 'منزل';
                    const message = `
*طلب جديد من الموقع* 🛍️
---------------------------
👤 *الاسم:* ${formData.name}
📱 *الهاتف:* ${formData.phone}
🎨 *اللون:* ${formData.color}
🔢 *العدد:* ${formData.quantity}
📦 *المنتج:* ${productData.title}
---------------------------
🚚 *التوصيل:* ${deliveryText}
📍 *الولاية:* ${formData.wilaya}
${formData.baladiya ? `🏘️ *البلدية:* ${formData.baladiya}` : ''}
${formData.hub ? `🏢 *المكتب:* ${formData.hub}` : ''}
${formData.address ? `🏠 *العنوان:* ${formData.address}` : ''}
---------------------------
💰 *السعر:* ${formData.price} د.ج
🚚 *الشحن:* ${formData.shipping} د.ج
💵 *الإجمالي:* ${formData.total} د.ج`;

                    const whatsappNumber = "213774263005";
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim())}`;

                    window.open(url, '_blank');

                    // Redirect to Thank You Page
                    setTimeout(() => {
                        const prefix = window.offerContext && window.offerContext.pathPrefix ? window.offerContext.pathPrefix : '';
                        window.location.href = prefix + 'thankyou.html';
                    }, 500);

                    // Reset
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 1000);
            });
        }
    }
});
// Toggle Custom Quantity Loop
window.toggleCustomQuantity = function () {
    const customInput = document.getElementById('custom-quantity');
    const isCustom = document.querySelector('input[name="person_count"]:checked')?.value === 'custom';

    if (customInput) {
        if (isCustom) {
            customInput.style.display = 'inline-block';
            customInput.required = true;
            customInput.focus();
        } else {
            customInput.style.display = 'none';
            customInput.required = false;
        }
    }
};

// Set Active Class for Qty Cards
window.setActiveQty = function (element) {
    document.querySelectorAll('.qty-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');

    // Trigger radio click if not already checked (simulated for better UX)
    const radio = element.querySelector('input[type="radio"]');
    if (!radio.checked) {
        radio.checked = true;
        toggleCustomQuantity();
    }
};

// Validate Minimum Value
window.validateMin = function (input) {
    if (input.value && input.value < 4) {
        input.setCustomValidity('العدد يجب أن يكون 4 أو أكثر');
    } else {
        input.setCustomValidity('');
    }
};

const style = document.createElement('style');
style.innerHTML = `
    .mobile-menu-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.8);
        z-index: 2000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        display: flex;
        justify-content: flex-end;
    }
    .mobile-menu-overlay.active { opacity: 1; visibility: visible; }
    
    .mobile-menu-content {
        width: 300px;
        height: 100%;
        background: #1a1814;
        padding: 40px;
        transform: translateX(-100%); 
        transition: transform 0.3s ease;
        border-left: 1px solid #333;
    }
    .mobile-menu-overlay.active .mobile-menu-content { transform: translateX(0); }
    .close-menu { font-size: 2rem; color: #e2b357; margin-bottom: 40px; cursor: pointer; }
    .mobile-links li { margin-bottom: 20px; }
    .mobile-links a { font-size: 1.2rem; display: block; }
`;
document.head.appendChild(style);
