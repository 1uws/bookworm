export const StopWords = ["0o","0s", "3a", "3b", "3d", "6b", "6o", "a", "a1", "a2", "a3", "a4", "ab", "able", "about", "above", "abst", "ac", "accordance", "according", "accordingly", "across", "act", "actually", "ad", "added", "adj", "ae", "af", "affected", "affecting", "affects", "after", "afterwards", "ag", "again", "against", "ah", "ain", "ain't", "aj", "al", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "announce", "another", "any", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere", "ao", "ap", "apart", "apparently", "appear", "appreciate", "appropriate", "approximately", "ar", "are", "aren", "arent", "aren't", "arise", "around", "as", "a's", "aside", "ask", "asking", "associated", "at", "au", "auth", "av", "available", "aw", "away", "awfully", "ax", "ay", "az", "b", "b1", "b2", "b3", "ba", "back", "bc", "bd", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "bi", "bill", "biol", "bj", "bk", "bl", "bn", "both", "bottom", "bp", "br", "brief", "briefly", "bs", "bt", "bu", "but", "bx", "by", "c", "c1", "c2", "c3", "ca", "call", "came", "can", "cannot", "cant", "can't", "cause", "causes", "cc", "cd", "ce", "certain", "certainly", "cf", "cg", "ch", "changes", "ci", "cit", "cj", "cl", "clearly", "cm", "c'mon", "cn", "co", "com", "come", "comes", "con", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn", "couldnt", "couldn't", "course", "cp", "cq", "cr", "cry", "cs", "c's", "ct", "cu", "currently", "cv", "cx", "cy", "cz", "d", "d2", "da", "date", "dc", "dd", "de", "definitely", "describe", "described", "despite", "detail", "df", "di", "did", "didn", "didn't", "different", "dj", "dk", "dl", "do", "does", "doesn", "doesn't", "doing", "don", "done", "don't", "down", "downwards", "dp", "dr", "ds", "dt", "du", "due", "during", "dx", "dy", "e", "e2", "e3", "ea", "each", "ec", "ed", "edu", "ee", "ef", "effect", "eg", "ei", "eight", "eighty", "either", "ej", "el", "eleven", "else", "elsewhere", "em", "empty", "en", "end", "ending", "enough", "entirely", "eo", "ep", "eq", "er", "es", "especially", "est", "et", "et-al", "etc", "eu", "ev", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "ey", "f", "f2", "fa", "far", "fc", "few", "ff", "fi", "fifteen", "fifth", "fify", "fill", "find", "fire", "first", "five", "fix", "fj", "fl", "fn", "fo", "followed", "following", "follows", "for", "former", "formerly", "forth", "forty", "found", "four", "fr", "from", "front", "fs", "ft", "fu", "full", "further", "furthermore", "fy", "g", "ga", "gave", "ge", "get", "gets", "getting", "gi", "give", "given", "gives", "giving", "gj", "gl", "go", "goes", "going", "gone", "got", "gotten", "gr", "greetings", "gs", "gy", "h", "h2", "h3", "had", "hadn", "hadn't", "happens", "hardly", "has", "hasn", "hasnt", "hasn't", "have", "haven", "haven't", "having", "he", "hed", "he'd", "he'll", "hello", "help", "hence", "her", "here", "hereafter", "hereby", "herein", "heres", "here's", "hereupon", "hers", "herself", "hes", "he's", "hh", "hi", "hid", "him", "himself", "his", "hither", "hj", "ho", "home", "hopefully", "how", "howbeit", "however", "how's", "hr", "hs", "http", "hu", "hundred", "hy", "i", "i2", "i3", "i4", "i6", "i7", "i8", "ia", "ib", "ibid", "ic", "id", "i'd", "ie", "if", "ig", "ignored", "ih", "ii", "ij", "il", "i'll", "im", "i'm", "immediate", "immediately", "importance", "important", "in", "inasmuch", "inc", "indeed", "index", "indicate", "indicated", "indicates", "information", "inner", "insofar", "instead", "interest", "into", "invention", "inward", "io", "ip", "iq", "ir", "is", "isn", "isn't", "it", "itd", "it'd", "it'll", "its", "it's", "itself", "iv", "i've", "ix", "iy", "iz", "j", "jj", "jr", "js", "jt", "ju", "just", "k", "ke", "keep", "keeps", "kept", "kg", "kj", "km", "know", "known", "knows", "ko", "l", "l2", "la", "largely", "last", "lately", "later", "latter", "latterly", "lb", "lc", "le", "least", "les", "less", "lest", "let", "lets", "let's", "lf", "like", "liked", "likely", "line", "little", "lj", "ll", "ll", "ln", "lo", "look", "looking", "looks", "los", "lr", "ls", "lt", "ltd", "m", "m2", "ma", "made", "mainly", "make", "makes", "many", "may", "maybe", "me", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "mightn", "mightn't", "mill", "million", "mine", "miss", "ml", "mn", "mo", "more", "moreover", "most", "mostly", "move", "mr", "mrs", "ms", "mt", "mu", "much", "mug", "must", "mustn", "mustn't", "my", "myself", "n", "n2", "na", "name", "namely", "nay", "nc", "nd", "ne", "near", "nearly", "necessarily", "necessary", "need", "needn", "needn't", "needs", "neither", "never", "nevertheless", "new", "next", "ng", "ni", "nine", "ninety", "nj", "nl", "nn", "no", "nobody", "non", "none", "nonetheless", "noone", "nor", "normally", "nos", "not", "noted", "nothing", "novel", "now", "nowhere", "nr", "ns", "nt", "ny", "o", "oa", "ob", "obtain", "obtained", "obviously", "oc", "od", "of", "off", "often", "og", "oh", "oi", "oj", "ok", "okay", "ol", "old", "om", "omitted", "on", "once", "one", "ones", "only", "onto", "oo", "op", "oq", "or", "ord", "os", "ot", "other", "others", "otherwise", "ou", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "ow", "owing", "own", "ox", "oz", "p", "p1", "p2", "p3", "page", "pagecount", "pages", "par", "part", "particular", "particularly", "pas", "past", "pc", "pd", "pe", "per", "perhaps", "pf", "ph", "pi", "pj", "pk", "pl", "placed", "please", "plus", "pm", "pn", "po", "poorly", "possible", "possibly", "potentially", "pp", "pq", "pr", "predominantly", "present", "presumably", "previously", "primarily", "probably", "promptly", "proud", "provides", "ps", "pt", "pu", "put", "py", "q", "qj", "qu", "que", "quickly", "quite", "qv", "r", "r2", "ra", "ran", "rather", "rc", "rd", "re", "readily", "really", "reasonably", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "research-articl", "respectively", "resulted", "resulting", "results", "rf", "rh", "ri", "right", "rj", "rl", "rm", "rn", "ro", "rq", "rr", "rs", "rt", "ru", "run", "rv", "ry", "s", "s2", "sa", "said", "same", "saw", "say", "saying", "says", "sc", "sd", "se", "sec", "second", "secondly", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "sf", "shall", "shan", "shan't", "she", "shed", "she'd", "she'll", "shes", "she's", "should", "shouldn", "shouldn't", "should've", "show", "showed", "shown", "showns", "shows", "si", "side", "significant", "significantly", "similar", "similarly", "since", "sincere", "six", "sixty", "sj", "sl", "slightly", "sm", "sn", "so", "some", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "sp", "specifically", "specified", "specify", "specifying", "sq", "sr", "ss", "st", "still", "stop", "strongly", "sub", "substantially", "successfully", "such", "sufficiently", "suggest", "sup", "sure", "sy", "system", "sz", "t", "t1", "t2", "t3", "take", "taken", "taking", "tb", "tc", "td", "te", "tell", "ten", "tends", "tf", "th", "than", "thank", "thanks", "thanx", "that", "that'll", "thats", "that's", "that've", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "thered", "therefore", "therein", "there'll", "thereof", "therere", "theres", "there's", "thereto", "thereupon", "there've", "these", "they", "theyd", "they'd", "they'll", "theyre", "they're", "they've", "thickv", "thin", "think", "third", "this", "thorough", "thoroughly", "those", "thou", "though", "thoughh", "thousand", "three", "throug", "through", "throughout", "thru", "thus", "ti", "til", "tip", "tj", "tl", "tm", "tn", "to", "together", "too", "took", "top", "toward", "towards", "tp", "tq", "tr", "tried", "tries", "truly", "try", "trying", "ts", "t's", "tt", "tv", "twelve", "twenty", "twice", "two", "tx", "u", "u201d", "ue", "ui", "uj", "uk", "um", "un", "under", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "uo", "up", "upon", "ups", "ur", "us", "use", "used", "useful", "usefully", "usefulness", "uses", "using", "usually", "ut", "v", "va", "value", "various", "vd", "ve", "ve", "very", "via", "viz", "vj", "vo", "vol", "vols", "volumtype", "vq", "vs", "vt", "vu", "w", "wa", "want", "wants", "was", "wasn", "wasnt", "wasn't", "way", "we", "wed", "we'd", "welcome", "well", "we'll", "well-b", "went", "were", "we're", "weren", "werent", "weren't", "we've", "what", "whatever", "what'll", "whats", "what's", "when", "whence", "whenever", "when's", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "where's", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "who's", "whose", "why", "why's", "wi", "widely", "will", "willing", "wish", "with", "within", "without", "wo", "won", "wonder", "wont", "won't", "words", "world", "would", "wouldn", "wouldnt", "wouldn't", "www", "x", "x1", "x2", "x3", "xf", "xi", "xj", "xk", "xl", "xn", "xo", "xs", "xt", "xv", "xx", "y", "y2", "yes", "yet", "yj", "yl", "you", "youd", "you'd", "you'll", "your", "youre", "you're", "yours", "yourself", "yourselves", "you've", "yr", "ys", "yt", "z", "zero", "zi", "zz",];
export const data = [
	`C# is the programming language for writing Microsoft .NET applications. C# provides the rapid application development found in Visual Basic with the power of C++. Its syntax is similar to C++ syntax and meets 100% of the requirements of OOPs like the following:
Abstraction
Encapsulation
Polymorphism
Inheritance`,
	`a class or struct definition is like a blueprint that specifies what the type can do. An object is basically a block of memory that has been allocated and configured according to the blueprint. A program may create many objects of the same class. Objects are also called instances, and they can be stored in either a named variable or in an array or collection. Client code is the code that uses these variables to call the methods and access the public properties of the object. In an object-oriented language such as C#, a typical program consists of multiple objects interacting dynamically. Objects helps us to access the member of a class or struct either they can be fields, methods or properties, by using the dot.`,
	`[In C#] Using break statement, you can jump out of a loop. Using continue statement, you can jump over one iteration and then resume your loop execution`,
	`In C# The get and set portions or blocks of a property are called accessors. class Person
	{
	  private string name; // field
	
	  public string Name   // property
	  {
		get { return name; }   // get method
		set { name = value; }  // set method
	  }
	}
	These are useful to restrict the accessibility of a property.
The set accessor specifies that we can assign a value to a private field in a property and without the set accessor property it is like a read-only field.
By the get accessor we can access the value of the private field. A Get accessor specifies that we can access the value of a field publicly.`,
	`Class and struct both are the user defined data type but have some major difference:
Struct

The struct is value type in C# and it inherits from System.Value Type.
Struct is usually used for smaller amounts of data.
Struct can't be inherited to other type.
A structure can't be abstract.
Class

The class is reference type in C# and it inherits from the System.Object Type.
Classes are usually used for large amounts of data.
Classes can be inherited to other class.
A class can be abstract type.
We can create a default constructor.`,
	`The abstract modifier indicates that the thing being modified has a missing or incomplete implementation. The abstract modifier can be used with classes, methods, properties, indexers, and events.
An Abstract class is a class which is denoted by abstract keyword and can be used only as a Base class.
abstract class Shape
{
    public abstract int GetArea();
}

class Square : Shape
{
    int side;

    public Square(int n) => side = n;

    // GetArea method is required to avoid a compile-time error.
    public override int GetArea() => side * side;

    static void Main()
    {
        var sq = new Square(12);
        Console.WriteLine($"Area of the square = {sq.GetArea()}");
    }
}
// Output: Area of the square = 144
Abstract classes have the following features:
An abstract class cannot be instantiated.
An abstract class may contain abstract methods and accessors.
It is not possible to modify an abstract class with the sealed modifier because the two modifiers have opposite meanings. The sealed modifier prevents a class from being inherited and the abstract modifier requires a class to be inherited.
A non-abstract class derived from an abstract class must include actual implementations of all inherited abstract methods and accessors.`,
	`A namespace is designed for providing a way to keep one set of names separate from another. The class names declared in one namespace does not conflict with the same class names declared in another.
NET uses namespaces to organize its many classes.
Declaring your own namespaces can help you control the scope of class and method names in larger programming projects.
namespace SampleNamespace
{
    class SampleClass
    {
        public void SampleMethod()
        {
            System.Console.WriteLine(
              "SampleMethod inside SampleNamespace");
        }
    }
}`,
	`A type is said to be nullable if it can be assigned a value or can be assigned null, which means the type has no value whatsoever. By default, all reference types, such as String, are nullable, but all value types, such as Int32, are not.
For example, you can store any value from -2,147,483,648 to 2,147,483,647 or null in a Nullable<Int32> variable. Similarly, you can assign true, false, or null in a Nullable<bool> variable.`,
	`Exception handling is done using four keywords in C#:
try – Contains a block of code for which an exception will be checked.
catch – It is a program that catches an exception with the help of exception handler.
finally – It is a block of code written to execute regardless whether an exception is caught or not.
throw – Throws an exception when a problem occurs.`,
	`In C# data types can be of two types: Value Types and Reference Types. For a value type, the value is the information itself. For a reference type, the value is a reference which may be null or may be a way of navigating to an object containing the information.
Value types - Holds some value not memory addresses. Example - Struct. A variable's value is stored wherever it is decleared. Local variables live on the stack for example, but when declared inside a class as a member it lives on the heap tightly coupled with the class it is declared in.
Advantages: A value type does not need extra garbage collection. It gets garbage collected together with the instance it lives in. Local variables in methods get cleaned up upon method leave.
Drawbacks:

When large set of values are passed to a method the receiving variable actually copies so there are two redundant values in memory.
As classes are missed out.it losses all the oop benefits
Reference type - Holds a memory address of a value not value. Example - Class. Stored on heap
Advantages:

When you pass a reference variable to a method and it changes it indeed changes the original value whereas in value types a copy of the given variable is taken and that's value is changed.
When the size of variable is bigger reference type is good
As classes come as a reference type variables, they give reusability, thus benefitting Object-oriented programming
Drawbacks: More work referencing when allocating and dereferences when reading the value.extra overload for garbage collector`,
	`Serialization means saving the state of your object to secondary memory, such as a file.
Binary serialization (Save your object data into binary format).
Soap Serialization (Save your object data into binary format; mainly used in network related communication).
XmlSerialization (Save your object data into an XML file).`,
	`The different types of class in C# are:
Partial class – Allows its members to be divided or shared with multiple .cs files. It is denoted by the keyword Partial.
Sealed class – It is a class which cannot be inherited. To access the members of a sealed class, we need to create the object of the class.  It is denoted by the keyword Sealed.
Abstract class – It is a class whose object cannot be instantiated. The class can only be inherited. It should contain at least one method.  It is denoted by the keyword abstract.
Static class – It is a class which does not allow inheritance. The members of the class are also static.  It is denoted by the keyword static. This keyword tells the compiler to check for any accidental instances of the static class.`,
	`String

It's an immutable object that hold string value.
Performance wise string is slow because its' create a new instance to override or change the previous value.
String belongs to System namespace.
StringBuilder

StringBuilder is a mutable object.
Performance wise StringBuilder is very fast because it will use same instance of StringBuilder object to perform any operation like insert value in existing string.
StringBuilder belongs to System.Text.Stringbuilder namespace.`,
	`LINQ stands for Language Integrated Query. LINQ has a great power of querying on any source of data. The data source could be collections of objects, database or XML files. We can easily retrieve data from any object that implements the IEnumerable<T> interface.`,
	`The reference types do not contain the actual data stored in a variable, but they contain a reference to the variables.
In other words, they refer to a memory location. Using multiple variables, the reference types can refer to a memory location. If the data in the memory location is changed by one of the variables, the other variable automatically reflects this change in value. Example of built-in reference types are: object, dynamic, and string.`,
	`Managed Code - The code, which is developed in .NET framework is known as managed code. This code is directly executed by CLR with the help of managed code execution. Any language that is written in .NET Framework is managed code.
Unmanaged Code - The code, which is developed outside .NET framework is known as unmanaged code. Applications that do not run under the control of the CLR are said to be unmanaged, and certain languages such as C++ can be used to write such applications, which, for example, access low - level functions of the operating system. Background compatibility with the code of VB, ASP and COM are examples of unmanaged code.`,
	`Multiple catch blocks can't be executed. Once the proper catch code executed, the control is transferred to the finally block and then the code that follows the finally block gets executed.`,
	`We can't use this in static method because keyword this returns a reference to the current instance of the class containing it.
Static methods (or any static member) do not belong to a particular instance. They exist without creating an instance of the class and call with the name of a class not by instance so we can't use this keyword in the body of static Methods, but in case of Extension Methods we can use it as the functions parameters.`,
	`A partial class is only use to splits the definition of a class in two or more classes in a same source code file or more than one source files. You can create a class definition in multiple files but it will be compiled as one class at run time and also when you'll create an instance of this class so you can access all the methods from all source file with a same object. Partial classes can be create in the same namespace it's doesn't allowed to create a partial class in different namespace.`,
	`Finally block will be executed irrespective of exception. So while executing the code in try block when exception is occurred, control is returned to catch block and at last finally block will be executed. So closing connection to database / releasing the file handlers can be kept in finally block.
`,
	`Generics allow you to delay the specification of the data type of programming elements in a class or a method, until it is actually used in the program. In other words, generics allow you to write a class or method that can work with any data type.
Consider:
class DataStore<T>
{
    public T Data { get; set; }
}

DataStore<string> store = new DataStore<string>();`,
	`You can store any type of value in the dynamic data type variable. Type checking for these types of variables takes place at run-time.`,
	`Boxing and Unboxing both are used for type conversion but have some difference:
Boxing - Boxing is the process of converting a value type data type to the object or to any interface data type which is implemented by this value type. When the CLR boxes a value means when CLR is converting a value type to Object Type, it wraps the value inside a System.Object and stores it on the heap area in application domain.
Unboxing - Unboxing is also a process which is used to extract the value type from the object or any implemented interface type. Boxing may be done implicitly, but unboxing have to be explicit by code.
The concept of boxing and unboxing underlines the C# unified view of the type system in which a value of any type can be treated as an object.`,
	`An enum is a value type with a set of related named constants often referred to as an enumerator list. The enum keyword is used to declare an enumeration. It is a primitive data type, which is user defined. An enum is used to create numeric constants in .NET framework. All the members of enum are of enum type. Their must be a numeric value for each enum type.
Some points about enum

Enums are enumerated data type in C#.
Enums are strongly typed constant. They are strongly typed, i.e. an enum of one type may not be implicitly assigned to an enum of another type even though the underlying value of their members are the same.
Enumerations (enums) make your code much more readable and understandable.
Enum values are fixed. Enum can be displayed as a string and processed as an integer.
The default type is int, and the approved types are byte, sbyte, short, ushort, uint, long, and ulong.
Every enum type automatically derives from System.Enum and thus we can use System.Enum methods on enums.
Enums are value types and are created on the stack and not on the heap.`,
	`There are three ways that parameters can be passed to a method:
Value parameters − This method copies the actual value of an argument into the formal parameter of the function. In this case, changes made to the parameter inside the function have no effect on the argument.
Reference parameters − This method copies the reference to the memory location of an argument into the formal parameter. This means that changes made to the parameter affect the argument.
Output parameters − This method helps in returning more than one value.`,
	`Class:
A class is a reference type
While instantiating a class, CLR allocates memory for its instance in heap
Classes support inheritance
Variables of a class can be assigned as null
Class can contain constructor/destructor
Structure:
A structure is a value type
In structure, memory is allocated on stack
Structures do not support inheritance
Structure members cannot have null values
Structure does not require constructor/destructor and members can be initialiazed automatically`,





`Since the release of React 16.8, you can use Hooks as a way to work with EditorState without using a class.

Copy
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

ReactDOM.render(<MyEditor />, document.getElementById('container'));`,

`Because Draft.js supports unicode, you must have the following meta tag in the <head></head> block of your HTML file:

<meta charset="utf-8" />
Draft.css should be included when rendering the editor. Learn more about why.`,

`State is therefore represented as a single immutable EditorState object, and onChange is implemented within the Editor core to provide this state value to the top level.`,

`The EditorState object is a complete snapshot of the state of the editor, including contents, cursor, and undo/redo history. All changes to content and selection within the editor will create new EditorState objects. Note that this remains efficient due to data persistence across immutable objects.

import {Editor, EditorState} from 'draft-js';

const MyInput = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
};
For any edits or selection changes that occur in the editor DOM, your onChange handler will execute with the latest EditorState object based on those changes.`,
`The previous article introduced the EditorState object as a snapshot of the full state of the editor, as provided by the Editor core via the onChange prop.

However, since your top-level React component is responsible for maintaining the state, you also have the freedom to apply changes to that EditorState object in any way you see fit.

For inline and block style behavior, for example, the RichUtils module provides a number of useful functions to help manipulate state.

Similarly, the Modifier module also provides a number of common operations that allow you to apply edits, including changes to text, styles, and more. This module is a suite of edit functions that compose simpler, smaller edit functions to return the desired EditorState object.

For this example, we'll stick with RichUtils to demonstrate how to apply basic rich styling within the top-level component.`,
`RichUtils and Key Commands#
RichUtils has information about the core key commands available to web editors, such as Cmd+B (bold), Cmd+I (italic), and so on.

We can observe and handle key commands via the handleKeyCommand prop, and hook these into RichUtils to apply or remove the desired style.

import {Editor, EditorState, RichUtils} from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
    );
  }
}
handleKeyCommand

The command argument supplied to handleKeyCommand is a string value, the name of the command to be executed. This is mapped from a DOM key event. The editorState argument represents the latest editor state as it might be changed internally by draft when handling the key. Use this instance of the editor state inside handleKeyCommand. See Advanced Topics - Key Binding for more on this, as well as details on why the function returns handled or not-handled.`,
`Styling Controls in UI#
Within your React component, you can add buttons or other controls to allow the user to modify styles within the editor. In the example above, we are using known key commands, but we can add more complex UI to provide these rich features.

Here's a super-basic example with a "Bold" button to toggle the BOLD style.

Copy
class MyEditor extends React.Component {
  // ...

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}`,
`Entities
This article discusses the Entity system, which Draft uses for annotating ranges of text with metadata. Entities introduce levels of richness beyond styled text. Links, mentions, and embedded content can all be implemented using entities.

In the Draft repository, the link editor and entity demo provide live code examples to help clarify how entities can be used, as well as their built-in behavior.

The Entity API Reference provides details on the static methods to be used when creating, retrieving, or updating entity objects.

For information about recent changes to the Entity API, and examples of how to update your application, see our v0.10 API Migration Guide.

Introduction#
An entity is an object that represents metadata for a range of text within a Draft editor. It has three properties:

type: A string that indicates what kind of entity it is, e.g. 'LINK', 'MENTION', 'PHOTO'.
mutability: Not to be confused with immutability a la immutable-js, this property denotes the behavior of a range of text annotated with this entity object when editing the text range within the editor. This is addressed in greater detail below.
data: An optional object containing metadata for the entity. For instance, a 'LINK' entity might contain a data object that contains the href value for that link.
All entities are stored in the ContentState record. The entities are referenced by key within ContentState and React components used to decorate annotated ranges. (We are currently deprecating a previous API for accessing Entities; see issue #839.)

Using decorators or custom block components, you can add rich rendering to your editor based on entity metadata.

Creating and Retrieving Entities#
Entities should be created using contentState.createEntity, which accepts the three properties above as arguments. This method returns a ContentState record updated to include the newly created entity, then you can call contentState.getLastCreatedEntityKey to get the key of the newly created entity record.

This key is the value that should be used when applying entities to your content. For instance, the Modifier module contains an applyEntity method:

const contentState = editorState.getCurrentContent();
const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
  url: 'http://www.zombo.com',
});
const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
const contentStateWithLink = Modifier.applyEntity(
  contentStateWithEntity,
  selectionState,
  entityKey,
);
const newEditorState = EditorState.set(editorState, {
  currentContent: contentStateWithLink,
});
For a given range of text, then, you can extract its associated entity key by using the getEntityAt() method on a ContentBlock object, passing in the target offset value.

const contentState = editorState.getCurrentContent();
const blockWithLinkAtBeginning = contentState.getBlockForKey('...');
const linkKey = blockWithLinkAtBeginning.getEntityAt(0);
const linkInstance = contentState.getEntity(linkKey);
const {url} = linkInstance.getData();
"Mutability"#
Entities may have one of three "mutability" values. The difference between them is the way they behave when the user makes edits to them.

Note that DraftEntityInstance objects are always immutable Records, and this property is meant only to indicate how the annotated text may be "mutated" within the editor. (Future changes may rename this property to ward off potential confusion around naming.)

Immutable#
This text cannot be altered without removing the entity annotation from the text. Entities with this mutability type are effectively atomic.

For instance, in a Facebook input, add a mention for a Page (e.g. Barack Obama). Then, either add a character within the mentioned text, or try to delete a character. Note that when adding or deleting characters, the entity is removed.

This mutability value is useful in cases where the text absolutely must match its relevant metadata, and may not be altered.

Mutable#
This text may be altered freely. For instance, link text is generally intended to be "mutable" since the href and linkified text are not tightly coupled.

Segmented#
Entities that are "segmented" are tightly coupled to their text in much the same way as "immutable" entities, but allow customization via deletion.

For instance, in a Facebook input, add a mention for a friend. Then, add a character to the text. Note that the entity is removed from the entire string, since your mentioned friend may not have their name altered in your text.

Next, try deleting a character or word within the mention. Note that only the section of the mention that you have deleted is removed. In this way, we can allow short names for mentions.

Modifying Entities#
Since DraftEntityInstance records are immutable, you may not update the data property on an instance directly.

Instead, two Entity methods are available to modify entities: mergeData and replaceData. The former allows updating data by passing in an object to merge, while the latter completely swaps in the new data object.

Using Entities for Rich Content#
The next article in this section covers the usage of decorator objects, which can be used to retrieve entities for rendering purposes.

The link editor example provides a working example of entity creation and decoration in use.`,
`Decorators
Inline and block styles aren't the only kind of rich styling that we might want to add to our editor. The Facebook comment input, for example, provides blue background highlights for mentions and hashtags.

To support flexibility for custom rich text, Draft provides a "decorator" system. The tweet example offers a live example of decorators in action.

CompositeDecorator#
The decorator concept is based on scanning the contents of a given ContentBlock for ranges of text that match a defined strategy, then rendering them with a specified React component.

You can use the CompositeDecorator class to define your desired decorator behavior. This class allows you to supply multiple DraftDecorator objects, and will search through a block of text with each strategy in turn.

Decorators are stored within the EditorState record. When creating a new EditorState object, e.g. via EditorState.createEmpty(), a decorator may optionally be provided.

Under the hood

When contents change in a Draft editor, the resulting EditorState object will evaluate the new ContentState with its decorator, and identify ranges to be decorated. A complete tree of blocks, decorators, and inline styles is formed at this time, and serves as the basis for our rendered output.

In this way, we always ensure that as contents change, rendered decorations are in sync with our EditorState.

In the "Tweet" editor example, for instance, we use a CompositeDecorator that searches for @-handle strings as well as hashtag strings:

const compositeDecorator = new CompositeDecorator([
  {
    strategy: handleStrategy,
    component: HandleSpan,
  },
  {
    strategy: hashtagStrategy,
    component: HashtagSpan,
  },
]);
This composite decorator will first scan a given block of text for @-handle matches, then for hashtag matches.

// Note: these aren't very good regexes, don't use them!
const HANDLE_REGEX = /splash @[ splash w]+/g;
const HASHTAG_REGEX = /splash#[splash w splash u0590-splashu05ff]+/g;

function handleStrategy(contentBlock, callback, contentState) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback, contentState) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}
The strategy functions execute the provided callback with the start and end values of the matching range of text.

Decorator Components#
For your decorated ranges of text, you must define a React component to use to render them. These tend to be plain span elements with CSS classes or styles applied to them.

In our current example, the CompositeDecorator object names HandleSpan and HashtagSpan as the components to use for decoration. These are basic stateless components:

const HandleSpan = props => {
  return (
    <span {...props} style={styles.handle}>
      {props.children}
    </span>
  );
};

const HashtagSpan = props => {
  return (
    <span {...props} style={styles.hashtag}>
      {props.children}
    </span>
  );
};
The Decorator Component will receive various pieces of metadata in props, including a copy of the contentState, the entityKey if there is one, and the blockKey. For a full list of props supplied to a Decorator Component see the DraftDecoratorComponentProps type.

Note that props.children is passed through to the rendered output. This is done to ensure that the text is rendered within the decorated span.

You can use the same approach for links, as demonstrated in our link example.

Beyond CompositeDecorator#
The decorator object supplied to an EditorState need only match the expectations of the DraftDecoratorType Flow type definition, which means that you can create any decorator classes you wish, as long as they match the expected type -- you are not bound by CompositeDecorator.

Setting new decorators#
Further, it is acceptable to set a new decorator value on the EditorState on the fly, during normal state propagation, through immutable means.

This means that during your app workflow, if your decorator becomes invalid or requires a modification, you can create a new decorator object (or use null to remove all decorations) and EditorState.set() to make use of the new decorator setting.

For example, if for some reason we wished to disable the creation of @-handle decorations while the user interacts with the editor, it would be fine to do the following:

function turnOffHandleDecorations(editorState) {
  const onlyHashtags = new CompositeDecorator([
    {
      strategy: hashtagStrategy,
      component: HashtagSpan,
    },
  ]);
  return EditorState.set(editorState, {decorator: onlyHashtags});
}
The ContentState for this editorState will be re-evaluated with the new decorator, and @-handle decorations will no longer be present in the next render pass.

Again, this remains memory-efficient due to data persistence across immutable objects.`,
`Key Bindings
The Editor component offers flexibility to define custom key bindings for your editor, via the keyBindingFn prop. This allows you to match key commands to behaviors in your editor component.

Defaults#
The default key binding function is getDefaultKeyBinding.

Since the Draft framework maintains tight control over DOM rendering and behavior, basic editing commands must be captured and routed through the key binding system.

getDefaultKeyBinding maps known OS-level editor commands to DraftEditorCommand strings, which then correspond to behaviors within component handlers.

For instance, Ctrl+Z (Win) and Cmd+Z (OSX) map to the 'undo' command, which then routes our handler to perform an EditorState.undo().

Customization#
You may provide your own key binding function to supply custom command strings.

It is recommended that your function use getDefaultKeyBinding as a fall-through case, so that your editor may benefit from default commands.

With your custom command string, you may then implement the handleKeyCommand prop function, which allows you to map that command string to your desired behavior. If handleKeyCommand returns 'handled', the command is considered handled. If it returns 'not-handled', the command will fall through.

Example#
Let's say we have an editor that should have a "Save" mechanism to periodically write your contents to the server as a draft copy.

First, let's define our key binding function:

import {getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';
const {hasCommandModifier} = KeyBindingUtil;

function myKeyBindingFn(e: SyntheticKeyboardEvent): string | null {
  if (e.keyCode === 83 /* S key */ && hasCommandModifier(e)) {
    return 'myeditor-save';
  }
  return getDefaultKeyBinding(e);
}
Our function receives a key event, and we check whether it matches our criteria: it must be an S key, and it must have a command modifier, i.e. the command key for OSX, or the control key otherwise.

If the command is a match, return a string that names the command. Otherwise, fall through to the default key bindings.

In our editor component, we can then make use of the command via the handleKeyCommand prop:

import {Editor} from 'draft-js';
class MyEditor extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  // ...

  handleKeyCommand(command: string): DraftHandleValue {
    if (command === 'myeditor-save') {
      // Perform a request to save your contents, set
      // a new editorState, etc.
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        keyBindingFn={myKeyBindingFn}
        ...
      />
    );
  }
}
The 'myeditor-save' command can be used for our custom behavior, and returning 'handled' instructs the editor that the command has been handled and no more work is required.

By returning 'not-handled' in all other cases, default commands are able to fall through to default handler behavior.`,
`Managing Focus
Managing text input focus can be a tricky task within React components. The browser focus/blur API is imperative, so setting or removing focus via declarative means purely through render() tends to feel awkward and incorrect, and it requires challenging attempts at controlling focus state.

With that in mind, at Facebook we often choose to expose focus() methods on components that wrap text inputs. This breaks the declarative paradigm, but it also simplifies the work needed for engineers to successfully manage focus behavior within their apps.

The Editor component follows this pattern, so there is a public focus() method available on the component. This allows you to use a ref within your higher-level component to call focus() directly on the component when needed.

The event listeners within the component will observe focus changes and propagate them through onChange as expected, so state and DOM will remain correctly in sync.

Translating container clicks to focus#
Your higher-level component will most likely wrap the Editor component in a container of some kind, perhaps with padding to style it to match your app.

By default, if a user clicks within this container but outside of the rendered Editor while attempting to focus the editor, the editor will have no awareness of the click event. It is therefore recommended that you use a click listener on your container component, and use the focus() method described above to apply focus to your editor.

The plaintext editor example, for instance, uses this pattern.`,
`Block Styling
Within Editor, some block types are given default CSS styles to limit the amount of basic configuration required to get engineers up and running with custom editors.

By defining a blockStyleFn prop function for an Editor, it is possible to specify classes that should be applied to blocks at render time.

DraftStyleDefault.css#
The Draft library includes default block CSS styles within DraftStyleDefault.css. (Note that the annotations on the CSS class names are artifacts of Facebook's internal CSS module management system.)

These CSS rules are largely devoted to providing default styles for list items, without which callers would be responsible for managing their own default list styles.

blockStyleFn#
The blockStyleFn prop on Editor allows you to define CSS classes to style blocks at render time. For instance, you may wish to style 'blockquote' type blocks with fancy italic text.

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
}

// Then...
import {Editor} from 'draft-js';
class EditorWithFancyBlockquotes extends React.Component {
  render() {
    return <Editor ... blockStyleFn={myBlockStyleFn} />;
  }
}
Then, in your own CSS:

Copy
.superFancyBlockquote {
  color: #999;
  font-family: 'Hoefler Text', Georgia, serif;
  font-style: italic;
  text-align: center;
}`,
`Custom Block Rendering
This article discusses how to customize Draft default block rendering. The block rendering is used to define supported block types and their respective renderers, as well as converting pasted content to known Draft block types.

When pasting content, or when calling convertFromHTML, Draft will convert pasted content to the respective block rendering type by matching the Draft block render map with the matched tag.

Draft default block render map#
HTML element	Draft block type
<h1/>	header-one
<h2/>	header-two
<h3/>	header-three
<h4/>	header-four
<h5/>	header-five
<h6/>	header-six
<blockquote/>	blockquote
<pre/>	code-block
<figure/>	atomic
<li/>	unordered-list-item,ordered-list-item**
<div/>	unstyled***
** - Block type will be based on the parent <ul/> or <ol/>

*** - Any block that is not recognized by the block rendering mapping will be treated as unstyled

Configuring block render map#
Draft's default block render map can be overwritten by passing an Immutable Map to the editor blockRender props.

example of overwriting default block render map:

// The example below deliberately only allows
// 'heading-two' as the only valid block type and
// updates the unstyled element to also become a h2.
const blockRenderMap = Immutable.Map({
  'header-two': {
    element: 'h2'
  },
  'unstyled': {
    element: 'h2'
  }
});

class RichEditor extends React.Component {
  render() {
    return (
      <Editor
        ...
        blockRenderMap={blockRenderMap}
      />
    );
  }
}
There are cases where instead of overwriting the defaults, we only want to add new block types. This can be done by using the DefaultDraftBlockRenderMap reference to create a new blockRenderMap

example of extending default block render map:

const blockRenderMap = Immutable.Map({
  'section': {
    element: 'section'
  }
});

// Include 'paragraph' as a valid block and updated the unstyled element but
// keep support for other draft default block types
const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);

class RichEditor extends React.Component {
  render() {
    return (
      <Editor
        ...
        blockRenderMap={extendedBlockRenderMap}
      />
    );
  }
}
When Draft parses pasted HTML, it maps from HTML elements back into Draft block types. If you want to specify other HTML elements that map to a particular block type, you can add the array aliasedElements to the block config.

example of unstyled block type alias usage:

'unstyled': {
  element: 'div',
  aliasedElements: ['p'],
}
Custom block wrappers#
By default, the html element is used to wrap block types. However, a react component can also be provided to the blockRenderMap to wrap the EditorBlock.

During pasting, or when calling convertFromHTML, the html will be scanned for matching tag elements. A wrapper will be used when there is a definition for it on the blockRenderMap to wrap that particular block type. For example:

Draft uses wrappers to wrap <li/> inside either <ol/> or <ul/>, but wrappers can also be used to wrap any other custom block type.

example of extending default block render map to use a react component for a custom block:

Copy
class MyCustomBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='MyCustomBlock'>
        {/* here, this.props.children contains a <section> container, as that was the matching element */}
        {this.props.children}
      </div>
    );
  }
}

const blockRenderMap = Immutable.Map({
  'MyCustomBlock': {
    // element is used during paste or html conversion to auto match your component;
    // it is also retained as part of this.props.children and not stripped out
    element: 'section',
    wrapper: <MyCustomBlock />,
  }
});

// keep support for other draft default block types and add our myCustomBlock type
const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);

class RichEditor extends React.Component {
  ...
  render() {
    return (
      <Editor
        ...
        blockRenderMap={extendedBlockRenderMap}
      />
    );
  }
}`,
`Custom Block Components
Draft is designed to solve problems for straightforward rich text interfaces like comments and chat messages, but it also powers richer editor experiences like Facebook Notes.

Users can embed images within their Notes, either loading from their existing Facebook photos or by uploading new images from the desktop. To that end, the Draft framework supports custom rendering at the block level, to render content like rich media in place of plain text.

The TeX editor in the Draft repository provides a live example of custom block rendering, with TeX syntax translated on the fly into editable embedded formula rendering via the KaTeX library.

A media example is also available, which showcases custom block rendering of audio, image, and video.

By using a custom block renderer, it is possible to introduce complex rich interactions within the frame of your editor.

Custom Block Components#
Within the Editor component, one may specify the blockRendererFn prop. This prop function allows a higher-level component to define custom React rendering for ContentBlock objects, based on block type, text, or other criteria.

For instance, we may wish to render ContentBlock objects of type 'atomic' using a custom MediaComponent.

function myBlockRenderer(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'atomic') {
    return {
      component: MediaComponent,
      editable: false,
      props: {
        foo: 'bar',
      },
    };
  }
}

// Then...
import {Editor} from 'draft-js';
class EditorWithMedia extends React.Component {
  ...
  render() {
    return <Editor ... blockRendererFn={myBlockRenderer} />;
  }
}
If no custom renderer object is returned by the blockRendererFn function, Editor will render the default EditorBlock text block component.

The component property defines the component to be used, while the optional props object includes props that will be passed through to the rendered custom component via the props.blockProps sub property object. In addition, the optional editable property determines whether the custom component is contentEditable.

It is strongly recommended that you use editable: false if your custom component will not contain text.

If your component contains text as provided by your ContentState, your custom component should compose an EditorBlock component. This will allow the Draft framework to properly maintain cursor behavior within your contents.

By defining this function within the context of a higher-level component, the props for this custom component may be bound to that component, allowing instance methods for custom component props.

Defining custom block components#
Within MediaComponent, the most likely use case is that you will want to retrieve entity metadata to render your custom block. You may apply an entity key to the text within a 'atomic' block during EditorState management, then retrieve the metadata for that key in your custom component render() code.

class MediaComponent extends React.Component {
  render() {
    const {block, contentState} = this.props;
    const {foo} = this.props.blockProps;
    const data = contentState.getEntity(block.getEntityAt(0)).getData();
    // Return a <figure> or some other content using this data.
  }
}
The ContentBlock object and the ContentState record are made available within the custom component, along with the props defined at the top level. By extracting entity information from the ContentBlock and the Entity map, you can obtain the metadata required to render your custom component.

Retrieving the entity from the block is admittedly a bit of an awkward API, and is worth revisiting.

Recommendations and other notes#
If your custom block renderer requires mouse interaction, it is often wise to temporarily set your Editor to readOnly={true} during this interaction. In this way, the user does not trigger any selection changes within the editor while interacting with the custom block. This should not be a problem with respect to editor behavior, since interacting with your custom block component is most likely mutually exclusive from text changes within the editor.

The recommendation above is especially important for custom block renderers that involve text input, like the TeX editor example.

It is also worth noting that within the Facebook Notes editor, we have not tried to perform any specific SelectionState rendering or management on embedded media, such as rendering a highlight on an embedded photo when selecting it. This is in part because of the rich interaction provided on the media itself, with resize handles and other controls exposed to mouse behavior.

Since an engineer using Draft has full awareness of the selection state of the editor and full control over native Selection APIs, it would be possible to build selection behavior on static embedded media if desired. So far, though, we have not tried to solve this at Facebook, so we have not packaged solutions for this use case into the Draft project at this time.`,
`Complex Inline Styles
Within your editor, you may wish to provide a wide variety of inline style behavior that goes well beyond the bold/italic/underline basics. For instance, you may want to support variety with color, font families, font sizes, and more. Further, your desired styles may overlap or be mutually exclusive.

The Rich Editor and Colorful Editor examples demonstrate complex inline style behavior in action.

Model#
Within the Draft model, inline styles are represented at the character level, using an immutable OrderedSet to define the list of styles to be applied to each character. These styles are identified by string. (See CharacterMetadata for details.)

For example, consider the text "Hello world". The first six characters of the string are represented by the empty set, OrderedSet(). The final five characters are represented by OrderedSet.of('BOLD'). For convenience, we can think of these OrderedSet objects as arrays, though in reality we aggressively reuse identical immutable objects.

In essence, our styles are:

[
  [], // H
  [], // e
  // ...
  ['BOLD'], // w
  ['BOLD'], // o
  // etc.
];
Overlapping Styles#
Now let's say that we wish to make the middle range of characters italic as well: Hello world. This operation can be performed via the Modifier API.

The end result will accommodate the overlap by including 'ITALIC' in the relevant OrderedSet objects as well.

[
  [], // H
  [], // e
  ['ITALIC'], // l
  // ...
  ['BOLD', 'ITALIC'], // w
  ['BOLD', 'ITALIC'], // o
  ['BOLD'], // r
  // etc.
];
When determining how to render inline-styled text, Draft will identify contiguous ranges of identically styled characters and render those characters together in styled span nodes.

Mapping a style string to CSS#
By default, Editor provides support for a basic list of inline styles: 'BOLD', 'ITALIC', 'UNDERLINE', and 'CODE'. These are mapped to plain CSS style objects, which are used to apply styles to the relevant ranges.

For your editor, you may define custom style strings to include with these defaults, or you may override the default style objects for the basic styles.

Within your Editor use case, you may provide the customStyleMap prop to define your style objects. (See Colorful Editor for a live example.)

For example, you may want to add a 'STRIKETHROUGH' style. To do so, define a custom style map:

import {Editor} from 'draft-js';

const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
  },
};

class MyEditor extends React.Component {
  // ...
  render() {
    return (
      <Editor
        customStyleMap={styleMap}
        editorState={this.state.editorState}
        ...
      />
    );
  }
}
When rendered, the textDecoration: line-through style will be applied to all character ranges with the STRIKETHROUGH style.`,
`ested Lists
The Draft framework provides support for nested lists, as demonstrated in the Facebook Notes editor. There, you can use Tab and Shift+Tab to add or remove depth to a list item.

Implementation#
The RichUtils module provides a handy onTab method that manages this behavior, and should be sufficient for most nested list needs. You can use the onTab prop on your Editor to make use of this utility.

By default, styling is applied to list items to set appropriate spacing and list style behavior, via DraftStyleDefault.css.

Note that there is currently no support for handling depth for blocks of any type except 'ordered-list-item' and 'unordered-list-item'.`,
`Text Direction
Facebook supports dozens of languages, which means that our text inputs need to be flexible enough to handle considerable variety.

For example, we want input behavior for RTL languages such as Arabic and Hebrew to meet users' expectations. We also want to be able to support editor contents with a mixture of LTR and RTL text.

To that end, Draft uses a bidi algorithm to determine appropriate text alignment and direction on a per-block basis.

Text is rendered with an LTR or RTL direction automatically as the user types. You should not need to do anything to set direction yourself.

Text Alignment#
While languages are automatically aligned to the left or right during composition, as defined by the content characters, it is also possible for engineers to manually set the text alignment for an editor's contents.

This may be useful, for instance, if an editor requires strictly centered contents, or needs to keep text aligned flush against another UI element.

The Editor component therefore provides a textAlignment prop, with a small set of values: 'left', 'center', and 'right'. Using these values, the contents of your editor will be aligned to the specified direction regardless of language and character set.`,
`EditorState Race Conditions
Draft Editor is a controlled input component (you can read about this in detail in the API Basics section), meaning that changes made to the Editor state are propagated upwards through onChange and it's up to the app to feed it back to the Editor component.

This cycle usually looks like:

...
this.onChange = function(editorState) {
  this.setState({editorState: editorState});
}
...
<Editor
  editorState={this.state.editorState}
  onChange={this.onChange}
  placeholder="Enter some text..."
/>
Different browser events can trigger the Editor to create a new state and call onChange. For instance, when the user pastes text into it, Draft parses the new content and creates the necessary data structure to represent it.

This cycle works great, however, it is an asynchronous operation because of the setState call. This introduces a delay between setting the state and rendering the Editor with the new state. During this time period other JS code can be executed.

Race condition diagram 1

Non-atomic operations like this can potentially introduce race conditions. Here's an example: Suppose you want to remove all the text styles that come from the paste. This can be implemented by listening to the onPaste event and removing all styles from the EditorState:

this.onPaste = function() {
  this.setState({
    editorState: removeEditorStyles(this.state.editorState),
  });
};
However, this won't work as expected. You now have two event handlers that set a new EditorState in the exact same browser event. Since the event handlers will run one after the other only the last setState will prevail. Here's how it looks like in the JS timeline:

Race condition diagram 2

As you can see, since setState is an asynchronous operation, the second setState will override whatever it was set on the first one making the Editor lose all the contents from the pasted text.

You can observe and explore the race condition in this running example. The example also has logging to highlight the JS timeline so make sure to open the developer tools.

As a rule of thumb avoid having different event handlers for the same event that manipulate the EditorState. Using setTimeout to run setState might also land you in the same situation. Anytime you feel you're “losing state” make sure you're not overriding it before the Editor re-rendering.

Best Practices#
Now that you understand the problem, what can you do to avoid it? In general be mindful of where you're getting the EditorState from. If you're using a local one (stored in this.state) then there's the potential for it to not be up to date. To minimize this problem Draft offers the latest EditorState instance in most of its callback functions. In your code you should use the provided EditorState instead of your local one to make sure you're basing your changes on the latest one. Here's a list of supported callbacks on the Editor:

handleReturn(event, editorState)
handleKeyCommand(command, editorState)
handleBeforeInput(chars, editorState)
handlePastedText(text, html, editorState)
The paste example can then be re-written in a race condition free way by using these methods:

this.handlePastedText = (text, styles, editorState) => {
  this.setState({
    editorState: removeEditorStyles(text, editorState),
  });
};
//...
<Editor
  editorState={this.state.editorState}
  onChange={this.onChange}
  handlePastedText={this.handlePastedText}
  placeholder="Enter some text..."
/>;
With handlePastedText you can implement the paste behavior by yourself.

NOTE: If you need to have this behavior in your Editor, you can achieve it by setting the Editor's stripPastedStyles property to true.`,
`Issues and Pitfalls
This article addresses some known issues with the Draft editor framework, as well as some common pitfalls that we have encountered while using the framework at Facebook.

Common Pitfalls#
Delayed state updates#
A common pattern for unidirectional data management is to batch or otherwise delay updates to data stores, using a setTimeout or another mechanism. Stores are updated, then emit changes to the relevant React components to propagate re-rendering.

When delays are introduced to a React application with a Draft editor, however, it is possible to cause significant interaction problems. This is because the editor expects immediate updates and renders that stay in sync with the user's typing behavior. Delays can prevent updates from being propagated through the editor component tree, which can cause a disconnect between keystrokes and updates.

To avoid this while still using a delaying or batching mechanism, you should separate the delay behavior from your Editor state propagation. That is, you must always allow your EditorState to propagate to your Editor component without delay, and independently perform batched updates that do not affect the state of your Editor component.

Missing Draft.css#
The Draft framework includes a handful of CSS resources intended for use with the editor, available in a single file via the build, Draft.css.

This CSS should be included when rendering the editor, as these styles set defaults for text alignment, spacing, and other important features. Without it, you may encounter issues with block positioning, alignment, and cursor behavior.

If you choose to write your own CSS independent of Draft.css, you will most likely need to replicate much of the default styling.

Known Issues#
Custom OSX Keybindings#
Because the browser has no access to OS-level custom keybindings, it is not possible to intercept edit intent behaviors that do not map to default system key bindings.

The result of this is that users who use custom keybindings may encounter issues with Draft editors, since their key commands may not behave as expected.

Browser plugins/extensions#
As with any React application, browser plugins and extensions that modify the DOM can cause Draft editors to break.

Grammar checkers, for instance, may modify the DOM within contentEditable elements, adding styles like underlines and backgrounds. Since React cannot reconcile the DOM if the browser does not match its expectations, the editor state may fail to remain in sync with the DOM.

Certain old ad blockers are also known to break the native DOM Selection API -- a bad idea no matter what! -- and since Draft depends on this API to maintain controlled selection state, this can cause trouble for editor interaction.

IME and Internet Explorer#
As of IE11, Internet Explorer demonstrates notable issues with certain international input methods, most significantly Korean input.

Polyfills#
Some of Draft's code and that of its dependencies make use of ES2015 language features. Syntax features like class are compiled away via Babel when Draft is built, but it does not include polyfills for APIs now included in many modern browsers (for instance: String.prototype.startsWith). We expect your browser supports these APIs natively or with the assistance of a polyfill. One such polyfill is es6-shim, which we use in many examples but you are free to use babel-polyfill if that's more your scene.

When using either polyfill/shim, you should include it as early as possible in your application's entrypoint (at the very minimum, before you import Draft). For instance, using create-react-app and targeting IE11, src/index.js is probably a good spot to import your polyfill:

src/index.js

import 'babel-polyfill';
// or
import 'es6-shim';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
Mobile Not Yet Supported#
Draft.js is moving towards full mobile support, but does not officially support mobile browsers at this point. There are some known issues affecting Android and iOS - see issues tagged 'android' or 'ios' for the current status.`,
`Generator Functions: Functions that can return multiple values at different time interval as per the user demands, and can manage its internal state are generator functions. A function becomes a Generator function if it uses the function* syntax. They are different from normal functions because normal functions completion in a single run, whereas we can pause and resume the generator function.

Note: When generator functions are executed, it returns a new Generator object.

functionality:  yield and await can both be used to write asynchronous code that “waits”, which means code that looks as if it was synchronous, even though it really is asynchronous.

await: This is an operator which used to wait for a Promise. In our regular JavaScript code, we use it inside the async function, and it can be used on its own with JavaScript modules.

When we use await keyword in an expression so, the async function execution will get paused until the promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfilment. When resumed, the value of the await expression is that of the fulfilled Promise.`,
];