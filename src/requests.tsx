import axios from "axios";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

const getStatusChildren = "https://confluence.cgiostersund.se/rest/api/content/search?cql=parent=318540691";
const getReleaseChildren = "https://confluence.cgiostersund.se/rest/api/content/search?cql=parent=189901197"

export const fetchData = async (url: string) => {
  try {
    const { data: response } = await axios.request({
      method: "get",
      url: url,
      withCredentials: false,
      headers: {
        "Content-type": "application/json",
      }
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
}


export const getStatusList = async () => {
  const { data: response } = await axios.request({
    method: "get",
    url: getStatusChildren,
    withCredentials: false,
    headers: {
      "Content-type": "application/json",
    }
  });
  return response;
};


export const getReleaseList = async () => {
  const { data: response } = await axios.request({
    method: "get",
    url: getReleaseChildren,
    withCredentials: false,
    headers: {
      "Content-type": "application/json",
    }
  });
  return response;
};


export const getPageDetails = async (id: number) => {
  const { data: response } = await axios.request({
    method: "get",
    url: "https://confluence.cgiostersund.se/rest/api/content/" + id + "?expand=body.storage",
    withCredentials: false,
    headers: {
      "Content-type": "application/json",
    }
  });
  return response;
};