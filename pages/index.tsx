import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { CategoryList } from "../components/Category";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar/SearchBar";
import { ITopCategories, ITopProducts } from "../types";
import { getData } from "../utils";
import { ProductSection } from "../components/Products";
import { useApp } from "../context/AppContext";
import { OuterContainer } from "../components/helpers";
import Layout from "../components/Layout";

type HomeProps = IStaticProps;
interface IStaticProps {
  top_categories: ITopCategories[];
  top_products: ITopProducts[];
}
export default function Home({
  top_categories,
  top_products,
}: HomeProps): ReactElement {
  return (
    <Layout title="Vignesh - Online Cracker Quation">
      <OuterContainer>
        <SearchBar />
        <SSpacer />
        <SSectionHeading>Top Categories</SSectionHeading>
        <CategoryList categories={top_categories} />
        {top_products.map((product) => {
          return <ProductSection key={product.category_name} {...product} />;
        })}
        <div style={{ marginBottom: "6rem" }}></div>
        <Menu />
      </OuterContainer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async () => {
  const data = getData();
  return { props: data };
};

export const SSectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing["5"]};
`;
const SSpacer = styled.div`
  margin-top: ${({ theme }) => theme.spacing["6"]};
`;
