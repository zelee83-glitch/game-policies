(function () {
  "use strict";
  var board = document.querySelector("[data-board]");
  if (board) {
    var colors = {1: "c1", 2: "c2", 3: "c3", 4: "c4", 5: "c5"};
    var cells = [
      "00001110","01201110","01200330","01220330",
      "04420330","04420550","04400550","00000550"
    ];
    cells.join("").split("").forEach(function (digit) {
      var cell = document.createElement("span");
      if (colors[digit]) cell.className = colors[digit];
      board.appendChild(cell);
    });
  }

  var catalog = document.querySelector("[data-game-catalog]");
  if (!catalog || !window.fetch) return;

  function element(tag, className, content) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (typeof content === "string") node.textContent = content;
    return node;
  }

  function safeRelative(path) {
    return typeof path === "string" && /^(?!\/|[a-z]+:)[a-z0-9_-]+\/(?:[a-z0-9_-]+\/)*[a-z0-9_.-]+$/i.test(path);
  }

  function buildCard(game) {
    if (!game || typeof game.name !== "string" || !safeRelative(game.detailUrl) || !safeRelative(game.icon)) return null;
    var card = element("article", "game-card");
    var art = element("div", "game-card-art");
    var picture = element("img", "game-icon");
    picture.src = game.icon;
    picture.alt = game.name + " app icon";
    picture.width = 112;
    picture.height = 112;
    art.appendChild(picture);
    card.appendChild(art);
    var body = element("div", "game-card-copy");
    body.appendChild(element("span", "badge mint", game.statusLabel || "Discover"));
    body.appendChild(element("h3", "", game.name));
    body.appendChild(element("p", "", game.shortDescription || ""));
    var tags = element("div", "pill-row");
    (Array.isArray(game.tags) ? game.tags.slice(0, 3) : []).forEach(function (tag) {
      if (typeof tag === "string") tags.appendChild(element("span", "pill", tag));
    });
    body.appendChild(tags);
    var link = element("a", "text-link", "Explore game →");
    link.href = game.detailUrl;
    body.appendChild(link);
    card.appendChild(body);
    return card;
  }

  fetch("games.json", {cache: "no-store"}).then(function (response) {
    if (!response.ok) throw new Error("Catalog unavailable");
    return response.json();
  }).then(function (data) {
    if (!data || !Array.isArray(data.games)) return;
    var cards = data.games.filter(function (game) {return game.visible === true;}).map(buildCard).filter(Boolean);
    if (cards.length) catalog.replaceChildren.apply(catalog, cards);
  }).catch(function () {
    /* Keep the accessible, static HTML fallback when offline or opened as file://. */
  });
}());
