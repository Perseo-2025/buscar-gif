import PropTypes from "prop-types";

export default function ImageItem({ tags, id, url }) {
    return (
      <div className=" text-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img
          key={id}
          src={url}
          alt={tags}
          className="w-full h-48 object-cover"
        />
        <div className="p-3 text-center">
          <p className="text-sm text-white">{tags}</p>
        </div>
      </div>
    );
  }
  
  ImageItem.propTypes = {
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }
  /*
  Tarea
  1.Añadir PropTypes
  a. title obligatoria
  b. url obligatoria
  2. Evaluar el snapshot
  */