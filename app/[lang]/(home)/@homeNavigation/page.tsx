import { getCategories } from "_appData";
import Button from "_components/details/Button";
import { Params } from "_types";

type item = { title: string; number: string; image: object };

type Props = Params;
export default async function HomeNavigation(props: Props) {
  const { params } = props;

  const data = await getCategories(params.lang);

  return (
    <>
      {data.map((item: item) => (
        <Button
          href={"/" + params.lang + "/post/" + item.title}
          key={item.number}
        >
          {item.title}
        </Button>
      ))}
    </>
  );
}
