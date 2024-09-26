// constants/questionsData.ts

export interface Question {
    question: string;
    options: string[];
    correct: string;
    image: any;  // Image will be required using `require()`
}

export const beginnerQuestions: Question[] = [
    {
        question: 'What is the purpose of antivirus software?',
        options: ['To speed up your computer', 'To manage your email', 'To detect and remove malware', 'To organize files'],
        correct: 'To detect and remove malware',
        image: require('../assets/images/antivirus.gif'),
    },
    {
        question: 'There\'s a pop-up that says you won a free smartphone. What\'s your next move?',
        options: ['Click to claim the prize', 'Enter your details to get the phone', 'Close the pop-up and ignore it'],
        correct: 'Close the pop-up and ignore it',
        image: require('../assets/images/phonepopup.gif'),
    },
    {
        question: 'Your "bank" sends you an email requesting account information. What should you do?',
        options: ['Call the bank directly to verify', 'Provide the details', 'Click the link to update your info', 'Email back to the bank'],
        correct: 'Call the bank directly to verify',
        image: require('../assets/images/beginnerq2.gif'),
    },
    {
        question: 'You come into a website with incredibly low prices for concert tickets. What should you do?',
        options: ['Research the site for reviews and legitimacy', 'Buy the tickets quickly before they sell out', 'Share the deal with friends'],
        correct: 'Research the site for reviews and legitimacy',
        image: require('../assets/images/beginnerq4.gif'),
    },
    {
        question: 'An online ad suggests that working from home can be a simple way to earn money. What should you do?',
        options: ['Sign up to start earning', 'Ignore the ad', 'Research the offer to see if it\'s a scam'],
        correct: 'Research the offer to see if it\'s a scam',
        image: require('../assets/images/beginnerq5.gif'),
    },
    {
        question: 'You receive an email with a link to "reset your password," but you didn’t request it. What do you do?',
        options: ['Click the link to see what\'s going on', 'Delete the email', 'Reset your password directly on the official website'],
        correct: 'Reset your password directly on the official website',
        image: require('../assets/images/beginnerq6.gif'),
    },
    {
        question: 'A social media post requests that users complete a survey to receive free gift cards. What\'s your move?',
        options: ['Complete the survey to get the gift card', 'Share the post with your friends', 'Ignore the post'],
        correct: 'Ignore the post',
        image: require('../assets/images/beginnerq7.gif'),
    },
    {
        question: 'Your social media account asks to save your login. What do you do?',
        options: ['Only if it’s a trusted device', 'Save it', 'Never save passwords'],
        correct: 'Only if it’s a trusted device',
        image: require('../assets/images/beginnerq8.gif'),
    },
    {
        question: 'A company you’ve never heard of emails you an invoice. What’s the best response?',
        options: ['Open the attachment to review the invoice', 'Contact the company using official contact details to verify'],
        correct: 'Contact the company using official contact details to verify',
        image: require('../assets/images/beginnerq9.gif'),
    },
    {
        question: 'A pop-up claims your computer is infected. What should you do?',
        options: ['Click to scan', 'Close the pop-up', 'Ignore it', 'Restart your computer'],
        correct: 'Close the pop-up',
        image: require('../assets/images/beginnerq10.gif'),
    },
    {
        question: 'Your computer suddenly connects to a different Wi-Fi. What do you do?',
        options: ['Keep working', 'Ignore it', 'Use your mobile hotspot', 'Reconnect to your secure network'],
        correct: 'Reconnect to your secure network',
        image: require('../assets/images/beginnerq11.gif'),
    },
    {
        question: 'A website asks for your password unexpectedly. What should you do?',
        options: ['Enter your password', 'Refresh the page', 'Ignore it', 'Close the website',],
        correct: 'Close the website',
        image: require('../assets/images/beginnerq12.gif'),
    },
    {
        question: 'A website\'s URL looks slightly different than usual. What should you do?',
        options: ['Continue using it', 'Re-enter the correct URL manually', 'Bookmark it', 'Ignore the difference'],
        correct: 'Re-enter the correct URL manually',
        image: require('../assets/images/beginnerq13.gif'),
    },
    {
        question: 'You accidentally click on a suspicious link. What’s your first action?',
        options: ['Ignore it', 'Forward the link to others', 'Restart your computer', 'Close your browser and report it'],
        correct: 'Close your browser and report it',
        image: require('../assets/images/beginnerq13.gif'),
    },
    {
        question: 'Which of these actions can help protect you from phishing scams?',
        options: ['Clicking on all links in emails', 'Not sharing personal information online', 'Using the same password everywhere', 'Opening attachments from unknown senders'],
        correct: 'Not sharing personal information online',
        image: require('../assets/images/beginnerq15.gif'),
    },
    {
        question: 'A friend sends you a file to open, but you weren’t expecting it. What do you do?',
        options: ['Open it immediately', 'Scan it with antivirus', 'Delete it', 'Verify with the friend before opening'],
        correct: 'Verify with the friend before opening',
        image: require('../assets/images/beginnerq16.gif'),
    },
    {
        question: 'You discover an unfamiliar app installed on your computer. What is the safest action to take?',
        options: ['Research it online', 'Ignore it', 'Uninstall it immediately', 'Open the app to investigate'],
        correct: 'Research it online',
        image: require('../assets/images/beginnerq17.gif'),
    },
    {
        question: 'You receive a friend request on social media from someone you don’t know but has mutual connections. What’s the safest action?',
        options: ['Accept the request', 'Message them to find out more','Ignore the request', 'Report the profile'],
        correct: 'Ignore the request',
        image: require('../assets/images/beginnerq18.gif'),
    },
    {
        question: 'You receive a notification that your account was accessed from an unknown location. What’s your first step?',
        options: ['Ignore the notification', 'Check with your service provider', 'Log out of all devices', 'Change your password immediately',],
        correct: 'Change your password immediately',
        image: require('../assets/images/beginnerq19.gif'),
    },
    {
        question: 'Where should devices containing sensitive data be stored when not in use?',
        options: ['In a lockable cupboard.', 'On top of your desk.', 'In your bag.', 'On your kitchen table.'],
        correct: 'In a lockable cupboard.',
        image: require('../assets/images/beginnerq20.gif'),
    },
    {
        question: 'Which of the following is a strong password?',
        options: ['123456', 'Password', 'L0ngP@ssw0rd!', 'qwerty'],
        correct: 'L0ngP@ssw0rd!',
        image: require('../assets/images/beginnerq21.gif'),
    },
    {
        question: 'What should you do if you receive an email from an unknown sender asking for personal information?',
        options: ['Reply with your details', 'Report it as spam or phishing', 'Forward it to a friend'],
        correct: 'Report it as spam or phishing',
        image: require('../assets/images/beginnerq22.gif'),
    },
    {
        question: 'Why should you avoid using public Wi-Fi for online banking?',
        options: ['It’s slower than home Wi-Fi', 'It can be insecure and hackers might steal info', 'It costs money to use', 'It uses more data'],
        correct: 'It can be insecure and hackers might steal info',
        image: require('../assets/images/beginnerq23.gif'),
    },
    {
        question: 'What is a secure way to store passwords?',
        options: ['Writing them on sticky notes', 'Saving them in a text file on your desktop', 'Using a password manager', 'Using the same password for all accounts'],
        correct: 'Using a password manager',
        image: require('../assets/images/beginnerq24.gif'),
    },
    {
        question: 'What should you do if a website asks you to download software to view content?',
        options: ['Download it immediately', 'Ignore the request and leave the site', 'Verify the site’s legitimacy before downloading', 'Provide your email to get the download link'],
        correct: 'Verify the site’s legitimacy before downloading',
        image: require('../assets/images/beginnerq25.gif'),
    },
    {
        question: 'What should you do if you suspect your account has been compromised?',
        options: ['Change your password immediately', 'Ignore it and hope it goes away', 'Share it with your friends to warn them', 'Contact your Internet Service Provider'],
        correct: 'Change your password immediately',
        image: require('../assets/images/beginnerq26.gif'),
    },
    {
        question: 'Why is it important to use different passwords for different accounts?',
        options: ['To make it harder for you to remember them all', 'To confuse hackers', 'Because it\'s fun to come up with new passwords', 'To reduce the risk if one password is compromised'],
        correct: 'To reduce the risk if one password is compromised',
        image: require('../assets/images/beginnerq27.gif'),
    },
    {
        question: 'What is social engineering?',
        options: ['Software improvement', 'Manipulating people for information', 'Data encryption', 'Strong passwords'],
        correct: 'Manipulating people for information',
        image: require('../assets/images/beginnerq28.gif'),
    },
    {
        question: 'Which is a social engineering technique?',
        options: ['Phishing emails', 'Brute force', 'Installing antivirus', 'Using a VPN'],
        correct: 'Phishing emails',
        image: require('../assets/images/beginnerq29.jpg'),
    },
    {
        question: 'How can you avoid social engineering?',
        options: ['Share passwords', 'Ignore unknown emails', 'Be wary of unsolicited requests', 'Click on all email links'],
        correct: 'Be wary of unsolicited requests',
        image: require('../assets/images/beginnerq30.gif'),
    }
];

export const intermediateQuestions: Question[] = [
    {
        question: 'How can you protect your accounts with multi-factor authentication (MFA)?',
        options: [
            'Avoid using login-required accounts',
            'Use complex passwords only',
            'Use a device that receives MFA codes',
            'Call the website’s support number'
        ],
        correct: 'Use a device that receives MFA codes',
        image: require('../assets/images/intermediateq1.gif'),
    },
    {
        question: 'Is it important to encrypt sensitive data when transferring it via a USB drive or other removable media?',
        options: ['Yes, always', 'No, it’s not necessary'],
        correct: 'Yes, always',
        image: require('../assets/images/intermediateq2.gif'),
    },
    {
        question: 'How can you recognize a suspicious link in an email?',
        options: [
            'It has a short, simple URL',
            'It redirects to a known website',
            'The URL looks unusual or is misspelled',
            'It comes from a trusted sender'
        ],
        correct: 'The URL looks unusual or is misspelled',
        image: require('../assets/images/intermediateq3.gif'),
    },
    {
        question: 'What is a secure way to share sensitive information with someone?',
        options: [
            'Through an unencrypted email',
            'By using secure messaging apps or encrypted file transfer',
            'By calling them in a public place',
            'Posting it on social media with privacy settings'
        ],
        correct: 'By using secure messaging apps or encrypted file transfer',
        image: require('../assets/images/intermediateq4.gif'),
    },
    {
        question: 'A coworker asks for your login credentials. What should you do?',
        options: [
            'Politely refuse and suggest they contact IT',
            'Share your credentials for quick access',
            'Log in for them and share the screen',
            'Ignore their request and avoid the topic'
        ],
        correct: 'Politely refuse and suggest they contact IT',
        image: require('../assets/images/intermediateq5.gif'),
    },
    {
        question: 'When using a shared computer, what’s the best action to take after finishing your work?',
        options: [
            'Log out of all accounts',
            'Close the browser and leave',
            'Turn off the computer',
            'Leave everything open for the next user'
        ],
        correct: 'Log out of all accounts',
        image: require('../assets/images/intermediateq6.gif'),
    },
    {
        question: 'You’re at a café using public Wi-Fi. How can you protect your data?',
        options: [
            'Connect to the Wi-Fi without worrying',
            'Avoid doing sensitive tasks',
            'Switch to mobile data',
            'Use a VPN for secure access'
        ],
        correct: 'Use a VPN for secure access',
        image: require('../assets/images/intermediateq7.gif'),
    },
    {
        question: 'You receive an unexpected message from your boss asking for confidential info. What should you do?',
        options: [
            'Send the information immediately',
            'Verify the request with your boss through another method',
            'Forward the message to colleagues',
            'Ignore the message'
        ],
        correct: 'Verify the request with your boss through another method',
        image: require('../assets/images/intermediateq8.gif'),
    },
    {
        question: 'What is the most common method cyber attackers use to gain access to a network?',
        options: [
            'Man-in-the-middle attacks',
            'SQL Injection',
            'Password cracking',
            'Phishing attacks'
        ],
        correct: 'Phishing attacks',
        image: require('../assets/images/intermediateq9.gif'),
    },
    {
        question: 'What is phishing?',
        options: [
            'A type of cyber attack that tricks people into giving out personal information',
            'A process to update software',
            'A method to encrypt data online',
            'A type of online shopping scam'
        ],
        correct: 'A type of cyber attack that tricks people into giving out personal information',
        image: require('../assets/images/phishing.gif'),
    },
    {
        question: 'What does a VPN do?',
        options: [
            'It hides your online activity from hackers',
            'It speeds up your internet connection',
            'It prevents malware infections',
            'It blocks pop-up ads'
        ],
        correct: 'It hides your online activity from hackers',
        image: require('../assets/images/intermediateq11.gif'),
    },
    {
        question: 'What does two-factor authentication (2FA) involve?',
        options: [
            'Using a password and a code sent to your phone',
            'Using two different passwords',
            'Using only a fingerprint scanner',
            'Logging in from two devices at the same time'
        ],
        correct: 'Using a password and a code sent to your phone',
        image: require('../assets/images/intermediateq12.gif'),
    },
    {
        question: 'Why is it important to log out of shared computers?',
        options: [
            'To prevent others from accessing your accounts',
            'It makes the computer run faster',
            'It saves battery life',
            'To let the next user log in faster'
        ],
        correct: 'To prevent others from accessing your accounts',
        image: require('../assets/images/intermediateq13.gif'),
    },
    {
        question: 'What is the main purpose of a firewall in cybersecurity?',
        options: [
            'To block unauthorized access to your network',
            'To speed up your internet connection',
            'To monitor your social media activity',
            'To prevent viruses from entering your system'
        ],
        correct: 'To block unauthorized access to your network',
        image: require('../assets/images/intermediateq14.gif'),
    },
    {
        question: 'What is a common characteristic of a phishing website?',
        options: [
            'The URL is misspelled or looks strange',
            'It has a padlock icon in the address bar',
            'The URL starts with “https://”',
            'The website loads very quickly'
        ],
        correct: 'The URL is misspelled or looks strange',
        image: require('../assets/images/intermediateq15.gif'),
    },
    {
        question: 'Why should you regularly back up your data?',
        options: [
            'To ensure you have a copy if your computer is lost, stolen, or hacked',
            'To free up space on your computer',
            'To update your software automatically',
            'To delete old files'
        ],
        correct: 'To ensure you have a copy if your computer is lost, stolen, or hacked',
        image: require('../assets/images/intermediateq16.gif'),
    },
    {
        question: 'You’re working on a project with sensitive company data. What’s the best practice for keeping the data secure?',
        options: [
            'Share the data only with people who need to know',
            'Store the data on an unencrypted USB drive',
            'Email the data to yourself for quick access',
            'Post the data on a cloud storage service without encryption'
        ],
        correct: 'Share the data only with people who need to know',
        image: require('../assets/images/intermediateq17.gif'),
    },
    {
        question: 'You receive a text message with a link to track a package you don’t remember ordering. What should you do?',
        options: [
            'Delete the message',
            'Click the link to check what it is',
            'Forward the message to friends',
            'Call the shipping company to verify'
        ],
        correct: 'Delete the message',
        image: require('../assets/images/intermediateq18.gif'),
    },
    {
        question: 'What is the safest way to share sensitive information with a colleague?',
        options: [
            'Share it via a secure file transfer service',
            'Email it without encryption',
            'Print it and hand it to them in person',
            'Send it through social media'
        ],
        correct: 'Share it via a secure file transfer service',
        image: require('../assets/images/intermediateq19.gif'),
    },
    {
        question: 'Why is it important to lock your computer when you step away from your desk?',
        options: [
            'To prevent unauthorized access to your information',
            'To save battery life',
            'To make the screensaver appear',
            'To update your software automatically'
        ],
        correct: 'To prevent unauthorized access to your information',
        image: require('../assets/images/intermediateq20.gif'),
    },
    {
        question: 'Which of the following is a good way to identify a secure website?',
        options: [
            'It has many images',
            'The URL starts with “https://” and has a padlock icon',
            'It loads quickly',
            'It asks for personal information immediately'
        ],
        correct: 'The URL starts with “https://” and has a padlock icon',
        image: require('../assets/images/intermediateq21.gif'),
    },
    {
        question: 'What should you do if your computer starts acting strangely after downloading a file?',
        options: [
            'Ignore it',
            'Delete the file and restart your computer',
            'Run an antivirus scan and check for malware',
            'Uninstall the antivirus software'
        ],
        correct: 'Run an antivirus scan and check for malware',
        image: require('../assets/images/intermediateq22.png'),
    },
    {
        question: 'You get a calendar invite from an unknown source. What should you do?',
        options: [
            'Accept the invite',
            'Ignore it',
            'Confirm with the sender before responding',
            'Delete the invite'
        ],
        correct: 'Confirm with the sender before responding',
        image: require('../assets/images/intermediateq23.png'),
    },
    {
        question: 'You need to share a large, sensitive file with a colleague. What’s the best way?',
        options: [
            'Email it directly',
            'Use a secure file transfer service',
            'Upload it to a public cloud and share the link',
            'Split the file and send in parts'
        ],
        correct: 'Use a secure file transfer service',
        image: require('../assets/images/intermediateq24.gif'),
    },
    {
        question: 'You notice that your browser’s homepage has changed without your action. What’s your first step?',
        options: [
            'Change it back manually',
            'Run a malware scan',
            'Ignore it',
            'Restart your computer'
        ],
        correct: 'Run a malware scan',
        image: require('../assets/images/intermediateq25.gif'),
    },
    {
        question: 'A pop-up claims your software is out of date and offers a download link. What do you do?',
        options: [
            'Download and install the update',
            'Close the pop-up and manually check for updates',
            'Ignore the pop-up',
            'Restart your computer'
        ],
        correct: 'Close the pop-up and manually check for updates',
        image: require('../assets/images/intermediateq26.gif'),
    },
    {
        question: 'You find a program running in the background that you didn’t install. What should you do?',
        options: [
            'Close the program',
            'Uninstall it immediately',
            'Run a malware scan to investigate further',
            'Ignore it'
        ],
        correct: 'Run a malware scan to investigate further',
        image: require('../assets/images/intermediateq27.gif'),
    },
    {
        question: 'You need to connect to the company network from a café. What’s the safest method?',
        options: [
            'Use the café’s Wi-Fi directly',
            'Use a VPN',
            'Use your mobile hotspot',
            'Wait until you have a secure connection'
        ],
        correct: 'Use a VPN',
        image: require('../assets/images/intermediateq28.gif'),
    },
    {
        question: 'Your colleague shares a spreadsheet link that asks you to enable macros. What should you do?',
        options: [
            'Enable macros and proceed',
            'Verify the file with your colleague before enabling',
            'Ignore the file',
            'Download the file without enabling macros'
        ],
        correct: 'Verify the file with your colleague before enabling',
        image: require('../assets/images/intermediateq29.gif'),
    },
    {
        question: 'You are prompted to allow a new app permission to access your contacts. What should you do?',
        options: [
            'Allow access',
            'Deny access until you confirm it’s necessary',
            'Uninstall the app',
            'Ignore the prompt'
        ],
        correct: 'Deny access until you confirm it’s necessary',
        image: require('../assets/images/intermediateq30.gif'),
    },
];


export const getRandomQuestions = (level: 'beginner' | 'intermediate'): Question[] => {
    const questions = level === 'beginner' ? beginnerQuestions : intermediateQuestions;
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10); // Select only 10 random questions
};
