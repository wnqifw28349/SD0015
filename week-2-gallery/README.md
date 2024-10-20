Requirements achieved:

- Implemented responsive design using media queries to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px). This was applied to the image container.
- Ensured all images have appropriate alt text attributes for accessibility.
- Correctly use event handlers to switch images based on user interactions. This was applied using an event listener for when the user clicks on a thumbnail.

Other:

- Used a hover effect on the thumbnail images so the user knows the images are interactive.

Requirements not achieved:

- Using 'srcset' to specify which image will be used based on the size of the screen for optimal viewing experience.
- Adding ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.
- Implementing key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.
- Developing the media queries for multiple screen sizes.

Errors/bugs:

- Image did not cover the entire page, leaving a small horizontal line blank at the bottom. I tried using '100vw' and '100vh' for 'width' and 'height', and 'object-fit: cover;' in CSS. I tried fixing this by also changing the images to ones with different sizes but the problem persisted.
