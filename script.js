const quizData = {
    easy: [
        {
            question: "What is phishing?",
            options: ["A virus", "Fake email trick", "VPN", "Firewall"],
            correct: 1,
            tip: "Phishing tricks users into giving data via fake sites/emails."
        },
        {
            question: "Which is a strong password?",
            options: ["password123", "Qw!9$zLp@6", "123456", "iloveyou"],
            correct: 1,
            tip: "Use upper, lower, numbers & special chars."
        },
        {
            question: "What does antivirus software do?",
            options: ["Saves passwords", "Protects from viruses", "Increases speed", "Monitors data usage"],
            correct: 1,
            tip: "Antivirus helps detect and remove malicious software."
        },
        {
            question: "What should you do if you get a suspicious email?",
            options: ["Open it", "Reply to it", "Report it", "Ignore it"],
            correct: 2,
            tip: "Reporting helps block similar future threats."
        },
        {
            question: "Which of these is a common online threat?",
            options: ["Spam", "Cookies", "Bookmarks", "Downloads"],
            correct: 0,
            tip: "Spam emails can carry malware or phishing links."
        },
        {
            question: "What does HTTPS indicate?",
            options: ["Secure website", "Unsecure site", "Hacked page", "No password needed"],
            correct: 0,
            tip: "HTTPS ensures encrypted data exchange."
        },
        {
            question: "Why should passwords be changed often?",
            options: ["To confuse hackers", "To stay safe from data leaks", "It’s fun", "Because websites ask"],
            correct: 1,
            tip: "Changing passwords reduces damage from leaks."
        },
        {
            question: "What does a lock icon in a browser address bar mean?",
            options: ["Page is blocked", "Site is fake", "Secure connection", "Ad-free site"],
            correct: 2,
            tip: "It indicates an SSL-secured site."
        },
        {
            question: "Which is a phishing attempt?",
            options: ["Bank email asking for password", "Friend sharing photo", "Newsletter signup", "Weather update"],
            correct: 0,
            tip: "Never share passwords via email."
        },
        {
            question: "What’s the safest way to connect to public Wi-Fi?",
            options: ["No login needed", "Using VPN", "Trust all networks", "Use incognito"],
            correct: 1,
            tip: "VPNs secure your data on public Wi-Fi."
        },
        {
            question: "What is a firewall?",
            options: ["Website blocker", "Security system", "Slow-down tool", "Data backup"],
            correct: 1,
            tip: "Firewalls filter incoming/outgoing traffic."
        },
        {
            question: "What is the purpose of a password manager?",
            options: ["Speed up typing", "Store passwords securely", "Create easy passwords", "Save screenshots"],
            correct: 1,
            tip: "Password managers encrypt and save passwords."
        },
        {
            question: "Which of the following is safe?",
            options: ["'123456'", "'iloveyou'", "'LetMeIn'", "'D$k#49@e!Z'"],
            correct: 3,
            tip: "Strong passwords are complex and hard to guess."
        },
        {
            question: "Why should you log out from accounts?",
            options: ["To free space", "Prevent unauthorized access", "Save battery", "Keep system fast"],
            correct: 1,
            tip: "Logging out reduces security risks."
        },
        {
            question: "What is spam?",
            options: ["Useful email", "Malicious software", "Unwanted email", "Email from friends"],
            correct: 2,
            tip: "Spam may include harmful or phishing content."
        },
        {
            question: "How often should software be updated?",
            options: ["Once a year", "When you feel like it", "When updates are released", "Never"],
            correct: 2,
            tip: "Updates fix security flaws."
        },
        {
            question: "Which device needs cybersecurity?",
            options: ["Laptop", "Smartphone", "Tablet", "All of the above"],
            correct: 3,
            tip: "Any internet-connected device is at risk."
        },
        {
            question: "What is an example of sensitive information?",
            options: ["Your favorite color", "Your bank login", "Movie preference", "Pet’s name"],
            correct: 1,
            tip: "Bank logins must be kept private."
        },
        {
            question: "What should you check before clicking a link?",
            options: ["Length of link", "Sender", "URL and source", "Font style"],
            correct: 2,
            tip: "Verify source and domain before clicking."
        },
        {
            question: "What should you do with unused accounts?",
            options: ["Keep forever", "Change name", "Delete them", "Ignore them"],
            correct: 2,
            tip: "Unused accounts may be vulnerable."
        }
    ],

    medium: [
        {
          question: "Two-factor authentication improves security by:",
          options: ["Making passwords longer", "Adding OTP layer", "Encrypting data", "Blocking malware"],
          correct: 1,
          tip: "2FA adds another layer like OTP or biometrics."
        },
        {
          question: "What is malware?",
          options: ["A computer game", "A security update", "Malicious software", "Encrypted file"],
          correct: 2,
          tip: "Malware = Malicious Software (virus, trojan, spyware)."
        },
        {
          question: "Which of these is a secure way to store passwords?",
          options: ["Text file", "Notebook", "Password manager", "Browser history"],
          correct: 2,
          tip: "Password managers store passwords securely with encryption."
        },
        {
          question: "A VPN helps you by:",
          options: ["Speeding up your net", "Making browsing private", "Storing data", "Blocking ads"],
          correct: 1,
          tip: "VPNs hide your IP and encrypt your traffic."
        },
        {
          question: "What is social engineering?",
          options: ["Social media hacking", "Manipulating people to get data", "Coding bug", "A firewall feature"],
          correct: 1,
          tip: "Social engineering tricks people into revealing sensitive info."
        },
        {
          question: "Which of these is a social engineering attack?",
          options: ["Brute force", "Phishing", "DoS", "Malware injection"],
          correct: 1,
          tip: "Phishing manipulates humans to click malicious links."
        },
        {
          question: "Why is public Wi-Fi dangerous?",
          options: ["Too slow", "No ads", "Hackers can intercept data", "It blocks apps"],
          correct: 2,
          tip: "Anyone on public Wi-Fi could intercept your data."
        },
        {
          question: "What is the purpose of software patches?",
          options: ["To make software pretty", "Fix security flaws", "Add ads", "Change language"],
          correct: 1,
          tip: "Patches fix vulnerabilities hackers can exploit."
        },
        {
          question: "Which of the following is a form of data encryption?",
          options: ["Phishing", "SSL", "Firewall", "Cookies"],
          correct: 1,
          tip: "SSL/TLS encrypts data sent between users and websites."
        },
        {
          question: "What is a keylogger?",
          options: ["Keyboard tool", "Typing trainer", "Malware that records keystrokes", "Game software"],
          correct: 2,
          tip: "Keyloggers secretly record everything you type."
        },
        {
          question: "Which URL is likely to be safe?",
          options: ["http://yourbank-login.com", "https://yourbank.com", "bit.ly/securebank", "yourbank-login.org"],
          correct: 1,
          tip: "HTTPS + correct domain = safer."
        },
        {
          question: "What is a brute-force attack?",
          options: ["Quick hack", "Guessing passwords repeatedly", "Network overload", "Deleting files"],
          correct: 1,
          tip: "It tries all combinations to guess your password."
        },
        {
          question: "How can you detect a phishing website?",
          options: ["It loads fast", "Strange URL or design", "It has lots of images", "Same font"],
          correct: 1,
          tip: "Check for subtle differences in domain or layout."
        },
        {
          question: "Which file attachment should raise suspicion?",
          options: ["invoice.pdf", "report.docx", "budget.xlsx", "payment.exe"],
          correct: 3,
          tip: "Avoid clicking .exe files unless you're 100% sure."
        },
        {
          question: "What is the main use of CAPTCHA?",
          options: ["Style the site", "Prevent bots", "Speed up loading", "Create password"],
          correct: 1,
          tip: "CAPTCHAs block bots from abusing forms."
        },
        {
          question: "You receive an email from your boss asking for a wire transfer. What should you do?",
          options: ["Reply and send it", "Click the link", "Verify in person or by phone", "Mark it spam"],
          correct: 2,
          tip: "Always verify unexpected financial requests through other means."
        },
        {
          question: "Cookies are used to:",
          options: ["Track browsing", "Install malware", "Speed up apps", "Encrypt passwords"],
          correct: 0,
          tip: "Cookies store small pieces of info about your activity."
        },
        {
          question: "Which of these attacks floods a server with traffic?",
          options: ["DDoS", "Phishing", "Ransomware", "SQL injection"],
          correct: 0,
          tip: "DDoS = Distributed Denial of Service attack."
        },
        {
          question: "Which of the following can help identify a fake app?",
          options: ["Too many downloads", "Permissions not matching purpose", "Well-known developer", "Good reviews"],
          correct: 1,
          tip: "Watch out for suspicious permissions."
        },
        {
          question: "Which is NOT good cybersecurity hygiene?",
          options: ["Updating apps", "Clicking unknown links", "Using 2FA", "Avoiding public Wi-Fi"],
          correct: 1,
          tip: "Unknown links can lead to dangerous websites."
        }
      ],
      hard: [
        {
          question: "What is SQL Injection?",
          options: ["Data encryption method", "Sending spam emails", "Inserting malicious SQL into queries", "Firewall technique"],
          correct: 2,
          tip: "Attackers use it to run malicious queries on DBs."
        },
        {
          question: "What is a zero-day vulnerability?",
          options: ["An unpatched bug", "A software update", "A firewall rule", "Encryption method"],
          correct: 0,
          tip: "Zero-day exploits unknown vulnerabilities before they are patched."
        },
        {
          question: "What is Cross-Site Scripting (XSS)?",
          options: ["SQL injection attack", "Injecting malicious code into a web page", "Encryption algorithm", "Network attack"],
          correct: 1,
          tip: "XSS lets attackers inject scripts into web pages viewed by others."
        },
        {
          question: "What does a man-in-the-middle (MITM) attack involve?",
          options: ["Intercepting communication between two parties", "Flooding servers with requests", "Brute forcing passwords", "Encrypting traffic"],
          correct: 0,
          tip: "MITM attacks intercept and potentially modify communication."
        },
        {
          question: "What is a DDoS attack?",
          options: ["Distributed Denial of Service", "Domain Direct Object Sharing", "Device Denial of Service", "Data-driven Operating System"],
          correct: 0,
          tip: "DDoS attacks overwhelm a network with traffic, denying access to legitimate users."
        },
        {
          question: "Which encryption algorithm is used in AES?",
          options: ["Public-key", "Symmetric-key", "Asymmetric-key", "Diffie-Hellman"],
          correct: 1,
          tip: "AES uses symmetric-key encryption, meaning the same key encrypts and decrypts data."
        },
        {
          question: "What is the purpose of a public key in RSA encryption?",
          options: ["To decrypt data", "To encrypt data", "To validate signatures", "To store passwords"],
          correct: 1,
          tip: "The public key encrypts data in RSA encryption."
        },
        {
          question: "Which of these is an example of advanced persistent threat (APT)?",
          options: ["Temporary network outages", "A long-term, targeted attack", "Malware injection", "A random virus infection"],
          correct: 1,
          tip: "APTs are prolonged, targeted attacks usually aimed at stealing sensitive information."
        },
        {
          question: "What is a common technique used to perform social engineering?",
          options: ["Phishing emails", "SQL injections", "Keylogging", "Ransomware"],
          correct: 0,
          tip: "Phishing emails trick users into giving away confidential information."
        },
        {
          question: "What is ransomware?",
          options: ["A virus that deletes files", "Malware that encrypts data and demands payment", "A keylogger", "A password-cracking tool"],
          correct: 1,
          tip: "Ransomware locks or encrypts data, demanding payment for its release."
        },
        {
          question: "What does 'cross-site request forgery' (CSRF) do?",
          options: ["Injects malicious scripts into a page", "Forces a user to perform unwanted actions", "Blocks users from logging in", "Gains unauthorized access to files"],
          correct: 1,
          tip: "CSRF tricks users into executing unwanted actions on websites they are authenticated to."
        },
        {
          question: "What is a rootkit?",
          options: ["Tool to fix malware", "System monitoring software", "Software that hides malicious activities", "Password manager"],
          correct: 2,
          tip: "Rootkits hide the presence of other malicious software."
        },
        {
          question: "Which of the following is a secure method of communication for high-risk transactions?",
          options: ["Email encryption", "Text message", "Phone call", "Social media"],
          correct: 0,
          tip: "Email encryption ensures that only intended recipients can read the message."
        },
        {
          question: "What is a hash function?",
          options: ["A data encryption algorithm", "A method to convert data into a fixed size", "A decryption method", "A password-breaking tool"],
          correct: 1,
          tip: "Hash functions convert data into a fixed-size string, making it difficult to reverse."
        },
        {
          question: "What is the main goal of ethical hacking?",
          options: ["Steal data", "Exploit vulnerabilities", "Test and secure systems", "Install malware"],
          correct: 2,
          tip: "Ethical hackers identify weaknesses in systems before malicious hackers can exploit them."
        },
        {
          question: "Which of the following is NOT a type of malware?",
          options: ["Trojan", "Ransomware", "Firewall", "Spyware"],
          correct: 2,
          tip: "Firewalls are used to protect against malware, not a type of malware."
        },
        {
          question: "What is a certificate authority (CA)?",
          options: ["Entity that verifies website identities", "Tool to create encryption keys", "Firewall configuration tool", "Malware detection tool"],
          correct: 0,
          tip: "CAs verify website identities and issue SSL/TLS certificates."
        },
        {
          question: "What is the main purpose of public-key infrastructure (PKI)?",
          options: ["To encrypt data", "To manage digital certificates and encryption keys", "To bypass firewalls", "To monitor websites"],
          correct: 1,
          tip: "PKI manages digital certificates for secure communication."
        },
        {
          question: "What does DNS spoofing attack?",
          options: ["The server", "The DNS cache", "The router", "The password manager"],
          correct: 1,
          tip: "DNS spoofing manipulates DNS records to redirect traffic to malicious sites."
        },
        {
          question: "What does the 'principle of least privilege' in cybersecurity refer to?",
          options: ["Giving users as much access as possible", "Limiting users to only the permissions they need", "Allowing users to access everything", "Giving admins more permissions than necessary"],
          correct: 1,
          tip: "The principle restricts users to the minimum access required to perform their tasks."
        },
        {
          question: "What is a common tool used for network traffic analysis?",
          options: ["Wireshark", "Skype", "Telegram", "WhatsApp"],
          correct: 0,
          tip: "Wireshark is used to capture and analyze network packets."
        }
      ]
      
};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let feedback = [];
let timer;
let timeLeft = 15;

const difficultySelect = document.getElementById('difficulty');
const quizEl = document.getElementById('quiz');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const storedScoreEl = document.getElementById('storedScore');
const feedbackEl = document.getElementById('feedback');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const timeEl = document.getElementById('time');

function startQuiz() {
    const level = difficultySelect.value;
    const fullQuiz = quizData[level];
    
    // Randomly shuffle and take 5 questions
    currentQuiz = fullQuiz
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  
    currentQuestion = 0;
    score = 0;
    feedback = [];
    document.getElementById('difficulty-select').classList.add('hidden');
    quizEl.classList.remove('hidden');
    loadQuestion();
  }

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    timeEl.textContent = timeLeft;
    timer = setInterval(updateTimer, 1000);

    const q = currentQuiz[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    nextBtn.classList.add('hidden');

    q.options.forEach((option, index) => {
        const btn = document.createElement("div");
        btn.className = "option";
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index, btn);
        optionsEl.appendChild(btn);
    });
}

function updateTimer() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        feedback.push(`⏱️ Time's up for: ${currentQuiz[currentQuestion].question}<br>💡 Tip: ${currentQuiz[currentQuestion].tip}`);
        showCorrectAnswer();
    }
}

function selectAnswer(selected, selectedBtn) {
    clearInterval(timer);
    const correct = currentQuiz[currentQuestion].correct;

    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((btn, index) => {
        if (index === correct) {
            btn.style.backgroundColor = "#2ecc71"; // green
        } else if (index === selected && selected !== correct) {
            btn.style.backgroundColor = "#e74c3c"; // red
        }
        btn.onclick = null;
    });

    if (selected === correct) {
        score++;
    } else {
        feedback.push(`❌ Question: ${currentQuiz[currentQuestion].question}<br>💡 Tip: ${currentQuiz[currentQuestion].tip}`);
    }

    nextBtn.classList.remove('hidden');
}

function showCorrectAnswer() {
    const correct = currentQuiz[currentQuestion].correct;
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((btn, index) => {
        if (index === correct) {
            btn.style.backgroundColor = "#2ecc71";
        } else {
            btn.style.backgroundColor = "#e0e0e0";
        }
        btn.onclick = null;
    });
    nextBtn.classList.remove('hidden');
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    scoreEl.textContent = `${score}/${currentQuiz.length}`;
    feedbackEl.innerHTML = feedback.join("<br><br>");

    // Save score to local storage
    localStorage.setItem("lastCyberScore", `${score}/${currentQuiz.length}`);
    storedScoreEl.textContent = localStorage.getItem("lastCyberScore");
}
