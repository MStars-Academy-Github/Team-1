export const create = async (params: any, media: any) => {
  try {
    let response = await fetch(
      "http://localhost:4000/v1/media/upload" + params.userId,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: media,
      }
    );
    const result: JSON = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
