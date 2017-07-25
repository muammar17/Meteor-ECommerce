//Meteor.subscribe('categories');

Template.Categories.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('categories');
	});
});

Template.Categories.helpers({
	categories: ()=> {
		return Categories.find({});
	}
});