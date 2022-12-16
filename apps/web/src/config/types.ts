export type DataType = {
  companyName: string;
  ensNames: string[];
  available: boolean[];
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

export type FormattedEnsType = {
  name: string;
  nameTag1: string;
  nameTag2: string;
};
