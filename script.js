document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (!section) return;

    section.classList.remove("blink-once");

    setTimeout(() => {
      section.classList.add("blink-once");

      setTimeout(() => {
        section.classList.remove("blink-once");
      }, 900);

    }, 350);
  });
});

const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-item");

function toggleMenu() {
  navLinks.classList.toggle("active");
}

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
