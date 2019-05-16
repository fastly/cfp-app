import React from 'react';
import PropTypes from 'prop-types';

class Preview extends React.Component {
  render() {
    const {preview, startTime} = this.props;

    const style = {
      top: (preview.startTime - startTime) * 90 +"px",
      height: (preview.endTime - preview.startTime) * 90 +"px"
    };

    return (
      <div className='preview_slot' style={style}>
        
      </div>
    )
  }
}

Preview.propTypes = {
  preview: PropTypes.object,
  startTime: PropTypes.number
}

export default Preview;