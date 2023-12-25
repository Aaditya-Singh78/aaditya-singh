import logo from '../../public/icon/logo.png';
import "../CSS/index.css"

export default function Navbar() {
  let CurrentTheme = window.matchMedia;
  let symbol;

  if (CurrentTheme('(prefers-color-scheme: dark)')) {
    symbol = (
      <img
        className="list-none"
        src="https://cdn3.iconfinder.com/data/icons/ui-10/512/shine-256.png"
        alt=""
        width={40.0}
        height={40.0}
      />
    );
  } else {
    symbol = (
      <img
        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-moon-256.png"
        alt=""
        width={40.0}
        height={40.0}
      />
    );
  }

  return (
    <nav className="bg-slate-500">
      <div className="static flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center">
            <img src={logo} alt="" width={40.0}
        height={40.0} />
          </a>
          <ul className=" flex space-x-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Article</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className="flex items-center">
            {symbol}
          </a>
        </div>
      </div>
    </nav>
  );
}
