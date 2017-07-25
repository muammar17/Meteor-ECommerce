Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('categories');
	});
});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Categories.find({inMenu: true});
	}
});