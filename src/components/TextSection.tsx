import './TextSection.css';

interface TextSectionProps {
  title: string;
  description: string;
  id?: string;
}

const TextSection = ({ title, description, id }: TextSectionProps) => {
  return (
    <section className="text" id={id}>
      <div className="text__inner">
        <div className="text__inner__blocks">
          <div className="text__inner__text">
            <div className="text__inner__title">{title}</div>
            <div className="text__inner__describe">{description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;

