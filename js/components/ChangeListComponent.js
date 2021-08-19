var CHANGES = [{
	date: '9/10/19',
	comment: 'The website now remembers if you toggled nightmode (in your current session), and renders the page accordingly!'
}, {
	date: '12/17/19',
	comment: 'You can now read the home page headings even if you are navigating with a keyboard - the panels now properly display their headings when focused.'
}, {
	date: '6/2/20',
	comment: 'Keyboard navigation in the gallery is now fully implemented; \n\t\t\tyou can now use arrow keys to navigate through gallery images and use the enter key to click on them. Neat.'
}, {
	date: '6/18/20',
	comment: 'Gallery images can now be previewed in full by focusing or hovering them. \n\t\t\tThe modal has been updated to look more cohesive.'
}, {
	date: '7/3/20',
	comment: 'The gallery modal buttons can now be hidden for an unobstructed view of the image.\n\t\t\tThe buttons are also more visible now.'
}, {
	date: '8/11/20',
	comment: 'The gallery sidebar is more tactful now and automatically gets out of the user\'s way.\n\t\t\tThe gallery has also received a much needed visual overhaul (uniform, square thumbnails!).'
}, {
	date: '10/5/20',
	comment: 'There is now a descriptive landing page for code projects instead of a direct link to my github.\n\t\t\tThe gallery categories are now mutually exclusive and aren\'t visible to each other through the modal.'
}, {
	date: '10/16/20',
	comment: 'It\'s time to say goodbye to the lightmode toggle \uD83D\uDE22. The toggle feature was always a compromise, \n\t\t\tand having two color modes for every page brought twice the issues. While it was fun to work on, unfortunately it was more prohibitive than useful.'
}, {
	date: '12/5/20',
	comment: 'You can now reach any of the site\'s pages, from any page, with one click (two for mobile).\n\t\t\tThe new navbar makes the site easier to navigate.'
}, {
	date: '8/19/21',
	comment: 'This change list now renders from an array of change entries with React - it makes adding further entries a breeze!'
}];

var ChangeListEntry = function ChangeListEntry(_ref) {
	var change = _ref.change;

	return React.createElement(
		'li',
		{ className: 'list-entry' },
		React.createElement(
			'b',
			null,
			change.date
		),
		React.createElement(
			'p',
			null,
			change.comment
		)
	);
};

var ChangeList = function ChangeList() {
	return React.createElement(
		'ul',
		null,
		CHANGES.map(function (change) {
			return React.createElement(
				'div',
				{ key: change.date },
				React.createElement(ChangeListEntry, { change: change }),
				React.createElement('br', null)
			);
		})
	);
};

var domContainer = document.querySelector('#change_list');
ReactDOM.render(React.createElement(ChangeList, null), domContainer);