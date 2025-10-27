// BTS Care Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create stars animation
    createStars();
    
    // Initialize page navigation
    initializeNavigation();
    
    // Add BTS member emojis to faces
    addMemberEmojis();
});

function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

function addMemberEmojis() {
    const members = [
        { selector: '.jin-face', emoji: '😊' },
        { selector: '.suga-face', emoji: '😎' },
        { selector: '.jhope-face', emoji: '😄' },
        { selector: '.rm-face', emoji: '🤔' },
        { selector: '.jimin-face', emoji: '🥰' },
        { selector: '.v-face', emoji: '😌' },
        { selector: '.jungkook-face', emoji: '😇' }
    ];
    
    members.forEach(member => {
        const element = document.querySelector(member.selector);
        if (element) {
            element.textContent = member.emoji;
        }
    });
    
    // Add emojis to avatars on page 2
    const avatars = [
        { selector: '.jin-avatar', emoji: '😊' },
        { selector: '.suga-avatar', emoji: '😎' },
        { selector: '.jhope-avatar', emoji: '😄' },
        { selector: '.rm-avatar', emoji: '🤔' },
        { selector: '.jimin-avatar', emoji: '🥰' }
    ];
    
    avatars.forEach(avatar => {
        const element = document.querySelector(avatar.selector);
        if (element) {
            element.textContent = avatar.emoji;
        }
    });
}

function initializeNavigation() {
    // Touch button click handler
    const touchButton = document.getElementById('touchButton');
    touchButton.addEventListener('click', function() {
        showTransition1();
    });
    
    // Question card click handlers
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach(card => {
        card.addEventListener('click', function() {
            const question = this.dataset.question;
            showTransition2(question);
        });
    });
    
    // Home button click handler
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', function() {
        goToHomePage();
    });
}

function showTransition1() {
    const page1 = document.getElementById('page1');
    const transition1 = document.getElementById('transition1');
    
    // Hide page 1
    page1.classList.remove('active');
    
    // Show transition 1
    transition1.classList.add('active');
    
    // Start blinking animation
    startBlinkingAnimation();
    
    // After 3 seconds, show page 2
    setTimeout(() => {
        transition1.classList.remove('active');
        showPage2();
    }, 3000);
}

function startBlinkingAnimation() {
    const images = document.querySelectorAll('.transition-image');
    let blinkCount = 0;
    const maxBlinks = 4;
    
    const blinkInterval = setInterval(() => {
        images.forEach((img, index) => {
            img.style.animation = 'none';
            setTimeout(() => {
                img.style.animation = 'blink 0.5s ease-in-out infinite';
            }, 100);
        });
        
        blinkCount++;
        if (blinkCount >= maxBlinks) {
            clearInterval(blinkInterval);
        }
    }, 750);
}

function showPage2() {
    const page2 = document.getElementById('page2');
    page2.classList.add('active');
    
    // Add entrance animation to question cards
    const cards = document.querySelectorAll('.question-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function showTransition2(question) {
    const page2 = document.getElementById('page2');
    const transition2 = document.getElementById('transition2');
    
    // Hide page 2
    page2.classList.remove('active');
    
    // Show transition 2
    transition2.classList.add('active');
    
    // Start sliding animation
    startSlidingAnimation(question);
    
    // After 2.5 seconds, show page 3
    setTimeout(() => {
        transition2.classList.remove('active');
        showPage3(question);
    }, 2500);
}

function startSlidingAnimation(question) {
    const slidingMember = document.getElementById('slidingMember');
    
    // Add appropriate emoji based on question
    const memberEmojis = {
        'feeling': '😊',
        'sick': '😎',
        'tired': '😄',
        'overwhelmed': '🤔',
        'happy': '🥰'
    };
    
    slidingMember.textContent = memberEmojis[question] || '😊';
    
    // Reset animation
    slidingMember.style.animation = 'none';
    setTimeout(() => {
        slidingMember.style.animation = 'slideDown 2s ease-in-out';
    }, 100);
}

function showPage3(question) {
    const page3 = document.getElementById('page3');
    page3.classList.add('active');
    
    // Load appropriate cure content
    loadCureContent(question);
    
    // Flash the cure word
    setTimeout(() => {
        const cureWord = document.getElementById('cureWord');
        cureWord.style.animation = 'flash 0.5s ease-in-out 3';
    }, 1000);
}

function loadCureContent(question) {
    const cureContent = document.getElementById('cureContent');
    const contactNumber = document.getElementById('contactNumber');
    
    const cureResponses = {
        'feeling': {
            title: 'Not feeling today?',
            quote: '"You are not alone in this. The world is vast and you are small, but you matter." - Richard Siken',
            message: 'You deserve good food today!',
            number: '1'
        },
        'sick': {
            title: 'Feeling sick?',
            quote: '"Even in sickness, there is beauty in the way we heal." - Richard Siken',
            message: 'You deserve good food today! Plus homemade medicine by Tarun will be sent to you shortly.',
            number: '2'
        },
        'tired': {
            title: 'Feeling tired?',
            quote: '"Rest is not weakness, it is preparation for the next beautiful moment." - Richard Siken',
            message: 'You deserve good food today!',
            number: '3'
        },
        'overwhelmed': {
            title: 'Feeling overwhelmed?',
            quote: '"Breathe. You are stronger than this moment feels." - Richard Siken',
            message: 'You deserve good food today!',
            number: '4'
        },
        'happy': {
            title: 'Feeling happy?',
            quote: '"Joy is a gift you give yourself every day." - Richard Siken',
            message: 'You deserve good food today!',
            number: '5'
        }
    };
    
    const response = cureResponses[question];
    
    cureContent.innerHTML = `
        <h3>${response.title}</h3>
        <p><em>${response.quote}</em></p>
        <p><strong>${response.message}</strong></p>
    `;
    
    contactNumber.textContent = response.number;
}

function goToHomePage() {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show page 1
    const page1 = document.getElementById('page1');
    page1.classList.add('active');
    
    // Reset any animations
    const touchButton = document.getElementById('touchButton');
    touchButton.style.animation = 'fadeInUp 1s ease-out 0.6s both';
    
    // Reset question cards on page 2
    const cards = document.querySelectorAll('.question-card');
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'all 0.3s ease';
    });
}

// Add some extra interactive effects
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(255,107,107,0.8) 0%, rgba(78,205,196,0.8) 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Add click effects
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255,107,107,0.6) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        animation: ripple 0.6s ease-out;
    `;
    
    ripple.style.left = e.clientX - 10 + 'px';
    ripple.style.top = e.clientY - 10 + 'px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const activePage = document.querySelector('.page.active');
        if (activePage) {
            const button = activePage.querySelector('button');
            if (button) {
                button.click();
            }
        }
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - proceed to next page
            const activePage = document.querySelector('.page.active');
            if (activePage && activePage.id === 'page1') {
                document.getElementById('touchButton').click();
            }
        }
    }
}

// Add loading animation
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease-out;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="font-size: 2rem; margin-bottom: 20px;">💜</div>
            <div style="font-size: 1.2rem; font-weight: 600;">Loading BTS Care...</div>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
});