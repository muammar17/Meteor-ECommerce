Categories = new Mongo.Collection('categories');

Categories.allow({
	insert: function(userId, doc){  /*rule sign in*/
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

Book = new SimpleSchema({
	name:{
		type:String,
	},
	price:{
		type:String
	}
});

CategorySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	books:{
		type:[Book]
	},
	inMenu:{
		type:Boolean,
		defaultValue: false,
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	author:{
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt:{
		type: Date,
		label:"Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Categories.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteCategory: function(id){
		Categories.remove(id);
	}
});

Categories.attachSchema(CategorySchema);