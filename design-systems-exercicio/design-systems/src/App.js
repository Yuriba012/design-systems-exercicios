import * as React from "react";
import { ChakraProvider, Button } from "@chakra-ui/react";
import Card from "./Components/Card";
import { useState } from "react";

export default function App() {
  const products = [
    {
      name: "Cadeira escritório",
      id: 1,
      color: "Branco",
      price: 200,
      dPrice: 57,
      brand: "Gamer",
      image: "https://m.media-amazon.com/images/I/316Ruu6hnJL._AC_SY450_.jpg",
    },
    {
      name: "Escrivaninha",
      id: 2,
      color: "Preto",
      price: 500,
      dPrice: 399,
      brand: "MadeiraMadeira",
      image:
        "https://product-hub-prd.madeiramadeira.com.br/766173/images/f15f59e6-b25e-48e7-8cfc-9ac0f90e7e24ispretotx1657141050200zoom.jpg?width=500&canvas=1:1&bg-color=FFF",
    },
    {
      name: "Nicho livros",
      id: 3,
      color: "Preto/marrom",
      price: 250,
      dPrice: 120,
      brand: "MadeiraMadeira",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_983424-MLB51718934951_092022-O.webp",
    },
  ];

  const [list, setList] = useState(products);

  return (
    <ChakraProvider>
      {list.map((product) => {
        return (
          <Card
            key={product.id}
            name={product.name}
            brand={product.brand}
            image={product.image}
            price={product.price}
            dPrice={product.dPrice}
          />
        );
      })}
    </ChakraProvider>
  );
}
