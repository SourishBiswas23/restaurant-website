"use client";

import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { NextPage } from "next";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

interface Props {}

const markers = [
  {
    position: [34.052235, -118.243683] as LatLngExpression,
    title: "Location 1",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatum!",
    image: "/map/1.png",
  },
  {
    position: [34.9748, -118.243683] as LatLngExpression,
    title: "Location 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatum!",
    image: "/map/2.png",
  },
  {
    position: [34.052235, -118.243683] as LatLngExpression,
    title: "Location 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatum!",
    image: "/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const Map: NextPage<Props> = ({}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <motion.section
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
    >
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution="&copy;<a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors "
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        ></TileLayer>
        {/* markers */}
        {markers.map((marker, index) => {
          return (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div className="flex gap-x-[30px]">
                  <div className="flex-1">
                    <h3>{marker.title}</h3>
                    <p>{marker.subtitle}</p>
                  </div>
                  <div className="flex-1">
                    <Image
                      src={marker.image}
                      alt=""
                      width={130}
                      height={160}
                    ></Image>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
