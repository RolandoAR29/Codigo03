const {response} = require('express');


const crearUsuario = (req, res=response) => {
    const {name, email, password} = req.body;
    if (name.length < 5 ) {
        return res.json({
            ok: false,
            msg: 'El nombre debe ser de 5 letras minimo'
        })
    }
        res.json({
            ok: true,
            msg:'registro',
            name,
            email,
            password

        })
}

const loginUsuario = (req,  res=response) => {
    const {email, password} = req.body;
    res.json({
        ok: true,
        msg:'login'
    })
}

const revalidarToken = (req,  res=response) => {
    res.json({
        ok:true,
        msg:'login'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}