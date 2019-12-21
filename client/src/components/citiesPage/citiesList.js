import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cities.css';
import City from './city';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mostrarCiudades, filtro } from '../../redux/itinerarys/ciudades.actions';

class citiesList extends Component {

    handleSearch = (searchValue) => {
        this.props.filtro(searchValue);
        console.log(searchValue);
    }

    componentDidMount() {
        this.props.mostrarCiudades();
        const prueba1 = this.props;
        console.log(prueba1);
    }

    render() {

        const { searchValue } = this.props;
        console.log(searchValue);

        if (searchValue.length === 0) {
            this.handleSearch('');
        }

        return (
            <React.Fragment>
                <h1 className="text-center my-4">Cities List</h1>

                <input
                    className="form-control my-4"
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={this.props.searchValue}
                    onChange={(e) => this.handleSearch(e.target.value)}
                />

                <ul className="list-group listCities">
                    {this.props.visibleCiudades.map((city, index) => (
                        <City
                            key={index}
                            all={city}
                        />
                    ))}
                </ul>
                <Link to="/" className="imgHome position-absolute fixed-bottom"></Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    ciudades: state.ciudades.ciudades,
    searchValue: state.ciudades.searchValue,
    visibleCiudades: state.ciudades.visibleCiudades,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    mostrarCiudades,
    filtro
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(citiesList);