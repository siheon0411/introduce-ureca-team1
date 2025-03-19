/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// js/scripts.js

(function () {
    // 검색 기능 요소들이 존재하는 경우에만 실행
    const searchInput = document.getElementById("search-input");
    const suggestionsContainer = document.getElementById("search-suggestions");
    const searchForm = document.getElementById("search-form");

    if (searchInput && suggestionsContainer && searchForm) {
        // 검색 대상 멤버 목록 (필요시 수정)
        const members = [
            { id: "이희용", name: "이희용 [조장]" },
            { id: "김시헌", name: "김시헌" },
            { id: "김지산", name: "김지산" },
            { id: "신혜원", name: "신혜원" },
            { id: "이재윤", name: "이재윤" },
            { id: "임민서", name: "임민서" }
        ];

        searchInput.addEventListener("input", function () {
            const query = this.value.trim();
            suggestionsContainer.innerHTML = "";
            if (!query) {
                suggestionsContainer.style.display = "none";
                return;
            }
            const matches = members.filter(member => member.name.includes(query));
            if (matches.length > 0) {
                suggestionsContainer.style.display = "block";
                matches.forEach(member => {
                    const a = document.createElement("a");
                    a.href = "profile.html?id=" + member.id;
                    a.textContent = member.name;
                    suggestionsContainer.appendChild(a);
                });
            } else {
                suggestionsContainer.style.display = "none";
            }
        });

        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            const matches = members.filter(member => member.name.includes(query));
            if (matches.length > 0) {
                window.location.href = "profile.html?id=" + matches[0].id;
            }
        });

        document.addEventListener("click", function (e) {
            if (!searchForm.contains(e.target)) {
                suggestionsContainer.style.display = "none";
            }
        });
    }
})();
