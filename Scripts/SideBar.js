function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "400px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "400px";
    }
}

function toggleCategories() {
    var categoryLinks = document.getElementById("categoryLinks");
    if (categoryLinks.style.display === "none") {
        categoryLinks.style.display = "block";
    } else {
        categoryLinks.style.display = "none";
    }
}