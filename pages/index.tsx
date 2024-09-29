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
    <Layout title="Vignesh - Online Cracker Quotation">
      <div>
      <SCategoryImage
              src={`/images/4.jpg`}
              alt=""
              srcSet={'/images/4.jpg'}
            />
      </div>
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
export const SCategoryImage = styled.img`
vertical-align: bottom;
    border-radius: 0.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: sticky;
    /* top: 0px; */
    /* left: 25px; */
    width: 20%;
    background-color: rgb(255, 255, 255);
    padding: 1rem 0px;
    z-index: 1000;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15%;
`;