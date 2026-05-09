// =========================================
// LÓGICA PARA NAVEGAR GENERAL
// =========================================
let historyStack = ['view-letter'];

function showView(viewId) {
    document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    updateBackButton();
}

function updateBackButton() {
    const btnBack = document.getElementById('btn-back');
    const currentView = historyStack[historyStack.length - 1];
    
    if (historyStack.length > 1 || (currentView === 'view-letter' && introStep > 0)) {
        btnBack.classList.remove('hidden');
    } else {
        btnBack.classList.add('hidden');
    }
}

function goBack() {
    const currentView = historyStack[historyStack.length - 1];

    if (currentView === 'view-letter') {
        const notebookVisible = !document.getElementById('opened-letter-content').classList.contains('hidden');
        
        if (notebookVisible) {
            document.getElementById('opened-letter-content').classList.add('hidden');
            document.getElementById('intro-sequence').classList.remove('hidden');
            document.getElementById('petals-wrapper').classList.remove('hidden');
            
            introStep = introImages.length - 1;
            renderIntroStep();
            updateBackButton();
            return;
            
        } else if (introStep > 0) {
            introStep--;
            renderIntroStep();
            updateBackButton();
            return;
        }
    }

    if (historyStack.length > 1) {
        historyStack.pop(); 
        const previousView = historyStack[historyStack.length - 1];
        
        if (previousView === 'view-letter') {
            document.body.style.backgroundColor = "var(--deep-red)";
            const btnBack = document.getElementById('btn-back');
            btnBack.style.background = "rgba(255, 255, 255, 0.15)";
            btnBack.style.color = "white";
            btnBack.style.border = "1px solid rgba(255, 255, 255, 0.5)";
        }

        showView(previousView); 
        document.getElementById('spotify-container').innerHTML = '';
    }
}

function goToMain() {
    document.body.style.backgroundColor = "var(--bg-color)";
    const btnBack = document.getElementById('btn-back');
    btnBack.style.background = "rgba(255, 255, 255, 0.8)"; 
    btnBack.style.color = "var(--title-color)"; 
    btnBack.style.border = "1px solid var(--primary)"; 
    
    historyStack.push('view-main');
    showView('view-main');
}


// =========================================
// PANTALLA 1: SECUENCIA DE IMÁGENES
// =========================================
const introImages = [
    "https://i.pinimg.com/736x/ff/f5/09/fff50907173be3563c30d60e1baa6cbc.jpg",
    "https://i.pinimg.com/736x/08/8a/d8/088ad89bd98763783954b4aa5b957f89.jpg",
    "https://i.pinimg.com/736x/0b/97/89/0b978918f0efa0174a6e72d67f2c442a.jpg",
    "https://i.pinimg.com/736x/40/0d/cf/400dcf7b1230e9e6ca787fa30a66c924.jpg"
];

const introTexts = [
    "Hola mi amor!!!\nTengo una pequeña sorpresa para usted…",
    "Una cartita hecha con todo mi amor,\npara usted.",
    "Abrala Eugenia,\nesta hecha solo para usted…",
    "¿Se imagina lo que le he escrito?\n¿No?, Permítase descubrirlo leyendo mi amor…"
];

let introStep = 0;

function advanceIntro() {
    if (introStep < introImages.length - 1) {
        introStep++;
        renderIntroStep();
        updateBackButton();
    } else {
        document.getElementById('intro-sequence').classList.add('hidden');
        document.getElementById('opened-letter-content').classList.remove('hidden');
        document.getElementById('petals-wrapper').classList.add('hidden');
        updateBackButton();
    }
}

function renderIntroStep() {
    const imgEl = document.getElementById('intro-img');
    const textEl = document.getElementById('intro-text');
    
    imgEl.style.opacity = 0;
    textEl.style.opacity = 0;
    
    setTimeout(() => {
        let cleanUrl = introImages[introStep].split('?')[0]; 
        imgEl.src = cleanUrl;
        textEl.innerText = introTexts[introStep];
        
        imgEl.style.opacity = 1;
        textEl.style.opacity = 1;
    }, 300);
}


// =========================================
// PANTALLA 2: CALENDARIO DE MAYO
// =========================================
const dailyData = {
    1: { 
        msg: "Feliz inicio de su mes mi amor… Comenzamos algo bonito para usted 💙",
        img: "https://i.pinimg.com/474x/c2/2c/b2/c22cb2c0b893e47c698ab4fc2c5dd974.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/609SDGj0txmlAXRrpwee9Y"
    },
    2: { 
        msg: "Mi cielo, hoy solo quiero recordarle que este mes es tan especial como usted.",
        img: "https://i.pinimg.com/originals/3f/02/21/3f02219e413cf9fbf15800891ae0c4fe.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/5kpFIS23n3tsoZAjWc5Ebx" 
    },
    3: { 
        msg: "Un día más de su mes, mi vida… y yo sigo pensando en lo afortunado que soy.",
        img: "https://i.pinimg.com/236x/d9/5c/32/d95c3278425072849d60dc20c6368c2d.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/4hVnZf324hXy6TyVx2oncO" 
    },
    4: { 
        msg: "Mi Eugenia, este mes apenas comienza… y espero pueda ser hermoso.",
        img: "https://i.pinimg.com/474x/36/d9/3a/36d93a0b28e92a651b29b0f5bfb9affa.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/22t10FTx8y3pC5fjLuKJ8K" 
    },
    5: { 
        msg: "Eugenia, mi amor… mayo se siente diferente solo porque ahora es sinónimo de usted.",
        img: "https://i.pinimg.com/236x/c1/16/1b/c1161b6074a609afc64e9c7b5da3c997.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/0SRddBTphQwQcfqw4Br1uX" 
    },
    6: { 
        msg: "Mi chica hermosa ¿Considera que este mes tiene algo especial?",
        img: "https://i.pinimg.com/236x/7d/12/0e/7d120e7524361b71b163c6aed28b5c56.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/6svTHgVAPqs0xF9PqO3Tc8" 
    },
    7: { 
        msg: "Mi cielo, cada día que pasa estamos más cerquita de celebrarla.",
        img: "https://i.pinimg.com/236x/98/70/66/9870663bc381f9c6d45ad42aaa893467.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/0IWBTieCc6wQZ0C4kCHP9q" 
    },
    8: { 
        msg: "Hoy solo quiero decirle que usted merece un mes entero de sonrisas.",
        img: "https://cdn2.cdnstep.com/Dk1eFhmbNiXUuflqypjF/cover-1.thumb256.png",
        spotifyUrl: "https://open.spotify.com/embed/track/3eB9M6owEHwk4nNrZRNUwd" 
    },
    9: { 
        msg: "Mi vida, este mes tiene su nombre escrito en cada día.",
        img: "https://i.pinimg.com/236x/96/b1/2d/96b12d9076a803295a7e56be151ea2ab.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/3UI9I3e1g1y5T3SMfdgfGO" 
    },
    10: { 
        msg: "Eugenia… cada día de mayo me recuerda lo especial que es usted.",
        img: "https://i.pinimg.com/236x/ef/a0/21/efa0219050eaa77869603ae10f2bb7d1.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/2mDLrugtj3r6XpH3SdlLGB" 
    },
    11: { 
        msg: "Mi amor, este mes no es cualquiera… es suyo 💙",
        img: "https://i.pinimg.com/originals/5a/e0/25/5ae025e06a2047e0b3efe45ed63f3570.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/3NTaEHQg5iVrRRNWlnK4RY" 
    },
    12: { 
        msg: "Mi ternurina, espero que hoy su día haya sido tan bonito como usted.",
        img: "https://i.pinimg.com/236x/a8/c7/a2/a8c7a28764259490858612171c660e05.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/0gcOnIUKIG6JF56iFUfE0p" 
    },
    13: { 
        msg: "Mi vida, poquito a poquito, su mes va tomando forma.",
        img: "https://i.pinimg.com/236x/25/09/92/250992bd027857b6d10e8ffef1ff9e61.jpg",
        spotifyUrl: "https://open.spotify.com/embed/album/0qnDuxzDLdWWi9R473rv85" 
    },
    14: { 
        msg: "Eugenia, mi cielo, mayo sigue avanzando y mi ilusión también.",
        img: "https://i.pinimg.com/474x/c2/2c/b2/c22cb2c0b893e47c698ab4fc2c5dd974.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/1OCre5vxYq2Vk1wfFsTWE1" 
    },
    15: { 
        msg: "Mitad de mes cariño… espero que esto sea cada vez más bonito.",
        img: "https://i.pinimg.com/originals/3f/02/21/3f02219e413cf9fbf15800891ae0c4fe.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/09QfIIP4NUx4A3thmovb2o" 
    },
    16: { 
        msg: "Mi amor, cada día encuentro una razón más para quererla.",
        img: "https://i.pinimg.com/236x/d9/5c/32/d95c3278425072849d60dc20c6368c2d.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/7DUh5iszvXQDhhE0ZEtmUe" 
    },
    17: { 
        msg: "Mi ternurina hermosa… ya casi llegamos a su día especial.",
        img: "https://i.pinimg.com/474x/36/d9/3a/36d93a0b28e92a651b29b0f5bfb9affa.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/6p3yxt0uJJshAS3CT0znQg" 
    },
    18: { 
        msg: "Eugenia, hoy solo quiero que recuerde lo importante que es para mí.",
        img: "https://i.pinimg.com/236x/c1/16/1b/c1161b6074a609afc64e9c7b5da3c997.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/0doPUFYZPjLAFNfqoZy7Jw" 
    },
    19: { 
        msg: "Mi cielo, este mes se siente diferente… se siente suyo.",
        img: "https://i.pinimg.com/236x/7d/12/0e/7d120e7524361b71b163c6aed28b5c56.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/4UKe38tm5NkRpuFCxwewEe" 
    },
    20: { 
        msg: "Mi vida, cada día de mayo me gusta más porque es suyo.",
        img: "https://i.pinimg.com/236x/98/70/66/9870663bc381f9c6d45ad42aaa893467.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v" 
    },
    21: { 
        msg: "Mi amor ya falta poco, mis nervios y emoción no se disimulan.",
        img: "https://cdn2.cdnstep.com/Dk1eFhmbNiXUuflqypjF/cover-1.thumb256.png",
        spotifyUrl: "https://open.spotify.com/embed/track/48eI8VxzKYyx1ngnimIVHs" 
    },
    22: { 
        msg: "Mi chica hermosa, se acerca un día muy especial… y usted también lo es.",
        img: "https://i.pinimg.com/236x/96/b1/2d/96b12d9076a803295a7e56be151ea2ab.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/3vxsXUUU9jUJrGNP4APtj3" 
    },
    23: { 
        msg: "Eugenia bella, ya casi llega su momento.",
        img: "https://i.pinimg.com/236x/ef/a0/21/efa0219050eaa77869603ae10f2bb7d1.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/6Al0Kpd4VrRZ0Z4kTThNPa" 
    },
    24: { 
        msg: "Mi cielo, increíble cómo pasan los días y su día ya casi está aquí.",
        img: "https://i.pinimg.com/originals/5a/e0/25/5ae025e06a2047e0b3efe45ed63f3570.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/6lanRgr6wXibZr8KgzXxBl" 
    },
    25: { 
        msg: "Mi amor… mañana no es cualquier día 💙",
        img: "https://i.pinimg.com/236x/a8/c7/a2/a8c7a28764259490858612171c660e05.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/6jVCPLg3AZaM7tXAzpXBcG" 
    },
    
    /* EL GRAN DIA */
    26: { 
        msg: "¡FELIZ CUMPLEAÑOS, MI AMOR! 🎉\n\nHoy el mundo es más bonito porque usted existe, se escucha facil decir que esta cumpliendo 32 y mucho mas aun saber que yo unicamente he compartido 2 años de esos a su lado, sin embargo, se la mujer que usted es, años de experiencia que la han hecho la gran mujer que es hoy. Que este nuevo año de vida le traiga tanta salud, luz y felicidad como la que usted me da a mí. Deseo poder seguir celebrando con usted mas cumpleaños.\n\n¡La amo con todo mi corazon mi vida! 🎂💙",
        img: "img/foto-eu.jpg", /* Aquí cargará la foto de Eugenia */
        spotifyUrl: "https://open.spotify.com/embed/track/5kWzM5dWoG54dGyFb5uMuX" 
    },
    
    27: { 
        msg: "Mi vida… después de su día, solo quiero que siga sintiéndose especial.",
        img: "https://i.pinimg.com/236x/25/09/92/250992bd027857b6d10e8ffef1ff9e61.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/2quTytCTP9kKLvpveyO1mt" 
    },
    28: { 
        msg: "Eugenia, mi cielo… su mes aún no termina 💙",
        img: "https://i.pinimg.com/474x/c2/2c/b2/c22cb2c0b893e47c698ab4fc2c5dd974.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/50WkRwFR0BAo6If7GtXnA8" 
    },
    29: { 
        msg: "Mi ternurina, todavía quedan días para seguir consintiéndola.",
        img: "https://i.pinimg.com/originals/3f/02/21/3f02219e413cf9fbf15800891ae0c4fe.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/7sRXhReWmJF5pqyg3uUTES" 
    },
    30: { 
        msg: "Mi amor, mayo se va, pero lo que siento por usted no.",
        img: "https://i.pinimg.com/236x/d9/5c/32/d95c3278425072849d60dc20c6368c2d.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/00kIWJu9IHiQ6i0qJAU0Z9" 
    },
    31: { 
        msg: "Último día de su mes mi vida. Fue un verdadero placer hacer esto por usted y acompañarla todos estos días. Terminamos mayo, pero usted siempre será mi razón 💙",
        img: "https://i.pinimg.com/474x/36/d9/3a/36d93a0b28e92a651b29b0f5bfb9affa.jpg",
        spotifyUrl: "https://open.spotify.com/embed/track/16izvdwIKjq3t6Ufc1cjBj" 
    }
};

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const today = new Date();
    const currentMonth = today.getMonth(); // 4 = Mayo
    const currentDay = today.getDate();

    for (let i = 1; i <= 31; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = 'day-btn';

        // CONDICIÓN: Se desbloquea si el dia ya paso o estamos en el
        if (currentMonth === 4 && i <= currentDay) {
            btn.classList.add('unlocked');
            btn.onclick = () => openDay(i);
        } else if (currentMonth > 4) {
            btn.classList.add('unlocked');
            btn.onclick = () => openDay(i);
        } else {
            btn.classList.add('locked');
            btn.onclick = () => alert("¡Paciencia mi amor! Aún no es este día.");
        }
        grid.appendChild(btn);
    }
}


// =========================================
// PANTALLA 3: VISTA DIARIA
// =========================================
function openDay(day) {
    historyStack.push('view-daily');
    showView('view-daily');
    
    document.getElementById('daily-title').innerText = `Mayo ${day}`;
    
    const data = dailyData[day] || { msg: "¡Ups! Mensaje en construcción...", img: "", spotifyUrl: "" };
    
    const msgEl = document.getElementById('daily-message');
    msgEl.innerText = data.msg;
    msgEl.classList.remove('handwritten'); 
    
    const imgEl = document.getElementById('daily-img');
    if (data.img) {
        imgEl.src = data.img;
        imgEl.classList.remove('hidden');
    } else {
        imgEl.classList.add('hidden');
    }

    const spotifyContainer = document.getElementById('spotify-container');
    if (data.spotifyUrl && data.spotifyUrl !== "") {
        spotifyContainer.innerHTML = `<iframe style="border-radius:12px" src="${data.spotifyUrl}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } else {
        spotifyContainer.innerHTML = '';
    }

    if (day === 26) {
        setTimeout(() => {
            if (typeof confetti !== 'undefined') {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#ff4f81', '#ffffff', '#d4af37', '#8b0000']
                });
                
                setTimeout(() => {
                    confetti({
                        particleCount: 100,
                        spread: 120,
                        origin: { y: 0.5 },
                        colors: ['#ff4f81', '#ff8eb3']
                    });
                }, 500);
            }
        }, 300);
    }
}

renderCalendar();