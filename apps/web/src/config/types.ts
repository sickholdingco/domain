export type DataType = {
  companyName: string;
  ensName: string;
  available: boolean;
};

export type EnsType = {
  ensName: string;
  available: boolean;
};

export type OpenAIResponseType = {
  result: string;
};

export type UseQueryResponseType = {
  data: DataType[];
  status: "SUCCESS" | "FAILURE";
};
