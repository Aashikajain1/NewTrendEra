function fun(arg) {
    if (arg == 'a') {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "https://source.unsplash.com/260x260/weekly?bag";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.1000";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'b') {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "https://source.unsplash.com/260x260/weekly?necklace";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.300";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'c') {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "https://source.unsplash.com/260x260/weekly?skirt";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.500";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'd') {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "https://source.unsplash.com/260x260/weekly?dress";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.800";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'e') {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "https://source.unsplash.com/260x260/weekly?pants";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.1000";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'f') {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "https://source.unsplash.com/260x260/weekly?heels";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.500";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'g') {
        var imageElement = document.getElementById("pic");
        var imageUrl = "https://source.unsplash.com/260x260/weekly?shirt";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.400";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'h') {
        var imageElement = document.getElementById("pic");
        var imageUrl = "https://source.unsplash.com/260x260/weekly?coat";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.2000";
        document.getElementById("frm").style.display="block";
    }
    if (arg == 'i') {
        var imageElement = document.getElementById("pic");
        var imageUrl = "https://source.unsplash.com/260x260/weekly?shoes";
        imageElement.src = imageUrl;
        document.getElementById("pr").innerHTML = "Price = Rs.1800";
        document.getElementById("frm").style.display="block";
    }
}
const form = document.getElementById("registrationForm");
const NameInput = document.getElementById("firstName");
const addressInput = document.getElementById("address");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");


form.addEventListener("submit", function (event) {
  if (!validateFirstName()) {
    event.preventDefault();
  }
  else if (!validateAddress()) {
    event.preventDefault();
  }
  else if (!validateEmail()) {
    event.preventDefault();
  }
  else if (!validateMobile()) {
    event.preventDefault();
  }
  else {
    alert("ORDER PLACED SUCCESFULLY...");
  }
});

function validateFirstName() {
  const firstName = NameInput.value;
  if (!/^[a-zA-Z]{6,}$/.test(firstName)) {
    alert(" Name should contain alphabets and have a length of at least 6 characters.");
    return false;
  }
  return true;
}
function validateAddress() {
  const address = addressInput.value;
  if (address.trim() === "") {
    alert("Address should not be empty.");
    return false;
  }
  return true;
}
function validateEmail() {
  const email = emailInput.value;
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    alert("Invalid email address. Please use a valid email format (e.g., name@domain.com).");
    return false;
  }
  return true;
}
function validateMobile() {
  const mobile = mobileInput.value;
  if (!/^\d{10}$/.test(mobile)) {
    alert("Mobile Number should contain exactly 10 digits.");
    return false;
  }
  return true;
}



let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); 
    const slides2 = document.getElementsByClassName("mySlides2");
    for (i = 0; i <slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides2.length) {
        slideIndex = 1;
    }
    slides2[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); 
}

