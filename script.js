"use strict";

// =====================================
// SIGNALS AND SYSTEMS MCQ QUIZ
// Unit 3: Fourier Series and Transform
// Unit 4: Laplace Transform and Z-Transform
// =====================================

const questionBank = [
    {
        u: 3,
        q: "A periodic signal satisfies f(-t) = f(t). Which statement is correct?",
        o: [
            "Only sine terms",
            "Only cosine terms and possibly a DC term",
            "Only a DC term",
            "Cannot be represented by Fourier series"
        ],
        a: 1,
        e: "An even signal has only cosine terms and may contain a DC term."
    },
    {
        u: 3,
        q: "The fundamental angular frequency of a periodic signal with period T0 is:",
        o: ["T0/2π", "2πT0", "2π/T0", "1/T0²"],
        a: 2,
        e: "ω0 = 2π/T0."
    },
    {
        u: 3,
        q: "The Fourier transform of x(t)cos(2πf0t) is:",
        o: [
            "1/2[X(f-f0)+X(f+f0)]",
            "X(f)cos(2πf0t)",
            "X(f-f0)-X(f+f0)",
            "2X(f)"
        ],
        a: 0,
        e: "Cosine multiplication produces two shifted spectra."
    },
    {
        u: 3,
        q: "The Fourier transform of dx(t)/dt is:",
        o: ["X(f)/(j2πf)", "j2πfX(f)", "X(-f)", "-X(f)"],
        a: 1,
        e: "Differentiation in time corresponds to multiplication by j2πf."
    },
    {
        u: 3,
        q: "Multiplying x[n] by e^(jω0n) corresponds to:",
        o: [
            "Time shifting",
            "Periodicity",
            "Frequency shifting",
            "Correlation"
        ],
        a: 2,
        e: "This is the frequency-shifting property."
    },
    {
        u: 3,
        q: "If f(-t) = f(t), then f(t) is:",
        o: ["Even", "Odd", "Neither", "Both"],
        a: 0,
        e: "This is the definition of an even signal."
    },
    {
        u: 3,
        q: "The Fourier series of an odd periodic signal contains:",
        o: [
            "Sine and cosine terms",
            "Only sine terms",
            "Only cosine terms",
            "Only a DC term"
        ],
        a: 1,
        e: "An odd signal has only sine terms."
    },
    {
        u: 3,
        q: "The fundamental frequency of a periodic signal is:",
        o: ["2πT0", "1/T0", "T0", "1/(2πT0)"],
        a: 1,
        e: "f0 = 1/T0."
    },
    {
        u: 3,
        q: "For an odd periodic signal, which Fourier coefficients are zero?",
        o: [
            "Sine coefficients",
            "Cosine coefficients including DC",
            "All coefficients",
            "Only the fundamental sine coefficient"
        ],
        a: 1,
        e: "Cosine coefficients and the DC component are zero."
    },
    {
        u: 3,
        q: "The Fourier transform of x(t-t0) is:",
        o: [
            "X(f)e^(-j2πft0)",
            "X(f)e^(j2πft0)",
            "X(f-t0)",
            "X(-f)"
        ],
        a: 0,
        e: "Time shifting introduces the factor e^(-j2πft0)."
    },
    {
        u: 3,
        q: "The Fourier transform of x(-t) is:",
        o: ["X(f)", "X(-f)", "-X(f)", "jX(f)"],
        a: 1,
        e: "Time reversal produces X(-f)."
    },
    {
        u: 3,
        q: "The Fourier transform of cos(2πf0t) is:",
        o: [
            "δ(f-f0)+δ(f+f0)",
            "1/2[δ(f-f0)+δ(f+f0)]",
            "δ(f)",
            "jδ(f-f0)"
        ],
        a: 1,
        e: "The transform contains two impulses, each with amplitude 1/2."
    },
    {
        u: 3,
        q: "A general periodic signal may contain:",
        o: [
            "Only sine terms",
            "Only cosine terms",
            "Sine, cosine and DC terms",
            "No harmonics"
        ],
        a: 2,
        e: "A general signal can contain all three components."
    },
    {
        u: 3,
        q: "The Fourier transform of x(t)e^(j2πf0t) is:",
        o: ["X(f+f0)", "X(f-f0)", "X(-f)", "X(f)"],
        a: 1,
        e: "Multiplication by the complex exponential shifts the spectrum."
    },
    {
        u: 3,
        q: "The Fourier transform of t·x(t), using frequency f, is:",
        o: [
            "dX(f)/df",
            "j2πfX(f)",
            "1/(j2π) dX(f)/df",
            "-j2πfX(f)"
        ],
        a: 2,
        e: "The time multiplication property gives 1/(j2π) dX(f)/df."
    },
    {
        u: 3,
        q: "For an LTI system, the output spectrum is:",
        o: [
            "Y(f)=X(f)H(f)",
            "Y(f)=X(f)+H(f)",
            "Y(f)=X(f)/H(f)",
            "Y(f)=H(f)-X(f)"
        ],
        a: 0,
        e: "Y(f)=X(f)H(f)."
    },
    {
        u: 3,
        q: "For a real and even signal, its Fourier transform is:",
        o: [
            "Real and even",
            "Imaginary and odd",
            "Real and odd",
            "Imaginary and even"
        ],
        a: 0,
        e: "A real even signal has a real even Fourier transform."
    },
    {
        u: 3,
        q: "The Fourier transform of the unit impulse δ(t) is:",
        o: ["Zero", "jω", "One", "δ(ω)"],
        a: 2,
        e: "The Fourier transform of an impulse is 1."
    },
    {
        u: 3,
        q: "A signal has period 4 seconds. Its fundamental angular frequency is:",
        o: ["π/2 rad/s", "2π rad/s", "4π rad/s", "1/4 rad/s"],
        a: 0,
        e: "ω0 = 2π/4 = π/2 rad/s."
    },
    {
        u: 3,
        q: "For an even function, the Fourier sine coefficients are:",
        o: ["Zero", "One", "Always negative", "Equal to cosine coefficients"],
        a: 0,
        e: "The sine coefficients are zero for an even function."
    },
    {
        u: 3,
        q: "Parseval's theorem relates time-domain energy to:",
        o: [
            "Period only",
            "Frequency-domain energy",
            "Phase only",
            "Fundamental frequency only"
        ],
        a: 1,
        e: "Parseval's theorem relates energy in time and frequency domains."
    },

    // UNIT 4: LAPLACE TRANSFORM AND Z-TRANSFORM

    {
        u: 4,
        q: "The Laplace transform of unit-step u(t) is:",
        o: ["1", "1/s", "s", "1/s²"],
        a: 1,
        e: "L{u(t)} = 1/s."
    },
    {
        u: 4,
        q: "The Laplace transform of e^(-at)u(t) is:",
        o: ["1/(s-a)", "1/(s+a)", "s/(s+a)", "1"],
        a: 1,
        e: "L{e^(-at)u(t)} = 1/(s+a)."
    },
    {
        u: 4,
        q: "The initial value theorem is:",
        o: [
            "x(0+) = lim(s→∞) sX(s)",
            "x(∞) = lim(s→∞) X(s)",
            "x(0+) = lim(s→0) X(s)",
            "x(0+) = X(0)"
        ],
        a: 0,
        e: "The initial value theorem gives x(0+) = lim sX(s)."
    },
    {
        u: 4,
        q: "The Z-transform of δ[n] is:",
        o: ["z", "z^-1", "1", "1/(1-z^-1)"],
        a: 2,
        e: "The Z-transform of the unit impulse is 1."
    },
    {
        u: 4,
        q: "The Z-transform of x[n-1] is:",
        o: ["zX(z)", "z^-1X(z)", "X(z+1)", "-X(z)"],
        a: 1,
        e: "A one-sample delay introduces the factor z^-1."
    },
    {
        u: 4,
        q: "The ROC of a right-sided sequence is generally:",
        o: [
            "Inside the innermost pole",
            "Outside the outermost pole",
            "Always the unit circle only",
            "Entire z-plane including poles"
        ],
        a: 1,
        e: "The ROC of a right-sided sequence lies outside its outermost pole."
    },
    {
        u: 4,
        q: "If X(s)=1/[s(s+2)], the final value of x(t) is:",
        o: ["0", "1/2", "1", "2"],
        a: 1,
        e: "lim(s→0) sX(s) = lim(s→0) 1/(s+2) = 1/2."
    },
    {
        u: 4,
        q: "The Laplace transform of dx(t)/dt with zero initial conditions is:",
        o: ["sX(s)", "X(s)/s", "s²X(s)", "-sX(s)"],
        a: 0,
        e: "L{x'(t)} = sX(s) for zero initial conditions."
    },
    {
        u: 4,
        q: "For x[n]=a^n u[n], the Z-transform is:",
        o: [
            "1/(1-az^-1), |z|>|a|",
            "1/(1+az^-1), |z|<|a|",
            "1-az^-1",
            "z-a"
        ],
        a: 0,
        e: "The right-sided exponential has transform 1/(1-az^-1)."
    },
    {
        u: 4,
        q: "For a causal LTI system, H(z) is:",
        o: ["Z{h[n]}", "Z{x[n]} only", "X(z)+Y(z)", "X(z)/Y(z)"],
        a: 0,
        e: "H(z) is the Z-transform of the impulse response."
    },
    {
        u: 4,
        q: "The Laplace transform of δ(t) is:",
        o: ["0", "1", "1/s", "s"],
        a: 1,
        e: "L{δ(t)} = 1."
    },
    {
        u: 4,
        q: "The Laplace transform of cos(ω0t)u(t) is:",
        o: [
            "s/(s²+ω0²)",
            "ω0/(s²+ω0²)",
            "1/(s+ω0)",
            "s/(s-ω0)"
        ],
        a: 0,
        e: "L{cos(ω0t)u(t)} = s/(s²+ω0²)."
    },
    {
        u: 4,
        q: "The unilateral Laplace transform of x(t-t0)u(t-t0) is:",
        o: [
            "e^(-st0)X(s)",
            "e^(st0)X(s)",
            "X(s-t0)",
            "X(s+t0)"
        ],
        a: 0,
        e: "A delay introduces the factor e^(-st0)."
    },
    {
        u: 4,
        q: "The bilateral Z-transform is defined as:",
        o: [
            "Σx[n]z^n",
            "Σx[n]z^-n",
            "∫x(t)e^(-st)dt",
            "Σx[n]e^(-jnω) only"
        ],
        a: 1,
        e: "The bilateral Z-transform is Σx[n]z^-n."
    },
    {
        u: 4,
        q: "If X(s)=3/(s+3), the causal signal x(t) is:",
        o: [
            "3e^(-3t)u(t)",
            "e^(3t)u(t)",
            "3u(t)",
            "δ(t-3)"
        ],
        a: 0,
        e: "Inverse Laplace transform gives 3e^(-3t)u(t)."
    },
    {
        u: 4,
        q: "If X(s)=1/s², its inverse Laplace transform is:",
        o: ["u(t)", "tu(t)", "t²u(t)", "e^(-t)u(t)"],
        a: 1,
        e: "L{tu(t)} = 1/s²."
    },
    {
        u: 4,
        q: "The inverse Z-transform of 1/(1-0.5z^-1), ROC |z|>0.5, is:",
        o: [
            "(0.5)^n u[n]",
            "-(0.5)^n u[-n-1]",
            "δ[n]",
            "(-0.5)^n u[n]"
        ],
        a: 0,
        e: "The outside ROC corresponds to a right-sided sequence."
    },
    {
        u: 4,
        q: "For an LTI system, the output transform is:",
        o: [
            "Y(z)=H(z)+X(z)",
            "Y(z)=H(z)X(z)",
            "Y(z)=X(z)/H(z)",
            "Y(z)=H(z)-X(z)"
        ],
        a: 1,
        e: "Y(z)=H(z)X(z)."
    },
    {
        u: 4,
        q: "The Z-transform of δ[n-2] is:",
        o: ["z²", "z^-2", "1", "1/(1-z^-1)"],
        a: 1,
        e: "A two-sample delay gives z^-2."
    },
    {
        u: 4,
        q: "A discrete-time LTI system is BIBO stable if h[n] is:",
        o: [
            "Absolutely summable",
            "Absolutely integrable",
            "Periodic only",
            "Always finite length"
        ],
        a: 0,
        e: "BIBO stability requires the sum of |h[n]| to be finite."
    },
    {
        u: 4,
        q: "The inverse Z-transform recovers:",
        o: ["X(s)", "x[n]", "H(s)", "Only the Laplace transform"],
        a: 1,
        e: "It recovers the discrete-time sequence x[n]."
    },
    {
        u: 4,
        q: "The inverse Laplace transform of 1/[s(s+1)] is:",
        o: [
            "(1-e^(-t))u(t)",
            "e^(-t)u(t)",
            "tu(t)",
            "(1+e^(-t))u(t)"
        ],
        a: 0,
        e: "Partial fractions give 1/s - 1/(s+1)."
    },
    {
        u: 4,
        q: "For x[n]=(-0.4)^n u[n], the Z-transform is:",
        o: [
            "1/(1+0.4z^-1), |z|>0.4",
            "1/(1-0.4z^-1), |z|>0.4",
            "1/(1+0.4z), |z|<0.4",
            "z+0.4"
        ],
        a: 0,
        e: "Substitute a=-0.4 into 1/(1-az^-1)."
    },
    {
        u: 4,
        q: "The Laplace transform of e^(-2t)u(t) is:",
        o: ["1/(s-2)", "1/(s+2)", "1/(s²+4)", "s/(s+2)"],
        a: 1,
        e: "The transform is 1/(s+2)."
    },
    {
        u: 4,
        q: "For zero initial conditions, the Laplace transform of x''(t) is:",
        o: ["sX(s)", "s²X(s)", "X(s)/s²", "-s²X(s)"],
        a: 1,
        e: "L{x''(t)} = s²X(s)."
    },
    {
        u: 4,
        q: "For a>0, the Laplace transform of x(at) is:",
        o: ["X(as)", "(1/a)X(s/a)", "aX(as)", "X(s-a)"],
        a: 1,
        e: "Time scaling gives (1/a)X(s/a)."
    },
    {
        u: 4,
        q: "The Z-transform of u[n] is:",
        o: [
            "1/(1-z^-1), |z|>1",
            "1/(1+z^-1), |z|<1",
            "z, |z|>1",
            "1"
        ],
        a: 0,
        e: "The ROC is |z|>1."
    },
    {
        u: 4,
        q: "The ROC of a Z-transform cannot contain:",
        o: [
            "A point where the series converges",
            "A pole",
            "The unit circle in every case",
            "The origin in every case"
        ],
        a: 1,
        e: "The ROC cannot contain poles."
    },
    {
        u: 4,
        q: "For a causal rational discrete-time LTI system, the ROC is:",
        o: [
            "Inside the innermost pole",
            "Outside the outermost pole",
            "Between all poles only",
            "Always |z|=1"
        ],
        a: 1,
        e: "The ROC is outside the outermost pole."
    },
    {
        u: 4,
        q: "The Z-transform property for n·x[n] is:",
        o: [
            "-z dX(z)/dz",
            "zX(z)",
            "X(z-1)",
            "dX(z)/dz"
        ],
        a: 0,
        e: "Z{n x[n]} = -z dX(z)/dz."
    },
    {
        u: 4,
        q: "The transfer function of a continuous-time LTI system is:",
        o: [
            "H(s)=X(s)/Y(s)",
            "H(s)=Y(s)/X(s)",
            "H(s)=X(s)+Y(s)",
            "H(s)=X(s)Y(s)"
        ],
        a: 1,
        e: "Transfer function equals output transform divided by input transform."
    },
    {
        u: 4,
        q: "The inverse Laplace transform of 5/(s+5) is:",
        o: [
            "5e^(-5t)u(t)",
            "e^(5t)u(t)",
            "5u(t)",
            "δ(t-5)"
        ],
        a: 0,
        e: "The inverse transform is 5e^(-5t)u(t)."
    },
    {
        u: 4,
        q: "The partial fraction of (s+2)/[s(s+1)] is:",
        o: [
            "2/s - 1/(s+1)",
            "1/s + 1/(s+1)",
            "1/s - 2/(s+1)",
            "2/s + 1/(s+1)"
        ],
        a: 0,
        e: "(s+2)/[s(s+1)] = 2/s - 1/(s+1)."
    },
    {
        u: 4,
        q: "The Z-transform of δ[n]+2δ[n-1] is:",
        o: ["1+2z^-1", "z+2", "1+2z", "2z^-1"],
        a: 0,
        e: "The transform is 1+2z^-1."
    },
    {
        u: 4,
        q: "A causal system has H(z)=1/(1-0.8z^-1). Its ROC is:",
        o: ["|z|<0.8", "|z|>0.8", "|z|=0.8", "Entire z-plane"],
        a: 1,
        e: "For a causal system, the ROC lies outside the pole."
    }
];

// =====================================
// QUIZ LOGIC
// =====================================

const unitFilter = document.getElementById("unitFilter");
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const questionCounter = document.getElementById("questionCounter");
const answeredCounter = document.getElementById("answeredCounter");
const progressBar = document.getElementById("progressBar");
const unitTag = document.getElementById("unitTag");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

let questions = [];
let answers = {};
let current = 0;
let submitted = false;

function loadQuestions() {
    const selectedUnit = unitFilter.value;

    questions = questionBank.filter(question =>
        selectedUnit === "all" ||
        String(question.u) === selectedUnit
    );

    answers = {};
    current = 0;
    submitted = false;

    quizPanel.classList.remove("hidden");
    resultPanel.classList.add("hidden");

    renderQuestion();
}

function renderQuestion() {
    const question = questions[current];

    questionCounter.textContent =
        `Question ${current + 1} of ${questions.length}`;

    answeredCounter.textContent =
        `Answered: ${Object.keys(answers).length}`;

    progressBar.style.width =
        `${((current + 1) / questions.length) * 100}%`;

    unitTag.textContent =
        question.u === 3
            ? "UNIT 3 - FOURIER SERIES & TRANSFORM"
            : "UNIT 4 - LAPLACE & Z-TRANSFORM";

    questionText.textContent = question.q;
    optionsBox.innerHTML = "";
    feedback.textContent = "";

    question.o.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "option";

        if (answers[current] === index) {
            label.classList.add("selected");
        }

        if (submitted && index === question.a) {
            label.classList.add("correct");
        }

        if (
            submitted &&
            answers[current] === index &&
            index !== question.a
        ) {
            label.classList.add("wrong");
        }

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;
        radio.checked = answers[current] === index;
        radio.disabled = submitted;

        radio.addEventListener("change", () => {
            answers[current] = index;
            renderQuestion();
        });

        const optionText = document.createElement("span");
        optionText.textContent =
            `${String.fromCharCode(65 + index)}) ${option}`;

        label.appendChild(radio);
        label.appendChild(optionText);
        optionsBox.appendChild(label);
    });

    if (submitted) {
        const isCorrect = answers[current] === question.a;

        feedback.textContent =
            `${isCorrect ? "Correct!" : "Incorrect."} ` +
            `Correct answer: ${String.fromCharCode(65 + question.a)}. ` +
            question.e;

        feedback.style.color =
            isCorrect ? "#16834a" : "#c62828";
    }

    prevBtn.disabled = current === 0;

    nextBtn.classList.toggle(
        "hidden",
        current === questions.length - 1 && !submitted
    );

    submitBtn.classList.toggle(
        "hidden",
        current !== questions.length - 1 || submitted
    );

    if (submitted) {
        nextBtn.classList.remove("hidden");
        nextBtn.textContent =
            current === questions.length - 1
                ? "View Results"
                : "Next";
    } else {
        nextBtn.textContent = "Next";
    }
}

// Previous question
prevBtn.addEventListener("click", () => {
    if (current > 0) {
        current--;
        renderQuestion();
    }
});

// Next question
nextBtn.addEventListener("click", () => {
    if (submitted && current === questions.length - 1) {
        showResults();
        return;
    }

    if (current < questions.length - 1) {
        current++;
        renderQuestion();
    }
});

// Submit quiz
submitBtn.addEventListener("click", () => {
    const unanswered =
        questions.length - Object.keys(answers).length;

    if (
        unanswered > 0 &&
        !confirm(
            `You have ${unanswered} unanswered questions. Submit anyway?`
        )
    ) {
        return;
    }

    showResults();
});

// =====================================
// FINAL RESULT
// =====================================

function showResults() {
    submitted = true;

    quizPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {
        if (answers[index] === undefined) {
            unanswered++;
        } else if (answers[index] === question.a) {
            correct++;
        } else {
            wrong++;
        }
    });

    const percentage =
        Math.round((correct / questions.length) * 100);

    document.getElementById("scoreText").textContent =
        `${correct}/${questions.length}`;

    document.getElementById("correctCount").textContent =
        correct;

    document.getElementById("wrongCount").textContent =
        wrong;

    document.getElementById("unansweredCount").textContent =
        unanswered;

    document.getElementById("scoreMessage").textContent =
        `Your score is ${percentage}%.`;

    const reviewList =
        document.getElementById("reviewList");

    reviewList.innerHTML = "";

    questions.forEach((question, index) => {
        const item = document.createElement("div");
        item.className = "review-item";

        const heading = document.createElement("h4");
        heading.textContent =
            `${index + 1}. ${question.q}`;

        const yourAnswer = document.createElement("p");

        if (answers[index] === undefined) {
            yourAnswer.textContent = "Your answer: Not answered";
            yourAnswer.className = "incorrect";
        } else {
            yourAnswer.textContent =
                `Your answer: ${String.fromCharCode(65 + answers[index])}) ` +
                question.o[answers[index]];

            yourAnswer.className =
                answers[index] === question.a
                    ? "right"
                    : "incorrect";
        }

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "right";
        correctAnswer.textContent =
            `Correct answer: ${String.fromCharCode(65 + question.a)}) ` +
            question.o[question.a];

        const explanation = document.createElement("p");
        explanation.textContent = question.e;

        item.appendChild(heading);
        item.appendChild(yourAnswer);
        item.appendChild(correctAnswer);
        item.appendChild(explanation);

        reviewList.appendChild(item);
    });
}

// Restart quiz
document.getElementById("tryAgainBtn")
    .addEventListener("click", loadQuestions);

document.getElementById("restartBtn")
    .addEventListener("click", loadQuestions);

// Unit selection
unitFilter.addEventListener("change", loadQuestions);

// Start quiz
loadQuestions();


/* ==========================================
MOBILE VIEW RESPONSIVE ADJUSTMENTS
========================================== */

function adjustMobileView() {
const isMobile = window.innerWidth <= 768;

```
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");

// Quiz panel
if (quizPanel) {
    quizPanel.style.width = "100%";
    quizPanel.style.maxWidth = "100%";
    quizPanel.style.boxSizing = "border-box";
}

// Result panel
if (resultPanel) {
    resultPanel.style.width = "100%";
    resultPanel.style.maxWidth = "100%";
    resultPanel.style.boxSizing = "border-box";
}

// Question text
if (questionText) {
    questionText.style.fontSize = isMobile ? "16px" : "";
    questionText.style.lineHeight = isMobile ? "1.6" : "";
    questionText.style.overflowWrap = "anywhere";
}

// MCQ options
if (optionsBox) {
    optionsBox.style.width = "100%";
    optionsBox.style.boxSizing = "border-box";
}

// Feedback message
if (feedback) {
    feedback.style.fontSize = isMobile ? "14px" : "";
    feedback.style.lineHeight = "1.6";
    feedback.style.overflowWrap = "anywhere";
}

// Buttons
[prevBtn, nextBtn, submitBtn].forEach(function (button) {
    if (button) {
        button.style.maxWidth = "100%";
        button.style.boxSizing = "border-box";

        if (isMobile) {
            button.style.minHeight = "42px";
        } else {
            button.style.minHeight = "";
        }
    }
});

// Review section
const reviewList = document.getElementById("reviewList");

if (reviewList) {
    reviewList.style.width = "100%";
    reviewList.style.boxSizing = "border-box";
    reviewList.style.overflowWrap = "anywhere";
}
```

}

// Run when page loads
adjustMobileView();

// Adjust when screen size changes
window.addEventListener("resize", adjustMobileView);
