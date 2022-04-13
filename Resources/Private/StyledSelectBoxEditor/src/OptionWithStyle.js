import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import SelectBox_Option_MultiLineWithStyle from "./SelectBox_Option_MultiLineWithStyle";

class OptionWithStyle extends PureComponent {
    static propTypes = {
        option: PropTypes.shape({
            label: PropTypes.string.isRequired,
            loaderUri: PropTypes.string.isRequired,
            style: PropTypes.string,
        }),
    };

    render() {
        const { option } = this.props;

        return (
            <SelectBox_Option_MultiLineWithStyle
                {...this.props}
                label={option.label}
                style={option.style}
            />
        );
    }
}

export default OptionWithStyle;
