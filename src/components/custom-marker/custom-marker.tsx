import "./style.scss";
import MarAbertoIcon from "../../misc/icons/maraberto-icon.svg";
import { OverlayView } from "@react-google-maps/api";
import { IMarker } from "../../pages/marsocial/home/content";
import { useNavigate } from "react-router-dom";

interface ICustomMarkerProps {
  center: {
    lat: any;
    lng: any;
  };
  content: IMarker;
}

export function CustomMarker(props: ICustomMarkerProps) {
  const navigate = useNavigate();
  const center = props.center;
  const content = props.content;

  const onClickMarkerHandler = (id: number): void => {
    navigate(`/marsocial/${id}/detalhes`);
  };

  return (
    <OverlayView
      position={center}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className="marker" onClick={() => onClickMarkerHandler(content.id)}>
        <img src={MarAbertoIcon} alt="" />
        <div>{content.nomeAtividade}</div>
      </div>
    </OverlayView>
  );
}
