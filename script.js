// Intro Screen Logic
const introScreen = document.getElementById('introScreen');
const birthdayCard = document.getElementById('birthdayCard');
const envelope = document.getElementById('envelope');
const openButton = document.getElementById('openButton');

// Navigation state
let currentStep = 0;

openButton.addEventListener('click', () => {
    playSound('clickSound', 0.4);
    envelope.classList.add('open');
    setTimeout(() => {
        introScreen.style.display = 'none';
        birthdayCard.style.display = 'block';
        // showStep(0); // Show first message
    }, 800);
});

envelope.addEventListener('click', () => {
    openButton.click();
});

// Step-by-step reveal using tap on message containers
document.addEventListener("DOMContentLoaded", () => {

    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    const message3 = document.getElementById("message3");
    const gameSection = document.querySelector(".game-section");
    const rewardSection = document.getElementById("rewardSection");
    const footer = document.querySelector(".card-footer");

    let currentStep = 0;

    showStep(0);

    // Tapping message 1 → show message 2
    message1.addEventListener("click", () => {
        playSound('clickSound', 0.2);
        if (currentStep === 0)
            hideTapIcon(message1);
        message1.classList.add("message-complete");
        showStep(1);
    });

    // Tapping message 2 → show game
    message2.addEventListener("click", () => {
        if (currentStep === 1)
            hideTapIcon(message2);
        message2.classList.add("message-complete");
        showStep(2);
    });

    function showStep(step) {
        currentStep = step;

        if (step === 0) {
            message1.style.display = "block";
            message2.style.display = "none";
            if (message3) message3.style.display = "none";
            gameSection.style.display = "none";
            rewardSection.style.display = "none";
            footer.style.display = "none";
        }
        else if (step === 1) {
            message2.style.display = "block";
            message2.classList.add("fade-in");
            setTimeout(() => message2.classList.remove("fade-in"), 400);
            message2.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        else if (step === 2) {
            const divider = document.getElementById("dividerLine");
            divider.style.display = "block";

            gameSection.style.display = "block";
            gameSection.classList.add("fade-in");

            initGame();
            gameSection.scrollIntoView({ behavior: "smooth", block: "center" });

            setTimeout(() => gameSection.classList.remove("fade-in"), 400);
        }
    }

    function hideTapIcon(messageEl) {
        const icon = messageEl.querySelector(".tap-icon-wrapper");
        if (!icon) return;
        icon.classList.add("fade-out-tap");
        setTimeout(() => icon.style.display = "none", 300);
    }

});


// Memory Matching Game
const icons = ['🌻', '💜', '🌸', '✨', '🌻', '💜', '🌸', '✨'];
let flippedCards = [];
let matchedPairs = 0;
let canFlip = true;
let gameInitialized = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initGame() {
    if (gameInitialized) return;
    gameInitialized = true;

    const gameBoard = document.getElementById('gameBoard');
    const shuffled = shuffle([...icons]);

    shuffled.forEach((icon, index) => {
        const card = document.createElement('div');
        card.className = 'card-item';
        card.dataset.icon = icon;
        card.dataset.index = index;
        card.innerHTML = `
            <span class="card-front">❓</span>
            <span class="card-back">${icon}</span>
        `;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    playSound('cardFlipSound', 0.2);
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        canFlip = false;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.dataset.icon === card2.dataset.icon;

    setTimeout(() => {
        if (match) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            playSound('matchSound', 0.3);

            card1.querySelector('.card-front').style.display = 'none';
            card2.querySelector('.card-front').style.display = 'none';

            matchedPairs++;

            if (matchedPairs === 4) {
                const board = document.getElementById("gameBoard");
                board.classList.add("game-win-pulse");
                playSound('winSound', 0.4);
                setTimeout(revealReward, 500);
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
        canFlip = true;
        updateStatus();
    }, 600);
}

function updateStatus() {
    const status = document.getElementById('gameStatus');
    const remaining = 4 - matchedPairs;
    if (remaining > 0) {
        status.textContent = `${remaining} pair${remaining !== 1 ? 's' : ''} remaining...`;
    } else {
        status.textContent = '🎉 Perfect! Revealing your gift...';
    }
}

function revealReward() {
    const rewardSection = document.getElementById('rewardSection');
    const message3 = document.getElementById('wishMessage');
    const cakeSection = document.getElementById('cakeSection');

    rewardSection.style.display = 'block';
    rewardSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Show message3 after reward
    setTimeout(() => {
        message3.style.display = 'block';
        message3.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Show cake section
        setTimeout(() => {
            cakeSection.style.display = 'block';
            cakeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            initCakeCandles();
        }, 2000);

    }, 1500);
}

// Polaroid
function initPolaroids() {
    const stacks = document.querySelectorAll('.polaroid-stack');

    stacks.forEach((stack, stackIndex) => {
        const cards = stack.querySelectorAll('.polaroid-card');
        const wrapper = stack.querySelector('.polaroid-cards-wrapper');
        let currentIndex = 0;
        const totalPhotos = cards.length;

        // Load first photo in each stack
        setTimeout(() => {
            const firstCard = cards[0];
            const overlay = firstCard.querySelector('.developing-overlay');
            const img = firstCard.querySelector('.photo-img');

            setTimeout(() => {
                img.classList.add('developed');
            }, 2500);
        }, stackIndex * 300);

        // Click handler to flip through photos
        wrapper.addEventListener('click', () => {
            const currentCard = cards[currentIndex];
            const nextIndex = (currentIndex + 1) % totalPhotos;
            const nextCard = cards[nextIndex];

            // Exit current card
            currentCard.classList.remove('active');
            currentCard.classList.add('exiting');

            // Enter next card
            setTimeout(() => {
                currentCard.classList.remove('exiting');
                nextCard.classList.add('active');

                // Load photo if it hasn't been shown yet
                const nextImg = nextCard.querySelector('.photo-img');
                if (!nextImg.classList.contains('developed')) {
                    nextImg.classList.add('developed');
                }

                currentIndex = nextIndex;
            }, 100);
        });

        cards[0].classList.add('active');
    });
}

// Birthday Cake Candle 
function initCakeCandles() {
    const candles = document.querySelectorAll('.candle');
    const wishMessage = document.getElementById('wishMessage');
    const footer = document.querySelector('.card-footer');
    let blownCandles = 0;

    candles.forEach(candle => {
        candle.addEventListener('click', () => {
            if (candle.classList.contains('blown')) return;
            candle.classList.add('blown');
            playSound('blowSound', 0.25);
            blownCandles++;

            const smoke = document.createElement('div');
            smoke.className = 'smoke';
            smoke.textContent = '💨';
            candle.appendChild(smoke);
            setTimeout(() => smoke.remove(), 1000);

            // Check if all candles are blown
            if (blownCandles === candles.length) {
                setTimeout(() => {
                    wishMessage.classList.add('revealed');
                    wishMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    setTimeout(() => {
                        polaroidSection.style.display = 'block';
                        initPolaroids();
                        footer.style.display = 'block';
                    }, 1500);
                }, 800);
            }
        });
    });
}

// Background Music
document.addEventListener("DOMContentLoaded", () => {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const openButton = document.getElementById('openButton');
    let musicStarted = false;
    bgMusic.volume = 0.2;

    // Start music when envelope is opened
    openButton.addEventListener('click', () => {
        if (!musicStarted) {
            bgMusic.play().catch(error => {
                console.log("Music autoplay prevented:", error);
            });
            musicStarted = true;
            musicToggle.classList.add('playing');
        }
    });

    // Toggle music on/off
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent sparkle effect on this button

        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.classList.remove('paused');
            musicToggle.classList.add('playing');
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
        }
    });

    function fadeInMusic() {
        let volume = 0;
        bgMusic.volume = 0;

        const fadeIn = setInterval(() => {
            if (volume < 0.3) {
                volume += 0.02;
                bgMusic.volume = Math.min(volume, 0.3);
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    }

    bgMusic.addEventListener('play', function playHandler() {
        if (bgMusic.volume === 0) {
            fadeInMusic();
        }
        bgMusic.removeEventListener('play', playHandler);
    });
});

// Interactive sparkles on click
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = ['✨', '⭐', '💫'][Math.floor(Math.random() * 3)];
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';

        // Random direction for sparkle animation
        const angle = (Math.random() * Math.PI * 2);
        const distance = 50 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        sparkle.style.setProperty('--x', `${x}px`);
        sparkle.style.setProperty('--y', `${y}px`);

        document.body.appendChild(sparkle);
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Sound effect helper
function playSound(soundId, volume = 0.3) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.volume = volume;
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Sound play failed:', e));
    }
}

// Sparkle Background with tsParticles
tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#b8a4e8", "#f2d36b", "#dcd0f4", "#ffffff"]
        },
        shape: {
            type: ["circle", "star"],
        },
        opacity: {
            value: 0.6,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            outModes: {
                default: "out"
            }
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "bubble"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 100,
                size: 8,
                duration: 2,
                opacity: 0.8
            }
        }
    },
    retina_detect: true
});

// Easter Egg Hunt
let flowersFound = 0;
const totalFlowers = 4;
const flowers = document.querySelectorAll('.hidden-flower');

flowers.forEach(flower => {
    flower.addEventListener('click', function (e) {
        e.stopPropagation();

        if (!this.classList.contains('found')) {
            this.classList.add('found');
            flowersFound++;
            playSound('matchSound', 0.4);

            // Check if all flowers found
            if (flowersFound === totalFlowers) {
                setTimeout(() => {
                    showWelkinReward();
                }, 800);
            }
        }
    });
});

function showWelkinReward() {
    const modal = document.getElementById('easterEggModal');
    modal.classList.add('active');
    playSound('winSound', 0.5);

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 30);
    }
}

document.getElementById('closeModal').addEventListener('click', function () {
    const modal = document.getElementById('easterEggModal');
    modal.classList.remove('active');
    playSound('clickSound', 0.3);
});

// Confetti for egg hunt
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.textContent = ['🌟', '✨', '💫', '⭐', '🌙', '🪻', '🌻'][Math.floor(Math.random() * 7)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
}