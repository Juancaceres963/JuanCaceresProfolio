 import './SubTitulo.css';
 
export const SubTitulo = ({text, id}) => {
    return (
        <h2 className="sub-titulo" id={id}>{text}</h2>
    )
};