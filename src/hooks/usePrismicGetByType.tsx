import { useEffect, useState } from "react";
import { client } from "../prismic-configuration";
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse";
import Prismic from "prismic-javascript";

/*
  Hook for getting Prismic repeatable documents by type, such as "dialogue_page", "blog_post"
*/

interface PrismicGetByTypeProps {
  types: Set<string>;
  options?: {
    [key: string]: string | number | string[];
  };
}

function usePrismisGetByType(params: PrismicGetByTypeProps) {
  const [data, setData] = useState<ApiSearchResponse>();
  const { types, options } = { ...params };

  useEffect(() => {
    if (!types) {
      return;
    }

    const typesArray = Array.from(types);

    // ex: { orderings: "[my.dialogue_page.date desc]" }
    const queryOptions = options || {};

    const fetchDataAsync = async () => {
      const prismicData = await client
        .query(
          Prismic.Predicates.any("document.type", typesArray),
          queryOptions
        )
        .then((res) => {
          return res;
        });
      setData(prismicData);
    };
    fetchDataAsync();
  }, []);

  return data;
}

export default usePrismisGetByType;
