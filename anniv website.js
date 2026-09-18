// Switch between pages
function goToPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
    });
  
    document.getElementById(`page${pageNumber}`).classList.add("active");
  
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  
  // Show the message when she clicks No
  function showNoMessage(messageId) {
  
    const message = document.getElementById(messageId);
  
    message.textContent = "HuHu di nako love sako bibi";
  
    // Restart the shake animation every time
    message.classList.remove("show");
  
    void message.offsetWidth;
  
    message.classList.add("show");
  }
  
  
  // Reveal the letter when Next is clicked
  function showLetter() {
  
    const letter = document.getElementById("letter");
  
    letter.classList.remove("hidden");
  
    document.querySelector(".next-btn").style.display = "none";
  
    setTimeout(() => {
      letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  
  }