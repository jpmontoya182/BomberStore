const con = require('../cnx');

function getAllCategories(req, res){
    // var page = req.params.page || 1;
    var itemsPerPage = 5;

    con.query("select category_id, name, description, date from category where status = 1", (err, data)=>{
       if(err) {
           res.status(500).send({message : 'Error en la Petición'});
       }else{
           if(!data || data.length == 0){
               res.status(404).send({message : 'No existen categorias'})
           }else {
               return  res.status(200).send({data : data});
           }
       }
    })
}

module.exports = {
    getAllCategories
}