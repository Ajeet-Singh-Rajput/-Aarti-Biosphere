// BIOSPHERE THEME SWITCHER

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeButton.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("biosphere-theme", "light");
    } else {
        themeButton.innerHTML = "☀️ Light Mode";
        localStorage.setItem("biosphere-theme", "dark");
    }

});

// Remember the selected theme

const savedTheme = localStorage.getItem("biosphere-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeButton.innerHTML = "🌙 Dark Mode";
}
// BIOSPHERE BIOLOGY EXPLORER

const biologyTopics = {

    cell: {
        title: "🔬 Cell Biology",
        description: "Cell Biology is the branch of Biology that studies cells, their structure and functions. Explore the cell membrane, nucleus, mitochondria and other cell organelles."
    },

    human: {
        title: "🫀 Human Anatomy",
        description: "Human Anatomy studies the structure of the human body. Explore the digestive, respiratory, circulatory, nervous and excretory systems."
    },

    animal: {
        title: "🐾 Animal Kingdom",
        description: "The Animal Kingdom includes multicellular, eukaryotic organisms. Explore major animal phyla, their characteristics and examples."
    },

    plant: {
        title: "🌿 Plant Kingdom",
        description: "Explore the diversity of plants, including algae, bryophytes, pteridophytes, gymnosperms and angiosperms."
    },

    genetics: {
        title: "🧬 Genetics",
        description: "Genetics is the study of heredity and variation. Discover DNA, genes, chromosomes and inheritance."
    },

    ecology: {
        title: "🌍 Ecology",
        description: "Ecology studies interactions between organisms and their environment. Explore ecosystems, food chains and biodiversity."
    }

};

const learningContent = {
    cell: {
        content: "Cell is the basic structural and functional unit of life. All living organisms are made of cells. Cells contain organelles that perform specific functions.",
        concepts: [
            "Nucleus controls cellular activities.",
            "Mitochondria produce ATP.",
            "Ribosomes synthesize proteins.",
            "Cell membrane regulates movement of substances."
        ],
        revision: "Cell = Basic unit of life | Nucleus = Control centre | Mitochondria = Powerhouse"
    },

    human: {
        content: "Human Anatomy is the study of the structure of the human body. The human body contains several organ systems working together.",
        concepts: [
            "Heart pumps blood throughout the body.",
            "Lungs help in gas exchange.",
            "Kidneys filter blood and form urine.",
            "Brain coordinates body activities."
        ],
        revision: "Heart = Circulation | Lungs = Respiration | Kidneys = Excretion | Brain = Control"
    },

    animal: {
        content: "The Animal Kingdom includes multicellular, eukaryotic and heterotrophic organisms. Animals show a wide range of structural organisation.",
        concepts: [
            "Porifera: Pore-bearing animals.",
            "Cnidaria: Stinging cells present.",
            "Annelida: Segmented body.",
            "Arthropoda: Jointed appendages."
        ],
        revision: "Animal Kingdom = Multicellular + Eukaryotic + Heterotrophic"
    },

    plant: {
        content: "Plant Biology studies plants, their structure, growth, reproduction and physiological processes.",
        concepts: [
            "Roots absorb water and minerals.",
            "Xylem transports water.",
            "Phloem transports food.",
            "Chlorophyll helps in photosynthesis."
        ],
        revision: "Xylem = Water | Phloem = Food | Chlorophyll = Photosynthesis"
    },

    genetics: {
        content: "Genetics is the branch of Biology that studies heredity and variation in organisms.",
        concepts: [
            "DNA carries genetic information.",
            "Genes are units of heredity.",
            "Chromosomes contain DNA.",
            "Gregor Mendel is known as the Father of Genetics."
        ],
        revision: "DNA = Genetic material | Gene = Unit of heredity | Mendel = Father of Genetics"
    },

    ecology: {
        content: "Ecology is the study of interactions between organisms and their environment.",
        concepts: [
            "Ecosystem includes biotic and abiotic components.",
            "Producers prepare their own food.",
            "Consumers depend on other organisms.",
            "Decomposers break down dead organic matter."
        ],
        revision: "Ecology = Organisms + Environment | Producers → Consumers → Decomposers"
    }
};

function openTopic(topic) {
    const selected = biologyTopics[topic];
    const details = learningContent[topic];

    if (!selected || !details) return;

    document.getElementById("topic-title").innerText = selected.title;
    document.getElementById("topic-description").innerText = selected.description;

    document.getElementById("topic-content").innerText = details.content;

    document.getElementById("topic-concepts").innerHTML =
        "<ul>" + details.concepts.map(item => "<li>" + item + "</li>").join("") + "</ul>";

    document.getElementById("topic-revision").innerText = details.revision;

    document.getElementById("topic-modal").style.display = "flex";
}

function closeTopic() {

    document.getElementById("topic-modal").style.display = "none";

}
// BIOSPHERE INTERACTIVE QUIZ

const questions = [

{
question: "Which organelle is known as the powerhouse of the cell?",
options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
answer: 1
},

{
question: "What is the basic unit of life?",
options: ["Tissue", "Organ", "Cell", "Atom"],
answer: 2
},

{
question: "Which pigment helps plants in photosynthesis?",
options: ["Haemoglobin", "Chlorophyll", "Melanin", "Keratin"],
answer: 1
},

{
question: "Which organ pumps blood throughout the human body?",
options: ["Lungs", "Kidney", "Heart", "Liver"],
answer: 2
},

{
question: "What is the genetic material in humans?",
options: ["RNA only", "DNA", "Protein", "Glucose"],
answer: 1
},

{
question: "Which blood cells help fight infections?",
options: ["RBC", "WBC", "Platelets", "Plasma"],
answer: 1
},

{
question: "Which gas do plants absorb during photosynthesis?",
options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
answer: 2
},

{
question: "Which organ filters blood to form urine?",
options: ["Heart", "Kidney", "Stomach", "Lungs"],
answer: 1
},

{
question: "How many chambers are present in the human heart?",
options: ["Two", "Three", "Four", "Five"],
answer: 2
},

{
question: "Which part of the cell contains genetic material?",
options: ["Nucleus", "Cell wall", "Cytoplasm", "Vacuole"],
answer: 0
},

{
question: "Which is the largest organ of the human body?",
options: ["Liver", "Skin", "Brain", "Heart"],
answer: 1
},

{
question: "Which vitamin is produced in the skin in sunlight?",
options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
answer: 3
},

{
question: "Which plant tissue transports water?",
options: ["Phloem", "Xylem", "Epidermis", "Cortex"],
answer: 1
},

{
question: "Who is known as the father of Genetics?",
options: ["Darwin", "Mendel", "Lamarck", "Pasteur"],
answer: 1
},

{
question: "Which organ is mainly responsible for detoxification?",
options: ["Liver", "Heart", "Spleen", "Pancreas"],
answer: 0
},

{
question: "Which kingdom includes bacteria in the five-kingdom classification?",
options: ["Protista", "Fungi", "Monera", "Plantae"],
answer: 2
},

{
question: "What is the functional unit of the kidney?",
options: ["Neuron", "Nephron", "Alveolus", "Villus"],
answer: 1
},

{
question: "Which molecule carries genetic information?",
options: ["ATP", "DNA", "Glucose", "Lipid"],
answer: 1
},

{
question: "Which part of the brain controls balance?",
options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
answer: 1
},

{
question: "What is the study of the environment and organisms called?",
options: ["Genetics", "Ecology", "Anatomy", "Cytology"],
answer: 1
}

];

let currentQuestion = 0;
let score = 0;

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz-start").style.display = "none";
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";

    showQuestion();

}

function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question").innerText =
        `Question ${currentQuestion + 1} / ${questions.length}: ${q.question}`;

    document.getElementById("feedback").innerText = "";

    document.getElementById("next-btn").style.display = "none";

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.innerText = option;

        button.onclick = () => checkAnswer(index);

        optionsDiv.appendChild(button);

    });

}

function checkAnswer(selected) {

    const q = questions[currentQuestion];

    const buttons = document.querySelectorAll("#options button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === q.answer) {
            button.style.background = "#16834d";
        }

        if (index === selected && selected !== q.answer) {
            button.style.background = "#c0392b";
        }

    });

    if (selected === q.answer) {

        score++;

        document.getElementById("feedback").innerText =
            "Correct Answer! 🎉";

    } else {

        document.getElementById("feedback").innerText =
            "Incorrect! The correct answer is " + q.options[q.answer];

    }

    document.getElementById("next-btn").style.display = "inline-block";

}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}

function showResult() {

    document.getElementById("quiz-box").style.display = "none";

    document.getElementById("quiz-result").style.display = "block";

    const percentage = (score / questions.length) * 100;

    document.getElementById("final-score").innerText =
        `Your Score: ${score}/${questions.length} (${percentage}%)`;

}
const topicSearch = document.getElementById("topic-search");
const noResults = document.getElementById("no-results");

topicSearch.addEventListener("input", filterTopics);

function filterTopics() {
    const searchText = topicSearch.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    let visibleCount = 0;

    cards.forEach(function(card) {
        const topicName = card.textContent.toLowerCase();

        if (topicName.includes(searchText)) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
}

function clearSearch() {
    topicSearch.value = "";
    filterTopics();
}
function showOrgan(organ) {
    const info = {
        Heart: "The heart pumps blood throughout the body.",
        Brain: "The brain controls and coordinates body activities.",
        Lungs: "The lungs help exchange oxygen and carbon dioxide.",
        Kidneys: "The kidneys filter blood and produce urine."
    };

    document.getElementById("organ-info").innerHTML =
        "<h2>" + organ + "</h2><p>" + info[organ] + "</p>";
}
const studyNotes = {
    cell: "Cell is the basic structural and functional unit of life. It contains organelles such as nucleus, mitochondria and ribosomes.",

    classification: "Living organisms are classified into five kingdoms: Monera, Protista, Fungi, Plantae and Animalia.",

    plant: "The Plant Kingdom includes algae, bryophytes, pteridophytes, gymnosperms and angiosperms.",

    human: "Human physiology studies the functions of the human body. Major systems include digestive, respiratory, circulatory and nervous systems."
};

function showNote(chapter) {
    document.getElementById("notes-info").innerHTML =
        "<h2>" + chapter.toUpperCase() +
        "</h2><p>" + studyNotes[chapter] + "</p>";
}
// =================================
// BIOSPHERE FINAL FEATURE UPGRADE
// =================================

const chapterNames = {
    cell: "Cell: The Unit of Life",
    classification: "Biological Classification",
    plant: "Plant Kingdom",
    human: "Human Physiology"
};

function getSavedData(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}

// CREATE DASHBOARD
const notesSection = document.getElementById("notes");

const dashboard = document.createElement("div");
dashboard.className = "quiz-container";
dashboard.innerHTML = `
    <h2>📊 My Learning Dashboard</h2>
    <h3 id="completed-count">Completed: 0/4</h3>
    <div id="bookmark-list"></div>
    <h3>⭐ My Bookmarks</h3>
    <div id="saved-bookmarks">No bookmarks yet.</div>
`;

notesSection.insertBefore(dashboard, document.getElementById("notes-info"));

// ADD BOOKMARK AND COMPLETE BUTTONS
document.querySelectorAll("#notes .card").forEach((card, index) => {
    const keys = Object.keys(chapterNames);
    const key = keys[index];
    const name = chapterNames[key];

    const buttons = document.createElement("div");

    buttons.innerHTML = `
        <button class="quiz-btn" data-bookmark="${key}">⭐ Bookmark</button>
        <button class="quiz-btn" data-complete="${key}">✅ Complete</button>
    `;

    card.appendChild(buttons);

    buttons.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation();

            if (this.dataset.bookmark) {
                let saved = getSavedData("bioBookmarks");

                if (!saved.includes(name)) {
                    saved.push(name);
                    localStorage.setItem("bioBookmarks", JSON.stringify(saved));
                }

                updateDashboard();
            }

            if (this.dataset.complete) {
                let completed = getSavedData("bioCompleted");

                if (!completed.includes(name)) {
                    completed.push(name);
                    localStorage.setItem("bioCompleted", JSON.stringify(completed));
                }

                updateDashboard();
            }
        });
    });
});

// UPDATE DASHBOARD
function updateDashboard() {
    const completed = getSavedData("bioCompleted");
    const bookmarks = getSavedData("bioBookmarks");

    document.getElementById("completed-count").innerText =
        `Completed: ${completed.length}/4`;

    document.getElementById("saved-bookmarks").innerHTML =
        bookmarks.length
        ? bookmarks.map(item => `<p>⭐ ${item}</p>`).join("")
        : "No bookmarks yet.";
}

updateDashboard();

console.log("BioSphere Final Features Loaded!");
