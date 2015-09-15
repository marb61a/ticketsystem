Router.configure({
    layoutTemplate: 'layout'
});


var OnBeforeActions = {
	isStaff : function(){
		// If staff
		if(Meteor.user()){
			// Check if Staff
			if(Meteor.user().profile.usertype == 'staff'){
				Router.go('/staff');
			} else {
				this.next();
			}
		} else {	
			this.next();
		}
	}
};

Router.onBeforeAction(OnBeforeActions.isStaff, {
	only: ['mytickets']
});

Router.map(function(){
	this.route('mytickets', {
		path:'/',
		template: 'mytickets',
		data: function(){
			templateData = {
				tickets: Tickets.find({customer: Meteor.userId()}),
			};
			
			return templateData;
		}
	});
});