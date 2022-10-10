import { createContext,useState } from "react";

const tripContext = createContext();

export const TripProvider = ({ children }) => {
    const [trips, setTrips] = useState([])
    const tripsFeed = (data) => {
        setTrips(data)
    }
 
    return (
        <tripContext.Provider value={{ trips, tripsFeed }}>
            {children}
        </tripContext.Provider>
    )
}

export default tripContext;

//https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7256029-partagez-vos-donnees-avec-le-contexte-et-usecontext

