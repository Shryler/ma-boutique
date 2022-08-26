import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ToolTips({button, text}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" style={{ margin: 0 }} {...props} >
      {text}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button className='me-2 navbar-btn'>{button}</button>
    </OverlayTrigger>
  );
}

export default ToolTips;