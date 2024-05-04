import './SoundMap.css';
import React from 'react';
// import GoogleMapReact from 'google-map-react';
import GoogleMap from 'google-maps-react-markers'
// import {GOOGLE_API_KEY} from '../../apikey';
import Marker from './Marker';
import ReactAudioPlayer from 'react-audio-player';
import temp_audio from "./STE-002.wav";
import {useState } from 'react';
import {points} from './Points';
// const KEY = GOOGLE_API_KEY;
const KEY = "AIzaSyAmp0po-B6xC41OCaFxPPp7YKgKio-ActE";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const handleApiLoaded = (map, maps) => {
    // use map and maps objects
//   };

const mapOptions = {};
// const coordinates = [{
//     lat: 29.991802 ,
//     lng: -90.092992,
    // name: "loc1",
// }]
// const coordinates = points;


export default function SoundMap() {

    console.log(points);

    const [showcase, setShowCase] = useState({markerId: 0, lat: 0, lng: 0, audio: "", text: "", pic: ""});
    const [song, setSong] = useState(temp_audio);
    // const mapRef = useRef(null)
    // const [mapReady, setMapReady] = useState(false)
  
    /**
     * @description This function is called when the map is ready
     * @param {Object} map - reference to the map instance
     * @param {Object} maps - reference to the maps library
     */
    // const onGoogleApiLoaded = ({ map, maps }) => {
    //   mapRef.current = map
    //   setMapReady(true)
    // }
  
    const onMarkerClick = (e, { markerId, lat, lng, audio, text, pic}) => {
      console.log('This is ->', markerId)
      setShowCase({markerId, lat, lng, audio, text, pic});
      setSong(audio);
  
      // inside the map instance you can call any google maps method
    //   mapRef.current.setCenter({ lat, lng })
      // ref. https://developers.google.com/maps/documentation/javascript/reference?hl=it
    }
  
    return (
      <div className="container" align="middle" justifyContent="center">
        {showcase.markerId ? (<div align="middle" className="display-point">
            <h1>Location: {showcase.markerId}</h1>
            <ReactAudioPlayer
            src={song}
            onPlay={(e) => console.log(e)}
            // autoPlay
            controls
            />
            <p>{showcase.text}</p>
            <img className="audio-img" alt=":(" src={showcase.pic}/>
        </div>) : (
            <div className="display-point" align="middle">
            <h1>City Park Sound Map</h1>
            <p>Use over ear headphones to explore rather than earbuds.</p>
            <h2>Inspiration</h2>
            <p>I visited City Park a few weeks ago, and noticed that the highway was in an odd location just running through the middle. Not only that, but it's the same level as the ground, and I was even more confused because when highways go through residential areas, there are walls to prevent the noise from bleeding through. As such, I expected a similar approach for a park albeit in the middle of a city. Regardless, as I ran around, it just felt like I was walking through an expensive neighborhood that had a park rather than an escape into nature away from the city.</p>
            <p>I became really fixated on the highway that cuts through because as I walked around, I was always finding myself back at I-10. Curiosity struck as I asked myself: How far does this highway impact the sounds of City Park?</p>
            <h2>General Idea</h2>
            <p>I went back to the park with a Zoom field recording device and my headphones (Sennheiser HD380 Pro), and I begun taking recordings from the highway and then towards the riverside of the park.</p>
            <h2>Conclusion</h2>
            <p>Ultimately, I found that the highway is harder to hear from afar, but it never sounds peaceful. It just feels cramped, and I can't tell sounds apart. The air is cramped with sounds almost like a fan that runs so long it's forgotten, but it's not quiet. Even when it's not the highway I'm hearing, I'm hearing loads of motor vehicles pass by because of the sheer number of streets winding through the park.    </p>
            <p>In conclusion, the highway fogs the park with noise, even at half a mile away, and when it's forgotten, the vehicles passing on every winding road revive the industrial sounds.</p>

        </div>
        )}
        {/* {mapReady && <div>Map is ready. See for logs in developer console.</div>} */}
        <GoogleMap
          apiKey={KEY}
          defaultCenter={{ lat: 29.991802, lng: -90.092992 }}
          defaultZoom={16}
          options={mapOptions}
          mapMinHeight="calc(100vh - 75px)"
        //   onGoogleApiLoaded={onGoogleApiLoaded}
          onChange={(map) => console.log('Map moved', map)}
        >
          {points.map(({ lat, lng, name, audio, text, pic}, index) => (
            <Marker
              className = "marker"
              key={index}
              lat={lat}
              lng={lng}
              markerId={name}
              pic={pic}
              audio={audio}
              text={text}
              onClick={onMarkerClick} // you need to manage this prop on your Marker component!
              // draggable={true}
              // onDragStart={(e, { latLng }) => {}}
              // onDrag={(e, { latLng }) => {}}
              // onDragEnd={(e, { latLng }) => {}}
            />
          ))}
        </GoogleMap>
        
      </div>
    )
}
