function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "Front End Developer",
    "UI/UX DESIGNER",
    "Data Analyst"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

function toggleMenu() {
    const navbar = document.querySelector(".dropdown");
    if (navbar.style.transform === "translateY(0px)") {
        navbar.style.transform = "translateY(-500px)";
    } else {
        navbar.style.transform = "translateY(0px)";
    }
}

  // Projects Box
  document.querySelectorAll('.projects-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'scale(1.05)';
      box.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      box.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });

    box.addEventListener('mouseleave', () => {
      box.style.transform = 'scale(1)';
      box.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });

    box.addEventListener('click', () => {
      const projectTitle = box.querySelector('h4').textContent;
      alert(`You clicked on the project: ${projectTitle}`);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.projects-box');

    const handleScroll = () => {
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight - 50) {
          box.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger sekali saat halaman dimuat
  });
