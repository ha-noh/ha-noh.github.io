const CHANGES = [
	{
		date: '9/10/19',
		comment: 
			'The website now remembers if you toggled nightmode (in your current session), and renders the page accordingly!'
	},
	{
		date: '12/17/19',
		comment: 
			'You can now read the home page headings even if you are navigating with a keyboard - the panels now properly display their headings when focused.'
	},	
	{
		date: '6/2/20',
		comment: 
			`Keyboard navigation in the gallery is now fully implemented; 
			you can now use arrow keys to navigate through gallery images and use the enter key to click on them. Neat.`
	},
	{
		date: '6/18/20',
		comment: 
			`Gallery images can now be previewed in full by focusing or hovering them. 
			The modal has been updated to look more cohesive.`
	},
	{
		date: '7/3/20',
		comment: 
			`The gallery modal buttons can now be hidden for an unobstructed view of the image.
			The buttons are also more visible now.`
	},
	{
		date: '8/11/20',
		comment: 
			`The gallery sidebar is more tactful now and automatically gets out of the user's way.
			The gallery has also received a much needed visual overhaul (uniform, square thumbnails!).`
	},
	{
		date: '10/5/20',
		comment: 
			`There is now a descriptive landing page for code projects instead of a direct link to my github.
			The gallery categories are now mutually exclusive and aren't visible to each other through the modal.`
	},
	{
		date: '10/16/20', 
		comment:
			`It's time to say goodbye to the lightmode toggle 😢. The toggle feature was always a compromise, 
			and having two color modes for every page brought twice the issues. While it was fun to work on, unfortunately it was more prohibitive than useful.`
	},
	{
		date: '12/5/20',
		comment: 
			`You can now reach any of the site's pages, from any page, with one click (two for mobile).
			The new navbar makes the site easier to navigate.`
	},
	{
		date: '8/19/21',
		comment: 
		`This change list now renders from an array of change entries with React - it makes adding further entries a breeze!`
	}
];

const ChangeListEntry = ({change}) => {
	return (
		<li className="list-entry">
			<b>{change.date}</b>
			<p>{change.comment}</p>
		</li>
	);
};

const ChangeList = () => {
	return (
		<ul>
			{CHANGES.map(change => {
				return(
					<div key={change.date}>
						<ChangeListEntry change={change}/>
						<br/>
					</div>
				);
			})}
		</ul>
	);
};

const domContainer = document.querySelector('#change_list');
ReactDOM.render(<ChangeList/>, domContainer);
