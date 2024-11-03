var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

function startFunction() {
    setLastSeen();
    waitAndResponse("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = (x.style.display === 'flex') ? 'none' : 'flex';
}

function openFullScreenDP() {
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
    var ti = input.value.trim();
    if (ti === "") {
        return;
    }
    addMessageToChat(ti, "sent");
    input.value = "";
    playSound();
    setTimeout(() => waitAndResponse(ti), 1000);
}

function addMessageToChat(message, type) {
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var contentDiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    dateLabel.innerText = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    myDiv.setAttribute("class", type === "sent" ? "sent" : "received");
    contentDiv.setAttribute("class", type === "sent" ? "green" : "grey");
    contentDiv.innerText = message;

    myDiv.appendChild(contentDiv);
    myLI.appendChild(myDiv);
    contentDiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
}

function waitAndResponse(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => sendTextMessage("Hello, I'm Sobin 🤖. I'm here to support you! Type 'help' for options."), 1500);
            break;
        case "help":
            sendTextMessage("💬 Options: <br><span class='bold'>'struggles'</span>, <span class='bold'>'resources'</span>, <span class='bold'>'contact'</span>, <span class='bold'>'mood'</span>, <span class='bold'>'clear'</span>, <span class='bold'>'about'</span>");
            break;
        case "struggles":
            sendTextMessage("It's okay to talk about your struggles. What are you facing?");
            break;
        case "resources":
            sendTextMessage("Local support groups, counseling services, and helplines can be helpful.");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "mood":
            sendTextMessage("How are you feeling today? Reply with 'happy', 'sad', or 'neutral' for tailored support.");
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🤖 I'm Sobin, designed by <span class='bold'>Vinayak Patil</span>. Here to help you!");
            break;
        case "happy":
            sendTextMessage("That's great to hear! Keep up the positive vibes! 😊");
            break;
        case "sad":
            sendTextMessage("It's okay to feel sad. I'm here to listen if you want to talk about it.");
            break;
        case "neutral":
            sendTextMessage("Sometimes just being neutral is a good place to be. How can I assist you today?");
            break;
        default:
            setTimeout(() => sendTextMessage("I'm sorry, I didn't understand that. Type 'help' for options."), 1500);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponse('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    addMessageToChat(textToSend, "received");
    playSound();
}

function playSound() {
    audio.play();
}
