#Smart table for Angular

* [part 1](https://itnext.io/smart-table-for-angular-part-1-515ef6cb2d0a)
* [part 2](https://itnext.io/smart-table-for-angular-part-2-31ea5bd0c383)
* [Stackblitz Repo](https://stackblitz.com/edit/smart-table-ng-tutorial-2c)

![screenshot](screenshot.png)

```text
This template use the “stTable” directive which allows you to expose a template variable “#table”

The items directive property used in the repeater will hold a dynamic binding to the currently displayed users.

The busy property is a boolean whose value changes depending on the busy state of the directive.
It is useful to declare loading indicators for example.
In our case, it is not really relevant as everything is synchronous.
```

```text
We use the “stPagination” attribute directive which allows us to expose a pagination API to the template thanks to a variable “#page”.

Particularly we have access to the following properties:
- length: the length of the currently displayed page.
- lowerBoundIndex and higherBoundIndex which help us to frame the current page inside the whole list.
And the methods
- isPreviousPageEnabled and isNextPageEnabled which are bound to “disabled” property of button elements.
- selectPreviousPage and selectNextPage allow us to select respectively the previous and the next page if available.
The page directive comes also with methods which are not used in the snippet above:
- selectPage method to directly select a given page.
- changPageSize if you wish to change the number of items displayed by page.
```

```text
The stSort directive allows us to sort the data by making HTML elements actionable by click.

stSort attribute directive is set to a path pointer string pointing to the property you which to sort the items by.
It can be a nested property as you can see with the first name and the last name headers.

when clicked, the header toggle the sort direction of the related column.
If you wish to cancel the sort direction on a third click instead of change its direction, you can add the stSortCycle attribute.

The directive also add/remove a css class name (st-sort-asc/st-sort-desc) to the host depending on the sort direction.
```

---

* [Component Outputs/Events](https://akveo.github.io/ng2-smart-table/#/documentation)
* [ng2-smart-table](https://github.com/akveo/ng2-smart-table)
* https://akveo.github.io/ng2-smart-table/#/
* https://embed.plnkr.co/MoQuFa/
