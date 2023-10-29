import Button from "_components/details/Button";
import api from "_controls/api";
import { Params } from "_types";

type item = { title: string; number: string; image: object };

type Props = Params;
export default async function HomeNavigation(props: Props) {
  const { params } = props;

  const data = await api("/category", params.lang);

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
