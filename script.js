var audio = new Audio('assets/sentmessage.mp3');

var contactString = `<div class='social'>
    <a target='_blank' href='tel:+263773716074'>
        <div class='socialItem' id='call'>
            <img class='socialItemI' src='images/phone.svg'/>
            <label class='number'>263773716074</label>
        </div>
    </a>
    <a href='mailto:admin@pocketlabs.co.zw'>
        <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div>
    </a>
    <a target='_blank' href='https://github.com/ngoni-sama'>
        <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div>
    </a>
    <a target='_blank' href='https://wa.me/263773716074'>
        <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div>
    </a>
    <a target='_blank' href='https://t.me/ngonimaps'>
        <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div>
    </a>
    <a target='_blank' href='https://instagram.com/ngonie'>
        <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''></div>
    </a>
    <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'>
        <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div>
    </a>
</div>`;

var resumeString = `<img src='images/resumeThumbnail.png' class='resumeThumbnail'>
<div class='downloadSpace'>
    <div class='pdfname'><img src='images/pdf.png'><label>company.pdf</label></div>
    <a href='assets/company.pdf' download='company.pdf'><img class='download' src='images/downloadIcon.svg'></a>
</div>`;

var addressString = `<div class='mapview'>
    <iframe src='https://www.google.com/maps/embed?pb=...' class='map'></iframe>
</div>
<label class='add'><address>'Astra'<br>9th and herbet astra buildings suit 3A</address>`;

function startFunction() {
    setLastSeen();
    waitAndResponse("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Last seen today at " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function toggleFullDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = (x.style.display === 'flex') ? 'none' : 'flex';
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var messageText = input.value.trim();
    if (messageText === "") return;

    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    dateLabel.innerText = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    greendiv.innerText = messageText;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);

    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    
    setTimeout(() => waitAndResponse(messageText), 1500);
    input.value = "";
    playSound();
}

function waitAndResponse(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";

    const responses = {
        "intro": "Hello there 👋🏻,<br><br>I'm here to support you. If you need help, just ask!<br>Type 'help' for more options.",
        "help": "Here are some things I can help you with:<br>1. Talk about your feelings.<br>2. Learn about support groups.<br>3. Tips for reducing alcohol intake.<br>4. Resources for further assistance.",
        
        // Alcohol-related prompts
        "how can I reduce my drinking?": "It's great that you want to make a change! Here are some tips:<br>1. Set limits on your drinking.<br>2. Avoid triggers that make you want to drink.<br>3. Find healthier alternatives to cope with stress.",
        "what are the benefits of quitting alcohol?": "Quitting alcohol can lead to many positive changes: better health, improved relationships, more energy, and better sleep. It's a wonderful step toward a healthier life!",
        "i feel overwhelmed": "It's completely okay to feel overwhelmed. Remember, you're not alone. Let's talk about what's bothering you. What do you want to share?",
        "i need help": "Reaching out for help is a strong step. Would you like information on support groups or hotlines?",
        "thank you": "You're welcome! I'm here to help. How else can I support you today?",
        "what if i relapse?": "Relapses can happen, and they're part of the recovery journey for many. It’s important to learn from the experience and seek support. Would you like tips on coping with a relapse?",
        
        // Emotional support
        "i feel sad": "I'm really sorry to hear that you're feeling this way. It’s okay to feel sad sometimes. Would you like to talk about what's making you feel this way?",
        "i feel anxious": "Anxiety can be tough to deal with. Let's focus on some breathing exercises or grounding techniques. Would you like to try that?",
        "i'm lonely": "Feeling lonely can be hard. Connecting with others, whether friends or support groups, can really help. Would you like some suggestions on how to reach out?",
        
        // Encouragement and motivation
        "can i really quit?": "Absolutely! Many people have successfully quit alcohol, and you can too. It’s a journey, but with support, you can achieve your goals.",
        "how do i stay motivated?": "Staying motivated can be challenging, but setting small goals and celebrating your achievements can help. What motivates you the most?",
        
        // Seeking further information
        "tell me about support groups": "Support groups can provide a safe space to share experiences and connect with others. Groups like AA (Alcoholics Anonymous) offer a supportive environment. Would you like to find a local group?",
        "what are the signs of addiction?": "Signs of addiction can include a strong craving for alcohol, neglecting responsibilities, withdrawal symptoms, and drinking more than intended. If you’re concerned, it’s worth speaking to a professional.",
        
        // General responses
        "i don't know what to do": "It's okay to feel unsure. Let's break it down together. What’s been on your mind lately?",
        "help me with my cravings": "Cravings can be tough, but there are strategies to manage them: distract yourself, drink water, or reach out to someone. What works for you?",
        "i had a bad day": "I'm sorry to hear that. It’s important to acknowledge how you're feeling. Would you like to talk about what happened?",
        "i feel guilty": "Guilt is a common feeling, but it’s important to be kind to yourself. Let’s focus on what you can do moving forward rather than what’s happened in the past.",
        
        // Default response
        "default": "I'm here to listen. If you need help or want to talk, just let me know."
    };

    const response = responses[inputText.toLowerCase().trim()] || responses["default"];
    
    setTimeout(() => sendTextMessage(response), 2000);
}

function sendTextMessage(message) {
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    dateLabel.innerText = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = message;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);

    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponse('intro');
}

function playSound() {
    audio.play();
}
