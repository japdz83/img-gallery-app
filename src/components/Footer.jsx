import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="navbar navbar-dark bg-primary text-center">
                <div className="container-fluid text-center ">
                    <h5 className="navbar-brand text-center w-100" >
                        Japdz - &copy; Todos los Derechos Reservados { new Date().getFullYear() }{ " " }
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Footer