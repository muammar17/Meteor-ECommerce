//Meteor.subscribe('categories');

Template.CategorySingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleCategory', id);
	});
});

Template.CategorySingle.helpers({
	category: ()=> {
		var id = FlowRouter.getParam('id');
		return Categories.findOne({_id:id});
	}
});