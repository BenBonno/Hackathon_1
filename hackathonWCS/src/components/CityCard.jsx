import React, { useEffect } from "react";
import Rating from "./Rating";
import ThumbLogo from "../assets/trombone.svg";
import Modal from "../components/Modal";
import axios from "axios";

const temp = {
  data: {
    id: "7866204",
    type: "destination",
    attributes: {
      slug: "toulouse-france",
      url: "https://www.roadgoat.com/travel-guides/toulouse-france",
      destination_type: "City",
      short_name: "Toulouse",
      name: "Toulouse, France",
      long_name: "Toulouse, France",
      population: 433055,
      latitude: 43.60426,
      longitude: 1.44367,
      bounding_box: null,
      geonames_id: 2972315,
      walk_score_url: null,
      budget: {
        "Toulouse, France": {
          value: 4,
          text: "Medium",
          subText: "Perfectly average",
        },
        France: {
          value: 6,
          text: "High",
          subText: "Get that wallet ready",
        },
      },
      safety: {
        "Toulouse, France": {
          value: 4,
          text: "High",
          subText: "Exercise Normal Precaution",
        },
        France: {
          value: 4,
          text: "High",
          subText: "Exercise Normal Precaution",
        },
      },
      covid: {
        France: {
          value: 44.7285440140004,
          url: "https://www.worldometers.info/coronavirus/",
          text: "Critical",
        },
      },
      average_rating: 3.0,
      check_in_count: 207,
      google_events_url:
        "https://www.google.com/search?q=events+toulouse+france&ibp=htl;events",
      vrbo_url:
        "https://vrbo.prf.hn/click/camref:1101ljbvy/creativeref:1101l63118/destination:https://www.vrbo.com/search/keywords:toulouse-france",
      alltrails_url:
        "https://www.alltrails.com/explore?b_tl_lat=44.2&b_tl_lng=0.84&b_br_lat=43.0&b_br_lng=2.04",
      open_elevation_url:
        "https://api.open-elevation.com/api/v1/lookup?locations=43.60426,1.44367",
      foursquare_url:
        "https://api.foursquare.com/v2/venues/search?ll=43.60426,1.44367&radius=100000",
      kayak_car_rental_url:
        "https://www.kayak.com/in?a=roadgoatdl&url=/cars/Toulouse%2CFrance/Toulouse%2CFrance/2022-12-23/2022-12-30/?sort=price_a",
      kayak_lodgings_url:
        "https://www.kayak.com/in?a=roadgoatdl&url=/hotels/Toulouse%2CFrance/2022-12-23/2022-12-30/1adults?sort=userrating_b",
      airbnb_url: "https://www.airbnb.com/s/Toulouse%2C+France/homes",
      getyourguide_url:
        "https://getyourguide.com/s/?q=Toulouse%2C+France&partner_id=0TQGVTE",
      wikipedia_url: "http://en.wikipedia.org/wiki/Toulouse",
      woe_id: 12657325,
      alternate_names: ["Toulouse"],
      iso2: null,
      iso3: null,
      languages: null,
      currency_code: null,
      currency_name: null,
      phone_prefix: null,
      capital: null,
      top_cities_and_towns: [],
    },
    relationships: {
      state: {
        data: null,
      },
      country: {
        data: {
          id: "2009050",
          type: "destination",
        },
      },
      continent: {
        data: {
          id: "10935559",
          type: "destination",
        },
      },
      known_for: {
        data: [],
      },
      travelers: {
        data: [
          {
            id: "549",
            type: "user",
          },
          {
            id: "3075",
            type: "user",
          },
          {
            id: "744",
            type: "user",
          },
          {
            id: "1627",
            type: "user",
          },
          {
            id: "2795",
            type: "user",
          },
        ],
      },
    },
  },
  included: [
    {
      id: "10935559",
      type: "destination",
      attributes: {
        slug: "europe",
        destination_type: "Continent",
        short_name: "Europe",
        name: "Europe",
        long_name: "Europe",
        latitude: 55.8189766,
        longitude: 17.2927466,
        bounding_box: {
          sw_lon: -28.277903,
          sw_lat: 33.019979,
          ne_lon: 47.904182,
          ne_lat: 72.140879,
        },
        countable: true,
        average_rating: 4.9,
        check_in_count: 21425,
      },
      relationships: {
        known_for: {
          data: [],
        },
        featured_photo: {
          data: {
            id: "683",
            type: "photo",
          },
        },
      },
    },
    {
      id: "683",
      type: "photo",
      attributes: {
        image: {
          full: "https://cdn.roadgoat.com/uploads/photo/image/683/travel-guide-of-berlin-germany-2-original.jpg",
          large:
            "https://cdn.roadgoat.com/uploads/photo/image/683/large_travel-guide-of-berlin-germany-2-original.jpg",
          medium:
            "https://cdn.roadgoat.com/uploads/photo/image/683/medium_travel-guide-of-berlin-germany-2-original.jpg",
          thumb:
            "https://cdn.roadgoat.com/uploads/photo/image/683/thumb_travel-guide-of-berlin-germany-2-original.jpg",
          avatar:
            "https://cdn.roadgoat.com/uploads/photo/image/683/avatar_travel-guide-of-berlin-germany-2-original.jpg",
        },
      },
    },
    {
      id: "2009050",
      type: "destination",
      attributes: {
        slug: "france",
        destination_type: "Country",
        short_name: "France",
        name: "France",
        long_name: "France",
        latitude: 46.0,
        longitude: 2.0,
        bounding_box: {
          sw_lon: -5.1389964684508,
          sw_lat: 41.3658213299999,
          ne_lon: 9.5596148665824,
          ne_lat: 51.0890012279322,
        },
        countable: true,
        average_rating: 4.4125,
        check_in_count: 15452,
      },
      relationships: {
        known_for: {
          data: [],
        },
        featured_photo: {
          data: {
            id: "2291",
            type: "photo",
          },
        },
      },
    },
    {
      id: "2291",
      type: "photo",
      attributes: {
        image: {
          full: "https://cdn.roadgoat.com/uploads/photo/image/2291/toa-heftiba-rMjFxuvJlEY-unsplash.jpg",
          large:
            "https://cdn.roadgoat.com/uploads/photo/image/2291/large_toa-heftiba-rMjFxuvJlEY-unsplash.jpg",
          medium:
            "https://cdn.roadgoat.com/uploads/photo/image/2291/medium_toa-heftiba-rMjFxuvJlEY-unsplash.jpg",
          thumb:
            "https://cdn.roadgoat.com/uploads/photo/image/2291/thumb_toa-heftiba-rMjFxuvJlEY-unsplash.jpg",
          avatar:
            "https://cdn.roadgoat.com/uploads/photo/image/2291/avatar_toa-heftiba-rMjFxuvJlEY-unsplash.jpg",
        },
      },
    },
    {
      id: "549",
      type: "user",
      attributes: {
        name: "Meredith",
        url: "https://www.roadgoat.com/travelers/meredith",
        avatar_url: null,
      },
    },
    {
      id: "3075",
      type: "user",
      attributes: {
        name: "Nancy",
        url: "https://www.roadgoat.com/travelers/nancy-3",
        avatar_url: null,
      },
    },
    {
      id: "744",
      type: "user",
      attributes: {
        name: "Chocomilka",
        url: "https://www.roadgoat.com/travelers/chocomilka",
        avatar_url: null,
      },
    },
    {
      id: "1627",
      type: "user",
      attributes: {
        name: "Joel Speakman",
        url: "https://www.roadgoat.com/travelers/joel-speakman",
        avatar_url: null,
      },
    },
    {
      id: "2795",
      type: "user",
      attributes: {
        name: "Simon Cox",
        url: "https://www.roadgoat.com/travelers/simon-cox",
        avatar_url:
          "https://cdn.roadgoat.com/uploads/user/avatar/2795/avatar_unnamed.jpg",
      },
    },
  ],
};

function CityCard() {
  return (
    <div className="w-11/12 h-30 bg-white flex border-2 border-c-oasis rounded-2xl">
      <section className="w-3/5 relative">
        <div className="w-full h-full bg-white p-1 absolute rounded-2xl overflow-hidden">
          <div className=" bg-gray-500 w-full h-full">
            {/* prend le thumb pour les images */}
            <img
              className="h-full"
              src="https://cdn.roadgoat.com/uploads/photo/image/2291/thumb_toa-heftiba-rMjFxuvJlEY-unsplash.jpg"
            />
          </div>
        </div>
        <div className="bg-card-cadre bg-center bg-no-repeat w-full h-full bg-[length:100%_100%] absolute rounded-2xl flex justify-center items-center">
          <h2 className="text-xl font-extrabold uppercase text-white drop-shadow-2xl">
            {/* Insert Name of city */}City
          </h2>
        </div>
      </section>
      <section className="w-1/3 text-sm h-full mx-auto py-2">
        <div className="w-full flex justify-end">
          <button className="">
            <img className="w-6 h-6" src={ThumbLogo} alt="thumbtack input" />
          </button>
        </div>
        <div>
          <Rating rating={10} />
        </div>
        <div className="py-4 font-medium text-gray-800 font-HelvetiHand">
          <p>Distance : {/* distance data */}</p>
          <p>Known for : {/* budget data */}</p>
        </div>
        <div className="w-full flex justify-end">
          <Modal city={temp} />
        </div>
      </section>
    </div>
  );
}

export default CityCard;
