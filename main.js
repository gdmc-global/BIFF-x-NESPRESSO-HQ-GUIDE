// Lightweight scroll-spy: highlights the current section's
// entry in the on-page table of contents as the guest scrolls.
(function () {
  var sections = document.querySelectorAll(".category[id]");
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (!sections.length || !tocLinks.length) return;

  var map = {};
  tocLinks.forEach(function (a) {
    map[a.getAttribute("href").slice(1)] = a;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = map[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          tocLinks.forEach(function (a) { a.style.background = ""; });
          link.style.background = "var(--blush-soft)";
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();

// Schedule page: team-tab switcher rendering day columns from SCHEDULE data.
(function () {
  var tabs = document.getElementById("team-tabs");
  var columnsEl = document.getElementById("day-columns");
  if (!tabs || !columnsEl || typeof SCHEDULE === "undefined") return;

  var dayOrder = ["day0", "day1", "day2", "day3", "day4", "day5", "day6"];

  function renderTeam(teamKey) {
    var team = SCHEDULE[teamKey];
    if (!team) return;
    var html = "";
    dayOrder.forEach(function (dayKey) {
      var label = DAY_LABELS[dayKey];
      var items = team.days[dayKey] || [];
      html += '<div class="day-col">';
      html += '<div class="day-col__head"><span class="d-no">' + label.no + '</span><span class="d-date">' + label.date + '</span></div>';
      html += '<div class="day-col__body">';
      if (!items.length) {
        html += '<p class="day-empty">No schedule</p>';
      } else {
        items.forEach(function (item) {
          var cls = "sched-item" + (item.transfer ? " sched-item--transfer" : "");
          html += '<div class="' + cls + '">';
          if (item.time) html += '<div class="sched-item__time">' + item.time + '</div>';
          if (item.title) html += '<div class="sched-item__title">' + item.title + '</div>';
          if (item.location) html += '<div class="sched-item__loc">' + item.location + '</div>';
          html += '</div>';
        });
      }
      html += '</div></div>';
    });
    columnsEl.innerHTML = html;
  }

  tabs.addEventListener("click", function (e) {
    var btn = e.target.closest(".team-tab");
    if (!btn) return;
    tabs.querySelectorAll(".team-tab").forEach(function (b) {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderTeam(btn.dataset.team);
  });

  renderTeam("hq");
})();
