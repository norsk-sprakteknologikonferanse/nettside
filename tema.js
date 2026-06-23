(function () {
    function oppdaterKnapper(tema) {
        document.querySelectorAll("button[data-velg-tema]").forEach(function (el) {
            el.setAttribute(
                "aria-pressed",
                el.getAttribute("data-velg-tema") === tema ? "true" : "false"
            );
        });
    }

    function settTema(tema) {
        document.documentElement.setAttribute("data-tema", tema);
        try {
            localStorage.setItem("tema", tema);
        } catch (e) {}
        oppdaterKnapper(tema);
    }

    document.querySelectorAll("[data-velg-tema]").forEach(function (el) {
        el.addEventListener("click", function () {
            var ønsket = el.getAttribute("data-velg-tema");
            var nåværende = document.documentElement.getAttribute("data-tema") || "lys";
            settTema(ønsket === nåværende ? "lys" : ønsket);
        });
    });

    oppdaterKnapper(document.documentElement.getAttribute("data-tema") || "lys");
})();
