## get

_getBy:_ returns the matching node, however will throw an error if multiple matches or no matches are found.

_getAllBy_ : returns an array of matching nodes if at least one match is found and throws an error if no match is found.

**Tip :** Use these methods if you expect the element / elements to be present upon query.

## query

_queryBy_ : returns the matching node if one match is found and null if no match is found, however will throw an error if multiple matches are found.

_queryAllBy_: returns an array of matching nodes if at least one match is found and an empty array if no match is found.

**Tip :** Use these methods if you are looking to confirm presence of an element / elements.

## find

_findBy :_ returns a promise that returns the matching node, however will throw an error if multiple matches or no matches are found.

_findAllBy :_ returns a promise that returns an array of matching nodes if at least one match is found and throws an error if no match is found.

**Tip :** Use these methods if the element / elements being queried might display asynchronously (for example, if your element is expected to only display after an event is fired consider using find as it retries the query after some time).

## logRoles

**Tip**: This helper function can be used to print out a list of all the implicit ARIA roles within a tree of DOM nodes, each role containing a list of all of the nodes which match that role. This can be helpful for finding ways to query the DOM under test with getByRole.
