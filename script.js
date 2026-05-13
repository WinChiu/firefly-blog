(function () {
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

  const postTitle = document.querySelector(".post-header h1");
  if (postTitle) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "1";
    postTitle.textContent = logTitles[id] || logTitles["1"];
  }
})();
