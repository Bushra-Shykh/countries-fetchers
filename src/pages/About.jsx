import React from "react"
import countryFacts from "../api/countryData.json"
export const About = () => {
    return (
        <>
        <section className="about-page">
            <div className="container mx-auto">
                <h2 className="h2 text-center">Discover the World, One Country at a Time </h2>
                <p>Welcome to our platform, where curiosity meets knowledge. We bring you fascinating insights about countries across the globe — from population stats and capitals to birth rates and must-see destinations. Whether you're a student, traveler, or trivia enthusiast, our mission is to make learning about the world engaging and easy. Explore cultures, facts, and global highlights all in one place.</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {
                        countryFacts.map((country)=>{
                            return (
                                <div className="cards" key={country.id}>
                                    <h6 className="h6">Country Name : <span>  {country.countryName} </span>  </h6>
                                    <h6 className="h6">Capital : <span>{country.capital}</span> </h6>
                                    <h6 className="h6">Population : <span>{country.population}</span>  </h6>
                                    <h6 className="h6">B.R : <span>{country.birthRate}</span> </h6>
                                    <h6 className="h6">Attraction : <span>{country.popularAttraction}</span> </h6>
                                    <p> {country.interestingFact} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
    )
    
}
