//Version history:
//1.0RC1 Carlesso Cristian ( mykenta.blogspot.com)
//1.0RC2 Andrea Giammarchi
//1.0MT Carlesso Cristian 

var container = {
	C : {},

	byConstructor:function(){
		var	args = [].slice.call(arguments),
			Obj = this.find(args.shift());
		return	Obj.apply(Obj, args)
	},

	bySetter:function(){
		var	args = [].slice.call(arguments),
			Obj = this.find(args.shift());	
		return	Function.extend.apply(Obj,args);
	},

	find:function(id){
		return	this.C[id]
	},

	register:function(id, component){
		this.C[id] = component
	}
};