document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".primary-nav");
  const menu = document.querySelector(".menu-button");
  const mobile = window.matchMedia("(max-width: 1080px)");

  const closeGroups = () => {
    nav?.querySelectorAll(".nav-group").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
    });
  };

  const closeMenu = () => {
    if (!menu || !nav) return;
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation");
    menu.textContent = "☰";
    closeGroups();
  };

  menu?.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!open));
    menu.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    nav.classList.toggle("open", !open);
    menu.textContent = open ? "☰" : "×";
    if (open) closeGroups();
  });

  nav?.querySelectorAll(".nav-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!mobile.matches) return;
      const group = btn.closest(".nav-group");
      const open = btn.getAttribute("aria-expanded") === "true";
      closeGroups();
      if (!open) {
        group.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!mobile.matches) return;
      event.preventDefault();
      const href = link.getAttribute("href");
      closeMenu();
      if (href) window.location.href = href;
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-group")) closeGroups();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const onScroll = () => header?.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-enquiry-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      let valid = true;

      const wrapOf = (field) => field.closest("label") || field.parentElement;

      const showError = (field, message) => {
        const wrap = wrapOf(field);
        let error = wrap.querySelector(".field-error");
        if (!error) {
          error = document.createElement("p");
          error.className = "field-error";
          wrap.appendChild(error);
        }
        const id = (field.id || field.name) + "-error";
        error.id = id;
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", id);
        error.textContent = message;
        valid = false;
      };

      const clearError = (field) => {
        field.removeAttribute("aria-invalid");
        const error = wrapOf(field).querySelector(".field-error");
        if (error) error.textContent = "";
      };

      form.querySelectorAll("input, textarea, select").forEach((field) => {
        if (field.type === "checkbox") return;
        clearError(field);
        const value = field.value.trim();
        if (field.required && !value) {
          showError(field, "This field is required.");
          return;
        }
        if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          showError(field, "Enter a valid email address.");
        }
        if (field.type === "tel" && value) {
          const digits = value.replace(/\D/g, "");
          if (digits.length < 8 || digits.length > 15) showError(field, "Enter a phone number with 8 to 15 digits.");
        }
      });

      const consent = form.querySelector('input[type="checkbox"]');
      if (consent) {
        clearError(consent);
        if (!consent.checked) showError(consent, "Please confirm you will not send patient information.");
      }

      if (!valid) {
        status.textContent = "Please correct the highlighted fields. Your message has not been sent.";
        form.querySelector("[aria-invalid='true']")?.focus();
        return;
      }

      status.textContent = "Thank you. The office inbox is not connected on this page yet, so this message was not delivered. Please do not include patient records.";
    });
  });
});
