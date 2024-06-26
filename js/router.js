import { changePages } from "./change-page.js";

export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    setTimeout(() => {
      const { pathname } = window.location;
      const route = this.routes[pathname] || this.routes[404];
      changePages();
      fetch(route)
        .then((data) => data.text())
        .then((html) => {
          document.querySelector("#app").innerHTML = html;
        });
    }, 50);
  }
}
