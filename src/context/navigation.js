import {createContext, useState, useEffect} from "react";


const NavigationContext = createContext();

function  NavigationProvider({children}) {

    useEffect(()=>{
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler)
        }

    }, []);

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurrentPath(to);
    }

    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
}

export default NavigationContext;
export {NavigationProvider}
