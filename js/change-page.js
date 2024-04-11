export function changePages() {
  const { pathname } = window.location;
  const { body } = document;
  const page = document.querySelectorAll(".page");

  function pageHomeSelected() {
    body.className = "home";
    page[0].classList.add("slected");
    page[1].classList.remove("selected");
    page[2].classList.remove("selected");
  }

  function pageUniverseSelected() {
    body.className = "universe";
    page[0].classList.remove("slected");
    page[1].classList.add("selected");
    page[2].classList.remove("selected");
  }

  function pageExplorationSelected() {
    body.className = "exploration";
    page[0].classList.remove("slected");
    page[1].classList.remove("selected");
    page[2].classList.add("selected");
  }

  switch (pathname) {
    case "/":
      pageHomeSelected();
      break;

    case "/universe":
      pageUniverseSelected();
      break;

    case "/exploration":
      pageExplorationSelected();
      break;

    default:
      body.className = "error";
      break;
  }
}
