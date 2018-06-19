"use strict";

const key = process.env.TRANSFORMER_DATA_KEY || 'data';

class Transformer {

	/* *
	 * constructor taking an orm 
	 * object 
	 * */
    constructor(orm){
        this._orm = orm;
    }

	/**
	 * overridable transform function 
	 * to get the users custom transform 
	 **/
    transform(orm){
    	//defaultly return the json format 
    	//of the orm object
        return orm.toJson();
    };

	/**
	 * function to get the serialised version
	 * of the transformer 
	 **/
    toJson(){
    	//returns the serialised version based on the 
    	//user defined key of the data key
      return {[key]:this.transform(this._orm)};
    };
}

module.exports = Transformer;