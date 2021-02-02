import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";

type prismicGetByTypeProps = {
    types: Set<string>;
    options: {
        [key: string]: string | number | string[];
    };
};

export async function prismicGetByType({ types, options }: prismicGetByTypeProps) {
    const typesArray = Array.from(types);
    return await client.query(Prismic.Predicates.any("document.type", typesArray), options);
}