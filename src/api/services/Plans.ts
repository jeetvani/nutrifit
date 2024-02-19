import { AxiosResponse } from "axios";
import API from "../api";
import { PAYMENT_INTENT_ENPOINT, REFRESH_TOKEN_ENDPOINT } from "../endpoints";

export const getPaymentIntent = async (): Promise<{
  paymentIntent: string;
  ephemeralKey: string;
  customer: string;
}> => {
  try {
    const response = await API.get(PAYMENT_INTENT_ENPOINT, {});
    return response.data;
  } catch (error) {
    throw error;
  }
};
