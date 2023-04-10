import { request, gql, GraphQLClient } from "graphql-request";
import {Post, PostConnection} from "@/interfaces/BlogInterface";

const graphQlApi: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;
const graphQLClient = new GraphQLClient(graphQlApi);

export const getPosts = async (): Promise<Array<Post>> => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            slug
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result: PostConnection = await graphQLClient.request<PostConnection>(query);

  return result.postsConnection.edges.reverse().slice(0, 3);
};
