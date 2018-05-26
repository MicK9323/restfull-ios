var Usuario = require('../models/usuario');

exports.test = (req,res) => {
    res.status(200).json({
        ok:true,
        mensaje:'Api a la espera de peticiones!!'
    })
};

exports.usuario_create = (req,res) => {
    var usuario = new Usuario({
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        correo: req.body.correo,
        clave: req.body.clave,
    });

    usuario.save( (err, obj) =>{
        if(err){
            res.status(500).json({
                ok:false,
                mensaje:'Error al intentar registrar el usuario'
            })
        }else{
            res.status(200).json(obj);
        }
    });
}

exports.usuario_login = (req,res) => {
    var usuario = new Usuario({
        correo: req.body.correo,
        clave: req.body.clave,
    });

    Usuario.findOne({correo: usuario.correo, clave: usuario.clave},(err, obj) => {
        if(err){
            res.status(500).json({
                ok:false,
                mensaje:'Error de conexión al servidor'
            })
        }else{
            if(obj){
                res.status(200).json(obj);
            }else{
                res.status(401).json({
                    ok:false,
                    mensaje:'Credenciales incorrectas'
                });
            }
        }
    });
}