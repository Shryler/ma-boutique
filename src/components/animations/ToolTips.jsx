import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ToolTips({button, text, classSelect, offsetSelect = [0,0]}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} >
      {text}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
      offset={offsetSelect}
    >
      <button className={classSelect}>{button}</button>
    </OverlayTrigger>
  );
}

export default ToolTips;
