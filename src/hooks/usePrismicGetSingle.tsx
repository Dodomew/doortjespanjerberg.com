import { useEffect, useState } from "react";
import { Document as PrismicDocument } from "prismic-javascript/d.ts/documents"; //There is a React Document and a Prismic Document = namespace clash
import { client } from "../prismic-configuration";

/*
  Hook for getting Prismic single document types by document id, like "homepage", "footer" etc
*/

interface PrismicGetSingleProps {
  id: string;
}

function usePrismicGetSingle(params: PrismicGetSingleProps) {
  const [data, setData] = useState<PrismicDocument>();
  const { id } = { ...params };

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchDataAsync = async () => {
      const prismicData = await client.getSingle(id);
      setData(prismicData);
    };
    fetchDataAsync();
  }, []);

  return data;
}

export default usePrismicGetSingle;
