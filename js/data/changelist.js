export const CHANGES = [
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
			`There is now a descriptive landing page for the code projects li instead of a direct link to my github.
			The gallery categories are now mutually exclusive and aren't visible to each other through the modal.`
		
	},
	{
		date: '10/16/20', 
		comment: 
			`It feels strange to scrap an evergreen feature, but it's time to say goodbye to the lightmode toggle :(.
		
			Lightmode's, originally  nightmode's, purpose was to provide a less eye-straining display method.
			It was only really necessary because I thought the website's background <i>had</i> to be white; you know, because the home page is supposed to be a comic book page. 
			So really, having a toggle was a compromise between thematics and comfort.

			Having two modes for every page brought twice the issues:
			Every font color had to display nicely on both background colors; 
			the implementation of the nightmode switch made the site jarringly flash white on every page load; 
			adding colors to the palette was more labor-intensive than it should have been; 
			every page had to have the nav element containing the toggle button. 
			This element even lost most its purpose over time, and eventually only existed to hold the toggle button itself.

			The feature is more prohibitive than useful, and it's time for it to be scrapped. 
			While it was fun to think about, unfortunately it's no longer needed. Thanks for coming to my TEDx talk.`	
	},
	{
		date: '12/5/20',
		comment: 
			`You can now reach any of the site's pages, from any page, with one click (two for mobile).
			The new navbar makes the site easier to navigate.`
	}
]