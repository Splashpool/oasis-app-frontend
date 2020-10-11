import React, { useState, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import IconButton from '@material-ui/core/IconButton';
// import Login from '../Login/Login.jsx';
// import LocationListing from '../LocationListing.js';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams,
//   } from "react-router-dom";

// import { Redirect } from 'react-router';
// import { Home, LocationSearching } from '@material-ui/icons';
import MapView from '../MapView';
import Filter from '../Filter';

class Search extends Component {
    //state = { text:'', geoClicked: false, saveLocsClicked: false, searchEntered: false }
    
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            geoClicked: false,
            saveLocsClicked: false,
            searchEntered: false
        }
    }

    // search() {
    //     console.log('this.state', this.state);
    // }

    handleClick(buttonText) {
        console.log(`${buttonText} Clicked`);
        if ( buttonText === 'geolocation' )
        {
            console.log(`${buttonText} Clicked2`);
            // this.setState({ geoClicked: true });
            this.state.geoClicked = true;
        }
        else // can only be gelocation or savedLocations button clicked.
        {
            console.log(`${buttonText} Clicked3`);
            this.state.saveLocsClicked = true;
        }
        console.log(this.state.geoClicked.toString());
        console.log(this.state.saveLocsClicked.toString());
        console.log(this.state.searchEntered.toString());
        this.setState({redirect: true});
    }

    handleEnterKeyPress(event) {
        if( event.keyCode === 13 ) {
            let searchStr = event.target.value;
            console.log(`${searchStr}<ENTER>`);
            // console.log(`${event.target.value}<ENTER>`);
            
            // return (<LocationListing /> )

            this.setState({searchEntered: true})
        //    this.state.searchEntered = true;

            // console.log(this.state.geoClicked.toString());
            // console.log(this.state.saveLocsClicked.toString());
            // console.log(this.state.searchEntered.toString());
//            this.setState({redirect: true});

            event.target.value='';  // potentially have to place this elsewhere
        }
    }

    handleTextChange = ( event ) => {
        this.setState({text: event.target.value});
    }

    render() {
        if (this.state.redirect && this.state.geoClicked) {
            // let params = { searchString: '', isGeo: true}
            // let params = { searchString: 'geolocation'}
            let searchString = 'geolocation';
console.log(`passing to Filter1 - ${searchString}`)
            return <Filter searchString={searchString} />
        }
        else if (this.state.redirect && this.state.saveLocsClicked) {
            console.log( 'Into Managed Saved Locations');
            // return <ManageSavedLocations />
        }
//        else if ( this.state.redirect && this.state.searchEntered) {
        else if ( this.state.redirect && this.state.searchEntered) {
            // let params = {searchString: this.state.text, isGeo: false };
            let searchString = {searchString: this.state.text };
console.log(`passing to Filter2 - searchString`); // = ${params.searchString}`);
            return <Filter searchString={searchString} />
        }
        else {
        return (
            <div>
                <Grid container spacing={1} alignItems="flex-start">
                    <Grid item className="mui-col-md-2 mui-col--md-offset-2">
                        <SearchIcon />
                    </Grid>
                    <Grid item >
                        <TextField className="textBox"
                            variant="filled"
                            id="input-with-icon-grid"
                            label="Search locations"
                            style={{ minWidth: 350, maxWidth: 800 }}
                            onChange={this.handleTextChange}
                            // onChange={ (event) => setText( event.target.value )}
                            onKeyDown={ this.handleEnterKeyPress }
                            value={ this.state.text }
                        />

                        {/* <ul>
                            <li>
                                <Link to="/locations">Locations</Link>
                            </li>
                        </ul> */}
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-start">
                    <Grid item >
                        <IconButton onClick={ () => this.handleClick('geolocation') }>
                            <GpsFixedTwoToneIcon />Find Nearest Facility
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-start">
                    <Grid item >
                        <IconButton onClick={ () => this.handleClick('savedLocations') }>
                            <SettingsTwoToneIcon />Manage Saved Locations
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
}
export default Search;