import DocsNav from "_components/DocsNav";
import Header from "_components/Header";
import { Children, Params } from "_types";

export async function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

type Props = Children & Params;
export default function languageLayout(props: Props) {
  const { children, params } = props;

  return (
    <>
      <Header />
      <DocsNav />

      {children}
    </>
  );
}
