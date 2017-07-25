Template.Category.helpers({
	updateCategoryId: function() {  /*updateCategoriId*/
		return this._id;
	}
});

Template.Category.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu); 
	},
	'click .fa-trash': function(){
		Meteor.call('deleteCategory', this._id); /*ke collections categories method*/
	},
	'click .fa-pencil': function(){
		Session.set('editMode', !Session.get('editMode'));
	}
});