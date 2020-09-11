import { SiteLayout, GlobalStyles } from "@dfds-ui/react-components";
import { useState } from "react";
import Select from "../components/Select.js";

const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 }
];


export default function Home() {
  const [state, setState] = useState({ optionSelected: null });

  const handleChange = (selected) => {
    console.log(selected);
    setState({
      optionSelected: selected,
    });
  };

  return (
    <>
      <GlobalStyles />
      <SiteLayout.Grid>
        <SiteLayout.Header>Hello</SiteLayout.Header>
        <SiteLayout.Main>
          <Select
            options={scaryAnimals}
            closeMenuOnSelect={false}
            onChange={handleChange}
            hideSelectedOptions={false}
            allowSelectAll={true}
            value={state.optionSelected}
          />
        </SiteLayout.Main>
        <SiteLayout.Footer>Footer content</SiteLayout.Footer>
      </SiteLayout.Grid>
    </>
  );
}
