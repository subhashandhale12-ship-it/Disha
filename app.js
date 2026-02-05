let language = "en";
let studentAnswers = {};

function setLanguage(lang) {
  language = lang;
  showRoleSelection();
}

function showRoleSelection() {
  document.body.innerHTML = language === "mr"
    ? `
      <h1>DISHA</h1>
      <p>तुम्ही कोण आहात?</p>
      <button onclick="startStudent()">विद्यार्थी</button>
      <button onclick="startParent()">पालक</button>
    `
    : `
      <h1>DISHA</h1>
      <p>Who are you?</p>
      <button onclick="startStudent()">Student</button>
      <button onclick="startParent()">Parent</button>
    `;
}

function startStudent() {
  showQ1();
}

/* -------- QUESTIONS ---------- */

function showQ1() {
  document.body.innerHTML = language === "mr"
    ? `
      <h2>प्रश्न 1</h2>
      <p>तुम्हाला कोणते विषय जास्त आवडतात?</p>
      <button onclick="save('subjects','science')">विज्ञान</button>
      <button onclick="save('subjects','commerce')">वाणिज्य</button>
      <button onclick="save('subjects','arts')">कला</button>
      <button onclick="save('subjects','mixed')">मिश्र</button>
    `
    : `
      <h2>Question 1</h2>
      <p>Which subjects do you enjoy more?</p>
      <button onclick="save('subjects','science')">Science</button>
      <button onclick="save('subjects','commerce')">Commerce</button>
      <button onclick="save('subjects','arts')">Arts</button>
      <button onclick="save('subjects','mixed')">Mixed</button>
    `;
}

function showQ2() {
  document.body.innerHTML = language === "mr"
    ? `
      <h2>प्रश्न 2</h2>
      <p>अभ्यासासाठी किती मेहनत करायला तुम्ही आरामदायक आहात?</p>
      <button onclick="save('effort','high')">जास्त</button>
      <button onclick="save('effort','medium')">मध्यम</button>
      <button onclick="save('effort','low')">कमी</button>
    `
    : `
      <h2>Question 2</h2>
      <p>How comfortable are you with study effort?</p>
      <button onclick="save('effort','high')">High</button>
      <button onclick="save('effort','medium')">Medium</button>
      <button onclick="save('effort','low')">Low</button>
    `;
}

function showQ3() {
  document.body.innerHTML = language === "mr"
    ? `
      <h2>प्रश्न 3</h2>
      <p>तुम्हाला अभ्यासाचे तास कसे वाटतात?</p>
      <button onclick="save('hours','long')">लांब तास चालतील</button>
      <button onclick="save('hours','normal')">सामान्य</button>
      <button onclick="save('hours','short')">कमी हवे</button>
    `
    : `
      <h2>Question 3</h2>
      <p>How do you feel about study hours?</p>
      <button onclick="save('hours','long')">Long hours ok</button>
      <button onclick="save('hours','normal')">Normal</button>
      <button onclick="save('hours','short')">Prefer short</button>
    `;
}

function showQ4() {
  document.body.innerHTML = language === "mr"
    ? `
      <h2>प्रश्न 4</h2>
      <p>तुम्हाला कशात जास्त रस आहे?</p>
      <button onclick="save('style','practical')">प्रात्यक्षिक</button>
      <button onclick="save('style','theory')">सैद्धांतिक</button>
      <button onclick="save('style','mix')">दोन्ही</button>
    `
    : `
      <h2>Question 4</h2>
      <p>What do you prefer?</p>
      <button onclick="save('style','practical')">Practical</button>
      <button onclick="save('style','theory')">Theory</button>
      <button onclick="save('style','mix')">Both</button>
    `;
}

function showQ5() {
  document.body.innerHTML = language === "mr"
    ? `
      <h2>प्रश्न 5</h2>
      <p>तुम्हाला पुढील करिअर पर्याय पाहायचे आहेत का?</p>
      <button onclick="showResult()">होय</button>
    `
    : `
      <h2>Question 5</h2>
      <p>Do you want to see career options?</p>
      <button onclick="showResult()">Yes</button>
    `;
}

/* -------- SAVE & NEXT ---------- */

function save(key, value) {
  studentAnswers[key] = value;

  if (key === "subjects") showQ2();
  else if (key === "effort") showQ3();
  else if (key === "hours") showQ4();
  else if (key === "style") showQ5();
}

/* -------- RESULT ---------- */

function showResult() {
  document.body.innerHTML = language === "mr"
    ? `
      <h2>तुमच्यासाठी सूचना</h2>
      <p>ही सूचना तुमच्या पसंतीवर आधारित आहे, क्षमतेवर नाही.</p>

      <p><b>विज्ञान:</b> अभियांत्रिकी, वैद्यकीय, संशोधन</p>
      <p><b>वाणिज्य:</b> व्यवसाय, व्यवस्थापन, लेखा</p>
      <p><b>कला:</b> शिक्षण, मीडिया, प्रशासन</p>

      <p>तुम्ही कोणताही मार्ग निवडू शकता. मेहनत आणि वेळ महत्त्वाचा आहे.</p>
    `
    : `
      <h2>Guidance for you</h2>
      <p>This guidance is based on preferences, not ability.</p>

      <p><b>Science:</b> Engineering, Medical, Research</p>
      <p><b>Commerce:</b> Business, Management, Accounts</p>
      <p><b>Arts:</b> Education, Media, Administration</p>

      <p>You can choose any path. Effort and time matter.</p>
    `;
}

function startParent() {
  alert(language === "mr"
    ? "पालक मार्गदर्शन पुढील टप्प्यात"
    : "Parent guidance in next step");
}
