"use client";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/react";
import { Country, State, City } from "country-state-city";
import { useState, useEffect } from "react";
import { FormDataProps, formOptionsProps } from "@/lib/interfaces";
import {selectClassNames} from './fest'

export function GeoInfo({
  updateState,
}: {
  updateState: React.Dispatch<React.SetStateAction<FormDataProps>>;
}) {
  const [country, setCountry] = useState<formOptionsProps[]>([
    {
      value: "India",
      label: "India",
      code: "IN",
    },
  ]);
  const [state, setState] = useState<formOptionsProps[]>([]);
  const [city, setCity] = useState<formOptionsProps[]>([]);
  const [selectedState, setSelectedState] = useState<formOptionsProps>();
  const [selectedCity, setSelectedCity] = useState<formOptionsProps>();

  const [selectedCountry, setSelectedCountry] = useState<formOptionsProps>({
    value: "India",
    label: "India",
    code: "IN",
  });

  const dataCountry = () =>
    Country.getAllCountries().map((country) => {
      return {
        value: country.name,
        label: country.name,
        code: country.isoCode,
      };
    });

  const dataStates = (countryID: string) =>
    State.getStatesOfCountry(countryID).map((state) => {
      return {
        value: state.name,
        label: state.name,
        code: state.isoCode,
      };
    });

  const dataCity = (countryCode: string, stateID: string) =>
    City.getCitiesOfState(countryCode, stateID).map((city) => {
      return {
        value: city.name,
        label: city.name,
        code: city.countryCode,
      };
    });

  useEffect(() => {
    setCountry(dataCountry());
  }, []);
  // useEffect(() => {
  //   console.log(country);
  // }, [country]);
  useEffect(() => {
    // console.log(selectedCountry);

    if (selectedCountry) {
      // console.log("is it changing");

      const states = dataStates(selectedCountry.code);
      setState([...states]);
    }
  }, [selectedCountry.code]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      const cities = dataCity(selectedCountry.code, selectedState.code);

      setCity(cities);
    }
    // console.log("val", selectedCountry && selectedState);
  }, [selectedState]);

  const handleCountry = (e: formOptionsProps) => {
    // console.log(e);
    updateState((prev) => ({ ...prev, country: e.value }));

    setSelectedCountry(e);
  };
  const handleCity = (e: formOptionsProps) => {
    // const oldData = formData;
    // oldData.city = e.value;
    // setFormData(oldData);
    updateState((prev) => ({ ...prev, city: e.value }));

    setSelectedCity(e);
  };
  const handleState = (e: formOptionsProps) => {
    // console.log(e);

    // const oldData = {...formData};
    // oldData.state = e.value;
    // setFormData(oldData);
    updateState((prev) => ({ ...prev, state: e.value }));

    setSelectedState(e);
  };
  return (
    <div className="flex flex-col gap-4">
      <Autocomplete
        required
        label="Select Country"
        placeholder="Country Name"
        className="overflow-hidden max"
      >
        {country.map((item) => (
          <AutocompleteItem
            key={item.value}
            value={item.value}
            onClick={() => handleCountry(item)}
          >
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        required
        label="Select State"
        placeholder="State Name"
        className="overflow-hidden max"
      >
        {state.map((item) => (
          <AutocompleteItem
            key={item.value}
            value={item.value}
            onClick={() => handleState(item)}
          >
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        required
        label="Select City"
        placeholder="City Name"
        className="overflow-hidden max"
      >
        {city.map((item) => (
          <AutocompleteItem
            key={item.value}
            value={item.value}
            onClick={() => handleCity(item)}
          >
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
