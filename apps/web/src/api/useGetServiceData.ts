import { ENSInstance, provider } from "../config/ens";
import { useQuery } from "react-query";
import { DataType, OpenAIResponseType, UseQueryResponseType } from "../config/types";

const failureResponse = {
  data: [],
  status: "FAILURE",
} as UseQueryResponseType;

export const useGetServiceData = (description: string) => {
  const fetchData = async () => {
    try {
      await ENSInstance.setProvider(provider);
      const response: OpenAIResponseType = await (
        await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ companyDescription: description }),
        })
      ).json();

      const openAiOutput = response.result.split(", ");
      let formattedDomains: string[];
      formattedDomains = [];
      openAiOutput.forEach((domain: string) => {
        formattedDomains.push(domain.replace(/[ .]/g, "").concat(".eth").toLowerCase() as string);
      });

      const batched = await ENSInstance.batch(
        ENSInstance.getAvailable.batch(formattedDomains[0]!),
        ENSInstance.getAvailable.batch(formattedDomains[1]!),
        ENSInstance.getAvailable.batch(formattedDomains[2]!)
      );

      if (batched && response) {
        const output: DataType[] = [
          {
            companyName: openAiOutput[0]!,
            ensName: formattedDomains[0]!,
            available: batched[0]!,
          },
          {
            companyName: openAiOutput[1]!,
            ensName: formattedDomains[1]!,
            available: batched[1]!,
          },
          {
            companyName: openAiOutput[2]!,
            ensName: formattedDomains[2]!,
            available: batched[2]!,
          },
        ];
        return {
          data: output,
          status: "SUCCESS",
        } as UseQueryResponseType;
      } else {
        return failureResponse;
      }
    } catch (err) {
      return failureResponse;
    }
  };

  return useQuery(["domain-service-response"], fetchData, { enabled: false });
};
