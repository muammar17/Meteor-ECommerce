Meteor.publish('categories', function(){
	return Categories.find({author: this.userId});
});

Meteor.publish('singleCategory', function(id){
	check(id, String);
	return Categories.find({_id: id});
});