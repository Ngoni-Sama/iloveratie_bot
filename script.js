var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+263773716074'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>263773716074</label></div> </a> <a href='mailto:admin@pocketlabs.co.zw'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/ngoni-sama'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/263773716074'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/ngonimaps'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/ngonie'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>company.pdf</label></div><a href='assets/company.pdf' download='company.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1931702.6103403997!2d28.450148604869835!3d-18.98193676855258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1eb5538b67670c47%3A0xa99f5cde31b00c15!2sastra%20building%20bulawayo%20maps!3m2!1d-20.154795399999998!2d28.5795121!5e0!3m2!1sen!2szm!4v1724771867373!5m2!1sen!2szm' class='map'></iframe></div><label class='add'><address>'Astra'<br>9th and herbet astra buildings suit 3A</address>";


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponse(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";

    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>PL Tech</a>.</span><br><br>I can provide you with the latest past exam papers for both Zimsec and Cambridge.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send a keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently learning about human behavior and speech.<br><br>I can comfortably write code in the following languages:<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experience with the following frameworks:<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as my daily driver on my HP Pavilion 15-ec0xxx<br>OS: Arch Linux<br>DE: Gnome (More often) Kde (often)<br>Favourite IDE: VSCode</span>");
            break;
        case "education":
            sendTextMessage("We provide training and resources for higher and tertiary scholars.<br><br>");
            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS, and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://instagram.com/ngonie/'><span class='bold'>PL Tech</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my GitHub Account.<br><br><div class='social'><a target='_blank' href='https://github.com/ngoni-sama'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        case "curriculum":
            sendTextMessage("Our curriculum covers a wide range of topics, including programming, web development, and data science. You can view more details on our site.");
            break;
        case "testimonials":
            sendTextMessage("Here's what our students say:<br>1. 'Fantastic learning experience!'<br>2. 'The resources are top-notch!'");
            break;
        case "courses":
            sendTextMessage("We offer various courses, including:<br><span class='bold'>Web Development<br>Data Science<br>Mobile App Development</span>");
            break;
        case "enroll":
            sendTextMessage("To enroll in a course, please visit our registration page <a class='alink' href='https://example.com/register'>here</a>.");
            break;
        case "faq":
            sendTextMessage("Frequently Asked Questions:<br>1. What is the duration of the courses?<br>2. Are there any prerequisites?");
            break;
        case "duration":
            sendTextMessage("Most courses last between 4 to 12 weeks, depending on the content.");
            break;
        case "prerequisites":
            sendTextMessage("Some courses may require basic knowledge of programming. Check the course details for specifics.");
            break;
        case "certification":
            sendTextMessage("Yes, you will receive a certificate upon successful completion of a course.");
            break;
        case "mentorship":
            sendTextMessage("We provide mentorship opportunities for our students to help guide their learning journey.");
            break;
        case "networking":
            sendTextMessage("Join our community events to network with other learners and professionals.");
            break;
        case "updates":
            sendTextMessage("Stay tuned for updates on new courses and events by following us on our social media platforms.");
            break;
        case "resources":
            sendTextMessage("We provide various resources, including:<br>1. eBooks<br>2. Video tutorials<br>3. Sample projects");
            break;
        case "e-books":
            sendTextMessage("Check our collection of eBooks on programming and technology. Available on our resources page.");
            break;
        case "webinars":
            sendTextMessage("Join our upcoming webinars to learn from industry experts. Registration details are on our events page.");
            break;
        case "forums":
            sendTextMessage("Join our forums to discuss topics and connect with other learners.");
            break;
        case "feedback":
            sendTextMessage("We value your feedback! Share your thoughts on our courses to help us improve.");
            break;
        case "social media":
            sendTextMessage("Follow us on social media for updates:<br>1. Facebook<br>2. Twitter<br>3. Instagram");
            break;
        case "blog":
            sendTextMessage("Check out our blog for the latest articles on technology and education.");
            break;
        case "job support":
            sendTextMessage("We provide job support and resources to help you land your dream job after completing our courses.");
            break;
        case "career advice":
            sendTextMessage("Get career advice from our mentors and industry professionals.");
            break;
        case "community":
            sendTextMessage("Join our community to connect with fellow learners and share experiences.");
            break;
        case "code examples":
            sendTextMessage("Check out our code examples repository to practice your skills.");
            break;
        case "study groups":
            sendTextMessage("We encourage forming study groups to collaborate and learn together.");
            break;
        case "live sessions":
            sendTextMessage("Join our live coding sessions for hands-on experience and guidance.");
            break;
        case "workshops":
            sendTextMessage("Participate in our workshops to gain practical experience in various technologies.");
            break;
        case "certification details":
            sendTextMessage("Certificates are awarded based on attendance and completion of projects. Check your course details.");
            break;
        case "payment options":
            sendTextMessage("We accept various payment methods, including credit cards and PayPal.");
            break;
        case "refund policy":
            sendTextMessage("Our refund policy allows refunds within 14 days of enrollment if you are not satisfied.");
            break;
        case "contact support":
            sendTextMessage("For support, please contact us at support@example.com.");
            break;
        case "study tips":
            sendTextMessage("Here are some study tips:<br>1. Set a study schedule.<br>2. Take regular breaks.<br>3. Practice coding daily.");
            break;
        case "project ideas":
            sendTextMessage("Looking for project ideas? Try building a personal portfolio website or a simple game!");
            break;
        case "networking tips":
            sendTextMessage("Network by attending events, joining forums, and connecting on LinkedIn.");
            break;
        case "technology news":
            sendTextMessage("Stay updated with the latest technology news by following tech blogs and news sites.");
            break;
        case "coding challenges":
            sendTextMessage("Try coding challenges on platforms like HackerRank or LeetCode to sharpen your skills.");
            break;
        case "free resources":
            sendTextMessage("Check our website for free resources and tutorials available to everyone.");
            break;
        case "platform features":
            sendTextMessage("Our platform offers features like progress tracking, forums, and personalized learning paths.");
            break;
        case "success stories":
            sendTextMessage("Read our success stories to see how our courses have helped others achieve their goals.");
            break;
        case "join community":
            sendTextMessage("Join our community page to engage with other learners and share insights.");
            break;
        case "study materials":
            sendTextMessage("Access a variety of study materials, including lecture notes and sample questions.");
            break;
        case "tutorial requests":
            sendTextMessage("Have a topic in mind? Let us know, and we might create a tutorial for it!");
            break;
        case "live chat":
            sendTextMessage("Need immediate assistance? Use our live chat feature to connect with a support representative.");
            break;
        case "course feedback":
            sendTextMessage("We appreciate your feedback on courses! Fill out our feedback form after completion.");
            break;
        case "peer reviews":
            sendTextMessage("Engage in peer reviews to get constructive feedback on your projects.");
            break;
        case "learning paths":
            sendTextMessage("Explore our curated learning paths tailored to different skill levels and goals.");
            break;
        case "interactive lessons":
            sendTextMessage("Experience interactive lessons that encourage active participation and engagement.");
            break;
        case "mobile app":
            sendTextMessage("Download our mobile app to access courses on the go!");
            break;
        case "account settings":
            sendTextMessage("You can update your account settings from your profile page.");
            break;
        case "password reset":
            sendTextMessage("If you need to reset your password, click on the 'Forgot Password?' link on the login page.");
            break;
        case "privacy policy":
            sendTextMessage("Your privacy is important to us. Read our privacy policy for more information.");
            break;
        case "terms of service":
            sendTextMessage("By using our services, you agree to our terms of service. Review them <a class='alink' href='https://example.com/terms'>here</a>.");
            break;
        case "contact hours":
            sendTextMessage("Our support team is available from 9 AM to 5 PM, Monday to Friday.");
            break;
        case "events":
            sendTextMessage("Check our events page for upcoming workshops and webinars!");
            break;
        case "newsletter":
            sendTextMessage("Subscribe to our newsletter for the latest updates and resources.");
            break;
        case "collaborations":
            sendTextMessage("Interested in collaborating with us? Reach out via our contact page.");
            break;
        case "scholarships":
            sendTextMessage("We offer scholarships for deserving students. Check our website for application details.");
            break;
        case "hackathons":
            sendTextMessage("Participate in our hackathons to test your skills and win prizes!");
            break;
        case "guest speakers":
            sendTextMessage("We invite industry experts as guest speakers for our webinars and events.");
            break;
        case "alumni network":
            sendTextMessage("Join our alumni network to stay connected with fellow graduates.");
            break;
        case "learning resources":
            sendTextMessage("Explore our extensive library of learning resources, including articles and videos.");
            break;
        case "user guides":
            sendTextMessage("Access user guides to navigate our platform effectively.");
            break;
        case "system requirements":
            sendTextMessage("Ensure your device meets our system requirements for the best learning experience.");
            break;
        case "video tutorials":
            sendTextMessage("Watch our video tutorials to gain insights on various topics.");
            break;
        case "coding bootcamps":
            sendTextMessage("Join our intensive coding bootcamps for an immersive learning experience.");
            break;
        case "tech events":
            sendTextMessage("Stay informed about upcoming tech events and conferences in your area.");
            break;
        case "student support":
            sendTextMessage("We offer support for students facing challenges during their learning journey.");
            break;
        case "community guidelines":
            sendTextMessage("Please follow our community guidelines to maintain a positive learning environment.");
            break;
        case "extra credit":
            sendTextMessage("Complete additional assignments for extra credit in your courses.");
            break;
        case "course catalog":
            sendTextMessage("View our complete course catalog to explore available options.");
            break;
        case "language options":
            sendTextMessage("We offer courses in multiple languages. Check the course details for language options.");
            break;
        case "virtual classroom":
            sendTextMessage("Join our virtual classroom for live lessons and interactive discussions.");
            break;
        case "course prerequisites":
            sendTextMessage("Check individual course pages for specific prerequisites and requirements.");
            break;
        case "project submission":
            sendTextMessage("Submit your projects through the course portal by the due date.");
            break;
        case "course completion":
            sendTextMessage("To complete a course, make sure to finish all modules and pass the final assessment.");
            break;
        case "advanced courses":
            sendTextMessage("Explore our advanced courses to deepen your knowledge in specific areas.");
            break;
        case "personalized learning":
            sendTextMessage("Our platform adapts to your learning style for a personalized experience.");
            break;
        case "technology stack":
            sendTextMessage("We use a modern technology stack to deliver our courses effectively.");
            break;
        case "coding resources":
            sendTextMessage("Access a collection of coding resources to help you with your projects.");
            break;
        case "network opportunities":
            sendTextMessage("Take advantage of networking opportunities provided during our events.");
            break;
        case "job placement":
            sendTextMessage("We assist students with job placement after course completion.");
            break;
        case "practical projects":
            sendTextMessage("Engage in practical projects to apply your knowledge and skills.");
            break;
        case "student forums":
            sendTextMessage("Join student forums for discussions, questions, and collaboration.");
            break;
        case "peer learning":
            sendTextMessage("We encourage peer learning to enhance collaboration and knowledge sharing.");
            break;
        case "learning feedback":
            sendTextMessage("Provide feedback on your learning experience to help us improve.");
            break;
        case "study sessions":
            sendTextMessage("Join study sessions with peers for collaborative learning.");
            break;
        case "course evaluation":
            sendTextMessage("Evaluate your course experience to help us enhance our offerings.");
            break;
        case "progress tracking":
            sendTextMessage("Track your progress through your profile dashboard.");
            break;
        case "community events":
            sendTextMessage("Participate in community events to connect with fellow learners.");
            break;
        case "online resources":
            sendTextMessage("Access online resources for self-study and additional learning.");
            break;
        case "skill assessments":
            sendTextMessage("Take skill assessments to evaluate your knowledge and skills.");
            break;
        case "internship opportunities":
            sendTextMessage("We provide internship opportunities for hands-on experience in the industry.");
            break;
        case "coding competitions":
            sendTextMessage("Join our coding competitions to test your skills and win rewards.");
            break;
        case "mentorship programs":
            sendTextMessage("Sign up for mentorship programs for guidance and support in your learning journey.");
            break;
        case "learn at your pace":
            sendTextMessage("Our courses allow you to learn at your own pace, with flexible deadlines.");
            break;
        case "support forums":
            sendTextMessage("Visit our support forums for assistance and to connect with other learners.");
            break;
        case "web development":
            sendTextMessage("Learn web development from scratch, covering HTML, CSS, and JavaScript.");
            break;
        case "data science":
            sendTextMessage("Dive into data science with our comprehensive courses on analytics and machine learning.");
            break;
        case "mobile app development":
            sendTextMessage("Build mobile apps with our courses on Android and iOS development.");
            break;
        case "AI and ML":
            sendTextMessage("Explore the exciting world of AI and machine learning with our specialized courses.");
            break;
        case "software engineering":
            sendTextMessage("Become a software engineer with our structured learning path and hands-on projects.");
            break;
        case "community support":
            sendTextMessage("Our community is here to support you. Engage with fellow learners and mentors.");
            break;
        case "course recommendations":
            sendTextMessage("Looking for recommendations? Based on your interests, we suggest the following courses...");
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey, I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }
}



function sendTextMessage(message) {
  // Add your implementation of the sendTextMessage function here
  console.log(message);
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
