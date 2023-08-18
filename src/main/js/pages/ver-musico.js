const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerMusicoPage = () => {

    let { id } = useParams();
    const [musico, setMusico] = useState({});

    client({
        method: 'GET',
        path: '/api/musicos/' + id
    }).done(response=>setMusico(response.entity))


    return (
        <>
            <h1>Ver Musico</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{musico.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerMusicoPage;