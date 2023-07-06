import axios from "axios";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

const confluenceRootUri = "https://confluence.cgiostersund.se/";

const getAllChildren = "https://confluence.cgiostersund.se/rest/api/content/search?cql=parent=189901197";

const getFromConfluence = `https://confluence.cgiostersund.se/rest/api/content/292692906?expand=body.storage`;

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

export const getList = async () => {

  const { data: response } = await axios.request({
    method: "get",
    url: getAllChildren,
    withCredentials: false,
    headers: {
      "Content-type": "application/json",
    }
  });
  console.log(response);
  return response;
};

export const getpage = async (id: number) => {

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


export const fetchIdpData = async (url: string) => {
  try {
    await axios.request({
      method: "get",
      withCredentials: false,
      url: url,
      headers: {
        "Content-type": "application/json",
      }
    });
    return "UP";
  } catch (error) {
    console.error("error");
    return "DOWN";
  }
}