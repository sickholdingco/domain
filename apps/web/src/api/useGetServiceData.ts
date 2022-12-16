import { ENSInstance, provider } from "../config/ens";
import { useQuery } from "react-query";
import { DataType, OpenAIResponseType, UseQueryResponseType, FormattedEnsType } from "../config/types";

const failureResponse = {
  data: [],
  status: "FAILURE",
} as UseQueryResponseType;

const batchEnsCall = async (domain: FormattedEnsType) => {
  const batched = await ENSInstance.batch(
    ENSInstance.getAvailable.batch(domain.name),
    ENSInstance.getAvailable.batch(domain.nameTag1),
    ENSInstance.getAvailable.batch(domain.nameTag2)
  );
  return batched;
};

export const useGetServiceData = (description: string, tags: { id: string; tag: string }[]) => {
  const fetchData = async () => {
    try {
      await ENSInstance.setProvider(provider);
      const response: OpenAIResponseType = await (
        await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description, tags }),
        })
      ).json();

      const openAiOutput = response.result;
      const formattedDomains: FormattedEnsType[] = [];

      openAiOutput.forEach((domain: string) => {
        const names = {
          name: domain.replace(/[ .]/g, "").concat(".eth").toLowerCase() as string,
          nameTag1: domain
            .replace(/[ .]/g, "")
            .concat(tags[0]!.tag.split(" ").join(""))
            .concat(".eth")
            .toLowerCase() as string,
          nameTag2: domain
            .replace(/[ .]/g, "")
            .concat(tags[1]!.tag.split(" ").join(""))
            .concat(".eth")
            .toLowerCase() as string,
        };
        formattedDomains.push(names);
      });

      const formattedData: DataType[] = [];
      if (response) {
        for (let i = 0; i < 3; i++) {
          const batched = await batchEnsCall(formattedDomains[i]!);
          formattedData.push({
            companyName: openAiOutput[i]!,
            ensNames: [
              formattedDomains[i]!.name,
              formattedDomains[i]!.nameTag1,
              formattedDomains[i]!.nameTag2,
            ],
            available: [batched![0]!, batched![1]!, batched![2]!],
          });
        }
        return {
          data: formattedData,
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
