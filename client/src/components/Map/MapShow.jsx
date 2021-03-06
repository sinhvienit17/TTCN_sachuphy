import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibHVwbWl0IiwiYSI6ImNraDk5cjZhNTEwZTIyc2wybWhoNHJ5NDIifQ.lTjMXzT532f-470R1-zxWQ",
});

const style = "mapbox://styles/mapbox/streets-v9";

export const MapShow = (props) => {
  return (
    <Map
      style={style}
      containerStyle={{
        height: "380px",
        width: "100%",
      }}>
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature />
      </Layer>
    </Map>
  );
};
export default MapShow
