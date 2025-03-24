// Function to validate the form before submission
function validateform(form){
    // Regular expression pattern to validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Retrieving form input values
    let name = form.fname.value;
    let lastname= form.lname.value;
    let contactno=form.contactno.value;
    let email = form.email.value;
    let easyNav = form.navigate.value;
    let rating = form.rate.value;
    let valid = true;

    // Display error message for email
    document.getElementById("erroremail").innerHTML = "*Email required";

    // Validate name field
    if(name == ""){
        document.getElementById("errorname").style.visibility = "visible";
        valid = false;
    }else{
        document.getElementById("errorname").style.visibility = "hidden";
    }

    if(lastname == ""){
        document.getElementById("errorlname").style.visibility = "visible";
        valid = false;
    }else{
        document.getElementById("errorlname").style.visibility = "hidden";
    }

    if(contactno == ""){
        document.getElementById("errorcontactno").style.visibility = "visible";
        valid = false;
    }else{
        document.getElementById("errorcontactno").style.visibility = "hidden";
    }
    // Validate email field
    if(email == ""){
        document.getElementById("erroremail").style.visibility = "visible";
        valid = false;
    }else{
        document.getElementById("erroremail").style.visibility = "hidden";
    }

    // Validate navigation field
    if(easyNav == ""){
        document.getElementById("errornav").style.visibility = "visible";
        valid = false;
    }else{
        document.getElementById("errornav").style.visibility = "hidden";
    }

    // Validate rating field
    if(rating == ""){
        document.getElementById("errorrate").style.visibility = "visible";
        valid = false;
    }else{
        document.getElementById("errorrate").style.visibility = "hidden";
    }

    // Validate email format
    if(form.email.value != "" && !emailPattern.test(form.email.value)){
        document.getElementById("erroremail").innerHTML = "*Enter a valid email";
        document.getElementById("erroremail").style.visibility = "visible";
        valid = false;
    }

    // Display overall error message if form is not valid
    if(!valid){
        document.getElementById("errordisplay").style.visibility = "visible";
    }

    return valid; // Return validation status
}

// Function to show preview of the form data
function showPreview(form){
    if(validateform(form)){ // Proceed if form is valid
        let name = form.fname.value;
        let lastname= form.lname.value;
        let contactno=form.contactno.value;
        let email = form.email.value;
        let easyNav = form.navigate.value;
        let rating = form.rate.value;
        let messages = form.notification.value; // New field for form notification
        let additional = form.comment.value;
        
        // Display form data in preview section
        document.getElementById("showName").innerHTML = name;
        document.getElementById("showlname").innerHTML = lastname;
        document.getElementById("showContactno").innerHTML = contactno;
        document.getElementById("showEmail").innerHTML = email;
        document.getElementById("showEasy").innerHTML = easyNav;
        document.getElementById("showNotifications").innerHTML = messages; // Display form notification

        // Display rating and additional comment if provided
        document.getElementById("showRate").innerHTML = rating;
        if(additional != ""){
            document.getElementById("question").style.display = "flex";
            document.getElementById("showComment").innerHTML = additional;
        }else{
            document.getElementById("question").style.display = "none";
        }

        // Hide form and display preview section
        document.getElementById("feedback").style.display = "none";
        document.getElementById("previewsection").style.display = "flex";
        document.getElementById("message").style.display = "none";
    }
}

// Function to show feedback form
function showFeedback(){
    // Hide preview section and display feedback form
    document.getElementById("feedback").style.display = "flex";
    document.getElementById("previewsection").style.display = "none";
    document.getElementById("message").style.display = "none";
}

// Function to finalize submission
function finalSubmit(form){
    if(validateform(form)){ // Proceed if form is valid
        // Hide preview section and display submission message
        document.getElementById("feedback").style.display = "none";
        document.getElementById("previewsection").style.display = "none";
        document.getElementById("message").style.display = "flex";
        
        // Delay submission by 3 seconds for user confirmation
        setTimeout(function(){
            document.getElementById("feedbackform").submit();
        },3000);
    }
}

// Function to confirm final submission
function finalConfirm(){
    // Hide preview section and display submission message
    document.getElementById("feedback").style.display = "none";
    document.getElementById("previewsection").style.display = "none";
    document.getElementById("message").style.display = "flex";
    
    // Delay submission by 3 seconds for user confirmation
    setTimeout(function(){
        document.getElementById("feedbackform").submit();
    },3000);
}
