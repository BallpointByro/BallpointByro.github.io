document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".marquee-track");
  if (!track) return;

  const todayKey = new Date().toISOString().slice(0, 10);

  track.querySelectorAll("a").forEach((link) => {
    const img = link.querySelector("img");
    if (!img) return;

    const repoPath = new URL(link.href).pathname;
    img.src = `https://opengraph.githubassets.com/{todayKey}${repoPath}`;
    console.log(`https://githubassets.com/{todayKey}${repoPath}`);
  });

  track.insertAdjacentHTML("beforeend", track.innerHTML);
});
