import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App () {

    const handleClick = () => {
        console.log('Click!!!');
    };

    const handleEnter = () => {
        console.log('Enter!!!');
    };

    const handleLeave = () => {
        console.log('Leave!!!');
    };

    return <div>
        <div><Button className="mb-5" onClick={handleClick}>Plain!</Button></div>
        <div><Button success rounded outline onClick={handleClick}>
            <GoBell />
            Click me!
        </Button>
        </div>
        <div>
            <Button danger outline onMouseEnter={handleEnter}>
                <GoCloudDownload />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning onMouseLeave={handleLeave}>
                <GoDatabase />
                See Deal!
            </Button>
        </div>
        <div><Button warning outline>See Deal!</Button></div>
        <div><Button secondary rounded>Hide Ads!</Button></div>
        <div><Button primary outline>Something!</Button></div>
        <div><Button secondary outline>Something!</Button></div>
    </div>
}

export default App
