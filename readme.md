# Radiator Springs Website

This is my website based on the Pixar movie Cars for the HTML/CSS/JavaScript SBA project.  

There are three pages:  

<ol>
<li>Home</li>
<li>Login</li>
<li>Register</li>
</ol>

## General Info

The website is best viewed in Chrome.  

Flexibility with different browser sizes were kept in mind when creating the webpages, but it is most compatible with Chrome through my testing.

The top menu navigation bar has a dropdown menu if you hover over `Residents` to fulfill the dropdown menu requirement.  

I wasn't sure what kind of dropdown menu was required, so I also added one in the form in the [Register](html/register.html) page.

JavaScript was used for registration validation (includes event & regex), the slideshow on home page (array), and there is also a background color change toggle in the `footer` at the bottom.

### Home

[Home](html/home.html) is the main page, and can be returned to by clicking the logo on the top left or `Home` at the menu at the top. The [Register](html/register.html) and [Login](html/register.html) pages also redirect to Home once the forms are submitted.  

The home page has some interactable items. 

There is also an HTML table to fulfill the table requirement.

### Login

[Login](html/register.html) page is accessed by clicking `Login` in the nav menu at the top.  

Since no database is connected, it does not validate anything yet.

The submit button will return you to [Home](html/home.html).


### Register

[Register](html/register.html) page is accessed by clicking on "Not a member yet? Register [here](html/register.html)" on the log in form.

This form utilizes regex to ensure that your username only allows for whitelisted characters, and has the required characters in the email.

Since no database is connected, it does not complete registration.

The submit button, if successful, will return you to [Home](html/home.html).

I included a dropdown select menu in this form for the dropdown menu requirement.

