 import './SubTitulo.css';
 
export const SubTitulo = ({text, id, tamano}) => {
    return (
        <h2 className={tamano + " sub-titulo"} id={id}>{text}</h2>
    )
};