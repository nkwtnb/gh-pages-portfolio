import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../ProductItem";
import Product1 from "../../resources/images/product1.png";
import NoImage from "../../resources/images/noimage.png";
import Monologue from "../../resources/images/monologue.png";

const Contents = function (props: any) {
  return (
    <Container fluid="md" className="h-100 d-flex align-items-top justify-content-center">
      <Row className="h-100 w-100">
        <ProductItem items={
          [
            {
              title: "Portfolio",
              detail: "自分のポートフォリオページです。（このページ）",
              image: Product1.src,
              github: "https://github.com/nkwtnb/gh-pages-portfolio",
              url: "https://nkwtnb.github.io/gh-pages-portfolio/",
              skills: ["TypeScript", "React", "Bootstrap(React-Bootstrap)", "styled-components"]
            },
            {
              title: "Monologue",
              detail: "Twitterを参考にしたSNSです。画像の投稿、OGPの表示などを実装。",
              image: Monologue.src,
              github: "https://github.com/nkwtnb/twitter-clone",
              url: "https://monologue.naoki-w.com",
              skills: ["TypeScript", "React", "React Router", "PHP", "Laravel"]
            },
            {
              title: "OGParser",
              detail: "WebページのOGPを取得するライブラリです。",
              github: "https://github.com/nkwtnb/OGParser",
              image: NoImage.src,
              skills: ["PHP"]
            },
          ]
        } />
      </Row>
    </Container>
  );
};

export default function Products(props: any) {
  return (
    <section>
      <Contents />
    </section>
  );
}
