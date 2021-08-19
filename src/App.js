import "./style/tailwind.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="flex justify-center h-screen w-full bg-black">
      <div className="flex-column justify-center h-96 w-80 bg-gray-800 mt-24 rounded-lg relative">
        <div className="h-1/4 w-full flex justify-center border-b-2 border-green-500">
          <p className="font-bold text-green-500 p-2">Proggramer</p>
          <div className="h-20 w-20 rounded-full absolute top-14">
            <img
              src="https://lh3.googleusercontent.com/proxy/b3TIpAP_LDi2uxM5KNbo9bTTKHLxyFtEBbCeR7gUMGHE1p8by9seED49tPQcLA1WjLi6SRriuRV0xj3A7M8gY1QlhHFmkm6uqLQS-JvdGdCNk4QUONmtFQugqKUGHg"
              alt="logo"
            />
          </div>
        </div>
        <div className="h-auto flex-column">
          <p className="text-xs pt-12 flex justify-center text-center text-white">
            Łukasz Fijał
            <br />
            Front-end developer
          </p>
          <div className="flex-column w-full">
            <div className="flex items-center p-5">
              <div className="rounded-lg flex items-center justify-center w-8 h-8 bg-green-500 mr-3"><FontAwesomeIcon icon={faPhone} /></div>
              <p className="text-xs text-white">+48 123 456 789</p>
            </div>
            <div className="flex items-center p-5">
              <div className="rounded-lg flex items-center justify-center w-8 h-8 bg-green-500 mr-3"><FontAwesomeIcon icon={faEnvelope} /></div>
              <p className="text-xs text-white">email@example.com</p>
            </div>
            <div className="flex items-center p-5">
              <div className="rounded-lg flex items-center justify-center w-8 h-8 bg-green-500 mr-3"><FontAwesomeIcon icon={faUser} /></div>
              <p className="text-xs text-white">portfoliowebsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
