import React from "react";
import { FaHouseFlag } from "react-icons/fa6";

export const HeroBanner = () => {
    return (
        <>
            <section className="sec hero-banner">
                <div className="container">
                    <div className="grid grid-cols-12 items-center p-8 gap-5">
                        <div className="col-span-12 lg:col-span-6 space-y-4">
                            <span className="k-text">Fetch. Learn. Discover.</span> 
                            <h1 className="h1">Explore Flags from Every Corner By Uncover Fascinating Country Facts!</h1>
                            <p>
                                Dive into a colorful journey across the globe! With just a click, discover fascinating details about countries — from their flags, names, and capitals to languages, population, and more. Whether you're a curious explorer or a geography enthusiast, this app helps you learn about countries in a fun, visual way.
                            </p>
                            <div className="hstack">
                                <a href="/" className="btn-order">Tour With Us</a>
                                <a href="/country" className="btn-live">Let's Get Started <FaHouseFlag /></a>
                            </div>
                        </div>
                        <div className="align-img col-span-12 lg:col-span-6">
                            <img
                            className="mx-auto mlr-lg-0 block"
                            src="/fascinating-country-facts.jpg"
                            alt="Fascinating Country Facts"
                            title="Fascinating Country Facts"
                            width={508}
                            height={307}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}