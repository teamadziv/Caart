import { gql } from 'graphql-request';
export const UploadUrlGenerateMutation = gql `
  mutation uploadUrlGenerate {
    uploadUrlGenerate {
      url
      moduleId
      headers
      maxSize
    }
  }
`;
//# sourceMappingURL=upload_url_generate.js.map