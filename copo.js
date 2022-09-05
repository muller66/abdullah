   
    document.getElementById('submit').onclick = function() {

    	let uName = document.getElementById('uname').value;
            let eMail = document.getElementById('email').value;
             let dOb = document.getElementById('dob').value;
              let hOme = document.getElementById('home').value;
               let pHone = document.getElementById('phone').value;
                




         document.getElementById('uname-results').innerHTML = uName;
                 document.getElementById('email-results').innerHTML = eMail;
                 document.getElementById('dob-results').innerHTML = dOb;
                 document.getElementById('home-results').innerHTML = hOme;
                 document.getElementById('phone-results').innerHTML = pHone;

    }