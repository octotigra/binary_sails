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
            
            Name: req.body.Name, 
            Grade: req.body.Grade
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
            
            result.Name = req.body.Name;
            result.Grade = req.body.Grade;
            result.save(function(error) {
            
            if (error) {
            	return res.send(err);
            }
            return res.send("Success");
            
            });            
        })
	
	},

	remove: function(req, res)	 {
		Students.destroy({id: req.param('id')}).exec(function(err, result) {
           
		if (err) {
            return res.send(err);
        }   
        return res.send("Success");
        
        }); 
		
	}
};