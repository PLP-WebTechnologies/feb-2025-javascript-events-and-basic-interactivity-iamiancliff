// Wait until the page content loads
document.addEventListener("DOMContentLoaded", () => {
  // 1. EVENT HANDLING

  // Button Click
  const clickBtn = document.getElementById("clickBtn");
  clickBtn.addEventListener("click", () => {
    alert("Button was clicked!");
  });

  // Hover Effect
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.backgroundColor = "lightgreen";
    hoverBox.textContent = "Nice hover!";
  });
  hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.backgroundColor = "lightblue";
    hoverBox.textContent = "Hover Over Me";
  });

  // Keypress Detection
  const keyInput = document.getElementById("keyInput");
  keyInput.addEventListener("keypress", (e) => {
    console.log("You pressed:", e.key);
  });

  // Bonus: Double Click
  const secretBtn = document.getElementById("secretBtn");
  secretBtn.addEventListener("dblclick", () => {
    alert("You found the secret double-click!");
  });

  // 2. INTERACTIVE ELEMENTS

  // Toggle button color on click
  const colorBtn = document.getElementById("colorBtn");
  let colorToggled = false;
  colorBtn.addEventListener("click", () => {
    colorToggled = !colorToggled;
    colorBtn.style.backgroundColor = colorToggled ? "hotpink" : "#007bff";
    colorBtn.textContent = colorToggled ? "I changed!" : "Change My Color";
  });

  // Image Galleries
  const galleryConfigs = [
    {
      imgId: "galleryImage",
      btnId: "nextImageBtn",
      images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200/ff6666",
        "https://via.placeholder.com/200/66ccff",
      ]
    },
    {
      imgId: "galleryImage2",
      btnId: "nextImageBtn2",
      images: [
        "https://images.pexels.com/photos/8947770/pexels-photo-8947770.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3781523/pexels-photo-3781523.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      imgId: "galleryImage3",
      btnId: "nextImageBtn3",
      images: [
        "https://images.pexels.com/photos/2863263/pexels-photo-2863263.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    }
  ];

  galleryConfigs.forEach(({ imgId, btnId, images }) => {
    const img = document.getElementById(imgId);
    const btn = document.getElementById(btnId);
    let index = 0;

    if (img && btn) {
      btn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        img.src = images[index];
      });
    }
  });

  // Tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
      });

      const targetId = tab.getAttribute("data-tab");
      const targetTab = document.getElementById(targetId);

      if (targetTab) {
        targetTab.classList.remove("hidden");
      } else {
        // Optional: dynamically create tab content
        const newTab = document.createElement("div");
        newTab.id = targetId;
        newTab.className = "tab-content";
        newTab.textContent = `This is ${targetId}`;
        document.querySelector(".tabs").appendChild(newTab);
      }
    });
  });

  // 3. FORM VALIDATION

  const signupForm = document.getElementById("signupForm");
  const feedback = document.getElementById("feedback");
  const password = document.getElementById("password");

  // Real-time feedback while typing password
  password.addEventListener("input", () => {
    if (password.value.length < 8) {
      feedback.textContent = "Password too short";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "";
    }
  });

  // Final form submission validation
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const passwordVal = password.value;

    if (!name) {
      alert("Name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (passwordVal.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    alert("Form submitted successfully!");
    signupForm.reset();
  });
});
