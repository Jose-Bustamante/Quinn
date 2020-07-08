import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { ILaunch } from "../types/launchTypes";

interface MapProps {
  google: any;
  launches: ILaunch[];
}

export class MapComponent extends React.Component<MapProps, MapProps> {
  render() {
    return (
      <Map google={this.props.google}>
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper(() => ({
  apiKey: "AIzaSyD0mKq4dnddGOfXqe4GHt60Ad3iWydVAOI",
}))(MapComponent);
