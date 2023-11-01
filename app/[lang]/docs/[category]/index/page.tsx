import { categories } from "_appData";
import { Params } from "_types";

type Props = Params;
export default function categoryPage(props: Props) {
  const { params } = props;

  const category = categories(params.lang).filter((category: any) => {
    return category.title === decodeURI(params.category);
  });

  return <div>{JSON.stringify(category, null, 2)}</div>;
}
