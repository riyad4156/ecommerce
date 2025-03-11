document.addEventListener('DOMContentLoaded', function() {
    // Product Data
    const products = [
        {
            id: 1,
            name: "Security Camera",
            category: "cameras",
            price: 99.99,
            discountPrice: null,
            images: {
                primary: "https://theme-shoppee.myshopify.com/cdn/shop/products/04-02_238x286.jpg?v=1607663199",
                secondary: "https://theme-shoppee.myshopify.com/cdn/shop/products/23_238x286.jpg?v=1608024349"
            },
            inStock: true,
            isNew: true,
            isFeatured: true,
            colors: ["Black", "White", "Silver"],
            sizes: ["S", "M", "L"],
            description: "High-quality security camera with night vision and motion detection."
        },
        {
            id: 2,
            name: "Instant Camera",
            category: "cameras",
            price: 129.99,
            discountPrice: 119.99,
            images: {
                primary: "images/slider-01_1265x.webp",
                secondary: "images/slider-02_1265x.webp"
            },
            inStock: true,
            isNew: false,
            isFeatured: true,
            colors: ["Yellow", "Blue", "Pink"],
            sizes: ["S", "M", "L"],
            description: "Capture memories instantly with this easy-to-use instant camera."
        },
        {
            id: 3,
            name: "Mirrorless Camera",
            category: "cameras",
            price: 599.99,
            discountPrice: null,
            images: {
                primary: "images/02_370x240.avif",
                secondary: "images/03_370x240.avif"
            },
            inStock: true,
            isNew: true,
            isFeatured: true,
            colors: ["Black", "Silver"],
            sizes: ["M", "L"],
            description: "Professional mirrorless camera with high-resolution sensor and 4K video recording."
        },
        {
            id: 4,
            name: "Action Camera",
            category: "cameras",
            price: 199.99,
            discountPrice: 179.99,
            images: {
                primary: "images/04_370x240.avif",
                secondary: "images/05_370x240.avif"
            },
            inStock: false,
            isNew: false,
            isFeatured: false,
            colors: ["Black", "Blue", "Red"],
            sizes: ["S", "M"],
            description: "Waterproof action camera for capturing your adventures."
        },
        {
            id: 5,
            name: "Vintage Camera",
            category: "cameras",
            price: 349.99,
            discountPrice: null,
            images: {
                primary: "images/05-02_238x286.avif",
                secondary: "images/11-02_238x286.avif"
            },
            inStock: true,
            isNew: false,
            isFeatured: true,
            colors: ["Brown", "Black"],
            sizes: ["M", "L"],
            description: "Classic vintage-style camera with modern features."
        },
        {
            id: 6,
            name: "DSLR Camera",
            category: "cameras",
            price: 799.99,
            discountPrice: 749.99,
            images: {
                primary: "images/12-02_145x.webp",
                secondary: "images/categories-02_200x280.avif"
            },
            inStock: true,
            isNew: true,
            isFeatured: true,
            colors: ["Black", "Silver"],
            sizes: ["M", "L", "XL"],
            description: "Professional DSLR camera with interchangeable lenses and high-speed shooting."
        },
        {
            id: 7,
            name: "Wide Angle Lens",
            category: "lenses",
            price: 299.99,
            discountPrice: null,
            images: {
                primary: "images/categories-04_200x280.avif",
                secondary: "images/categories-05_200x280.avif"
            },
            inStock: true,
            isNew: true,
            isFeatured: false,
            colors: ["Black"],
            sizes: ["S", "M", "L"],
            description: "Wide angle lens for capturing landscapes and architecture."
        },
        {
            id: 8,
            name: "Telephoto Lens",
            category: "lenses",
            price: 399.99,
            discountPrice: 349.99,
            images: {
                primary: "images/slider-01_1265x.webp",
                secondary: "images/slider-02_1265x.webp"
            },
            inStock: true,
            isNew: false,
            isFeatured: true,
            colors: ["Black", "Silver"],
            sizes: ["M", "L"],
            description: "Telephoto lens for capturing distant subjects with clarity."
        },
        {
            id: 9,
            name: "Camera Tripod",
            category: "accessories",
            price: 79.99,
            discountPrice: null,
            images: {
                primary: "images/02_370x240.avif",
                secondary: "images/03_370x240.avif"
            },
            inStock: true,
            isNew: false,
            isFeatured: false,
            colors: ["Black", "Silver"],
            sizes: ["S", "M", "L"],
            description: "Sturdy tripod for stable camera positioning."
        },
        {
            id: 10,
            name: "Camera Bag",
            category: "accessories",
            price: 49.99,
            discountPrice: 39.99,
            images: {
                primary: "images/04_370x240.avif",
                secondary: "images/05_370x240.avif"
            },
            inStock: true,
            isNew: true,
            isFeatured: false,
            colors: ["Black", "Gray", "Blue"],
            sizes: ["S", "M", "L"],
            description: "Padded camera bag for safely transporting your equipment."
        },
        {
            id: 11,
            name: "Memory Card",
            category: "accessories",
            price: 29.99,
            discountPrice: null,
            images: {
                primary: "images/05-02_238x286.avif",
                secondary: "images/11-02_238x286.avif"
            },
            inStock: true,
            isNew: false,
            isFeatured: false,
            colors: ["Black"],
            sizes: ["S", "M", "L"],
            description: "High-speed memory card for storing your photos and videos."
        },
        {
            id: 12,
            name: "Camera Flash",
            category: "accessories",
            price: 89.99,
            discountPrice: 79.99,
            images: {
                primary: "images/categories-02_200x280.avif",
                secondary: "images/categories-05_200x280.avif"
            },
            inStock: true,
            isNew: true,
            isFeatured: true,
            colors: ["Black"],
            sizes: ["M", "L"],
            description: "Powerful camera flash for low-light photography."
        }
    ];

    // Sticky Header
    const header = document.getElementById('mainHeader');
    const heroSlider = document.getElementById('heroSlider');

    let headerHeight = header.offsetHeight;
    let heroBottom = heroSlider.offsetTop + heroSlider.offsetHeight;

    // Set default styles
    header.style.borderRadius = '100px';
    header.style.transition = 'border-radius 0.5s ease-in-out, background-color 0.5s ease-in-out';

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > heroBottom - headerHeight) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.width = '100%';
            header.style.zIndex = '1000';
            header.style.backgroundColor = '#f8d62a';
            header.style.borderRadius = '0'; // Smooth transition applied
            document.body.style.paddingTop = headerHeight + 'px';
        } else {
            header.style.position = '';
            header.style.top = '';
            header.style.left = '';
            header.style.width = '';
            header.style.zIndex = '';
            header.style.backgroundColor = ''; 
            header.style.borderRadius = '50px'; // Smooth transition back to rounded
            document.body.style.paddingTop = '0';
        }
    });

    // Category Menu Toggle
    const categoriesToggle = document.getElementById('categoriesToggle');
    const categoryMenu = document.getElementById('categoryMenu');
    
    // Show menu by default on desktop
    if (window.innerWidth > 768) {
        categoryMenu.classList.add('active');
    }
    
    categoriesToggle.addEventListener('click', function() {
        categoryMenu.classList.toggle('active');
    });
    
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide and activate the current dot
        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Set up event listeners for slider controls
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Set up event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 100000000000);
    
    // Pause auto-advance when hovering over slider
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Resume auto-advance when mouse leaves slider
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 100000000000);
    });
    
    // Initialize the slider
    showSlide(currentSlide);
    
    // Product Sliders
    function createProductCard(product, sectionId) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-id', product.id);
        productCard.setAttribute('data-price', product.price);
        productCard.setAttribute('data-name', product.name);
        
        let discountBadge = '';
        let priceHTML = '';
        
        if (product.discountPrice) {
            discountBadge = `<span class="discount-badge">-${Math.round((1 - product.discountPrice / product.price) * 100)}%</span>`;
            priceHTML = `<span class="original-price">$${product.price.toFixed(2)}</span><span class="price">$${product.discountPrice.toFixed(2)}</span>`;
        } else {
            priceHTML = `<span class="price">$${product.price.toFixed(2)}</span>`;
        }
        
        let stockBadge = '';
        if (!product.inStock) {
            stockBadge = '<span class="sold-out">Sold Out</span>';
        }
        
        // Generate different images based on section ID
        let primaryImg = product.images.primary;
        let secondaryImg = product.images.secondary;
        
        // Customize images based on section
        // if (sectionId === 'specialCollectionSlider') {
        //     primaryImg = `${Math.floor(Math.random()*999)}/fff`;
        //     secondaryImg = `${Math.floor(Math.random()*999)}/fff`;
        // } else if (sectionId === 'newCollectionSlider') {
        //     primaryImg = `${Math.floor(Math.random()*999)}/fff`;
        //     secondaryImg = `https://via.placeholder.com/200x200/${Math.floor(Math.random()*999)}/fff`;
        // } else if (sectionId === 'featuredProductsSlider') {
        //     primaryImg = `https://via.placeholder.com/200x200/${Math.floor(Math.random()*999)}/fff`;
        //     secondaryImg = `https://via.placeholder.com/200x200/${Math.floor(Math.random()*999)}/fff`;
        // } else if (sectionId === 'bestsellerCollectionSlider') {
        //     primaryImg = `https://via.placeholder.com/200x200/${Math.floor(Math.random()*999)}/fff`;
        //     secondaryImg = `https://via.placeholder.com/200x200/${Math.floor(Math.random()*999)}/fff`;
        // }
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${primaryImg}" alt="${product.name}" class="primary">
                <img src="${secondaryImg}" alt="${product.name}" class="secondary">
                ${discountBadge}
                ${stockBadge}
                <div class="product-actions">
                    <button class="quick-view-btn" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button class="wishlist-btn"><i class="far fa-heart"></i></button>
                    ${product.inStock ? `<button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>` : ''}
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div>${priceHTML}</div>
            </div>
        `;
        
        return productCard;
    }
    
    // Populate Product Sliders
    function populateProductSlider(sliderId, filterFunction) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;
        
        const filteredProducts = products.filter(filterFunction);
        
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product, sliderId);
            slider.appendChild(productCard);
        });
    }
    
    // Populate all product sliders
    populateProductSlider('topCategoriesSlider', product => true);
    populateProductSlider('specialCollectionSlider', product => product.isNew);
    populateProductSlider('newCollectionSlider', product => product.isNew);
    populateProductSlider('featuredProductsSlider', product => product.isFeatured);
    populateProductSlider('bestsellerCollectionSlider', product => product.isFeatured);
    
    // Product Slider Navigation
    const prevArrows = document.querySelectorAll('.prev-arrow');
    const nextArrows = document.querySelectorAll('.next-arrow');
    
    prevArrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            const sliderId = this.getAttribute('data-slider');
            const slider = document.getElementById(sliderId + 'Slider') || this.closest('.section-container').querySelector('.product-slider');
            slider.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
    });
    
    nextArrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            const sliderId = this.getAttribute('data-slider');
            const slider = document.getElementById(sliderId + 'Slider') || this.closest('.section-container').querySelector('.product-slider');
            slider.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    });
    
    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categorySelect.value;
        
        if (!searchTerm) {
            searchResults.classList.remove('active');
            return;
        }
        
        // Filter products based on search term and category
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || product.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        // Show search results in popup
        searchResults.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            searchResults.innerHTML = '<p style="padding: 15px; text-align: center;">No products found matching your search term</p>';
        } else {
            filteredProducts.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.setAttribute('data-id', product.id);
                
                resultItem.innerHTML = `
                    <div class="search-result-image">
                        <img src="${product.images.primary}" alt="${product.name}">
                    </div>
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <p>${product.discountPrice ? '$' + product.discountPrice.toFixed(2) : '$' + product.price.toFixed(2)}</p>
                    </div>
                `;
                
                resultItem.addEventListener('click', function() {
                    openQuickView(product.id);
                    searchResults.classList.remove('active');
                });
                
                searchResults.appendChild(resultItem);
            });
        }
        
        searchResults.classList.add('active');
    }
    
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', searchProducts);
    
    document.addEventListener('click', function(e) {
        const searchBar = document.querySelector('.search-bar');
        const searchResults = document.querySelector('.search-results');
    
        if (searchResults && !searchBar.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Ensure search results appear when clicking inside the search bar
    document.querySelector('.search-bar input').addEventListener('input', function() {
        document.querySelector('.search-results').style.display = 'block';
    });
    
    
    // Shopping Cart Functionality
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    // Cart data
    let cart = JSON.parse(localStorage.getItem('cart-res')) || [];
    
    
    // Update cart UI
    function updateCart() {
        // Update cart count
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        // Update cart items
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const price = product.discountPrice || product.price;
            const itemTotal = price * item.quantity;
            total += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${product.images.primary}" alt="${product.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-price">$${price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${product.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${product.id}">Remove</button>
                </div>
            `;
            
            cartItems.appendChild(cartItemElement);
        });
        
        cartTotal.textContent = `$${total.toFixed(2)}`;
        cartTotal.setAttribute('data-original-total', total.toFixed(2));
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                decreaseQuantity(id);
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                increaseQuantity(id);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                removeItem(id);
            });
        });
    }
    
    // Add item to cart
    function addToCart(id, quantity = 1) {
        const product = products.find(p => p.id === id);
        
        if (!product || !product.inStock) {
            return;
        }
        
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id,
                quantity
            });
        }
        
        updateCart();
        
        // Show cart sidebar
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    }
    
    // Decrease item quantity
    function decreaseQuantity(id) {
        const item = cart.find(item => item.id === id);
        
        if (item) {
            item.quantity--;
            
            if (item.quantity <= 0) {
                removeItem(id);
            } else {
                updateCart();
            }
        }
    }
    
    // Increase item quantity
    function increaseQuantity(id) {
        const item = cart.find(item => item.id === id);
        
        if (item) {
            item.quantity++;
            updateCart();
        }
    }
    
    // Remove item from cart
    function removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }
    
    // Event listeners for cart
    cartBtn.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    cartOverlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    // Quick View Functionality
    const quickViewModal = document.getElementById('quickViewModal');
    const closeQuickView = document.getElementById('closeQuickView');
    const quickViewTitle = document.getElementById('quickViewTitle');
    const quickViewPrice = document.getElementById('quickViewPrice');
    const quickViewAvailability = document.getElementById('quickViewAvailability');
    const quickViewMainImage = document.getElementById('quickViewMainImage');
    const quickViewSize = document.getElementById('quickViewSize');
    const quickViewColor = document.getElementById('quickViewColor');
    const quickViewQuantity = document.getElementById('quickViewQuantity');
    const quickViewDecrease = document.getElementById('quickViewDecrease');
    const quickViewIncrease = document.getElementById('quickViewIncrease');
    const quickViewAddToCart = document.getElementById('quickViewAddToCart');
    
    let currentQuickViewProduct = null;
    
    // Open Quick View Modal
    function openQuickView(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;
        
        currentQuickViewProduct = product;
        
        // Update modal content
        quickViewTitle.textContent = product.name;
        quickViewPrice.textContent = product.discountPrice ? `$${product.discountPrice.toFixed(2)}` : `$${product.price.toFixed(2)}`;
        quickViewAvailability.textContent = product.inStock ? 'In Stock' : 'Out of Stock';
        quickViewMainImage.src = product.images.primary;
        
        // Update size options
        quickViewSize.innerHTML = '';
        product.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            if (size === 'M') option.selected = true;
            quickViewSize.appendChild(option);
        });
        
        // Update color options
        quickViewColor.innerHTML = '';
        product.colors.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            if (color === product.colors[0]) option.selected = true;
            quickViewColor.appendChild(option);
        });
        
        // Reset quantity
        quickViewQuantity.value = 1;
        
        // Disable add to cart button if out of stock
        quickViewAddToCart.disabled = !product.inStock;
        
        // Show modal
        quickViewModal.style.display = 'flex';
    }
    
    // Change Quick View Image
    window.changeQuickViewImage = function(src) {
        quickViewMainImage.src = src;
        document.querySelectorAll('.thumbnail-images img').forEach(img => {
            img.classList.remove('active');
            if (img.src === src) {
                img.classList.add('active');
            }
        });
    };
    
    // Close Quick View Modal
    closeQuickView.addEventListener('click', function() {
        quickViewModal.style.display = 'none';
    });
    
    // Close Quick View when clicking outside
    quickViewModal.addEventListener('click', function(event) {
        if (event.target === quickViewModal) {
            quickViewModal.style.display = 'none';
        }
    });
    
    // Quick View Quantity Controls
    quickViewDecrease.addEventListener('click', function() {
        let quantity = parseInt(quickViewQuantity.value);
        if (quantity > 1) {
            quickViewQuantity.value = quantity - 1;
        }
    });
    
    quickViewIncrease.addEventListener('click', function() {
        let quantity = parseInt(quickViewQuantity.value);
        quickViewQuantity.value = quantity + 1;
    });
    
    // Quick View Add to Cart
    quickViewAddToCart.addEventListener('click', function() {
        if (currentQuickViewProduct && currentQuickViewProduct.inStock) {
            const quantity = parseInt(quickViewQuantity.value);
            addToCart(currentQuickViewProduct.id, quantity);
            quickViewModal.style.display = 'none';
        }
    });
    
    // Add event delegation for product actions
    document.addEventListener('click', function(event) {
        // Quick View Button
        if (event.target.closest('.quick-view-btn')) {
            const button = event.target.closest('.quick-view-btn');
            const id = parseInt(button.getAttribute('data-id'));
            openQuickView(id);
        }
        
        // Add to Cart Button
        if (event.target.closest('.add-to-cart-btn')) {
            const button = event.target.closest('.add-to-cart-btn');
            const id = parseInt(button.getAttribute('data-id'));
            addToCart(id);
        }
    });
    
    // Language Translation
    const languageLinks = document.querySelectorAll('.language-content a');
    
    // Simple translations for demo
    const translations = {
        en: {
            home: 'Home',
            contact: 'Contact Us',
            about: 'About Us',
            delivery: 'Delivery',
            more: 'More',
            signIn: 'Sign in',
            cart: 'Cart',
            search: 'Search',
            shopNow: 'Shop Now',
            support: '24/7 Support',
            saving: 'Big Saving',
            payment: 'Easy Payment',
            discounts: 'Big Discounts',
            shopGlobally: 'Shop Globally'
        },
        fr: {
            home: 'Accueil',
            contact: 'Contactez-nous',
            about: 'À propos',
            delivery: 'Livraison',
            more: 'Plus',
            signIn: 'Se connecter',
            cart: 'Panier',
            search: 'Rechercher',
            shopNow: 'Acheter',
            support: 'Assistance 24/7',
            saving: 'Grandes Économies',
            payment: 'Paiement Facile',
            discounts: 'Grandes Remises',
            shopGlobally: 'Achetez Mondialement'
        },
        es: {
            home: 'Inicio',
            contact: 'Contáctenos',
            about: 'Sobre Nosotros',
            delivery: 'Entrega',
            more: 'Más',
            signIn: 'Iniciar sesión',
            cart: 'Carrito',
            search: 'Buscar',
            shopNow: 'Comprar Ahora',
            support: 'Soporte 24/7',
            saving: 'Gran Ahorro',
            payment: 'Pago Fácil',
            discounts: 'Grandes Descuentos',
            shopGlobally: 'Compra Globalmente'
        },
        de: {
            home: 'Startseite',
            contact: 'Kontakt',
            about: 'Über Uns',
            delivery: 'Lieferung',
            more: 'Mehr',
            signIn: 'Anmelden',
            cart: 'Warenkorb',
            search: 'Suchen',
            shopNow: 'Jetzt Kaufen',
            support: '24/7 Unterstützung',
            saving: 'Große Einsparungen',
            payment: 'Einfache Zahlung',
            discounts: 'Große Rabatte',
            shopGlobally: 'Weltweit Einkaufen'
        }
    };
    
    function changeLanguage(lang) {
        const translation = translations[lang];
        
        // Update navigation links
        document.querySelector('.top-nav a:nth-child(1)').textContent = translation.home;
        document.querySelector('.top-nav a:nth-child(2)').textContent = translation.contact;
        document.querySelector('.top-nav a:nth-child(3)').textContent = translation.about;
        document.querySelector('.top-nav a:nth-child(4)').textContent = translation.delivery;
        document.querySelector('.dropbtn').innerHTML = `${translation.more} <i class="fa fa-caret-down"></i>`;
        
        // Update buttons
        document.querySelector('.sign-in').innerHTML = `<i class="fas fa-user"></i> ${translation.signIn}`;
        document.querySelector('.cart').innerHTML = `<i class="fas fa-shopping-cart"></i> ${translation.cart} <span class="cart-count" id="cartCount">${cartCount.textContent}</span>`;
        document.querySelector('.search-btn').innerHTML = `<i class="fas fa-search"></i> ${translation.search}`;
        
        // Update hero slider buttons
        document.querySelectorAll('.shop-now-btn').forEach(btn => {
            btn.textContent = translation.shopNow;
        });
        
        // Update features
        document.querySelector('.features .feature:nth-child(1) h3').textContent = translation.support;
        document.querySelector('.features .feature:nth-child(2) h3').textContent = translation.saving;
        document.querySelector('.features .feature:nth-child(3) h3').textContent = translation.payment;
        document.querySelector('.features .feature:nth-child(4) h3').textContent = translation.discounts;
        document.querySelector('.features .feature:nth-child(5) h3').textContent = translation.shopGlobally;
        
        // Save language preference
        localStorage.setItem('language', lang);
    }
    
    // Language switcher
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
    
    // Newsletter Modal
    const newsletterModal = document.getElementById('newsletterModal');
    const closeModal = document.querySelector('.close-news');
    const dontShowCheckbox = document.getElementById('dontShow');
    
    // Show newsletter modal after 3 seconds if not previously closed
    if (!localStorage.getItem('dontShowNewsletter')) {
        setTimeout(() => {
            newsletterModal.style.display = 'flex';
        }, 3000);
    }
    
    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
        newsletterModal.style.display = 'none';
        
        // If checkbox is checked, save to localStorage
        if (dontShowCheckbox.checked) {
            localStorage.setItem('dontShowNewsletter', 'true');
        }
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === newsletterModal) {
            newsletterModal.style.display = 'none';
            
            if (dontShowCheckbox.checked) {
                localStorage.setItem('dontShowNewsletter', 'true');
            }
        }
    });
    
    // Cookie Consent
    const cookieConsent = document.getElementById('cookieConsent');
    const okButton = document.querySelector('.ok-btn');
    
    // Show cookie consent if not previously accepted
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'flex';
    } else {
        cookieConsent.style.display = 'none';
    }
    
    // Handle cookie consent acceptance
    okButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        cookieConsent.style.display = 'none';
    });
});

// data aos
AOS.init({
    duration: 3000,
    once: true,

  });
  AOS.refresh();









//   

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent.toLowerCase();
        window.location.href = `/categories/${categoryName}`;
    });
    
    // Make cards keyboard accessible
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const categoryName = this.querySelector('h3').textContent.toLowerCase();
            window.location.href = `/categories/${categoryName}`;
        }
    });
});

