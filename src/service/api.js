const obtenerImagenes = async (cate) => {
    const url = `https://pixabay.com/api/?key=41128543-770abcef5620f897cc52b45d9&q=${encodeURIComponent(cate)}&image_type=photo&per_page=5`;
    
    const respuesta = await fetch(url);
    const { hits } = await respuesta.json();

    const images = hits.map(img => ({
        id: img.id,
        tags: img.tags,
        url: img.largeImageURL
    }));
    
    console.log(images);
    return images;
};

export default obtenerImagenes
