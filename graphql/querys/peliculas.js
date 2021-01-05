import { gql } from "@apollo/client"

export const PELICULAS = gql`
query getPeliculas($input: PaginacionInput!){
  getPeliculas(input: $input){
    id 
    titulo
    descripcion
    imagen
  }
}
`;

export const PRUEBA = gql`
  query{
    prueba
  }
`;

