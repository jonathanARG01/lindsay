import PropTypes from 'prop-types';



export const FirstApp = ({ title, subTitle }) => {

    console.log( title );

    return (
        <>
            <h1> { title } </h1>
            <h2> { subTitle } </h2>
        </>
    )

}



FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título'
}