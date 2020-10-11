import React, { useState } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Home from '../Home/Home';
import { Box } from '@material-ui/core';


function Search() {
    const handleClick = (buttonText) => {
        console.log( `${buttonText} Clicked` );
        // depending on which button is clicked, call the corresponding component.
        // for geolocation need to call the LocationListing (or a new SearchLocation component) with geolocation
        // is there anyway to "mimic" what gets pressed with the geolocation search?
        //
        // <LocationListing locationData={<geolocation>} />
        //
        // for Manage Saved Locations, this will need to be a new component I think.
    }
    
    const [text, setText] = useState("");

    //  replaced below by in-line ES6 arrow function instead.
    // const handleTextChange = ( event ) => {
    //     setText(event.target.value);
    // }

    const handleEnterKeyPress = ( event ) => {
        if ( event.keyCode === 13 ) {
            // console.log( `${event.target.value} <Enter>`);  // both versions work.
            console.log( `${text}<ENTER>`);
            setText("");
            // here we need to pass the value of what's been entered so far and call the map search
            // perhaps something like this:
            // 
            // <LocationListing locationData={event.target.value} />
            // but locationData needs to be in a simpler format as
            // need to check with Sanae how she calls the map API function 
            // if only the location name is given (eg London)
            // like the normal search function, this may require an intermediate component
            // to get longitude and latitude coordinates - depends on how we want LocationListing to work.
            //
            // in Heather's example for adding a new task, she calls
            // props.addTask()
        }
    }


    return ( 
        // now we show the Search text input
        <div className="Search">

            <Box pt={6}>
                <React.Fragment>
                    {<CssBaseLine />}
                    <Container maxWidth="sm">
                        <SearchIcon />
                        <TextField className="textBox spl--tb-colors"
                            variant="filled"
                            id="input-with-icon-grid"
                            label="Search locations"
                            style={{ minWidth: 350, maxWidth: 800 }}
                            // onChange={ handleTextChange }
                            onChange={ (event) => setText( event.target.value )}
                            onKeyDown={ handleEnterKeyPress }
                            value={ text }
                        />
                    </Container>
                </React.Fragment>

                <React.Fragment>
                    {<CssBaseLine />}
                    <Container maxWidth="sm">
                        <IconButton onClick={ () => handleClick('gelocation') }>
                            <GpsFixedTwoToneIcon />Find Nearest Facility
                        </IconButton>
                    </Container>
                </React.Fragment>

                <React.Fragment>
                    {<CssBaseLine />}
                    <Container maxWidth="sm" align-Items="flex-start"  className="spl--settingsIconColor">
                        <IconButton onClick={ () => handleClick('savedLocations') } >
                            <SettingsTwoToneIcon />Manage Saved Locations
                        </IconButton>
                    </Container>
                </React.Fragment>
            </Box>

        </div>
    );
}

export default Search;



            {/* <Grid container spacing={1} alignItems="flex-start" >
                <Grid item >
                    <SearchIcon />
                </Grid>
                <Grid item >
                    <TextField className="textBox"
                        variant="filled"
                        id="input-with-icon-grid"
                        label="Search locations"
                        style={{ minWidth: 350, maxWidth: 800 }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-start">
                <Grid item >
                    <IconButton>
                        <GpsFixedTwoToneIcon />Find Nearest Facility
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-start">
                <Grid item >
                    <IconButton>
                        <SettingsTwoToneIcon />Manage Saved Locations
                    </IconButton>
                </Grid>
            </Grid> */}



        // // if Search isn't part of the Header, then it should call Header to bring into background 

        // // now we show the Search text input
        // <div className="Search">
        //     {/* <Header /> */}
        //     <Grid container spacing={1} alignItems="flex-end" >
        //         <Grid item >
        //             <SearchIcon />
        //         </Grid>
        //         <Grid item >
        //             <TextField className="textBox"
        //                 variant="filled"
        //                 id="input-with-icon-grid"
        //                 label="Search locations"
        //                 style={{ minWidth: 350, maxWidth: 800 }}
        //             />
        //         </Grid>
        //     </Grid>
        //     <Grid container spacing={1} alignItems="flex-end">
        //         <Grid item >
        //             <IconButton>
        //                 <GpsFixedTwoToneIcon />Find Nearest Facility
        //             </IconButton>
        //         </Grid>
        //     </Grid>
        //     <Grid container spacing={1} alignItems="flex-end">
        //         <Grid item >
        //             <IconButton>
        //                 <SettingsTwoToneIcon />Manage Saved Locations
        //             </IconButton>
        //         </Grid>
        //     </Grid>

        // </div>
