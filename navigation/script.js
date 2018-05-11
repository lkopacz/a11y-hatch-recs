var industriesLink = document.querySelector('.solutions');

var solutionsDropdown = document.querySelector('.solutions-dropdown');

var solutionsLinks = solutionsDropdown.getElementsByTagName('a');

var firstSolutionsLink = solutionsLinks[0];

var lastSolutionsLink = solutionsLinks[solutionsLinks.length - 1];


function removeVisuallyHidden() {
  industriesLink.parentElement.classList.add('focus');
}

function addVisuallyHidden() {
  industriesLink.parentElement.classList.remove('focus');
}


lastSolutionsLink.addEventListener('blur', addVisuallyHidden, false);

industriesLink.addEventListener('focus', removeVisuallyHidden, false);

for (let item of solutionsLinks) {
  item.addEventListener('focus', removeVisuallyHidden, false);
}
