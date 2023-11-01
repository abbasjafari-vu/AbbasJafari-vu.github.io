import { categories } from "_appData";
import { Params } from "_types";

type Props = Params;
export default function categoryPage(props: Props) {
  const { params } = props;

  const {
    title,
    introduction,
    whatIs,
    feature,
    advantages,
    useCases,
    architecture,
    Challenge,
    conclusion,
  } = categories(params.lang).filter((category: any) => {
    return category.slug === params.category;
  })[0].discription;

  return (
    <div className="rtl:font-light text-primary-gray">
      <h1 className="my-5 font-bold">{title}</h1>
      <div>
        <p className="font-bold">{introduction.title}</p>
        <p>{introduction.text}</p>
      </div>
      <div>
        <p className="font-bold">{whatIs.title}</p>
        <p>{whatIs.text}</p>
      </div>
      <div>
        <p className="font-bold">{feature.title}</p>
        <ul className="ps-4 flex flex-col">
          {feature.cases.map((item, index) => (
            <li key={`feature-${index}`}>
              <b className="me-1">{item.title}</b>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-bold">{advantages.title}</p>
        <ul className="ps-4 flex flex-col">
          {advantages.cases.map((item, index) => (
            <li key={`feature-${index}`}>
              <b className="me-1">{item.title}</b>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-bold">{useCases.title}</p>
        <ul className="ps-4 flex flex-col">
          {useCases.cases.map((item, index) => (
            <li key={`feature-${index}`}>
              <b className="me-1">{item.title}</b>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      {architecture ? (
        <div>
          <p className="font-bold">{architecture.title}</p>
          <p>{architecture.text}</p>
        </div>
      ) : null}
      {Challenge ? (
        <div>
          <p className="font-bold">{Challenge.title}</p>
          <p>{Challenge.text}</p>
        </div>
      ) : null}
      <div>
        <p className="font-bold">{conclusion.title}</p>
        <p>{conclusion.text}</p>
      </div>
    </div>
  );
}
