import axios from "axios";
import { useState } from "react";
interface QueryParams {
  method: string;
  url: string;
  bodyData: {};
}
export default async function query({ method, url, bodyData }: QueryParams) {
  try {
    const response = await fetch(`https://oridsan.fly.dev/api/v1${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    if (data.success) {
      return { success: true, data: data };
    } else {
      return { success: false, data: data };
    }
  } catch (err) {
    return { success: false, error: err };
  }
}
