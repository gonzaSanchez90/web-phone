const express = require('express');
const router = express.Router();
const Moviles = require('../modelo/modeloSmartphone');

router.get('/', (req,res,next)=>{
    res.render('index');
});
router.get('/quienesSomos', (req,res,next)=>{
    res.render('quienesSomos');
})
router.get('/nosotros',(req, res,next)=>{
    res.render('nosotros');
});

router.get('/administrador', (req,res,next)=>{
    res.render('administrador');
});

router.get('/enContruccion', (req,res,next)=>{
    res.render('enConstruccion')
});
router.get('/contacto',(req,res,next)=>{
    res.render('contacto')
})
router.get('/formasDePago',(req,res,next)=>{
    res.render('formaPagos')
})
/*------------------CRUD DE BBDD-------------------- */
router.get('/administrador/alta', (req,res,next)=>{
    res.render('alta');
});
router.post('/administrador/alta', async(req,res,next)=>{
    const nuevoSmartphone = new Moviles(req.body);
    await nuevoSmartphone.save();
    res.render('administrador');
});
router.get('/administrador/baja', (req,res,next)=>{
    res.render('baja');
});
router.post('/administrador/baja', async(req,res,next)=>{
    const telefono = req.body;
    const phone = await Moviles.findOne({$and:[{marca:telefono.marca},{modelo:telefono.modelo},{version:telefono.version}]});
    if(phone==null)
    {
        res.render('error');
    }else{
        await Moviles.findOneAndDelete({$and:[{marca:telefono.marca},{modelo:telefono.modelo},{version:telefono.version}]})
        res.render('administrador');
    }
});
router.get('/administrador/modificar',async(req,res,next)=>{
    res.render('modificar');
});
router.post('/administrador/modificar2',async(req,res,next)=>{
    const telefono = req.body;
    console.log(telefono);
    const elemento = await Moviles.findOne({$and:[{marca:telefono.marca},{modelo:telefono.modelo},{version:telefono.version}]});
    if(elemento==null)
    {
        res.render('error');
    }
    else
    res.render('modificar2', {telefono:elemento});
});
router.post('/administrador/modificar3',async(req,res,next)=>{
    const id = req.body.id;
    await Moviles.findByIdAndUpdate({_id:id}, req.body);
    res.render('administrador');
});
router.get('/administrador/mostrar', async (req,res,next)=>{
    const moviles = await Moviles.find();
    res.render('mostrar', ({telefonos:moviles}));
});
/*------------------------FIN DEL CRUD--------------------*/








module.exports = router;