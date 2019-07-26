// add auto by write "rcc"
import React, { Component } from 'react'

export default class LocationDropDown extends Component {

    locationSelected(e){
        console.log(e.target);

        let locationName = e.target.getAttribute("data-name");
        console.log(locationName);
        
        this.setState({
            label : locationName
        })
    }

    state = {
        label : this.props.defaultLabel
    }

    render() {

        let locations = this.props.locations;
        //let defaultLabel = this.props.defaultLabel;
        console.log(locations);

        return (
            <div class="dropdown">
                <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {this.state.label}
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {
                    locations.map((location, i) => 
                        <a class="dropdown-item" onClick={e => this.locationSelected(e)} href="#" key={location.id} data-id={location.id} data-name={location.name}>{location.name}</a>
                    )
                }
                </div>
            </div>
        )
    }
}
