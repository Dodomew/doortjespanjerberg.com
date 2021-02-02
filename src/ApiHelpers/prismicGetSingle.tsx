import { client } from "../prismic-configuration";

type prismicGetSingleProps = {
    id: string;
    options: {
        [key: string]: string | number | string[];
    };
};

export async function prismicGetSingle({ id, options }: prismicGetSingleProps) {
    return await client.getSingle(id, options);
}