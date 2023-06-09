import React from 'react';

import './IranMap.css';

import CityModal from './CityModal';


class IranMap extends React.Component {
    state = {
        citiesData: null,
        selectedCity: null,
        isModalOpen: false,
    };

    cityClicked = (id) => (event) => {
        event.preventDefault();
        // Fetch city details and open modal
        fetch(`http://localhost:9000/cities/${id}`)
        .then(response => response.json())
        .then(data => {
        //   console.log(data)
          this.setState({
            selectedCity: data,
            isModalOpen: true
          })
        })
        .catch(error => {
          this.setState({
            error: error,
            isLoading: false
          })
        })
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };
    componentDidMount() {
        fetch('http://localhost:9000/cities')
          .then(response => response.json())
          .then(data => {
            // console.log(data)
            this.setState({
              citiesData: data,
              isLoading: false
            })
          })
          .catch(error => {
            this.setState({
              error: error,
              isLoading: false
            })
          })
      }

    render() {
        return (
            <div>
                <div className="map-container">
                    {(this.state.citiesData || []).map((record) => (
                        <div
                            key={record.id}
                            className="city-name"
                            style={{
                                top: `${record.top}%`,
                                left: `${record.left}%`,
                            }}
                            onClick={this.cityClicked(record.id)}
                        >
                            {record.name}
                        </div>
                    ))}
                </div>
                <CityModal
                    city={this.state.selectedCity}
                    isOpen={this.state.isModalOpen}
                    onClose={this.closeModal}
                />
            </div>
        );
    }
}

export default IranMap;
