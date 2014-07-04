# Command an element to do something

Mark an element with jq instructions to do something to another element or itself.

I use it to move elements after some other action or something is generated dynamically.

It is nasty, but it just supports 5 arguments. If you need more just fork it. Also, if you know how to solve it, you can provide the solution.

###Why just 5?

The only "legal" way to call a method is using
```js
{Object}.call(function, arg1[, arg2[...]]);
//or
{Object}[todo]();
```

####Others:

- Using eval(). Bad guy...

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply (Check browser compatib.)


## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/bichotll/jquery-ddo/master/dist/jquery.ddo.min.js
[max]: https://raw.github.com/bichotll/jquery-ddo/master/dist/jquery.ddo.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/ddo.min.js"></script>
<script>
jQuery(function($) {
  $.ddo(); // "I'm here"
});
</script>
```

## Documentation

###html options
- data-ddo-target
- data-ddo-do
- data-ddo-argument1
- data-ddo-argument2
- data-ddo-argument3
- data-ddo-argument4
- data-ddo-argument5


## Examples

###To show how it works

```html
<p class="help-block" data-ddo-target="p" data-ddo='style' data-ddo-argument1='display' data-ddo-argument2='none'>...</p>
```
```js
$('p').ddo();
//would execute
//$('div').style('display', 'none');
```

###How I do use it

To move an object after some other is generated

```html
<div class="hide"...or...style="display:none" >
    <p class="help-block" data-ddo-target="[name='form[company][logo]']" data-ddo='after'>...blah blah...</p>
    <p class="help-block" data-ddo-target="[name='form[company][miniDescription]']" data-ddo='after'>...Max length 255...</p>
</div>
```
```js
//I generate some form
//$.generateForm();
//I move the elements to their proper place
$('[data="data-ddo"]').ddo();
```