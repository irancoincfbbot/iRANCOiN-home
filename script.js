document.addEventListener('DOMContentLoaded', function() {
    // Menu Item Click Handlers
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            if (category) {
                const submenu = this.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
                }
            }
        });
    });

    // Submenu Button Click Handlers
    const submenuBtns = document.querySelectorAll('.submenu-btn');
    submenuBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const type = this.dataset.type;
            const category = this.closest('.menu-item').dataset.category;
            
            if (category === 'activation') {
                showActivationModal(type);
            } else {
                showSubscriptionModal(category, type);
            }
        });
    });

    // Subscription Modal Handler
    function showSubscriptionModal(category, type) {
        const modal = new bootstrap.Modal(document.getElementById('subscriptionModal'));
        const modalTitle = document.querySelector('#subscriptionModal .modal-title');
        const shortDesc = document.querySelector('#subscriptionModal .description-short');
        const fullDesc = document.querySelector('#subscriptionModal .description-full');
        
        // Set content based on category and type
        const content = getContent(category, type);
        modalTitle.textContent = content.title;
        shortDesc.textContent = content.shortDesc;
        fullDesc.textContent = content.fullDesc;
        
        modal.show();
    }

    // Activation Modal Handler
    function showActivationModal(type) {
        const modal = new bootstrap.Modal(document.getElementById('activationModal'));
        modal.show();
    }

    // Form Submission Handler
    document.getElementById('activationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission - Add your email sending logic here
        alert('اطلاعات شما با موفقیت ارسال شد.');
    });

    // Content Generator
    function getContent(category, type) {
        const contents = {
            signals: {
                crypto: {
                    title: 'سیگنال‌های ارزهای دیجیتال',
                    shortDesc: 'سیگنال‌های معاملاتی دقیق برای ارزهای دیجیتال',
                    fullDesc: 'توضیحات کامل درباره سیگنال‌های ارزهای دیجیتال...'
                },
                // Add more content for other types
            },
            // Add more categories
        };

        return contents[category]?.[type] || {
            title: 'عنوان پیش‌فرض',
            shortDesc: 'توضیحات مختصر',
            fullDesc: 'توضیحات کامل'
        };
    }
});
