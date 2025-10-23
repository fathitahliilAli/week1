
 // Toggle navigation on mobile
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu")

menuIcon.addEventListener("click", () => {
  navMenu.querySelector("ul").classList.toggle("show");
  //  navMenu.classList.toggle("show");
  
  // Change icon from bars to X when open
  const icon = menuIcon.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});


// Simple form validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else {
    alert("Thank you! Your message has been sent.");
    e.target.reset(); 
}
});
