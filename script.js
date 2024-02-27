
function attemptLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform basic client-side validation
    if (username === '' || password === '') {
        alert('Please enter both username and password');
        return;
    }

    // Check if the entered credentials match the predefined values
    if (username === '9415938887' && password === 'p44rth') {
        alert('Login to BioLock is successful!');
        
document.querySelector('.login-container').style.display = 'none';
                // Show iframe container
                document.getElementById('iframeContainer').style.display = 'block';

            // Encode the URL in base64
           var encodedURL = btoa("https://mrp44rth.github.io/GITI-gauriganj-data/");

            // Decode the encoded URL
           var decodedURL = atob(encodedURL);

            // Set the decoded URL as the src attribute of the iframe
          document.getElementById('myIframe').src = decodedURL;
// second user
         // Check if the entered credentials match the predefined values
    if (username === '9415938887' && password === 'FAP') {
        alert('Login to BioLock is successful!');
        
document.querySelector('.login-container').style.display = 'none';
                // Show iframe container
                document.getElementById('iframeContainer').style.display = 'block';

            // Encode the URL in base64
           var encodedURL = btoa("https://mrp44rth.github.io/FAP_Data/");

            // Decode the encoded URL
           var decodedURL = atob(encodedURL);

            // Set the decoded URL as the src attribute of the iframe
          document.getElementById('myIframe').src = decodedURL;
       


 // The new page won't be added to the browser's history
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.innerHTML = '&#x1F440;';
    } else {
        passwordField.type = 'password';
        toggleIcon.innerHTML = '&#x1F441;';
    }
}
