export const Footer = () => {
    return (
        <>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <h3>
                        <span>God Swords</span>
                    </h3>

                    <p class="footer-links">
                        <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
                        <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">God Swords © 2022</p>

                    <div class="footer-icons">
                        <a href="https://www.facebook.com/">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/">
                            <i class="fa fa-github"></i>
                        </a>
                    </div>
                </div>

                <div class="footer-right">
                    <p>Contact Us</p>

                    <form action="#" method="post">
                        <input type="text" name="email" placeholder="Email"></input>
                        <textarea name="message" placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </footer>
        </>
    );
};
