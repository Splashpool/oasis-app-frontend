import React from "react";
import Grid from "@material-ui/core/Grid";
import SwitchesGroup from "./SwitchesGroup";
import MapView from "./MapView";
import LocationListing from "./LocationListing";

const locations = [
  {
    id: 1,
    name: "london",
    longitude: "51.5074",
    latitude: " 0.1278",
    status: "Drinkable",
    isWater: false,
    isWc: true,
  },
  {
    id: 2,
    name: "Santiago",
    longitude: "54.5074",
    latitude: " 7.1278",
    status: "Need traitment",
    isWater: true,
    isWc: true,
  },
  {
    id: 3,
    name: "Santiago",
    longitude: "94.5074",
    latitude: " 7.1278",
    status: "Drinkable",
    isWater: true,
    isWc: false,
  },
  {
    id: 4,
    name: "Santiago",
    longitude: "04.5074",
    latitude: " 7.1278",
    status: "Uknown",
    isWater: true,
    isWc: true,
  },
];

function Filter({searchString}) {
  console.log(`${searchString} was given to Filter`);
  const filterData = (locations, state) => {
    if (locations === undefined) throw new Error("locations is required");
    if (state === undefined) throw new Error("state is required");

    var results = [];

    if (state.waterOn) {
      console.log("water is ON");
      for (let i = 0; i < locations.length; i++) {
        if (locations[i].isWater) {
          results.push(locations[i]);
        }
      }
    } else if (state.wcOn) {
      console.log("Toilets is ON");
      for (let i = 0; i < locations.length; i++) {
        if (locations[i].isWc) {
          results.push(locations[i]);
        }
      }
    }
    console.log(results);
    return results;
  };

  const filterResults = (state) => {
    if (state.waterOn && state.wcOn) {
      console.log("Both filters are ON");
      return locations;
    } else {
      return filterData(locations, state);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <MapView searchString={searchString} />
        <LocationListing locationData={locations} />
      </Grid>
      <Grid item xs={12} md={12}>
        <SwitchesGroup filterResults={filterResults} />
      </Grid>
    </Grid>
  );
}

export default Filter;
