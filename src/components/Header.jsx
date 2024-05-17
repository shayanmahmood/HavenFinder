import { useLocation, useNavigate } from "react-router";

function Header() {

  const location = useLocation()
  const navigate = useNavigate()

  function MatchPatch(route) {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer" onClick={() => navigate('/')} />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${MatchPatch('/') && `text-black border-b-red-500`}`} onClick={() => navigate('/')}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${MatchPatch('/offer') && `text-black border-b-red-500`}`} onClick={() => navigate('/offer')} >Offer</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${MatchPatch('/signIn') && `text-black border-b-red-500`}`} onClick={() => navigate('/signIn')}>signIn</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
