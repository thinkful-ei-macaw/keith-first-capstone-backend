Maeglin
===

https://2e-capstone-client.vercel.app/
---

The Maeglin API uses 28 attributes.  These attributes are the categories used in the 
2e monster manual.  These attributes are: 
id
base_setting
monster_name
climate
frequency
organization
activity
diet
intelligence
treasure
alignment
appearing
ac
movement
hd
thac0
attacks
damage
special_attack
special_defense
magic_resistance
size
morale
xp
summary
habitat
ecology
date_created

A POST request does not need to include all of these attributes, as most monsters in the 
2e game do not possess stats in every single category.  The required attributes are: 
monster_name
organization
diet
intelligence
ac
movement
hd
thac0
attacks
damage
size
summary
habitat
ecology


id and date_created are added automatically.

Apart from id and date_created, every attribute is a string.

Non-required attributes that are not present return a null value.


<img src=postmanScreenshot1.PNG alt='screenshot of a post request' />
This POST request is missing Special_Defense and Morale and has Magic_Resistance written 
in as "null".  Because no required attributes are missing, you can see that it goes through as a 
success, as seen here.  
<img src=postmanScreenshot2.PNG alt='screenshot of a successful post request' />


This request is shown here.  Note how the missing attributes are all blank as well as the 
attribute marked as null.
<img src=finalAPIScreenshot.PNG alt='how it looks on page' />



A GET request will simply return all of the entries.


Summary
---

Maeglin is made using React, Node, Express, PostgreSQL, and, of course, CSS.
React is used for the front end mainly for it's ability to use Components, State, and Context.
Node is used for the back end, connecting the front end to the database.
The tables in the database are made with PostgreSQL
The styling is done with vanilla CSS
