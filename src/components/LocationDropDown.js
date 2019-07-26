// add auto by write "rcc"
import React, { Component } from 'react'

export default class LocationDropDown extends Component {
    render() {

        let locations = this.props.locations;
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
                Dropdown link
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {
                    locations.map((location, i) => 
                        <a class="dropdown-item" href="#" key={location.id} data-id={location.id} data-name={location.name}>{location.name}</a>
                    )
                }
                </div>
            </div>
        )
    }
}
