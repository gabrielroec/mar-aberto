import "./style.scss";
import StarRatingComponent from "react-star-rating-component";

interface IProps {
  rating: IRating;
}

export interface IRating {
  photo?: string;
  profile_photo?: string;
  local: string;
  nome: string;
  date: string;
  rating: number;
  content: string;
}

export function RatingCard(props: IProps) {
  const content = props.rating;
  return (
    <div className="card">
      <img draggable="false" className="banner" src={content.photo} alt="" />
      <div className="content">
        <div className="header">
          {content.profile_photo ? (
            <img draggable="false" className="profile-photo" src={content.profile_photo} alt="" />
          ) : (
            <div className="null-pfp"></div>
          )}
          <div className="info">
            <span className="dark-deep-green">{content.nome}</span>
            <span className="light small">{content.date}</span>
          </div>
          <StarRatingComponent
            name={`${content.nome}_rating`}
            value={content.rating}
          ></StarRatingComponent>
        </div>
        <div className="text small">{content.content}</div>
        <div className="local small dark-deep-green">{content.local}</div>
      </div>
    </div>
  );
}
