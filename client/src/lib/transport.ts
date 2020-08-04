import i18next from "./i18next";

export async function transport(params: { [key: string]: any }): Promise<any> {
  const options: any = {
    method: params.method,
    body: params.body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  let response;
  try {
    response = await fetch(params.url, options);
  } catch (error) {
    throw new Error(i18next.t("errors:network"));
  }

  if (!response.ok) {
    let error;
    try {
      error = await response.json();
    } catch (innerError) {
      throw new Error(i18next.t("errors:network"));
    }
    throw error;
  }

  if (response.status !== 204) {
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(i18next.t("errors:network"));
    }
  }

  return response;
}
