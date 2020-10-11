import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from 'material-ui-rating';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const Popup = ({ feature }) => {
    const { id, name, description, status, stars } = feature.properties;

    const [value, setValue] = React.useState(status);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        // <div id={`popup-${id}`} className="popupdiv">
        //     <h3>{name}</h3>
        //     {description}
        // </div>

        <Grid container spacing={0}>
            <Grid item xs={12}>

                {/* to get this line working you need to install -> npm install material-ui-rating
                 and  npm install @material-ui/icons */}


                <Card className="spl-root">
                    <CardActionArea>
                        
                        <CardContent>
                            <Typography variant="h6">Rating</Typography>

                            <Rating
                                value={stars}
                                max={5}
                                onChange={(value) => console.log(`Rated with value ${value}`)}
                            />
                           <Typography>{status}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Report a problem
                        </Button>
                        <Button size="small" variant="contained" color="primary" disableElevation>
                            Notify me
                        </Button>
                    </CardActions>
                </Card>



            </Grid>


        </Grid>
    );
};

export default Popup;