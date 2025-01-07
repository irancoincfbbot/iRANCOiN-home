document.addEventListener('DOMContentLoaded', function() {
    // انیمیشن‌های ورودی
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // مدیریت کلیک روی گزینه‌ها
    document.querySelectorAll('.card-body').forEach(option => {
        option.addEventListener('click', function(e) {
            const optionType = this.dataset.option;
            
            if (optionType === 'activation') {
                const activationForm = this.querySelector('.activation-form');
                if (activationForm.classList.contains('d-none')) {
                    activationForm.classList.remove('d-none');
                    activationForm.classList.add('animate__animated', 'animate__fadeIn');
                }
            } else {
                const subOptions = this.querySelector('.sub-options');
                if (subOptions) {
                    if (subOptions.classList.contains('d-none')) {
                        subOptions.classList.remove('d-none');
                        subOptions.classList.add('animate__animated', 'animate__fadeIn');
                    }
                }
            }
        });
    });

    // مدیریت فرم فعال‌سازی
    const activationForm = document.querySelector('.activation-form');
    if (activationForm) {
        activationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const subscriptionType = document.getElementById('subscriptionType').value;
            const transactionHash = document.querySelector('input[placeholder="هش تراکنش"]').value;
            const phoneNumber = document.querySelector('input[placeholder="شماره موبایل"]').value;

            // ارسال به ایمیل (نیاز به پیاده‌سازی در سمت سرور)
            console.log('اطلاعات فعال‌سازی:', {
                subscriptionType,
                transactionHash,
                phoneNumber
            });

            alert('درخواست فعال‌سازی با موفقیت ارسال شد');
        });
    }

    // مدیریت دکمه‌های اشتراک
    document.querySelectorAll('.subscription-options button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // اینجا می‌توانید لاجیک پرداخت را اضافه کنید
            alert('در حال انتقال به درگاه پرداخت...');
        });
    });
});
