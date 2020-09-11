import React from "react";
import PropTypes from "prop-types";
import { components  } from "react-select";
import { ReactSelect, Checkbox } from "@dfds-ui/react-components";
import makeAnimated from "react-select/animated";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <Checkbox
          checked={props.isSelected}
          onChange={() => null}
        >{props.label}</Checkbox>
      </components.Option>
    </div>
  );
};

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const animatedComponents = makeAnimated();

const Select = (props) => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        isMulti
        components={{ Option, MultiValue, animatedComponents }}
        options={[props.allOption, ...props.options]}
        onChange={(selected, event) => {
          if (selected !== null && selected.length > 0) {
            if (selected[selected.length - 1].value === props.allOption.value) {
              return props.onChange([props.allOption, ...props.options]);
            }
            let result = [];
            if (selected.length === props.options.length) {
              if (selected.includes(props.allOption)) {
                result = selected.filter(
                  (option) => option.value !== props.allOption.value
                );
              } else if (event.action === "select-option") {
                result = [props.allOption, ...props.options];
              }
              return props.onChange(result);
            }
          }

          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

Select.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*",
  },
};

export default Select;
