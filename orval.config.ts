import { defineConfig } from 'orval';
 
export default defineConfig({
  petstore: {
    input: 'https://petstore.swagger.io/v2/swagger.json',
    output: { target: './src/api', client: 'react-query'}

  },
});