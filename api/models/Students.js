/**
* Students.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'someMysqlServer', 

  attributes: {
  		
  		id: {
  			type: 'string',
    		autoIncrement: true
  		},

  		name: {
  			type: 'string'
  		},

  		grade: {
  			type: 'string'
  		},
  }
};
