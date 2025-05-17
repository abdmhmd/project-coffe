//  strat Weather condition
// هذه بيانات وهمية، يمكنك استبدالها ببيانات حقيقية من API الطقس
document.addEventListener('DOMContentLoaded', function() {
    // بيانات الطقس الوهمية
    const weatherData = {
        temp: 15,
        description: "غائم جزئياً",
        location: "الرياض"
    };
    
    // التوصيات حسب درجة الحرارة
    function getCoffeeRecommendation(temp) {
        if (temp < 15) {
            return { drink: "موكا ساخن", icon: "☕🔥" };
        } else if (temp >= 15 && temp < 25) {
            return { drink: "قهوة فيلتر سموث مع نوتيلا", icon: "☕✨" };
        } else {
            return { drink: "آيس كوفي بالكراميل", icon: "❄️☕" };
        }
    }
    
    const recommendation = getCoffeeRecommendation(weatherData.temp);
    
    // تحديث العناصر في الواجهة
    document.querySelector('.temp').textContent = weatherData.temp + '°C';
    document.querySelector('.description').textContent = weatherData.description;
    document.querySelector('.location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${weatherData.location}`;
    document.querySelector('.recommendation-icon').textContent = recommendation.icon;
    document.querySelector('.coffee-recommendation span').textContent = recommendation.drink;
    
    
});
//  end Weather condition
// strat wok corner
// تأثيرات بسيطة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    const workCorner = document.querySelector('.work-corner-center');
    
    setTimeout(() => {
        workCorner.style.transform = 'translateY(0)';
        workCorner.style.opacity = '1';
    }, 300);
    
    workCorner.style.transform = 'translateY(20px)';
    workCorner.style.opacity = '0';
    workCorner.style.transition = 'all 0.5s ease';
    
    // تأثيرات شريط التقدم (لإضافة حركة)
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const originalWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = originalWidth;
        }, 100);
    });
});
// end work corner
// strat music
document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.querySelector('.play-btn');
    let isPlaying = false;
    
    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        const icon = playBtn.querySelector('i');
        
        if(isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            document.querySelector('.vinyl').style.animationPlayState = 'running';
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            document.querySelector('.vinyl').style.animationPlayState = 'paused';
        }
    });
    
    // تأثير ظهور القسم
    setTimeout(() => {
        document.querySelector('.music-corner').style.transform = 'translateY(0)';
        document.querySelector('.music-corner').style.opacity = '1';
    }, 300);
    
    document.querySelector('.music-corner').style.transform = 'translateY(20px)';
    document.querySelector('.music-corner').style.opacity = '0';
    document.querySelector('.music-corner').style.transition = 'all 0.5s ease';
    
    // تغيير الأيام في الجدول
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        day.addEventListener('click', function() {
            days.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
// end music

document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    
    // تبديل القائمة على الجوال
    mobileToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر خارجها (اختياري)
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    // إبقاء وظيفة الزر الأصلي
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });
});