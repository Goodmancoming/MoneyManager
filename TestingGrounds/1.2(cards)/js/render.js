// js/render.js
export function renderTimeline(timelineData, containerSelector = "#timeline") {
  const timelineEl = document.querySelector(containerSelector);

  timelineData.forEach((item, index) => {
    const container = document.createElement("div");
    container.className = `container ${item.side}-container`;
    container.style.animationDelay = `${index}s`;

    container.innerHTML = `
      <div class="textbox">
        <h2>${item.company}</h2>
        <small>${item.date}</small>
        <p>${item.description}</p>
        <span class="${item.side}-container-arrow"></span>
      </div>
    `;

    timelineEl.appendChild(container);
  });
}
