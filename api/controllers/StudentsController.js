/**
 * StudentsController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {
	getAll: function(req, res) {
		
		Students.find().exec(function(err, result){
            if (err) {
            	return res.send(err);
            }
            return res.send(result);
        });
	},

	get: function(req, res) {
	
		Students.findOne({where: {id: req.param('id')}}).exec(function(err, result){
          	if (err) {
            	return res.send(err);
            }
            return res.send(result);
        
        });
		
	},

	add: function(req, res)	 {
		
		var person = {    
            
            name: req.body.name, 
            grade: req.body.grade
        };
      
        Students.create(person).exec(function(err, result){
            if (err) {
            	return res.send(err);
            }
            return res.send("Success");
        
        });

	},	
	

	update: function(req, res)	 {
		 
		 Students.findOne({where: {id: req.param('id')}}).exec(function(err, result){
            
            result.name = req.body.name;
            result.grade = req.body.grade;
            result.save(function(error) {
            
            if (err) {
            	return res.send(err);
            }
            return res.send("Success");
            
            });            
        })
	
	},

	remove: function(req, res)	 {

        Students.destroy({id: req.param('id')}).exec(function(err) {
        
        if (err) {
            return res.send(err);
        }   
        return res.send("Success");

        });
		
	}
};