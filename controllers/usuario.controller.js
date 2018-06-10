var Usuario = require('../models/usuario.model');

exports.test = (req,res) => {
    res.status(200).json({
        success:true,
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
                success:false,
                mensaje:'Error al intentar registrar el usuario'
            })
        }else{
            res.status(200).json({
                success: true,
                mensaje: 'Registro exitoso',
                usuario: obj
            });
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
                success:false,
                mensaje:'Error de conexión al servidor'
            })
        }else{
            if(obj){
                res.status(200).json({
                    success: true,
                    mensaje: 'Usuario Autenticado',
                    usuario: obj
                });
            }else{
                res.status(401).json({
                    success:false,
                    mensaje:'Credenciales incorrectas'
                });
            }
        }
    });
}