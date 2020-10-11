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
        <Grid container spacing={0}>
            <Grid item xs={12}>

                {/* to get this line working you need to install -> npm install material-ui-rating
                 and  npm install @material-ui/icons */}
                <Card className="spl-root">
                    <CardActionArea>
                        <img
                            className="spl-media"
                            src="https://images.freeimages.com/images/large-previews/113/water-from-spring-1426253.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="h6">Rating</Typography>

                            <Rating
                                value={stars}
                                max={5}
                                onChange={(value) => console.log(`Rated with value ${value}`)}
                            />
                            <FormControl component="fieldset">

                                <RadioGroup aria-label="gender" name="water" value={status} onChange={handleChange} className="spl-radio">
                                    <FormControlLabel value="drinkable" control={<Radio color="primary" />} label="Drinkable" />
                                    <Divider />
                                    <FormControlLabel value="treatment" control={<Radio color="primary" />} label="Need treatment" />
                                    <Divider />
                                    <FormControlLabel value="undrinkable" control={<Radio color="primary" />} label="Undrinkable" />
                                    <Divider />
                                    <FormControlLabel value="unkown" control={<Radio color="primary" />} label="Unkown" />
                                </RadioGroup>
                            </FormControl>
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