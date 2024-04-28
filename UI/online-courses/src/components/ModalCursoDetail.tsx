import Book from "../assets/icons/Book.svg";
import Timer from "../assets/icons/Timer.svg";
import Picture from "../assets/icons/Picture.svg";
import Reset from "../assets/icons/Reset.svg";
import Close from "../assets/icons/Close.svg";

export const ModalCursoDetail = ({ onClose, course }: any) => {
  const handleCancel = () => {
    onClose();
  };

  const formattedCategoria = course.categoria.replace(/_/g, " ");

  return (
    <>
      {course && (
        <article className="modal-curso-detail">
          <div className="modal-curso-detail-container">
            <button className="modal-curso-btn-close" onClick={handleCancel}>
              <img src={Close} alt="image" />
            </button>

            <section className="modal-curso-detail-content">
              <div className="modal-curso-detail-content-panel-left">
                <label
                  htmlFor="title"
                  className="modal-curso-detail-content-panel-left-title"
                >
                  Diseño web
                </label>

                <label
                  htmlFor="subtitle"
                  className="modal-curso-detail-content-panel-left-subtitle"
                >
                  Categoria: {formattedCategoria}
                </label>

                <div className="modal-curso-detail-content-panel-left-description">
                  <label
                    htmlFor="descripcion-title"
                    className="modal-curso-detail-content-panel-left-description-title"
                  >
                    Descripcion:
                  </label>
                  <p className="modal-curso-detail-content-panel-left-description-text">
                    {course.descripcion} Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsu
                  </p>
                </div>

                <div className="modal-curso-detail-content-panel-left-list">
                  <label
                    htmlFor="instructor"
                    className="modal-curso-detail-content-panel-left-list-title"
                  >
                    Lo que aprenderás:
                  </label>
                  <ul className="modal-curso-detail-content-panel-left-list-items">
                    <li>
                      {course.aprenderas} Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsu Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsu
                    </li>
                  </ul>
                </div>

                <div className="modal-curso-detail-content-panel-left-list">
                  <label
                    htmlFor="instructor"
                    className="modal-curso-detail-content-panel-left-list-title"
                  >
                    Requisitos del curso:
                  </label>
                  <ul className="modal-curso-detail-content-panel-left-list-items">
                    <li>{course.requisitos}</li>
                  </ul>
                </div>
              </div>

              <div className="modal-curso-detail-content-panel-right">
                <div className="modal-curso-detail-content-panel-right-img">
                  <div className="modal-curso-detail-content-panel-right-img-container">
                    <img src={course.imagen} alt="image" />
                  </div>
                </div>

                <div className="modal-curso-detail-content-panel-right-text-first">
                  <label
                    htmlFor="costo"
                    className="modal-curso-detail-content-panel-right-text-first-costo"
                  >
                    Costo: {course.costo} bs
                  </label>

                  <label htmlFor="instructor">Instructor: Juan Perez</label>
                  <label htmlFor="extra">Informacion extra: Ninguna</label>
                </div>

                <div className="modal-curso-detail-content-panel-right-text-second">
                  <div className="modal-curso-detail-content-panel-right-text-second-item">
                    <img src={Timer} alt="icon" />
                    <label htmlFor="duracion">Duracion: 5 semanas</label>
                  </div>

                  <div className="modal-curso-detail-content-panel-right-text-second-item">
                    <img src={Picture} alt="icon" />
                    <label htmlFor="duracion">Nivel: Intermedio</label>
                  </div>

                  <div className="modal-curso-detail-content-panel-right-text-second-item">
                    <img src={Reset} alt="icon" />
                    <label htmlFor="duracion">
                      Ultima actualizacion: 08/04/2024
                    </label>
                  </div>

                  <div className="modal-curso-detail-content-panel-right-text-second-item">
                    <img src={Book} alt="icon" />
                    <label htmlFor="duracion">Estudiantes: 100</label>
                  </div>
                </div>

                <div className="modal-curso-detail-content-panel-right-buttons">
                  <button>Comprar Ahora</button>
                  <button>Añadir a la cesta</button>
                </div>
              </div>
            </section>
          </div>
        </article>
      )}
    </>
  );
};
