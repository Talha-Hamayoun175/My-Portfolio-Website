export const animateOnScroll = () => {
    const sections = document.querySelectorAll(".animate-section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    section.classList.add("active");

                    if (section.classList.contains("about")) {
                        section.classList.add("about");
                    } else if (section.classList.contains("skills")) {
                        section.classList.add("skills");
                    } else if (section.classList.contains("projects")) {
                        section.classList.add("projects");
                    } else if (section.classList.contains("contact")) {
                        section.classList.add("contact");
                    }

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.4,
        }
    );

    sections.forEach((section) => observer.observe(section));
};
