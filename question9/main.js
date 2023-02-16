function createTooltip(element, text) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = text;

  element.addEventListener("mouseenter", () => {
    const elementRect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    const top = elementRect.top - tooltipRect.height - 5;
    const left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;

    if (top < 0) {
      tooltip.style.top = `${elementRect.bottom + 5}px`;
      tooltip.classList.add("bottom");
    } else {
      tooltip.style.top = `${top}px`;
      tooltip.classList.remove("bottom");
    }

    tooltip.style.left = `${left}px`;
    document.body.appendChild(tooltip);
  });

  element.addEventListener("mouseleave", () => {
    document.body.removeChild(tooltip);
  });
}

const element = document.querySelector("#my-element");
const text = "This is a tooltip";
createTooltip(element, text);
