Meteor.startup(function() {
	RocketChat.MessageAction.addButton({
		id: 'jump-to-message',
		icon: 'right-hand',
		label: 'Jump_to_message',
		context: ['mentions'],
		action() {
			const message = this._arguments[1];
			RocketChat.MessageAction.hideDropDown();
			if (window.matchMedia('(max-width: 500px)').matches) {
				Template.instance().tabBar.close();
			}
			RoomHistoryManager.getSurroundingMessages(message, 50);
		},
		condition(message) {
			return message.mentionedList === true;
		},
		order: 100,
		group: 'menu'
	});
});
