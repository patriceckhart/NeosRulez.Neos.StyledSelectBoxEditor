import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SelectBox_Option_MultiLineWithStyle extends PureComponent {
    static propTypes = {
        label: PropTypes.string.isRequired,
        style: PropTypes.string,
        onClick: PropTypes.func,
        isHighlighted: PropTypes.bool,
        onMouseEnter: PropTypes.func,
    }

    render() {

        const {
            label,
            style,
            onClick,
            onMouseEnter
        } = this.props;

        const optionClassName = label.toLowerCase().trim();
        const finalStyle = '.' + optionClassName + '{ ' + style + ' cursor:pointer; font-size:18px; padding-left:14px; }';

        return (
            <div
                onMouseEnter={onMouseEnter}
                onClick={onClick}
                role="button"
            >
                <style>{finalStyle}</style>
                <span className={optionClassName} >
                    <span title={label}>{label}</span>
                </span>
            </div>
        );
    }
}

export default SelectBox_Option_MultiLineWithStyle;
