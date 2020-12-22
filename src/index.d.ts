export interface LaunchResponse {
  error?: { type: string; error: any };
  launches?: Launch[];
}

export interface Launch {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
  };
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string;
      launch: string;
      media: string;
      recovery: string;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  static_fire_date_utc: Date;
  static_fire_date_unix: Date;
  tbd: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  failures: [
    {
      time: number;
      altitude: null;
      reason: string;
    },
  ];
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: Date;
  date_local: Date;
  date_precision: string | "hour";
  upcoming: boolean;
  cores: [
    {
      core: string;
      flight: number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: boolean;
      landing_type: "Ocean" | "ASDS" | "RTLS" | string;
      landpad: string;
    },
  ];
  id: string;
  rocket_type: string;
}

export interface Rocket {
  id: string;
  name: number;
  type: "rocket" | string;
  description: string;
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  first_flight: Date;
  flickr_images: string[];
  stages: number;
  success_rate_pct: number;
  wikipedia: string;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  first_stage: {
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  second_stage: {
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      composite_fairing: {
        height: {
          meters: number;
          feet: number;
        };
        diameter: {
          meters: number;
          feet: number;
        };
      };
      option_1: string;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  engines: {
    isp: {
      sea_level: number;
      vacuum: number;
    };
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    number: number;
    type: "merlin" | string;
    version: "1C" | string;
    layout: "single" | string;
    engine_loss_max: number;
    propellant_1: "liquid oxygen" | string;
    propellant_2: "RP-1 kerosene" | string;
    thrust_to_weight: number;
  };
  landing_legs: {
    number: number;
    material: null;
  };
  payload_weights: [
    {
      id: string;
      name: string;
      kg: number;
      lb: number;
    },
  ];
}
