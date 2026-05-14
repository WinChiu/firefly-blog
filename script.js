(function () {
  const digitRepeatCycles = 24;
  const digitStartCycle = 10;
  const fixedVisitorCount = 128764;
  const logTitles = {
    "1": "Deciding on the topic.",
    "2": "Looking into related algorithm",
    "3": "Research on firefly behaviour",
    "4": "Lorem ipsum nisl pellentesque sapien dui.",
    "5": "Lorem ipsum justo fames laoreet cras in elit.",
    "6": "Lorem ipsum sed maecenas"
  };
  const postEntries = {
    "1": {
      title: "Deciding on the topic.",
      date: "May 24, 2024",
      datetime: "2024-05-24",
      content: `
        <div class="post-media-grid" aria-label="Development log reference images">
          <figure class="post-media">
            <div class="post-image image-slot" data-placeholder="devlog-topic-blue-tears.webp">
              <img src="assets/placeholders/devlog-topic-blue-tears.webp" alt="Blue Tears reference">
            </div>
            <figcaption>Blue Tears, <a href="#">Source</a></figcaption>
          </figure>
          <figure class="post-media">
            <div class="post-image image-slot" data-placeholder="devlog-topic-firefly.webp">
              <img src="assets/placeholders/devlog-topic-firefly.webp" alt="Firefly reference">
            </div>
            <figcaption>Firefly, <a href="#">Source</a></figcaption>
          </figure>
        </div>

        <div class="post-body">
          <p>During one of our mid-to-late stage ideation discussions, we explored the possibility of visualizing natural bioluminescent effects. Team members brought up examples such as the "Blue Tears" phenomenon in Matsu, Taiwan, and seasonal firefly viewing activities in spring. While reviewing previous projects, we also found a team that had created a bioluminescence-themed project, named Bioluminescent Fluid Simulation, focused on visual aesthetics, interaction, and algorithm optimization, which showed that this direction was both feasible and engaging as a project topic.</p>
          <p>In the end, we decided to focus on simulating firefly movement and blinking behavior, combined with wind-based interaction effects. We also began researching existing algorithms related to flight movement, firefly flashing behavior, and wind disturbance that could be applied and further optimized for the project.</p>
        </div>
      `
    },
    "2": {
      title: "Looking into related algorithm",
      date: "May 24, 2024",
      datetime: "2024-05-24",
      content: `
        <div class="post-body algorithm-post">
          <p>After conducting further research, we identified several algorithms directly related to firefly behavior that could be explored in our project:</p>

          <section class="algorithm-section">
            <h2>Kuramoto Model</h2>
            <p>It describes a large population of coupled limit-cycle oscillators whose natural frequencies are drawn from some prescribed distribution. It's suitable for simulating biological characteristics such as networks of pacemaker cells in the heart, congregations of synchronously flashing fireflies, and crickets that chirp in unison.</p>
            <figure class="formula-media">
              <div class="formula-image image-slot" data-placeholder="devlog-algorithm-kuramoto-formula.webp">
                <img src="assets/placeholders/devlog-algorithm-kuramoto-formula.webp" alt="Kuramoto model formula">
              </div>
              <figcaption>
                <span>Δθᵢ: the rate of change (speed) of oscillator i.</span>
                <span>ωᵢ: the natural frequency of oscillator i, how fast it oscillates on its own.</span>
                <span>K: coupling strength, larger means more influence from other oscillators.</span>
                <span>N: total number of oscillators.</span>
              </figcaption>
            </figure>
          </section>

          <section class="algorithm-section">
            <h2>Firefly Algorithm</h2>
            <p>A nature-inspired optimization algorithm based on the attraction behavior of fireflies. In this model, each firefly moves toward brighter individuals, while attraction decreases with distance. It can be used to simulate mating-related attraction behaviors between male and female fireflies.</p>
            <div class="formula-row">
              <figure class="formula-media formula-media-small">
                <div class="formula-image image-slot" data-placeholder="devlog-algorithm-firefly-pseudocode.webp">
                  <img src="assets/placeholders/devlog-algorithm-firefly-pseudocode.webp" alt="Firefly algorithm pseudocode">
                </div>
                <figcaption>
                  <span>Δθᵢ: the rate of change (speed) of oscillator i.</span>
                  <span>ωᵢ: the natural frequency of oscillator i, how fast it oscillates on its own.</span>
                  <span>K: coupling strength, larger means more influence from other oscillators.</span>
                  <span>N: total number of oscillators.</span>
                </figcaption>
              </figure>
              <figure class="formula-media formula-media-wide">
                <div class="formula-image image-slot" data-placeholder="devlog-algorithm-firefly-formula.webp">
                  <img src="assets/placeholders/devlog-algorithm-firefly-formula.webp" alt="Firefly algorithm update formula">
                </div>
                <figcaption>The main update formula for any pair of two fireflies xᵢ and xⱼ. Where αₜ is a parameter controlling the step size, while εₜ is a vector drawn from a Gaussian or other distribution.</figcaption>
              </figure>
            </div>
          </section>

          <section class="algorithm-section">
            <h2>Boids Model</h2>
            <p>A classic flocking simulation model that can be adapted to simulate firefly flight behavior.</p>
          </section>

          <p>However, we also found that these algorithms still leave many aspects of real firefly behavior unmodeled. Although Kuramoto Model and Firefly Algorithm are commonly used in firefly simulations, several important biological behaviors are not accurately represented.</p>
        </div>
      `
    },
    "3": {
      title: "Research on firefly behaviour",
      date: "May 24, 2024",
      datetime: "2024-05-24",
      content: `
        <div class="post-body research-post">
          <p>Based on the analysis of the Photinus Carolinus firefly in the paper XXX, we identified several behaviors missing from existing models:</p>

          <section class="algorithm-section">
            <h2>Flash synchronization behavior</h2>
            <p>Compared with the standard Kuramoto Model:</p>
            <ol class="research-list">
              <li>Only male fireflies synchronize their flashing behavior, while females do not.</li>
              <li>Each flash lasts about 100 to 150 milliseconds and can repeat up to eight times in a row.</li>
              <li>When the number of active fireflies is below a critical density, their flashing is irregular and not synchronized.</li>
              <li>The flashing spreads upward from the ridge at about 0.5 m/s, forming a wave-like pattern</li>
              <li>Fireflies exhibit a bimodal periodic pattern: synchronized flashing bursts last around 10 seconds with flashes every 0.55 seconds, followed by a 2-second resting phase. Existing models cannot represent this intermittent stop-and-resume behavior.</li>
            </ol>
          </section>

          <section class="algorithm-section">
            <h2>Attraction behavior</h2>
            <p>Existing Firefly Algorithms assume that all fireflies attract one another. However, in real behavior, only female fireflies actively approach males.</p>
          </section>

          <p>Therefore, the main technical direction of our project became improving existing algorithms to better simulate realistic firefly behavior.</p>
        </div>
      `
    }
  };

  function markMissingImage(img) {
    const slot = img.closest(".image-slot");
    if (!slot) return;
    slot.classList.add("image-missing");
  }

  document.querySelectorAll(".image-slot img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) {
      markMissingImage(img);
    }

    img.addEventListener("error", () => markMissingImage(img));
    img.addEventListener("load", () => {
      const slot = img.closest(".image-slot");
      if (slot) slot.classList.remove("image-missing");
    });
  });

  function watchImageSlots(scope) {
    scope.querySelectorAll(".image-slot img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) {
        markMissingImage(img);
      }

      img.addEventListener("error", () => markMissingImage(img));
      img.addEventListener("load", () => {
        const slot = img.closest(".image-slot");
        if (slot) slot.classList.remove("image-missing");
      });
    });
  }

  function buildCounter(counter, value) {
    counter.textContent = "";
    counter.setAttribute("aria-live", "off");

    String(value).padStart(7, "0").split("").forEach((digit) => {
      const digitEl = document.createElement("span");
      const strip = document.createElement("span");
      const numericDigit = Number(digit);
      const position = digitStartCycle * 10 + numericDigit;

      digitEl.className = "counter-digit";
      strip.className = "counter-digit-strip";
      strip.dataset.position = String(position);
      strip.dataset.digit = String(numericDigit);

      for (let cycle = 0; cycle < digitRepeatCycles; cycle += 1) {
        for (let index = 0; index <= 9; index += 1) {
          const number = document.createElement("span");
          number.textContent = index;
          strip.appendChild(number);
        }
      }

      digitEl.appendChild(strip);
      counter.appendChild(digitEl);
      strip.style.transition = "none";
      strip.style.transform = `translateY(-${position}em)`;

      requestAnimationFrame(() => {
        strip.style.transition = "";
      });
    });
  }

  function renderCounter(counter, value) {
    const digits = String(value).padStart(7, "0").slice(-7).split("");
    const strips = counter.querySelectorAll(".counter-digit-strip");

    digits.forEach((digit, index) => {
      const strip = strips[index];
      const nextDigit = Number(digit);
      const currentDigit = Number(strip.dataset.digit || "0");
      const currentPosition = Number(strip.dataset.position || String(digitStartCycle * 10));
      const steps = (nextDigit - currentDigit + 10) % 10;
      let nextPosition = currentPosition + steps;

      if (nextPosition > (digitRepeatCycles - 4) * 10) {
        const resetPosition = digitStartCycle * 10 + currentDigit;
        strip.style.transition = "none";
        strip.style.transform = `translateY(-${resetPosition}em)`;
        strip.dataset.position = String(resetPosition);
        nextPosition = resetPosition + steps;

        requestAnimationFrame(() => {
          strip.style.transition = "";
          strip.style.transform = `translateY(-${nextPosition}em)`;
        });
      } else if (steps > 0) {
        strip.style.transform = `translateY(-${nextPosition}em)`;
      }

      strip.dataset.position = String(nextPosition);
      strip.dataset.digit = String(nextDigit);
    });

    counter.setAttribute("aria-label", `Visitor count ${digits.join("")}`);
  }

  const visitorCounters = document.querySelectorAll(".visitor-counter");

  visitorCounters.forEach((counter) => {
    buildCounter(counter, fixedVisitorCount);
    renderCounter(counter, fixedVisitorCount);
  });

  const postTitle = document.querySelector("[data-post-title]");
  const postDate = document.querySelector("[data-post-date]");
  const postContent = document.querySelector("[data-post-content]");

  if (postTitle && postContent) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "1";
    const post = postEntries[id] || postEntries["1"];

    postTitle.textContent = post.title;
    if (postDate) {
      postDate.textContent = post.date;
      postDate.setAttribute("datetime", post.datetime);
    }
    postContent.innerHTML = post.content;
    watchImageSlots(postContent);
  }
})();
