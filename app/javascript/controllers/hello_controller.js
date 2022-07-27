import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['mymenu', 'menu1', 'menu2', 'menu3', 'menu4', 'menu1level2', 'menu2level2', 'menu3level2', 'menu4level2'];

  connect() {
    //this.element.textContent = "Hello World!"
  }

  initialize() {
    var level1menu = {"data":
      [
        { "id": "4",
          "text": "About us",
          "order": "21",
          "parentId": "0",
          "action": "getMenu1",
          "name": "menu1" },
        { "id": "5",
          "text": "Products",
          "order": "25",
          "parentId": "0",
          "action": "getMenu2",
          "name": "menu2" },
        { "id": "13",
          "text": "News Center",
          "order": "33",
          "parentId": "0",
          "action": "getMenu3",
          "name": "menu3" },
        { "id": "17",
          "text": "Contact us",
          "order": "36",
          "parentId": "0",
          "action": "getMenu4",
          "name": "menu4" }
      ]
    };

    for (var prop in level1menu.data) {
        var currentJSONObject = level1menu.data[prop];
        var div = document.createElement("div");
        var anchor = document.createElement("a");
        anchor.appendChild(document.createTextNode(currentJSONObject.text));
        anchor.setAttribute("class", "navbar-link");
        div.setAttribute("class", "navbar-item has-dropdown is-hoverable");
        div.setAttribute("data-hello-target", currentJSONObject.name);
        div.appendChild(anchor);
        this.mymenuTarget.appendChild(div);
    }

    this.getMenu1();
    this.getMenu2();
    this.getMenu3();
    this.getMenu4();
  }

  genMenuHeader(divName, targetName) {
    var div = document.createElement("div");
    div.setAttribute("data-hello-target", divName);
    div.setAttribute("class", "navbar-dropdown");

    targetName.appendChild(div);
  }

  genMenuBody(menuData, targetName) {
    for (var prop in menuData.data) {
    var currentJSONObject = menuData.data[prop];
        var anchor = document.createElement("a");
        anchor.appendChild(document.createTextNode(currentJSONObject.text));
        anchor.setAttribute("href", currentJSONObject.href);
        anchor.setAttribute("class", "navbar-item");

        targetName.appendChild(anchor);
    }

  }

  getMenu1() {
    var level2menu1 = {"data":
      [
        { "id": "2",
          "text": "enterprise profile",
          "order": "22",
          "parentId": "4",
          "href": "About-profile" },
        { "id": "3",
          "text": "enterprise qualifications",
          "order": "23",
          "parentId": "4",
          "href": "About-qualifications" },
        { "id": "14",
          "text": "technology innovations",
          "order": "23",
          "parentId": "4",
          "href": "About-innovations" }
      ]
    };

    this.genMenuHeader("menu1level2", this.menu1Target);
    this.genMenuBody(level2menu1, this.menu1level2Target);
  }

  getMenu2() {
    var level2menu2 = {"data":
      [
        { "id": "6",
          "text": "THDS",
          "order": "26",
          "parentId": "5",
          "href": "Product-THDS" },
        { "id": "7",
          "text": "AEI",
          "order": "27",
          "parentId": "5",
          "href": "Product-AEI" },
        { "id": "8",
          "text": "TFDS",
          "order": "28",
          "parentId": "5",
          "href": "Product-TFDS" },
        { "id": "9",
          "text": "TADS",
          "order": "29",
          "parentId": "5",
          "href": "Product-TADS" },
        { "id": "10",
          "text": "ATC",
          "order": "30",
          "parentId": "5",
          "href": "Product-ATC" },
        { "id": "11",
          "text": "CHB",
          "order": "31",
          "parentId": "5",
          "href": "Product-CHB" },
        { "id": "12",
          "text": "HMIS",
          "order": "32",
          "parentId": "5",
          "href": "Product-HMIS" }
      ]
    };

    this.genMenuHeader("menu2level2", this.menu2Target);
    this.genMenuBody(level2menu2, this.menu2level2Target);
  }

  getMenu3() {
    var level2menu3 = {"data":
      [
        { "id": "15",
          "text": "company news",
          "order": "34",
          "parentId": "13",
          "href": "Company-news" },
        { "id": "16",
          "text": "company notice",
          "order": "35",
          "parentId": "13",
          "href": "Company-notice" }
      ]
    };

    this.genMenuHeader("menu3level2", this.menu3Target);
    this.genMenuBody(level2menu3, this.menu3level2Target);
  }

  getMenu4() {
    var level2menu4 = {"data":
      [
        { "id": "18",
          "text": "Foreign Cooperation Dept.",
          "order": "37",
          "parentId": "17",
          "href": "Contact-Foreign Cooperation" },
        { "id": "19",
          "text": "Infrared Dept.",
          "order": "38",
          "parentId": "17",
          "href": "Contact-Infrared" },
        { "id": "20",
          "text": "Vehicle Number Dept.",
          "order": "39",
          "parentId": "17",
          "href": "Contact-Vehicle Number" },
        { "id": "21",
          "text": "Urban Rail Transport Dept.",
          "order": "40",
          "parentId": "17",
          "href": "Contact-Urban Rail Transport" }
      ]
    };


    this.genMenuHeader("menu4level2", this.menu4Target);
    this.genMenuBody(level2menu4, this.menu4level2Target);
  }
}
