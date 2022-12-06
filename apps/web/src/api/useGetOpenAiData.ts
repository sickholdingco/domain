import { useQuery } from "react-query";

export const useGetOpenAiData = (description: string) => {
  const fetchOpenAIData = async () => {
    const response = await (
      await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyDescription: description }),
      })
    ).json();
    return response.result.split(", ");
  };

  return useQuery(["open-ai-response"], fetchOpenAIData, { enabled: false });
};
