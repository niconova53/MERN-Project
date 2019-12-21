import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mostrarCiudad } from '../../redux/itinerarys/ciudades.actions';
import Itynerary from './itinerary';

class itineraryList extends Component {

    state = {
        itinerary: [],
        ciudad: ''
    }

    componentDidMount() {
        console.log(this.props.match.params);
        const { id } = this.props.match.params;
        this.props.mostrarCiudad(id);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        console.log(nextProps);

        const { ciudad } = nextProps.ciudad;
        console.log(ciudad);

        const { itinerary } = nextProps.ciudad;
        console.log(itinerary);

        this.setState({
            ciudad,
            itinerary
        });
    }

    render() {
        const { ciudad } = this.state;
        const { itinerary } = this.state;

        return (
            <React.Fragment>
                <h1>{ciudad}</h1>
                <h2 className="my-4">Available Mytineraries: </h2>
                <ul className="list-group itinerarysList">
                    {itinerary.map((itinerary, index) => (
                        <Itynerary
                            key={index}
                            all={itinerary}
                        />
                    ))}
                </ul>
                <Link to="/cities" className="imgBack position-absolute fixed-bottom ml-5 mb-2"></Link>
                <Link to="/" className="imgHome position-absolute fixed-bottom"></Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ciudad: state.ciudades.ciudad
})

export default connect(mapStateToProps, { mostrarCiudad })(itineraryList);