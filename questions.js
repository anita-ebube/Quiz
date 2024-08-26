export const questions = [
    {
        question: "What does the `id` attribute do in HTML?",
        answers: [
            {text: "Creates a hyperlink", correct: false},
            {text: "Uniquely identifies an element on the page", correct: true},
            {text: "Adds style to the element", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following is the correct way to link an external CSS file in HTML?",
        answers: [
            {text: "<link href='styles.css' rel='stylesheet'>", correct: true},
            {text: "<style src='styles.css'></style>", correct: false},
            {text: "<css src='styles.css'>", correct: false},
            {text: "<stylesheet link='styles.css'>", correct: false},
        ]
    },
    {
        question: "What does the `getElementById` function do in JavaScript?",
        answers: [
            {text: "Returns all elements with a specified class", correct: false},
            {text: "Returns the element with the specified `id`", correct: true},
            {text: "Gets the HTML content of an element", correct: false},
            {text: "Removes an element by `id`", correct: false},
        ]
    },
    {
        question: "Which PHP function is used to connect to a MySQL database?",
        answers: [
            {text: "mysqli_connect()", correct: true},
            {text: "mysql_query()", correct: false},
            {text: "mysql_connect()", correct: false},
            {text: "connect_db()", correct: false},
        ]
    },
    {
        question: "How do you create a variable in PHP?",
        answers: [
            {text: "$variableName = value;", correct: true},
            {text: "variableName = value;", correct: false},
            {text: "var variableName = value;", correct: false},
            {text: "define('variableName', value);", correct: false},
        ]
    },
    {
        question: "What does the `!DOCTYPE html` declaration do?",
        answers: [
            {text: "Defines the version of HTML being used", correct: true},
            {text: "Closes the HTML document", correct: false},
            {text: "Adds metadata to the HTML document", correct: false},
            {text: "Links to an external stylesheet", correct: false},
        ]
    },
    {
        question: "How do you apply a class selector in CSS?",
        answers: [
            {text: ".classname", correct: true},
            {text: "#classname", correct: false},
            {text: "classname", correct: false},
            {text: "@classname", correct: false},
        ]
    },
    {
        question: "What is the purpose of the `alt` attribute in the `<img>` tag?",
        answers: [
            {text: "Defines the size of the image", correct: false},
            {text: "Provides alternative text if the image cannot be displayed", correct: true},
            {text: "Specifies the image format", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "How do you create an ordered list in HTML?",
        answers: [
            {text: "<ul>", correct: false},
            {text: "<ol>", correct: true},
            {text: "<li>", correct: false},
            {text: "<order>", correct: false},
        ]
    },
    {
        question: "Which of the following CSS properties controls the text color?",
        answers: [
            {text: "color", correct: true},
            {text: "background-color", correct: false},
            {text: "font-color", correct: false},
            {text: "text-color", correct: false},
        ]
    },
    {
        question: "What is the purpose of the `header()` function in PHP?",
        answers: [
            {text: "To start a new session", correct: false},
            {text: "To send raw HTTP headers", correct: true},
            {text: "To redirect to a different page", correct: false},
            {text: "To define a new function", correct: false},
        ]
    },
    {
        question: "What does the `position: absolute;` property do in CSS?",
        answers: [
            {text: "Positions an element relative to the nearest positioned ancestor", correct: true},
            {text: "Positions an element relative to the viewport", correct: false},
            {text: "Centers an element on the page", correct: false},
            {text: "Removes an element from the document flow", correct: false},
        ]
    },
    {
        question: "Which of the following is NOT a valid PHP superglobal variable?",
        answers: [
            {text: "$_GET", correct: false},
            {text: "$_POST", correct: false},
            {text: "$_SESSION", correct: false},
            {text: "$_PUT", correct: true},
        ]
    },
    {
        question: "How can you include a PHP file within another PHP file?",
        answers: [
            {text: "include 'filename.php';", correct: true},
            {text: "insert 'filename.php';", correct: false},
            {text: "require_once 'filename.php';", correct: false},
            {text: "import 'filename.php';", correct: false},
        ]
    },
    {
        question: "What does the `hover` pseudo-class do in CSS?",
        answers: [
            {text: "Changes the style of an element when the mouse pointer is over it", correct: true},
            {text: "Changes the style of an element when it is clicked", correct: false},
            {text: "Changes the style of an element when it is focused", correct: false},
            {text: "Changes the style of an element when it is active", correct: false},
        ]
    },
    {
        question: "What is the correct syntax to start a session in PHP?",
        answers: [
            {text: "session_start();", correct: true},
            {text: "start_session();", correct: false},
            {text: "session();", correct: false},
            {text: "session_begin();", correct: false},
        ]
    },
    {
        question: "How do you select an element with the `id` attribute in CSS?",
        answers: [
            {text: "#idname", correct: true},
            {text: ".idname", correct: false},
            {text: "idname", correct: false},
            {text: "@idname", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            {text: "<style>", correct: true},
            {text: "<css>", correct: false},
            {text: "<link>", correct: false},
            {text: "<script>", correct: false},
        ]
    },
    {
        question: "What is the purpose of the `echo` statement in PHP?",
        answers: [
            {text: "To return a value", correct: false},
            {text: "To output text to the browser", correct: true},
            {text: "To store a value in a variable", correct: false},
            {text: "To include another PHP file", correct: false},
        ]
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: [
            {text: "background-color", correct: true},
            {text: "color", correct: false},
            {text: "bg-color", correct: false},
            {text: "background", correct: false},
        ]
    },
    {
        question: "Which function is used to convert a JSON string to a PHP variable?",
        answers: [
            {text: "json_decode()", correct: true},
            {text: "json_encode()", correct: false},
            {text: "json_convert()", correct: false},
            {text: "json_parse()", correct: false},
        ]
    },
    {
        question: "Which of the following is the correct syntax for adding a comment in HTML?",
        answers: [
            {text: "<!-- This is a comment -->", correct: true},
            {text: "// This is a comment", correct: false},
            {text: "/* This is a comment */", correct: false},
            {text: "<comment>This is a comment</comment>", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to change the font size?",
        answers: [
            {text: "font-size", correct: true},
            {text: "text-size", correct: false},
            {text: "font-style", correct: false},
            {text: "text-style", correct: false},
        ]
    },
    {
        question: "What is the result of `2 + 2 . '2'` in PHP?",
        answers: [
            {text: "4", correct: false},
            {text: "222", correct: false},
            {text: "24", correct: true},
            {text: "Invalid syntax", correct: false},
        ]
    },
    {
        question: "How do you add a background image in CSS?",
        answers: [
            {text: "background-image: url('image.jpg');", correct: true},
            {text: "background: url('image.jpg');", correct: false},
            {text: "image-background: url('image.jpg');", correct: false},
            {text: "background-img: url('image.jpg');", correct: false},
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            {text: "Number", correct: false},
            {text: "String", correct: false},
            {text: "Boolean", correct: false},
            {text: "Character", correct: true},
        ]
    },
    {
        question: "Which method can be used to remove an element from the DOM in JavaScript?",
        answers: [
            {text: "removeChild()", correct: true},
            {text: "removeElement()", correct: false},
            {text: "deleteElement()", correct: false},
            {text: "removeNode()", correct: false},
        ]
    },
    {
        question: "How do you define a function in JavaScript?",
        answers: [
            {text: "function myFunction() {}", correct: true},
            {text: "def myFunction() {}", correct: false},
            {text: "func myFunction() {}", correct: false},
            {text: "define myFunction() {}", correct: false},
        ]
    },
    {
        question: "Which attribute is used to define inline styles in HTML?",
        answers: [
            {text: "style", correct: true},
            {text: "class", correct: false},
            {text: "id", correct: false},
            {text: "css", correct: false},
        ]
    },
    {
        question: "What does the `+=` operator do in JavaScript?",
        answers: [
            {text: "Adds the value on the right to the variable on the left", correct: true},
            {text: "Assigns the value on the right to the variable on the left", correct: false},
            {text: "Compares two values", correct: false},
            {text: "Subtracts the value on the right from the variable on the left", correct: false},
        ]
    },
    {
        question: "How do you declare a constant in PHP?",
        answers: [
            {text: "define('CONSTANT_NAME', value);", correct: true},
            {text: "const CONSTANT_NAME = value;", correct: false},
            {text: "$CONSTANT_NAME = value;", correct: false},
            {text: "constant('CONSTANT_NAME', value);", correct: false},
        ]
    },
    {
        question: "What does the `document.querySelector()` method do in JavaScript?",
        answers: [
            {text: "Returns the first element that matches a specified CSS selector", correct: true},
            {text: "Returns all elements that match a specified CSS selector", correct: false},
            {text: "Selects the entire document", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following is a correct way to add comments in PHP?",
        answers: [
            {text: "// This is a comment", correct: true},
            {text: "<!-- This is a comment -->", correct: false},
            {text: "/* This is a comment */", correct: false},
            {text: "# This is a comment", correct: true},
        ]
    },
    {
        question: "How do you check if a variable is an array in PHP?",
        answers: [
            {text: "is_array($variable)", correct: true},
            {text: "check_array($variable)", correct: false},
            {text: "array_check($variable)", correct: false},
            {text: "isset($variable)", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to create space between the border and the content of an element?",
        answers: [
            {text: "padding", correct: true},
            {text: "margin", correct: false},
            {text: "border-spacing", correct: false},
            {text: "content-spacing", correct: false},
        ]
    },
    {
        question: "What does the `substr()` function do in PHP?",
        answers: [
            {text: "Returns a portion of a string", correct: true},
            {text: "Replaces a portion of a string", correct: false},
            {text: "Removes a portion of a string", correct: false},
            {text: "Adds a portion to a string", correct: false},
        ]
    },
    {
        question: "How do you execute a script when a button is clicked in JavaScript?",
        answers: [
            {text: "Add `onclick` attribute to the button element", correct: true},
            {text: "Add `onpress` attribute to the button element", correct: false},
            {text: "Add `onsubmit` attribute to the button element", correct: false},
            {text: "Add `onclick` event to the form element", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        answers: [
            {text: "<a>", correct: true},
            {text: "<link>", correct: false},
            {text: "<href>", correct: false},
            {text: "<hyperlink>", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to change the text alignment of an element?",
        answers: [
            {text: "text-align", correct: true},
            {text: "text-alignments", correct: false},
            {text: "align-text", correct: false},
            {text: "alignment", correct: false},
        ]
    },
    {
        question: "Which of the following is a correct way to end a PHP statement?",
        answers: [
            {text: "Semicolon (;)", correct: true},
            {text: "Colon (:)", correct: false},
            {text: "Period (.)", correct: false},
            {text: "Comma (,)", correct: false},
        ]
    },
    {
        question: "How do you select all paragraph elements in JavaScript?",
        answers: [
            {text: "document.querySelectorAll('p')", correct: true},
            {text: "document.getElementsByClassName('p')", correct: false},
            {text: "document.getElementById('p')", correct: false},
            {text: "document.querySelector('p')", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to change the border color?",
        answers: [
            {text: "border-color", correct: true},
            {text: "color-border", correct: false},
            {text: "border-style", correct: false},
            {text: "border", correct: false},
        ]
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        answers: [
            {text: "`==` compares values only, while `===` compares both values and types", correct: true},
            {text: "`==` compares both values and types, while `===` compares values only", correct: false},
            {text: "`===` is used for comparing strings only", correct: false},
            {text: "There is no difference", correct: false},
        ]
    },
    {
        question: "Which PHP function is used to retrieve a value from a session?",
        answers: [
            {text: "session_get()", correct: false},
            {text: "session_start()", correct: false},
            {text: "$_SESSION['key']", correct: true},
            {text: "$_SESSION['value']", correct: false},
        ]
    },
    {
        question: "Which of the following HTML elements is used to create a table row?",
        answers: [
            {text: "<tr>", correct: true},
            {text: "<td>", correct: false},
            {text: "<th>", correct: false},
            {text: "<table>", correct: false},
        ]
    },
    {
        question: "What is the purpose of the `var_dump()` function in PHP?",
        answers: [
            {text: "To display structured information about a variable", correct: true},
            {text: "To delete a variable", correct: false},
            {text: "To concatenate two variables", correct: false},
            {text: "To return the length of a variable", correct: false},
        ]
    },
    {
        question: "What does the `margin` property do in CSS?",
        answers: [
            {text: "Adds space around an element, outside of its border", correct: true},
            {text: "Adds space between the content and the border of an element", correct: false},
            {text: "Changes the width of the border", correct: false},
            {text: "Changes the width of the element", correct: false},
        ]
    },
    {
        question: "Which of the following is the correct way to write an array in PHP?",
        answers: [
            {text: "$array = array('apple', 'banana', 'orange');", correct: true},
            {text: "$array = ['apple', 'banana', 'orange'];", correct: true},
            {text: "$array = ('apple', 'banana', 'orange');", correct: false},
            {text: "$array = {'apple', 'banana', 'orange'};",correct:false},
        ]
    },
    {
        question: "What does the `innerHTML` property do in JavaScript?",
        answers: [
            {text: "Gets or sets the HTML content of an element", correct: true},
            {text: "Changes the style of an element", correct: false},
            {text: "Changes the text content of an element", correct: false},
            {text: "Adds an HTML element to the DOM", correct: false},
        ]
    }
]