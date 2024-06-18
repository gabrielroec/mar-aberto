import "./style.scss";

interface ICardDestaqueProps {
  content: IDestaqueInfo;
}

export interface IDestaqueInfo {
  icon: string;
  title: string;
  description: string;
}

export function CardDestaque(props: ICardDestaqueProps) {
  const content = props.content;
  return (
    <div className="card-destaque">
      <img draggable="false" className="icon" src={content.icon} alt="" />
      <div className="info">
        <div className="bold">{content.title}</div>
        <div>{content.description}</div>
      </div>
    </div>
  );
}
