import { ApolloError } from "apollo-server-core";

const handleErrors = (error: any) => {
  // LND Error
  if (Array.isArray(error)) {
    throw new ApolloError(error[2].err, error[0])
  }

  throw new ApolloError(error, "500");
};

const ErrorHelpers = {
  handleErrors,
};

export default ErrorHelpers;
