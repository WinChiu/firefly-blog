(function () {
  const counterKey = "fireflyVisitorCount";
  const counterUpdatedKey = "fireflyVisitorCountUpdatedAt";
  const digitRepeatCycles = 24;
  const digitStartCycle = 10;
  const logTitles = {
    "1": "Lorem ipsum auctor commodo volutpat",
    "2": "Lorem ipsum aenean cras diam proin faucibus dolor.",
    "3": "Lorem ipsum odio quam id pharetra eget.",
    "4": "Lorem ipsum nisl pellentesque sapien dui.",
    "5": "Lorem ipsum justo fames laoreet cras in elit.",
    "6": "Lorem ipsum sed maecenas"
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

  function getInitialCounterValue() {
    const stored = Number(window.localStorage.getItem(counterKey));
    const updatedAt = Number(window.localStorage.getItem(counterUpdatedKey));

    if (Number.isFinite(stored) && stored > 0) {
      const elapsed = Number.isFinite(updatedAt) ? Date.now() - updatedAt : 0;
      const catchUp = Math.max(0, Math.min(37, Math.floor(elapsed / 45000)));
      return stored + catchUp;
    }

    return Math.floor(120384 + Math.random() * 76000);
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

  let visitorValue = getInitialCounterValue();
  const visitorCounters = document.querySelectorAll(".visitor-counter");

  visitorCounters.forEach((counter) => {
    buildCounter(counter, visitorValue);
    renderCounter(counter, visitorValue);
  });

  window.localStorage.setItem(counterKey, String(visitorValue));
  window.localStorage.setItem(counterUpdatedKey, String(Date.now()));

  window.setInterval(() => {
    visitorValue += Math.random() < 0.78 ? 1 : 2;

    visitorCounters.forEach((counter) => renderCounter(counter, visitorValue));
    window.localStorage.setItem(counterKey, String(visitorValue));
    window.localStorage.setItem(counterUpdatedKey, String(Date.now()));
  }, 6500);

  const postTitle = document.querySelector(".post-header h1");
  if (postTitle) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "1";
    postTitle.textContent = logTitles[id] || logTitles["1"];
  }
})();
