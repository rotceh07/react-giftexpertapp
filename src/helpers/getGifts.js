 
export const getGifts = async (category) => {
  const url =`http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=u4FurHiQgGPSHvGo9a6g8HJuje8ZQ4bo&limit=10`;
 
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};