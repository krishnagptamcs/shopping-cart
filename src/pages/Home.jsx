import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { Spinner } from "../components/Spinner";

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  // initialisseing ampty array for one card
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const output = await res.json();

      // console.log(output);

      // all the fetch p=output stored in empty array of posts
      setPosts(output);
    } catch (error) {
      console.log("No data fetch");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  console.log("the data in posts is..");

  console.log(posts);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid  xs:grid-cols-1  sm:grid-cols-2       md:grid-cols-3   lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5  min-h-[50px]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};
