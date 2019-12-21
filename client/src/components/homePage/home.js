import React, { Component } from 'react';

//   Componentes!!

import Mytinerary from './mytineraryFolder/mytinerary';
import Carousel from './carouselFolder/carousel';
import Navbar from './navFolder/nav';
import Flecha from './flecha/flecha';

class home extends Component {

    render() {
        return <React.Fragment>
            <header>
                <Navbar />
                <Mytinerary />
            </header>
            <section>
                <article>
                    <Flecha />
                </article>
                <article>
                    <Carousel />
                </article>
            </section>
        </React.Fragment>
    }
}

export default home;