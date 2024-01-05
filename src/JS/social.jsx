const links = {
        Github: "https://github.com/Aaditya-Singh78",
        Linkedin: 'https://www.linkedin.com/in/aadi-singh/',
        Twitter: 'https://twitter.com/__Aadityasingh',
        Mails: 'mailto:aaditya.out@gmail.com'
    }

let icons = {
        Github:'https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-256.png',
        Linkedin: 'https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-64.png',
        Twitter: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-64.png',
        Mails: 'https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-64.png'
    }

    const items = [
        {acc:links.Github,rep:icons.Github},
        {acc:links.Linkedin,rep:icons.Linkedin},
        {acc:links.Twitter,rep:icons.Twitter},
        {acc:links.Mails,rep:icons.Mails}
    ];

    const listItem = items.map(items => 
            <li>
                <a href={items.acc}>
                    <img src={items.rep} alt="" width={25.0} height={25.0}/>
                </a>
            </li>
        )

    const para =
        <li>
            <p className='italic font-bold' >&#169; 2023, crafted with &#128640; by Aaditya Singh</p>
        </li>
        
export default function Social(){
    return(
        <div className='m-0.5 p-1 flex-auto items-center justify-end footer'>
            <div className='order-2 grow'>    
                <ul className='flex space-x-4 justify-end'> 
                   {listItem}
                </ul>
            </div>
            <div className='order-1 grow'>
                <ul>
                    {para}
                </ul>
            </div> 
        </div>
    );
}