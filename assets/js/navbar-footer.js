/**
 * Navbar and Footer Components
 * These functions generate consistent navbar and footer HTML
 * Note: In a real production environment, you would use a template engine or include system
 * This is a helper for development - in production, embed the HTML directly in each page
 */

function getNavbar() {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand fw-bold" href="home-1.html"><i class="bi bi-building"></i> ConsultPro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="home-1.html">Home – General Services</a></li>
                            <li><a class="dropdown-item" href="home-2.html">Home – Niche / SaaS</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <div class="d-flex align-items-center">
                    <a href="login.html" class="nav-link me-3">Login</a>
                    <a href="register.html" class="nav-link me-3">Register</a>
                    <button class="theme-toggle" aria-label="Toggle dark mode"></button>
                    <button class="rtl-toggle" aria-label="Toggle RTL"></button>
                    <a href="contact.html" class="btn btn-primary ms-3">Get Consultation</a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

function getFooter() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <h5>ConsultPro</h5>
                    <p>Transforming businesses through expert consulting and strategic guidance.</p>
                    <div class="d-flex gap-3 mt-3">
                        <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                        <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Our Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h5>Services</h5>
                    <ul class="list-unstyled">
                        <li><a href="service-details.html">Strategic Planning</a></li>
                        <li><a href="service-details.html">Financial Advisory</a></li>
                        <li><a href="service-details.html">Operations Optimization</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h5>Contact Info</h5>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-geo-alt"></i> 123 Business St, City, Country</li>
                        <li><i class="bi bi-telephone"></i> +1 (555) 123-4567</li>
                        <li><i class="bi bi-envelope"></i> info@consultpro.com</li>
                    </ul>
                </div>
            </div>
            <hr class="my-4" style="border-color: var(--border-color);">
            <div class="row">
                <div class="col-md-6"><p class="mb-0">&copy; 2024 ConsultPro. All rights reserved.</p></div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-muted me-3">Privacy Policy</a>
                    <a href="#" class="text-muted">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

