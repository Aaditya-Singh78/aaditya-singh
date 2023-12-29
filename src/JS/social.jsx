export default function Social(){
    return(
        <div className='m-0.5 p-1 flex-auto items-center justify-end footer'>
            <div className='order-2 grow'>    
                <ul className='flex space-x-4 justify-end'> 
                    <li>
                        <a href="https://github.com/Aaditya-Singh78">
                        <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-256.png" alt="" 
                        width={25.0} height={25.0} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aadi-singh/">
                    <img src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-64.png" alt="" 
                    width={25.0} height={25.0} />
                        </a> 
                    </li>
                    <li>
                        <a href="https://twitter.com/__Aadityasingh">
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-64.png" alt="" 
                    width={25.0} height={25.0}/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:aaditya.out@gmail.com">
                    <img src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-64.png" alt=""
                    width={25.0} height={25.0} />
                        </a>
                    </li>
                    </ul>
            </div>
            <div className='order-1 grow'>
                <ul>
                    <li>
                        <p className='italic font-bold' >&#169; 2023, crafted with &#128640; by Aaditya Singh</p>
                    </li>
                </ul>
            </div> 
        </div>
    );
}