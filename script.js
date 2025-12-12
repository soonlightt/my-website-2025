document.addEventListener('DOMContentLoaded', function () {
    // Находим все кнопки меню
    const menuButtons = document.querySelectorAll('.btn-menuw, .btn-menur');

    // 1. Эффект при наведении
    menuButtons.forEach(button => {
        button.style.transition = 'all 0.3s ease';

        // Наведение
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        // Уход курсора
        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });

        // Нажатие
        button.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.95)';
        });

        // Отпускание
        button.addEventListener('mouseup', function () {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });
    });

    // 2. Плавное появление кнопок при загрузке
    menuButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';

        setTimeout(() => {
            button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // 3. Клик — БЕЗ снежинок и без ошибок
    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            // ничего не делаем — убрали ошибочный вызов
        });
    });
});


class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.translations = {
            en: {
                'home': 'home',
                'achievement': 'achievement',
                'events': 'events',
                'results': 'results',
                'main-title': 'Results of the 2025!',
                'main-subtitle': 'Let\'s sum up this year!',
                'achievements-title': 'Achievements of 2025',
                'hard-level': 'Hard level:',
                'middle-level': 'Middle level:',
                'easy-level': 'Easy level:',
                'buy-car': 'Buy a Car',
                'complete-first-year': 'Complete first year',
                'work-specialty': 'Work in your specialty',
                'go-vacation': 'Go on vacation',
                'earn-money': 'Earn money',
                'develop-website': 'Develope a website',
                'find-summer-job': 'Find a job in the summer',
                'pass-license': 'Pass your license',
                'events-title': 'Top events of 2025',
                'results-title': 'Results 2025',
                'results-comments':
                    'It\'s the second half of December this year, so I want to take stock. This year has had many memorable moments, both good and bad. Most importantly, I\'ve always had top players by my side who somehow supported me. I officially consider 2025 the beginning of my prime era.'
            },
            ru: {
                'home': 'главная',
                'achievement': 'достижения',
                'events': 'события',
                'results': 'результаты',
                'main-title': 'Итоги 2025 года!',
                'main-subtitle': 'Подведем итоги года!',
                'achievements-title': 'Достижения 2025 года',
                'hard-level': 'Сложный уровень:',
                'middle-level': 'Средний уровень:',
                'easy-level': 'Легкий уровень:',
                'buy-car': 'Купить машину',
                'complete-first-year': 'Закончить первый курс',
                'work-specialty': 'Работать по специальности',
                'go-vacation': 'Съездить отдохнуть',
                'earn-money': 'Заработать денег',
                'develop-website': 'Разработать сайт',
                'find-summer-job': 'Найти работу летом',
                'pass-license': 'Сдать на права',
                'events-title': 'Лучшие события 2025',
                'results-title': 'Итоги 2025',
                'results-comments':
                    'Уже вторая половина декабря этого года, поэтому хочу подвести итоги. Этот год запомнился множеством моментов, как хороших, так и плохих. Главное, что рядом всегда были топовые игроки, которые как-то поддерживали. Официально считаю 2025 год началом моей прайм-эры.'
            }
        };
    }

    init() {
        this.createButton();
        this.applyLanguage();
    }

    createButton() {
        const btn = document.createElement('button');
        btn.id = 'langToggle';
        btn.innerHTML = this.currentLang === 'en' ? 'RU' : 'ENG';
        btn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background: crimson;
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            z-index: 1000;
            font-family: cursive;
            font-size: 18px;
        `;

        btn.onclick = () => this.toggleLanguage();
        document.body.appendChild(btn);
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ru' : 'en';
        localStorage.setItem('lang', this.currentLang);
        this.applyLanguage();
        document.getElementById('langToggle').innerHTML =
            this.currentLang === 'en' ? 'RU' : 'ENG';
    }

    applyLanguage() {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (this.translations[this.currentLang][key]) {
                el.textContent = this.translations[this.currentLang][key];
            }
        });

        document.title =
            this.currentLang === 'en'
                ? 'Results of 2025'
                : 'Итоги 2025 года';
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
    // Находим все картинки с классом example-image-link
    const galleryImages = document.querySelectorAll('.example-image-link');

    galleryImages.forEach(img => {
        img.addEventListener('click', function (e) {
            e.preventDefault(); // отменяем открытие ссылки
        });
    });
});
