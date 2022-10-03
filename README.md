# print_form

![](/print-form-banner.png)

## What does print_form do?

Prints unsubmitted form values into a new browser page - preserving them for review even after the form has been submitted.

## Why?

Testing a long form can be boring. Sometimes you need to fill in lots of unimportant data before you can test one or two key values. Sometimes, some of that seemingly "unimportant" data uncovers a bug that needs further investigation. But what data was entered? The form cleared the values after submission, and the data wasn't part of the test!

### Information logged:

- Input name
- Input value
- Textarea name
- Textarea value
- Aria-checked value
- Form URL
- Date and time of print
- Is field hidden?

## How to use

1. Enter test data into the web form
2. `Cut` and `Paste` the `print_form` script into the browser console (see next section for optional settings) and press `Enter` to run. The form data entered will be printed to a new browser tab
3. Submit your web form
4. Find bugs

## Optional settings

`print_form` has an optional setting to include data from hidden fields. Hidden fields are omitted by default. To include hidden fields change
`includeHidden = false` to `includeHidden = true`

### Do not include hidden fields:

    const print_inputs = function (includeHidden = false) {

### Include hidden fields:

    const print_inputs = function (includeHidden = true) {
