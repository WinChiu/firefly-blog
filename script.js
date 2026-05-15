(function () {
  const digitRepeatCycles = 24;
  const digitStartCycle = 10;
  const fixedVisitorCount = 128764;
  const logTitles = {
    1: 'Deciding on the topic.',
    2: 'Looking into related algorithm',
    3: 'Research on firefly behaviour',
    4: 'Implementation Plan',
    5: 'Algorithm Improvement: Kuramoto Model',
    6: 'Algorithm Improvement: Firefly Algorithm',
    7: 'Algorithm Improvement: Boids Model',
    8: 'Developing: Kuramoto',
    9: 'Development Process and Issues: Firefly Model',
    10: 'Developing: Boids',
  };
  const postEntries = {
    1: {
      title: 'Deciding on the topic.',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-media-grid" aria-label="Development log reference images">
          <figure class="post-media">
            <div class="post-image image-slot" data-placeholder="devlog-topic-blue-tears.webp">
              <img src="assets/placeholders/devlog-topic-blue-tears.webp" alt="Blue Tears reference">
            </div>
            <figcaption>Blue Tears, <a target="_blank" href="https://www.facebook.com/travelyam/posts/%E9%A6%AC%E7%A5%96%E8%97%8D%E7%9C%BC%E6%B7%9A%E7%B5%95%E7%BE%8E%E7%99%BB%E5%A0%B4-%E6%9C%9F%E9%96%93%E9%99%90%E5%AE%9A%E8%A2%AB%E7%BE%8E%E5%9C%8Bcnn%E5%88%97%E7%82%BA%E4%B8%96%E7%95%8C15%E5%A4%A7%E8%87%AA%E7%84%B6%E5%A5%87%E6%99%AF%E7%9A%84%E9%A6%AC%E7%A5%96%E8%97%8D%E7%9C%BC%E6%B7%9A%E6%AF%8F%E5%B9%B44-6%E6%9C%88%E4%BB%BD%E4%BE%86%E5%88%B0%E5%A4%A7%E7%88%86%E7%99%BC%E5%AD%A3%E7%AF%80%E5%95%A6%E6%98%A5%E5%A4%8F%E4%B9%8B%E9%9A%9B%E8%97%8D%E8%89%B2%E7%9A%84%E5%85%89%E8%8A%92%E9%96%83%E8%80%80%E5%9C%A8%E5%A4%A7%E6%B5%B7%E4%B9%8B%E4%B8%8A%E5%AF%A6%E5%9C%A8%E8%BF%B7%E4%BA%BA%E5%8F%88%E5%A4%A2%E5%B9%BB4-10%E6%9C%88/966791325622341/">Source</a></figcaption>
          </figure>
          <figure class="post-media">
            <div class="post-image image-slot" data-placeholder="devlog-topic-firefly.webp">
              <img src="assets/placeholders/devlog-topic-firefly.webp" alt="Firefly reference">
            </div>
            <figcaption>Firefly, <a href="https://news.ltn.com.tw/news/life/breakingnews/3491632" target="_blank">Source</a></figcaption>
          </figure>
        </div>

        <div class="post-body">
          <p>During one of our mid-to-late stage ideation discussions, we explored the possibility of visualizing natural bioluminescent effects. Team members brought up examples such as the "Blue Tears" phenomenon in Matsu, Taiwan, and seasonal firefly viewing activities in spring. While reviewing previous projects, we also found a team that had created a bioluminescence-themed project, named Bioluminescent Fluid Simulation (https://bioluminescent-fluid.github.io), focused on visual aesthetics, interaction, and algorithm optimization, which showed that this direction was both feasible and engaging as a project topic.</p>
          <p>In the end, we decided to focus on simulating firefly movement and blinking behavior, combined with wind-based interaction effects. We also began researching existing algorithms related to flight movement, firefly flashing behavior, and wind disturbance that could be applied and further optimized for the project.</p>
        </div>
      `,
    },
    2: {
      title: 'Looking into related algorithm',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
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
      `,
    },
    3: {
      title: 'Research on firefly behaviour',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body research-post">
          <p>Based on the analysis of the Photinus Carolinus firefly in the thesis "Self-organization in natural swarms of Photinus carolinus synchronous fireflies" (doi: https://doi.org/10.1126/sciadv.abg9259), we identified several behaviors missing from existing models:</p>

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
      `,
    },
    4: {
      title: 'Implementation Plan',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body implementation-post">
          <p>We plan to use Unity to build our firefly simulation, in order to focus on the coordination of the algorithms rather than on rendering. We will divide the fireflies into two types: male and female. Male fireflies will use the Kuramoto model to simulate periodic flashing, and the Boids model to simulate their flight movement. Female fireflies will show weak random flashes and use the Firefly Algorithm to move toward male fireflies.</p>

          <p>Based on the final result, we expect to see the following effects:</p>
          <ul class="research-list implementation-list">
            <li>Male fireflies flash in a cycle while moving across the screen, creating a wave-like light effect.</li>
            <li>Male fireflies move according to the Boids model.</li>
            <li>During the males' flashing cycles, female fireflies move slowly toward a target male, choosing based on both the shortest distance and the brightest light.</li>
            <li>When the user clicks anywhere on the screen, that point becomes the center of a disturbance, like a gust of wind. Nearby fireflies spread outward, and a noise model is used to make the motion look more natural.</li>
            <li>The user can adjust the number of fireflies. Based on the Kuramoto model, synchronized flashing will only start after the number reaches a certain level</li>
          </ul>
        </div>
      `,
    },
    5: {
      title: 'Algorithm Improvement: Kuramoto Model',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body improvement-post">
          <section class="algorithm-section">
            <h2>Goal of Improvement</h2>
            <p>Based on the synchronous firefly Photinus Carolinus.</p>
            <ol class="research-list nested-list">
              <li>Each flash lasts about 100 to 150 milliseconds and can repeat up to eight times in a row.</li>
              <li>When the number of active fireflies is below a critical density, their flashing is irregular and not synchronized.</li>
              <li>When the number of active fireflies reaches a critical density, the group shows burst-like synchronization lasting about 10 seconds.</li>
            </ol>
          </section>

          <section class="timeline-section">
            <h3>At 0 s</h3>
            <p>A small number of fireflies start flashing together, usually concentrated in a specific area such as the base of a ridge</p>
            <h3>From 0 to 10 s</h3>
            <p>The flashing spreads upward from the ridge at about 0.5 m/s, forming a wave-like pattern (not fully synchronized; signals have delays)</p>
            <p>The flashing frequency is once every 0.55 s. Each flash lasts 100-150 ms and can repeat up to 8 times (after 8 flashes, they stop for that burst)</p>
            <h3>At 10 s</h3>
            <p>The signal has reached farther areas, and the number of flashing fireflies decreases.</p>
            <h3>From 10 to 12 s</h3>
            <p>No flashing, until the next cycle begins after 12 s.</p>
          </section>

          <section class="algorithm-section">
            <h2>Blasting Setting</h2>
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
            <h3>Density condition</h3>
            <p>Let N' be the critical density:</p>
            <ul class="research-list">
              <li>When N &lt; N': K ≈ 0, indicating almost no coupling, so each firefly flashes according to its own cycle.</li>
              <li>When N ≥ N': synchronized flashing begins.</li>
            </ul>
          </section>

          <section class="algorithm-section">
            <h3>Individual flashing cycle</h3>
            <p>Let θᵢ be in the range [0, 2π), representing the phase of firefly i</p>
            <ul class="research-list">
              <li>ωᵢ = 2π / 0.55 s.</li>
              <li>When θᵢ reaches a certain value, a flash is triggered, lasting about 0.1 to 0.15 s.</li>
            </ul>
          </section>

          <section class="algorithm-section">
            <h3>Group-flashing cycle</h3>
            <p>Let T be global time, and let g(T) be the on/off function for flashing. g(11) = 0 and g(12) = 0, which makes Δθᵢ = 0, so flashing stops for 2 seconds</p>
            <figure class="formula-media">
              <div class="formula-image formula-image-compact image-slot" data-placeholder="devlog-improvement-g-function.webp">
                <img src="assets/placeholders/devlog-improvement-g-function.webp" alt="Group flashing on off function">
              </div>
            </figure>
          </section>

          <section class="algorithm-section">
            <h3>Spatial propagation delay</h3>
            <p>Let dᵢ be the distance of firefly i from the starting point. After the group flashing cycle begins, firefly i starts its first flash after dᵢ / 0.5 seconds. Let p(T) be the spatial propagation gating function</p>
            <figure class="formula-media">
              <div class="formula-image formula-image-compact image-slot" data-placeholder="devlog-improvement-p-function.webp">
                <img src="assets/placeholders/devlog-improvement-p-function.webp" alt="Spatial propagation gating function">
              </div>
            </figure>
          </section>

          <section class="algorithm-section">
            <h3>Other Conditions</h3>
            <p>Each individual flashes at most 8 times per global cycle: Introduce an additional variable aᵢ; the flashing function is only active when aᵢ &lt; 8.</p>
          </section>

          <section class="algorithm-section">
            <h2>Final Function</h2>
            <figure class="formula-media">
              <div class="formula-image final-formula-image image-slot" data-placeholder="devlog-improvement-final-function.webp">
                <img src="assets/placeholders/devlog-improvement-final-function.webp" alt="Final improved Kuramoto function">
              </div>
            </figure>
          </section>
        </div>
      `,
    },
    6: {
      title: 'Algorithm Improvement: Firefly Algorithm',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body firefly-algorithm-post">
          <p>After implementing the original Firefly Algorithm, we found that the default behavior caused all fireflies to attract each other continuously, which did not reflect the mating behavior of real fireflies.</p>
          <p>To better simulate natural firefly behavior, we redesigned the attraction mechanism into a gender-based interaction model.</p>

          <section class="algorithm-section">
            <h2>Female-only attraction</h2>
            <p>In the original Firefly Algorithm, every firefly can attract other fireflies. In this project, only female fireflies perform attraction-based movement, while males act as attraction sources.</p>
          </section>

          <section class="algorithm-section">
            <h2>Only attracted to glowing males</h2>
            <p>Instead of comparing all fireflies equally, females only respond to males that are currently brighter than themselves. If no glowing male is available, females wander randomly rather than being constantly pulled by surrounding agents.</p>
          </section>

          <section class="algorithm-section">
            <h2>Distance-based attraction decay</h2>
            <p>The project preserves the original attraction decay concept. Males that are farther away produce weaker attraction, making movement more gradual and natural.</p>
          </section>

          <section class="algorithm-section">
            <h2>Single-target attraction</h2>
            <p>The original algorithm often combines attraction forces from multiple fireflies at the same time. In this project, females choose the male with the strongest attraction value as their target. This prevents movement directions from conflicting and creates clearer flight behavior.</p>
          </section>

          <section class="algorithm-section">
            <h2>Searching and Hovering behavior</h2>
            <p>The original Firefly Algorithm mainly focuses on attraction and random movement. This project adds two female movement states.</p>
            <h3>Searching</h3>
            <p>Females actively search for glowing males.</p>
            <h3>Hovering</h3>
            <p>After approaching a male, females no longer chase directly and instead hover nearby using random movement and a weak pull toward the nearest male. This creates more believable mating behavior instead of particle-like motion.</p>
          </section>
        </div>
      `,
    },
    7: {
      title: 'Algorithm Improvement: Boids Model',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body boids-post">
          <p>After deciding to use the FA algorithm to simulate the movement of firefly groups, we discovered a problem: <strong><em>The FA always causes the fireflies to gather into small clusters over time, regardless of any parameter adjustments.</em></strong> It only changes the speed and number of the clusters.</p>

          <p>In order to more accurately simulate the morphological characteristics of the natural firefly colonies, we intend to adopt the Boids model proposed by Reynolds in 1987. The Boids model was originally designed to simulate the movement of high-dynamic, streamlined animal groups such as flocks of birds and schools of fish. However, we discovered that by adjusting the relevant parameters of speed, we could also make up for the shortcomings of FA.</p>

          <p>Boids Model has three important rules:</p>

          <section class="algorithm-section">
            <h3>Collision Avoidance</h3>
            <p>Avoid colliding with nearby companions. This is a repulsive force that ensures there is sufficient space for survival among individuals.</p>
          </section>

          <section class="algorithm-section">
            <h3>Velocity Matching</h3>
            <p>Attempt to match the flight speed and direction of nearby companions. This is a predictive collision avoidance mechanism that enables the group to maintain a "polarization" state where everyone moves in unison.</p>
          </section>

          <section class="algorithm-section">
            <h3>Flock Centering</h3>
            <p>Try to move towards the center (centroid) of nearby companions. This ensures that the group does not fall apart and allows the group to naturally split and reaggregate when encountering obstacles.</p>
          </section>
        </div>
      `,
    },
    8: {
      title: 'Developing: Kuramoto',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body developing-post">
          <figure class="developing-media">
            <div class="developing-image image-slot" data-placeholder="devlog-developing-kuramoto.gif">
              <img src="assets/placeholders/devlog-developing-kuramoto.gif" alt="Kuramoto development simulation preview">
            </div>
          </figure>

          <p>Since the implementer is more familiar with JavaScript, we decided to simulate the mechanism using JavaScript under object-oriented structure, and transfer the code into C# in Unity.</p>

          <section class="algorithm-section">
            <h2>Update Frequency and Parameter Adjustment</h2>
            <p>At the beginning, the simulation ran too quickly because the program used a while (true) infinite loop, making the changes difficult to observe. We later used FPS to control the update frequency and introduced dt to represent the simulation step size, initially using dt = 1 / FPS for testing.</p>
            <p>We also found that increasing the coupling parameter K too much made the system more unstable instead of more synchronized. This was caused by unstable numerical updates, such as large dt values or excessive phase changes in a single update step.</p>
          </section>

          <section class="algorithm-section">
            <h2>Period Control: Global Time vs Individual Time</h2>
            <p>At first, we used global time to control the flashing cycle of the entire firefly swarm, such as flashing for the first 10 seconds and resting for the next 2 seconds. However, after adding propagation delay, we found this approach to be unreasonable because fireflies farther from the origin might not have started flashing before the entire active cycle had already ended.</p>
            <p>We also found that when the cycle switched, all fireflies would suddenly light up at the same time instead of re-entering according to their own delays. We later revised the system so that global time was only used as the reference for simulation progression and propagation calculation, while each firefly's flashing cycle started from the moment that individual firefly became activated. In other words, each firefly was given its own local timer.</p>
            <p>This ensured that the fireflies entered the flashing cycle according to their own delays and could complete their own flashing periods independently. Global time answered the question of whether the signal had reached a firefly, while individual time determined the current progress of that firefly's own flashing cycle.</p>
          </section>

          <section class="algorithm-section">
            <h2>Transition into the Unity Project</h2>
            <p>After converting the system into C# and importing it into Unity, the simulation became a 3D scene. The original propagation direction used in the web simulation was changed so that the flashing spread from fireflies closer to the camera toward those farther away.</p>
            <p>Since the Unity project already separated male and female fireflies, the Kuramoto model was only applied to the male fireflies.</p>
          </section>
        </div>
      `,
    },
    9: {
      title: 'Development Process and Issues: Firefly Model',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body issues-post">
          <section class="algorithm-section">
            <h2>Scene Lighting Adjustment in Unity</h2>
            <p>At the beginning, the Unity scene was set during daytime, so the non-glowing fireflies appeared as gray dots and did not look like actual fireflies. The glow effect was also not very visible. To solve this, we changed the firefly material to a black material and removed the scene light source in Unity so that the glow effect became more visible.</p>
          </section>

          <section class="algorithm-section">
            <h2>Firefly Density and Camera Adjustment</h2>
            <p>We adjusted the number of fireflies and the camera position so that the scene would not look too empty or too crowded.</p>
          </section>

          <section class="algorithm-section">
            <h2>Female Firefly Movement Speed</h2>
            <p>At the beginning, we adjusted the movement speed of the female fireflies when they moved toward the males. If the speed was too fast, the movement effect became difficult to see because the fireflies appeared to move instantly to their target.</p>
          </section>

          <section class="algorithm-section">
            <h2>Randomized Firefly Movement</h2>
            <p>While the fireflies were moving, we added a small amount of randomness to their movement so they would not fly in completely straight lines, making them look more like real fireflies.</p>
          </section>

          <section class="algorithm-section">
            <h2>Distance Between Fireflies</h2>
            <p>We added a distance limit between fireflies. Once they reached a certain distance, they would only move randomly instead of continuing to move closer. This prevented multiple fireflies from gathering and overlapping at the same point, which looked physically unrealistic.</p>
          </section>

          <section class="algorithm-section">
            <h2>Light Absorption Rate Adjustment</h2>
            <p>We adjusted the light absorption rate parameter because otherwise all of the fireflies would gather in the same area.</p>
          </section>
        </div>
      `,
    },
    10: {
      title: 'Developing: Boids',
      date: 'May 24, 2024',
      datetime: '2024-05-24',
      content: `
        <div class="post-body boids-developing-post">
          <section class="algorithm-section">
            <h2>Boids Algorithm and Wind Disturbance</h2>
            <p>We first implemented a boids algorithm with alignment, cohesion, and separation behaviors to control the movement of the male fireflies. We also implemented Perlin noise wind field interference.</p>
          </section>

          <section class="algorithm-section">
            <h2>Bounding Box</h2>
            <p>We added a bounding box to limit the movement of the male fireflies within the visible camera area. When the fireflies moved outside the boundary, a rebound force was applied.</p>
          </section>

          <section class="algorithm-section">
            <h2>Boids Parameter Adjustment</h2>
            <p>We adjusted the boids parameters by increasing the separation weight so that the male fireflies would not gather too closely together. We also increased the alignment radius so that the male fireflies could still maintain synchronized movement at longer distances. This gave the swarm a stronger sense of structure.</p>
          </section>

          <section class="algorithm-section">
            <h2>Female Firefly Movement Logic</h2>
            <p>The female fireflies always gathered into a single cluster because their movement direction was calculated based on the combined attraction force of all male fireflies. As a result, all females moved toward the point with the lowest attraction potential in the swarm. To solve this, we changed the female movement logic from "moving toward all males brighter than themselves" to "moving toward the brightest male firefly."</p>
          </section>

          <section class="algorithm-section">
            <h2>Hover Radius and Parameter Adjustment</h2>
            <p>After the change, the female fireflies still showed clustering behavior. We found that the hover radius was set too large, causing the females to remain in the hover state and become unwilling to move. We then readjusted the radius parameters in both the boids system and the firefly algorithm, and increased the weakPullCoefficient so that the females could better keep up with the males.</p>
          </section>
        </div>
      `,
    },
  };

  function markMissingImage(img) {
    const slot = img.closest('.image-slot');
    if (!slot) return;
    slot.classList.add('image-missing');
  }

  document.querySelectorAll('.image-slot img').forEach((img) => {
    if (img.classList.contains('wing-closed')) {
      img.addEventListener('error', () => img.classList.add('frame-missing'));
      return;
    }

    if (img.complete && img.naturalWidth === 0) {
      markMissingImage(img);
    }

    img.addEventListener('error', () => markMissingImage(img));
    img.addEventListener('load', () => {
      const slot = img.closest('.image-slot');
      if (slot) slot.classList.remove('image-missing');
    });
  });

  function watchImageSlots(scope) {
    scope.querySelectorAll('.image-slot img').forEach((img) => {
      if (img.classList.contains('wing-closed')) {
        img.addEventListener('error', () => img.classList.add('frame-missing'));
        return;
      }

      if (img.complete && img.naturalWidth === 0) {
        markMissingImage(img);
      }

      img.addEventListener('error', () => markMissingImage(img));
      img.addEventListener('load', () => {
        const slot = img.closest('.image-slot');
        if (slot) slot.classList.remove('image-missing');
      });
    });
  }

  function buildCounter(counter, value) {
    counter.textContent = '';
    counter.setAttribute('aria-live', 'off');

    String(value)
      .padStart(7, '0')
      .split('')
      .forEach((digit) => {
        const digitEl = document.createElement('span');
        const strip = document.createElement('span');
        const numericDigit = Number(digit);
        const position = digitStartCycle * 10 + numericDigit;

        digitEl.className = 'counter-digit';
        strip.className = 'counter-digit-strip';
        strip.dataset.position = String(position);
        strip.dataset.digit = String(numericDigit);

        for (let cycle = 0; cycle < digitRepeatCycles; cycle += 1) {
          for (let index = 0; index <= 9; index += 1) {
            const number = document.createElement('span');
            number.textContent = index;
            strip.appendChild(number);
          }
        }

        digitEl.appendChild(strip);
        counter.appendChild(digitEl);
        strip.style.transition = 'none';
        strip.style.transform = `translateY(-${position}em)`;

        requestAnimationFrame(() => {
          strip.style.transition = '';
        });
      });
  }

  function renderCounter(counter, value) {
    const digits = String(value).padStart(7, '0').slice(-7).split('');
    const strips = counter.querySelectorAll('.counter-digit-strip');

    digits.forEach((digit, index) => {
      const strip = strips[index];
      const nextDigit = Number(digit);
      const currentDigit = Number(strip.dataset.digit || '0');
      const currentPosition = Number(
        strip.dataset.position || String(digitStartCycle * 10),
      );
      const steps = (nextDigit - currentDigit + 10) % 10;
      let nextPosition = currentPosition + steps;

      if (nextPosition > (digitRepeatCycles - 4) * 10) {
        const resetPosition = digitStartCycle * 10 + currentDigit;
        strip.style.transition = 'none';
        strip.style.transform = `translateY(-${resetPosition}em)`;
        strip.dataset.position = String(resetPosition);
        nextPosition = resetPosition + steps;

        requestAnimationFrame(() => {
          strip.style.transition = '';
          strip.style.transform = `translateY(-${nextPosition}em)`;
        });
      } else if (steps > 0) {
        strip.style.transform = `translateY(-${nextPosition}em)`;
      }

      strip.dataset.position = String(nextPosition);
      strip.dataset.digit = String(nextDigit);
    });

    counter.setAttribute('aria-label', `Visitor count ${digits.join('')}`);
  }

  const visitorCounters = document.querySelectorAll('.visitor-counter');

  visitorCounters.forEach((counter) => {
    buildCounter(counter, fixedVisitorCount);
    renderCounter(counter, fixedVisitorCount);
  });

  const postTitle = document.querySelector('[data-post-title]');
  const postDate = document.querySelector('[data-post-date]');
  const postContent = document.querySelector('[data-post-content]');

  if (postTitle && postContent) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || '1';
    const post = postEntries[id] || postEntries['1'];

    postTitle.textContent = post.title;
    if (postDate) {
      postDate.textContent = post.date;
      postDate.setAttribute('datetime', post.datetime);
    }
    postContent.innerHTML = post.content;
    watchImageSlots(postContent);
  }
})();
