const navi_template = `
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
                <li class="nav-item"><router-link to="/mysite/">Top</router-link></li>
                <li class="nav-item"><router-link to="/mysite/about">About</router-link></li>
                <li class="nav-item"><router-link to="/mysite/signup">Sign Up</router-link></li>
                <li class="nav-item"><router-link to="/mysite/signin">Sign In</router-link></li>
            </ul>
        </div>
    </div>
</nav>
`

const Navi = {
    template: navi_template,
}