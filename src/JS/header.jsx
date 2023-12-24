function Navbar(){
    return(
        <nav className="container mx-auto bg-white dark:bg-slate-800">
            <div>
                {/* logo image */}
                <a href="#">
                    <img src="" alt="" />
                </a>
                <div>
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">PROJECT</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">ARTICLE</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}