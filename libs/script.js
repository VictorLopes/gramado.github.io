function includeNavBar(){
    var elms = document.getElementsByTagName('div');
    for (i = 0; i < elms.length; i++) {
        var el = elms[i];
        var path = el.getAttribute("include-nav-bar");
        if (path) {
            var navbar = "<nav class='navbar navbar-default' role='navigation'>";
            navbar += "<div class='navbar-header'>";
            navbar += "<a class='navbar-brand' href='" + path + "/index.html'>Gramado</a>";
            navbar += "</div>";
            navbar += "<div>";
            navbar += "<ul class='nav navbar-nav'>";
            navbar += "<li><a href='" + path + "/products'>Products</a></li>";
            navbar += "<li><a href='" + path + "/services'>Services</a></li>";
            navbar += "<li><a href='" + path + "../partners'>Partners</a></li>";
            navbar += "<li><a href='" + path + "/community'>Community</a></li>";
            navbar += "<li><a href='" + path + "/about'>About</a></li>";
            navbar += "</ul>";
            navbar += "</div>";
            navbar += "</nav>";

            el.innerHTML = navbar;
            return;
        }
    }
}

includeNavBar();