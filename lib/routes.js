if (Meteor.isClient) {
	Accounts.onLogin(function(){
		FlowRouter.go('category-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});	
}

FlowRouter.triggers.enter([function(context, redirect){
	if (!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/',{
	name: 'home',
	action(){
		if (Meteor.userId()) {
			FlowRouter.go('category-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});


FlowRouter.route('/category-book',{
	name: 'category-book',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Categories'}); /*route ke main dengan template test*/
	}
});

FlowRouter.route('/category/:id',{
	name: 'category',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'CategorySingle'}); /*route ke main dengan template test*/
	}
});

FlowRouter.route('/menu',{
	name: 'menu',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Menu'}); /*route ke main dengan template test*/
	}
});


FlowRouter.route('/shopping-list',{
	name: 'shopping-list',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'}); /*route ke main dengan template test*/
	}
});