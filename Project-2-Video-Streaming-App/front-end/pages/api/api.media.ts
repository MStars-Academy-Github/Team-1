import axios from "axios";

export const create = async (params: any, media: any) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}v1/media/upload/${params.userId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: media,
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const list = async (params: any): Promise<any> => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/video/by/${params.userId}`
    );
    return result.data.data;
  } catch (error) {
    return error;
  }
};

export const edit = async (params: any): Promise<any> => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/info/${params.id}`
    );
    return result.data.data;
  } catch (error) {
    return error;
  }
};
