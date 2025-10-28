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
        { selector: '.suga-face', emoji: '😔' },
        { selector: '.jhope-face', emoji: '😤' },
        { selector: '.rm-face', emoji: '🤤' },
        { selector: '.jimin-face', emoji: '🫠' },
        { selector: '.v-face', emoji: '😚' },
        { selector: '.jungkook-face', emoji: '🤒' }
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
    
    // Simple fade out for page 1
    page1.style.transition = 'opacity 0.5s ease-out';
    page1.style.opacity = '0';
    
    // Show transition 1 after fade
    setTimeout(() => {
        page1.classList.remove('active');
        transition1.classList.add('active');
        startRevolutionaryTransition();
    }, 500);
    
    // After 4 seconds, show page 2 with simple fade
    setTimeout(() => {
        transitionToPage2();
    }, 4000);
}

function startRevolutionaryTransition() {
    const particles = document.querySelectorAll('.particle');
    const neuralNodes = document.querySelectorAll('.neural-node');
    const quantumImages = document.querySelectorAll('.quantum-image');
    
    // Stagger particle animations
    particles.forEach((particle, index) => {
        setTimeout(() => {
            particle.style.animationPlayState = 'running';
        }, index * 100);
    });
    
    // Stagger neural network activation
    neuralNodes.forEach((node, index) => {
        setTimeout(() => {
            node.style.animationPlayState = 'running';
        }, index * 200);
    });
    
    // Stagger quantum image transformations
    quantumImages.forEach((image, index) => {
        setTimeout(() => {
            image.style.animationPlayState = 'running';
            // Add quantum distortion effect
            image.style.filter = `hue-rotate(${index * 60}deg) blur(0px)`;
        }, index * 300);
    });
    
    // Add quantum field effect
    setTimeout(() => {
        addQuantumFieldEffect();
    }, 1500);
}

function addQuantumFieldEffect() {
    const transition1 = document.getElementById('transition1');
    
    // Create quantum field overlay
    const quantumField = document.createElement('div');
    quantumField.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%);
        animation: quantumFieldPulse 2s ease-in-out infinite;
        pointer-events: none;
        z-index: 4;
    `;
    
    transition1.appendChild(quantumField);
    
    // Add CSS for quantum field animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes quantumFieldPulse {
            0%, 100% { 
                transform: scale(1);
                opacity: 0.3;
            }
            50% { 
                transform: scale(1.2);
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(style);
}

function transitionToPage2() {
    const transition1 = document.getElementById('transition1');
    const page2 = document.getElementById('page2');
    
    // Simple fade out for transition
    transition1.style.transition = 'opacity 0.5s ease-out';
    transition1.style.opacity = '0';
    
    // Show page 2 with simple fade in
    setTimeout(() => {
        transition1.classList.remove('active');
        page2.classList.add('active');
        page2.style.transition = 'opacity 0.5s ease-in';
        page2.style.opacity = '1';
        
        // Add entrance animation to question cards
        const cards = document.querySelectorAll('.question-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 500);
}

// Add CSS for quantum collapse and dimensional entrance
const quantumStyles = document.createElement('style');
quantumStyles.textContent = `
    @keyframes quantumCollapse {
        0% { 
            transform: scale(1) rotateY(0deg);
            opacity: 1;
            filter: blur(0px);
        }
        50% { 
            transform: scale(0.8) rotateY(180deg);
            opacity: 0.5;
            filter: blur(5px);
        }
        100% { 
            transform: scale(0.3) rotateY(360deg);
            opacity: 0;
            filter: blur(20px);
        }
    }
    
    @keyframes dimensionalEntrance {
        0% { 
            transform: translateZ(-1000px) rotateX(90deg);
            opacity: 0;
            filter: blur(20px);
        }
        50% { 
            transform: translateZ(-500px) rotateX(45deg);
            opacity: 0.5;
            filter: blur(10px);
        }
        100% { 
            transform: translateZ(0) rotateX(0deg);
            opacity: 1;
            filter: blur(0px);
        }
    }
    
    @keyframes quantumFadeOut {
        0% { 
            transform: scale(1);
            opacity: 1;
            filter: blur(0px);
        }
        100% { 
            transform: scale(0.9);
            opacity: 0;
            filter: blur(10px);
        }
    }
`;
document.head.appendChild(quantumStyles);

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

    // Smooth fade out for page2
    page2.style.transition = 'opacity 0.5s ease-out';
    page2.style.opacity = '0';

    // After fade completes, swap pages and fade in transition2
    setTimeout(() => {
        page2.classList.remove('active');

        // Make transition2 visible and start with 0 opacity
        transition2.classList.add('active');
        transition2.style.opacity = '0';
        transition2.style.transition = 'opacity 0.6s ease-in';

        // ensure browser paints opacity:0 then animate to 1
        requestAnimationFrame(() => {
            transition2.style.opacity = '1';
        });

        startCureDiscoverySequence(question);
    }, 500);

    // After 4.5 seconds, transition to the final page (unchanged timing)
    setTimeout(() => {
        transitionToFinalPage(question);
    }, 4500);
}


function startCureDiscoverySequence(question) {
    const molecules = document.querySelectorAll('.molecule');
    const dnaBasePairs = document.querySelectorAll('.dna-base-pair');
    const energyWaves = document.querySelectorAll('.energy-wave');
    const scannerLines = document.querySelectorAll('.scanner-line');
    const progressPercentage = document.querySelector('.progress-percentage');
    
    // Stagger molecular activation
    molecules.forEach((molecule, index) => {
        setTimeout(() => {
            molecule.style.animationPlayState = 'running';
            // Add molecular bonding effect
            molecule.style.boxShadow = `0 0 30px #ff6b6b, 0 0 60px #ff6b6b`;
        }, index * 100);
    });
    
    // Stagger DNA helix formation
    dnaBasePairs.forEach((basePair, index) => {
        setTimeout(() => {
            basePair.style.animationPlayState = 'running';
            // Add genetic sequencing effect
            basePair.style.filter = `hue-rotate(${index * 30}deg)`;
        }, index * 100);
    });
    
    // Stagger energy wave propagation
    energyWaves.forEach((wave, index) => {
        setTimeout(() => {
            wave.style.animationPlayState = 'running';
        }, index * 150);
    });
    
    // Stagger quantum scanner activation
    scannerLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.animationPlayState = 'running';
        }, index * 200);
    });
    
    // Animate progress percentage
    animateProgressPercentage(progressPercentage);
    
    // Add quantum field effect
    setTimeout(() => {
        addCureQuantumField();
    }, 500);
}

function animateProgressPercentage(element) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random increment between 5-20
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        element.textContent = Math.floor(progress) + '%';
        
        // Add pulsing effect based on progress
        if (progress > 50) {
            element.style.color = '#00ffff';
            element.style.textShadow = '0 0 15px #00ffff';
        }
        if (progress > 80) {
            element.style.color = '#ff00ff';
            element.style.textShadow = '0 0 20px #ff00ff';
        }
    }, 200);
}

function addCureQuantumField() {
    const transition2 = document.getElementById('transition2');
    
    // Create quantum field overlay
    const quantumField = document.createElement('div');
    quantumField.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%);
        animation: cureQuantumFieldPulse 2.5s ease-in-out infinite;
        pointer-events: none;
        z-index: 7;
    `;
    
    transition2.appendChild(quantumField);
    
    // Add CSS for quantum field animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cureQuantumFieldPulse {
            0%, 100% { 
                transform: scale(1) rotate(0deg);
                opacity: 0.3;
            }
            50% { 
                transform: scale(1.3) rotate(180deg);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}
function startCureTextTransition(){
    const title=document.getElementById('cureTitle');
    const word=document.getElementById('cureWord');
    title.textContent="you're";
    word.textContent="cute";
    title.style.opacity=1;
    word.style.opacity=1;
    setTimeout(()=>{
        title.style.opacity=0;
        word.style.opacity=0;
        setTimeout(()=>{
            title.textContent='your';
            word.textContent='cure';
            title.style.opacity=1;
            word.style.opacity=1;
        },500);
    },5000);
}

function transitionToFinalPage(question) {
    const transition2 = document.getElementById('transition2');
    const page3 = document.getElementById('page3');
    
    // Simple fade out for transition
    transition2.style.transition = 'opacity 0.5s ease-out';
    transition2.style.opacity = '0';
    
    // Show page 3 with simple fade in
    setTimeout(() => {
        transition2.classList.remove('active');
        page3.classList.add('active');
        startCureTextTransition();
        setTimeout(()=>{
    const title=document.getElementById('cureTitle');
    const word=document.getElementById('cureWord');
    title.style.opacity=0;
    word.style.opacity=0;
    setTimeout(()=>{
        title.textContent='your';
        word.textContent='cure';
        title.style.opacity=1;
        word.style.opacity=1;
    },500);
},5000);

        page3.style.transition = 'opacity 0.5s ease-in';
        page3.style.opacity = '1';
        
        // Load cure content
        loadCureContent(question);
        
        // Start text transformation after 10 seconds
        setTimeout(() => {
            startTextTransformation();
        }, 2000);
    }, 500);
}

// Add CSS for molecular synthesis and biological emergence
const cureStyles = document.createElement('style');
cureStyles.textContent = `
    @keyframes molecularDissolution {
        0% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
            filter: blur(0px);
        }
        50% { 
            transform: scale(0.8) rotate(180deg);
            opacity: 0.6;
            filter: blur(3px);
        }
        100% { 
            transform: scale(0.5) rotate(360deg);
            opacity: 0;
            filter: blur(10px);
        }
    }
    
    @keyframes molecularSynthesis {
        0% { 
            transform: scale(1) rotateY(0deg);
            opacity: 1;
            filter: blur(0px);
        }
        50% { 
            transform: scale(0.7) rotateY(180deg);
            opacity: 0.4;
            filter: blur(8px);
        }
        100% { 
            transform: scale(0.2) rotateY(360deg);
            opacity: 0;
            filter: blur(25px);
        }
    }
    
    @keyframes biologicalEmergence {
        0% { 
            transform: translateZ(-2000px) rotateX(90deg) scale(0.3);
            opacity: 0;
            filter: blur(30px);
        }
        30% { 
            transform: translateZ(-1000px) rotateX(60deg) scale(0.6);
            opacity: 0.3;
            filter: blur(15px);
        }
        60% { 
            transform: translateZ(-500px) rotateX(30deg) scale(0.9);
            opacity: 0.7;
            filter: blur(5px);
        }
        100% { 
            transform: translateZ(0) rotateX(0deg) scale(1);
            opacity: 1;
            filter: blur(0px);
        }
    }
`;
document.head.appendChild(cureStyles);

function showPage3(question) {
    const page3 = document.getElementById('page3');
    page3.classList.add('active');
    startCureTextTransition();

    // Load appropriate cure content
    loadCureContent(question);
    
    // Start the text transformation animation after 10 seconds
    setTimeout(() => {
        startTextTransformation();
    }, 10000);
}

function startSlidingAnimation(question) {
    const slidingMember = document.getElementById('slidingMember');
    
    // Add appropriate emoji based on question
    const memberEmojis = {
        'angry': '😠',
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


function startTextTransformation() {
    const cureTitle = document.getElementById('cureTitle');
    const cureWord = document.getElementById('cureWord');
    
    // First transformation: "you are" -> "your"
    setTimeout(() => {
        cureTitle.classList.add('text-transform');
        setTimeout(() => {
            cureTitle.textContent = 'your';
            cureTitle.classList.remove('text-transform');
        }, 400);
    }, 1000);
    
    // Second transformation: "cute" -> "cure"
    setTimeout(() => {
        cureWord.classList.add('text-transform');
        setTimeout(() => {
            cureWord.textContent = 'cure';
            cureWord.classList.remove('text-transform');
        }, 400);
    }, 2000);
}

function loadCureContent(question) {
    const cureContent = document.getElementById('cureContent');
    const contactNumber = document.getElementById('contactNumber');
    
    const cureResponses = {
        'angry': {
            title: 'Feeling angry?',
            quote: '"Anger is just love disappointed. It\'s love with nowhere to go." - Richard Siken',
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
    // Hide all pages and reset animations
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
        // Reset any custom animations
        page.style.animation = '';
        page.style.transform = '';
        page.style.opacity = '';
        page.style.filter = '';
    });
    
    // Show page 1
    const page1 = document.getElementById('page1');
    page1.classList.add('active');
    
    // Reset touch button animation
    const touchButton = document.getElementById('touchButton');
    touchButton.style.animation = 'fadeInUp 1s ease-out 0.6s both';
    
    // Reset question cards on page 2
    const cards = document.querySelectorAll('.question-card');
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'all 0.3s ease';
    });
    
    // Reset any transition animations
    const transition1 = document.getElementById('transition1');
    const transition2 = document.getElementById('transition2');
    
    if (transition1) {
        transition1.style.animation = '';
        transition1.style.transform = '';
        transition1.style.opacity = '';
        transition1.style.filter = '';
    }
    
    if (transition2) {
        transition2.style.animation = '';
        transition2.style.transform = '';
        transition2.style.opacity = '';
        transition2.style.filter = '';
    }
    
    // Clean up any dynamically added elements
    const quantumFields = document.querySelectorAll('[style*="quantumField"]');
    quantumFields.forEach(field => field.remove());
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
            <div style="font-size: 2rem; margin-bottom: 20px;">🤗</div>
            <div style="font-size: 1.2rem; font-weight: 600;">Fixing Saria Ghaziiii....</div>
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
